/**
 * Shared EVA transcription tokenization utilities.
 * Separators in Stolfi/voynich.nu format: . - = {anything}
 * Note: ! is an intra-token uncertainty marker, NOT a separator.
 */

/**
 * Split a single EVA transcription line into tokens.
 * @param {string} line
 * @returns {string[]}
 */
export function tokenizeEvaLine(line) {
	return line
		.replace(/\{[^}]+\}/g, '.')
		.replace(/[-=]/g, '.')
		.split('.')
		.map(t => t.trim())
		.filter(Boolean);
}

/**
 * Compute per-position majority consensus across transcribers for one paragraph.
 * @param {Record<string, string>} variants  siglen → raw EVA line
 * @returns {{ token: string, majority: string[], total: number, minority: Record<string, string> }[]}
 */
export function majorityTokens(variants) {
	const entries = Object.entries(variants);
	if (!entries.length) return [];
	/** @type {Record<string, string[]>} */
	const tokenized = Object.fromEntries(entries.map(([s, text]) => [s, tokenizeEvaLine(text)]));
	const maxLen = Math.max(...Object.values(tokenized).map(t => t.length));
	// Restrict positional voting to transcribers whose token count equals maxLen.
	// Shorter tokenizations have merged tokens and would produce positional misalignment.
	const eligible = Object.entries(tokenized).filter(([, t]) => t.length === maxLen);
	const result = [];
	for (let i = 0; i < maxLen; i++) {
		/** @type {Record<string, string[]>} */
		const votes = {};
		for (const [s, tokens] of eligible) {
			const t = tokens[i];
			if (t) (votes[t] ??= []).push(s);
		}
		const sorted = Object.entries(votes).sort((a, b) => b[1].length - a[1].length);
		if (!sorted.length) continue;
		const [token, majority] = sorted[0];
		/** @type {Record<string, string>} */
		const minority = {};
		for (const [t, sigs] of sorted.slice(1)) {
			if (t && t !== token) {
				for (const s of sigs) minority[s] = t;
			}
		}
		result.push({ token, majority, total: entries.length, minority });
	}
	return result;
}
