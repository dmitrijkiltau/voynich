import { getLexiconConfidence } from './lexicon-data.js';

// ── Markov transition matrix for Hebrew-phonetic EVA structures ───────────────

/** Start probabilities for word-initial graphemes (outermost morphological layer).
 * @type {[string,number][]} 
 */
export const STARTS = [
	['d', 14], ['ch', 9], ['k', 8], ['o', 10], ['qo', 5], ['sh', 7], ['s', 4],
	['t', 4],  ['y', 5],  ['l', 5], ['c', 3],  ['p', 2],  ['f', 1],  ['r', 2],
];

/** Fallback pool for mid-word graphemes (used when no transition entry is found).
 * @type {[string,number][]} 
 */
export const MIDDLES = [
	['a', 7],  ['ai', 6], ['aiin', 8], ['o', 8],  ['or', 4],  ['al', 4],  ['ol', 3],
	['ch', 5], ['sh', 3], ['k', 4],    ['e', 4],  ['ee', 3],  ['dy', 4],  ['ky', 3],
	['r', 4],  ['l', 4],  ['n', 3],    ['d', 3],  ['s', 2],   ['chy', 3], ['m', 2],
];

/** Probabilities for typical Voynich word endings.
 * @type {[string,number][]} 
 */
export const ENDINGS = [
	['y', 18], ['n', 7], ['r', 6], ['aiin', 12], ['m', 5], ['l', 5],
	['dy', 7], ['in', 4], ['or', 4], ['ol', 3],   ['al', 3],
];

/**
 * Bigram transition matrix for Hebrew-phonographic EVA generation.
 * Encodes which grapheme Y follows grapheme X, producing realistic
 * consonant roots and vowel structures (CV syllable patterns).
 *
 * Design rules applied:
 *   - Consonants transition to vowel helpers or soft bridges (CV syllables).
 *   - Vowel helpers / diphthongs transition to consonants or affixes.
 *   - 'ai' → consonants only (never 'i', which would produce pathological 'aii...' chains).
 *   - 'dy/ky/chy' → vowels only (no 'y'; these graphemes already carry an implicit y-close).
 *
 * @type {Record<string, [string, number][]>}
 */
export const TRANSITIONS = {
	// Consonants → prefer vowel helpers or soft transitions (CV syllables)
	'd':  [['a', 30], ['ai', 20], ['e', 15], ['o', 15], ['y', 10], ['or', 10]],
	'ch': [['a', 35], ['ai', 25], ['e', 15], ['o', 15], ['y', 10]],
	'k':  [['a', 30], ['ai', 20], ['e', 20], ['o', 15], ['y', 15]],
	'sh': [['a', 30], ['ai', 20], ['e', 15], ['o', 15], ['y', 10], ['or', 10]],
	's':  [['a', 35], ['ai', 20], ['e', 15], ['o', 15], ['y', 15]],
	't':  [['a', 25], ['ai', 20], ['e', 15], ['o', 15], ['y', 15], ['or', 10]],
	'y':  [['k', 30], ['ch', 25], ['s', 15], ['t', 15], ['d', 15]],
	'l':  [['c', 20], ['k', 20],  ['ch', 20], ['o', 15], ['a', 15], ['e', 10]],
	'c':  [['h', 45], ['a', 20],  ['o', 20], ['e', 15]],
	'p':  [['a', 30], ['o', 30],  ['chy', 20], ['e', 20]],
	'f':  [['a', 35], ['o', 25],  ['e', 20], ['y', 20]],
	'r':  [['a', 30], ['ai', 20], ['e', 20], ['o', 20], ['y', 10]],
	'v':  [['a', 30], ['e', 30],  ['o', 20], ['y', 20]],

	// Vowel helpers / diphthongs → transition to consonants or affixes
	'a':    [['r', 20], ['l', 20], ['n', 15], ['d', 15], ['m', 15], ['y', 15]],
	// 'ai' → consonants only; never 'i' (avoids pathological 'aii...' chains)
	'ai':   [['n', 30], ['r', 20], ['l', 20], ['d', 15], ['m', 15]],
	'aiin': [['y', 30], ['d', 20], ['r', 20], ['m', 15], ['l', 15]],
	'e':    [['e', 40], ['r', 15], ['l', 15], ['n', 10], ['d', 10], ['dy', 10]],
	'ee':   [['d', 25], ['y', 25], ['r', 20], ['l', 15], ['ch', 15]],
	'o':    [['r', 25], ['l', 25], ['k', 15], ['ch', 15], ['d', 10], ['s', 10]],
	'or':   [['a', 30], ['o', 20], ['y', 25], ['d', 15], ['l', 10]],
	'al':   [['a', 25], ['o', 25], ['y', 20], ['d', 15], ['m', 15]],
	'ol':   [['a', 25], ['o', 25], ['y', 20], ['d', 15], ['m', 15]],

	// Grammatical suffixes → 'dy/ky/chy' carry an implicit y-close; never transition to 'y'
	'dy':   [['a', 35], ['o', 35], ['e', 30]],
	'ky':   [['a', 35], ['o', 35], ['e', 30]],
	'chy':  [['a', 35], ['o', 35], ['e', 30]],
	'm':    [['y', 35], ['a', 25], ['e', 20], ['o', 20]],
	'n':    [['y', 35], ['a', 25], ['e', 20], ['o', 20]],
	'h':    [['y', 35], ['a', 25], ['e', 20], ['o', 20]],

	// Complex grapheme clusters
	'qo':   [['k', 35], ['ch', 25], ['l', 15], ['d', 15], ['t', 10]],
};

/** @param {[string,number][]} opts */
export function weightedChoice(opts) {
	let sum = 0;
	for (const [,w] of opts) sum += w;
	let r = Math.random() * sum;
	for (const [val, w] of opts) { r -= w; if (r < 0) return val; }
	return opts[opts.length - 1][0];
}

/**
 * Generates a pseudo-word via the stochastic Markov transition matrix.
 * Produces significantly more realistic Hebrew phonographic structures
 * than a flat sampler, while staying within the EVA grapheme inventory.
 */
export function generateWord() {
	// Stochastically determine the initial grapheme
	let current = weightedChoice(STARTS);
	let word = current;

	// 2–4 transition steps
	const steps = 2 + Math.floor(Math.random() * 3);

	for (let i = 0; i < steps; i++) {
		// Look up transition probabilities; fall back to MIDDLES if no entry
		const nextOptions = TRANSITIONS[current] || MIDDLES;
		const next = weightedChoice(nextOptions);
		word += next;
		current = next;
	}

	// Append a valid word ending
	word += weightedChoice(ENDINGS);
	return word;
}

/**
 * GPA-1: discard any word that matches a real corpus token;
 * regenerate until a genuine hapax (0 corpus occurrences) is found.
 * @param {Set<string>} evaSet 
 */
export function generateHapax(evaSet) {
	let word;
	let i = 0;
	do { word = generateWord(); i++; }
	while (i < 30 && evaSet.has(word));
	return word;
}

// ── Tokenizer & consonant analysis ───────────────────────────────────────────

const MULTI = ['aiin', 'sh', 'ch', 'ee', 'ii', 'oo', 'ai'];

/** @param {string} s @returns {string[]} */
export function tokenize(s) {
	const toks = [];
	let i = 0;
	while (i < s.length) {
		const m = MULTI.find(t => s.startsWith(t, i));
		if (m) { toks.push(m); i += m.length; }
		else   { toks.push(s[i]); i++; }
	}
	return toks;
}

export const CONSONANT_SET = new Set(['b','c','ch','d','f','g','h','k','l','m','n','p','q','r','s','sh','t']);
export const LARYNGEAL_SET = new Set(['h','ch','aiin']);

/** @param {string} root @returns {{ count: number, tokens: string[] }} */
export function analyzeRoot(root) {
	const tokens = tokenize(root);
	let count = 0;
	for (let i = 0; i < tokens.length; i++) {
		if (CONSONANT_SET.has(tokens[i])) count++;
		else if (tokens[i] === 'o' && i === 0) count++;
	}
	return { count, tokens };
}

// ── Prefix hierarchy & R41 protocol (including v- conjunction) ───────────────

// 'v' added alongside CONJ_CLASS to make stripPrefixes consistent with R41 validation
export const PREFIX_LIST = ['qok','qod','qo','o','l','d','p','y','t','v'];
export const REL_CLASS   = new Set(['d']);
export const CONJ_CLASS  = new Set(['qo','qok','qod','o','v']);
export const PREP_CLASS  = new Set(['l','p']);

/** @param {string} word */
export function stripPrefixes(word) {
	const prefixes = [];
	let rem = word;
	while (rem.length > 2) {
		const match = PREFIX_LIST.find(p => rem.startsWith(p) && rem.length > p.length + 1);
		if (!match) break;
		prefixes.push(match);
		rem = rem.slice(match.length);
	}
	return { prefixes, root: rem };
}

/** @param {string[]} prefixes @param {string} root */
export function checkR41(prefixes, root) {
	if (prefixes.length > 2) return { valid: false, reason: 'b' };
	for (let i = 0; i < prefixes.length; i++) {
		if (i > 0 && REL_CLASS.has(prefixes[i]))
			return { valid: false, reason: 'd' };
		if (i < prefixes.length - 1 && PREP_CLASS.has(prefixes[i]) && CONJ_CLASS.has(prefixes[i + 1]))
			return { valid: false, reason: 'a' };
	}
	const POS_VOCAB = ['or','chaiin','okal'];
	if (prefixes.some(p => p.startsWith('sh')) && POS_VOCAB.some(v => root.includes(v)))
		return { valid: false, reason: 'c' };
	return { valid: true };
}

// ── Per-word analysis ─────────────────────────────────────────────────────────

/** @param {string} word @param {any[]} lexicon */
export function analyzeWord(word, lexicon) {
	const lexEntry = lexicon.find(e => e.eva === word);
	if (lexEntry) {
		return { word, inLexicon: true, lexEntry, prefixes: [], root: word,
			rootCons: null, r40: 'lexikon', r41: { valid: true }, d1: false, d2: false,
			maxStars: getLexiconConfidence(lexEntry.confidenceStars) };
	}

	const { prefixes, root } = stripPrefixes(word);
	const r41 = checkR41(prefixes, root);

	if (!r41.valid) {
		return { word, inLexicon: false, prefixes, root, rootCons: 0,
			r40: null, r41, d1: false, d2: false, maxStars: 'ungültig' };
	}

	const { count, tokens } = analyzeRoot(root);
	const d1       = tokens.some((t, i) => i > 0 && CONSONANT_SET.has(t) && t === tokens[i - 1]);
	const d2       = tokens.some((t, i) => i > 0 && LARYNGEAL_SET.has(t) && LARYNGEAL_SET.has(tokens[i - 1]));
	const r40      = count <= 3 ? 'cap' : 'pass';
	const maxStars = r40 === 'cap' ? '★★' : '★★★';

	return { word, inLexicon: false, prefixes, root, rootCons: count, r40, r41, d1, d2, maxStars };
}

// ── Run statistics ────────────────────────────────────────────────────────────

/** @param {ReturnType<typeof analyzeWord>[]} words */
export function computeRunStats(words) {
	const total   = words.length;
	const passed  = words.filter(r => r.maxStars === '★★★' && !r.inLexicon).length;
	const lexhits = words.filter(r => r.inLexicon).length;
	const capped  = words.filter(r => r.maxStars === '★★' && !r.inLexicon).length;
	const invalid = words.filter(r => r.maxStars === 'ungültig').length;
	const d1count = words.filter(r => r.d1).length;
	const d2count = words.filter(r => r.d2).length;
	const passRate = Math.round((passed + lexhits) / total * 100);
	return { total, passed, lexhits, capped, invalid, d1count, d2count, passRate };
}

// ── Protocol runner (10-pass process) ────────────────────────────────────────

/**
 * Runs N protocol passes and returns per-run stats plus aggregate metrics.
 * @param {any[]} lexicon
 * @param {number} [wordCount]
 * @param {number} [runCount]
 */
export function runProtocol(lexicon, wordCount = 50, runCount = 10) {
	const evaSet = new Set(lexicon.map(/** @type {any} */ e => e.eva));
	const allRuns = Array.from({ length: runCount }, (_, i) => {
		const words = Array.from({ length: wordCount }, () => analyzeWord(generateHapax(evaSet), lexicon));
		const { total, passed, lexhits, capped, invalid, passRate } = computeRunStats(words);
		return { run: i + 1, total, passRate, passed, lexhits, capped, invalid };
	});
	const rates = allRuns.map(r => r.passRate);
	const mean  = rates.reduce((a, b) => a + b, 0) / rates.length;
	const sd    = Math.sqrt(rates.map(r => (r - mean) ** 2).reduce((a, b) => a + b, 0) / rates.length);
	const min   = Math.min(...rates);
	const max   = Math.max(...rates);
	return { runs: allRuns, mean, sd, min, max };
}
