#!/usr/bin/env node
/**
 * Imports Typ-II backtest entries into backtest-data.js.
 *
 * Supported target:
 *   TESTED  — post-hoc-Entdeckungen (Typ II only; Typ I is frozen)
 *
 * Typ I entries are rejected to protect the frozen set (eingefroren v7.4).
 * STATS are maintained manually.
 *
 * Usage:
 *   node scripts/import-backtest.js entries.json          # dry-run
 *   node scripts/import-backtest.js entries.json --write  # apply changes
 *
 * Example JSON (single entry or array):
 *   [
 *     {
 *       "_target": "TESTED",
 *       "type": "II",
 *       "pred": "example",
 *       "heb": "דֹּוגְמָה",
 *       "result": "✓ f99r P.1",
 *       "context": "Erstbeleg; semantisch kohärent"
 *     }
 *   ]
 *
 * Note: pred values must be unique within TESTED.
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir  = dirname(fileURLToPath(import.meta.url));
const TARGET = resolve(__dir, '../voynich-svelte/src/lib/backtest-data.js');
const DRY    = !process.argv.includes('--write');

// ── Schema ────────────────────────────────────────────────────────────────────

const REQUIRED   = ['type', 'pred', 'heb', 'result', 'context'];
const FIELD_ORDER = ['type', 'pred', 'heb', 'result', 'context'];

const VALIDATORS = {
  type:    v => v === 'II',
  pred:    v => typeof v === 'string' && v.length > 0,
  heb:     v => typeof v === 'string' && v.length > 0,
  result:  v => typeof v === 'string' && v.length > 0,
  context: v => typeof v === 'string' && v.length > 0,
};

const VALID_TARGETS = new Set(['TESTED']);

// ── Scan source to collect existing pred values ───────────────────────────────

function discoverPreds(src) {
  const preds = new Set();
  for (const m of src.matchAll(/\bpred:\s*'([^']+)'/g)) preds.add(m[1]);
  return preds;
}

// ── Formatting ────────────────────────────────────────────────────────────────

function fmtVal(v) {
  const escaped = String(v).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  return `'${escaped}'`;
}

function formatEntry(entry) {
  const fields = FIELD_ORDER.filter(k => k in entry);
  return '  { ' + fields.map(k => `${k}: ${fmtVal(entry[k])}`).join(', ') + ' },';
}

// ── Parse input ───────────────────────────────────────────────────────────────

const jsonArg = process.argv.slice(2).find(a => !a.startsWith('--'));
if (!jsonArg) {
  console.error('Usage: node scripts/import-backtest.js <entries.json> [--write]');
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

const inputEntries = Array.isArray(rawParsed) ? rawParsed : [rawParsed];

// ── Load source ───────────────────────────────────────────────────────────────

const src   = readFileSync(TARGET, 'utf-8');
const preds = discoverPreds(src);

// ── Validate ──────────────────────────────────────────────────────────────────

function validate(raw) {
  const errors = [];
  const { _target, ...entry } = raw;

  if (!_target) { errors.push('missing "_target"'); return { errors }; }
  if (!VALID_TARGETS.has(_target)) {
    errors.push(`unknown target "${_target}". Valid targets: ${[...VALID_TARGETS].join(', ')}`);
    return { errors };
  }

  // Reject Typ I attempts explicitly
  if (entry.type === 'I') {
    errors.push('Typ-I entries are frozen (eingefroren v7.4) and cannot be imported');
    return { errors };
  }

  for (const f of REQUIRED) {
    if (!(f in entry)) errors.push(`missing required field "${f}"`);
  }

  for (const [key, val] of Object.entries(entry)) {
    if (!(key in VALIDATORS)) {
      errors.push(`unknown field "${key}"`);
      continue;
    }
    if (!VALIDATORS[key](val)) {
      if (key === 'type') {
        errors.push(`field "type" must be "II" (Typ I is frozen)`);
      } else {
        errors.push(`field "${key}" has invalid value ${JSON.stringify(val)}`);
      }
    }
  }

  if (entry.pred && preds.has(entry.pred)) {
    errors.push(`pred "${entry.pred}" already exists in TESTED`);
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

// ── Walk source and insert before the closing `];` of TESTED ─────────────────

const lines = src.split('\n');
const out   = [];
let inArray = false, arrName = '', inserted = 0;

for (const line of lines) {
  if (!inArray) {
    out.push(line);
    if (line.trimEnd().endsWith('[')) {
      const m = line.match(/export const (\w+)/);
      if (m && VALID_TARGETS.has(m[1])) { inArray = true; arrName = m[1]; }
    }
  } else {
    if (line.trim() === '];') {
      for (const { entry } of valid) {
        out.push(formatEntry(entry));
        inserted++;
      }
      out.push(line);
      inArray = false; arrName = '';
    } else {
      out.push(line);
    }
  }
}

// ── Report ────────────────────────────────────────────────────────────────────

if (DRY) {
  console.log(`Would add ${valid.length} entry/entries to TESTED:`);
  for (const { entry } of valid) console.log('  ' + formatEntry(entry));
  console.log('\n=== DRY RUN — pass --write to apply ===');
  console.log('Remember to update STATS in backtest-data.js manually after importing.');
} else {
  writeFileSync(TARGET, out.join('\n'), 'utf-8');
  console.log(`Added ${inserted} entry/entries to TESTED.`);
  console.log(`\nWrote ${TARGET}`);
  console.log('Remember to update STATS in backtest-data.js manually (num/pct for Typ II).');
}
