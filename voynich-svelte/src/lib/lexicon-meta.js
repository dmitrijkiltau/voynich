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
// Structure: eva → [{folioId, para, majority (siglen[]), total}]

const _folioModules = /** @type {Record<string, any>} */ (
	import.meta.glob('./folios/*.json', { eager: true })
);

/** @type {Record<string, {folioId: string, para: string, majority: string[], total: number}[]>} */
export const TOKEN_INDEX = {};

for (const mod of Object.values(_folioModules)) {
	const data = /** @type {any} */ (mod.default ?? mod);
	const lines = /** @type {Record<string, Record<string, string>> | undefined} */ (data?.transcriptions?.lines);
	if (!lines) continue;
	const folioId = /** @type {string} */ (data.folio);

	for (const [para, variants] of Object.entries(lines)) {
		const seenInPara = new Set();
		for (const { token, majority, total } of majorityTokens(variants)) {
			if (seenInPara.has(token)) continue; // deduplicate same token within a paragraph
			seenInPara.add(token);
			(TOKEN_INDEX[token] ??= []).push({ folioId, para, majority, total });
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
 * @returns {{
 *   isAnchor: boolean,
 *   r43: boolean,
 *   confFloor: number,
 *   computedEvidence: string,
 *   computedAnchorFolio: string,
 * }}
 */
export function getLexiconMeta(eva) {
	const isAnchor = ANCHOR_SET.has(eva);
	const occurrences = TOKEN_INDEX[eva] ?? [];

	/** @type {Record<string, {para: string, majority: string[], total: number}[]>} */
	const byFolio = {};
	for (const { folioId, para, majority, total } of occurrences) {
		(byFolio[folioId] ??= []).push({ para, majority, total });
	}

	const folioIds = Object.keys(byFolio).sort((a, b) => folioOrder(a) - folioOrder(b));
	const r43 = folioIds.length >= 2;

	// Confidence floor: anchors ≥ 4★, R43 met ≥ 3★, any JSON hit ≥ 2★, no JSON hit → 0 (no constraint)
	const confFloor = isAnchor ? 4 : r43 ? 3 : occurrences.length > 0 ? 2 : 0;

	let computedEvidence = '';
	let computedAnchorFolio = '';

	if (folioIds.length > 0) {
		const parts = [];
		for (let fi = 0; fi < folioIds.length; fi++) {
			const fid = folioIds[fi];
			for (const { para, majority, total } of byFolio[fid]) {
				const tag = fi === 0 ? ', Erstbeleg' : '';
				const occ = `${fid} ${para} (${majority.join('/')} ${majority.length}/${total}${tag})`;
				parts.push(occ);
				if (fi === 0 && !computedAnchorFolio) computedAnchorFolio = occ;
			}
		}
		computedEvidence = parts.join(' + ');
	}

	return { isAnchor, r43, confFloor, computedEvidence, computedAnchorFolio };
}
