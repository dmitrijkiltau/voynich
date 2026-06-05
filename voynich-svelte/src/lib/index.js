import { MAPPING, PREFIXES } from './mapping-data.js';
import { LEXICON } from './lexicon-data.js';
import { FOLIO_PAGES, FOLIO_STATUS } from './folio-data.js';
import { RULES, RULES_CHANGELOG } from './grammar-rules-data.js';
import { COMPARISON, FOLIOS, CONCLUSION } from './language-a-data.js';

export { MAPPING, PREFIXES, LEXICON, FOLIO_PAGES, FOLIO_STATUS, RULES, RULES_CHANGELOG, COMPARISON, FOLIOS, CONCLUSION };

/** Returns true when a stars string represents 5-star confidence (★★★★★). */
export const isConf5 = (/** @type {string} */ stars) => stars.slice(0, 5) === '★★★★★';

export const STATS = {
  version: '8.5',
  changelog: [
    'Quire-A-Retroanalyse f2r–f10r + f33r (v8.5): 9 neue Pflanzenteil-Positionskarten (Quire A komplett).',
    'Farbcode Beleg 11 (f002r) + Beleg 12 (f007r): neue rote Wurzeln ohne Text → 12 Belege Ebene 1. f010r rote Oval-Strukturen (Nicht-Wurzel) ohne Text → Ebene 2 ★★★★★ (3 Nicht-Wurzel-Belege).',
    'Drei-Kategorien-Verfeinerung: Illustration-Rot ≠ pharmakologisches Dunkelrot ≠ FLOS-therapeutisches Rot (f009r Punkt-Ähre MIT Text). FOLIUM-Textfreiheit (R60 Korollar 3 NEU): 21/21 Folios, 0 Gegenbeispiele ★★★★.',
    'sary ★★★ → ★★★★★ (Cross-Register: FLOS-Eröffner f009r + f57r + f103r + f77r).',
    'sheey: FLOS-spezifisch → THERAPEUTISCH-ALLGEMEIN ★★★ (FLOS f013r + CAULIS f002r).',
    'Neue Spr.-B-Lexikoneinträge: tshdar, yteey, okeeey (f33r). f57v = Zodiak-Diagramm (kein Herbal-Folio).',
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
