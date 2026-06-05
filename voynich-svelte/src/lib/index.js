import { MAPPING, PREFIXES } from './mapping-data.js';
import { LEXICON } from './lexicon-data.js';
import { FOLIO_PAGES, FOLIO_STATUS } from './folio-data.js';
import { RULES, RULES_CHANGELOG } from './grammar-rules-data.js';
import { COMPARISON, FOLIOS, CONCLUSION } from './language-a-data.js';

export { MAPPING, PREFIXES, LEXICON, FOLIO_PAGES, FOLIO_STATUS, RULES, RULES_CHANGELOG, COMPARISON, FOLIOS, CONCLUSION };

/** Returns true when a stars string represents 5-star confidence (★★★★★). */
export const isConf5 = (/** @type {string} */ stars) => stars.slice(0, 5) === '★★★★★';

export const STATS = {
  version: '8.7',
  changelog: [
    'Quire-D-Abschluss + Quire-E-Eröffnung (v8.7): f31r–f34v analysiert (7 neue Seiten). Quire D vollständig (16/16). Quire E: 5/16 Seiten. R28 ★★★→★★★★ (ytsho f32r P.4 = 3. Beleg). R58 ★★★→★★★★ validiert (f32v P.9 = 3. Beleg). R61 ★★★ Kand. neu (ol+[Ankerwort] = Intensivierungsformel, 6 Belege). R60 Korollar 3 ★★★★→★★★★★ (25 Folios). oraiin ★★★★→★★★★★ (4-Folio-Formel). chorain ★★★→★★★★ validiert. 14 neue Lexikoneinträge.',
  ],
  date: 'Juni 2026',
  lexicon: LEXICON.length,
  rules: RULES.length,
  validatedRules: 40,
  backtest: '100%',
  backtestFraction: 'Typ I: 13/13 (100%) · Typ II: 21/24 (87,5%)',
  backtestTotal: '37',
  gibberishRate: '10,4 %',
  foliosA: 'f1r–f32v',
  foliosAll: 'f1r, f1v–f10r (Quire A komplett, Positionskarten f1v–f10r), f11r–f32v (Quires B–D komplett), f33r–f34v (Quire E Eröffnung, 5/16), f57r/v, f58r, f69r (Quire J Kosmogramm), f71r–f72r2 (Quire K Zodiak), f103r/v, f114v, f115r/v, f116r/v',
};
