<script>
	import { RULES } from '$lib/grammar-rules-data.js';
	import { STATS } from '$lib';
</script>

<p>{RULES.length} Regeln gesamt: <strong>{STATS.validatedRules} validiert</strong> (≥ 2 unabhängige Belege) + <strong>{RULES.length - STATS.validatedRules} Kandidaten</strong> (darunter v6.2 R40–R42, D1/D2; v6.3 R43–R44; v6.4 R45–R48; v6.5 R33-Erweiterung + R49; v6.6 R50; v6.8 R51 ★★★ gesichert (Illustrationszwickel-Einschübe, 3 Folios, R43 erfüllt) + R52 ★★ Kand. (Kolophon-Trias, 1 Beleg); v6.9 R52a ★★★★; v7.0–v7.2 R53 ★★★★ (Pflanzen-Titel-Duplikation, 4 Belege, Subtypen A/B/C, R43 Mehrfachbestätigung); v7.2 R54–R57 ★★–★★★ Kand.; v7.3 R58 ★★★ Kand. (3×daiin-Konzentration, Corpus-Erstbeleg f25v P.2)). R14 und R20 gelten als gesichert (★★★★★). Regeln mit ⚠ im Titel sind Warnsignale ohne automatische Konfidenzreduktion.</p>

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
					<td class="note-cell">{@html r.evidence}</td>
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
