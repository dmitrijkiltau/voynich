import { MAPPING, PREFIXES } from './mapping-data.js';
import { LEXICON } from './lexicon-data.js';
import { FOLIO_PAGES, FOLIO_STATUS } from './folio-data.js';
import { RULES } from './grammar-rules-data.js';

export { MAPPING, PREFIXES, LEXICON, FOLIO_PAGES, FOLIO_STATUS, RULES };

export const STATS = {
  version: '7.3',
  date: 'Juni 2026',
  lexicon: LEXICON.length,
  rules: RULES.length,
  validatedRules: 24,
  backtest: '90%',
  backtestFraction: '27/30',
  backtestTotal: '30',
  gibberishRate: '10,4 %',
  foliosA: 'f1r, f1v–f25v',
  foliosAll: 'f1r, f1v–f25v (Quires A–B+C komplett, Quire D bD1), f57r, f58r, f71r–f72r2 (Quire K Zodiak), f103r/v, f114v, f115r/v, f116r/v',
  changelog: 'Ausgelöst durch f25r + f25v (Bifolio bD1 Eröffnung — Urtica dioica + Chelidonium majus). Strukturelle Höhepunkte: Quire-D-Einstieg bestätigt (Kontinuität zu Quire C, keine Parameteränderung); R53 ★★★★ (4. T-Klassen-Beleg: dair.otaiir.otosy= f25r T.7 — Subtyp C deskriptiv/identifikatorisch etabliert); R58 neuer Kandidat ★★★ (3×daiin in einer Zeile — f25v P.2, Corpus-Erstbeleg); otaiir → ★★★★★ Kand. (Zweitbeleg f25r T.7, R43 erfüllt); orchaiin= neue Kolophon-Formel ★★★★ (Licht-wie-Auge, f25v P.7); daiin-Dichte bD1 Corpus-Rekord (4 Doppelurteile + 3×daiin-Zeile); 7 neue Lexikoneinträge (orchaiin, ckhear ★★★★; otosy, daiity, cheesees, qokoral, soshy ★★★ Kand.); Lexikonstand >300-Meilenstein; Botanik: Urtica dioica ★★★★ + Chelidonium majus ★★★★ (Drachen-Motiv); Quire D: 2/16 Seiten.',
};
