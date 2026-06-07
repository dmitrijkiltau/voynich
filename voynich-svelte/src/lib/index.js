import { MAPPING, PREFIXES } from './mapping-data.js';
import { LEXICON } from './lexicon-data.js';
import { FOLIO_PAGES, FOLIO_DATA } from './folio-data.js';
import { RULES, RULES_CHANGELOG } from './grammar-rules-data.js';
import { COMPARISON, FOLIOS, CONCLUSION } from './language-a-data.js';
import { TESTED, STATS as BACKTEST_STATS } from './backtest-data.js';

export { MAPPING, PREFIXES, LEXICON, FOLIO_PAGES, FOLIO_DATA, RULES, RULES_CHANGELOG, COMPARISON, FOLIOS, CONCLUSION };

/** Returns true when a stars string represents 5-star confidence (★★★★★). */
export const isConf5 = (/** @type {string} */ stars) => stars.slice(0, 5) === '★★★★★';

const _bsI  = BACKTEST_STATS.find(s => s.label.startsWith('Typ I'));
const _bsII = BACKTEST_STATS.find(s => s.label.startsWith('Typ II'));
const _compact = (/** @type {string} */ n) => n.replace(/ /g, '');
const _pct     = (/** @type {number} */ p) => `${Math.round(p)}%`;

export const STATS = {
  version: '8.8.7',
  // Separate each change on a new line and keep only the new changes since the last release.
  changelog: [
    'f3v-Audit: f003v.json neu erstellt (Dipsacus-Identifikation ★★★, R60 ★★★★★, 14 Paragraphen, 2 Textblöcke)',
    'f3v-Audit: Erstbeleg-Korrekturen tchor (f3v P.7 5/5), ykchy (f3v P.8 4/4), ytchy (f3v P.12 4/4); Folgebelege f11v/f16v ergänzt',
    'f3v-Audit: sho/cthy/ochor Kandidaten-Flags aufgehoben (R43 erfüllt); kchom ★★ → ★★★ (R43 erfüllt f3v P.8)',
    'f3v-Audit: 6 f1r-Einträge auf ★★ demotiert (R43-Frist abgelaufen): oksho, shodain, shoaiin, tchey, oiin, ydain',
    'f3v-Audit: Neue Einträge otcham (Erstbeleg f3v P.7, Parallelform zu otchom) + daiidy (Kandidat f3v P.2, EVA-distinct von daiindy); ALIAS daiidy→daiindy entfernt',
    'Fristtabelle komplett restrukturiert: 13 f3r-Kandidaten (Frist bis f7r), 1 f3v-Kandidat, 6 abgelaufene f1r-Fristen, 3 bestätigte Einträge',
  ],
  date: 'Juni 2026',
  lexicon: LEXICON.filter((/** @type {any} */ e) => !e.candidate).length,
  rules: RULES.length,
  validatedRules: 40,
  backtest: '100%',
  backtestFraction: `Typ I: ${_compact(_bsI?.num ?? '?')} (${_pct(_bsI?.pct ?? 0)}) · Typ II: ${_compact(_bsII?.num ?? '?')} (${_pct(_bsII?.pct ?? 0)})`,
  backtestTotal: String(TESTED.length),
  gibberishRate: '10,4 %',
  foliosA: 'f1r–f32v',
  foliosAll: 'f1r, f1v–f10r (Quire A komplett, Positionskarten f1v–f10r), f11r–f32v (Quires B–D komplett), f33r–f34v (Quire E Eröffnung, 5/16), f57r/v, f58r, f69r (Quire J Kosmogramm), f71r–f72r2 (Quire K Zodiak), f103r/v, f114v, f115r/v, f116r/v',
};
