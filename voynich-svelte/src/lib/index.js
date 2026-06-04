import { MAPPING, PREFIXES } from './mapping-data.js';
import { LEXICON } from './lexicon-data.js';
import { FOLIO_PAGES, FOLIO_STATUS } from './folio-data.js';
import { RULES } from './grammar-rules-data.js';

export { MAPPING, PREFIXES, LEXICON, FOLIO_PAGES, FOLIO_STATUS, RULES };

export const STATS = {
  version: '8.3',
  changelog: [
    '{plant}-Positionskodierung (v8.3): Vertikale Position des {plant}-Markers kodiert Pflanzenteil-Zuordnung (FLOS/FRUCTUS/CAULIS/FOLIUM/RADIX). R14 Neufassung: Doppelkodierung horizontal + vertikal. R60 neu (★★★★). Layout-Typen A/B/C/D klassifiziert. 11/11 analysierten Folios zeigen selektive Pflanzenteil-Annotation.',
    'Farbcode-System dreistufig bestätigt (★★★★★): Ebene 1 — alle Wurzeln kein Text (8 Belege, 0 Gegenbeispiele); Ebene 2 — dunkelrot = kein Text auf beliebigem Pflanzenteil — f25r Bohnen an Stengelknoten = Erstbeleg Nicht-Wurzel-Rot (Reeds: Colors: green,dark-red bestätigt); Ebene 3 — grün = prescribiert.',
    'pol (Frucht-Term) an Frucht-Position f22r P.1 = stärkster semantischer Einzelbeweis ★★★★★. Stolfi f16r: „interrupted by the plant\'s flower" — Blüten-Annotation explizit dokumentiert. Lexikon: neue PFLANZENTEIL-Dimension (pol → FRUCTUS, opchy/pchy → FLOS/FRUCTUS, sheey → FLOS, chey/cheey → FLOS/CAULIS).',
    'R16 (v8.3): Typ 2 Vertikal-Zweiteilverschreibung (NEU) — {plant}-Marker auf verschiedenen Höhen = separate Teilverschreibungen. Pflanzenteil-Positionskarte als Analyse-Pflicht ab v8.3.',
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
  foliosAll: 'f1r, f1v–f30v (Quires A–B+C komplett, Quire D Innenbifolios bD3+bD4 vollständig · bD1 f25 teilw. · bD2 f26 teilw.), f57r, f58r, f69r (Quire J Kosmogramm), f71r–f72r2 (Quire K Zodiak), f103r/v, f114v, f115r/v, f116r/v',
};
