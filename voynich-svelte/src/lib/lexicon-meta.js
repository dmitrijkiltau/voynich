/**
 * Derives lexicon metadata from folio transcription JSONs and backtest-data.js.
 * Uses Vite's import.meta.glob for eager loading at build/dev time.
 *
 * Exported: getLexiconMeta(eva), TOKEN_INDEX
 */

import { TESTED } from './backtest-data.js';
import { majorityTokens } from './eva-utils.js';

// ── Anchor set ────────────────────────────────────────────────────────────────
// Typ-I backtest predictions that are simple EVA forms (no compound expressions)
const ANCHOR_SET = new Set(
	TESTED
		.filter(e => e.type === 'I' && !/[\s·.]/.test(e.pred))
		.map(e => e.pred)
);

// ── Token index ───────────────────────────────────────────────────────────────
// Built eagerly from all available folio JSONs.
// Structure: eva → [{folio, para, majority (siglen[]), agreedCount, totalCount}]

const _folioModules = /** @type {Record<string, any>} */ (
	import.meta.glob('./folios/*.json', { eager: true })
);

/** @type {Record<string, {folio: string, para: string, majority: string[], agreedCount: number, totalCount: number}[]>} */
export const TOKEN_INDEX = {};

/** Tokens that appear at two or more consecutive positions in at least one paragraph (R19 signal). */
export const CONSECUTIVE_TOKENS = /** @type {Set<string>} */ (new Set());

for (const mod of Object.values(_folioModules)) {
	const data = /** @type {any} */ (mod.default ?? mod);
	const paragraphs = /** @type {Record<string, Record<string, string>> | undefined} */ (data?.transcriptions?.paragraphs);
	if (!paragraphs) continue;
	const folio = /** @type {string} */ (data.folio);

	for (const [para, variants] of Object.entries(paragraphs)) {
		const resolved = majorityTokens(variants);
		for (let i = 1; i < resolved.length; i++) {
			if (resolved[i].token === resolved[i - 1].token) CONSECUTIVE_TOKENS.add(resolved[i].token);
		}
		const seenInPara = new Set();
		for (const { token, majority, total } of resolved) {
			if (seenInPara.has(token)) continue;
			seenInPara.add(token);
			(TOKEN_INDEX[token] ??= []).push({ folio, para, majority, agreedCount: majority.length, totalCount: total });
		}
	}
}

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Sort key for folio IDs: f1r < f1v < f2r < f2v … */
function folioOrder(/** @type {string} */ id) {
	const m = id.match(/^f(\d+)([rv])/);
	return m ? parseInt(m[1]) * 2 + (m[2] === 'r' ? 0 : 1) : 9999;
}

// ── Public API ────────────────────────────────────────────────────────────────

/**
 * Derive metadata for a lexicon entry from folio transcriptions + backtest.
 * Only covers folios that have a JSON file in src/lib/folios/.
 *
 * @param {string} eva
 * @param {{ hasR40?: boolean, hasR41?: boolean }} [opts]
 * @returns {{
 *   isAnchor: boolean,
 *   r43: boolean,
 *   confFloor: number,
 *   computedEvidence: string,
 *   computedAnchorFolio: string,
 * }}
 */
export function getLexiconMeta(eva, { hasR40 = false, hasR41 = false } = {}) {
	const isAnchor = ANCHOR_SET.has(eva);
	// Only count occurrences where the majority of transcribers agreed on this token.
	const occurrences = (TOKEN_INDEX[eva] ?? [])
		.filter(occ => occ.agreedCount / occ.totalCount > 0.5);

	/** @type {Record<string, {para: string, majority: string[], agreedCount: number, totalCount: number}[]>} */
	const byFolio = {};
	for (const { folio, para, majority, agreedCount, totalCount } of occurrences) {
		(byFolio[folio] ??= []).push({ para, majority, agreedCount, totalCount });
	}

	const folioIds = Object.keys(byFolio).sort((a, b) => folioOrder(a) - folioOrder(b));
	const r43 = folioIds.length >= 2;

	// Confidence floor: ≥ 10 majority folios ≥ 5★, anchors ≥ 4★, R43 + ≥5 majority folios ≥ 4★, R43 met ≥ 3★, any hit ≥ 2★
	const majorityFolioCount = folioIds.length;
	const confFloor = majorityFolioCount >= 10     ? 5
                : isAnchor                         ? 4
                : r43 && majorityFolioCount >= 5   ? 4
                : r43                              ? 3
                : hasR40 && hasR41                 ? 3
                : occurrences.length > 0           ? 2
                : 1;

	let computedEvidence = '';
	let computedAnchorFolio = '';

	if (folioIds.length > 0) {
		const parts = [];
		// When 4+ distinct folios: show para detail only for first 3, collapse the rest to folio-id only
		const detailLimit = folioIds.length >= 4 ? 3 : Infinity;

		for (let fi = 0; fi < folioIds.length; fi++) {
			const fid = folioIds[fi];
			const occList = byFolio[fid];
			const isFirst = fi === 0;
			const tag = isFirst ? ', Erstbeleg' : '';

			if (fi >= detailLimit) {
				parts.push(fid);
				continue;
			}

			if (occList.length === 1) {
				const { para, majority, agreedCount, totalCount } = occList[0];
				const occ = `${fid} ${para} (${majority.join('/')} ${agreedCount}/${totalCount}${tag})`;
				parts.push(occ);
				if (isFirst) computedAnchorFolio = occ;
			} else if (occList.length <= 3) {
				const paraList = occList.map(o => o.para).join(', ');
				parts.push(`${fid} (${paraList}${tag})`);
				if (isFirst) {
					const { para, majority, agreedCount, totalCount } = occList[0];
					computedAnchorFolio = `${fid} ${para} (${majority.join('/')} ${agreedCount}/${totalCount}${tag})`;
				}
			} else if (occList.length <= 6) {
				const paraFirst = occList[0].para;
				const paraLast = occList[occList.length - 1].para;
				parts.push(`${fid} (${paraFirst}–${paraLast}, ×${occList.length}${tag})`);
				if (isFirst) {
					const { para, majority, agreedCount, totalCount } = occList[0];
					computedAnchorFolio = `${fid} ${para} (${majority.join('/')} ${agreedCount}/${totalCount}${tag})`;
				}
			} else {
				parts.push(isFirst ? `${fid} (Erstbeleg)` : fid);
				if (isFirst) {
					const { para, majority, agreedCount, totalCount } = occList[0];
					computedAnchorFolio = `${fid} ${para} (${majority.join('/')} ${agreedCount}/${totalCount}${tag})`;
				}
			}
		}
		computedEvidence = parts.join(', ');
	}

	return { isAnchor, r43, confFloor, computedEvidence, computedAnchorFolio };
}
