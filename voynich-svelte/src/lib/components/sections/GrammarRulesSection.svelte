<script>
	import { STATS, RULES, RULES_CHANGELOG } from '$lib';
	import { getLexiconConfidence } from '$lib/lexicon-data.js';
	import Box from '$lib/components/Box.svelte';
	import { CONTENT } from '$lib/content.js';

	const C = CONTENT.grammarRules;
	const CITATION_LIMIT = 4;

	/** @type {Record<string, boolean>} */
	let expanded = $state({});

	/**
	 * Split a semicolon-separated evidence string into discrete citation items.
	 * The convention in grammar-rules-data.js is to separate citations with ';'.
	 * @param {string} evidence
	 * @returns {string[]}
	 */
	function parseCitations(evidence) {
		return evidence.split(';').map(s => s.trim()).filter(Boolean);
	}

	/** @param {string} id */
	function toggle(id) {
		expanded[id] = !expanded[id];
	}
</script>

<section class="section" id="grammar-rules">
	<h2>{C.title}</h2>

	<p>{@html C.introHtml(RULES.length, STATS.validatedRules)}</p>

	<div class="updates-box hidden-print">
		<Box variant="hl" title={C.changelogTitle}>
			<ul class="changelog">
				{#each RULES_CHANGELOG.slice().reverse() as entry, index (index)}
					<li><strong>{entry.version}</strong>: {@html entry.change}</li>
				{/each}
			</ul>
		</Box>
	</div>

	<div class="rules-list">
		{#each RULES as r (r.id)}
			{@const citations = parseCitations(r.evidence)}
			{@const isExpanded = !!expanded[r.id]}
			{@const hidden = Math.max(0, citations.length - CITATION_LIMIT)}
			<div class="rule-card" id="rule-{r.id}">
				<div class="rule-conf">
					<span class={r.confidenceStars === 5 ? 'conf5' : 'conf'}>{getLexiconConfidence(r.confidenceStars)}</span>
				</div>
				<div class="rule-header">
					<span class="rule-badge">{r.id}</span>
					<span class="rule-focus">{@html r.focus}</span>
				</div>
				<div class="rule-body">
					<div class="rule-section">
						<span class="section-label">{C.columns.syntax}</span>
						<div class="section-content syntax">{@html r.syntax}</div>
					</div>
					<div class="rule-section">
						<span class="section-label">{C.columns.evidence}</span>
						<div class="section-content evidence">
							<ul class="citation-list" class:is-collapsed={!isExpanded && hidden > 0}>
								{#each citations as c, i (i)}
									<li>{@html c}</li>
								{/each}
							</ul>
							{#if hidden > 0}
								<button class="expand-btn" onclick={() => toggle(r.id)}>
									{isExpanded ? '▲ weniger' : `+${hidden} weitere`}
								</button>
							{/if}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	#grammar-rules {
		container-type: inline-size;
	}

	.updates-box {
		margin-bottom: 1.4rem;

		& ul.changelog {
			max-height: 128px;
			margin: .4rem 0 0;
			padding-left: 1.2rem;
			display: flex;
			flex-direction: column;
			gap: .3rem;
			overflow-y: auto;
		}

		& li {
			font-size: var(--text-sm);
			line-height: 1.5;
		}
	}

	.rules-list {
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
	}

	.rule-card {
		position: relative;
		border: 1px solid var(--border);
		border-radius: 6px;
		padding: 1rem 1rem .85rem;
		break-inside: avoid;

		@media screen {
			background: var(--parch);
		}
	}

	.rule-conf {
		position: absolute;
		top: .85rem;
		right: .9rem;
		font-size: var(--text-sm);
	}

	.rule-header {
		display: flex;
		align-items: baseline;
		flex-wrap: wrap;
		gap: .4rem .5rem;
		padding-right: 4rem;
		padding-bottom: .65rem;
		margin-bottom: .75rem;
		border-bottom: 1px solid var(--border);
	}

	.rule-badge {
		flex-shrink: 0;
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		font-weight: 700;
		color: var(--ink-f);
		background: var(--parch-d);
		border: 1px solid var(--border);
		border-radius: 3px;
		padding: .1em .45em;
		line-height: 1.4;
	}

	.rule-focus {
		font-size: var(--text-base);
		font-weight: 600;
		line-height: 1.4;
	}

	.rule-body {
		display: flex;
		flex-wrap: wrap;
		gap: .6rem;

		& > .rule-section {
			flex: 1 1 280px;
		}
	}

	.rule-section {
		display: flex;
		flex-direction: column;
		gap: .25rem;
	}

	.section-label {
		font-size: var(--text-xs, .7rem);
		text-transform: uppercase;
		letter-spacing: .06em;
		color: var(--ink-f);
		font-weight: 600;
	}

	.section-content {
		font-size: var(--text-sm);
		line-height: 1.55;
		padding: .55rem .7rem;
		border-radius: 4px;
		border-left: 3px solid var(--border);
		background: var(--parch-d);
		color: var(--ink);
	}

	.section-content.evidence {
		border-left-color: var(--ink-l);
		padding-bottom: .4rem;
	}

	/* Citation list */
	.citation-list {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: .3rem;
	}

	.citation-list li {
		margin: 0;
		padding: 0;
		padding-left: .9rem;
		position: relative;
	}

	.citation-list li::before {
		content: '·';
		position: absolute;
		left: 0;
		color: var(--ink-f);
		font-weight: 700;
	}

	.citation-list.is-collapsed li:nth-child(n+5) {
		display: none;
	}

	.expand-btn {
		all: unset;
		display: inline-block;
		margin-top: .4rem;
		font-size: var(--text-xs, .7rem);
		color: var(--ink-f);
		cursor: pointer;
		text-decoration: underline;
		text-underline-offset: 2px;
	}

	.expand-btn:hover {
		color: var(--ink);
	}

	@media print {
		.rule-card {
			border: none;
			border-top: 1px solid var(--border);
			border-radius: 0;
			padding: .6rem 0;
			gap: .5rem;
		}

		.rule-conf {
			position: static;
			display: inline-block;
		}

		.rule-header {
			border-bottom: none;
			padding-bottom: .3rem;
			margin-bottom: .3rem;
		}

		.section-content {
			padding: .3rem .5rem;
			background: none;
		}

		/* Always show all citations in print */
		.citation-list.is-collapsed li:nth-child(n+5) {
			display: list-item;
		}

		.expand-btn {
			display: none;
		}
	}
</style>
