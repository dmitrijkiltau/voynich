<script>
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

	// EVA tokens that contribute one Hebrew consonant each
	const CONSONANT_SET  = new Set(['b','c','ch','d','f','g','h','k','l','m','n','p','q','r','s','sh','t']);
	// Laryngeal/pharyngeal tokens (D2)
	const LARYNGEAL_SET  = new Set(['h','ch','aiin']);

	/** @param {string} root @returns {{ count: number, tokens: string[] }} */
	function analyzeRoot(root) {
		const tokens = tokenize(root);
		let count = 0;
		for (let i = 0; i < tokens.length; i++) {
			if (CONSONANT_SET.has(tokens[i])) count++;
			else if (tokens[i] === 'o' && i === 0) count++; // Ayin at root start
		}
		return { count, tokens };
	}

	// ── Prefix stripping & R41 ───────────────────────────────────────────────

	// Sorted longest-first to match greedily
	const PREFIX_LIST  = ['qok','qod','qo','o','l','d','p','y','t'];
	const CONJ_CLASS   = new Set(['qo','qok','qod','o']);
	const PREP_CLASS   = new Set(['l','d','p']);

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
		// (b) more than 2 prefix layers
		if (prefixes.length > 2) return { valid: false, reason: 'b' };
		// (a) prep-class immediately before conj-class
		for (let i = 0; i < prefixes.length - 1; i++) {
			if (PREP_CLASS.has(prefixes[i]) && CONJ_CLASS.has(prefixes[i + 1]))
				return { valid: false, reason: 'a' };
		}
		// (c) sho- prefix + positive prognosis token in root
		const POS_VOCAB = ['or','chaiin','okal'];
		if (prefixes.some(p => p.startsWith('sh')) && POS_VOCAB.some(v => root.includes(v)))
			return { valid: false, reason: 'c' };
		return { valid: true };
	}

	// ── Full per-word analysis ───────────────────────────────────────────────

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

		const d1 = tokens.some((t, i) => i > 0 && CONSONANT_SET.has(t) && t === tokens[i - 1]);
		const d2 = tokens.some((t, i) => i > 0 && LARYNGEAL_SET.has(t) && LARYNGEAL_SET.has(tokens[i - 1]));

		const r40      = count <= 3 ? 'cap' : 'pass';
		const maxStars = r40 === 'cap' ? '★★' : '★★★';

		return { word, inLexicon: false, prefixes, root, rootCons: count,
			r40, r41, d1, d2, maxStars };
	}

	// ── Svelte state ─────────────────────────────────────────────────────────

	let wordCount = $state(50);
	let results   = $state(/** @type {ReturnType<typeof analyzeWord>[]} */ ([]));
	let tested    = $state(false);

	function runTest() {
		results = Array.from({ length: wordCount }, () => analyzeWord(generateWord()));
		tested  = true;
	}

	const stats = $derived(tested ? (() => {
		const total    = results.length;
		const invalid  = results.filter(r => r.maxStars === 'ungültig').length;
		const capped   = results.filter(r => r.maxStars === '★★').length;
		const passed   = results.filter(r => r.maxStars === '★★★').length;
		const lexhits  = results.filter(r => r.inLexicon).length;
		const d1count  = results.filter(r => r.d1).length;
		const d2count  = results.filter(r => r.d2).length;
		const passRate = Math.round((passed + lexhits) / total * 100);
		const failR40  = passRate > 15;
		return { total, invalid, capped, passed, lexhits, d1count, d2count, passRate, failR40 };
	})() : null);

	/** @param {ReturnType<typeof analyzeWord>} r */
	function starsClass(r) {
		if (r.maxStars === 'ungültig') return 'ms-invalid';
		if (r.inLexicon) return 'ms-lex';
		if (r.maxStars === '★★★') return 'ms-pass';
		return 'ms-cap';
	}
</script>

<div class="gib-intro">
	<p>Der Gibberish-Test prüft, wie viele EVA-Pseudowörter mit Voynich-ähnlicher Bigramm-Statistik die v6.3-Systembarrieren passieren. Empirischer Befund v6.2: Mittlere ★★★+-Rate = <strong>31 %</strong> (10 × 50 Wörter) — Schwelle 20 % überschritten → R40 v2 verschärft. Ab v6.3 gilt: Abbruchschwelle <strong>&gt; 15 %</strong>, Zielkorridor <strong>≤ 10 %</strong>. R40 v2 kappt Basiswurzeln mit ≤ 3 Konsonanten (v6.2: ≤ 2). Das Tool analysiert jedes Wort mit R40 v2, R41 und D1/D2.</p>
</div>

<!-- Controls -->
<div class="gib-controls">
	<label class="ctrl-label" for="wc-input">Testwörter</label>
	<input
		id="wc-input"
		class="wc-input"
		type="number"
		min="10" max="200" step="10"
		bind:value={wordCount}
	/>
	<button class="run-btn" onclick={runTest}>
		{tested ? 'Neu generieren' : 'Test starten'}
	</button>
</div>

<!-- Stats -->
{#if tested && stats}
	<div class="stats-grid">
		<div class="box hl stat-main" class:stat-warn={stats.failR40}>
			<div class="box-title">Strukturell ★★★ (Falsch-Positiv-Rate)</div>
			<div class="stat-rate" class:rate-fail={stats.failR40}>{stats.passRate} %</div>
			<div class="stat-verdict">
				{#if stats.passRate > 15}
					⚠ > 15 % — R40 v2 muss weiter verschärft werden
				{:else if stats.passRate > 10}
					⚠ 11–15 % Warnzone — Systembeobachtung
				{:else}
					✓ ≤ 10 % — Zielkorridor erreicht
				{/if}
			</div>
		</div>

		<div class="stat-cells">
			<div class="stat-cell">
				<span class="sc-n">{stats.passed}</span>
				<span class="sc-l">★★★ pass (R40)</span>
			</div>
			<div class="stat-cell">
				<span class="sc-n">{stats.capped}</span>
				<span class="sc-l">★★ (R40-Deckel)</span>
			</div>
			<div class="stat-cell">
				<span class="sc-n">{stats.invalid}</span>
				<span class="sc-l">ungültig (R41)</span>
			</div>
			<div class="stat-cell">
				<span class="sc-n">{stats.lexhits}</span>
				<span class="sc-l">Lexikon-Treffer</span>
			</div>
			<div class="stat-cell">
				<span class="sc-n sc-warn">{stats.d1count}</span>
				<span class="sc-l">⚠ D1 Doppelkons.</span>
			</div>
			<div class="stat-cell">
				<span class="sc-n sc-warn">{stats.d2count}</span>
				<span class="sc-l">⚠ D2 Laryngal-Cl.</span>
			</div>
		</div>
	</div>

	<!-- Results table -->
	<div class="results-wrap">
		<table class="dt gib-table">
			<thead>
				<tr>
					<th>#</th>
					<th>EVA-Pseudowort</th>
					<th>Präfixe</th>
					<th>Wurzel</th>
					<th title="Konsonanten in der Basiswurzel">Kons.</th>
					<th>R40</th>
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
{/if}

<style>
	.gib-intro {
		margin-bottom: 1.2rem;

		& p {
			font-size: .93rem;
			line-height: 1.65;
		}
	}

	/* ── Controls ───────────────────────────────────────── */

	.gib-controls {
		display: flex;
		align-items: center;
		gap: .7rem;
		margin-bottom: 1.2rem;
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

	/* ── Stats grid ─────────────────────────────────────── */

	.stats-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
		margin-bottom: 1.4rem;
		align-items: start;
	}

	.stat-main {
		flex: 0 1 240px;
		text-align: center;

		&.stat-warn {
			border-color: var(--red);
		}
	}

	.stat-rate {
		font-family: var(--font-display);
		font-size: 2.4rem;
		color: var(--green, #1a4a28);
		line-height: 1.1;
		margin: .4rem 0 .2rem;

		&.rate-fail {
			color: var(--red);
		}
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
		align-content: start;
	}

	.stat-cell {
		text-align: center;
		padding: .4rem .3rem;
		background: rgba(255,255,255,.3);
		border: 1px solid var(--parch-dk);
		border-radius: 2px;

		& .sc-n {
			display: block;
			font-family: var(--font-display);
			font-size: 1.1rem;
			color: var(--red);
			line-height: 1.1;
		}

		& .sc-n.sc-warn {
			color: var(--gold);
		}

		& .sc-l {
			display: block;
			font-family: var(--font-smallcaps);
			font-size: .53rem;
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
		width: 1.8rem;
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

	.td-rule {
		white-space: nowrap;
		font-size: .73rem;
	}

	.td-stars { white-space: nowrap; }

	/* Row tints */
	.row-ms-invalid td { opacity: .55; }
	.row-ms-pass    td { background: rgba(26,74,40,.04); }
	.row-ms-lex     td { background: rgba(122,28,28,.05); }

	/* Flag chips */
	.flag-pass    { color: var(--green, #1a4a28); font-weight: 600; }
	.flag-cap     { color: var(--ink-f); }
	.flag-invalid { color: var(--red); font-weight: 600; }
	.flag-warn    { color: var(--gold); font-weight: 600; }
	.flag-na      { color: var(--ink-f); }
	.flag-lex     { color: var(--red); font-size: .65rem; font-style: italic; }

	/* Star badges */
	.ms-invalid { color: var(--red); font-size: .72rem; }
	.ms-cap     { color: var(--ink-f); }
	.ms-pass    { color: var(--gold); font-weight: 600; }
	.ms-lex     { color: var(--red); font-size: .72rem; font-style: italic; }
</style>
