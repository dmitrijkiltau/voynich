// Folio-specific sitemap — one entry per JSON file in src/lib/folios/
// New folios are picked up automatically at the next build.
const folioModules = import.meta.glob('../../lib/folios/*.json', { eager: true });

const folioSlugs = Object.keys(folioModules)
	.map((p) => p.split('/').pop()?.replace('.json', '') ?? '')
	.filter(Boolean);

/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
	const origin = url.origin;
	const lastmod = new Date().toISOString().slice(0, 10);

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${folioSlugs
	.map(
		(slug) => `  <url>
    <loc>${origin}/folio/${slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>`
	)
	.join('\n')}
</urlset>
`;

	return new Response(body, {
		headers: { 'content-type': 'application/xml; charset=utf-8' },
	});
}
