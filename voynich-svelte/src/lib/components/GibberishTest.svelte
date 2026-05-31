<script>
	import { onMount } from 'svelte';
	import { LEXICON } from '$lib';

	// ── Word generation ──────────────────────────────────────────────────────

	const STARTS = [
		['d',14],['ch',9],['k',8],['o',10],['qo',5],['sh',7],['s',4],
		['t',4], ['y',5], ['l',5],['c',3], ['p',2], ['f',1], ['r',2],
	];
	const MIDDLES = [
		['a',7], ['ai',6],['aiin',8],['o',8], ['or',4], ['al',4],['ol',3],
		['ch',5],['sh',3],['k',4], ['e',4], ['ee',3],['dy',4],['ky',3],
		['r',4], ['l',4], ['n',3], ['d',3], ['s',2], ['chy',3],['m',2],
	];
	const ENDINGS = [
		['y',18],['n',7],['r',6],['aiin',12],['m',5],['l',5],
		['dy',7],['in',4],['or',4], ['ol',3], ['al',3],
	];

	/** @param {[string,number][]} opts */
	function weightedChoice(opts) {
		let sum = 0;
		for (const [,w] of opts) sum += w;
		let r = Math.random() * sum;
		for (const [val, w] of opts) { r -= w; if (r < 0) return val; }
		return opts[opts.length - 1][0];
	}

	function generateWord() {
		const start = weightedChoice(STARTS);
		const nMid  = Math.floor(Math.random() * 3);
		const mids  = Array.from({ length: nMid }, () => weightedChoice(MIDDLES));
		const end   = weightedChoice(ENDINGS);
		return start + mids.join('') + end;
	}

	// ── Tokenizer ────────────────────────────────────────────────────────────

	const MULTI = ['aiin','sh','ch','ee','ii','oo','ai'];

	/** @param {string} s @returns {string[]} */
	function tokenize(s) {
		const toks = [];
		let i = 0;
		while (i < s.length) {
			const m = MULTI.find(t => s.startsWith(t, i));
			if (m) { toks.push(m); i += m.length; }
			else   { toks.push(s[i]); i++; }
		}
		return toks;
	}

	const CONSONANT_SET = new Set(['b','c','ch','d','f','g','h','k','l','m','n','p','q','r','s','sh','t']);
	const LARYNGEAL_SET = new Set(['h','ch','aiin']);

	/** @param {string} root @returns {{ count: number, tokens: string[] }} */
	function analyzeRoot(root) {
		const tokens = tokenize(root);
		let count = 0;
		for (let i = 0; i < tokens.length; i++) {
			if (CONSONANT_SET.has(tokens[i])) count++;
			else if (tokens[i] === 'o' && i === 0) count++;
		}
		return { count, tokens };
	}

	// ── Prefix stripping & R41 ───────────────────────────────────────────────

	const PREFIX_LIST = ['qok','qod','qo','o','l','d','p','y','t'];
	const CONJ_CLASS  = new Set(['qo','qok','qod','o']);
	const PREP_CLASS  = new Set(['l','d','p']);

	/** @param {string} word */
	function stripPrefixes(word) {
		const prefixes = [];
		let rem = word;
		while (rem.length > 2) {
			const match = PREFIX_LIST.find(p => rem.startsWith(p) && rem.length > p.length + 1);
			if (!match) break;
			prefixes.push(match);
			rem = rem.slice(match.length);
		}
		return { prefixes, root: rem };
	}

	/** @param {string[]} prefixes @param {string} root */
	function checkR41(prefixes, root) {
		if (prefixes.length > 2) return { valid: false, reason: 'b' };
		for (let i = 0; i < prefixes.length - 1; i++) {
			if (PREP_CLASS.has(prefixes[i]) && CONJ_CLASS.has(prefixes[i + 1]))
				return { valid: false, reason: 'a' };
		}
		const POS_VOCAB = ['or','chaiin','okal'];
		if (prefixes.some(p => p.startsWith('sh')) && POS_VOCAB.some(v => root.includes(v)))
			return { valid: false, reason: 'c' };
		return { valid: true };
	}

	// ── Per-word analysis ────────────────────────────────────────────────────

	/** @param {string} word */
	function analyzeWord(word) {
		const lexEntry = LEXICON.find(e => e.eva === word);
		if (lexEntry) {
			return { word, inLexicon: true, lexEntry, prefixes: [], root: word,
				rootCons: null, r40: 'lexikon', r41: { valid: true }, d1: false, d2: false,
				maxStars: lexEntry.stars };
		}

		const { prefixes, root } = stripPrefixes(word);
		const r41 = checkR41(prefixes, root);

		if (!r41.valid) {
			return { word, inLexicon: false, prefixes, root, rootCons: 0,
				r40: null, r41, d1: false, d2: false, maxStars: 'ungültig' };
		}

		const { count, tokens } = analyzeRoot(root);
		const d1       = tokens.some((t, i) => i > 0 && CONSONANT_SET.has(t) && t === tokens[i - 1]);
		const d2       = tokens.some((t, i) => i > 0 && LARYNGEAL_SET.has(t) && LARYNGEAL_SET.has(tokens[i - 1]));
		const r40      = count <= 3 ? 'cap' : 'pass';
		const maxStars = r40 === 'cap' ? '★★' : '★★★';

		return { word, inLexicon: false, prefixes, root, rootCons: count,
			r40, r41, d1, d2, maxStars };
	}

	// ── Run stats helper ─────────────────────────────────────────────────────

	/** @param {ReturnType<typeof analyzeWord>[]} words */
	function computeRunStats(words) {
		const total   = words.length;
		const passed  = words.filter(r => r.maxStars === '★★★' && !r.inLexicon).length;
		const lexhits = words.filter(r => r.inLexicon).length;
		const capped  = words.filter(r => r.maxStars === '★★' && !r.inLexicon).length;
		const invalid = words.filter(r => r.maxStars === 'ungültig').length;
		const d1count = words.filter(r => r.d1).length;
		const d2count = words.filter(r => r.d2).length;
		const passRate = Math.round((passed + lexhits) / total * 100);
		return { total, passed, lexhits, capped, invalid, d1count, d2count, passRate };
	}

	// ── Svelte state ─────────────────────────────────────────────────────────

	let wordCount    = $state(50);
	let results      = $state(/** @type {ReturnType<typeof analyzeWord>[]} */ ([]));
	let tested       = $state(false);
	/** @type {{ run: number, total: number, passRate: number, passed: number, lexhits: number, capped: number, invalid: number }[]} */
	let runs         = $state([]);
	let protocolDone = $state(false);
	let protocolDate = $state('');

	function runTest() {
		results = Array.from({ length: wordCount }, () => analyzeWord(generateWord()));
		tested  = true;
	}

	onMount(runProtocol);

	function runProtocol() {
		runs = Array.from({ length: 10 }, (_, i) => {
			const words = Array.from({ length: wordCount }, () => analyzeWord(generateWord()));
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

<!-- ── Intro ─────────────────────────────────────────────────────────────── -->
<div class="gib-intro">
	<p>Jedes generierte EVA-Pseudowort durchläuft <strong>R40 v2</strong> (Kurzwurzel-Deckel: Basiswurzel ≤ 3 Konsonanten → max. ★★), <strong>R41</strong> (Präfix-Hierarchie) und <strong>D1/D2</strong> (Phonotaktik-Flags). Ein Pseudowort gilt als Falsch-Positiv, wenn es trotz Pseudocharakters ★★★ erreicht oder zufällig einem Lexikoneintrag entspricht. Der Generator verwendet gewichtete EVA-Bigramm-Statistik.</p>
	<div class="threshold-bar">
		<span class="thr thr-fail">Abbruch &gt; 15 %</span>
		<span class="thr-sep">·</span>
		<span class="thr thr-warn">Warnzone 11–15 %</span>
		<span class="thr-sep">·</span>
		<span class="thr thr-ok">Ziel ≤ 10 %</span>
		<span class="thr-divider"></span>
		<span class="thr thr-hist">Befund v6.2: ∅ 31 % → Auslöser R40 v2</span>
	</div>
</div>

<!-- ── 10-Lauf-Protokoll ─────────────────────────────────────────────────── -->
{#if protocolDone && protocolStats}
	<div class="protocol-section">
		<div class="protocol-head">
			<span class="protocol-title no-print">10-Lauf-Protokoll · {wordCount} Wörter/Lauf · {protocolDate}</span>
			<span class="protocol-title print-only">GibberishTest · 10-Lauf-Protokoll · v6.6 · {wordCount} Wörter/Lauf · {protocolDate}</span>
		</div>

		<div class="protocol-body">
			<table class="dt proto-table">
				<thead>
					<tr>
						<th>Lauf</th>
						<th>Wörter</th>
						<th>★★★+ Rate</th>
						<th>★★★ (R40)</th>
						<th>Lex.-Treffer</th>
						<th>★★ (Deckel)</th>
						<th>Ungültig (R41)</th>
					</tr>
				</thead>
				<tbody>
					{#each runs as r}
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
						<td colspan="4" class="mean-note">Mittelwert über 10 Läufe</td>
					</tr>
				</tbody>
			</table>

			<table class="dt desc-stats">
				<thead>
					<tr><th colspan="2">Deskriptive Statistik</th></tr>
				</thead>
				<tbody>
					<tr><td>Mittelwert</td><td class="ds-val">{protocolStats.mean} %</td></tr>
					<tr><td>Standardabweichung</td><td class="ds-val">± {protocolStats.sd} %</td></tr>
					<tr><td>Minimum</td><td class="ds-val">{protocolStats.min} %</td></tr>
					<tr><td>Maximum</td><td class="ds-val">{protocolStats.max} %</td></tr>
					<tr class:ds-crit={protocolStats.overAbbruch > 0}>
						<td>Läufe über Abbruchschwelle (&gt; 15 %)</td>
						<td class="ds-val">{protocolStats.overAbbruch} / 10</td>
					</tr>
					<tr><td>Läufe in Warnzone (11–15 %)</td><td class="ds-val">{protocolStats.inWarnzone} / 10</td></tr>
					<tr><td>Läufe im Zielkorridor (≤ 10 %)</td><td class="ds-val">{protocolStats.inZielkorr} / 10</td></tr>
					<tr>
						<td>Abstand Mittelwert → Abbruchschwelle (15 %)</td>
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
				⚠ Mittlere ★★★+-Rate {protocolStats.mean} % — Abbruchschwelle 15 % überschritten. Weitere Verschärfung von R40 v2 oder zusätzliche Regeln erforderlich.
			{:else if protocolStats.warnProtocol}
				⚠ Mittlere ★★★+-Rate {protocolStats.mean} % — Warnzone (11–15 %). Systembeobachtung aktiv; keine Sofortmaßnahme erforderlich.
			{:else}
				✓ Mittlere ★★★+-Rate {protocolStats.mean} % — Zielkorridor ≤ 10 % erreicht. R40 v2 ist ausreichend gehärtet.
			{/if}
		</div>
	</div>
{/if}

<!-- ── Controls ──────────────────────────────────────────────────────────── -->
<div class="gib-controls">
	<label class="ctrl-label" for="wc-input">Wörter/Lauf</label>
	<input
		id="wc-input"
		class="wc-input"
		type="number"
		min="10" max="200" step="10"
		bind:value={wordCount}
	/>
	<button class="run-btn" onclick={runTest}>
		{tested ? 'Einzeltest ↺' : 'Einzeltest'}
	</button>
	<button class="run-btn run-btn--proto" onclick={runProtocol}>
		{protocolDone ? '10-Lauf-Protokoll ↺' : '10-Lauf-Protokoll'}
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
				<div class="box-title">Falsch-Positiv-Rate (★★★+)</div>
				<div class="stat-rate"
					class:rate-fail={stats.passRate > 15}
					class:rate-warn={stats.passRate > 10 && stats.passRate <= 15}
				>{stats.passRate} %</div>
				<div class="stat-verdict">
					{#if stats.passRate > 15}
						⚠ Abbruchschwelle überschritten
					{:else if stats.passRate > 10}
						⚠ Warnzone — Systembeobachtung
					{:else}
						✓ Zielkorridor erreicht
					{/if}
				</div>
			</div>

			<div class="stat-cells">
				<div class="stat-cell">
					<span class="sc-n">{stats.passed}</span>
					<span class="sc-l">★★★ R40-pass</span>
				</div>
				<div class="stat-cell">
					<span class="sc-n">{stats.lexhits}</span>
					<span class="sc-l">Lex.-Zufallstreffer</span>
				</div>
				<div class="stat-cell">
					<span class="sc-n">{stats.capped}</span>
					<span class="sc-l">★★ R40-Deckel</span>
				</div>
				<div class="stat-cell">
					<span class="sc-n">{stats.invalid}</span>
					<span class="sc-l">Ungültig (R41)</span>
				</div>
				<div class="stat-cell">
					<span class="sc-n sc-warn">{stats.d1count}</span>
					<span class="sc-l">⚠ D1 Doppelkons.</span>
				</div>
				<div class="stat-cell">
					<span class="sc-n sc-warn">{stats.d2count}</span>
					<span class="sc-l">⚠ D2 Laryngal</span>
				</div>
			</div>
		</div>

		<div class="results-wrap">
			<table class="dt gib-table">
				<thead>
					<tr>
						<th>#</th>
						<th>EVA-Pseudowort</th>
						<th>Präfixe</th>
						<th>Wurzel</th>
						<th title="Konsonanten in der Basiswurzel">Kons.</th>
						<th>R40 v2</th>
						<th>R41</th>
						<th>D1/D2</th>
						<th>Max. Konf.</th>
					</tr>
				</thead>
				<tbody>
					{#each results as r, i}
						<tr class="row-{starsClass(r)}">
							<td class="td-n">{i + 1}</td>
							<td class="td-eva">{r.word}</td>
							<td class="td-pre">{r.prefixes.length ? r.prefixes.join('+') : '—'}</td>
							<td class="td-eva">{r.root}</td>
							<td class="td-c">{r.rootCons ?? '—'}</td>
							<td class="td-rule">
								{#if r.r40 === 'cap'}
									<span class="flag-cap">Deckel</span>
								{:else if r.r40 === 'pass'}
									<span class="flag-pass">pass</span>
								{:else if r.r40 === 'lexikon'}
									<span class="flag-lex">Lex.</span>
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
									<span class="ms-invalid">ungültig</span>
								{:else if r.inLexicon}
									<span class="ms-lex" title="Lexikon-Treffer: {r.lexEntry?.de}">{r.maxStars} Lex.</span>
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

<style>
	/* ── Intro ──────────────────────────────────────────── */

	.gib-intro {
		margin-bottom: 1.2rem;

		& p {
			font-size: .93rem;
			line-height: 1.65;
			margin-bottom: .6rem;
		}
	}

	.threshold-bar {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: .3rem .5rem;
		font-size: .76rem;
	}

	.thr {
		font-family: var(--font-smallcaps);
		font-size: .68rem;
		letter-spacing: .08em;
		padding: .18rem .55rem;
		border-radius: 2px;
		white-space: nowrap;
	}

	.thr-fail { background: rgba(122,28,28,.1); color: var(--red); border: 1px solid rgba(122,28,28,.25); }
	.thr-warn { background: rgba(154,122,42,.1); color: #7a5a00; border: 1px solid rgba(154,122,42,.3); }
	.thr-ok   { background: rgba(26,74,40,.08);  color: #1a4a28;  border: 1px solid rgba(26,74,40,.2);  }
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
		font-family: var(--font-smallcaps);
		font-size: .65rem;
		letter-spacing: .15em;
		text-transform: uppercase;
		color: var(--ink-f);
	}

	.wc-input {
		width: 5rem;
		font-family: var(--font-mono);
		font-size: .88rem;
		color: var(--ink);
		background: rgba(255,255,255,.55);
		border: 1px solid var(--border);
		border-radius: 2px;
		padding: .28rem .5rem;
		outline: none;

		&:focus {
			border-color: var(--gold);
			background: rgba(255,255,255,.8);
		}
	}

	.run-btn {
		font-family: var(--font-smallcaps);
		font-size: .68rem;
		letter-spacing: .12em;
		text-transform: uppercase;
		color: var(--parch);
		background: var(--red);
		border: 1px solid var(--red);
		border-radius: 2px;
		padding: .32rem 1rem;
		cursor: pointer;
		transition: all .15s;

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
			background: rgba(122,28,28,.08);
		}
	}

	/* ── Protocol section ───────────────────────────────── */

	.protocol-section {
		margin-bottom: 2rem;
		border: 1px solid var(--border);
		border-radius: 3px;
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
		font-family: var(--font-smallcaps);
		font-size: .68rem;
		letter-spacing: .12em;
		text-transform: uppercase;
		color: var(--ink-l);
	}

	.proto-print-btn {
		font-family: var(--font-smallcaps);
		font-size: .63rem;
		letter-spacing: .1em;
		text-transform: uppercase;
		color: var(--ink-f);
		background: rgba(255,255,255,.4);
		border: 1px solid var(--parch-dk);
		border-radius: 2px;
		padding: .22rem .7rem;
		cursor: pointer;
		transition: all .15s;

		&:hover { background: rgba(255,255,255,.8); color: var(--ink); }
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
		font-size: .82rem;
		border-right: 1px solid var(--parch-dk);
	}

	.td-run {
		font-family: var(--font-mono);
		font-size: .72rem;
		color: var(--ink-f);
		width: 2.5rem;
		text-align: center;
	}

	.td-rate {
		font-family: var(--font-mono);
		font-size: .88rem;
		text-align: right;
		padding-right: .8rem;
	}

	.proto-row.zone-fail td { background: rgba(122,28,28,.06); }
	.proto-row.zone-fail .td-rate { color: var(--red); }
	.proto-row.zone-warn td { background: rgba(154,122,42,.05); }
	.proto-row.zone-warn .td-rate { color: #7a5a00; }
	.proto-row.zone-ok   .td-rate { color: #1a4a28; }

	.proto-mean td {
		background: var(--parch-d);
		font-size: .85rem;
		border-top: 1px solid var(--border);
	}

	.proto-mean .td-rate { font-size: .95rem; }

	.mean-note {
		font-size: .72rem;
		font-style: italic;
		color: var(--ink-f);
	}

	/* ── Descriptive stats table ────────────────────────── */

	.desc-stats {
		flex: 0 1 300px;
		font-size: .82rem;
		align-self: stretch;

		& thead th {
			font-family: var(--font-smallcaps);
			font-size: .63rem;
			letter-spacing: .1em;
			text-transform: uppercase;
			color: var(--ink-f);
			background: var(--parch-d);
			text-align: left;
			padding: .4rem .7rem;
		}

		& td:first-child {
			color: var(--ink-l);
			font-size: .78rem;
		}
	}

	.ds-val {
		font-family: var(--font-mono);
		font-size: .85rem;
		text-align: right;
		white-space: nowrap;
		padding-right: .8rem;
	}

	.ds-crit td { background: rgba(122,28,28,.05); }
	.ds-crit .ds-val { color: var(--red); font-weight: 600; }

	.ds-abstand { color: var(--ink-f); }
	.ds-abstand.ds-pos { color: var(--red); font-weight: 600; }

	/* ── Protocol verdict ───────────────────────────────── */

	.proto-verdict {
		padding: .65rem .9rem;
		font-size: .83rem;
		line-height: 1.5;
		border-top: 1px solid var(--parch-dk);
		background: rgba(26,74,40,.05);
		color: #1a4a28;
	}

	.proto-verdict.verdict-fail {
		background: rgba(122,28,28,.06);
		color: var(--red);
	}

	.proto-verdict.verdict-warn {
		background: rgba(154,122,42,.06);
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
		font-size: 2.4rem;
		color: #1a4a28;
		line-height: 1.1;
		margin: .4rem 0 .2rem;

		&.rate-fail { color: var(--red); }
		&.rate-warn { color: #7a5a00; }
	}

	.stat-verdict {
		font-size: .78rem;
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
		border-radius: 2px;

		& .sc-n {
			display: block;
			font-family: var(--font-display);
			font-size: 1.5rem;
			color: var(--red);
			line-height: 1.1;
		}

		& .sc-n.sc-warn { color: var(--gold); }

		& .sc-l {
			display: block;
			font-family: var(--font-smallcaps);
			font-size: .65rem;
			letter-spacing: .07em;
			text-transform: uppercase;
			color: var(--ink-f);
			margin-top: .1rem;
		}
	}

	/* ── Results table ──────────────────────────────────── */

	.results-wrap {
		overflow-x: auto;
		max-height: 560px;
		overflow-y: auto;
		border: 1px solid var(--parch-dk);
		border-radius: 2px;
	}

	.gib-table {
		font-size: .8rem;

		& thead th {
			position: sticky;
			top: 0;
			background: var(--parch-d);
			z-index: 1;
		}
	}

	.td-n {
		font-family: var(--font-mono);
		font-size: .68rem;
		color: var(--ink-f);
		width: 2rem;
		text-align: center;
	}

	.td-eva {
		font-family: var(--font-mono);
		color: #5a3f1a;
		white-space: nowrap;
	}

	.td-pre {
		font-family: var(--font-mono);
		font-size: .73rem;
		color: var(--ink-f);
		white-space: nowrap;
	}

	.td-c {
		text-align: center;
		font-family: var(--font-mono);
		font-size: .78rem;
	}

	.td-rule { white-space: nowrap; font-size: .73rem; }
	.td-stars { white-space: nowrap; }

	.row-ms-invalid td { opacity: .55; }
	.row-ms-pass    td { background: rgba(26,74,40,.04); }
	.row-ms-lex     td { background: rgba(122,28,28,.05); }

	.flag-pass    { color: #1a4a28; font-weight: 600; }
	.flag-cap     { color: var(--ink-f); }
	.flag-invalid { color: var(--red); font-weight: 600; }
	.flag-warn    { color: var(--gold); font-weight: 600; }
	.flag-na      { color: var(--ink-f); }
	.flag-lex     { color: var(--red); font-size: .65rem; font-style: italic; }

	.ms-invalid { color: var(--red); font-size: .72rem; }
	.ms-cap     { color: var(--ink-f); }
	.ms-pass    { color: var(--gold); font-weight: 600; }
	.ms-lex     { color: var(--red); font-size: .72rem; font-style: italic; }

	/* ── Print ──────────────────────────────────────────── */

	.print-only { display: none; }

	@media print {
		.gib-intro,
		.gib-controls,
		.single-section,
		.no-print { display: none !important; }

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
			font-size: .75rem;
			letter-spacing: .08em;
			color: #000;
		}

		.proto-table,
		.desc-stats {
			font-size: .78rem;
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
			font-size: .8rem;
		}

		.proto-row.zone-fail td { background: none; }
		.proto-row.zone-warn td { background: none; }
	}
</style>
