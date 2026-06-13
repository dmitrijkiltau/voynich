<script>
	import { OPEN_PROBLEMS } from '$lib/open-problems-data.js';
	import Box from '$lib/components/Box.svelte';
	import { slide } from 'svelte/transition';
	import { CONTENT } from '$lib/content.js';

	const C = CONTENT.openProblems;

	/** @type {Record<string, boolean>} */
	let openState = $state(
		Object.fromEntries(OPEN_PROBLEMS.map(p => [p.id, p.status !== 'gelöst']))
	);

	/** @param {string} id */
	function toggle(id) {
		openState[id] = !openState[id];
	}
</script>

<section class="section" id="open-problems">
	<h2>{C.title}</h2>
	<p>{C.intro}</p>

	<div class="open-problems">
		<Box variant="red" title={C.auditNote.title} class="audit-note">
			<p>{@html C.auditNote.textHtml}</p>
		</Box>

		<div class="problem-list">
			{#each OPEN_PROBLEMS as p (p.id)}
				<div class="problem-card" class:moratorium={p.status === 'moratorium'} class:is-closed={!openState[p.id]}>
					<button class="problem-header" onclick={() => toggle(p.id)} aria-expanded={openState[p.id]}>
						<span class="problem-id">{p.id}</span>
						<span class="problem-title">{p.title}</span>
						<span class="badge severity-{p.severity}">{C.severity[p.severity] ?? p.severity}</span>
						<span class="badge status-{p.status}">{C.status[p.status] ?? p.status}</span>
						<span class="chevron" class:open={openState[p.id]}></span>
					</button>
					{#if openState[p.id]}
						<div class="problem-body-wrap" transition:slide={{ duration: 180 }}>
							<p class="problem-body">{p.problem}</p>
							<div class="problem-hyp">
								<span class="hyp-label">{C.workingHypothesisLabel}</span>
								{p.hypothesis}
							</div>
						</div>
					{/if}
				</div>
			{/each}
		</div>

		<Box variant="blue" title={C.scheolBoxTitle} class="scheol-stat">
			<div class="table-wrap">
				<table class="dt">
					<thead>
						<tr>
							<th>{C.scheolColumns.position}</th>
							<th>{C.scheolColumns.sheol}</th>
							<th>{C.scheolColumns.other}</th>
						</tr>
					</thead>
					<tbody>
						<tr><td>Zeilenende / Kolophon-Final</td><td><strong>&gt;85 % aller Belege</strong></td><td>or, dom, kaiim</td></tr>
						<tr><td>Zeilenmitte (medial)</td><td>&lt;15 % — immer in Kompositum</td><td>—</td></tr>
						<tr><td>Zeilenanfang</td><td><strong>0 %</strong></td><td>—</td></tr>
					</tbody>
				</table>
				<p style="margin:.6rem 0 0;font-size:var(--text-sm);color:var(--ink-f)">{C.scheolNote}</p>
			</div>
		</Box>
	</div>
</section>

<style>
	:global(.audit-note) {
		margin-bottom: 1.5rem;
	}
	:global(.audit-note) p { margin: 0; font-size: var(--text-sm); }

	.problem-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.problem-card {
		border: 1px solid var(--parch-dk);
		border-left: 3px solid var(--red);
		border-radius: var(--radius);
		padding: .9rem 1.1rem;
		background: rgba(255, 255, 255, .25);

		&.moratorium {
			border-left-color: var(--gold);
		}

		&.is-closed {
			background: rgba(255, 255, 255, .12);
		}
	}

	.problem-header {
		appearance: none;
		background: none;
		border: none;
		padding: 0;
		font: inherit;
		color: inherit;
		text-align: left;
		width: 100%;
		cursor: pointer;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: .4rem .6rem;
		margin-bottom: .5rem;

		&:focus-visible {
			outline: 2px solid var(--gold);
			outline-offset: 3px;
			border-radius: var(--radius);
		}
	}

	.is-closed .problem-header {
		margin-bottom: 0;
	}

	.chevron {
		margin-left: auto;
		flex-shrink: 0;
		width: .45rem;
		height: .45rem;
		border-right: 1.5px solid var(--ink-f);
		border-bottom: 1.5px solid var(--ink-f);
		transform: rotate(-45deg);
		transition: transform 180ms ease;

		&.open {
			transform: rotate(45deg);
		}
	}

	.problem-id {
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		color: var(--ink-f);
		background: var(--parch-dk);
		padding: .1rem .35rem;
		border-radius: var(--radius);
	}

	.problem-title {
		font-weight: 600;
		font-size: var(--text-base);
		flex: 1;
		min-width: 120px;
	}

	.badge {
		font-family: var(--font-smallcaps);
		font-size: var(--text-2xs);
		letter-spacing: .07em;
		padding: .15rem .45rem;
		border-radius: var(--radius);
	}

	.severity-hoch            { background: color-mix(in srgb, var(--red) 12%, transparent); color: var(--red); }
	.severity-mittel          { background: color-mix(in srgb, var(--gold) 18%, transparent); color: color-mix(in srgb, var(--gold) 80%, var(--ink)); }
	.severity-strukturell     { background: color-mix(in srgb, var(--ink-f) 12%, transparent); color: var(--ink-f); }
	.severity-niedrig-mittel  { background: color-mix(in srgb, var(--gold) 10%, transparent); color: color-mix(in srgb, var(--gold) 70%, var(--ink)); }

	.status-offen      { background: color-mix(in srgb, var(--red) 10%, transparent); color: var(--red); }
	.status-ausstehend { background: color-mix(in srgb, var(--gold) 12%, transparent); color: color-mix(in srgb, var(--gold) 80%, var(--ink)); }
	.status-moratorium { background: color-mix(in srgb, var(--gold) 18%, transparent); color: color-mix(in srgb, var(--gold) 80%, var(--ink)); }
	.status-gelöst     { background: color-mix(in srgb, var(--green) 12%, transparent); color: color-mix(in srgb, var(--green) 80%, var(--ink)); }

	.problem-body {
		font-size: var(--text-sm);
		color: var(--ink);
		margin-bottom: .5rem;
	}

	.problem-hyp {
		font-size: var(--text-sm);
		color: var(--ink-f);
		border-left: 2px solid var(--parch-dk);
		padding-left: .7rem;
	}

	.hyp-label {
		font-family: var(--font-smallcaps);
		font-size: var(--text-xs);
		letter-spacing: .08em;
		color: var(--ink-f);
		margin-right: .3rem;
	}

	:global(.scheol-stat) p { margin-top: .6rem; }
</style>
