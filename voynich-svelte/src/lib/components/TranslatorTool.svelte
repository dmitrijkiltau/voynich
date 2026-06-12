<script>
	import { STATS, PREFIXES, LEXICON, FOLIO_PAGES } from '$lib';
	import { LEXICON_ALIASES, getLexiconConfidence, getLexiconKind } from '$lib/lexicon-data';
	import { folioSlug } from '$lib/eva-utils.js';
	import { slide } from 'svelte/transition';
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
		{ label: 'f23r P.6',   text: 'tshol daiidal daiin dal' },
		{ label: 'f23v P.6',   text: 'tshol otshor olsar' },
	];

	const INPUT_PLACEHOLDER = "z.B.  daiin · shedy · sar · al · dam\n→ neue Zeile = neuer Paragraph";

	// ── Folio JSON eager-load (shared pattern with FolioProgress) ────────────
	const _folios = /** @type {Record<string, any>} */ (
		import.meta.glob('../folios/*.json', { eager: true })
	);

	/** @param {string} pageId @returns {any} */
	function getLocalFolioData(pageId) {
		const mod = _folios[`../folios/${folioSlug(pageId)}.json`];
		return mod ? (mod.default ?? mod) : null;
	}

	// ── Lookup helpers ────────────────────────────────────────────────────────

	/** @param {string} eva */
	function lexLookup(eva) {
		return LEXICON.find(e => e.eva === eva)
			?? LEXICON.find(e => e.eva === LEXICON_ALIASES[eva]);
	}

	/** @param {string} w */
	function lookupWord(w) {
		const wl = w.toLowerCase().trim();

		const direct = lexLookup(wl);
		if (direct) return {
			...direct,
			eva: wl,
			stars: getLexiconConfidence(direct.confidenceStars),
			confidenceStars: direct.confidenceStars,
			kind: getLexiconKind(direct),
			matchType: 'found',
		};

		for (const pre of PREFIXES) {
			if (wl.startsWith(pre.eva) && wl.length > pre.eva.length) {
				const rest = wl.slice(pre.eva.length);
				const base = lexLookup(rest);
				if (base) return {
					eva: w,
					heb: pre.heb + base.heb,
					de: pre.de + ' + ' + base.de,
					stars: getLexiconConfidence(base.confidenceStars),
					confidenceStars: base.confidenceStars,
					kind: getLexiconKind(base),
					matchType: 'prefix',
				};
			}
		}
		return null;
	}

	// ── Paragraph model ───────────────────────────────────────────────────────
	// Each non-empty line in `input` is one paragraph.

	const paragraphs = $derived(
		input.split('\n').map(s => s.trim()).filter(Boolean)
	);

	const paraResults = $derived(
		paragraphs.map((para, i) => {
			const words = para.split(/[\s·,.]+/).map(s => s.trim()).filter(Boolean);
			const results = words.map(w => ({ word: w, lookup: lookupWord(w) }));
			const knownCount = results.filter(r => r.lookup).length;
			return { id: `P.${i + 1}`, raw: para, words, results, knownCount, totalCount: words.length };
		})
	);

	const totalWords = $derived(paraResults.reduce((s, p) => s + p.totalCount, 0));
	const totalKnown = $derived(paraResults.reduce((s, p) => s + p.knownCount, 0));

	let hideUnknown = $state(false);

	// ── Accordion state ───────────────────────────────────────────────────────
	// Index of the currently open paragraph; -1 = all collapsed.
	let openPara = $state(0);

	// ── Folio loader ──────────────────────────────────────────────────────────

	let folioMsg  = $state('');
	let folioType = $state('');

	/** @param {string} line — raw EVA transcription line */
	function evaLineToWords(line) {
		return line
			.replace(/\{[^}]+\}/g, ' ')
			.replace(/[@*!=]/g, '')
			.split(/[.\-=,\s]+/)
			.map(w => w.trim().toLowerCase())
			.filter(w => w && /^[a-z]+$/.test(w))
			.join(' ');
	}

	/** Extract one word-string per paragraph from a local folio JSON.
	 * @param {any} data @returns {string[] | null} */
	function extractParaLinesFromJson(data) {
		const paras = data?.transcriptions?.paragraphs;
		if (!paras) return null;
		return Object.entries(paras)
			.sort(([a], [b]) => {
				const na = parseFloat(a.replace('P.', ''));
				const nb = parseFloat(b.replace('P.', ''));
				return na - nb;
			})
			.map(([, variants]) => {
				const v = /** @type {any} */ (variants);
				const text = v.H ?? v.C ?? v.F ?? '';
				return evaLineToWords(text);
			})
			.filter(Boolean);
	}

	/** Parse Stolfi/voynich.nu .txt format into per-paragraph raw lines (H siglen).
	 * @param {string} raw @returns {string[]} */
	function parseEvaText(raw) {
		const lines = raw.split('\n');
		/** @type {string[]} */
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

	/** @param {string} quire @param {string} pageId */
	function folioUrl(quire, pageId) {
		const target = `https://voynich.nu/${quire}/${folioSlug(pageId)}_tr.txt`;
		if (dev) return `https://corsproxy.io/?url=${encodeURIComponent(target)}`;
		return target;
	}

	/** @param {string} quire @param {string} pageId */
	async function fetchFolio(quire, pageId) {
		// JSON-first: works in both dev and live.
		const localData = getLocalFolioData(pageId);
		if (localData) {
			const lines = extractParaLinesFromJson(localData);
			if (lines?.length) {
				input = lines.join('\n');
				openPara = 0;
				folioMsg  = `${pageId} — ${lines.length} Abs. (lokal)`;
				folioType = 'ok';
				return;
			}
		}

		// Fallback: network fetch (dev only via CORS proxy; live opens tab).
		if (!dev) {
			window.open(folioUrl(quire, pageId), '_blank');
			folioMsg  = `${pageId} — Transkription in neuem Tab geöffnet`;
			folioType = 'ok';
			return;
		}

		folioMsg  = `Lade ${pageId} …`;
		folioType = 'loading';
		try {
			const res = await fetch(folioUrl(quire, pageId));
			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			const text = await res.text();
			const paras = parseEvaText(text);
			const lines = paras.map(evaLineToWords).filter(Boolean);
			input = lines.join('\n');
			openPara = 0;
			const wc = lines.reduce((s, l) => s + l.split(/\s+/).filter(Boolean).length, 0);
			folioMsg  = `${pageId} — ${lines.length} Abs. · ${wc} Wörter (Netz)`;
			folioType = 'ok';
		} catch (e) {
			const msg = e instanceof Error ? e.message : String(e);
			folioMsg  = `Fehler: ${msg}`;
			folioType = 'error';
		}
	}
</script>

<section class="section" id="translator-tool">
	<h2>III. Übersetzungstool</h2>

	<div class="tool">
		<div class="tool-intro">
			<p class="dropcap">EVA-Text in das Eingabefeld eingeben (Wörter durch Leerzeichen oder · getrennt; neue Zeile = neuer Paragraph). Das Tool durchsucht das bestätigte <a href="#lexikon">Lexikon</a>, erkennt Präfixe und zeigt Hebräisch, Wort-für-Wort-Analyse und deutsche Bedeutung an. Unbekannte Wörter werden als solche markiert.</p>
			<div class="box red method-note">
				<div class="box-title">Hinweis zur Methodik</div>
				<p>Das Tool arbeitet auf dem bestätigten <a href="#lexikon">Lexikon</a> ({STATS.lexicon} Einträge, ★★★ oder höher). Komplexe Komposita und unbekannte Wörter werden als „unbekannt" markiert. Die Ausgabe ist eine <em>Hypothese</em> — keine abgeschlossene Übersetzung.</p>
			</div>
		</div>

		<div class="tool-area" aria-label="EVA-Übersetzer">
			<!-- ── Top grid: Input | Folio ── -->
			<div class="top-grid">

				<!-- Col 1: Input -->
				<div class="input-col">
					<header class="col-header">
						<span class="panel-label" id="lbl-input">EVA-Eingabe</span>
						{#if totalWords > 0}
							<span class="coverage-badge" aria-label="{totalKnown} von {totalWords} Tokens erkannt">
								{totalKnown}/{totalWords}
							</span>
						{/if}
					</header>
					<div class="textarea-wrap">
						<textarea
							class="eva-input"
							bind:value={input}
							placeholder={INPUT_PLACEHOLDER}
							rows="6"
							aria-labelledby="lbl-input"
						></textarea>
						{#if input}
							<button class="clear-btn" onclick={() => input = ''} aria-label="Eingabe löschen">✕</button>
						{/if}
					</div>
					<div class="example-btns" role="group" aria-label="Beispielsequenzen">
						{#each EXAMPLES as ex (ex.label)}
							<button class="ex-btn" onclick={() => input = ex.text} title={ex.text}>{ex.label}</button>
						{/each}
					</div>
				</div>

				<!-- Col 2: Folio loader -->
				<div class="folio-col" aria-label="Folio direkt laden">
					<header class="col-header">
						<span class="panel-label" id="lbl-folio">Folio laden</span>
					</header>

					<div class="folio-keyboard" role="navigation" aria-labelledby="lbl-folio">
						{#each FOLIO_PAGES as group (group.label)}
							<details class="folio-group">
								<summary class="folio-group-label">{group.label}</summary>
								<div class="folio-btns">
									{#each group.pages as page (page)}
										<button
											class="folio-btn"
											onclick={() => fetchFolio(group.q, page)}
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

			<!-- ── Paragraph accordion ── -->
			{#if paraResults.length > 0}
				<div class="para-accordion">

					<!-- Accordion control bar -->
					<div class="para-acc-bar">
						<span class="panel-label">
							Analyse
							{#if paraResults.length > 1}
								<span class="para-acc-count">· {paraResults.length} Paragraphen</span>
							{/if}
						</span>
						<div class="para-acc-controls">
							<label class="hide-unknown-toggle">
								<input type="checkbox" bind:checked={hideUnknown} />
								<span>Unbekannte ausblenden</span>
							</label>
						</div>
					</div>

					{#each paraResults as p, i (i)}
						<div class="para-item">

							<!-- Accordion header (only when multiple paragraphs) -->
							{#if paraResults.length > 1}
								<button
									class="para-hd"
									class:para-hd--open={openPara === i}
									onclick={() => { openPara = openPara === i ? -1 : i; }}
									aria-expanded={openPara === i}
								>
									<span class="para-hd-chevron">{openPara === i ? '▼' : '▶'}</span>
									<span class="para-hd-id">{p.id}</span>
									<span class="para-hd-preview">{p.raw.length > 60 ? p.raw.slice(0, 60) + '…' : p.raw}</span>
									<span class="para-hd-cov" title="{p.knownCount} von {p.totalCount} erkannt">{p.knownCount}/{p.totalCount}</span>
								</button>
							{/if}

							<!-- Accordion body -->
							{#if paraResults.length === 1 || openPara === i}
								<div class="para-body" transition:slide={{ duration: 150 }}>

									<!-- Hebrew -->
									<div class="para-subsec">
										<span class="panel-label" id="lbl-heb-{i}">Hebräisch (RTL)</span>
										<div
											class="result-heb"
											aria-labelledby="lbl-heb-{i}"
											aria-live="polite"
											lang="he"
											dir="rtl"
										>
											{p.results.map(r => r.lookup ? r.lookup.heb : `[${r.word}?]`).join('  ·  ')}
										</div>
									</div>

									<!-- German -->
									<div class="para-subsec">
										<span class="panel-label" id="lbl-de-{i}">Bedeutung (Deutsch)</span>
										<div
											class="result-de"
											aria-labelledby="lbl-de-{i}"
											aria-live="polite"
										>
											{p.results.map(r => r.lookup ? r.lookup.de : '???').join(' | ')}
										</div>
									</div>

									<!-- Token analysis -->
									<div class="para-subsec">
										<span class="panel-label">Token-Analyse</span>
										<div class="token-row" role="list" aria-label="Erkannte Tokens {p.id}">
											{#each p.results as r, j (r.word + '-' + j)}
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

									<!-- Word-for-word table -->
									<div class="para-subsec">
										<span class="panel-label">Wort-für-Wort-Analyse</span>
										<div class="gloss-scroll">
											<table class="gloss-table" aria-label="Wort-für-Wort-Analyse {p.id}">
												<thead>
													<tr>
														<th scope="col">EVA</th>
														<th scope="col">Hebräisch</th>
														<th scope="col">Bedeutung</th>
														<th scope="col">Konf.</th>
														<th scope="col">Typ</th>
													</tr>
												</thead>
												<tbody>
													{#each (hideUnknown ? p.results.filter(r => r.lookup) : p.results) as r, j ('g-' + p.id + '-' + r.word + '-' + j)}
														<tr class:row-unknown={!r.lookup}>
															<td class="g-eva">{r.word}</td>
															<td class="g-heb" lang="he" dir="rtl">{r.lookup ? r.lookup.heb : '—'}</td>
															<td class="g-de">{r.lookup ? r.lookup.de : 'unbekannt'}</td>
															<td class="g-st" class:g5={r.lookup && r.lookup.confidenceStars === 5}>{r.lookup ? r.lookup.stars : '—'}</td>
															<td class="g-kind">{r.lookup ? (r.lookup.kind ?? getLexiconKind(r.lookup)) : '—'}</td>
														</tr>
													{/each}
												</tbody>
											</table>
										</div>
									</div>

								</div>
							{/if}
						</div>
					{/each}

				</div>
			{/if}
		</div>
	</div>
</section>

<style>
  .tool {
    display: flex;
    flex-wrap: wrap;
    gap: 0 2rem;

    & > .tool-intro {
      flex: 0 1 480px;

      & .method-note {
        margin-top: .9rem;
        font-size: .88rem;

        & p { margin: 0; }
      }
    }
  }

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
		grid-template-columns: 1fr minmax(220px, 320px);
		gap: 1.2rem;
		align-items: start;

		@container (max-width: 680px) {
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
		max-height: 10rem;
		font-family: var(--font-hebrew);
		font-size: 1.25rem;
		direction: rtl;
		line-height: 2.1;
		color: var(--blue);
		background: rgba(255, 255, 255, .38);
		border: 1px solid var(--parch-dk);
		border-radius: 2px;
		padding: .45rem .75rem;
		word-break: break-word;
		overflow: auto;
	}

	.result-de {
		font-family: var(--font-serif);
		font-style: italic;
		font-size: .97rem;
		color: var(--ink-l);
		padding: .45rem 0 .45rem .75rem;
		border-left: 2px solid var(--gold);
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

	@keyframes pulse {
		0%, 100% { opacity: 1; }
		50%       { opacity: .35; }
	}

	.folio-keyboard {
		display: flex;
		flex-direction: column;
		gap: 0;
		overflow: auto;
		max-height: 260px;
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

	/* ── Paragraph accordion ─────────────────────────── */

	.para-accordion {
		margin-top: 1.1rem;
		border: 1px solid var(--parch-dk);
		border-radius: 2px;
		overflow: hidden;
	}

	.para-acc-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: .75rem;
		padding: .38rem .75rem;
		background: var(--parch-d);
		border-bottom: 1px solid var(--parch-dk);
	}

	.para-acc-count {
		font-family: var(--font-mono);
		font-size: .58rem;
		color: var(--ink-f);
		margin-left: .2rem;
		font-variant: normal;
		text-transform: none;
		letter-spacing: 0;
	}

	.para-acc-controls {
		display: flex;
		align-items: center;
		gap: .55rem;
		flex-shrink: 0;
	}

	.para-item {
		border-bottom: 1px solid color-mix(in srgb, var(--parch-dk) 70%, transparent);

		&:last-child { border-bottom: none; }
	}

	.para-hd {
		width: 100%;
		display: flex;
		align-items: center;
		gap: .55rem;
		padding: .33rem .75rem;
		background: rgba(255, 255, 255, .1);
		border: none;
		cursor: pointer;
		text-align: left;
		transition: background .12s;

		&:hover { background: rgba(255, 255, 255, .28); }
		&.para-hd--open { background: rgba(255, 255, 255, .18); }
	}

	.para-hd-chevron {
		font-size: .48rem;
		color: var(--ink-f);
		flex-shrink: 0;
		width: 1ch;
		line-height: 1;
	}

	.para-hd-id {
		font-family: var(--font-mono);
		font-size: .66rem;
		color: var(--gold);
		font-weight: 700;
		flex-shrink: 0;
		min-width: 3.5ch;
	}

	.para-hd-preview {
		font-family: var(--font-mono);
		font-size: .6rem;
		color: var(--ink-f);
		flex: 1;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
	}

	.para-hd-cov {
		font-family: var(--font-mono);
		font-size: .58rem;
		color: var(--ink-f);
		background: rgba(0, 0, 0, .04);
		border: 1px solid var(--parch-dk);
		border-radius: 2px;
		padding: 0 .35rem;
		flex-shrink: 0;
	}

	.para-body {
		padding: .75rem .75rem .9rem;
		background: rgba(255, 255, 255, .18);
		display: flex;
		flex-direction: column;
		gap: .9rem;
		border-top: 1px solid color-mix(in srgb, var(--parch-dk) 60%, transparent);
	}

	.para-subsec {
		display: flex;
		flex-direction: column;
		gap: .28rem;
	}

	/* ── Token row ────────────────────────────────────── */

	.token-row {
		display: flex;
		flex-wrap: wrap;
		gap: .3rem;
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

	.gloss-scroll {
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

		& .g-eva { font-family: var(--font-mono); color: var(--ink-eva); white-space: nowrap; }
		& .g-heb { font-family: var(--font-hebrew); font-size: .98rem; color: var(--blue); }
		& .g-de  { font-style: italic; color: var(--ink-l); }
		& .g-st  {
			color: var(--gold);
			font-size: .72rem;
			white-space: nowrap;
			&.g5 { color: var(--red-dk); }
		}
		& .g-kind {
			font-family: var(--font-smallcaps);
			font-size: .58rem;
			letter-spacing: .08em;
			text-transform: uppercase;
			color: var(--ink-f);
			white-space: nowrap;
		}
	}

	/* ── Hide-unknown toggle ──────────────────────────── */

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

	@media print {
		#translator-tool {
			display: none;
		}
	}
</style>
