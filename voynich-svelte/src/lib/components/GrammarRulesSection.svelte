<script>
	import { RULES } from '$lib/grammar-rules-data.js';
	import { STATS } from '$lib';
</script>

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
		<li><strong>v6.2:</strong> R40–R42, D1/D2 (Härtungsmaßnahmen)</li>
		<li><strong>v6.3:</strong> R43–R44 · <strong>v6.4:</strong> R45–R48 · <strong>v6.5:</strong> R33-Erweiterung + R49 · <strong>v6.6:</strong> R50</li>
		<li><strong>v6.8:</strong> R51 ★★★ (Illustrationszwickel-Einschübe, 3 Folios, R43 erfüllt) · <strong>v6.9:</strong> R52a ★★★★</li>
		<li><strong>v7.0–v7.2:</strong> R53 ★★★★ (Pflanzen-Titel-Duplikation, 4 Belege, Subtypen A/B/C)</li>
		<li><strong>v7.3:</strong> R58 ★★★ Kand. (3×daiin-Konzentration, Erstbeleg f25v P.2) · <strong>v7.4 → v7.8:</strong> R59 ★★★ validiert (R43: f1v + f28r)</li>
		<li><strong>v7.7:</strong> R56 ★★★ validiert (sho·sho-Emphase, R43: f24v + f27v) · <strong>v7.9:</strong> R35 ★★★ validiert (chol·chol, R43: f17v + f29v)</li>
		<li><strong>v8.1:</strong> R28 ★★★ validiert (y+t+[Terminus], R43: f16v + f28r) · Absorbiert: R32 → R25, R52 → R15 Typ D, R54 → R19, R57 → R11</li>
		<li><strong>v8.1 f30r/f30v:</strong> R19 Typ E ★★★ Kand. (ABAB-Verflechtung <span class="eva">cheor·chey·cheor·chey</span>, Erstbeleg f30r P.11) · R28 Erweiterung: <span class="eva">ytor</span> = y+t+or ★★★ Kand. (f30v P.5)</li>
		<li><strong>v8.3:</strong> R14 Neufassung (Doppelkodierung horizontal + vertikal: Pflanzenteil-Position, Farbcode dreistufig ★★★★★) · R16 Erweiterung Typ 2 (Vertikal-Zweiteilverschreibung) · R60 ★★★★ neu (Pharmakologische Pflanzenteil-Annotation, Layout-Typen A/B/C/D, 11 Folios, Muster I–VI)</li>
	</ul>
</div>

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
