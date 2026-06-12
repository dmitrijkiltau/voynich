#!/usr/bin/env node
/**
 * Imports one or more entries from a JSON file into lexicon-data.js.
 * Each entry must include "_target" (the array name) plus its fields.
 * Accepts a single object or an array of objects.
 * Trailing commas in JSON are tolerated.
 *
 * Allowed targets and their permitted fields are derived at runtime
 * directly from the current state of lexicon-data.js.
 *
 * Usage:
 *   node scripts/import-lexicon.js entries.json          # dry-run
 *   node scripts/import-lexicon.js entries.json --write  # apply changes
 *
 * After importing, run:
 *   node scripts/sort-lexicon.js --write
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir  = dirname(fileURLToPath(import.meta.url));
const TARGET = resolve(__dir, '../voynich-svelte/src/lib/lexicon-data.js');
const DRY    = !process.argv.includes('--write');

// ── Validators for each known field ──────────────────────────────────────────

const FIELD_TYPES = {
  eva:             v => typeof v === 'string' && v.length > 0,
  heb:             v => typeof v === 'string' && v.length > 0,
  de:              v => typeof v === 'string' && v.length > 0,
  morph:           v => typeof v === 'string' && v.length > 0,
  layer:           v => typeof v === 'string',
  confidenceStars: v => Number.isInteger(v) && v >= 1 && v <= 5,
  rulesApplied:    v => Array.isArray(v) && v.every(r => typeof r === 'string'),
};

const REQUIRED = ['eva', 'heb', 'de', 'rulesApplied'];

// Canonical field order for formatting
const FIELD_ORDER = ['eva', 'morph', 'heb', 'de', 'layer', 'confidenceStars', 'rulesApplied'];

// Arrays that must not be written to directly (they are derived/spread/alias)
const NON_WRITABLE = new Set(['LEXICON', 'LEXICON_DERIVED', 'LEXICON_ALIASES']);

// ── Scan lexicon-data.js to discover writable arrays and their field sets ─────

function discoverArrays(src) {
  const lines  = src.split('\n');
  // name -> { fields: Set<string>, evaValues: Set<string> }
  const result = new Map();
  let inArray = false, arrName = '', fields = new Set(), evaValues = new Set();

  for (const line of lines) {
    if (!inArray) {
      if (line.trimEnd().endsWith('[')) {
        const m = line.match(/export const (\w+)/);
        if (m && !NON_WRITABLE.has(m[1])) {
          inArray = true; arrName = m[1];
          fields = new Set(); evaValues = new Set();
        }
      }
    } else {
      if (line.trim() === '];') {
        result.set(arrName, { fields, evaValues });
        inArray = false; arrName = '';
      } else {
        // Collect field names that appear before a colon+space in this line
        // Only recognise names we actually know about (avoids false positives inside strings)
        for (const name of Object.keys(FIELD_TYPES)) {
          if (new RegExp(`\\b${name}:\\s`).test(line)) fields.add(name);
        }
        // Collect existing eva values to detect duplicates
        const evaMatch = line.match(/\beva:\s*"([^"]+)"/);
        if (evaMatch) evaValues.add(evaMatch[1]);
      }
    }
  }
  return result;
}

// ── Format a single entry as a source line ────────────────────────────────────

function fmtVal(v) {
  if (Array.isArray(v)) return `[${v.map(s => JSON.stringify(s)).join(', ')}]`;
  if (typeof v === 'string') return JSON.stringify(v);
  return String(v);
}

function formatEntry(entry) {
  const fields = FIELD_ORDER.filter(k => k in entry);
  return '  { ' + fields.map(k => `${k}: ${fmtVal(entry[k])}`).join(', ') + ' },';
}

// ── Parse input JSON ──────────────────────────────────────────────────────────

const jsonArg = process.argv.slice(2).find(a => !a.startsWith('--'));
if (!jsonArg) {
  console.error('Usage: node scripts/import-lexicon.js <entries.json> [--write]');
  process.exit(1);
}

let rawParsed;
try {
  const text    = readFileSync(resolve(process.cwd(), jsonArg), 'utf-8');
  const cleaned = text.replace(/,(\s*[\]}])/g, '$1'); // tolerate trailing commas
  rawParsed     = JSON.parse(cleaned);
} catch (e) {
  console.error(`Failed to parse JSON from "${jsonArg}": ${e.message}`);
  process.exit(1);
}

const inputEntries = Array.isArray(rawParsed) ? rawParsed : [rawParsed];

// ── Load current state of lexicon-data.js ────────────────────────────────────

const src     = readFileSync(TARGET, 'utf-8');
const arrays  = discoverArrays(src);

// ── Validate every entry ──────────────────────────────────────────────────────

function validate(raw) {
  const errors = [];
  const { _target, ...entry } = raw;

  if (!_target) { errors.push('missing "_target"'); return { errors }; }
  if (!arrays.has(_target)) {
    const valid = [...arrays.keys()].join(', ');
    errors.push(`unknown target "${_target}". Valid targets: ${valid}`);
    return { errors };
  }

  const { fields: allowedFields, evaValues } = arrays.get(_target);
  // Always allow the required fields even if the array happens to be empty
  const effective = new Set([...REQUIRED, ...allowedFields]);

  // Required fields
  for (const f of REQUIRED) {
    if (!(f in entry)) errors.push(`missing required field "${f}"`);
  }

  for (const [key, val] of Object.entries(entry)) {
    // Unknown field for this array
    if (!effective.has(key)) {
      errors.push(`field "${key}" is not used in ${_target} (allowed: ${[...effective].join(', ')})`);
      continue;
    }
    // Wrong type
    if (key in FIELD_TYPES && !FIELD_TYPES[key](val)) {
      errors.push(`field "${key}" has invalid value ${JSON.stringify(val)}`);
    }
  }

  // Duplicate eva
  if (entry.eva && evaValues.has(entry.eva)) {
    errors.push(`eva "${entry.eva}" already exists in ${_target}`);
  }

  return { errors, _target, entry };
}

const valid = [];

for (const raw of inputEntries) {
  const result = validate(raw);
  if (result.errors.length) {
    for (const e of result.errors) console.warn(`⚠ ${e} — skipping`);
  } else {
    valid.push(result);
  }
}

if (valid.length === 0) {
  console.error('No valid entries to import.');
  process.exit(1);
}

// ── Group valid entries by target ─────────────────────────────────────────────

const byTarget = new Map();
for (const { _target, entry } of valid) {
  if (!byTarget.has(_target)) byTarget.set(_target, []);
  byTarget.get(_target).push(entry);
}

// ── Walk file and insert ──────────────────────────────────────────────────────

const lines = src.split('\n');
const out   = [];
const done  = new Map();
let inArray = false, arrName = '';

for (const line of lines) {
  if (!inArray) {
    out.push(line);
    if (line.trimEnd().endsWith('[')) {
      const m = line.match(/export const (\w+)/);
      if (m) { inArray = true; arrName = m[1]; }
    }
  } else {
    if (line.trim() === '];') {
      if (byTarget.has(arrName)) {
        for (const entry of byTarget.get(arrName)) out.push(formatEntry(entry));
        done.set(arrName, byTarget.get(arrName).length);
      }
      out.push(line);
      inArray = false; arrName = '';
    } else {
      out.push(line);
    }
  }
}

// ── Report ────────────────────────────────────────────────────────────────────

for (const [target, ents] of byTarget) {
  const count = done.get(target) ?? 0;
  if (DRY) {
    console.log(`Would add ${count} entry/entries to ${target}:`);
    for (const e of ents) console.log('  ' + formatEntry(e));
  } else {
    console.log(`Added ${count} entry/entries to ${target}.`);
  }
}

if (DRY) {
  console.log('\n=== DRY RUN — pass --write to apply ===');
} else {
  writeFileSync(TARGET, out.join('\n'), 'utf-8');
  console.log(`\nWrote ${TARGET}`);
  console.log('Tip: run "node scripts/sort-lexicon.js --write" to sort alphabetically.');
}
