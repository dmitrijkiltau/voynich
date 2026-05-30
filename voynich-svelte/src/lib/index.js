import { MAPPING, PREFIXES } from './mapping-data.js';
import { LEXICON } from './lexicon-data.js';
import { FOLIO_PAGES } from './folio-data.js';
import { RULES } from './grammar-rules-data.js';

export { MAPPING, PREFIXES, LEXICON, FOLIO_PAGES, RULES };

export const STATS = {
  version: '5.6',
  lexicon: LEXICON.length,
  rules: RULES.length,
  backtest: '88%',
  backtestFraction: '23/26',
  foliosA: 'f1v–f14v',
  foliosAll: 'f1v–f14v (Quires A–B), f57r, f103r/v, f114v, f115r/v, f116r/v',
};
