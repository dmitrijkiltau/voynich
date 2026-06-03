import { MAPPING, PREFIXES } from './mapping-data.js';
import { LEXICON } from './lexicon-data.js';
import { FOLIO_PAGES, FOLIO_STATUS } from './folio-data.js';
import { RULES } from './grammar-rules-data.js';

export { MAPPING, PREFIXES, LEXICON, FOLIO_PAGES, FOLIO_STATUS, RULES };

export const STATS = {
  version: '7.9',
  changelog: [
    'f29r + f29v (Bifolio bD4 Abschluss, äußerste Lage Quire D) analysiert — Ophthalmologischer Bogen vollständig: Diagnose (f28r) → Therapie Augenlicht (f28v) → Begleitsymptome/Fieber (f29r) → Pharmakopöe Augenpflanzen (f29v).',
    'Botanik: f29r = Rumex crispus (Krauser Ampfer) ★★★ · f29v = Echium vulgare (Natternkopf / Viper\'s Bugloss) ★★★★.',
    'Aufstufungen: shocthy ★★★ Kand.→★★★ validiert (R43: f28r P.7 + f29r P.6); cheeol ★★★ Kand.→★★★ validiert (R43: f26v P.3 + f29r P.5); R35 chol·chol ★★★ Kand.→★★★ validiert (R43: f17v + f29v P.2+P.3); tchor Zweitbeleg f29v P.8; ytchor →★★★★ (f29v P.2).',
    'Lexikon: 7 neue Einträge (poraiin, shokchy, ychom, shos, shot, chain ★★★; chykar ★★) + ytchor →★★★★ (R43 erfüllt: f16v P.2 + f29v P.2 = 2 Folios).',
    'Grammatikregeln: R15 Typ C (shor·chor·sho-Dreikette f29r P.8, 10. Beleg) + R19-Erweiterung auf shor·shor-Dopplung. Regelmoratorium: 32 validiert : 28 Kandidaten = 1,14:1.'
  ],
  date: 'Juni 2026',
  lexicon: LEXICON.length,
  rules: RULES.length,
  validatedRules: 32,
  backtest: '100%',
  backtestFraction: 'Typ I: 10/10 (100%) · Typ II: 17/20 (85%)',
  backtestTotal: '30',
  gibberishRate: '10,4 %',
  foliosA: 'f1r–f29v',
  foliosAll: 'f1r, f1v–f29v (Quires A–B+C komplett, Quire D bD1+bD2+bD3+bD4 vollständig), f57r, f58r, f71r–f72r2 (Quire K Zodiak), f103r/v, f114v, f115r/v, f116r/v',
};
