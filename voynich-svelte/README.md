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
