import { MAPPING, PREFIXES } from './mapping-data.js';
import { LEXICON } from './lexicon-data.js';
import { FOLIO_PAGES, FOLIO_STATUS } from './folio-data.js';
import { RULES } from './grammar-rules-data.js';

export { MAPPING, PREFIXES, LEXICON, FOLIO_PAGES, FOLIO_STATUS, RULES };

export const STATS = {
  version: '8.2',
  changelog: [
    'f30r/f30v (Bifolio bD3 Abschluss): 13 neue Lexikoneinträge (+11 Neuzugänge, +2 Aufstufungen chokchy ★★★★, dain ★★★ validiert)',
    'R43 erfüllt für opchol (f28r+f30r), dain (f1r+f30v), chain (f29v+f30r) → 37 validiert : 18 Kandidaten = 2,06:1. R19 Typ E (ABAB-Verflechtung cheor·chey·cheor·chey, Corpus-Erstbeleg f30r P.11)',
    'R28 Erweiterung ytor = y+t+or (f30v P.5). Neue Kolophon-Formen: qor·chain·cthorchy= (f30r P.7) + shol·chokcheey·daiin·kchydy= (f30v P.11). Bifolio bD3 vollständig',
    'Quire-D-Innenbifolios bD3+bD4 abgeschlossen. Ankerwort-Quote: 100 % (62 Seiten).',
  ],
  date: 'Juni 2026',
  lexicon: LEXICON.length,
  rules: RULES.length,
  validatedRules: 37,
  backtest: '100%',
  backtestFraction: 'Typ I: 11/11 (100%) · Typ II: 18/21 (86%)',
  backtestTotal: '32',
  gibberishRate: '10,4 %',
  foliosA: 'f1r–f30v',
  foliosAll: 'f1r, f1v–f30v (Quires A–B+C komplett, Quire D Innenbifolios bD3+bD4 vollständig · bD1 f25 teilw. · bD2 f26 teilw.), f57r, f58r, f69r (Quire J Kosmogramm), f71r–f72r2 (Quire K Zodiak), f103r/v, f114v, f115r/v, f116r/v',
};
