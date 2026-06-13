import { FOLIO_PAGES } from '$lib';
import { error } from '@sveltejs/kit';

// Eager-import all folio JSON files at build time
const folioModules = import.meta.glob('../../../lib/folios/*.json', { eager: true });

const MORPH_LABELS = /** @type {Record<string,string>} */ ({
	radix:       'RADIX',
	caulis:      'CAULIS',
	folia:       'FOLIA',
	flosFructus: 'FLOS/FRUCTUS',
	coloring:    'Färbung',
});

const ST_LABEL = /** @type {Record<string,string>} */ ({
	done:      'übersetzt',
	confirmed: 'analysiert',
	partial:   'transkribiert',
});

/** Derive display status from JSON content (mirrors FolioRegister.svelte st()). */
function deriveStatus(/** @type {any} */ data) {
	if (!data) return null;
	// TODO: lexicon coverage > 90% on transcription paragraphs → 'done' (Übersetzt)
	if (data.iconographic) return 'confirmed';
	return 'partial';
}

/** @param {string} slug e.g. "f001v" → "f1v" */
function slugToFolioId(slug) {
	const m = slug.match(/^f0*(\d+)(.*)$/);
	return m ? `f${parseInt(m[1])}${m[2]}` : slug;
}

/** @param {string} folioId @param {string} quire */
function trUrl(folioId, quire) {
	const m = folioId.match(/^f(\d+)(.*)$/);
	if (!m) return null;
	return `https://voynich.nu/${quire}/f${m[1].padStart(3, '0')}${m[2]}_tr.txt`;
}

/** @param {string} folioId */
function findQuire(folioId) {
	for (const q of FOLIO_PAGES) {
		if (q.pages.includes(folioId)) return q;
	}
	return null;
}

/** @param {string} folioId @param {any} data */
function generateMarkdown(folioId, data) {
	const quire = findQuire(folioId);
	const tr = quire ? trUrl(folioId, quire.q) : null;
	const lines = [];

	lines.push(`# Folio ${folioId} — Voynich-Manuskript`);
	lines.push('');

	const status = deriveStatus(data);
	if (status) lines.push(`**Status:** ${ST_LABEL[status]}`);
	if (data?.registerType) lines.push(`**Register-Typ:** ${data.registerType}`);
	if (data?.languageClass) lines.push(`**Sprach-Klasse:** ${data.languageClass}`);
	if (data?.writerHand !== undefined) lines.push(`**Schreiber-Hand:** ${data.writerHand}`);

	if (data?.scanUrl || tr) {
		lines.push('');
		if (data?.scanUrl) lines.push(`**Scan (Beinecke Digital Library):** ${data.scanUrl}`);
		if (tr) lines.push(`**Transkription (Voynich.nu):** ${tr}`);
	}

	const ico = data?.iconographic;
	if (ico) {
		lines.push('');
		lines.push('---');
		lines.push('');
		const rules = ico.rules?.length ? ` (${ico.rules.join(' / ')})` : '';
		lines.push(`## Ikonographischer & Layout-Abgleich${rules}`);
		lines.push('');

		if (ico.illustrationType) {
			lines.push(`**Illustrationstyp:** ${ico.illustrationType}`);
			lines.push('');
		}

		if (ico.plantMorphology) {
			lines.push('**Pflanzenmorphologie:**');
			for (const [key, val] of Object.entries(ico.plantMorphology)) {
				const label = MORPH_LABELS[key] ?? key.toUpperCase();
				lines.push(`- **${label}:** ${val}`);
			}
			lines.push('');
		}

		if (ico.botanicalIdentification?.length) {
			lines.push('**Botanische Identifikation (extern):**');
			for (const item of ico.botanicalIdentification) {
				lines.push(`- ${item}`);
			}
			lines.push('');
		}

		if (ico.layoutStructure) {
			lines.push('**Layout-Struktur:**');
			lines.push(ico.layoutStructure);
			lines.push('');
		}

		if (ico.r60Status) {
			lines.push(`**R60-Status:** ${ico.r60Status}`);
		}
	}

	return lines.join('\n');
}

/** @type {import('./$types').RequestHandler} */
export function GET({ params }) {
	const { slug } = params;
	const key = Object.keys(folioModules).find(k => k.endsWith(`/${slug}.json`));

	if (!key) error(404, `Folio ${slug} nicht gefunden`);

	const data = /** @type {any} */ (folioModules[key]);
	const md = generateMarkdown(slugToFolioId(slug), data);

	return new Response(md, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Content-Disposition': `inline; filename="${slug}.md"`,
		},
	});
}
