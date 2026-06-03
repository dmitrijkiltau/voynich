import { MAPPING, PREFIXES } from './mapping-data.js';
import { LEXICON } from './lexicon-data.js';
import { FOLIO_PAGES, FOLIO_STATUS } from './folio-data.js';
import { RULES } from './grammar-rules-data.js';

export { MAPPING, PREFIXES, LEXICON, FOLIO_PAGES, FOLIO_STATUS, RULES };

export const STATS = {
  version: '7.8',
  changelog: [
    'f28r + f28v (Bifolio bD4, innerstes Quire D) analysiert — Ophthalmologie-Zentrum: f28r = Diagnose Sehverlust/Scheol · f28v = Therapie Augenheilung.',
    'Aufstufungen: shod ★★★ Kand.→★★★ validiert (R43 erfüllt: f27r P.1 + f28r P.1 = 2 Folios); sor (Arzt-Variante, Spr.-A-Alternanz von sar) →★★★★; R59 qo-Solitär ★★★ Kand.→★★★ validiert (R43 erfüllt: f1v P.7 + f28r P.1 = 2 Folios).',
    'Lexikon: 14 neue Kandidaten (pchodar, opchol, dchar, chakod, cthol, shocthy, okam ★★★; ytchol, yteol, deaiin, kshol, ykcholy, tshoiin ★★★★; chear ★★★).',
    'Botanik: f28r = Plantago major (Großer Wegerich) ★★★★ · f28v = Agrimonia eupatoria (Odermennig) ★★★.',
    'Regelmoratorium: 31 validiert : 28 Kandidaten = 1,11:1 (erstmals > 1,1).'
  ],
  date: 'Juni 2026',
  lexicon: LEXICON.length,
  rules: RULES.length,
  validatedRules: 31,
  backtest: '100%',
  backtestFraction: 'Typ I: 10/10 (100%) · Typ II: 17/20 (85%)',
  backtestTotal: '30',
  gibberishRate: '10,4 %',
  foliosA: 'f1r–f28v',
  foliosAll: 'f1r, f1v–f28v (Quires A–B+C komplett, Quire D bD1+bD2+bD3+bD4), f57r, f58r, f71r–f72r2 (Quire K Zodiak), f103r/v, f114v, f115r/v, f116r/v',
};
