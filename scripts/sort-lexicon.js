#!/usr/bin/env node
/**
 * Sorts every array in lexicon-data.js that contains `eva` entries
 * alphabetically by the `eva` field value.
 *
 * Arrays without `eva` entries (e.g. LEXICON spreads, LEXICON_ALIASES)
 * are left untouched.
 *
 * Usage:
 *   node scripts/sort-lexicon.js              # dry-run (shows what would change)
 *   node scripts/sort-lexicon.js --write      # overwrite file
 */

import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dir  = dirname(fileURLToPath(import.meta.url));
const TARGET = resolve(__dir, '../voynich-svelte/src/lib/lexicon-data.js');
const DRY    = !process.argv.includes('--write');

function extractEva(line) {
  const m = line.match(/eva:\s*"([^"]+)"/);
  return m ? m[1] : '';
}

const src   = readFileSync(TARGET, 'utf-8');
const lines = src.split('\n');

const output        = [];
let inArray         = false;
let arrayName       = '';
let arrayEntries    = [];
let hasEva          = false;
let totalArrays     = 0;
let reorderedArrays = 0;

for (const line of lines) {
  if (!inArray) {
    output.push(line);
    // Detect array opening: line ends with " [" (after stripping trailing spaces)
    if (line.trimEnd().endsWith('[')) {
      const nameMatch = line.match(/export const (\w+)/);
      inArray      = true;
      arrayName    = nameMatch ? nameMatch[1] : '?';
      arrayEntries = [];
      hasEva       = false;
    }
  } else {
    if (line.trim() === '];') {
      totalArrays++;
      if (hasEva && arrayEntries.length > 1) {
        const sorted  = [...arrayEntries].sort((a, b) =>
          extractEva(a).localeCompare(extractEva(b))
        );
        const changed = sorted.some((l, i) => l !== arrayEntries[i]);
        if (changed) {
          reorderedArrays++;
          if (DRY) {
            console.log(`  ${arrayName}: reordered (${arrayEntries.length} entries)`);
          }
          output.push(...sorted);
        } else {
          output.push(...arrayEntries);
        }
      } else {
        output.push(...arrayEntries);
      }
      output.push(line);
      inArray      = false;
      arrayName    = '';
      arrayEntries = [];
      hasEva       = false;
    } else {
      if (line.includes('eva:')) hasEva = true;
      arrayEntries.push(line);
    }
  }
}

if (DRY) {
  console.log(`=== DRY RUN — pass --write to apply ===`);
  console.log(`Arrays scanned:    ${totalArrays}`);
  console.log(`Would reorder:     ${reorderedArrays}`);
} else {
  writeFileSync(TARGET, output.join('\n'), 'utf-8');
  console.log(`Wrote ${TARGET}`);
  console.log(`Arrays scanned: ${totalArrays}, reordered: ${reorderedArrays}`);
}
