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

## Folio analysis

Folio JSON files live in `voynich-svelte/src/lib/folios/`. "Empty" folios only contain `folio` + `transcriptions`; the import script adds analysis metadata without touching the transcriptions.

### Import folio metadata

```bash
  node scripts/import-folio.js folio-analysis.json          # dry-run
  node scripts/import-folio.js folio-analysis.json --write  # apply changes
```

```json
[
  {
    "folio": "f5v",
    "registerType": "Herbal (Standard Kräuterbild) — {plant}-System aktiv",
    "languageClass": "Sprache A (Currier)",
    "writerHand": 1,
    "scanUrl": "https://collections.library.yale.edu/iiif/2/…",
    "iconographic": {
      "rules": ["R14", "R60"],
      "illustrationType": "…",
      "plantMorphology": {
        "radix": "…", "caulis": "…", "folia": "…", "flosFructus": "…", "coloring": "…"
      },
      "botanicalIdentification": ["…"],
      "layoutStructure": "…",
      "r60Status": "…"
    }
  }
]
```

**Top-level fields** (all optional except `folio`):

| Field | Type | Description |
|---|---|---|
| `folio` | string | Required. Folio ID, e.g. `"f5v"` or `"f72r1"` — zero-padding is handled automatically |
| `registerType` | string | Register description, e.g. `"Herbal (Standard Kräuterbild) — {plant}-System aktiv"` |
| `languageClass` | string | Currier language class, e.g. `"Sprache A (Currier)"` |
| `writerHand` | integer | Scribe hand number (≥ 1) |
| `scanUrl` | string | IIIF scan URL |
| `iconographic` | object | Iconographic analysis (see sub-keys below) |

**`iconographic` sub-keys** (all optional, deep-merged):

| Sub-key | Type | Description |
|---|---|---|
| `rules` | string[] | Applicable rules, e.g. `["R14", "R60"]` |
| `illustrationType` | string | Short illustration description |
| `plantMorphology` | object | Sub-object with keys `radix`, `caulis`, `folia`, `flosFructus`, `coloring` |
| `botanicalIdentification` | string[] | Candidate plant identifications |
| `layoutStructure` | string | Paragraph layout description |
| `r60Status` | string | R60 prediction protocol status |

**Merge rules:**
- `iconographic` is **deep-merged**: only the sub-keys you provide are updated; others are kept.
- `transcriptions` is **always protected** — providing it in the input is an error.
- Providing only `iconographic.r60Status` updates just that sub-key without touching the rest.

## Grammar rules

Grammar rules and the changelog are stored in `voynich-svelte/src/lib/grammar-rules-data.js`.

### Import new rules or changelog entries

```bash
  node scripts/import-rules.js entries.json          # dry-run
  node scripts/import-rules.js entries.json --write  # actually apply
```

The JSON file supports two targets:

```json
[
  {
    "_target": "RULES",
    "id": "R62",
    "focus": "…",
    "syntax": "…",
    "evidence": "…",
    "confidenceStars": 3
  },
  {
    "_target": "RULES_CHANGELOG",
    "version": "v9.0",
    "change": "R62 ★★★ neu (…)"
  }
]
```

**`RULES` fields** (all required):

| Field | Type | Description |
|---|---|---|
| `id` | string | Rule ID matching `/^R\d+$/`, must be unique |
| `focus` | string | Rule name / short description (HTML allowed) |
| `syntax` | string | Formal syntax / condition (HTML allowed) |
| `evidence` | string | Empirical evidence (HTML allowed) |
| `confidenceStars` | number | Confidence level 1–5 |

**`RULES_CHANGELOG` fields** (all required):

| Field | Type | Description |
|---|---|---|
| `version` | string | Version string, e.g. `"v9.0"` |
| `change` | string | Change description (HTML allowed) |

Entries that fail validation are skipped with a warning; valid entries in the same file are still applied.

## Backtest

Backtest entries are stored in `voynich-svelte/src/lib/backtest-data.js`.

### Import new Typ-II entries

Typ-I entries (genuine pre-analysis anchors) are frozen as of v7.4 and **cannot** be imported via script. Only Typ-II (post-hoc internal cohesion) entries are accepted.

```bash
  node scripts/import-backtest.js entries.json          # dry-run
  node scripts/import-backtest.js entries.json --write  # actually apply
```

```json
[
  {
    "_target": "TESTED",
    "type": "II",
    "pred": "example",
    "heb": "דֹּוגְמָה",
    "result": "✓ f99r P.1",
    "context": "Erstbeleg; semantisch kohärent"
  }
]
```

**`TESTED` fields** (all required):

| Field | Type | Description |
|---|---|---|
| `type` | string | Must be `"II"` (Typ I is frozen) |
| `pred` | string | Predicted EVA form or description, must be unique |
| `heb` | string | Hebrew/Aramaic equivalent |
| `result` | string | Corpus finding (e.g. `"✓ f103r P.5"`) |
| `context` | string | Context note |

**Note:** After importing, update `STATS` in `backtest-data.js` manually (num/pct for Typ II).
