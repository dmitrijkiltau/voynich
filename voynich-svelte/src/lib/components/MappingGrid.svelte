<script>
	let { MAPPING, onInsert } = $props();
</script>

<div class="mgrid">
	{#each MAPPING as m (m.eva)}
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
		container-type: inline-size;
		flex: 1 1 360px;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
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
		border-radius: var(--radius);
		font-size: var(--text-sm);
		cursor: pointer;
		transition: background var(--t-norm), border-color var(--t-norm);

		&:hover {
			background: rgba(255, 255, 255, .75);
			border-color: var(--border);
		}

		& .e {
			font-family: var(--font-mono);
			color: var(--ink-eva);
			font-size: var(--text-sm);
			min-width: 3rem;
			background: rgba(0, 0, 0, .04);
			padding: .05rem .2rem;
			border-radius: var(--radius);
		}

		& .arr { color: var(--border); font-size: var(--text-xs); }

		& .h {
			font-family: var(--font-hebrew);
			font-size: var(--text-md);
			color: var(--blue);
			min-width: 2rem;
			text-align: center;
		}

		& .g {
			color: var(--ink-l);
			font-style: italic;
			font-size: var(--text-sm);
			min-width: 0;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
</style>
