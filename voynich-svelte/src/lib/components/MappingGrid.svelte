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

<style>
	.mgrid {
		flex: 1 1 360px;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(195px, 1fr));
		gap: .38rem;
		margin: .8rem 0;
	}

	.mcell {
		display: flex;
		align-items: center;
		gap: .45rem;
		padding: .32rem .55rem;
		background: rgba(255, 255, 255, .4);
		border: 1px solid var(--parch-dk);
		border-radius: 2px;
		font-size: .85rem;
		cursor: pointer;
		transition: background .15s, border-color .15s;

		&:hover {
			background: rgba(255, 255, 255, .75);
			border-color: var(--border);
		}

		& .e {
			font-family: monospace;
			color: #5a3f1a;
			font-size: .82rem;
			min-width: 3rem;
			background: rgba(0, 0, 0, .04);
			padding: .05rem .2rem;
			border-radius: 2px;
		}

		& .arr { color: var(--border); font-size: .75rem; }

		& .h {
			font-family: var(--font-hebrew);
			font-size: 1.1rem;
			color: var(--blue);
			min-width: 2rem;
			text-align: center;
		}

		& .g {
			color: var(--ink-l);
			font-style: italic;
			font-size: .8rem;
			min-width: 0;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
</style>
