#!/usr/bin/env node
/**
 * Reorganizes voynich-svelte/src/lib/lexicon-data.js so that every non-stem
 * entry lives in an array whose name reflects the FIRST morph part.
 *
 * Naming rules:
 *   first-part ends with "-"  →  PREF_<PART>   (e.g. "t-" → PREF_T)
 *   otherwise                 →  SYNTAX_<PART>  (e.g. "ot" → SYNTAX_OT)
 *
 * Groups with fewer than --min-size entries are folded into SYNTAX_MISC.
 * PREF_ groups and SYNTAX_DUPLICATES are always kept as their own arrays.
 *
 * Usage:
 *   node scripts/reorganize-lexicon.js                    # dry-run
 *   node scripts/reorganize-lexicon.js --min-size=3       # fold groups < 3
 *   node scripts/reorganize-lexicon.js --write            # overwrite file
 *   node scripts/reorganize-lexicon.js --min-size=3 --write
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __dir  = dirname(fileURLToPath(import.meta.url));
const TARGET = resolve(__dir, '../voynich-svelte/src/lib/lexicon-data.js');
const DRY      = !process.argv.includes('--write');
const MIN_SIZE = parseInt(
  (process.argv.find(a => a.startsWith('--min-size=')) ?? '--min-size=3').split('=')[1], 10
);

// ── 1. Import current data ────────────────────────────────────────────────────

const mod = await import(pathToFileURL(TARGET).href);
const { STEM_WORDS, LEXICON } = mod;

// Pool every non-stem entry exactly once (preserves insertion order = original file order)
const seen    = new Set();
const derived = [];
for (const e of LEXICON) {
  if (STEM_WORDS.includes(e)) continue;
  // use eva+morph as identity key (handles the dain duplicate intentionally)
  const id = e.eva + '|' + e.morph;
  if (!seen.has(id)) { seen.add(id); derived.push(e); }
}

// ── 2. Group by first morph part ─────────────────────────────────────────────

function firstPart(morph) {
  if (!morph) return '(none)';
  const raw = morph.split(' + ')[0].trim();
  return raw.replace(/\s*\(.*$/, '').trim();   // strip trailing parenthetical
}

/** "t-" → "PREF_T",  "ot" → "SYNTAX_OT",  "__misc__" → "SYNTAX_MISC" */
function arrayName(part) {
  if (part === '__misc__') return 'SYNTAX_MISC';
  const upper = part.toUpperCase().replace(/-/g, '');
  return part.endsWith('-') ? `PREF_${upper}` : `SYNTAX_${upper}`;
}

const groups = new Map();
for (const entry of derived) {
  const key = firstPart(entry.morph);
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key).push(entry);
}

// Sort: PREF_ arrays first (alphabetically), then SYNTAX_ arrays
const allSorted = [...groups.entries()].sort(([a], [b]) => {
  const aP = a.endsWith('-'), bP = b.endsWith('-');
  if (aP !== bP) return aP ? -1 : 1;
  return a.localeCompare(b);
});

// Fold small SYNTAX_ groups into SYNTAX_MISC.
// PREF_ groups and SYNTAX_DUPLICATES always keep their own arrays.
const miscEntries = [];
const sorted      = [];
for (const [part, entries] of allSorted) {
  const name = arrayName(part);
  if (!name.startsWith('PREF_') && name !== 'SYNTAX_DUPLICATES' && entries.length < MIN_SIZE) {
    miscEntries.push(...entries);
  } else {
    sorted.push([part, entries]);
  }
}
if (miscEntries.length > 0) {
  // Insert SYNTAX_MISC just before SYNTAX_DUPLICATES (or at the end)
  const dupIdx = sorted.findIndex(([p]) => arrayName(p) === 'SYNTAX_DUPLICATES');
  const pos    = dupIdx === -1 ? sorted.length : dupIdx;
  sorted.splice(pos, 0, ['__misc__', miscEntries]);
}

// ── 3. Serialize entries ──────────────────────────────────────────────────────

function fmtArr(arr) {
  return arr.length === 0
    ? '[]'
    : `["${arr.join('", "')}"]`;
}

function fmtEntry(e) {
  const ev  = pad(JSON.stringify(e.eva),    14);
  const mo  = pad(JSON.stringify(e.morph),  32);
  const hb  = pad(JSON.stringify(e.heb),    22);
  const de  = pad(JSON.stringify(e.de),     60);
  const ev2 = pad(JSON.stringify(e.evidence ?? ''), 44);
  const cs  = e.confidenceStars ?? 0;
  const ra  = fmtArr(e.rulesApplied ?? []);
  return `  { eva: ${ev} morph: ${mo} heb: ${hb} de: ${de} evidence: ${ev2} confidenceStars: ${cs}, rulesApplied: ${ra} },`;
}

function pad(s, n) { return (s + ',').padEnd(n); }

// ── 4. Build replacement section ─────────────────────────────────────────────

const arrayNames = [];
const lines      = [];

for (const [part, entries] of sorted) {
  const name = arrayName(part);
  arrayNames.push(name);
  lines.push(`export const ${name} = [`);
  for (const e of entries) lines.push(fmtEntry(e));
  lines.push(`];\n`);
}

// LEXICON spread (STEM_WORDS first, then grouped arrays, then SYNTAX_DUPLICATES last)
const spreadNames = arrayNames.filter(n => n !== 'SYNTAX_DUPLICATES');
const hasDup      = arrayNames.includes('SYNTAX_DUPLICATES');

const lexiconSpread = [
  'export const LEXICON = [',
  '  ...STEM_WORDS,',
  ...spreadNames.map(n => `  ...${n},`),
  ...(hasDup ? ['  ...SYNTAX_DUPLICATES,'] : []),
  '];',
].join('\n');

// ── 5. Read source file and splice in new section ────────────────────────────

const src = readFileSync(TARGET, 'utf8');

// The replaceable block: everything from the first PREF_/SYNTAX_ export
// up to (but not including) the LEXICON export.
const blockStart = /^export const (?:PREF|SYNTAX)_/m;
const lexiconMark = /^export const LEXICON\b/m;

const startIdx  = src.search(blockStart);
const lexIdx    = src.search(lexiconMark);

if (startIdx === -1 || lexIdx === -1) {
  console.error('Could not find expected markers in lexicon-data.js');
  process.exit(1);
}

const before = src.slice(0, startIdx);
const after  = src.slice(lexIdx).replace(/^export const LEXICON = \[[\s\S]*?\];/m, lexiconSpread);

const output = before + lines.join('\n') + '\n' + after;

// ── 6. Output ─────────────────────────────────────────────────────────────────

if (DRY) {
  console.log(`=== DRY RUN (--min-size=${MIN_SIZE}) — pass --write to apply ===\n`);
  console.log(`Arrays generated (${arrayNames.length}):`);
  for (const [part, entries] of sorted) {
    const label = part === '__misc__'
      ? `  ${'SYNTAX_MISC'.padEnd(24)} ${entries.length} entries  (folded from groups < ${MIN_SIZE})`
      : `  ${arrayName(part).padEnd(24)} ${entries.length} entries  (first-part: "${part}")`;
    console.log(label);
  }
  if (miscEntries.length > 0) {
    console.log(`\n  Folded into SYNTAX_MISC:`);
    for (const [part, entries] of allSorted) {
      if (!sorted.find(([p]) => p === part)) {
        console.log(`    ${arrayName(part).padEnd(24)} ${entries.length}  →  ${entries.map(e => e.eva).join(', ')}`);
      }
    }
  }
  console.log('\nLEXICON spread order:');
  console.log('  STEM_WORDS');
  for (const n of spreadNames) console.log(`  ${n}`);
  if (hasDup) console.log('  SYNTAX_DUPLICATES');
} else {
  writeFileSync(TARGET, output, 'utf8');
  console.log(`Wrote ${TARGET}`);
  console.log(`${arrayNames.length} arrays, ${derived.length} derived entries.`);
}
