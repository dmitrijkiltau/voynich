<script>
	import { STATS, RULES, RULES_CHANGELOG } from '$lib';
	import { getLexiconConfidence } from '$lib/lexicon-data.js';
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

	<div class="box hl updates-box hidden-print">
		<div class="box-title">Aufstufungen &amp; Absorptionen — Versionshistorie</div>
		<ul class="changelog">
			{#each RULES_CHANGELOG.slice().reverse() as entry, index (index)}
				<li><strong>{entry.version}</strong>: {@html entry.change}</li>
			{/each}
		</ul>
	</div>

	<div class="rules-wrap">
		<table class="dt">
			<thead>
				<tr>
					<th class="rule-id">#</th>
					<th class="rule-focus">Regelfokus &amp; Name</th>
					<th class="rule-syntax">Formale Syntax / Bedingung</th>
					<th class="rule-evidence">Empirische Evidenz</th>
					<th class="rule-conf">Konf.</th>
				</tr>
			</thead>
			<tbody>
				{#each RULES as r (r.id)}
					<tr id="rule-{r.id}">
						<td class="rule-id">{r.id}</td>
						<td class="rule-focus">{@html r.focus}</td>
						<td class="rule-syntax">{@html r.syntax}</td>
						<td class="rule-evidence">{@html r.evidence}</td>
						<td class="rule-conf"><span class={r.confidenceStars === 5 ? 'conf5' : 'conf'}>{getLexiconConfidence(r.confidenceStars)}</span></td>
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
			font-size: .88rem;
			line-height: 1.5;
		}
	}

	.rules-wrap {
		& thead {
			position: sticky;
			top: 0;
			z-index: 1;
		}

		& td.rule-id {
			font-family: var(--font-mono);
			color: var(--ink-f);
			font-size: .82rem;
			white-space: nowrap;
		}

		& td.rule-syntax {
			font-size: .82rem;
		}

		& td.rule-evidence {
			color: var(--ink-f);
			font-size: .82rem;
		}

		@container (max-width: 768px) {
			& thead tr {
				margin-bottom: .8rem;
			}

			& tr {
				display: grid;
				grid-template-columns: 3rem 1fr auto;
				grid-template-areas: "id focus conf"
									"syntax syntax syntax"
									"evidence evidence evidence";
				border: 1px solid var(--border);
				padding: .6rem;
				break-inside: avoid;

				&:not(:last-child) {
					margin-bottom: .8rem;
				}

				& .rule-id { grid-area: id; }
				& .rule-focus { grid-area: focus; }
				& .rule-syntax { grid-area: syntax; }
				& .rule-evidence { grid-area: evidence; }
				& .rule-conf { grid-area: conf; }

				& td.rule-id, & td.rule-conf {
					padding-bottom: 0;
				}

				& td {
					border-bottom: 0;
				}
				
				& .rule-syntax {
					padding-top: 0;
					padding-bottom: 0;
				}

				& .rule-conf {
					justify-self: end;
				}
			}
		}

		@container (min-width: 769px) {
			overflow-x: auto;
			
			& thead {
				& th.rule-id {
					width: 4rem;
				}

				& th.rule-focus {
					min-width: 20rem;
				}

				& th.rule-syntax {
					min-width: 32rem;
				}

				& th.rule-evidence {
					min-width: 32rem;
				}

				& th.rule-conf {
					width: 5rem;
				}
			}

			@container screen {
				& .rule-id {
					position: sticky;
					left: 0;
				}

				& thead th.rule-id {
					z-index: 1;
					background: var(--parch-d);
				}

				& tbody tr {
					background: var(--parch);
					
					& td.rule-id {
						z-index: 0;
						background: var(--parch);
						border-bottom: 1px solid var(--border);
					}
				}
			}
		}
	}
</style>
