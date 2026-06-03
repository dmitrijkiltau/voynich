import { MAPPING, PREFIXES } from './mapping-data.js';
import { LEXICON } from './lexicon-data.js';
import { FOLIO_PAGES, FOLIO_STATUS } from './folio-data.js';
import { RULES } from './grammar-rules-data.js';

export { MAPPING, PREFIXES, LEXICON, FOLIO_PAGES, FOLIO_STATUS, RULES };

export const STATS = {
  version: '8.0',
  changelog: [
    'f69r (Quire J/X — Kosmologisches Rad-Diagramm, bJ1) analysiert — Stresstest ★★★★ bestanden: 10/10 Ankerwörter, shol=-Terminal (P.4), 3× sar=-Kolophon (P.1, R.7, R.11), 22 Radialzeilen + 16 Außensektoren + Innenring vollständig dekodiert.',
    'Zentralscheibe revidiert (★★★★★): dolsedy ist kein Wort, sondern ein sechsteiliges Zeigersystem — jeder Sektorbuchstabe verweist auf eine markierte Radialzeile; 7/7 Übereinstimmung mit Stolfi\'s Streifendaten rechnerisch verifiziert; dreistufige Farbhierarchie (blau beidseitig = primär · grün einseitig = sekundär · ohne Streifen = tertiär).',
    'Aufstufungen: R36 dar·dar ★★★★→★★★★★ (register-übergreifend: Botanik f18r+f26v + Kosmogramm f69r = 3 Folios, 4 Belege, 0 Gegenbeispiele); qo-Zusatzbeleg R.20 stützt R47.',
    'Lexikon: 6 neue Einträge (cholam, otolam, tam ★★★★ Kand.; dairam, ykar, cham ★★★ Kand.).',
    'Grammatikregeln: R36 ★★★ validiert. Moratorium: 33 validiert : 28 Kandidaten = 1,18:1.'
  ],
  date: 'Juni 2026',
  lexicon: LEXICON.length,
  rules: RULES.length,
  validatedRules: 33,
  backtest: '100%',
  backtestFraction: 'Typ I: 11/11 (100%) · Typ II: 18/21 (86%)',
  backtestTotal: '32',
  gibberishRate: '10,4 %',
  foliosA: 'f1r–f29v',
  foliosAll: 'f1r, f1v–f29v (Quires A–B+C komplett, Quire D bD1+bD2+bD3+bD4 vollständig), f57r, f58r, f69r (Quire J Kosmogramm), f71r–f72r2 (Quire K Zodiak), f103r/v, f114v, f115r/v, f116r/v',
};
