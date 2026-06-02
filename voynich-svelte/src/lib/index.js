import { MAPPING, PREFIXES } from './mapping-data.js';
import { LEXICON } from './lexicon-data.js';
import { FOLIO_PAGES, FOLIO_STATUS } from './folio-data.js';
import { RULES } from './grammar-rules-data.js';

export { MAPPING, PREFIXES, LEXICON, FOLIO_PAGES, FOLIO_STATUS, RULES };

export const STATS = {
  version: '7.2',
  date: 'Juni 2026',
  lexicon: LEXICON.length,
  rules: RULES.length,
  validatedRules: 24,
  backtest: '90%',
  backtestFraction: '27/30',
  backtestTotal: '30',
  gibberishRate: '10,4 %',
  foliosA: 'f1r, f1v–f24v',
  foliosAll: 'f1r, f1v–f24v (Quires A–B+C bC1–bC4 komplett), f57r, f58r, f71r–f72r2 (Quire K Zodiak), f103r/v, f114v, f115r/v, f116r/v',
  changelog: 'Ausgelöst durch f24r + f24v (Bifolio bC1 Abschluss — Silene vulgaris + Pulsatilla vulgaris). Strukturelle Höhepunkte: Quire C vollständig (16/16 Seiten = 100 %); R53 ★★★ (3. T-Klassen-Beleg: sam.chorly= f24r T.20 — R43 erfüllt); sar ★★★ → ★★★★ (3. Folio-Beleg: f23v + f24r×2); ot-Kompositum-Dreikette f24v P.2 (otol+otaiir+otchos, R50-Beobachtung); neue Kandidaten R54 (dal·dam·dal-Triplette ★★), R55 (or-Reduplikation oro= ★★★ Kand.), R56 (sho.sho-Emphase ★★), R57 (odaiim=-Abschluss-Marker ★★); Quire-Zeichen „39" auf f24v (= III = Quire C); 12 neue Lexikoneinträge (olom, otaiir, cheekdam ★★★★; oro, qodom, sam.chorly, sshey, odaiim, ydals, doiir ★★★; daid, otaiphy ★★); Quire-C-Gesamtstruktur: konzentrische Toxizitätssteigerung von innen (bC4: sanft) nach außen (bC1: maximal toxisch).',
};
