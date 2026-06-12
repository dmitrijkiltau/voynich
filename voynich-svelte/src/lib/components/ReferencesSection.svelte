<script>
	import { REFS } from '$lib/references-data.js';
	let { onInsert } = $props();
</script>

<div class="references">
	{#each REFS as ref (ref.id)}
		<div>
			<h3>{ref.id} · {ref.folio} — {ref.title}{#if ref.badge} <span class="new-badge">{ref.badge}</span>{/if}</h3>
			<div class="box {ref.color} ref-card">
				{#if ref.sides}
					<div class="antonym-grid">
						{#each ref.sides as side (side.eva)}
							<div>
								<div class="layer-eva">{side.eva}</div>
								<div class="layer-heb">{side.heb}</div>
								<div class="layer-en">{side.de}</div>
							</div>
						{/each}
					</div>
				{:else}
					<div class="layer-eva">{ref.eva}</div>
					<div class="layer-heb">{ref.heb}</div>
					<div class="layer-en">{ref.de}</div>
				{/if}
				<p class="ref-note">
					{ref.note}
					{#if ref.stars}<span class={ref.stars === '★★★★★' ? 'conf5' : 'conf'}>{ref.stars}</span>{/if}
				</p>
				<button class="ref-insert-btn" onclick={() => onInsert(ref.insert)}>In Übersetzer laden</button>
			</div>
		</div>
	{/each}
</div>


<style>
  .references {
    display: flex;
    flex-wrap: wrap;
    gap: 0 2rem;

    & > div {
      flex: 1 1 480px;
    }

		.layer-de {
			font-size: var(--text-sm);
		}
  }

	.ref-card {
		position: relative;
	}

	.ref-note {
		margin: .5rem 0 0;
		font-size: var(--text-sm);
		color: var(--ink-f);
	}

	.ref-insert-btn {
		margin-top: .7rem;
		font-family: var(--font-smallcaps);
		font-size: var(--text-2xs);
		letter-spacing: .1em;
		text-transform: uppercase;
		color: var(--blue);
		background: rgba(28, 61, 90, .06);
		border: 1px solid rgba(28, 61, 90, .25);
		border-radius: 2px;
		padding: .25rem .7rem;
		cursor: pointer;
		transition: all .15s;

		&:hover {
			background: rgba(28, 61, 90, .12);
			border-color: var(--blue);
		}
	}

	.antonym-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
</style>
