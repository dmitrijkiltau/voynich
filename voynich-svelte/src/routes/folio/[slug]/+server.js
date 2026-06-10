import { FOLIO_DATA, FOLIO_PAGES } from '$lib';
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
	done:      'Vollübersetzung',
	confirmed: 'analysiert (★★★★+)',
	partial:   'Anker / Teilanalyse',
});

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

/** @param {string} folioId @param {any} meta @param {any} data */
function generateMarkdown(folioId, meta, data) {
	const quire = findQuire(folioId);
	const tr = quire ? trUrl(folioId, quire.q) : null;
	const lines = [];

	lines.push(`# Folio ${folioId} — Voynich-Manuskript`);
	lines.push('');

	if (meta?.status) lines.push(`**Status:** ${ST_LABEL[meta.status] ?? meta.status}`);
	if (meta?.registerType) lines.push(`**Register-Typ:** ${meta.registerType}`);
	if (meta?.languageClass) lines.push(`**Sprach-Klasse:** ${meta.languageClass}`);
	if (meta?.writerHand !== undefined) lines.push(`**Schreiber-Hand:** ${meta.writerHand}`);

	if (meta?.transcribers?.length) {
		lines.push('');
		lines.push('**Transkriptoren:**');
		for (const t of meta.transcribers) {
			lines.push(`- ${t.siglen.join(' · ')} — ${t.label}`);
		}
	}

	if (meta?.consensusDenominators?.length) {
		lines.push('');
		lines.push('**Konsens-Nenner:**');
		for (const k of meta.consensusDenominators) {
			lines.push(`- ${k}`);
		}
	}

	if (meta?.scanUrl || tr) {
		lines.push('');
		if (meta?.scanUrl) lines.push(`**Scan (Beinecke Digital Library):** ${meta.scanUrl}`);
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
	const folioId = slugToFolioId(slug);
	const folioEntry = FOLIO_DATA[folioId] ?? null;

	if (!key && !folioEntry) error(404, `Folio ${slug} nicht gefunden`);

	const data = key ? /** @type {any} */ (folioModules[key]) : null;
	// Merge: JSON file fields provide rich metadata, FOLIO_DATA wins on conflicts
	const { folio: _f, iconographic: _i, ...jsonMeta } = data ?? {};
	const meta = { ...jsonMeta, ...(folioEntry ?? {}) };
	const md = generateMarkdown(folioId, meta, data);

	return new Response(md, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Content-Disposition': `inline; filename="${slug}.md"`,
		},
	});
}
