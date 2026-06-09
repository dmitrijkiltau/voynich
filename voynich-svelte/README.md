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

Most metadata is derived automatically from the folio corpus during build/dev time.

### Folio corpus

Each folio JSON in `src/lib/folios/` contains paragraph transcriptions grouped by transcriber:

```json
"P.1": {
  "H": "koaiin.cphor.qotoy.sha.ckhol.ykoaiin.s.oly-{plant}",
  "C": "koaiin.cphor.qotoy.sha.ckhol.ykoaiin.s.oly-{plant}",
  "F": "koaiin.cphor.qotoy.sha.ckhol.ykoaiin.s.oly-{plant}"
}
```

### EVA utilities

Shared helpers in `src/lib/eva-utils.js`:

| Function | Purpose |
|----------|---------|
| `tokenizeEvaLine()` | Splits EVA text on `.`, `-`, `=`, and `{...}`. `!` remains part of the token. |
| `majorityTokens()` | Builds positional majority consensus across transcribers. Only variants with the maximum token count participate. |

### Corpus indexes

`src/lib/lexicon-meta.js` loads all folio JSONs via `import.meta.glob()` and builds:

| Index | Purpose |
|---------|---------|
| `TOKEN_INDEX` | Majority-confirmed token occurrences (`agreedCount / totalCount > 0.5`) |
| `CONSECUTIVE_TOKENS` | Tokens appearing in consecutive positions (R19 signal) |

`TOKEN_INDEX` drives `r43`, `anchorFolio`, `evidence`, and confidence floors.

### Metadata merge

For each lexicon entry:

```js
const meta = getLexiconMeta(entry.eva);
```

Computed fields:

| Field | Behaviour |
|---------|---------|
| `isAnchor` | Always computed from Typ-I backtest |
| `r43` | Always computed (≥2 folio JSONs) |
| `anchorFolio` | Always computed (first occurrence) |
| `evidence` | Always computed |
| `confidenceStars` | `max(manual, confFloor)` |
| `candidate` | Always computed (`!r43`) |
| `rulesApplied` | Structural rules appended; manual rules preserved |

### Confidence floors

| Condition | Floor |
|------------|------|
| Anchor token | 4★ |
| R43 + ≥5 folios | 4★ |
| R43 | 3★ |
| Any corpus hit | 2★ |

### Automatic rule detection

| Rule | Detection |
|--------|--------|
| **R2** | `eva.includes('o')` |
| **R19** | Token in `CONSECUTIVE_TOKENS` |
| **R41** | `morph` matches `/\b[a-z]+-\s*\+/` |
| **R43** | `r43 === true` |

Computed rules are appended automatically, never removed, and sorted numerically.

### Extending coverage

Adding a new folio JSON to `src/lib/folios/` is enough — the TOKEN\_INDEX is rebuilt automatically on the next dev server restart or build, and all derived fields update without touching `lexicon-data.js`.

The naming convention for folio files is zero-padded: `f001r.json`, `f002v.json`, `f030r.json`, etc.
