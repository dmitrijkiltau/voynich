import { generateMarkdown } from '$lib/markdown-export.js';
import { STATS } from '$lib';
import { redirect } from '@sveltejs/kit';

/** @param {{ params: { version: string } }} event */
export function GET({ params }) {
  if (params.version !== STATS.version) {
    redirect(302, `/voynich-mapping-${STATS.version}.md`);
  }
  const md = generateMarkdown();
  return new Response(md, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Content-Disposition': `inline; filename="voynich-mapping-v${STATS.version}.md"`,
    },
  });
}
