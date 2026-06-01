<script>
	import { PREFIXES, LEXICON, FOLIO_PAGES } from '$lib';
	import { dev } from '$app/environment';

	let { input = $bindable('') } = $props();

	const EXAMPLES = [
		{ label: 'f103r P.23', text: 'daiin sheckhy lchedy chckhy shol' },
		{ label: 'f57r P.5',   text: 'qokcho daiin cheeodam' },
		{ label: 'f57r P.9',   text: 'sar al daiindy qokaiin taiir' },
		{ label: 'f103r P.17', text: 'or aiin sheol daiin' },
		{ label: 'f103r P.42', text: 'tshey sheol chalal' },
		{ label: 'f6v/f7v',    text: 'lor lshol kaiim' },
		{ label: 'f13r P.1',   text: 'torshor opchy shol dy qopchy shol' },
		{ label: 'f20r P.13',  text: 'chor chor cheey tchey' },
		{ label: 'f77r P.21',  text: 'cheeol daiin sheol' },
		{ label: 'f21r P.7',   text: 'shoeor cheor chokeody cho cthor shy' },
		{ label: 'f21v P.6',   text: 'sho tsho chotshol chol todaiin daiin' },
		{ label: 'f72r1 R1',   text: 'otam otam chotam daiin sheol' },
	];

	// Canonical redirects for forms consolidated into primary entries (Redundanzanalyse v6.9)
	const ALIASES = /** @type {Record<string,string>} */ ({
		daiidy:  'daiindy',
		kedy:    'chedy',
		doiin:   'doaiin',
		ykol:    'ychol',
		ol:      'al',
		keaiin:  'kaiin',
		ckhol:   'kchol',
		chetom:  'cthom',
		yteor:   'ytor',
		cheeol:  'cheol',
		alif:    'alef',
		otalif:  'otalef',
	});

	/** @param {string} eva */
	function lexLookup(eva) {
		return LEXICON.find(e => e.eva === eva)
			?? LEXICON.find(e => e.eva === ALIASES[eva]);
	}

	/** @param {string} w */
	function lookupWord(w) {
		const wl = w.toLowerCase().trim();

		const direct = lexLookup(wl);
		if (direct) return { ...direct, eva: wl, matchType: 'found' };

		for (const pre of PREFIXES) {
			if (wl.startsWith(pre.eva) && wl.length > pre.eva.length) {
				const rest = wl.slice(pre.eva.length);
				const base = lexLookup(rest);
				if (base) return {
					eva: w,
					heb: pre.heb + base.heb,
					de: pre.de + ' + ' + base.de,
					stars: base.stars,
					cat: base.cat,
					matchType: 'prefix',
				};
			}
		}
		return null;
	}

	const words = $derived(
		input.split(/[\s·,.]+/).map(s => s.trim()).filter(Boolean)
	);

	const results = $derived(words.map(w => ({ word: w, lookup: lookupWord(w) })));

	const hebOutput = $derived(
		results.length
			? results.map(r => r.lookup ? r.lookup.heb : `[${r.word}?]`).join('  ·  ')
			: null
	);

	const deOutput = $derived(
		results.length
			? results.map(r => r.lookup ? r.lookup.de : '???').join(' | ')
			: null
	);

	const knownCount  = $derived(results.filter(r => r.lookup).length);
	const totalCount  = $derived(results.length);

	let hideUnknown = $state(false);
	const glossResults = $derived(hideUnknown ? results.filter(r => r.lookup) : results);

	// ── Folio loader ──────────────────────────────────────

	let folioMsg  = $state('');
	let folioType = $state('');   // 'loading' | 'ok' | 'error'

	/** @param {string} pageId */
	function folioFilename(pageId) {
		const m = pageId.match(/^([a-zA-Z]+)(\d+)(.*)/);
		if (!m) return pageId;
		return m[1] + String(m[2]).padStart(3, '0') + m[3];
	}

	/**
	 * @param {string} quire
	 * @param {string} pageId
	 */
	function folioUrl(quire, pageId) {
		const target = `https://voynich.nu/${quire}/${folioFilename(pageId)}_tr.txt`;
		if (dev) return `https://corsproxy.io/?url=${encodeURIComponent(target)}`;
		return target;
	}

	/** @param {string} raw */
	function parseEvaText(raw) {
		const lines = raw.split('\n');
		const paragraphs = [];
		let collecting = false;
		let currentText = '';

		for (const line of lines) {
			const trimmed = line.trim();

			if (trimmed.startsWith('#')) {
				if (collecting && currentText) { paragraphs.push(currentText); currentText = ''; }
				collecting = false;
				continue;
			}

			if (trimmed.startsWith('<')) {
				if (collecting && currentText) { paragraphs.push(currentText); currentText = ''; }
				collecting = /;H>/.test(trimmed);
				if (collecting) {
					const rest = trimmed.replace(/^<[^>]*>\s*/, '');
					if (rest) currentText = rest;
				}
				continue;
			}

			if (trimmed === '') continue;
			if (collecting) currentText += (currentText ? '\n' : '') + trimmed;
		}

		if (collecting && currentText) paragraphs.push(currentText);
		return paragraphs;
	}

	/** @param {string[]} paragraphs */
	function extractEvaWords(paragraphs) {
		return paragraphs
			.join(' ')
			.replace(/\{[^}]+\}/g, ' ')
			.replace(/[@*!]/g, '')
			.split(/[.\-=,\s]+/)
			.map(/** @param {string} w */ w => w.trim().toLowerCase())
			.filter(/** @param {string} w */ w => w && /^[a-z]+$/.test(w));
	}

	/**
	 * @param {string} quire
	 * @param {string} pageId
	 */
	async function fetchFolio(quire, pageId) {
		folioMsg  = `Lade ${pageId} …`;
		folioType = 'loading';
		try {
			const res = await fetch(folioUrl(quire, pageId));
			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			const text = await res.text();
			const paragraphs = parseEvaText(text);
			const evWords = extractEvaWords(paragraphs);
			input = evWords.join(' ');
			folioMsg  = `${pageId} — ${paragraphs.length} Abs. · ${evWords.length} Wörter`;
			folioType = 'ok';
		} catch (e) {
			const msg = e instanceof Error ? e.message : String(e);
			folioMsg  = `Fehler: ${msg}`;
			folioType = 'error';
		}
	}
</script>

<div class="tool-area" aria-label="EVA-Übersetzer">
	<!-- ── Top grid: Input | Output | Folio ── -->
	<div class="top-grid">

		<!-- Col 1: Input -->
		<div class="input-col">
			<header class="col-header">
				<span class="panel-label" id="lbl-input">EVA-Eingabe</span>
				{#if totalCount > 0}
					<span class="coverage-badge" aria-label="{knownCount} von {totalCount} Tokens erkannt">
						{knownCount}/{totalCount}
					</span>
				{/if}
			</header>
			<div class="textarea-wrap">
				<textarea
					class="eva-input"
					bind:value={input}
					placeholder="z.B.  daiin · shedy · sar · al · dam"
					rows="5"
					aria-labelledby="lbl-input"
				></textarea>
				{#if input}
					<button class="clear-btn" onclick={() => input = ''} aria-label="Eingabe löschen">✕</button>
				{/if}
			</div>
			<div class="example-btns" role="group" aria-label="Beispielsequenzen">
				{#each EXAMPLES as ex}
					<button class="ex-btn" onclick={() => input = ex.text} title={ex.text}>{ex.label}</button>
				{/each}
			</div>
		</div>

		<!-- Col 2: Output -->
		<div class="output-col">
			<header class="col-header">
				<span class="panel-label" id="lbl-heb">Hebräisch (RTL)</span>
			</header>
			<div
				class="result-heb"
				class:empty={!hebOutput}
				aria-labelledby="lbl-heb"
				aria-live="polite"
				lang="he"
				dir="rtl"
			>
				{#if hebOutput}{hebOutput}{:else}— Rekonstruktion erscheint hier —{/if}
			</div>

			<span class="panel-label" id="lbl-de" style="margin-top:.75rem;display:block">Bedeutung (Deutsch)</span>
			<div
				class="result-de"
				aria-labelledby="lbl-de"
				aria-live="polite"
			>{deOutput ?? '—'}</div>
		</div>

		<!-- Col 3: Folio loader -->
		<div class="folio-col" aria-label="Folio direkt laden">
			<header class="col-header">
				<span class="panel-label" id="lbl-folio">Folio laden</span>
			</header>

			<div class="folio-keyboard" role="navigation" aria-labelledby="lbl-folio">
				{#each FOLIO_PAGES as group}
					<details class="folio-group">
						<summary class="folio-group-label">{group.label}</summary>
						<div class="folio-btns">
							{#each group.pages as page}
								<button
									class="folio-btn"
									onclick={() => dev ? fetchFolio(group.q, page) : window.open(folioUrl(group.q, page), '_blank')}
									aria-label="Folio {page} laden"
								>{page}</button>
							{/each}
						</div>
					</details>
				{/each}
			</div>

			{#if folioMsg}
				<p class="folio-status" class:ok={folioType === 'ok'} class:error={folioType === 'error'}>
					{folioMsg}
				</p>
			{/if}
		</div>

	</div>

	<div class="token-gloss">
		<!-- ── Token row ── -->
		{#if results.length > 0}
			<div class="token-section">
				<span class="panel-label">Token-Analyse</span>
				<div class="token-row" role="list" aria-label="Erkannte Tokens">
					{#each results as r}
						<span
							class="tok"
							class:found={r.lookup?.matchType === 'found'}
							class:prefix={r.lookup?.matchType === 'prefix'}
							class:unknown={!r.lookup}
							role="listitem"
							title={r.lookup ? r.lookup.de : 'unbekannt'}
						>
							<span class="tok-eva">{r.word}</span>
							<span class="tok-heb" lang="he" dir="rtl">{r.lookup ? r.lookup.heb : '?'}</span>
						</span>
					{/each}
				</div>
			</div>
		{/if}

		<!-- ── Gloss table ── -->
		{#if results.length > 0}
			<div class="gloss-wrap">
				<div class="gloss-header">
					<span class="panel-label">Wort-für-Wort-Analyse</span>
					<label class="hide-unknown-toggle">
						<input type="checkbox" bind:checked={hideUnknown} />
						<span>Unbekannte ausblenden</span>
					</label>
				</div>
				<div class="gloss-scroll">
					<table class="gloss-table" aria-label="Wort-für-Wort-Analyse">
						<thead>
							<tr>
								<th scope="col">EVA</th>
								<th scope="col">Hebräisch</th>
								<th scope="col">Bedeutung</th>
								<th scope="col">Konf.</th>
								<th scope="col">Kat.</th>
							</tr>
						</thead>
						<tbody>
							{#each glossResults as r}
								<tr class:row-unknown={!r.lookup}>
									<td class="g-eva">{r.word}</td>
									<td class="g-heb" lang="he" dir="rtl">{r.lookup ? r.lookup.heb : '—'}</td>
									<td class="g-de">{r.lookup ? r.lookup.de : 'unbekannt'}</td>
									<td class="g-st" class:g5={r.lookup && r.lookup.stars.length >= 9}>{r.lookup ? r.lookup.stars : '—'}</td>
									<td class="g-cat">{r.lookup ? r.lookup.cat : '—'}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
			</div>
		{/if}
	</div>
</div>

<style>
	/* ── Shell ─────────────────────────────────────────── */

	.tool-area {
		flex: 1 1 960px;
		container-type: inline-size;
		background: rgba(255, 255, 255, .22);
		border: 1px solid var(--border);
		border-radius: 3px;
		padding: 1.25rem 1.5rem 1rem;
		margin: 1rem 0 1.5rem;
	}

	/* ── Top grid ─────────────────────────────────────── */

	.top-grid {
		display: grid;
		grid-template-columns: 2fr 2fr minmax(240px, 1.5fr);
		gap: 1.2rem;
		align-items: start;

		@container (max-width: 1280px) {
			grid-template-columns: 1fr 1fr;

			& .folio-col {
				grid-column: 1 / -1;
			}
		}

		@container (max-width: 560px) {
			grid-template-columns: 1fr;
		}
	}

	.col-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: .4rem;
		min-height: 1.4rem;
	}

	/* ── Panel labels ─────────────────────────────────── */

	.panel-label {
		font-family: var(--font-smallcaps);
		font-size: .62rem;
		letter-spacing: .16em;
		text-transform: uppercase;
		color: var(--ink-f);
	}

	/* ── Coverage badge ───────────────────────────────── */

	.coverage-badge {
		font-family: var(--font-mono);
		font-size: .68rem;
		color: var(--ink-f);
		background: rgba(0, 0, 0, .05);
		border: 1px solid var(--parch-dk);
		border-radius: 2px;
		padding: .05rem .35rem;
	}

	/* ── EVA input ────────────────────────────────────── */

	.eva-input {
		width: 100%;
		font-family: var(--font-mono);
		font-size: .93rem;
		color: var(--ink);
		background: rgba(255, 255, 255, .55);
		border: 1px solid var(--border);
		border-radius: 2px;
		padding: .55rem .75rem;
		resize: vertical;
		min-height: 100px;
		line-height: 1.7;
		outline: none;
		transition: border-color .18s, background .18s;

		&:focus {
			border-color: var(--gold);
			background: rgba(255, 255, 255, .8);
			box-shadow: 0 0 0 3px rgba(154, 122, 42, .12);
		}

		&::placeholder {
			color: var(--ink-f);
			opacity: .55;
			font-style: italic;
		}
	}

	/* ── Example buttons ──────────────────────────────── */

	.example-btns {
		display: flex;
		flex-wrap: wrap;
		gap: .3rem;
		margin-top: .6rem;
	}

	.ex-btn {
		font-family: var(--font-mono);
		font-size: .73rem;
		color: var(--ink-l);
		background: rgba(255, 255, 255, .45);
		border: 1px solid var(--parch-dk);
		border-radius: 2px;
		padding: .18rem .55rem;
		cursor: pointer;
		transition: all .13s;

		&:hover, &:focus-visible {
			background: rgba(255, 255, 255, .88);
			border-color: var(--border);
			color: var(--ink);
			outline: none;
		}
	}

	/* ── Textarea wrapper + clear icon ───────────────────── */

	.textarea-wrap {
		position: relative;

		&:hover .clear-btn,
		&:focus-within .clear-btn {
			opacity: 1;
		}
	}

	.clear-btn {
		position: absolute;
		top: .4rem;
		right: .4rem;
		font-size: .8rem;
		line-height: 1;
		color: var(--red);
		background: rgba(255, 255, 255, .75);
		border: 1px solid rgba(122, 28, 28, .2);
		border-radius: 2px;
		padding: .2rem .35rem;
		cursor: pointer;
		opacity: 0;
		transition: opacity .15s, background .13s, border-color .13s;

		&:hover, &:focus-visible {
			background: rgba(255, 255, 255, .97);
			border-color: var(--red);
			outline: none;
		}
	}

	/* ── Hebrew / German output ───────────────────────── */

	.result-heb {
		min-height: 100px;
		max-height: 17rem;
		font-family: var(--font-hebrew);
		font-size: 1.25rem;
		direction: rtl;
		line-height: 2.1;
		color: var(--blue);
		background: rgba(255, 255, 255, .38);
		border: 1px solid var(--parch-dk);
		border-radius: 2px;
		padding: .55rem .75rem;
		word-break: break-word;
		overflow: auto;

		&.empty {
			color: var(--ink-f);
			font-family: var(--font-serif);
			font-style: italic;
			font-size: .88rem;
			direction: ltr;
			line-height: 1.6;
		}
	}

	.result-de {
		font-family: var(--font-serif);
		font-style: italic;
		font-size: .97rem;
		color: var(--ink-l);
		padding: .45rem 0 .45rem .75rem;
		border-left: 2px solid var(--gold);
		margin-top: .5rem;
		min-height: 1.8rem;
		line-height: 1.5;
	}

	/* ── Folio panel ──────────────────────────────────── */

	.folio-col {
		display: flex;
		flex-direction: column;
		gap: 0;
		border: 1px solid var(--parch-dk);
		border-radius: 2px;
		overflow: hidden;
		background: rgba(255, 255, 255, .18);
	}

	.folio-col .col-header {
		background: var(--parch-d);
		border-bottom: 1px solid var(--parch-dk);
		padding: .38rem .7rem;
		margin-bottom: 0;
	}

	.folio-badge {
		font-family: var(--font-mono);
		font-size: .65rem;
		font-weight: bold;
		padding: .05rem .3rem;
		border-radius: 2px;

		&.ok      { color: var(--green); }
		&.error   { color: var(--red); }
		&.loading { color: var(--ink-f); animation: pulse 1s infinite; }
	}

	@keyframes pulse {
		0%, 100% { opacity: 1; }
		50%       { opacity: .35; }
	}

	.folio-keyboard {
		display: flex;
		flex-direction: column;
		gap: 0;
		overflow: auto;

		@container (max-width: 1280px) {
			max-height: 200px;
		}
	}

	.folio-group {
		border-bottom: 1px solid var(--parch-dk);

		&:last-child { border-bottom: none; }
	}

	.folio-group-label {
		font-family: var(--font-smallcaps);
		font-size: .6rem;
		letter-spacing: .08em;
		text-transform: uppercase;
		color: var(--ink-l);
		background: var(--parch-d);
		padding: .3rem .6rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		transition: background .13s;

		&::after {
			content: '▶';
			font-size: .48rem;
			opacity: .4;
			transition: transform .13s;
			flex-shrink: 0;
		}

		.folio-group[open] &::after { transform: rotate(90deg); }
		&:hover { background: var(--parch-dk); }

		&:focus-visible {
			outline: 2px solid var(--gold);
			outline-offset: -2px;
		}
	}

	.folio-btns {
		display: flex;
		flex-wrap: wrap;
		gap: .25rem;
		padding: .4rem .6rem;
		background: rgba(255, 255, 255, .25);
	}

	.folio-btn {
		font-family: var(--font-mono);
		font-size: .68rem;
		color: var(--ink-l);
		background: rgba(255, 255, 255, .5);
		border: 1px solid var(--parch-dk);
		border-radius: 2px;
		padding: .15rem .4rem;
		cursor: pointer;
		transition: all .12s;

		&:hover, &:focus-visible {
			background: rgba(255, 255, 255, .9);
			border-color: var(--border);
			color: var(--ink);
			outline: none;
		}
	}

	.folio-status {
		padding: .3rem .7rem;
		font-family: var(--font-mono);
		font-size: .7rem;
		color: var(--ink-f);
		border-top: 1px solid var(--parch-dk);
		background: rgba(255, 255, 255, .2);
		margin: 0;
		line-height: 1.4;

		&.ok    { color: var(--green); }
		&.error { color: var(--red); }
	}

	.token-gloss {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;

		& > .token-section {
			flex: 1 1 320px;
		}

		& > .gloss-wrap {
			flex: 1 1 480px;
		}
	}

	/* ── Token row ────────────────────────────────────── */

	.token-section {
		margin-top: 1rem;
		padding-top: .85rem;
		border-top: 1px solid var(--parch-dk);
	}

	.token-row {
		display: flex;
		flex-wrap: wrap;
		gap: .3rem;
		margin-top: .4rem;
		padding: .35rem .4rem;
		background: rgba(0, 0, 0, .02);
		border: 1px solid var(--parch-dk);
		border-radius: 2px;
		min-height: 2.2rem;
		align-items: center;
	}

	.tok {
		display: inline-flex;
		flex-direction: column;
		align-items: center;
		gap: 1px;
		padding: .2rem .4rem;
		border-radius: 2px;
		border: 1px solid transparent;
		cursor: default;
		transition: transform .1s;

		&:hover { transform: translateY(-1px); }

		&.found   { background: rgba(26, 74, 40, .07);   border-color: rgba(26, 74, 40, .25); }
		&.prefix  { background: rgba(154, 122, 42, .09); border-color: rgba(154, 122, 42, .28); }
		&.unknown { background: rgba(122, 28, 28, .05);  border-color: rgba(122, 28, 28, .2); }
	}

	.tok-eva {
		font-family: var(--font-mono);
		color: var(--ink-f);
		font-size: .7rem;
		line-height: 1.2;
	}

	.tok-heb {
		font-family: var(--font-hebrew);
		font-size: .9rem;
		color: var(--blue);
		line-height: 1.3;
	}

	/* ── Gloss table ──────────────────────────────────── */

	.gloss-wrap {
		margin-top: .85rem;
		padding-top: .85rem;
		border-top: 1px solid var(--parch-dk);
	}

	.gloss-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: .75rem;
	}

	.hide-unknown-toggle {
		display: flex;
		align-items: center;
		gap: .3rem;
		cursor: pointer;
		font-family: var(--font-smallcaps);
		font-size: .6rem;
		letter-spacing: .1em;
		text-transform: uppercase;
		color: var(--ink-f);
		user-select: none;

		& input[type="checkbox"] {
			accent-color: var(--gold);
			width: .85rem;
			height: .85rem;
			cursor: pointer;
		}

		&:hover span { color: var(--ink-l); }
	}

	.gloss-scroll {
		margin-top: .4rem;
		overflow-x: auto;
	}

	.gloss-table {
		width: 100%;
		border-collapse: collapse;
		font-size: .82rem;

		& th {
			font-family: var(--font-smallcaps);
			font-size: .62rem;
			letter-spacing: .1em;
			text-transform: uppercase;
			color: var(--ink-f);
			padding: .3rem .5rem;
			border-bottom: 1.5px solid var(--border);
			text-align: left;
			background: rgba(0, 0, 0, .02);
			white-space: nowrap;
		}

		& td {
			padding: .28rem .5rem;
			border-bottom: 1px solid var(--parch-dk);
			vertical-align: baseline;
		}

		& tr:last-child td  { border-bottom: none; }
		& tr:hover td       { background: rgba(255, 255, 255, .45); }
		& tr.row-unknown td { opacity: .6; }

		& .g-eva { font-family: var(--font-mono); color: #5a3f1a; white-space: nowrap; }
		& .g-heb { font-family: var(--font-hebrew); font-size: .98rem; color: var(--blue); }
		& .g-de  { font-style: italic; color: var(--ink-l); }
		& .g-st  {
			color: var(--gold);
			font-size: .72rem;
			white-space: nowrap;
			&.g5 { color: #8b0000; }
		}
		& .g-cat {
			font-family: var(--font-smallcaps);
			font-size: .58rem;
			letter-spacing: .08em;
			text-transform: uppercase;
			color: var(--ink-f);
			white-space: nowrap;
		}
	}
</style>
