<script>
	import { REFS } from '$lib/references-data.js';
	import Box from '$lib/components/Box.svelte';
	import { CONTENT } from '$lib/content.js';

	let { onInsert } = $props();

	const C = CONTENT.references;
</script>

<section class="section" id="references">
	<h2>{C.title}</h2>
	<p>{C.intro}</p>

	<div class="references">
		{#each REFS as ref (ref.id)}
			<div>
				<h3>{ref.id} · {ref.folio} — {ref.title}{#if ref.badge} <span class="new-badge">{ref.badge}</span>{/if}</h3>
				<Box variant={ref.color} class="ref-card">
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
					<button class="ref-insert-btn" onclick={() => onInsert(ref.insert)}>{C.insertButton}</button>
				</Box>
			</div>
		{/each}
	</div>
</section>

<style>
	.references {
		display: flex;
		flex-wrap: wrap;
		gap: 0 2rem;

		& > div {
			flex: 1 1 480px;
		}
	}

	:global(.ref-card) {
		position: relative;
	}

	.ref-note {
		margin: .5rem 0 0;
		font-size: var(--text-sm);
		color: var(--ink-f);
	}

	.ref-insert-btn {
		display: block;
		margin-top: .7rem;
		font-family: var(--font-smallcaps);
		font-size: var(--text-2xs);
		letter-spacing: .1em;
		text-transform: uppercase;
		color: var(--ink-f);
		border: 1px solid var(--parch-dk);
		border-radius: var(--radius);
		background: rgba(255,255,255,.4);
		padding: .25rem .7rem;
		cursor: pointer;
		transition: all var(--t-norm);

		&:hover {
			background: rgba(255,255,255,.8);
			color: var(--ink);
			border-color: var(--border);
		}
	}
</style>
