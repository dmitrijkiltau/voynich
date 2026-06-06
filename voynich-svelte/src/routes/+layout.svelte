<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { STATS } from '$lib';

	let { children } = $props();
</script>

<svelte:head>
	<title>Voynich Mapping {STATS.version} · {STATS.date}</title>
	<meta
		name="description"
		content="Hypothese: Das Voynich-Manuskript ist ein konsistentes EVA-zu-Hebräisch-Aramäisch-Mapping mit festem Zeichenmapping, Lexikon und Grammatikregeln."
	/>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
