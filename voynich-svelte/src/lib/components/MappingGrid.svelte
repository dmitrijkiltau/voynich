<script>
	let { MAPPING, onInsert } = $props();
</script>

<div class="mgrid">
	{#each MAPPING as m}
		<div
			class="mcell"
			role="button"
			tabindex="0"
			title="In Eingabe einfügen: {m.eva}"
			onclick={() => onInsert(m.eva)}
			onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && onInsert(m.eva)}
		>
			<span class="e">{m.eva}</span>
			<span class="arr">→</span>
			<span class="h">{m.heb}</span>
			<span class="g">{m.name}</span>
		</div>
	{/each}
</div>
