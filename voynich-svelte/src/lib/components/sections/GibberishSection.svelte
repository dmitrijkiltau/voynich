<script>
	import { onMount } from 'svelte';
	import { LEXICON, STATS } from '$lib';
	import { generateHapax, analyzeWord, computeRunStats } from '$lib/gibberish-utils.js';
	import { CONTENT } from '$lib/content.js';

	const C = CONTENT.gibberish;

	const _evaSet = new Set(LEXICON.map(e => e.eva));
	const _hapax  = () => generateHapax(_evaSet);
	const _analyze = (/** @type {string} */ w) => analyzeWord(w, LEXICON);

	// ── Svelte state ─────────────────────────────────────────────────────────

	let wordCount    = $state(50);
	let results      = $state(/** @type {ReturnType<typeof analyzeWord>[]} */ ([]));
	let tested       = $state(false);
	/** @type {{ run: number, total: number, passRate: number, passed: number, lexhits: number, capped: number, invalid: number }[]} */
	let runs         = $state([]);
	let protocolDone = $state(false);
	let protocolDate = $state('');

	function runTest() {
		results = Array.from({ length: wordCount }, () => _analyze(_hapax()));
		tested  = true;
	}

	onMount(runProtocol);

	function runProtocol() {
		runs = Array.from({ length: 10 }, (_, i) => {
			const words = Array.from({ length: wordCount }, () => _analyze(_hapax()));
			const { total, passed, lexhits, capped, invalid, passRate } = computeRunStats(words);
			return { run: i + 1, total, passRate, passed, lexhits, capped, invalid };
		});
		protocolDate = new Date().toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' });
		protocolDone = true;
	}

	const stats = $derived(tested ? computeRunStats(results) : null);

	const protocolStats = $derived(protocolDone && runs.length === 10 ? (() => {
		const rates = runs.map(r => r.passRate);
		const n    = rates.length;
		const mean = rates.reduce((a, b) => a + b, 0) / n;
		const sd   = Math.sqrt(rates.map(r => (r - mean) ** 2).reduce((a, b) => a + b, 0) / n);
		const min  = Math.min(...rates);
		const max  = Math.max(...rates);
		const overAbbruch  = rates.filter(r => r > 15).length;
		const inWarnzone   = rates.filter(r => r > 10 && r <= 15).length;
		const inZielkorr   = rates.filter(r => r <= 10).length;
		const abstandRaw   = mean - 15;
		const abstand      = (abstandRaw >= 0 ? '+' : '') + abstandRaw.toFixed(1);
		const failProtocol = mean > 15;
		const warnProtocol = !failProtocol && mean > 10;
		return {
			mean: mean.toFixed(1), sd: sd.toFixed(1), min, max,
			overAbbruch, inWarnzone, inZielkorr, abstand,
			failProtocol, warnProtocol,
			totalWords: runs.reduce((a, r) => a + r.total, 0),
		};
	})() : null);

	/** @param {ReturnType<typeof analyzeWord>} r */
	function starsClass(r) {
		if (r.maxStars === 'ungültig') return 'ms-invalid';
		if (r.inLexicon) return 'ms-lex';
		if (r.maxStars === '★★★') return 'ms-pass';
		return 'ms-cap';
	}

	/** @param {number} rate */
	function rateZone(rate) {
		if (rate > 15) return 'zone-fail';
		if (rate > 10) return 'zone-warn';
		return 'zone-ok';
	}
</script>

<section class="section" id="gibberish">
	<h2>{C.title(STATS.version)}</h2>
	<p>{@html C.intro}</p>
	<p>{@html C.updateNoteHtml(STATS.gibberishRate)}</p>

	<!-- ── Intro ─────────────────────────────────────────────────────────────── -->
	<div class="gib-intro">
		<p>{@html C.technicalIntroHtml}</p>
		<div class="threshold-bar">
			<span class="thr thr-fail">{C.thresholds.abort}</span>
			<span class="thr-sep">·</span>
			<span class="thr thr-warn">{C.thresholds.warn}</span>
			<span class="thr-sep">·</span>
			<span class="thr thr-ok">{C.thresholds.target}</span>
			<span class="thr-divider"></span>
			<span class="thr thr-hist">{C.thresholds.historical}</span>
		</div>
	</div>

	<!-- ── 10-Lauf-Protokoll ─────────────────────────────────────────────────── -->
	{#if protocolDone && protocolStats}
		<div class="protocol-section">
			<div class="protocol-head">
				<span class="lbl-xs protocol-title no-print">{C.protocol.title(wordCount, protocolDate)}</span>
				<span class="lbl-xs protocol-title print-only">{C.protocol.titlePrint(STATS.version, wordCount, protocolDate)}</span>
			</div>

			<div class="protocol-body">
				<table class="dt proto-table">
					<thead>
						<tr>
							<th>{C.protocol.columns.run}</th>
							<th>{C.protocol.columns.words}</th>
							<th>{C.protocol.columns.rate}</th>
							<th>{C.protocol.columns.passedR40}</th>
							<th>{C.protocol.columns.lexHits}</th>
							<th>{C.protocol.columns.capped}</th>
							<th>{C.protocol.columns.invalid}</th>
						</tr>
					</thead>
					<tbody>
						{#each runs as r, i (i)}
							<tr class="proto-row {rateZone(r.passRate)}">
								<td class="td-run">{r.run}</td>
								<td class="td-n">{r.total}</td>
								<td class="td-rate"><strong>{r.passRate} %</strong></td>
								<td class="td-n">{r.passed}</td>
								<td class="td-n">{r.lexhits}</td>
								<td class="td-n">{r.capped}</td>
								<td class="td-n">{r.invalid}</td>
							</tr>
						{/each}
						<tr class="proto-mean">
							<td>∅</td>
							<td>{protocolStats.totalWords}</td>
							<td><strong>{protocolStats.mean} %</strong></td>
							<td colspan="4" class="mean-note">{C.protocol.meanNote}</td>
						</tr>
					</tbody>
				</table>

				<table class="dt desc-stats">
					<thead>
						<tr><th colspan="2">{C.protocol.descStats}</th></tr>
					</thead>
					<tbody>
						<tr><td>{C.protocol.descRows.mean}</td><td class="ds-val">{protocolStats.mean} %</td></tr>
						<tr><td>{C.protocol.descRows.sd}</td><td class="ds-val">± {protocolStats.sd} %</td></tr>
						<tr><td>{C.protocol.descRows.min}</td><td class="ds-val">{protocolStats.min} %</td></tr>
						<tr><td>{C.protocol.descRows.max}</td><td class="ds-val">{protocolStats.max} %</td></tr>
						<tr class:ds-crit={protocolStats.overAbbruch > 0}>
							<td>{C.protocol.descRows.overAbort}</td>
							<td class="ds-val">{protocolStats.overAbbruch} / 10</td>
						</tr>
						<tr><td>{C.protocol.descRows.inWarn}</td><td class="ds-val">{protocolStats.inWarnzone} / 10</td></tr>
						<tr><td>{C.protocol.descRows.inTarget}</td><td class="ds-val">{protocolStats.inZielkorr} / 10</td></tr>
						<tr>
							<td>{C.protocol.descRows.distance}</td>
							<td class="ds-val ds-abstand" class:ds-pos={protocolStats.abstand.startsWith('+')}>{protocolStats.abstand} PP</td>
						</tr>
					</tbody>
				</table>
			</div>

			<div class="proto-verdict"
				class:verdict-fail={protocolStats.failProtocol}
				class:verdict-warn={protocolStats.warnProtocol}
			>
				{#if protocolStats.failProtocol}
					{C.protocol.verdicts.fail(protocolStats.mean)}
				{:else if protocolStats.warnProtocol}
					{C.protocol.verdicts.warn(protocolStats.mean)}
				{:else}
					{C.protocol.verdicts.ok(protocolStats.mean)}
				{/if}
			</div>
		</div>
	{/if}

	<!-- ── Controls ──────────────────────────────────────────────────────────── -->
	<div class="gib-controls">
		<label class="lbl-2xs ctrl-label" for="wc-input">{C.controls.wordsLabel}</label>
		<input
			id="wc-input"
			class="wc-input"
			type="number"
			min="10" max="200" step="10"
			bind:value={wordCount}
		/>
		<button class="run-btn" onclick={runTest}>
			{tested ? C.controls.singleRepeat : C.controls.single}
		</button>
		<button class="run-btn run-btn--proto" onclick={runProtocol}>
			{protocolDone ? C.controls.protocolRepeat : C.controls.protocol}
		</button>
	</div>

	<!-- ── Einzeltest ─────────────────────────────────────────────────────────── -->
	{#if tested && stats}
		<div class="single-section">
			<div class="stats-grid">
				<div class="box hl stat-main"
					class:stat-fail={stats.passRate > 15}
					class:stat-warn={stats.passRate > 10 && stats.passRate <= 15}
				>
					<div class="box-title">{C.singleTest.rateTitle}</div>
					<div class="stat-rate"
						class:rate-fail={stats.passRate > 15}
						class:rate-warn={stats.passRate > 10 && stats.passRate <= 15}
					>{stats.passRate} %</div>
					<div class="stat-verdict">
						{#if stats.passRate > 15}
							{C.singleTest.verdictAbort}
						{:else if stats.passRate > 10}
							{C.singleTest.verdictWarn}
						{:else}
							{C.singleTest.verdictOk}
						{/if}
					</div>
				</div>

				<div class="stat-cells">
					<div class="stat-cell">
						<span class="sc-n">{stats.passed}</span>
						<span class="lbl-2xs sc-l">{C.singleTest.statLabels.passedR40}</span>
					</div>
					<div class="stat-cell">
						<span class="sc-n">{stats.lexhits}</span>
						<span class="lbl-2xs sc-l">{C.singleTest.statLabels.lexHits}</span>
					</div>
					<div class="stat-cell">
						<span class="sc-n">{stats.capped}</span>
						<span class="lbl-2xs sc-l">{C.singleTest.statLabels.capped}</span>
					</div>
					<div class="stat-cell">
						<span class="sc-n">{stats.invalid}</span>
						<span class="lbl-2xs sc-l">{C.singleTest.statLabels.invalid}</span>
					</div>
					<div class="stat-cell">
						<span class="sc-n sc-warn">{stats.d1count}</span>
						<span class="lbl-2xs sc-l">{C.singleTest.statLabels.d1}</span>
					</div>
					<div class="stat-cell">
						<span class="sc-n sc-warn">{stats.d2count}</span>
						<span class="lbl-2xs sc-l">{C.singleTest.statLabels.d2}</span>
					</div>
				</div>
			</div>

			<div class="results-wrap">
				<table class="dt gib-table">
					<thead>
						<tr>
							<th>{C.resultsColumns.num}</th>
							<th>{C.resultsColumns.word}</th>
							<th>{C.resultsColumns.prefixes}</th>
							<th>{C.resultsColumns.root}</th>
							<th title={C.resultsColumns.consTitle}>{C.resultsColumns.consAbbr}</th>
							<th>{C.resultsColumns.r40}</th>
							<th>{C.resultsColumns.r41}</th>
							<th>{C.resultsColumns.d12}</th>
							<th>{C.resultsColumns.maxConf}</th>
						</tr>
					</thead>
					<tbody>
						{#each results as r, i (i)}
							<tr class="row-{starsClass(r)}">
								<td class="td-n">{i + 1}</td>
								<td class="td-eva">{r.word}</td>
								<td class="td-pre">{r.prefixes.length ? r.prefixes.join('+') : '—'}</td>
								<td class="td-eva">{r.root}</td>
								<td class="td-c">{r.rootCons ?? '—'}</td>
								<td class="td-rule">
									{#if r.r40 === 'cap'}
										<span class="flag-cap">{C.flags.cap}</span>
									{:else if r.r40 === 'pass'}
										<span class="flag-pass">{C.flags.pass}</span>
									{:else if r.r40 === 'lexikon'}
										<span class="flag-lex">{C.flags.lex}</span>
									{:else}
										<span class="flag-na">—</span>
									{/if}
								</td>
								<td class="td-rule">
									{#if r.r41.valid}
										<span class="flag-pass">✓</span>
									{:else}
										<span class="flag-invalid">✗ ({r.r41.reason})</span>
									{/if}
								</td>
								<td class="td-rule">
									{#if r.d1 || r.d2}
										<span class="flag-warn">⚠{r.d1 ? 'D1' : ''}{r.d1 && r.d2 ? '+' : ''}{r.d2 ? 'D2' : ''}</span>
									{:else}
										—
									{/if}
								</td>
								<td class="td-stars">
									{#if r.maxStars === 'ungültig'}
										<span class="ms-invalid">{C.flags.ungültig}</span>
									{:else if r.inLexicon}
										<span class="ms-lex" title={C.flags.lexTitle(r.lexEntry?.de)}>{r.maxStars}{C.flags.lexSuffix}</span>
									{:else if r.maxStars === '★★★'}
										<span class="ms-pass">{r.maxStars}</span>
									{:else}
										<span class="ms-cap">{r.maxStars}</span>
									{/if}
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	{/if}
</section>

<style>
	/* ── Intro ──────────────────────────────────────────── */

	.gib-intro {
		margin-bottom: 1.2rem;

		& p {
			font-size: var(--text-sm);
			line-height: 1.65;
			margin-bottom: .6rem;
		}
	}

	.threshold-bar {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: .3rem .5rem;
		font-size: var(--text-xs);
	}

	.thr {
		font-family: var(--font-smallcaps);
		font-size: var(--text-xs);
		letter-spacing: .08em;
		padding: .18rem .55rem;
		border-radius: var(--radius);
		white-space: nowrap;
	}

	.thr-fail { background: color-mix(in srgb, var(--red) 10%, transparent); color: var(--red); border: 1px solid color-mix(in srgb, var(--red) 25%, transparent); }
	.thr-warn { background: color-mix(in srgb, var(--gold) 10%, transparent); color: #7a5a00; border: 1px solid color-mix(in srgb, var(--gold) 30%, transparent); }
	.thr-ok   { background: color-mix(in srgb, var(--green) 8%, transparent);  color: var(--green);  border: 1px solid color-mix(in srgb, var(--green) 20%, transparent);  }
	.thr-hist { color: var(--ink-f); font-style: italic; padding: 0; background: none; border: none; }

	.thr-sep  { color: var(--ink-f); opacity: .5; }
	.thr-divider { display: inline-block; width: 1px; height: .9rem; background: var(--border); margin: 0 .2rem; vertical-align: middle; }

	/* ── Controls ───────────────────────────────────────── */

	.gib-controls {
		display: flex;
		align-items: center;
		gap: .7rem;
		margin-bottom: 1.4rem;
		flex-wrap: wrap;
	}

	.ctrl-label {
		letter-spacing: .15em;
	}

	.wc-input {
		width: 5rem;
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		color: var(--ink);
		background: rgba(255,255,255,.55);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		padding: .28rem .5rem;
		outline: none;

		&:focus {
			border-color: var(--gold);
			background: rgba(255,255,255,.8);
		}
	}

	.run-btn {
		font-family: var(--font-smallcaps);
		font-size: var(--text-xs);
		letter-spacing: .12em;
		text-transform: uppercase;
		color: var(--parch);
		background: var(--red);
		border: 1px solid var(--red);
		border-radius: var(--radius);
		padding: .32rem 1rem;
		cursor: pointer;
		transition: all var(--t-norm);

		&:hover, &:focus-visible {
			background: color-mix(in srgb, var(--red) 85%, black);
			outline: none;
		}
	}

	.run-btn--proto {
		color: var(--red);
		background: transparent;
		border-color: var(--red);

		&:hover, &:focus-visible {
			background: color-mix(in srgb, var(--red) 8%, transparent);
		}
	}

	/* ── Protocol section ───────────────────────────────── */

	.protocol-section {
		margin-bottom: 2rem;
		border: 1px solid var(--border);
		border-radius: var(--radius-md);
		overflow: hidden;
	}

	.protocol-head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: .55rem .9rem;
		background: var(--parch-d);
		border-bottom: 1px solid var(--border);
	}

	.protocol-title {
		letter-spacing: .12em;
		color: var(--ink-l);
	}

	.protocol-body {
		display: flex;
		flex-wrap: wrap;
		gap: 0;
		align-items: start;
	}

	/* ── Protocol run table ─────────────────────────────── */

	.proto-table {
		flex: 1 1 380px;
		font-size: var(--text-sm);
		border-right: 1px solid var(--parch-dk);
	}

	.td-run {
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		color: var(--ink-f);
		width: 2.5rem;
		text-align: center;
	}

	.td-rate {
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		text-align: right;
		padding-right: .8rem;
	}

	.proto-row.zone-fail td { background: color-mix(in srgb, var(--red) 6%, transparent); }
	.proto-row.zone-fail .td-rate { color: var(--red); }
	.proto-row.zone-warn td { background: color-mix(in srgb, var(--gold) 5%, transparent); }
	.proto-row.zone-warn .td-rate { color: #7a5a00; }
	.proto-row.zone-ok   .td-rate { color: var(--green); }

	.proto-mean td {
		background: var(--parch-d);
		font-size: var(--text-sm);
		border-top: 1px solid var(--border);
	}

	.proto-mean .td-rate { font-size: var(--text-sm); }

	.mean-note {
		font-size: var(--text-xs);
		font-style: italic;
		color: var(--ink-f);
	}

	/* ── Descriptive stats table ────────────────────────── */

	.desc-stats {
		flex: 0 1 300px;
		font-size: var(--text-sm);
		align-self: stretch;

		& thead th {
			font-family: var(--font-smallcaps);
			font-size: var(--text-2xs);
			letter-spacing: .1em;
			text-transform: uppercase;
			color: var(--ink-f);
			background: var(--parch-d);
			text-align: left;
			padding: .4rem .7rem;
		}

		& td:first-child {
			color: var(--ink-l);
			font-size: var(--text-sm);
		}
	}

	.ds-val {
		font-family: var(--font-mono);
		font-size: var(--text-sm);
		text-align: right;
		white-space: nowrap;
		padding-right: .8rem;
	}

	.ds-crit td { background: color-mix(in srgb, var(--red) 5%, transparent); }
	.ds-crit .ds-val { color: var(--red); font-weight: 600; }

	.ds-abstand { color: var(--ink-f); }
	.ds-abstand.ds-pos { color: var(--red); font-weight: 600; }

	/* ── Protocol verdict ───────────────────────────────── */

	.proto-verdict {
		padding: .65rem .9rem;
		font-size: var(--text-sm);
		line-height: 1.5;
		border-top: 1px solid var(--parch-dk);
		background: color-mix(in srgb, var(--green) 5%, transparent);
		color: var(--green);
	}

	.proto-verdict.verdict-fail {
		background: color-mix(in srgb, var(--red) 6%, transparent);
		color: var(--red);
	}

	.proto-verdict.verdict-warn {
		background: color-mix(in srgb, var(--gold) 6%, transparent);
		color: #7a5a00;
	}

	/* ── Single-run stats grid ──────────────────────────── */

	.stats-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 1.4rem;
		align-items: stretch;
	}

	.stat-main {
		flex: 0 1 220px;
		text-align: center;
		margin: 0;

		&.stat-fail { border-color: var(--red); }
		&.stat-warn { border-color: var(--gold); }
	}

	.stat-rate {
		font-family: var(--font-display);
		font-size: var(--text-2xl);
		color: var(--green);
		line-height: 1.1;
		margin: .4rem 0 .2rem;

		&.rate-fail { color: var(--red); }
		&.rate-warn { color: #7a5a00; }
	}

	.stat-verdict {
		font-size: var(--text-sm);
		font-style: italic;
		color: var(--ink-l);
		line-height: 1.4;
	}

	.stat-cells {
		flex: 1 1 320px;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: .4rem;
	}

	.stat-cell {
		display: grid;
		place-content: center;
		text-align: center;
		padding: .4rem .3rem;
		background: rgba(255,255,255,.3);
		border: 1px solid var(--parch-dk);
		border-radius: var(--radius);

		& .sc-n {
			display: block;
			font-family: var(--font-display);
			font-size: var(--text-xl);
			color: var(--red);
			line-height: 1.1;
		}

		& .sc-n.sc-warn { color: var(--gold); }

		& .sc-l {
			display: block;
			letter-spacing: .07em;
			margin-top: .1rem;
		}
	}

	/* ── Results table ──────────────────────────────────── */

	.results-wrap {
		overflow-x: auto;
		max-height: 560px;
		overflow-y: auto;
		border: 1px solid var(--parch-dk);
		border-radius: var(--radius);
	}

	.gib-table {
		font-size: var(--text-sm);

		& thead th {
			position: sticky;
			top: 0;
			background: var(--parch-d);
			z-index: 1;
		}
	}

	.td-n {
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		color: var(--ink-f);
		width: 2rem;
		text-align: center;
	}

	.td-eva {
		font-family: var(--font-mono);
		color: var(--ink-eva);
		white-space: nowrap;
	}

	.td-pre {
		font-family: var(--font-mono);
		font-size: var(--text-xs);
		color: var(--ink-f);
		white-space: nowrap;
	}

	.td-c {
		text-align: center;
		font-family: var(--font-mono);
		font-size: var(--text-sm);
	}

	.td-rule { white-space: nowrap; font-size: var(--text-xs); }
	.td-stars { white-space: nowrap; }

	.row-ms-invalid td { opacity: .55; }
	.row-ms-pass    td { background: color-mix(in srgb, var(--green) 4%, transparent); }
	.row-ms-lex     td { background: color-mix(in srgb, var(--red) 5%, transparent); }

	.flag-pass    { color: var(--green); font-weight: 600; }
	.flag-cap     { color: var(--ink-f); }
	.flag-invalid { color: var(--red); font-weight: 600; }
	.flag-warn    { color: var(--gold); font-weight: 600; }
	.flag-na      { color: var(--ink-f); }
	.flag-lex     { color: var(--red); font-size: var(--text-2xs); font-style: italic; }

	.ms-invalid { color: var(--red); font-size: var(--text-xs); }
	.ms-cap     { color: var(--ink-f); }
	.ms-pass    { color: var(--gold); font-weight: 600; }
	.ms-lex     { color: var(--red); font-size: var(--text-xs); font-style: italic; }

	/* ── Print ──────────────────────────────────────────── */

	.print-only { display: none; }

	@media print {
		#gibberish .gib-intro,
		#gibberish .gib-controls,
		#gibberish .single-section,
		#gibberish .no-print { display: none !important; }

		.print-only { display: flex !important; }

		.protocol-section {
			border: none;
			margin: 0;
		}

		.protocol-head {
			background: none;
			border-bottom: 1.5px solid #000;
			padding: 0 0 .4rem;
			margin-bottom: .6rem;
		}

		.protocol-title {
			font-size: var(--text-xs);
			letter-spacing: .08em;
			color: #000;
		}

		.proto-table,
		.desc-stats {
			font-size: var(--text-sm);
			break-inside: avoid;
		}

		.protocol-body {
			flex-direction: column;
			gap: .8rem;
		}

		.proto-table,
		.desc-stats {
			flex: none;
			width: 100%;
			border-right: none;
		}

		.proto-verdict {
			background: none !important;
			border-top: 1px solid #ccc;
			border-left: 3px solid currentColor;
			padding-left: .6rem;
			margin-top: .6rem;
			font-size: var(--text-sm);
		}

		.proto-row.zone-fail td { background: none; }
		.proto-row.zone-warn td { background: none; }
	}
</style>
