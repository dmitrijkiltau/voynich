<script>
	import { STATS, isConf5, COMPARISON, FOLIOS, CONCLUSION } from '$lib';
	import Box from '$lib/components/Box.svelte';
	import { CONTENT } from '$lib/content.js';

	const C = CONTENT.languageA;
</script>

<section class="section" id="language-a">
	<h2>{C.title(STATS.foliosA)}</h2>

	<div class="sprache-a">
		<Box variant="hl" title={C.comparisonTitle}>
			<div class="table-wrap">
				<table class="dt">
					<thead>
						<tr>
							<th>{C.columns.feature}</th>
							<th>{C.columns.langBHeader}</th>
							<th>{C.columns.langAHeader(STATS.foliosA)}</th>
						</tr>
					</thead>
					<tbody>
						{#each COMPARISON as c (c.feature)}
							<tr>
								<td class="feature-cell">{c.feature}</td>
								<td class="note-cell">{c.langB}</td>
								<td class="note-cell">{c.langA}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</Box>

		<h3>{C.corpusTitle}</h3>
		<div class="folio-wrap">
			<table class="dt">
				<thead>
					<tr>
						<th>{C.columns.folio}</th>
						<th>{C.columns.plant}</th>
						<th>{C.columns.signal}</th>
						<th>{C.columns.confidence}</th>
					</tr>
				</thead>
				<tbody>
					{#each FOLIOS as f (f.folio)}
						<tr>
							<td class="folio-cell">{f.folio}</td>
							<td>{f.plant}</td>
							<td class="note-cell">{f.signal}</td>
							<td><span class={isConf5(f.stars) ? 'conf5' : 'conf'}>{f.stars}</span></td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<div class="conclusion">
			<Box variant="green" title={CONCLUSION.title}>
				<p class="conclusion-intro">{CONCLUSION.intro}</p>
				<ul>
					{#each CONCLUSION.items as item (item)}
						<li>{@html item}</li>
					{/each}
				</ul>
			</Box>
		</div>
	</div>
</section>

<style>
	.feature-cell {
		color: var(--ink-f);
		font-size: var(--text-sm);
		white-space: nowrap;
	}

	.folio-wrap {
		overflow-x: auto;
	}

	.conclusion {
		margin-top: 1.2rem;

		& .conclusion-intro {
			margin: 0 0 .6rem;
			font-size: var(--text-sm);
		}

		& ul {
			margin: 0;
			padding-left: 1.2rem;
			display: flex;
			flex-direction: column;
			gap: .35rem;
		}

		& li {
			font-size: var(--text-sm);
			line-height: 1.55;
		}
	}
</style>
