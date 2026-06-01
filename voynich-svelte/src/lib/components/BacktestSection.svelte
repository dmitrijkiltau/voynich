<script>
	import { STATS, TESTED } from '$lib/backtest-data.js';
</script>

<div class="backtest">
	<p>30 hebräische/aramäische Wörter wurden nach dem EVA-Mapping kodiert und im Korpus (Sprache B) gesucht. Trefferquote: <strong>90 % (27/30)</strong>. In Quire A/B wurden je Folio 10 Ankerwörter bestätigt (100 %).</p>

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
		<p style="margin:0;font-size:.92rem">Entscheidend: <strong>Keine einzige Vorhersage ergab einen Falsch-Positiv-Treffer.</strong> Kein kodiertes Wort taucht in einem semantisch inkohärenten Kontext auf — bei einem Zufallsalphabet statistisch ausgeschlossen.</p>
	</div>

	<h3>Getestete Formen (Auswahl)</h3>
	<div class="tested-wrap">
		<table class="dt">
			<thead>
				<tr><th>Vorhersage</th><th>Hebräisch</th><th>Befund</th><th>Kontext</th></tr>
			</thead>
			<tbody>
				{#each TESTED as t}
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
</div>

<style>
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
		min-width: 280px;
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

	.tested-wrap {
		overflow-x: auto;
	}

	.result-cell {
		color: var(--green);
		font-size: .82rem;
		white-space: nowrap;
	}

	.note-cell {
		color: var(--ink-f);
		font-size: .82rem;
	}
</style>
