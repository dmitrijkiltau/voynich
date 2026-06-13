#!/usr/bin/env node
/**
 * Merges analysis metadata into existing folio JSON files.
 *
 * "Empty" folios (only folio + transcriptions) can be enriched with
 * registerType, languageClass, writerHand, scanUrl, and iconographic.
 * Transcriptions are always protected and never overwritten.
 *
 * Merge strategy:
 *   - Top-level scalar fields (registerType, languageClass, writerHand, scanUrl):
 *     new value overwrites existing value.
 *   - iconographic: deep-merged at one level — existing sub-keys are preserved
 *     unless the input explicitly provides the same sub-key.
 *   - transcriptions: always kept from the existing file; input value is rejected.
 *
 * Usage:
 *   node scripts/import-folio.js folio-analysis.json          # dry-run
 *   node scripts/import-folio.js folio-analysis.json --write  # apply changes
 *
 * Example JSON (single object or array):
 *   [
 *     {
 *       "folio": "f5v",
 *       "registerType": "Herbal (Standard Kräuterbild) — {plant}-System aktiv",
 *       "languageClass": "Sprache A (Currier)",
 *       "writerHand": 1,
 *       "scanUrl": "https://collections.library.yale.edu/iiif/2/…",
 *       "iconographic": {
 *         "rules": ["R14", "R60"],
 *         "illustrationType": "…",
 *         "plantMorphology": {
 *           "radix": "…",
 *           "caulis": "…",
 *           "folia": "…",
 *           "flosFructus": "…",
 *           "coloring": "…"
 *         },
 *         "botanicalIdentification": ["…"],
 *         "layoutStructure": "…",
 *         "r60Status": "…"
 *       }
 *     }
 *   ]
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir   = dirname(fileURLToPath(import.meta.url));
const FOLIOS  = resolve(__dir, '../voynich-svelte/src/lib/folios');
const DRY     = !process.argv.includes('--write');

// ── Known top-level metadata fields (transcriptions excluded) ─────────────────

const META_FIELDS = ['registerType', 'languageClass', 'writerHand', 'scanUrl', 'iconographic'];

const VALIDATORS = {
  folio:          v => typeof v === 'string' && /^f\w+$/.test(v),
  registerType:   v => typeof v === 'string' && v.length > 0,
  languageClass:  v => typeof v === 'string' && v.length > 0,
  writerHand:     v => Number.isInteger(v) && v >= 1,
  scanUrl:        v => typeof v === 'string' && v.startsWith('http'),
  iconographic:   v => v !== null && typeof v === 'object' && !Array.isArray(v),
};

// Canonical field order for the output JSON
const FIELD_ORDER = ['folio', 'registerType', 'languageClass', 'writerHand', 'scanUrl', 'iconographic', 'transcriptions'];

// ── Helpers ───────────────────────────────────────────────────────────────────

/** "f5v" → "f005v", "f72r1" → "f072r1" */
function folioSlug(pageId) {
  const m = pageId.match(/^([a-zA-Z]+)(\d+)(.*)/);
  return m ? `${m[1]}${m[2].padStart(3, '0')}${m[3]}` : pageId;
}

/** Deep-merge b into a (one level deep for objects). Arrays replace entirely. */
function deepMerge(a, b) {
  const result = { ...a };
  for (const [k, v] of Object.entries(b)) {
    if (v !== null && typeof v === 'object' && !Array.isArray(v) &&
        a[k] !== null && typeof a[k] === 'object' && !Array.isArray(a[k])) {
      result[k] = { ...a[k], ...v };
    } else {
      result[k] = v;
    }
  }
  return result;
}

/** Return a copy of obj with keys in FIELD_ORDER (unknown keys appended). */
function reorder(obj) {
  const result = {};
  for (const k of FIELD_ORDER) {
    if (k in obj) result[k] = obj[k];
  }
  for (const k of Object.keys(obj)) {
    if (!(k in result)) result[k] = obj[k];
  }
  return result;
}

/** Summarise what changed between old and new (top-level + iconographic sub-keys). */
function diffSummary(oldObj, newObj) {
  const lines = [];
  for (const k of META_FIELDS) {
    if (!(k in newObj)) continue;
    if (!(k in oldObj)) {
      lines.push(`  + ${k} (new)`);
    } else if (k === 'iconographic') {
      const oldIco = oldObj[k] ?? {};
      const newIco = newObj[k];
      for (const sk of Object.keys(newIco)) {
        if (!(sk in oldIco)) lines.push(`  + iconographic.${sk} (new)`);
        else                  lines.push(`  ~ iconographic.${sk} (updated)`);
      }
    } else {
      const changed = JSON.stringify(oldObj[k]) !== JSON.stringify(newObj[k]);
      if (changed) lines.push(`  ~ ${k} (updated)`);
    }
  }
  return lines.length ? lines : ['  (no changes)'];
}

// ── Parse input ───────────────────────────────────────────────────────────────

const jsonArg = process.argv.slice(2).find(a => !a.startsWith('--'));
if (!jsonArg) {
  console.error('Usage: node scripts/import-folio.js <folio-analysis.json> [--write]');
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

// ── Validate and process each entry ──────────────────────────────────────────

let applied = 0;

for (const raw of inputEntries) {
  const errors = [];

  // folio field
  if (!raw.folio || !VALIDATORS.folio(raw.folio)) {
    errors.push(`missing or invalid "folio" field`);
  }

  // transcriptions guard
  if ('transcriptions' in raw) {
    errors.push('"transcriptions" must not be provided — kept from existing file');
  }

  // validate known meta fields
  for (const [k, v] of Object.entries(raw)) {
    if (k === 'folio' || k === 'transcriptions') continue;
    if (!(k in VALIDATORS)) { errors.push(`unknown field "${k}"`); continue; }
    if (!VALIDATORS[k](v))  { errors.push(`field "${k}" has invalid value`); }
  }

  if (errors.length) {
    for (const e of errors) console.warn(`⚠ ${raw.folio ?? '?'}: ${e} — skipping`);
    continue;
  }

  // resolve file path
  const slug = folioSlug(raw.folio);
  const path = resolve(FOLIOS, `${slug}.json`);
  if (!existsSync(path)) {
    console.warn(`⚠ ${raw.folio}: file "${slug}.json" not found in folios/ — skipping`);
    continue;
  }

  // load existing JSON
  let existing;
  try {
    existing = JSON.parse(readFileSync(path, 'utf-8'));
  } catch (e) {
    console.warn(`⚠ ${raw.folio}: could not read existing file: ${e.message} — skipping`);
    continue;
  }

  // build merged object
  const { folio: _f, ...meta } = raw;   // strip folio from merge payload
  let merged = { ...existing };
  for (const k of META_FIELDS) {
    if (!(k in meta)) continue;
    if (k === 'iconographic') {
      merged.iconographic = deepMerge(existing.iconographic ?? {}, meta.iconographic);
    } else {
      merged[k] = meta[k];
    }
  }
  merged = reorder(merged);

  // report (pass input delta, not merged result, so diff only shows touched keys)
  const diff = diffSummary(existing, meta);
  if (DRY) {
    console.log(`${raw.folio} (${slug}.json):`);
    for (const l of diff) console.log(l);
  } else {
    writeFileSync(path, JSON.stringify(merged, null, 2) + '\n', 'utf-8');
    console.log(`${raw.folio} (${slug}.json): written`);
    for (const l of diff) console.log(l);
  }
  applied++;
}

if (applied === 0) {
  console.error('No valid entries to import.');
  process.exit(1);
}

if (DRY) {
  console.log(`\n=== DRY RUN (${applied} folio/s) — pass --write to apply ===`);
}
