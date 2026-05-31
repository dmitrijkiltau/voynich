import { STATS } from '$lib';
import { redirect } from '@sveltejs/kit';

export function GET() {
  redirect(302, `/voynich-mapping-${STATS.version}.md`);
}
