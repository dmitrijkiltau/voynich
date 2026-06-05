import { MAPPING, PREFIXES } from './mapping-data.js';
import { LEXICON } from './lexicon-data.js';
import { FOLIO_PAGES, FOLIO_STATUS } from './folio-data.js';
import { RULES, RULES_CHANGELOG } from './grammar-rules-data.js';
import { COMPARISON, FOLIOS, CONCLUSION } from './language-a-data.js';

export { MAPPING, PREFIXES, LEXICON, FOLIO_PAGES, FOLIO_STATUS, RULES, RULES_CHANGELOG, COMPARISON, FOLIOS, CONCLUSION };

/** Returns true when a stars string represents 5-star confidence (★★★★★). */
export const isConf5 = (/** @type {string} */ stars) => stars.slice(0, 5) === '★★★★★';

export const STATS = {
  version: '8.6',
  changelog: [
    'Plantmarker-Abgleich (v8.6): Botanik f14r/f16r/f19r/f22r/f24v nach plantmarker-doc aktualisiert (6 Folios). Layout-Typen A/B/C für f20r, f21r, f25r, f28r, f30r/v ergänzt. f16r chor als 3. FLOS-Indikator (opchy+saiin+chor). f14r Ebene-2-Erstbeleg markiert. Lexikon pol: FRUCTUS-Notiz + CAULIS-Konflikt, kein PFLANZENTEIL-Tag (≥2-Folio-Regel nicht erfüllt).',
  ],
  date: 'Juni 2026',
  lexicon: LEXICON.length,
  rules: RULES.length,
  validatedRules: 38,
  backtest: '100%',
  backtestFraction: 'Typ I: 11/11 (100%) · Typ II: 18/21 (86%)',
  backtestTotal: '32',
  gibberishRate: '10,4 %',
  foliosA: 'f1r–f30v',
  foliosAll: 'f1r, f1v–f10r (Quire A komplett, Positionskarten f1v–f10r), f11r–f30v (Quires B–D komplett), f33r (Quire E, Spr. B), f57r/v, f58r, f69r (Quire J Kosmogramm), f71r–f72r2 (Quire K Zodiak), f103r/v, f114v, f115r/v, f116r/v',
};
