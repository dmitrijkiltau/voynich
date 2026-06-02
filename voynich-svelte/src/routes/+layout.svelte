<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { STATS } from '$lib';

	let { children } = $props();
</script>

<svelte:head>
	<title>Voynich Mapping {STATS.version} · {STATS.date}</title>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
