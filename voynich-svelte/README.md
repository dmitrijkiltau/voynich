# Voynich Manuscript — Decipherment Research App

A SvelteKit-based research application presenting a systematic decipherment of the Voynich Manuscript. The app covers character mapping (EVA → proposed phonetic values), a lexicon, grammar rules, a live translator tool, backtest results, and linguistic analysis (Language A/B registers, Randstern margin notation).

Current mapping version: **v5.6** — backtest accuracy: **88%** (23/26 folios), covering **f1v–f14v** (Quires A–B) plus selected folios f57r, f103r/v, f114v, f115r/v, f116r/v.

## Tech stack

- [SvelteKit](https://kit.svelte.dev/) with Svelte 5
- Vite 8
- JSDoc for types (no TypeScript compilation)

## Developing

Install dependencies and start the dev server:

```sh
npm install
npm run dev

# open in browser automatically
npm run dev -- --open
```

## Building

```sh
npm run build
npm run preview
```

## Docker (production)

```sh
docker build -t voynich-app .
docker run -p 3000:3000 voynich-app
```

## Type checking

```sh
npm run check
# or watch mode
npm run check:watch
```

## Automated lexicon metadata

Several lexicon fields are derived automatically at build/dev time rather than hardcoded. The pipeline has two layers:

### Folio transcription JSONs (`src/lib/folios/`)

Each analysed folio has a structured JSON file (e.g. `f003v.json`) with a `transcriptions.lines` block containing one entry per paragraph, keyed by transcriber siglen (H / C / D / F / U):

```json
"P.1": {
  "H": "koaiin.cphor.qotoy.sha.ckhol.ykoaiin.s.oly-{plant}",
  "C": "koaiin.cphor.qotoy.sha.ckhol.ykoaiin.s.oly-{plant}",
  "F": "koaiin.cphor.qotoy.sha.ckhol.ykoaiin.s.oly-{plant}"
}
```

### Shared utilities (`src/lib/eva-utils.js`)

- **`tokenizeEvaLine(line)`** — splits a raw EVA line on `.`, `-`, `=`, `!`, `{…}` separators into individual tokens.
- **`majorityTokens(variants)`** — computes per-position majority consensus across transcribers, returning each consensus token together with which siglen agreed and which diverged.

These functions are shared between `FolioProgress.svelte` (for the transcriber-divergence display) and `lexicon-meta.js` (for token indexing).

### Derived fields (`src/lib/lexicon-meta.js`)

`lexicon-meta.js` eagerly loads all folio JSONs via `import.meta.glob`, builds a **TOKEN\_INDEX** (EVA token → list of `{folioId, para, majority, total}` occurrences), and exports `getLexiconMeta(eva)`. `index.js` calls this for every lexicon entry and merges the results.

Fields derived automatically — manual values in `lexicon-data.js` act as **fallbacks** that override the computed result when set:

| Field | Derivation | Fallback behaviour |
|---|---|---|
| `isAnchor` | Typ-I backtest `pred` entries | always computed, no manual field |
| `r43` | token occurs in ≥ 2 folio JSONs | always computed |
| `anchorFolio` | first occurrence in TOKEN\_INDEX | manual wins if non-empty |
| `evidence` | all occurrences formatted as `fXXX P.N (H/C/F n/m)` | manual wins if non-empty |
| `confidenceStars` | `max(manual, confFloor)` where floor = anchor→4, r43→3, any hit→2 | can only raise the manual value, never lower it |
| `candidate` | auto-cleared to `false` once r43 is met | manual `true` preserved while r43 is still false |
| `rulesApplied` | R43 appended when r43 is true | all other rules remain manual |

### Extending coverage

Adding a new folio JSON to `src/lib/folios/` is enough — the TOKEN\_INDEX is rebuilt automatically on the next dev server restart or build, and all derived fields update without touching `lexicon-data.js`.

The naming convention for folio files is zero-padded: `f001r.json`, `f002v.json`, `f030r.json`, etc.
