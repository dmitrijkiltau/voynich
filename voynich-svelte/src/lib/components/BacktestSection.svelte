<script>
	import { STATS, TESTED } from '$lib/backtest-data.js';
	import Box from '$lib/components/Box.svelte';

	const typeI  = TESTED.filter(t => t.type === 'I');
	const typeII = TESTED.filter(t => t.type === 'II');

	const statI  = STATS.find(s => s.label.startsWith('Typ I'));
	const statII = STATS.find(s => s.label.startsWith('Typ II'));
	const numI   = statI?.num.replace(/ /g, '') ?? '?';
	const pctI   = Math.round(statI?.pct ?? 0);
	const numII  = statII?.num.replace(/ /g, '') ?? '?';
	const pctII  = Math.round(statII?.pct ?? 0);
</script>

<div class="backtest">
	<p>{typeI.length + typeII.length} hebräische/aramäische Wörter wurden nach dem EVA-Mapping kodiert und im Korpus (Sprache B) gesucht. Ab v7.5 werden zwei Klassen unterschieden: <strong>Typ I</strong> (genuine Vorhersagen — Prä-Analyse-Anker, eingefroren vor jeder Folioanalyse) und <strong>Typ II</strong> (interne Kohärenz — post-hoc-Entdeckungen, belegen Systemkonsistenz, keine externe Vorhersagekraft).</p>

	<div class="headline-stats">
		<div class="hs-card gold">
			<div class="hs-num">{numI}</div>
			<div class="hs-label">Typ I — Genuine Vorhersagen</div>
			<div class="hs-sub">{pctI} % · 0 Falsch-Positive</div>
		</div>
		<div class="hs-card green">
			<div class="hs-num">{numII}</div>
			<div class="hs-label">Typ II — Interne Kohärenz</div>
			<div class="hs-sub">{pctII} % · 0 Falsch-Positive</div>
		</div>
	</div>

	<div class="stat-bars">
		{#each STATS as s (s.label)}
			<div class="stat-row">
				<span class="stat-label">{s.label}</span>
				<div class="stat-bar-wrap">
					<div class="stat-bar" style="width:{s.pct}%; background:{s.color}"></div>
				</div>
				<span class="stat-num">{s.num}</span>
			</div>
		{/each}
	</div>

	<Box variant="green" class="no-fp">
		<p style="margin:0;font-size:var(--text-sm)">Entscheidend: <strong>Keine einzige Vorhersage ergab einen Falsch-Positiv-Treffer.</strong> Kein kodiertes Wort taucht in einem semantisch inkohärenten Kontext auf — in beiden Klassen, bei einem Zufallsalphabet statistisch ausgeschlossen.</p>
	</Box>

	<h3>Typ I — Genuine Vorhersagen <span class="type-badge type-i">{numI} · {pctI}%</span></h3>
	<p class="type-note">Diese {typeI.length} Wörter wurden als semantische Priors <em>vor</em> jeder Folioanalyse definiert (eingefroren v7.4: dam, or, daiin, sheol, shol, dal, sar, chaiin, kaiim, chalal). Sie können nicht rückwirkend erweitert werden. Ihre Bestätigung ist die valide Kernaussage der Rückwärtsteststärke.</p>
	<div class="tested-wrap">
		<table class="dt">
			<thead>
				<tr><th>Vorhersage</th><th>Hebräisch</th><th>Befund</th><th>Kontext</th></tr>
			</thead>
			<tbody>
				{#each typeI as t (t.pred)}
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

	<h3>Typ II — Interne Kohärenz <span class="type-badge type-ii">{numII} · {pctII}%</span></h3>
	<p class="type-note">Diese {typeII.length} Wörter wurden <em>während</em> der Folioanalyse erstmals identifiziert. Sie belegen interne Systemkonsistenz, aber keine externe Vorhersagekraft. 29 bestätigt, 3 historische Fehlschläge (nicht im Datensatz).</p>
	<div class="tested-wrap">
		<table class="dt">
			<thead>
				<tr><th>Vorhersage</th><th>Hebräisch</th><th>Befund</th><th>Kontext</th></tr>
			</thead>
			<tbody>
				{#each typeII as t (t.pred)}
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
		border-radius: var(--radius);
		border: 1px solid var(--parch-dk);
		background: rgba(255, 255, 255, .3);

		&.gold { border-left: 3px solid var(--gold); }
		&.green { border-left: 3px solid var(--green); }
	}

	.hs-num {
		font-family: var(--font-display);
		font-size: var(--text-2xl);
		line-height: 1.1;
		color: var(--ink);
	}

	.hs-label {
		font-family: var(--font-smallcaps);
		font-size: var(--text-xs);
		letter-spacing: .08em;
		color: var(--ink-l);
		margin-top: .2rem;
	}

	.hs-sub {
		font-size: var(--text-sm);
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
		font-size: var(--text-sm);
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
		border-radius: var(--radius-sm);
		height: 8px;
		overflow: hidden;
	}

	.stat-bar {
		height: 100%;
		border-radius: var(--radius-sm);
		transition: width var(--t-slower) ease;
	}

	.stat-num {
		color: var(--ink-f);
		min-width: 4.5rem;
		text-align: right;
		font-family: var(--font-mono);
		font-size: var(--text-sm);
	}

	:global(.no-fp) {
		margin-top: 1rem;
	}

	.type-badge {
		display: inline-block;
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		padding: .1rem .5rem;
		border-radius: var(--radius);
		margin-left: .5rem;
		vertical-align: middle;

		&.type-i  { background: color-mix(in srgb, var(--gold) 15%, transparent); color: color-mix(in srgb, var(--gold) 80%, var(--ink)); }
		&.type-ii { background: color-mix(in srgb, var(--green) 15%, transparent); color: color-mix(in srgb, var(--green) 80%, var(--ink)); }
	}

	.type-note {
		font-size: var(--text-sm);
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
		font-size: var(--text-sm);
	}



	.not-found td {
		opacity: .6;
	}
</style>
