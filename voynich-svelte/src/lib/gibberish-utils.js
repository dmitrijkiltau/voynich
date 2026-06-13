import { getLexiconConfidence } from './lexicon-data.js';

// ── Word generation ──────────────────────────────────────────────────────────

/** @type {[string,number][]} */
export const STARTS = [
	['d',14],['ch',9],['k',8],['o',10],['qo',5],['sh',7],['s',4],
	['t',4], ['y',5], ['l',5],['c',3], ['p',2], ['f',1], ['r',2],
];
/** @type {[string,number][]} */
export const MIDDLES = [
	['a',7], ['ai',6],['aiin',8],['o',8], ['or',4], ['al',4],['ol',3],
	['ch',5],['sh',3],['k',4], ['e',4], ['ee',3],['dy',4],['ky',3],
	['r',4], ['l',4], ['n',3], ['d',3], ['s',2], ['chy',3],['m',2],
];
/** @type {[string,number][]} */
export const ENDINGS = [
	['y',18],['n',7],['r',6],['aiin',12],['m',5],['l',5],
	['dy',7],['in',4],['or',4], ['ol',3], ['al',3],
];

/** @param {[string,number][]} opts */
export function weightedChoice(opts) {
	let sum = 0;
	for (const [,w] of opts) sum += w;
	let r = Math.random() * sum;
	for (const [val, w] of opts) { r -= w; if (r < 0) return val; }
	return opts[opts.length - 1][0];
}

export function generateWord() {
	const start = weightedChoice(STARTS);
	const nMid  = Math.floor(Math.random() * 3);
	const mids  = Array.from({ length: nMid }, () => weightedChoice(MIDDLES));
	const end   = weightedChoice(ENDINGS);
	return start + mids.join('') + end;
}

/** GPA-1: discard any word that matches a real corpus token; regenerate until genuine hapax.
 *  @param {Set<string>} evaSet */
export function generateHapax(evaSet) {
	let word;
	let i = 0;
	do { word = generateWord(); i++; }
	while (i < 30 && evaSet.has(word));
	return word;
}

// ── Tokenizer ────────────────────────────────────────────────────────────────

const MULTI = ['aiin','sh','ch','ee','ii','oo','ai'];

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

// ── Prefix stripping & R41 ───────────────────────────────────────────────────

export const PREFIX_LIST = ['qok','qod','qo','o','l','d','p','y','t'];
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

// ── Per-word analysis ────────────────────────────────────────────────────────

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

// ── Run stats helper ─────────────────────────────────────────────────────────

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

// ── Protocol runner ──────────────────────────────────────────────────────────

/**
 * Runs N protocol passes and returns per-run stats plus the mean pass rate.
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
