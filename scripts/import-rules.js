#!/usr/bin/env node
/**
 * Imports grammar rules or changelog entries into grammar-rules-data.js.
 *
 * Supported targets:
 *   RULES            — new grammar rule (id must be unique and match /^R\d+$/)
 *   RULES_CHANGELOG  — new changelog entry (version + change)
 *
 * Usage:
 *   node scripts/import-rules.js entries.json          # dry-run
 *   node scripts/import-rules.js entries.json --write  # apply changes
 *
 * Example JSON (single entry or array):
 *   [
 *     {
 *       "_target": "RULES",
 *       "id": "R62",
 *       "focus": "...",
 *       "syntax": "...",
 *       "evidence": "...",
 *       "confidenceStars": 3
 *     },
 *     {
 *       "_target": "RULES_CHANGELOG",
 *       "version": "v9.0",
 *       "change": "R62 ★★★ neu (…)"
 *     }
 *   ]
 *
 * Note: HTML is allowed in focus/syntax/evidence/change fields.
 * confidenceStars is required for RULES entries (1–5).
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir  = dirname(fileURLToPath(import.meta.url));
const TARGET = resolve(__dir, '../voynich-svelte/src/lib/grammar-rules-data.js');
const DRY    = !process.argv.includes('--write');

// ── Field definitions per target ─────────────────────────────────────────────

const SCHEMAS = {
  RULES: {
    required: ['id', 'focus', 'syntax', 'evidence', 'confidenceStars'],
    validators: {
      id:              v => typeof v === 'string' && /^R\d+$/.test(v),
      focus:           v => typeof v === 'string' && v.length > 0,
      syntax:          v => typeof v === 'string' && v.length > 0,
      evidence:        v => typeof v === 'string' && v.length > 0,
      confidenceStars: v => Number.isInteger(v) && v >= 1 && v <= 5,
    },
    fieldOrder: ['id', 'focus', 'syntax', 'evidence', 'confidenceStars'],
  },
  RULES_CHANGELOG: {
    required: ['version', 'change'],
    validators: {
      version: v => typeof v === 'string' && v.length > 0,
      change:  v => typeof v === 'string' && v.length > 0,
    },
    fieldOrder: ['version', 'change'],
  },
};

// ── Scan source to collect existing ids / versions ────────────────────────────

function discoverExisting(src) {
  const ids      = new Set();
  const versions = new Set();
  for (const m of src.matchAll(/\bid:\s*'([^']+)'/g))      ids.add(m[1]);
  for (const m of src.matchAll(/\bversion:\s*'([^']+)'/g)) versions.add(m[1]);
  return { ids, versions };
}

// ── Formatting ────────────────────────────────────────────────────────────────

function fmtVal(v) {
  if (typeof v === 'number') return String(v);
  // Use single-quoted strings to match the existing file style
  const escaped = String(v).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
  return `'${escaped}'`;
}

function formatEntry(entry, fieldOrder) {
  const fields = fieldOrder.filter(k => k in entry);
  return '  {' + fields.map(k => `${k}: ${fmtVal(entry[k])}`).join(', ') + '},';
}

// ── Parse input ───────────────────────────────────────────────────────────────

const jsonArg = process.argv.slice(2).find(a => !a.startsWith('--'));
if (!jsonArg) {
  console.error('Usage: node scripts/import-rules.js <entries.json> [--write]');
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

const src      = readFileSync(TARGET, 'utf-8');
const existing = discoverExisting(src);

// ── Validate ──────────────────────────────────────────────────────────────────

function validate(raw) {
  const errors = [];
  const { _target, ...entry } = raw;

  if (!_target) { errors.push('missing "_target"'); return { errors }; }
  const schema = SCHEMAS[_target];
  if (!schema) {
    errors.push(`unknown target "${_target}". Valid targets: ${Object.keys(SCHEMAS).join(', ')}`);
    return { errors };
  }

  for (const f of schema.required) {
    if (!(f in entry)) errors.push(`missing required field "${f}"`);
  }

  for (const [key, val] of Object.entries(entry)) {
    if (!(key in schema.validators)) {
      errors.push(`unknown field "${key}" for ${_target}`);
      continue;
    }
    if (!schema.validators[key](val)) {
      errors.push(`field "${key}" has invalid value ${JSON.stringify(val)}`);
    }
  }

  if (_target === 'RULES' && entry.id && existing.ids.has(entry.id)) {
    errors.push(`rule "${entry.id}" already exists`);
  }

  return { errors, _target, entry, schema };
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

// ── Group by target ───────────────────────────────────────────────────────────

const byTarget = new Map();
for (const { _target, entry, schema } of valid) {
  if (!byTarget.has(_target)) byTarget.set(_target, []);
  byTarget.get(_target).push({ entry, schema });
}

// ── Walk source and insert before closing `];` of each target array ───────────

const lines = src.split('\n');
const out   = [];
const done  = new Map();
let inArray = false, arrName = '';

for (const line of lines) {
  if (!inArray) {
    out.push(line);
    if (line.trimEnd().endsWith('[')) {
      const m = line.match(/export const (\w+)/);
      if (m && SCHEMAS[m[1]]) { inArray = true; arrName = m[1]; }
    }
  } else {
    if (line.trim() === '];') {
      if (byTarget.has(arrName)) {
        for (const { entry, schema } of byTarget.get(arrName)) {
          out.push(formatEntry(entry, schema.fieldOrder));
        }
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

for (const [target, items] of byTarget) {
  const count = done.get(target) ?? 0;
  if (DRY) {
    console.log(`Would add ${count} entry/entries to ${target}:`);
    for (const { entry, schema } of items) console.log('  ' + formatEntry(entry, schema.fieldOrder));
  } else {
    console.log(`Added ${count} entry/entries to ${target}.`);
  }
}

if (DRY) {
  console.log('\n=== DRY RUN — pass --write to apply ===');
} else {
  writeFileSync(TARGET, out.join('\n'), 'utf-8');
  console.log(`\nWrote ${TARGET}`);
}
