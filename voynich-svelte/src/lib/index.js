import { MAPPING, PREFIXES } from './mapping-data.js';
import { LEXICON } from './lexicon-data.js';
import { FOLIO_PAGES, FOLIO_STATUS } from './folio-data.js';
import { RULES } from './grammar-rules-data.js';

export { MAPPING, PREFIXES, LEXICON, FOLIO_PAGES, FOLIO_STATUS, RULES };

export const STATS = {
  version: '7.7',
  date: 'Juni 2026',
  lexicon: LEXICON.length,
  rules: RULES.length,
  validatedRules: 30,
  backtest: '100%',
  backtestFraction: 'Typ I: 10/10 (100%) · Typ II: 17/20 (85%)',
  backtestTotal: '30',
  gibberishRate: '10,4 %',
  foliosA: 'f1r–f27v',
  foliosAll: 'f1r, f1v–f27v (Quires A–B+C komplett, Quire D bD1+bD2+bD3), f57r, f58r, f71r–f72r2 (Quire K Zodiak), f103r/v, f114v, f115r/v, f116r/v',
  changelog: 'f27r + f27v (Bifolio bD3, Quire D) analysiert — Rückkehr zu Sprache A nach Sprache-B-Einschub bD2. Aufstufungen: daiiin ★★★→★★★★ (R43 erfüllt: f26v + f27r P.12 = 2 Folios); R56 sho·sho-Emphase ★★★ Kand.→★★★ validiert (R43 erfüllt: f24v + f27v P.7 = 2 Folios). Lexikon: 7 neue ★★★ Kandidaten (ksor, shod, keeod, cphary, dor R43 bestätigt, fochof/chof, kshy). Botanik: f27r = Symphytum officinale (Beinwell) · f27v = Leucanthemum vulgare (Wiesen-Margerite). Regelmoratorium: 30 validiert : 29 Kandidaten = 1,03:1 (erstmals > 1,0).',
};
