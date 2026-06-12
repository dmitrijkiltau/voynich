<script>
	import { STATS, isConf5, COMPARISON, FOLIOS, CONCLUSION } from '$lib';
</script>

<div class="sprache-a">
	<div class="box hl">
		<div class="box-title">Sprache A vs. B — Hauptunterschiede</div>
		<div class="table-wrap">
			<table class="dt">
				<thead>
					<tr><th>Merkmal</th><th>Sprache B (f57r, f103r)</th><th>Sprache A ({STATS.foliosA})</th></tr>
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
	</div>

	<h3>Quires A–D — Textkorpus (alle analysierten Folios)</h3>
	<div class="folio-wrap">
		<table class="dt">
			<thead>
				<tr><th>Folio</th><th>Pflanze</th><th>Textsignal</th><th>Konf.</th></tr>
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

	<div class="box green conclusion">
		<div class="box-title">{CONCLUSION.title}</div>
		<p class="conclusion-intro">{CONCLUSION.intro}</p>
		<ul>
			{#each CONCLUSION.items as item (item)}
				<li>{@html item}</li>
			{/each}
		</ul>
	</div>
</div>

<style>
	.feature-cell {
		color: var(--ink-f);
		font-size: .85rem;
		white-space: nowrap;
	}

	.folio-wrap {
		overflow-x: auto;
	}

	.conclusion {
		margin-top: 1.2rem;

		& .conclusion-intro {
			margin: 0 0 .6rem;
			font-size: .92rem;
		}

		& ul {
			margin: 0;
			padding-left: 1.2rem;
			display: flex;
			flex-direction: column;
			gap: .35rem;
		}

		& li {
			font-size: .88rem;
			line-height: 1.55;
		}
	}
</style>
