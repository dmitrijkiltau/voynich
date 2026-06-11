<script>
	import { FOLIO_PAGES, LACUNA } from '$lib';
	import { slide } from 'svelte/transition';
	import { SvelteMap, SvelteSet } from 'svelte/reactivity';
	import { majorityTokens } from '$lib/eva-utils.js';

	let open = $state(false);

	// Eager-load all folio JSONs — used for status derivation and detail panel.
	const _folios = /** @type {Record<string, any>} */ (
		import.meta.glob('../folios/*.json', { eager: true })
	);

	/** @param {string} pageId @returns {string} */
	function folioSlug(pageId) {
		const m = pageId.match(/^f(\d+)(.*)$/);
		return m ? `f${m[1].padStart(3, '0')}${m[2]}` : pageId;
	}

	/** @param {string} pageId @returns {any} */
	function getFolioData(pageId) {
		const mod = _folios[`../folios/${folioSlug(pageId)}.json`];
		return mod ? (mod.default ?? mod) : null;
	}

	/**
	 * Status is derived from JSON content, not set manually:
	 *   lacuna    — physically missing from the manuscript (LACUNA set)
	 *   confirmed — JSON contains `iconographic` → Erstanalyse
	 *   partial   — JSON exists, transcriptions only, no iconographic
	 *   done      — TODO: lexicon coverage > 90% on transcription lines → Übersetzt
	 *   none      — no JSON file exists
	 * @param {string} pageId @returns {string}
	 */
	function st(pageId) {
		if (LACUNA.has(pageId)) return 'lacuna';
		const data = getFolioData(pageId);
		if (!data) return 'none';
		// TODO: compute lexicon coverage across transcription lines → 'done' (Übersetzt)
		if (data.iconographic) return 'confirmed';
		return 'partial';
	}

	const SECTION_ABBR = /** @type {Record<string,string>} */ ({
		q01:'Kräuter A',  q02:'Kräuter A',  q03:'Kräuter A',  q04:'Kräuter A',
		q05:'Kräuter A/B', q06:'Kräuter B', q07:'Kräuter B',
		q08:'Astronomisch', q09:'Zodiak',
		q10:'Biologisch', q11:'Biologisch', q12:'Biologisch', q13:'Biologisch',
		q14:'Kosmologisch',
		q15:'Pharmazeutisch', q16:'Pharmazeutisch', q17:'Pharmazeutisch',
		q18:'Pharmazeutisch', q19:'Pharmazeutisch',
		q20:'Rezepte / Sterne',
	});

	const SECTION_HUE = /** @type {Record<string,string>} */ ({
		q01:'green', q02:'green', q03:'green', q04:'green', q05:'green',
		q06:'green', q07:'green',
		q08:'blue',  q09:'blue',
		q10:'gold',  q11:'gold',  q12:'gold',  q13:'gold',
		q14:'red',
		q15:'blue',  q16:'blue',  q17:'blue',  q18:'blue',  q19:'blue',
		q20:'red',
	});

	const SECTION_GLYPH = /** @type {Record<string,string>} */ ({
		q01:'✿', q02:'✿', q03:'✿', q04:'✿', q05:'✿', q06:'✿', q07:'✿',
		q08:'☽', q09:'✦',
		q10:'◎', q11:'◎', q12:'◎', q13:'◎',
		q14:'⊕',
		q15:'⚗', q16:'⚗', q17:'⚗', q18:'⚗', q19:'⚗',
		q20:'★',
	});

	const ROMAN = ['I','II','III','IV','V','VI','VII','VIII','IX','X',
	               'XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX'];

	const quires = FOLIO_PAGES.map((q, i) => {
		const pages      = q.pages.map(p => ({ id: p, label: p.slice(1), st: st(p) }));
		const done       = pages.filter(p => p.st === 'done').length;
		const confirmed  = pages.filter(p => p.st === 'confirmed').length;
		const partial    = pages.filter(p => p.st === 'partial').length;
		const lacuna     = pages.filter(p => p.st === 'lacuna').length;
		const total      = pages.length;
		const analyzable = total - lacuna;
		return {
			...q,
			short:    SECTION_ABBR[q.q]  ?? '',
			hue:      SECTION_HUE[q.q]   ?? 'none',
			glyph:    SECTION_GLYPH[q.q] ?? '',
			roman:    ROMAN[i],
			pages, done, confirmed, partial, lacuna, total, analyzable,
			pctDone:      analyzable ? (done      / analyzable) * 100 : 0,
			pctConfirmed: analyzable ? (confirmed / analyzable) * 100 : 0,
			pctPartial:   analyzable ? (partial   / analyzable) * 100 : 0,
		};
	});

	const totalPages      = quires.reduce((s, q) => s + q.total,      0);
	const totalDone       = quires.reduce((s, q) => s + q.done,       0);
	const totalConfirmed  = quires.reduce((s, q) => s + q.confirmed,  0);
	const totalPartial    = quires.reduce((s, q) => s + q.partial,    0);
	const totalLacuna     = quires.reduce((s, q) => s + q.lacuna,     0);
	const totalAnalyzable = totalPages - totalLacuna;
	const totalNone       = totalAnalyzable - totalDone - totalConfirmed - totalPartial;

	const pctDone      = (totalDone      / totalAnalyzable) * 100;
	const pctConfirmed = (totalConfirmed / totalAnalyzable) * 100;
	const pctPartial   = (totalPartial   / totalAnalyzable) * 100;
	// Only iconographic analyses count as "analyzed" — transcription-only pages do not.
	const pctAnalyzed  = ((totalDone + totalConfirmed) / totalAnalyzable) * 100;

	// ── Filter ───────────────────────────────────────────────────────────────
	/** @type {string | null} */
	let filterStatus = $state(null);

	// ── Accordion detail ─────────────────────────────────────────────────────

	const MORPH_LABELS = /** @type {Record<string,string>} */ ({
		radix:       'RADIX',
		caulis:      'CAULIS',
		folia:       'FOLIA',
		flosFructus: 'FLOS/FRUCTUS',
		coloring:    'Färbung',
	});

	/**
	 * @typedef {Object} ActiveChip
	 * @property {string} pageId
	 * @property {number} quireIdx
	 */

	/** @type {ActiveChip | null} */
	let activeChip = $state(null);

	// folioDetail is derived synchronously from the eager-loaded JSON map.
	const folioDetail = $derived(activeChip ? getFolioData(/** @type {ActiveChip} */(activeChip).pageId) : null);

	/** 
	 * @param {string} pageId
	 * @param {number} quireIdx
	 */
	function toggleChip(pageId, quireIdx) {
		if (activeChip?.pageId === pageId) { activeChip = null; return; }
		activeChip = { pageId, quireIdx };
	}

	// ── Long-press → open folio markdown in new tab ──────────────────────────
	/** @type {number|NodeJS.Timeout} */
	let _lpTimer = 0;
	let _lpFired = false;

	/** @param {string} slug */
	function startLongPress(slug) {
		_lpFired = false;
		_lpTimer = setTimeout(() => {
			_lpFired = true;
			window.open(`/folio/${slug}`, '_blank');
		}, 600);
	}

	function endLongPress() {
		clearTimeout(_lpTimer);
	}

	/** @param {string} pageId @param {number} quireIdx */
	function handleChipClick(pageId, quireIdx) {
		if (_lpFired) { _lpFired = false; return; }
		toggleChip(pageId, quireIdx);
	}

	/** @param {string} pageId @param {string} quire @returns {string | null} */
	function trUrl(pageId, quire) {
		const m = pageId.match(/^f(\d+)(.*)$/);
		if (!m) return null;
		return `https://voynich.nu/${quire}/f${m[1].padStart(3, '0')}${m[2]}_tr.txt`;
	}

	/** @param {Record<string, Record<string, string>>} lines */
	function deriveTranscribersInfo(lines) {
		const paragraphs = Object.keys(lines);
		const total = paragraphs.length;
		/** @type {Record<string, string[]>} */
		const siglenParas = {};
		for (const [para, variants] of Object.entries(lines)) {
			for (const s of Object.keys(variants)) { (siglenParas[s] ??= []).push(para); }
		}
		/** @type {Record<string, Set<string>>} */
		const divTokens = {};
		for (const variants of Object.values(lines)) {
			if (Object.keys(variants).length < 2) continue;
			for (const { minority } of majorityTokens(variants)) {
				for (const [s, divToken] of Object.entries(minority)) {
					(divTokens[s] ??= new SvelteSet()).add(divToken);
				}
			}
		}
		/** @type {Map<string, { siglen: string[], paras: string[] }>} */
		const groups = new SvelteMap();
		for (const [s, paras] of Object.entries(siglenParas)) {
			const key = paras.join('|');
			if (!groups.has(key)) groups.set(key, { siglen: [], paras });
			groups?.get(key)?.siglen.push(s);
		}
		const sorted = [...groups.values()].sort((a, b) => b.paras.length - a.paras.length);
		const transcribers = sorted.map(({ siglen, paras }) => {
			siglen.sort();
			const isAll = paras.length === total;
			const paraStr = isAll ? `${paras[0]}–${paras[total - 1]}` : paras.join('/');
			const div = [...new Set(siglen.flatMap(s => [...(divTokens[s] ?? [])]))].slice(0, 5);
			let label = isAll ? `${paraStr} (alle Paragraphen), n=${siglen.length}` : `${paraStr} (${paras.length} von ${total})`;
			if (div.length) label += ` — abweichend: ${div.join(', ')}`;
			return { siglen, label };
		});
		const consensusDenominators = sorted.map(({ siglen, paras }) => {
			siglen.sort();
			const isAll = paras.length === total;
			const paraStr = isAll ? `${paras[0]}–${paras[total - 1]}` : paras.join('/');
			const hasDivergences = siglen.some(s => divTokens[s]?.size > 0);
			let line = `${paraStr}: n=${siglen.length} (${siglen.join('/')})`;
			if (hasDivergences) line += ' — Divergenzen erkannt';
			return line;
		});
		return { transcribers, consensusDenominators };
	}

	const ST_LABEL = /** @type {Record<string,string>} */ ({
		done:      'übersetzt',
		confirmed: 'analysiert',
		partial:   'transkribiert',
		none:      'nicht erfasst',
		lacuna:    'nicht erhalten',
	});
</script>

<div class="fp">
	<!-- ── HEADER (toggle) ─────────────────────────── -->
	<button class="fp-head" onclick={() => open = !open} aria-expanded={open} aria-controls="fp-body">
		<div class="fp-title-row">
			<span class="fp-title">Folio-Register</span>
			<div class="fp-title-right">
				<span class="fp-pct-badge">{pctAnalyzed.toFixed(1)}&thinsp;%</span>
				<span class="fp-chevron" class:open>{open ? '▲' : '▼'}</span>
			</div>
		</div>
		<div class="fp-counts">
			{#if totalDone}
				<span class="fpc done">{totalDone}&nbsp;<em>übersetzt</em></span>
				<span class="fpc-sep">·</span>
			{/if}
			<span class="fpc confirmed">{totalConfirmed}&nbsp;<em>analysiert</em></span>
			<span class="fpc-sep">·</span>
			<span class="fpc partial">{totalPartial}&nbsp;<em>transkribiert</em></span>
			<span class="fpc-sep">·</span>
			<span class="fpc none">{totalNone}&nbsp;<em>ausstehend</em></span>
			{#if totalLacuna}
				<span class="fpc-sep">·</span>
				<span class="fpc lacuna">{totalLacuna}&nbsp;<em>lacuna</em></span>
			{/if}
			<span class="fpc-sep">·</span>
			<span class="fpc total">{totalAnalyzable}&nbsp;<em>Seiten</em></span>
		</div>

		<!-- Segmented global progress bar -->
		<div class="fp-global-bar" title="Erstanalyse: {pctAnalyzed.toFixed(1)} %">
			<div class="fpgb-done"      style="width:{pctDone}%"     ></div>
			<div class="fpgb-confirmed" style="width:{pctConfirmed}%"></div>
			<div class="fpgb-partial"   style="width:{pctPartial}%"  ></div>
			<div class="fpgb-tick" style="left:{pctDone + pctConfirmed}%"></div>
		</div>
		<div class="fp-bar-labels">
			<span>0 %</span>
			<span class="fp-bar-done-mark" style="left:{pctDone + pctConfirmed}%">{(pctDone + pctConfirmed).toFixed(0)} %</span>
			<span>100 %</span>
		</div>
	</button>

	<!-- ── COLLAPSIBLE BODY ─────────────────────────── -->
	<div id="fp-body" class="fp-body" class:open>
    <div class="fp-body-inner">

      <!-- ── Filter bar ──────────────────────────────── -->
      <div class="fp-filters">
        <button class="fp-fp fp-fp--all" class:fp-fp--active={filterStatus === null}
          onclick={() => filterStatus = null}>Alle</button>
        {#if totalDone}
          <button class="fp-fp fp-fp--done" class:fp-fp--active={filterStatus === 'done'}
            onclick={() => filterStatus = filterStatus === 'done' ? null : 'done'}>Übersetzt</button>
        {/if}
        <button class="fp-fp fp-fp--confirmed" class:fp-fp--active={filterStatus === 'confirmed'}
          onclick={() => filterStatus = filterStatus === 'confirmed' ? null : 'confirmed'}>analysiert</button>
        <button class="fp-fp fp-fp--partial" class:fp-fp--active={filterStatus === 'partial'}
          onclick={() => filterStatus = filterStatus === 'partial' ? null : 'partial'}>transkribiert</button>
        <button class="fp-fp fp-fp--none" class:fp-fp--active={filterStatus === 'none'}
          onclick={() => filterStatus = filterStatus === 'none' ? null : 'none'}>ausstehend</button>
        {#if totalLacuna}
          <button class="fp-fp fp-fp--lacuna" class:fp-fp--active={filterStatus === 'lacuna'}
            onclick={() => filterStatus = filterStatus === 'lacuna' ? null : 'lacuna'}>Lacuna</button>
        {/if}
      </div>

      <div class="fp-quires">
        {#each quires as q, qi (q.q)}
          <div class="fp-row fp-row--{q.hue}">
            <!-- Label column -->
            <div class="fp-label">
              <div class="fp-label-top">
                <span class="fp-roman">{q.roman}</span>
                {#if q.glyph}<span class="fp-glyph">{q.glyph}</span>{/if}
                <span class="fp-section">{q.short}</span>
                <span class="fp-fraction">{q.done + q.confirmed + q.partial}/{q.analyzable}</span>
              </div>
              <div class="fp-qbar">
                <div class="fp-qb-done"      style="width:{q.pctDone}%"     ></div>
                <div class="fp-qb-confirmed" style="width:{q.pctConfirmed}%"></div>
                <div class="fp-qb-partial"   style="width:{q.pctPartial}%"  ></div>
              </div>
            </div>

            <!-- Folio chips -->
            <div class="fp-chips">
              {#each q.pages as p (p.id)}
                <span
                  class="fpc-chip fpc-chip--{p.st}"
                  class:fpc-chip--active={activeChip?.pageId === p.id}
                  class:fpc-chip--filtered={filterStatus !== null && p.st !== filterStatus}
                  title="{p.id} · {p.st === 'lacuna' ? 'nicht erhalten — Folio fehlt im Manuskript' : ST_LABEL[p.st]}"
                  role="button"
                  tabindex={p.st === 'lacuna' ? -1 : 0}
                  onpointerdown={() => { if (p.st !== 'lacuna') startLongPress(folioSlug(p.id)); }}
                  onpointerup={endLongPress}
                  onpointerleave={endLongPress}
                  onpointercancel={endLongPress}
                  onclick={() => { if (p.st !== 'lacuna') handleChipClick(p.id, qi); }}
                  onkeydown={(e) => { if ((e.key === 'Enter' || e.key === ' ') && p.st !== 'lacuna') handleChipClick(p.id, qi); }}
                >{p.label}</span>
              {/each}
            </div>
          </div>

          <!-- ── Accordion detail row ───────────────── -->
          {#if activeChip?.quireIdx === qi}
            {@const tr = trUrl(activeChip.pageId, q.q)}
            {@const ico = folioDetail?.iconographic ?? null}
            {@const slug = folioSlug(activeChip.pageId)}
            {@const m = folioDetail}
            {@const _chipSt = st(activeChip.pageId)}
            {@const _lines = folioDetail?.transcriptions?.lines ?? null}
            {@const _derived = _lines ? deriveTranscribersInfo(_lines) : null}
            {@const _transcribers = _derived?.transcribers ?? []}
            {@const _cds = _derived?.consensusDenominators ?? []}
            <div class="fp-detail fp-detail--{q.hue}" transition:slide={{ duration: 180 }}>

              <!-- Header: id · badge · actions · close -->
              <div class="fp-detail-header">
                <span class="fp-detail-id">{activeChip.pageId}</span>
                <span class="fp-detail-badge fp-detail-badge--{_chipSt}">{ST_LABEL[_chipSt]}</span>
                <div class="fp-detail-header-actions">
                  {#if m?.scanUrl}
                    <a class="fp-detail-btn" href={m.scanUrl} target="_blank" rel="noopener noreferrer">Scan ↗</a>
                  {/if}
                  {#if tr}
                    <a class="fp-detail-btn fp-detail-btn--tr" href={tr} target="_blank" rel="noopener noreferrer">Transkription (Voynich.nu) ↗</a>
                  {/if}
                  <a class="fp-detail-btn fp-detail-btn--md" href="/folio/{slug}" target="_blank" rel="noopener noreferrer">Markdown ↗</a>
                  <button class="fp-detail-close" onclick={() => { activeChip = null; }} aria-label="Schließen">×</button>
                </div>
              </div>

              <!-- 2-column body -->
              <div class="fp-detail-body">

                <!-- Left: metadata fields -->
                <div class="fp-detail-fields" class:fp-detail-fields--narrow={ico}>
                  {#if m?.registerType}
                    <div class="fp-detail-field">
                      <span class="fp-detail-key">Register-Typ</span>
                      <span class="fp-detail-val">{m.registerType}</span>
                    </div>
                  {/if}
                  {#if m?.languageClass}
                    <div class="fp-detail-field">
                      <span class="fp-detail-key">Sprach-Klasse</span>
                      <span class="fp-detail-val">{m.languageClass}</span>
                    </div>
                  {/if}
                  {#if m?.writerHand !== undefined}
                    <div class="fp-detail-field">
                      <span class="fp-detail-key">Schreiber-Hand</span>
                      <span class="fp-detail-val">{m.writerHand}</span>
                    </div>
                  {/if}
                  {#if _transcribers.length}
                    <div class="fp-detail-field">
                      <span class="fp-detail-key">Transkriptoren</span>
                      <span class="fp-detail-val">
                        {#each _transcribers as t (t.siglen.join('-'))}
                          <span class="fp-detail-trow">
                            <span class="fp-detail-siglen">{t.siglen.join(' · ')}</span>
                            <span class="fp-detail-tlabel">{t.label}</span>
                          </span>
                        {/each}
                      </span>
                    </div>
                  {/if}
                  {#if _cds.length}
                    <div class="fp-detail-field">
                      <span class="fp-detail-key">Konsens-Nenner</span>
                      <span class="fp-detail-val">
                        {#each _cds as k (k)}
                          <span class="fp-detail-krow">· {k}</span>
                        {/each}
                      </span>
                    </div>
                  {/if}
                </div>

                <!-- Right: iconographic analysis -->
                {#if ico}
                  <div class="fp-detail-ico">
                    <!-- Rule pills -->
                    {#if ico.rules?.length}
                      <div class="fp-detail-rules">
                        {#each ico.rules as r (r)}
												<a class="fp-detail-rule" href="#rule-{r}" onclick={(e) => e.stopPropagation()}>{r}</a>
                        {/each}
                        <span class="fp-detail-ico-section-label">Ikonographischer Abgleich</span>
                      </div>
                    {/if}

                    {#if ico.illustrationType}
                      <div class="fp-detail-ico-field">
                        <span class="fp-detail-ico-key">Illustrationstyp</span>
                        <span class="fp-detail-ico-val">{ico.illustrationType}</span>
                      </div>
                    {/if}

                    {#if ico.plantMorphology}
                      <div class="fp-detail-ico-field">
                        <span class="fp-detail-ico-key">Pflanzenmorphologie</span>
                        <div class="fp-detail-morph">
                          {#each Object.entries(ico.plantMorphology) as [key, val] (key)}
                            <div class="fp-detail-morph-row">
                              <span class="fp-detail-morph-key">{MORPH_LABELS[key] ?? key.toUpperCase()}</span>
                              <span class="fp-detail-morph-val">{val}</span>
                            </div>
                          {/each}
                        </div>
                      </div>
                    {/if}

                    {#if ico.botanicalIdentification?.length}
                      <div class="fp-detail-ico-field">
                        <span class="fp-detail-ico-key">Botanik (extern)</span>
                        <div class="fp-detail-ico-bullets">
                          {#each ico.botanicalIdentification as item (item)}
                            <span class="fp-detail-ico-bullet">· {item}</span>
                          {/each}
                        </div>
                      </div>
                    {/if}

                    {#if ico.layoutStructure}
                      <div class="fp-detail-ico-field">
                        <span class="fp-detail-ico-key">Layout</span>
                        <span class="fp-detail-ico-val">{ico.layoutStructure}</span>
                      </div>
                    {/if}

                    {#if ico.r60Status}
                      <div class="fp-detail-r60">
                        <span class="fp-detail-r60-label">R60</span>
                        <span class="fp-detail-r60-val">{ico.r60Status}</span>
                      </div>
                    {/if}

                    {#if folioDetail?.textSignals}
                      {@const ts = folioDetail.textSignals}
                      <div class="fp-detail-ts">
                        {#if ts.registerEinordnung}
                          <div class="fp-detail-ico-field">
                            <span class="fp-detail-ico-key">Register</span>
                            <span class="fp-detail-ico-val">{ts.registerEinordnung}</span>
                          </div>
                        {/if}
                        {#if ts.leitterme?.length}
                          <div class="fp-detail-ico-field">
                            <span class="fp-detail-ico-key">Leitterme</span>
                            <div class="fp-detail-ico-bullets">
                              {#each ts.leitterme as item (item)}
                                <span class="fp-detail-ico-bullet">· {item}</span>
                              {/each}
                            </div>
                          </div>
                        {/if}
                        {#if ts.bildTextKohärenz}
                          <div class="fp-detail-ico-field">
                            <span class="fp-detail-ico-key">Bild-Text</span>
                            <span class="fp-detail-ico-val">{ts.bildTextKohärenz}</span>
                          </div>
                        {/if}
                      </div>
                    {/if}
                  </div>
                {/if}

              </div><!-- end fp-detail-body -->
            </div>
          {/if}
        {/each}
      </div>

      <!-- ── LEGEND ──────────────────────────────────── -->
      <div class="fp-legend" style="border-top:none">
        {#if totalDone}<span class="fpl-item"><span class="fpl-swatch done"></span>Übersetzt</span>{/if}
        <span class="fpl-item"><span class="fpl-swatch confirmed"></span>Erstanalyse</span>
        <span class="fpl-item"><span class="fpl-swatch partial"></span>transkribiert</span>
        <span class="fpl-item"><span class="fpl-swatch none"></span>nicht erfasst</span>
        <span class="fpl-item"><span class="fpl-swatch lacuna"></span>nicht erhalten</span>
      </div>
    </div><!-- end fp-body-inner -->
	</div><!-- end fp-body -->
</div>

<style>
	/* ── Container ──────────────────────────────────── */

	.fp {
		border: 1px solid var(--border);
		border-radius: 2px;
		background: linear-gradient(180deg, rgba(255,255,255,.18) 0%, rgba(255,255,255,0) 100%);
		overflow: hidden;
		margin-bottom: 2.8rem;

		@media print { break-inside: avoid; }
	}

	/* ── Header / toggle button ─────────────────────── */

	.fp-head {
		width: 100%;
		text-align: left;
		padding: .85rem 1.1rem .7rem;
		border-bottom: 1px solid var(--border);
		background: color-mix(in srgb, var(--parch-d) 60%, transparent);
		cursor: pointer;
		transition: background .15s;

		&:hover { background: color-mix(in srgb, var(--parch-d) 85%, transparent); }
	}

	.fp-title-row {
		display: flex;
		align-items: baseline;
		justify-content: space-between;
		margin-bottom: .35rem;
	}

	.fp-title-right {
		display: flex;
		align-items: baseline;
		gap: .55rem;
	}

	.fp-chevron {
		font-size: .55rem;
		color: var(--ink-f);
		transition: transform .2s ease;
		line-height: 1;
	}

	.fp-title {
		font-family: var(--font-smallcaps);
		font-size: .72rem;
		letter-spacing: .18em;
		text-transform: uppercase;
		color: var(--ink-l);
	}

	.fp-pct-badge {
		font-family: var(--font-display);
		font-size: 1.15rem;
		color: var(--gold);
		line-height: 1;
	}

	.fp-counts {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: .15rem .3rem;
		margin-bottom: .6rem;
		font-family: var(--font-mono);
		font-size: .6rem;

		& .fpc-sep { color: var(--border); }

		& .fpc {
			& em {
				font-style: normal;
				font-size: .58rem;
				color: var(--ink-f);
				letter-spacing: .04em;
			}

			&.done      { color: var(--gold); font-weight: 700; }
			&.confirmed { color: color-mix(in srgb, var(--gold) 85%, var(--ink-f)); font-weight: 600; }
			&.partial   { color: color-mix(in srgb, var(--gold) 60%, var(--ink-f)); }
			&.none      { color: var(--ink-f); }
			&.lacuna    { color: var(--ink-f); opacity: .5; }
			&.total     { color: var(--ink-l); }
		}
	}

	/* Global progress bar */

	.fp-global-bar {
		position: relative;
		height: 8px;
		background: var(--parch-d);
		border: 1px solid var(--parch-dk);
		border-radius: 1px;
		overflow: visible;
		display: flex;

		& .fpgb-done {
			height: 100%;
			background: linear-gradient(90deg, var(--gold), color-mix(in srgb, var(--gold) 85%, #fff));
			transition: width .4s ease;
			flex-shrink: 0;
		}

		& .fpgb-confirmed {
			height: 100%;
			background: linear-gradient(90deg, color-mix(in srgb, var(--gold) 75%, var(--red)), color-mix(in srgb, var(--gold) 60%, var(--parch-d)));
			transition: width .4s ease;
			flex-shrink: 0;
		}

		& .fpgb-partial {
			height: 100%;
			background: color-mix(in srgb, var(--gold) 38%, var(--parch-d));
			border-right: 1px dashed var(--border);
			transition: width .4s ease;
			flex-shrink: 0;
		}

		& .fpgb-tick {
			position: absolute;
			top: -3px;
			width: 1px;
			height: calc(100% + 6px);
			background: color-mix(in srgb, var(--gold) 80%, transparent);
			pointer-events: none;
		}
	}

	.fp-bar-labels {
		display: flex;
		justify-content: space-between;
		position: relative;
		margin-top: .2rem;
		font-family: var(--font-mono);
		font-size: .5rem;
		color: var(--ink-f);

		& .fp-bar-done-mark {
			position: absolute;
			transform: translateX(-50%);
			color: var(--gold);
			font-size: .5rem;
		}
	}

	/* ── Collapsible body ──────────────────────────── */

	.fp-body {
		display: grid;
		grid-template-rows: 0fr;
		transition: grid-template-rows .28s ease;

		& .fp-body-inner { overflow: hidden; }

		&.open { grid-template-rows: 1fr; }
	}

	/* ── Filter bar ─────────────────────────────────── */

	.fp-filters {
		display: flex;
		flex-wrap: wrap;
		gap: .25rem .3rem;
		padding: .45rem .7rem .4rem .55rem;
		border-bottom: 1px solid color-mix(in srgb, var(--parch-dk) 60%, transparent);
		background: color-mix(in srgb, var(--parch-d) 30%, transparent);
	}

	.fp-fp {
		font-family: var(--font-mono);
		font-size: .52rem;
		padding: 1px 6px;
		border-radius: 1px;
		border: 1px solid color-mix(in srgb, var(--border) 70%, transparent);
		background: transparent;
		color: var(--ink-f);
		cursor: pointer;
		transition: background .1s, color .1s, border-color .1s;
		line-height: 1.6;

		&:hover { background: color-mix(in srgb, var(--parch-d) 80%, transparent); color: var(--ink-l); }

		&.fp-fp--active {
			border-color: color-mix(in srgb, var(--border) 100%, transparent);
			background: color-mix(in srgb, var(--parch-d) 90%, transparent);
			color: var(--ink);
		}

		&.fp-fp--all.fp-fp--active     { border-color: var(--ink-f); }

		&.fp-fp--done.fp-fp--active {
			border-color: color-mix(in srgb, var(--gold) 80%, transparent);
			background: color-mix(in srgb, var(--gold) 18%, var(--parch));
			color: var(--ink);
		}

		&.fp-fp--confirmed.fp-fp--active {
			border-color: color-mix(in srgb, var(--gold) 55%, transparent);
			background: color-mix(in srgb, var(--gold) 10%, var(--parch));
			color: var(--ink);
		}

		&.fp-fp--partial.fp-fp--active {
			border-color: var(--parch-dk);
			background: color-mix(in srgb, var(--gold) 6%, var(--parch-d));
			color: var(--ink-l);
		}

		&.fp-fp--lacuna.fp-fp--active {
			border-style: dashed;
			border-color: var(--border);
			color: var(--ink-f);
		}
	}

	/* ── Quire grid ─────────────────────────────────── */

	.fp-quires {
		display: flex;
		flex-direction: column;
	}

	.fp-row {
		display: flex;
		align-items: flex-start;
		gap: .6rem;
		padding: .38rem .7rem .38rem .55rem;
		border-bottom: 1px solid color-mix(in srgb, var(--parch-dk) 60%, transparent);
		border-left: 2px solid transparent;
		transition: background .12s;

		&:last-child { border-bottom: none; }

		&:hover { background: rgba(255,255,255,.25); }

		&.fp-row--green  { border-left-color: color-mix(in srgb, var(--green) 45%, transparent); }
		&.fp-row--blue   { border-left-color: color-mix(in srgb, var(--blue)  45%, transparent); }
		&.fp-row--gold   { border-left-color: color-mix(in srgb, var(--gold)  45%, transparent); }
		&.fp-row--red    { border-left-color: color-mix(in srgb, var(--red)   45%, transparent); }
	}

	.fp-label {
		flex: 0 0 148px;
		min-width: 148px;
	}

	.fp-label-top {
		display: flex;
		align-items: baseline;
		gap: .3rem;
		margin-bottom: .22rem;
	}

	.fp-roman {
		font-family: var(--font-display);
		font-size: .68rem;
		color: var(--ink-l);
		min-width: 1.5ch;
		flex-shrink: 0;
	}

	.fp-glyph {
		font-size: .62rem;
		color: var(--ink-f);
		flex-shrink: 0;
		line-height: 1;
		opacity: .75;
	}

	.fp-section {
		font-family: var(--font-smallcaps);
		font-size: .6rem;
		letter-spacing: .05em;
		color: var(--ink-f);
		flex: 1;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.fp-fraction {
		font-family: var(--font-mono);
		font-size: .52rem;
		color: var(--ink-f);
		flex-shrink: 0;
		white-space: nowrap;
	}

	.fp-qbar {
		height: 3px;
		background: var(--parch-d);
		border: 1px solid var(--parch-dk);
		border-radius: 1px;
		display: flex;
		overflow: hidden;

		& .fp-qb-done {
			height: 100%;
			background: var(--gold);
			flex-shrink: 0;
		}

		& .fp-qb-confirmed {
			height: 100%;
			background: color-mix(in srgb, var(--gold) 65%, var(--parch-d));
			flex-shrink: 0;
		}

		& .fp-qb-partial {
			height: 100%;
			background: color-mix(in srgb, var(--gold) 38%, var(--parch-d));
			flex-shrink: 0;
		}
	}

	/* ── Folio chips ─────────────────────────────────── */

	.fp-chips {
		flex: 1;
		display: flex;
		flex-wrap: wrap;
		gap: 2px 2px;
		align-content: flex-start;
	}

	.fpc-chip {
		display: inline-block;
		padding: 1px 4px;
		font-family: var(--font-mono);
		font-size: .5rem;
		line-height: 1.6;
		border-radius: 1px;
		cursor: pointer;
		transition: transform .1s, box-shadow .1s, opacity .15s;
		white-space: nowrap;
		border: 1px solid transparent;

		&:hover, &.fpc-chip--active { transform: translateY(-1px); z-index: 1; }

		&.fpc-chip--filtered { opacity: .1; pointer-events: none; }

		&.fpc-chip--done {
			background: color-mix(in srgb, var(--gold) 50%, var(--parch));
			border-color: color-mix(in srgb, var(--gold) 80%, transparent);
			color: var(--ink);
			font-weight: 700;

			&:hover, &.fpc-chip--active {
				box-shadow: 0 2px 8px color-mix(in srgb, var(--gold) 45%, transparent);
			}
		}

		&.fpc-chip--confirmed {
			background: color-mix(in srgb, var(--gold) 28%, var(--parch));
			border-color: color-mix(in srgb, var(--gold) 55%, transparent);
			color: var(--ink);
			font-weight: 600;

			&:hover, &.fpc-chip--active {
				box-shadow: 0 2px 6px color-mix(in srgb, var(--gold) 30%, transparent);
			}
		}

		&.fpc-chip--partial {
			background: color-mix(in srgb, var(--gold) 10%, var(--parch-d));
			border-color: var(--parch-dk);
			border-style: dashed;
			color: var(--ink-l);

			&:hover, &.fpc-chip--active {
				box-shadow: 0 1px 4px rgba(0,0,0,.08);
			}
		}

		&.fpc-chip--none {
			background: var(--parch-d);
			border-color: color-mix(in srgb, var(--parch-dk) 50%, transparent);
			color: var(--ink-f);
			opacity: .45;
		}

		&.fpc-chip--lacuna {
			background: var(--parch-d);
			border-color: color-mix(in srgb, var(--border) 35%, transparent);
			border-style: dashed;
			color: var(--ink-f);
			opacity: .3;
			text-decoration: line-through;
			cursor: default;
		}
	}

	/* ── Legend ─────────────────────────────────────── */

	.fp-legend {
		display: flex;
		flex-wrap: wrap;
		gap: .3rem 1.1rem;
		padding: .55rem 1rem;
		border-top: 1px solid var(--parch-dk);
		background: color-mix(in srgb, var(--parch-d) 40%, transparent);
	}

	.fpl-item {
		display: flex;
		align-items: center;
		gap: .35rem;
		font-family: var(--font-smallcaps);
		font-size: .6rem;
		letter-spacing: .06em;
		color: var(--ink-f);
	}

	.fpl-swatch {
		width: 12px;
		height: 8px;
		border-radius: 1px;
		flex-shrink: 0;

		&.done      { background: color-mix(in srgb, var(--gold) 50%, var(--parch)); border: 1px solid color-mix(in srgb, var(--gold) 80%, transparent); }
		&.confirmed { background: color-mix(in srgb, var(--gold) 28%, var(--parch)); border: 1px solid color-mix(in srgb, var(--gold) 55%, transparent); }
		&.partial   { background: color-mix(in srgb, var(--gold) 10%, var(--parch-d)); border: 1px dashed var(--parch-dk); }
		&.none      { background: var(--parch-d); border: 1px solid color-mix(in srgb, var(--parch-dk) 50%, transparent); opacity: .45; }
		&.lacuna    { background: var(--parch-d); border: 1px dashed color-mix(in srgb, var(--border) 35%, transparent); opacity: .3; }
	}

	/* ── Folio detail row ────────────────────────────── */

	@media print { .fp-detail { display: none !important; } }

	.fp-detail {
		border-bottom: 1px solid color-mix(in srgb, var(--parch-dk) 60%, transparent);
		border-left: 2px solid transparent;
		background: color-mix(in srgb, var(--parch-d) 55%, transparent);
		padding: .5rem .7rem .6rem calc(.55rem + 2px);

		&.fp-detail--green { border-left-color: color-mix(in srgb, var(--green) 65%, transparent); }
		&.fp-detail--blue  { border-left-color: color-mix(in srgb, var(--blue)  65%, transparent); }
		&.fp-detail--gold  { border-left-color: color-mix(in srgb, var(--gold)  65%, transparent); }
		&.fp-detail--red   { border-left-color: color-mix(in srgb, var(--red)   65%, transparent); }
	}

	/* Detail header */

	.fp-detail-header {
		display: flex;
		align-items: center;
		gap: .45rem;
		margin-bottom: .4rem;
		padding-bottom: .3rem;
		border-bottom: 1px solid color-mix(in srgb, var(--border) 50%, transparent);
	}

	.fp-detail-id {
		font-family: var(--font-display);
		font-size: .82rem;
		color: var(--ink);
		letter-spacing: .04em;
	}

	.fp-detail-badge {
		font-family: var(--font-mono);
		font-size: .5rem;
		padding: 1px 5px;
		border-radius: 1px;
		flex-shrink: 0;

		&.fp-detail-badge--done      { background: color-mix(in srgb, var(--gold) 40%, var(--parch)); border: 1px solid color-mix(in srgb, var(--gold) 70%, transparent); color: var(--ink); font-weight: 600; }
		&.fp-detail-badge--confirmed { background: color-mix(in srgb, var(--gold) 22%, var(--parch)); border: 1px solid color-mix(in srgb, var(--gold) 50%, transparent); color: var(--ink); }
		&.fp-detail-badge--partial   { background: color-mix(in srgb, var(--gold) 8%, var(--parch-d)); border: 1px dashed var(--parch-dk); color: var(--ink-l); }
		&.fp-detail-badge--none      { background: var(--parch-d); border: 1px solid var(--parch-dk); color: var(--ink-f); }
	}

	.fp-detail-header-actions {
		display: flex;
		align-items: center;
		gap: .3rem;
		margin-left: auto;
		flex-shrink: 0;
	}

	.fp-detail-btn {
		font-family: var(--font-mono);
		font-size: .5rem;
		padding: 1px 7px;
		border-radius: 1px;
		text-decoration: none;
		transition: background .1s, color .1s;
		border: 1px solid color-mix(in srgb, var(--gold) 55%, transparent);
		background: color-mix(in srgb, var(--gold) 14%, var(--parch));
		color: var(--ink-l);

		&:hover { background: color-mix(in srgb, var(--gold) 28%, var(--parch)); color: var(--ink); }

		&.fp-detail-btn--tr {
			border-color: color-mix(in srgb, var(--border) 80%, transparent);
			background: color-mix(in srgb, var(--parch-d) 80%, var(--parch));

			&:hover { background: var(--parch-d); color: var(--ink); }
		}

		&.fp-detail-btn--md {
			border-color: color-mix(in srgb, var(--ink-f) 30%, transparent);
			background: transparent;
			color: var(--ink-f);
			font-style: italic;

			&:hover { background: color-mix(in srgb, var(--ink-f) 8%, transparent); color: var(--ink); }
		}
	}

	.fp-detail-close {
		font-size: .78rem;
		color: var(--ink-f);
		line-height: 1;
		padding: 0 .2rem;
		border-radius: 1px;
		cursor: pointer;
		background: none;
		border: none;
		transition: color .1s;
		flex-shrink: 0;

		&:hover { color: var(--ink); }
	}

	/* Detail 2-column body */

	.fp-detail-body {
		display: flex;
		gap: 1.1rem;
		align-items: flex-start;
	}

	/* Left: metadata fields */

	.fp-detail-fields {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: .5rem;

		&.fp-detail-fields--narrow {
			flex: 0 0 min(420px, 100%);
			max-width: 420px;
		}
	}

	.fp-detail-key {
		font-family: var(--font-smallcaps);
		font-size: .64rem;
		letter-spacing: .1em;
		text-transform: uppercase;
		color: var(--ink-f);
		flex: 0 0 7.5rem;
		padding-top: .08rem;
		white-space: nowrap;
	}

	.fp-detail-val {
		font-family: var(--font-mono);
		font-size: .72rem;
		color: var(--ink-l);
		line-height: 1.45;
		display: flex;
		flex-direction: column;
		gap: .1rem;
	}

	.fp-detail-trow {
		display: flex;
		gap: .45rem;
		align-items: baseline;
	}

	.fp-detail-siglen {
		font-family: var(--font-mono);
		font-size: .72rem;
		color: var(--ink);
		font-weight: 600;
		flex-shrink: 0;
		min-width: 5ch;
	}

	.fp-detail-tlabel {
		font-family: var(--font-mono);
		font-size: .72rem;
		color: var(--ink-f);
		line-height: 1.35;
    word-break: break-word;
	}

	.fp-detail-krow {
		font-family: var(--font-mono);
		font-size: .72rem;
		color: var(--ink-l);
		line-height: 1.6;
	}

	/* Right: iconographic section */

	.fp-detail-ico {
		flex: 1;
		min-width: 0;
		display: flex;
		flex-direction: column;
		gap: .5rem;
		padding-left: 1rem;
		border-left: 1px solid color-mix(in srgb, var(--border) 50%, transparent);
	}

	.fp-detail-rules {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: .2rem .3rem;
		margin-bottom: .05rem;
	}

	.fp-detail-rule {
		font-family: var(--font-mono);
		font-size: .64rem;
		padding: 0 4px;
		line-height: 1.6;
		border: 1px solid color-mix(in srgb, var(--gold) 55%, transparent);
		border-radius: 1px;
		color: var(--gold);
		background: color-mix(in srgb, var(--gold) 7%, var(--parch));
		font-weight: 600;
		text-decoration: none;
	}

	.fp-detail-ico-section-label {
		font-family: var(--font-smallcaps);
		font-size: .72rem;
		letter-spacing: .08em;
		color: var(--ink-f);
		margin-left: .15rem;
	}

	.fp-detail-ico-field {
		display: flex;
		flex-direction: column;
		gap: .1rem;

		& .fp-detail-ico-key {
			font-family: var(--font-mono);
			font-size: .64rem;
			letter-spacing: .1em;
			text-transform: uppercase;
			color: var(--ink-f);
		}

		& .fp-detail-ico-val {
			font-family: var(--font-mono);
			font-size: .72rem;
			color: var(--ink-l);
			line-height: 1.4;
		}

		& .fp-detail-ico-bullets {
			display: flex;
			flex-direction: column;
			gap: .08rem;

			& .fp-detail-ico-bullet {
				font-family: var(--font-mono);
				font-size: .72rem;
				color: var(--ink-l);
				line-height: 1.5;
			}
		}

		& .fp-detail-morph {
			display: flex;
			flex-direction: column;
			gap: .5rem;

			& .fp-detail-morph-row {
				display: flex;
				gap: .5rem;
				align-items: flex-start;

				& .fp-detail-morph-key {
					font-family: var(--font-mono);
					font-size: .72rem;
					color: var(--ink);
					font-weight: 700;
					letter-spacing: .04em;
					flex: 0 0 6rem;
					flex-shrink: 0;
					padding-top: .04rem;
				}

				& .fp-detail-morph-val {
					font-family: var(--font-mono);
					font-size: .72rem;
					color: var(--ink-l);
					line-height: 1.4;
				}
			}
		}
	}

	.fp-detail-ts {
		display: flex;
		flex-direction: column;
		gap: .5rem;
		padding-top: .3rem;
		border-top: 1px solid color-mix(in srgb, var(--border) 40%, transparent);
	}

	.fp-detail-r60 {
		display: flex;
		align-items: baseline;
		gap: .4rem;
		margin-top: .05rem;
		padding-top: .22rem;
		border-top: 1px solid color-mix(in srgb, var(--border) 40%, transparent);
	}

	.fp-detail-r60-label {
		font-family: var(--font-mono);
		font-size: .72rem;
		color: var(--gold);
		font-weight: 700;
		letter-spacing: .06em;
		flex-shrink: 0;
	}

	.fp-detail-r60-val {
		font-family: var(--font-mono);
		font-size: .64rem;
		color: var(--ink-f);
		line-height: 1.4;
	}

	/* ── Mobile ─────────────────────────────────────── */

	@media (max-width: 680px) {
		.fp-label {
			flex: 0 0 110px;
			min-width: 110px;
		}

		.fp-section { display: none; }

		.fp-detail-body {
			flex-direction: column;
			gap: .6rem;
		}

		.fp-detail-fields,
		.fp-detail-fields.fp-detail-fields--narrow {
			flex: none;
			max-width: 100%;
		}

		.fp-detail-ico {
			padding-left: 0;
			border-left: none;
			border-top: 1px solid color-mix(in srgb, var(--border) 50%, transparent);
			padding-top: .5rem;
		}

		.fp-detail-key { flex: 0 0 5.5rem; }
	}
</style>
