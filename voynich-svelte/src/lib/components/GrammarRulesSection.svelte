<script>
	import { RULES } from '$lib/grammar-rules-data.js';
	import { STATS, isConf5 } from '$lib';
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
			<li><strong>v6.2:</strong> R40–R42, D1/D2 (Härtungsmaßnahmen)</li>
			<li><strong>v6.3:</strong> R43–R44 · <strong>v6.4:</strong> R45–R48 · <strong>v6.5:</strong> R33-Erweiterung + R49 · <strong>v6.6:</strong> R50</li>
			<li><strong>v6.8:</strong> R51 ★★★ (Illustrationszwickel-Einschübe, 3 Folios, R43 erfüllt) · <strong>v6.9:</strong> R52a ★★★★</li>
			<li><strong>v7.0–v7.2:</strong> R53 ★★★★ (Pflanzen-Titel-Duplikation, 4 Belege, Subtypen A/B/C)</li>
			<li><strong>v7.3:</strong> R58 ★★★ Kand. (3×daiin-Konzentration, Erstbeleg f25v P.2) · <strong>v7.4 → v7.8:</strong> R59 ★★★ validiert (R43: f1v + f28r)</li>
			<li><strong>v7.7:</strong> R56 ★★★ validiert (sho·sho-Emphase, R43: f24v + f27v) · <strong>v7.9:</strong> R35 ★★★ validiert (chol·chol, R43: f17v + f29v)</li>
			<li><strong>v8.1:</strong> R28 ★★★ validiert (y+t+[Terminus], R43: f16v + f28r) · Absorbiert: R32 → R25, R52 → R15 Typ D, R54 → R19, R57 → R11</li>
			<li><strong>v8.1 f30r/f30v:</strong> R19 Typ E ★★★ Kand. (ABAB-Verflechtung <span class="eva">cheor·chey·cheor·chey</span>, Erstbeleg f30r P.11) · R28 Erweiterung: <span class="eva">ytor</span> = y+t+or ★★★ Kand. (f30v P.5)</li>
			<li><strong>v8.3:</strong> R14 Neufassung (Doppelkodierung horizontal + vertikal: Pflanzenteil-Position, Farbcode dreistufig ★★★★★) · R16 Erweiterung Typ 2 (Vertikal-Zweiteilverschreibung) · R60 ★★★★ neu (Pharmakologische Pflanzenteil-Annotation, Layout-Typen A/B/C/D, 11 Folios, Muster I–VI)</li>
			<li><strong>v8.4:</strong> R14 Ebene-1-Beleg 10 (f13r Inula helenium, orange-rote Wurzel ohne Text, 12/12 Folios) · R60 Korollar Sprachregister-Unabhängigkeit ★★★ (f57r + f33r — Sprache B bestätigt) · R60 Korollar Mandrake-Ikonographie ★★★ Kand. (f33r: Bild-Toxizitätskodierung als Dual-System) · Lexikon: <span class="eva">fol</span> + <span class="eva">tal</span> CAULIS ★★★ Kand. (f13v) · <span class="eva">opchy/pchy</span> → FLOS ★★★★ · <span class="eva">dam</span> CAULIS-Kandidatur zurückgezogen (zone-invariant)</li>
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
					<tr>
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
