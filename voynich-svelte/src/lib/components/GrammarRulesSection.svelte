<script>
	import { RULES } from '$lib/grammar-rules-data.js';
</script>

<p>Alle {RULES.length} Regeln wurden durch mindestens zwei unabhängige Belege validiert. R14 und R20 gelten als gesichert (★★★★★).</p>

<div class="rules-wrap">
	<table class="dt">
		<thead>
			<tr><th>#</th><th>Regel</th><th>Evidenz</th><th>Konf.</th></tr>
		</thead>
		<tbody>
			{#each RULES as r}
				<tr>
					<td class="rule-id">{r.id}</td>
					<td>{@html r.rule}</td>
					<td class="note-cell">{r.evidence}</td>
					<td><span class={r.is5 ? 'conf5' : 'conf'}>{r.stars}</span></td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.rules-wrap {
		overflow-x: auto;
	}

	.rule-id {
		font-family: var(--font-mono);
		color: var(--ink-f);
		font-size: .82rem;
		white-space: nowrap;
	}

	.note-cell {
		color: var(--ink-f);
		font-size: .82rem;
	}
</style>
