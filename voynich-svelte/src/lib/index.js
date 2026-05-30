import { MAPPING, PREFIXES } from './mapping-data.js';
import { LEXICON } from './lexicon-data.js';
import { FOLIO_PAGES, FOLIO_STATUS } from './folio-data.js';
import { RULES } from './grammar-rules-data.js';

export { MAPPING, PREFIXES, LEXICON, FOLIO_PAGES, FOLIO_STATUS, RULES };

export const STATS = {
  version: '5.9',
  lexicon: LEXICON.length,
  rules: RULES.length,
  backtest: '88%',
  backtestFraction: '23/26',
  foliosA: 'f1r, f1v–f16v',
  foliosAll: 'f1r, f1v–f16v (Quires A–B), f57r, f103r/v, f114v, f115r/v, f116r/v',
};
