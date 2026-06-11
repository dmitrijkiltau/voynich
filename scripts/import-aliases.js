#!/usr/bin/env node
/**
 * Adds alias entries to LEXICON_ALIASES in lexicon-data.js.
 * The input JSON must have a "LEXICON_ALIASES" key mapping alias → canonical eva.
 * Trailing commas are tolerated.
 *
 * Invalid aliases (duplicate, unknown canonical) are skipped with a warning.
 *
 * Usage:
 *   node scripts/import-aliases.js aliases.json          # dry-run
 *   node scripts/import-aliases.js aliases.json --write  # apply changes
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir  = dirname(fileURLToPath(import.meta.url));
const TARGET = resolve(__dir, '../voynich-svelte/src/lib/lexicon-data.js');
const DRY    = !process.argv.includes('--write');

const jsonArg = process.argv.slice(2).find(a => !a.startsWith('--'));
if (!jsonArg) {
  console.error('Usage: node scripts/import-aliases.js <aliases.json> [--write]');
  process.exit(1);
}

let rawParsed;
try {
  const text    = readFileSync(resolve(process.cwd(), jsonArg), 'utf-8');
  const cleaned = text.replace(/,(\s*[\]}])/g, '$1');
  rawParsed     = JSON.parse(cleaned);
} catch (e) {
  console.error(`Failed to parse JSON from "${jsonArg}": ${e.message}`);
  process.exit(1);
}

if (!rawParsed?.LEXICON_ALIASES || typeof rawParsed.LEXICON_ALIASES !== 'object' || Array.isArray(rawParsed.LEXICON_ALIASES)) {
  console.error('JSON must have a "LEXICON_ALIASES" object at the top level.');
  process.exit(1);
}

const toAdd = rawParsed.LEXICON_ALIASES;

// ── Read current state ────────────────────────────────────────────────────────

const src = readFileSync(TARGET, 'utf-8');

// All known eva values across every array
const allEva = new Set();
for (const m of src.matchAll(/\beva:\s*"([^"]+)"/g)) allEva.add(m[1]);

// Existing alias keys
const existingAliases = new Set();
let scanning = false;
for (const line of src.split('\n')) {
  if (!scanning) {
    if (line.includes('LEXICON_ALIASES')) scanning = true;
  } else {
    if (line.trim() === '});') break;
    const m = line.match(/^\s+(\w+):/);
    if (m) existingAliases.add(m[1]);
  }
}

// ── Validate ──────────────────────────────────────────────────────────────────

const valid = [];
for (const [alias, canonical] of Object.entries(toAdd)) {
  if (typeof canonical !== 'string' || !canonical) {
    console.warn(`⚠ "${alias}": canonical must be a non-empty string — skipping`);
    continue;
  }
  if (existingAliases.has(alias)) {
    console.warn(`⚠ "${alias}": already exists in LEXICON_ALIASES — skipping`);
    continue;
  }
  if (!allEva.has(canonical)) {
    console.warn(`⚠ "${alias}" → "${canonical}": canonical eva not found in lexicon — skipping`);
    continue;
  }
  valid.push([alias, canonical]);
}

if (valid.length === 0) {
  console.error('No valid aliases to add.');
  process.exit(1);
}

// ── Insert before closing }); of LEXICON_ALIASES ─────────────────────────────

const lines = src.split('\n');
const out   = [];
scanning    = false;

for (const line of lines) {
  if (!scanning) {
    out.push(line);
    if (line.includes('LEXICON_ALIASES')) scanning = true;
  } else {
    if (line.trim() === '});') {
      for (const [alias, canonical] of valid) {
        const pad = ' '.repeat(Math.max(1, 9 - alias.length));
        out.push(`\t${alias}:${pad}"${canonical}",`);
      }
      out.push(line);
      scanning = false;
    } else {
      out.push(line);
    }
  }
}

// ── Report ────────────────────────────────────────────────────────────────────

if (DRY) {
  console.log(`Would add ${valid.length} alias(es) to LEXICON_ALIASES:`);
  for (const [a, c] of valid) console.log(`  ${a} → ${c}`);
  console.log('\n=== DRY RUN — pass --write to apply ===');
} else {
  writeFileSync(TARGET, out.join('\n'), 'utf-8');
  console.log(`Added ${valid.length} alias(es) to LEXICON_ALIASES.`);
  console.log(`Wrote ${TARGET}`);
}
