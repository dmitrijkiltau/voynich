# Helper Scripts

Helper scripts for the `voynich-svelte/` project are located in the `scripts/` directory. They can be run using Node.js. Scripts that have a `--write` option will actually modify files; without it, they will only perform a dry run and print the intended changes to the console.

## Lexicon

The lexicon is stored in `voynich-svelte/src/lib/lexicon-data.js`. The following scripts can be used to manage it.

### Sort entries

To sort the lexicon entries alphabetically by their `eva` field, you can use the `sort-lexicon.js` script.

```bash
  node scripts/sort-lexicon.js          # dry-run
  node scripts/sort-lexicon.js --write  # actually sort
```

### Import new entries

To import new entries into the lexicon, you can use the `import-lexicon.js` script. It expects a JSON file containing a single entry or an array of entries. Each entry must include a `_target` field naming the array to add it to (e.g. `STEM_WORDS`, `PREF_SHE`, `SYNTAX_OR`). Trailing commas are tolerated.

Entries that fail validation (wrong target, unknown fields, bad types, duplicate `eva`) are skipped with a warning; valid entries in the same file are still applied.

```bash
  node scripts/import-lexicon.js entries.json         # dry-run
  node scripts/import-lexicon.js entries.json --write # actually apply
  node scripts/sort-lexicon.js --write                # sort afterwards
```

The JSON file should have the following structure:

```json
[
  {
    "_target": "STEM_WORDS",
    "eva": "sheo",
    "heb": "שֶׁ+עֹ",
    "de": "das/welches [Licht/Ende]",
    "layer": "Jüdisch-Aramäisch / Hebräisch",
    "relatedTo": { "type": "Kurzform", "eva": "sheor" },
    "rulesApplied": []
  },
  {
    "_target": "PREF_SHE",
    "eva": "shedy",
    "morph": "she- + -dy",
    "heb": "שֶׁדִּי",
    "de": "das/welches von",
    "rulesApplied": []
  }
]
```

Allowed fields per array are derived from the existing entries in that array. `eva`, `heb`, `de`, and `rulesApplied` are always required.

**Optional fields:**

| Field | Type | Description |
|---|---|---|
| `morph` | string | Morphological breakdown (used in prefix/syntax arrays) |
| `layer` | string | Language layer (e.g. `"Biblisches Hebräisch"`) |
| `context` | string | Short usage note (e.g. `"medizinisch"`, `"Kolophon"`) |
| `relatedTo` | object | Link to a related entry: `{ "type": "Kurzform", "eva": "sheor" }` |
| `uncertain` | boolean | Set to `true` if the reading is uncertain |

**Note:** `confidenceStars` is derived automatically at build time — do not set it manually.

### Import aliases

To add entries to `LEXICON_ALIASES`, use the `import-aliases.js` script. It expects a JSON file with a `LEXICON_ALIASES` object mapping alias → canonical `eva`. The canonical value must already exist in the lexicon. Duplicate aliases are skipped with a warning.

```bash
  node scripts/import-aliases.js aliases.json         # dry-run
  node scripts/import-aliases.js aliases.json --write # actually apply
```

```json
{
  "LEXICON_ALIASES": {
    "choaiin": "kaiin",
    "shdy": "shedy"
  }
}
```

### Reorganize arrays

To reorganize all non-stem entries into properly-named `PREF_` / `SYNTAX_` arrays based on their first morpheme, use `reorganize-lexicon.js`. Groups with fewer than `--min-size` entries (default: 3) are folded into `SYNTAX_MISC`.

```bash
  node scripts/reorganize-lexicon.js                    # dry-run
  node scripts/reorganize-lexicon.js --min-size=3       # fold groups smaller than 3
  node scripts/reorganize-lexicon.js --write            # actually reorganize
  node scripts/reorganize-lexicon.js --min-size=3 --write
```
