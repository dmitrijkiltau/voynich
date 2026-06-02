import { MAPPING, PREFIXES } from './mapping-data.js';
import { LEXICON } from './lexicon-data.js';
import { FOLIO_PAGES, FOLIO_STATUS } from './folio-data.js';
import { RULES } from './grammar-rules-data.js';

export { MAPPING, PREFIXES, LEXICON, FOLIO_PAGES, FOLIO_STATUS, RULES };

export const STATS = {
  version: '7.4',
  date: 'Juni 2026',
  lexicon: LEXICON.length,
  rules: RULES.length,
  validatedRules: 27,
  backtest: '90%',
  backtestFraction: '27/30',
  backtestTotal: '30',
  gibberishRate: '10,4 %',
  foliosA: 'f1r, f1v–f25v',
  foliosAll: 'f1r, f1v–f25v (Quires A–B+C komplett, Quire D bD1), f57r, f58r, f71r–f72r2 (Quire K Zodiak), f103r/v, f114v, f115r/v, f116r/v',
  changelog: 'Ausgelöst durch Härtetests f1r + f1v (Bifolio bA1 — Haskama-Typ + Herbal-Typ, Quire A). Strukturelle Höhepunkte: R3 ★★★★★ (6 neue Belege f1r: ykal, ykaiin, yshey, ycho, yto, ycheey — >11 Belege / ≥8 Folios); R11 ★★★★ (f1r T1–T4 + f1v P4/P10: 6 neue Belege, alle 6 Transkriptoren einig); R15 ★★★★★ (Belege 7–9 aus f1r: chol.chol P3.L15, keey.keey P4.L26, dar…dar P4.L23 — 9 Belege / 6 Folios); R59 neuer Kandidat ★★★ (qo als isolierter Konnektiv-Token, Paragraphen-Brücke — f1v P.7); 2 neue Lexikoneinträge (daiiin = דִּינִין Aramäischer Plural ★★★; dain = דָּן Richter Partizip ★★★); validierte Regeln: 24 → 27; Falsch-Positive: 0 (R54/R55/R56 Negativtests ✓); Haskama-Struktur f1r: vierfache Autorisierungsformel bestätigt; din-Trias f1r P3.L14 (dain / odaiin / chodain — Präfix-Paradigma).',
};
