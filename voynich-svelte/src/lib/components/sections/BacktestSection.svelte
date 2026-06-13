<script>
	import { STATS, TESTED } from '$lib/backtest-data.js';
	import Box from '$lib/components/Box.svelte';
	import { CONTENT } from '$lib/content.js';

	const C = CONTENT.backtest;

	const typeI  = TESTED.filter(t => t.type === 'I');
	const typeII = TESTED.filter(t => t.type === 'II');

	const statI  = STATS.find(s => s.label.startsWith('Typ I'));
	const statII = STATS.find(s => s.label.startsWith('Typ II'));
	const numI   = statI?.num.replace(/ /g, '') ?? '?';
	const pctI   = Math.round(statI?.pct ?? 0);
	const numII  = statII?.num.replace(/ /g, '') ?? '?';
	const pctII  = Math.round(statII?.pct ?? 0);
</script>

<section class="section" id="backwards-test">
	<h2>{C.title}</h2>

	<div class="backtest">
		<p>{@html C.introHtml(typeI.length + typeII.length)}</p>

		<div class="headline-stats">
			<div class="hs-card gold">
				<div class="hs-num">{numI}</div>
				<div class="hs-label">{C.typeI.title}</div>
				<div class="hs-sub">{pctI} % {C.noFpSuffix}</div>
			</div>
			<div class="hs-card green">
				<div class="hs-num">{numII}</div>
				<div class="hs-label">{C.typeII.title}</div>
				<div class="hs-sub">{pctII} % {C.noFpSuffix}</div>
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
			<p style="margin:0;font-size:var(--text-sm)">{@html C.noFalsePositivesHtml}</p>
		</Box>

		<h3>{C.typeI.title} <span class="type-badge type-i">{numI} · {pctI}%</span></h3>
		<p class="type-note">{@html C.typeI.noteHtml(typeI.length)}</p>
		<div class="tested-wrap">
			<table class="dt">
				<thead>
					<tr>
						<th>{C.columns.prediction}</th>
						<th>{C.columns.heb}</th>
						<th>{C.columns.result}</th>
						<th>{C.columns.context}</th>
					</tr>
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

		<h3>{C.typeII.title} <span class="type-badge type-ii">{numII} · {pctII}%</span></h3>
		<p class="type-note">{@html C.typeII.noteHtml(typeII.length)}</p>
		<div class="tested-wrap">
			<table class="dt">
				<thead>
					<tr>
						<th>{C.columns.prediction}</th>
						<th>{C.columns.heb}</th>
						<th>{C.columns.result}</th>
						<th>{C.columns.context}</th>
					</tr>
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
</section>

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
