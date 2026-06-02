import { MAPPING, PREFIXES } from './mapping-data.js';
import { LEXICON } from './lexicon-data.js';
import { FOLIO_PAGES, FOLIO_STATUS } from './folio-data.js';
import { RULES } from './grammar-rules-data.js';

export { MAPPING, PREFIXES, LEXICON, FOLIO_PAGES, FOLIO_STATUS, RULES };

export const STATS = {
  version: '7.6',
  date: 'Juni 2026',
  lexicon: LEXICON.length,
  rules: RULES.length,
  validatedRules: 29,
  backtest: '100%',
  backtestFraction: 'Typ I: 10/10 (100%) · Typ II: 17/20 (85%)',
  backtestTotal: '30',
  gibberishRate: '10,4 %',
  foliosA: 'f1r, f1v–f25v',
  foliosAll: 'f1r, f1v–f26v (Quires A–B+C komplett, Quire D bD1+bD2), f57r, f58r, f71r–f72r2 (Quire K Zodiak), f103r/v, f114v, f115r/v, f116r/v',
  changelog: 'f26r + f26v (Bifolio bD2, Quire D) analysiert — erster Sprache-B-Block in Quire D (Hand 2). Regelaufstufungen: R36 dar·dar Typ B ★★★→★★★★ (R43 erfüllt: f18r + f26v = 2 Folios); R37 qo-Präfix-Dopplung ★★★→★★★★ (R43 erfüllt: f18v + f26v = 2 Folios). Lexikon: 6 neue ★★★ Kandidaten (saraiir, ykeechy, qoteedar, cheeol, ory, eedy); oraiin ★★★★ R43 bestätigt (f22r + f26v). Botanik: f26r = Solanum nigrum (Schwarzer Nachtschatten) · f26v = Centaurea cyanus (Kornblume). Stärkste Sequenz: f26v P.4 Kolophon or·cheos·oraiin·okeo·chekaiin= (★★★★). Regelmoratorium aktiv: 29:32 = 0,91:1.',
};
