import { MAPPING, PREFIXES } from './mapping-data.js';
import { LEXICON as _RAW_LEXICON, STEM_WORDS as _RAW_STEM_WORDS } from './lexicon-data.js';
import { FOLIO_PAGES, FOLIO_DATA } from './folio-data.js';
import { RULES, RULES_CHANGELOG } from './grammar-rules-data.js';
import { COMPARISON, FOLIOS, CONCLUSION } from './language-a-data.js';
import { TESTED, STATS as BACKTEST_STATS } from './backtest-data.js';
import { getLexiconMeta, CONSECUTIVE_TOKENS } from './lexicon-meta.js';

// Merge folio-derived metadata into each lexicon entry.
// Manual values in lexicon-data.js act as fallbacks/overrides:
// - isAnchor        → always from Typ-I backtest
// - r43             → always computed (≥2 folio JSONs contain the token)
// - anchorFolio     → always computed first-occurrence
// - evidence        → always computed string
// - confidenceStars → max(manual, confFloor) — computed can only raise, never lower
// - candidate       → always computed, based on r43 status (candidate = !r43)
// - rulesApplied    → auto-appended (never removed): R2 when eva contains 'o', R19 when consecutive
//                   in corpus, R41 when morph contains a prefix morpheme (/\b[a-z]+-\s*\+/),
//                   R43 when r43 is met; sorted numerically; manual rules preserved
const _ruleNum = (/** @type {string} */ r) => parseInt(r.slice(1));
export const LEXICON = _RAW_LEXICON.map((/** @type {any} */ entry) => {
	const meta = getLexiconMeta(entry.eva);
	const rules = new Set(/** @type {string[]} */ (entry.rulesApplied ?? []));
	if (entry.eva.includes('o')) rules.add('R2');
	if (entry.morph && /\b[a-z]+-\s*\+/.test(entry.morph)) rules.add('R41');
	if (CONSECUTIVE_TOKENS.has(entry.eva)) rules.add('R19');
	if (meta.r43) rules.add('R43');
	return {
		...entry,
		isAnchor: meta.isAnchor,
		r43: meta.r43,
		anchorFolio: meta.computedAnchorFolio,
		evidence: meta.computedEvidence,
		confidenceStars: Math.max(entry.confidenceStars ?? 0, meta.confFloor),
		candidate: !meta.r43,
		rulesApplied: [...rules].sort((a, b) => _ruleNum(a) - _ruleNum(b)),
	};
});

const _stemSet = new Set(_RAW_STEM_WORDS.map((/** @type {any} */ e) => e.eva));

// Enriched subsets of LEXICON (isAnchor, r43, evidence already merged)
export const STEM_WORDS = LEXICON.filter((/** @type {any} */ e) => _stemSet.has(e.eva));
export const LEXICON_DERIVED = LEXICON.filter((/** @type {any} */ e) => !_stemSet.has(e.eva));

export { MAPPING, PREFIXES, FOLIO_PAGES, FOLIO_DATA, RULES, RULES_CHANGELOG, COMPARISON, FOLIOS, CONCLUSION };

/** Returns true when a stars string represents 5-star confidence (★★★★★). */
export const isConf5 = (/** @type {string} */ stars) => stars.slice(0, 5) === '★★★★★';

const _bsI  = BACKTEST_STATS.find(s => s.label.startsWith('Typ I'));
const _bsII = BACKTEST_STATS.find(s => s.label.startsWith('Typ II'));
const _compact = (/** @type {string} */ n) => n.replace(/ /g, '');
const _pct     = (/** @type {number} */ p) => `${Math.round(p)}%`;

export const STATS = {
  version: '8.8.8',
  // Separate each change on a new line and keep only the new changes since the last release.
  changelog: [
    'f4r-Audit',
    'Weitere Automatisierungen bei der Regelableitung, z.B. die Erkennung von Präfixmorphemen für R41.',
  ],
  date: 'Juni 2026',
  lexicon: LEXICON.filter((/** @type {any} */ e) => !e.candidate).length,
  rules: RULES.length,
  validatedRules: 40,
  backtest: '100%',
  backtestFraction: `Typ I: ${_compact(_bsI?.num ?? '?')} (${_pct(_bsI?.pct ?? 0)}) · Typ II: ${_compact(_bsII?.num ?? '?')} (${_pct(_bsII?.pct ?? 0)})`,
  backtestTotal: String(TESTED.length),
  gibberishRate: '10,4 %',
  foliosA: 'f1r–f32v',
  foliosAll: 'f1r, f1v–f10r (Quire A komplett, Positionskarten f1v–f10r), f11r–f32v (Quires B–D komplett), f33r–f34v (Quire E Eröffnung, 5/16), f57r/v, f58r, f69r (Quire J Kosmogramm), f71r–f72r2 (Quire K Zodiak), f103r/v, f114v, f115r/v, f116r/v',
};
