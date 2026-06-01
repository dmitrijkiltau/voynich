import { MAPPING, PREFIXES } from './mapping-data.js';
import { LEXICON } from './lexicon-data.js';
import { FOLIO_PAGES, FOLIO_STATUS } from './folio-data.js';
import { RULES } from './grammar-rules-data.js';

export { MAPPING, PREFIXES, LEXICON, FOLIO_PAGES, FOLIO_STATUS, RULES };

export const STATS = {
  version: '6.9',
  lexicon: LEXICON.length,
  rules: RULES.length,
  backtest: '90%',
  backtestFraction: '27/30',
  foliosA: 'f1r, f1v–f21v',
  foliosAll: 'f1r, f1v–f21v (Quires A–B+C-bC4), f57r, f58r, f71r–f72r2 (Quire K Zodiak), f103r/v, f114v, f115r/v, f116r/v',
};
