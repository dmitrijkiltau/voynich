<script>
	import { CONFIDENCE_SCALE, ANCHOR_FOLIOS } from '$lib/methodology-data.js';
</script>

<div class="methodology">
	<div class="methodology-grid">
		<div>
			<h3>Rückwärtstest-Prinzip</h3>
			<p>Jede Mapping-Hypothese wird durch Rückwärtstests validiert: Ein bekanntes hebräisches oder aramäisches Wort wird nach dem vorgeschlagenen Mapping in EVA kodiert und im Voynich-Korpus gesucht. Bestätigung erfordert: (a) Vorkommen im Korpus, (b) semantisch plausible Position, (c) kontextuell passende Nachbarwörter.</p>

			<h3>Konfidenzskala</h3>
			<table class="dt">
				<thead>
					<tr><th>Sterne</th><th>Bedeutung</th><th>Kriterien</th></tr>
				</thead>
				<tbody>
					{#each CONFIDENCE_SCALE as row}
						<tr>
							<td><span class={row.is5 ? 'conf5' : 'conf'}>{row.stars}</span></td>
							<td>{row.label}</td>
							<td>{row.criteria}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<div>
			<h3>Anker-Folios</h3>
			{#each ANCHOR_FOLIOS as anchor}
				<div class="box blue anchor-card">
					<div class="box-title">{anchor.folio} — {anchor.subtitle}</div>
					<p>{anchor.desc}</p>
					{#if anchor.eva}
						<div class="layer-eva">{anchor.eva}</div>
						<div class="layer-heb">{anchor.heb}</div>
						<div class="anchor-gloss">{anchor.gloss}</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.methodology-grid {
    display: flex;
		justify-content: space-between;
    flex-wrap: wrap;
    gap: 0 2rem;

    & > div:first-child {
      flex: 0 1 680px;
    }

    & > div:last-child {
      flex: 0 1 360px;
    }
	}

	.anchor-card {
		margin-bottom: .8rem;

		& p {
			margin-bottom: .5rem;
			font-size: .9rem;
		}
	}

	.anchor-gloss {
		font-style: italic;
		color: var(--ink-l);
		font-size: .9rem;
		border-left: 2px solid var(--gold);
		padding-left: .7rem;
		margin-top: .3rem;
	}
</style>
