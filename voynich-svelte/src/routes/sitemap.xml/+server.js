import { STATS } from '$lib';

/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
	const origin = url.origin;
	const lastmod = new Date().toISOString().slice(0, 10);

	const pages = [
		{ loc: `${origin}/`,                                    changefreq: 'daily', priority: '1.0' },
		{ loc: `${origin}/voynich-mapping`,                     changefreq: 'daily', priority: '0.8' },
		{ loc: `${origin}/voynich-mapping.md`,                  changefreq: 'daily', priority: '0.8' },
		{ loc: `${origin}/voynich-mapping-${STATS.version}.md`, changefreq: 'daily', priority: '0.8' },
		{ loc: `${origin}/folio-sitemap.xml`, 									changefreq: 'daily', priority: '0.8' },
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
	.map(
		(p) => `  <url>
    <loc>${p.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>
`;

	return new Response(body, {
		headers: { 'content-type': 'application/xml; charset=utf-8' },
	});
}
