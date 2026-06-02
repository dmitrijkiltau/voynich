import { MAPPING, PREFIXES } from './mapping-data.js';
import { LEXICON } from './lexicon-data.js';
import { FOLIO_PAGES, FOLIO_STATUS } from './folio-data.js';
import { RULES } from './grammar-rules-data.js';

export { MAPPING, PREFIXES, LEXICON, FOLIO_PAGES, FOLIO_STATUS, RULES };

export const STATS = {
  version: '7.5',
  date: 'Juni 2026',
  lexicon: LEXICON.length,
  rules: RULES.length,
  validatedRules: 27,
  backtest: '100%',
  backtestFraction: 'Typ I: 10/10 (100%) · Typ II: 17/20 (85%)',
  backtestTotal: '30',
  gibberishRate: '10,4 %',
  foliosA: 'f1r, f1v–f25v',
  foliosAll: 'f1r, f1v–f25v (Quires A–B+C komplett, Quire D bD1), f57r, f58r, f71r–f72r2 (Quire K Zodiak), f103r/v, f114v, f115r/v, f116r/v',
  changelog: 'Ausgelöst durch externes Gutachten (linguistisch-kryptologische Fachkritik). Methodische Korrekturen: (1) Regelmoratorium — keine neuen Regeln (R60+) bis Verhältnis validiert:Kandidaten ≥ 1,5:1 (aktuell 27:32 = 0,84:1); (2) Rückwärtstest-Reform: Trennung in Typ I (genuine Vorhersagen: 10/10 = 100%) und Typ II (interne Kohärenz: 17/20 = 85%); (3) R2-ext: explizite Positionsregel für EVA „o" (Wortanfang = Ayin, wortintern = Ḥolam) mit Negativtest — 0 Gegenbeispiele in 140+ Einträgen; (4) chotshol herabgestuft von ★★★ Kand. auf ★★ (morphologisch fragwürdig: Einzelbeleg, 3 Morpheme ohne Separator); (5) neuer Abschnitt „Offene Probleme" — ehrliche Dokumentation ungeklärter statistischer Anomalien (Entropie, Slot-Grammatik, Wortlängenverteilung, fehlende Blindvalidierung); Scheol-Verteilungsstatistik formalisiert (>85 % Zeilenende-Position, 0 % Zeilenanfang).',
};
