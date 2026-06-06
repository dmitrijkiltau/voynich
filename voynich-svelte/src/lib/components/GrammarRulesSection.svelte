<script>
	import { STATS, isConf5, RULES, RULES_CHANGELOG } from '$lib';
</script>

<section class="section" id="grammar-rules">
	<h2>VII. Grammatikregeln</h2>

	<p>
		{RULES.length} Regeln gesamt: <strong>{STATS.validatedRules} validiert</strong> (≥ 2 unabhängige Belege)
		+ <strong>{RULES.length - STATS.validatedRules} Kandidaten</strong>.
		R14 und R20 gesichert (★★★★★). Regeln mit ⚠ im Titel sind Warnsignale ohne automatische Konfidenzreduktion.
		<strong>Regelmoratorium beendet (v8.1):</strong> Verhältnis
		{STATS.validatedRules}:{RULES.length - STATS.validatedRules}
		= {(STATS.validatedRules / (RULES.length - STATS.validatedRules)).toFixed(2).replace('.', ',')}:1
		— Ziel ≥ 1,5:1 erreicht. R60+ freigegeben.
	</p>

	<div class="box hl updates-box">
		<div class="box-title">Aufstufungen &amp; Absorptionen — Versionshistorie</div>
		<ul>
			{#each RULES_CHANGELOG as entry}
				<li>{@html entry}</li>
			{/each}
		</ul>
	</div>

	<div class="rules-wrap">
		<table class="dt">
			<thead>
				<tr>
					<th class="rule-id">#</th>
					<th class="rule-text">Regel</th>
					<th class="rule-evidence">Evidenz</th>
					<th class="rule-conf">Konf.</th>
				</tr>
			</thead>
			<tbody>
				{#each RULES as r}
					<tr id="rule-{r.id}">
						<td class="rule-id">{r.id}</td>
						<td class="rule-text">{@html r.rule}</td>
						<td class="rule-evidence">{@html r.evidence}</td>
						<td class="rule-conf"><span class={isConf5(r.stars) ? 'conf5' : 'conf'}>{r.stars}</span></td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</section>

<style>
	#grammar-rules {
		container-type: inline-size;
	}

	.updates-box {
		margin-bottom: 1.4rem;

		& ul {
			margin: .4rem 0 0;
			padding-left: 1.2rem;
			display: flex;
			flex-direction: column;
			gap: .3rem;
		}

		& li {
			font-size: .88rem;
			line-height: 1.5;
		}
	}

	.rules-wrap {
		& td.rule-id {
			font-family: var(--font-mono);
			color: var(--ink-f);
			font-size: .82rem;
			white-space: nowrap;
		}

		& td.rule-evidence {
			color: var(--ink-f);
			font-size: .82rem;
		}

		
		@container (max-width: 768px) {
			& tr {
				display: grid;
				grid-template-columns: 72px auto;
				grid-template-areas: "id conf"
									"rule rule"
									"evidence evidence";

				& .rule-id { grid-area: id; }
				& .rule-text { grid-area: rule; }
				& .rule-evidence { grid-area: evidence; }
				& .rule-conf { grid-area: conf; }

				& td.rule-id, & td.rule-conf {
					padding-bottom: 0;
				}

				& td.rule-id, & td.rule-text, & td.rule-conf {
					border-bottom: 0;
				}
			}
		}
		
		@media print {
			& tr {
				break-inside: avoid;
				display: grid;
				grid-template-columns: 72px auto;
				grid-template-areas: "id conf"
									"rule rule"
									"evidence evidence";

				& .rule-id { grid-area: id; }
				& .rule-text { grid-area: rule; }
				& .rule-evidence { grid-area: evidence; }
				& .rule-conf { grid-area: conf; }

				& .rule-id, & .rule-text, & .rule-conf {
					border-bottom: 0;
				}
			}
		}
	}
</style>
