import { MAPPING, PREFIXES } from './mapping-data.js';
import { LEXICON } from './lexicon-data.js';
import { FOLIO_PAGES, FOLIO_STATUS } from './folio-data.js';
import { RULES, RULES_CHANGELOG } from './grammar-rules-data.js';
import { COMPARISON, FOLIOS, CONCLUSION } from './language-a-data.js';
import { TESTED, STATS as BACKTEST_STATS } from './backtest-data.js';

export { MAPPING, PREFIXES, LEXICON, FOLIO_PAGES, FOLIO_STATUS, RULES, RULES_CHANGELOG, COMPARISON, FOLIOS, CONCLUSION };

/** Returns true when a stars string represents 5-star confidence (★★★★★). */
export const isConf5 = (/** @type {string} */ stars) => stars.slice(0, 5) === '★★★★★';

const _bsI  = BACKTEST_STATS.find(s => s.label.startsWith('Typ I'));
const _bsII = BACKTEST_STATS.find(s => s.label.startsWith('Typ II'));
const _compact = (/** @type {string} */ n) => n.replace(/ /g, '');
const _pct     = (/** @type {number} */ p) => `${Math.round(p)}%`;

export const STATS = {
  version: '8.8',
  // Separate each change on a new line
  changelog: [
    'Lexikon — chorain (Erstbeleg f004r, Phantombelege f33v P.7 + f34v P.8 entfernt), olaiin (Erstbeleg f017r statt f33v), oraiin (Folioliste ≥9 statt 4, Phantombeleg f33v P.7 entfernt).',
    'Rückwärtstest — Typ-I-Liste auf 10 eingefroren (v7.4-Anker); choraiin-Phantomeintrag entfernt; post-v7.4-Einträge (Prognose-Tetrade, Quire-B-dam, Zodiak R17, f69r) nach Typ II. Alle Zahlen kanonisiert (10/10 · 29/32).',
  ],
  date: 'Juni 2026',
  lexicon: LEXICON.length,
  rules: RULES.length,
  validatedRules: 40,
  backtest: '100%',
  backtestFraction: `Typ I: ${_compact(_bsI?.num ?? '?')} (${_pct(_bsI?.pct ?? 0)}) · Typ II: ${_compact(_bsII?.num ?? '?')} (${_pct(_bsII?.pct ?? 0)})`,
  backtestTotal: String(TESTED.length),
  gibberishRate: '10,4 %',
  foliosA: 'f1r–f32v',
  foliosAll: 'f1r, f1v–f10r (Quire A komplett, Positionskarten f1v–f10r), f11r–f32v (Quires B–D komplett), f33r–f34v (Quire E Eröffnung, 5/16), f57r/v, f58r, f69r (Quire J Kosmogramm), f71r–f72r2 (Quire K Zodiak), f103r/v, f114v, f115r/v, f116r/v',
};
