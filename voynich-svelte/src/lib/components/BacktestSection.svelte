<script>
	import { STATS, TESTED } from '$lib/backtest-data.js';

	const typeI  = TESTED.filter(t => t.type === 'I');
	const typeII = TESTED.filter(t => t.type === 'II');
</script>

<div class="backtest">
	<p>{typeI.length + typeII.length} hebräische/aramäische Wörter wurden nach dem EVA-Mapping kodiert und im Korpus (Sprache B) gesucht. Ab v7.5 werden zwei Klassen unterschieden: <strong>Typ I</strong> (genuine Vorhersagen — Prä-Analyse-Anker, eingefroren vor jeder Folioanalyse) und <strong>Typ II</strong> (interne Kohärenz — post-hoc-Entdeckungen, belegen Systemkonsistenz, keine externe Vorhersagekraft).</p>

	<div class="headline-stats">
		<div class="hs-card gold">
			<div class="hs-num">11/11</div>
			<div class="hs-label">Typ I — Genuine Vorhersagen</div>
			<div class="hs-sub">100 % · 0 Falsch-Positive</div>
		</div>
		<div class="hs-card green">
			<div class="hs-num">18/21</div>
			<div class="hs-label">Typ II — Interne Kohärenz</div>
			<div class="hs-sub">86 % · 0 Falsch-Positive</div>
		</div>
	</div>

	<div class="stat-bars">
		{#each STATS as s}
			<div class="stat-row">
				<span class="stat-label">{s.label}</span>
				<div class="stat-bar-wrap">
					<div class="stat-bar" style="width:{s.pct}%; background:{s.color}"></div>
				</div>
				<span class="stat-num">{s.num}</span>
			</div>
		{/each}
	</div>

	<div class="box green no-fp">
		<p style="margin:0;font-size:.92rem">Entscheidend: <strong>Keine einzige Vorhersage ergab einen Falsch-Positiv-Treffer.</strong> Kein kodiertes Wort taucht in einem semantisch inkohärenten Kontext auf — in beiden Klassen, bei einem Zufallsalphabet statistisch ausgeschlossen.</p>
	</div>

	<h3>Typ I — Genuine Vorhersagen <span class="type-badge type-i">11/11 · 100%</span></h3>
	<p class="type-note">Diese {typeI.length} Wörter wurden als semantische Priors <em>vor</em> jeder Folioanalyse definiert. Sie sind eingefroren und können nicht rückwirkend erweitert werden. Ihre Bestätigung ist die valide Kernaussage der Rückwärtsteststärke.</p>
	<div class="tested-wrap">
		<table class="dt">
			<thead>
				<tr><th>Vorhersage</th><th>Hebräisch</th><th>Befund</th><th>Kontext</th></tr>
			</thead>
			<tbody>
				{#each typeI as t}
					<tr>
						<td><span class="eva">{t.pred}</span></td>
						<td><span class="heb-sm">{t.heb}</span></td>
						<td class="result-cell">{t.result}</td>
						<td class="note-cell">{t.context}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<h3>Typ II — Interne Kohärenz <span class="type-badge type-ii">18/21 · 86%</span></h3>
	<p class="type-note">Diese {typeII.length} Wörter wurden <em>während</em> der Folioanalyse erstmals identifiziert. Sie belegen interne Systemkonsistenz, aber keine externe Vorhersagekraft. Die 3 nicht gefundenen Einträge bleiben als offene Validierungspunkte.</p>
	<div class="tested-wrap">
		<table class="dt">
			<thead>
				<tr><th>Vorhersage</th><th>Hebräisch</th><th>Befund</th><th>Kontext</th></tr>
			</thead>
			<tbody>
				{#each typeII as t}
					<tr class:not-found={t.result.startsWith('✗')}>
						<td><span class="eva">{t.pred}</span></td>
						<td><span class="heb-sm">{t.heb}</span></td>
						<td class="result-cell">{t.result}</td>
						<td class="note-cell">{t.context}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style>
	.headline-stats {
		display: flex;
		gap: 1rem;
		margin: 1.2rem 0;
		flex-wrap: wrap;
	}

	.hs-card {
		flex: 1;
		min-width: 180px;
		padding: .9rem 1.2rem;
		border-radius: 2px;
		border: 1px solid var(--parch-dk);
		background: rgba(255, 255, 255, .3);

		&.gold { border-left: 3px solid var(--gold); }
		&.green { border-left: 3px solid var(--green); }
	}

	.hs-num {
		font-family: var(--font-display);
		font-size: 1.6rem;
		line-height: 1.1;
		color: var(--ink);
	}

	.hs-label {
		font-family: var(--font-smallcaps);
		font-size: .72rem;
		letter-spacing: .08em;
		color: var(--ink-l);
		margin-top: .2rem;
	}

	.hs-sub {
		font-size: .78rem;
		color: var(--ink-f);
		margin-top: .1rem;
	}

	.stat-bars {
		display: flex;
		flex-direction: column;
		gap: .5rem;
		margin: 1.2rem 0;
	}

	.stat-row {
		display: flex;
		align-items: center;
		gap: .8rem;
		font-size: .88rem;
	}

	.stat-label {
		min-width: 340px;
		color: var(--ink-l);

		@media (max-width: 768px) {
			min-width: 160px;
		}
	}

	.stat-bar-wrap {
		flex: 1;
		background: var(--parch-dk);
		border-radius: 1px;
		height: 8px;
		overflow: hidden;
	}

	.stat-bar {
		height: 100%;
		border-radius: 1px;
		transition: width .4s ease;
	}

	.stat-num {
		color: var(--ink-f);
		min-width: 4.5rem;
		text-align: right;
		font-family: var(--font-mono);
		font-size: .82rem;
	}

	.no-fp {
		margin-top: 1rem;
	}

	.type-badge {
		display: inline-block;
		font-family: var(--font-mono);
		font-size: .72rem;
		padding: .1rem .5rem;
		border-radius: 2px;
		margin-left: .5rem;
		vertical-align: middle;

		&.type-i  { background: color-mix(in srgb, var(--gold) 15%, transparent); color: color-mix(in srgb, var(--gold) 80%, var(--ink)); }
		&.type-ii { background: color-mix(in srgb, var(--green) 15%, transparent); color: color-mix(in srgb, var(--green) 80%, var(--ink)); }
	}

	.type-note {
		font-size: .88rem;
		color: var(--ink-f);
		margin-bottom: .8rem;
	}

	.tested-wrap {
		overflow-x: auto;
		margin-bottom: 2rem;

		& td:first-child {
			max-width: 360px;
			white-space: wrap;
		}
	}

	.result-cell {
		color: var(--green);
		font-size: .82rem;
	}

	.note-cell {
		color: var(--ink-f);
		font-size: .82rem;
	}

	.not-found td {
		opacity: .6;
	}
</style>
