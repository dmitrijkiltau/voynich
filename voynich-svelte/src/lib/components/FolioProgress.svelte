<script>
	import { FOLIO_PAGES, FOLIO_DATA } from '$lib';

	let open = $state(false);

	/** @param {string} p */
	function entry(p) { return FOLIO_DATA[p] ?? null; }
	/** @param {string} p */
	function st(p) { return entry(p)?.status ?? 'none'; }

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

	const ROMAN = ['I','II','III','IV','V','VI','VII','VIII','IX','X',
	               'XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX'];

	const quires = FOLIO_PAGES.map((q, i) => {
		const pages     = q.pages.map(p => ({ id: p, label: p.slice(1), st: st(p), data: entry(p) }));
		const done      = pages.filter(p => p.st === 'done').length;
		const confirmed = pages.filter(p => p.st === 'confirmed').length;
		const partial   = pages.filter(p => p.st === 'partial').length;
		const total     = pages.length;
		return {
			...q,
			short: SECTION_ABBR[q.q] ?? '',
			hue:   SECTION_HUE[q.q]  ?? 'none',
			roman: ROMAN[i],
			pages, done, confirmed, partial, total,
			pctDone:      (done      / total) * 100,
			pctConfirmed: (confirmed / total) * 100,
			pctPartial:   (partial   / total) * 100,
		};
	});

	const totalPages     = quires.reduce((s, q) => s + q.total,     0);
	const totalDone      = quires.reduce((s, q) => s + q.done,      0);
	const totalConfirmed = quires.reduce((s, q) => s + q.confirmed, 0);
	const totalPartial   = quires.reduce((s, q) => s + q.partial,   0);
	const totalNone      = totalPages - totalDone - totalConfirmed - totalPartial;

	const pctDone      = (totalDone      / totalPages) * 100;
	const pctConfirmed = (totalConfirmed / totalPages) * 100;
	const pctPartial   = (totalPartial   / totalPages) * 100;
	const pctAnalyzed  = ((totalDone + totalConfirmed + totalPartial) / totalPages) * 100;

	// ── Popover ────────────────────────────────────────────────────────────────

	/**
	 * @typedef {{ id: string, x: number, y: number, above: boolean,
	 *             data: import('../folio-data.js').FolioEntry | null }} PopState
	 */
	/** @type {PopState | null} */
	let pop = $state(null);

	let _hideTimer = /** @type {ReturnType<typeof setTimeout> | null} */ (null);
	function _cancelHide() { if (_hideTimer) { clearTimeout(_hideTimer); _hideTimer = null; } }
	function _scheduleHide() { _hideTimer = setTimeout(() => { pop = null; }, 120); }

	const POP_W = 244;

	/** @param {MouseEvent} e @param {{ id: string, data: import('../folio-data.js').FolioEntry | null }} p */
	function showPop(e, p) {
		_cancelHide();
		const rect = /** @type {Element} */ (e.currentTarget).getBoundingClientRect();
		const x    = Math.max(8, Math.min(rect.left, window.innerWidth - POP_W - 8));
		const spaceBelow = window.innerHeight - rect.bottom;
		const above = spaceBelow < 200;
		pop = { id: p.id, x, y: above ? rect.top : rect.bottom + 4, above, data: p.data };
	}

	/** @param {MouseEvent} e @param {{ id: string, data: import('../folio-data.js').FolioEntry | null }} p */
	function togglePop(e, p) {
		e.stopPropagation();
		if (pop?.id === p.id) { pop = null; _cancelHide(); }
		else showPop(e, p);
	}

	const ST_LABEL = /** @type {Record<string,string>} */ ({
		done: 'Vollübersetzung', confirmed: 'analysiert', partial: 'Anker / Teilanalyse', none: 'nicht analysiert',
	});
</script>

<svelte:window onclick={(e) => {
	const t = /** @type {Element} */ (e.target);
	if (!t.closest('[data-fcp-pop]') && !t.closest('[data-fcp-chip]')) { pop = null; _cancelHide(); }
}} />

<div class="fp">
	<!-- ── HEADER (toggle) ─────────────────────────── -->
	<button class="fp-head" onclick={() => open = !open} aria-expanded={open} aria-controls="fp-body">
		<div class="fp-title-row">
			<span class="fp-title">Dekodierungsfortschritt</span>
			<div class="fp-title-right">
				<span class="fp-pct-badge">{pctAnalyzed.toFixed(1)}&thinsp;%</span>
				<span class="fp-chevron" class:open>{open ? '▲' : '▼'}</span>
			</div>
		</div>
		<div class="fp-counts">
			<span class="fpc done">{totalDone}&nbsp;<em>übersetzt</em></span>
			<span class="fpc-sep">·</span>
			<span class="fpc confirmed">{totalConfirmed}&nbsp;<em>analysiert</em></span>
			<span class="fpc-sep">·</span>
			<span class="fpc partial">{totalPartial}&nbsp;<em>Anker</em></span>
			<span class="fpc-sep">·</span>
			<span class="fpc none">{totalNone}&nbsp;<em>ausstehend</em></span>
			<span class="fpc-sep">·</span>
			<span class="fpc total">{totalPages}&nbsp;<em>Seiten</em></span>
		</div>

		<!-- Segmented global progress bar -->
		<div class="fp-global-bar" title="Gesamt: {pctAnalyzed.toFixed(1)} % analysiert">
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
      <div class="fp-quires">
        {#each quires as q}
          <div class="fp-row fp-row--{q.hue}">
            <!-- Label column -->
            <div class="fp-label">
              <div class="fp-label-top">
                <span class="fp-roman">{q.roman}</span>
                <span class="fp-section">{q.short}</span>
                <span class="fp-fraction">{q.done + q.confirmed + q.partial}/{q.total}</span>
              </div>
              <!-- Mini quire bar -->
              <div class="fp-qbar">
                <div class="fp-qb-done"      style="width:{q.pctDone}%"     ></div>
                <div class="fp-qb-confirmed" style="width:{q.pctConfirmed}%"></div>
                <div class="fp-qb-partial"   style="width:{q.pctPartial}%"  ></div>
              </div>
            </div>

            <!-- Folio chips -->
            <div class="fp-chips">
              {#each q.pages as p}
                <span
                  class="fpc-chip fpc-chip--{p.st}"
                  class:fpc-chip--active={pop?.id === p.id}
                  title="{p.id} · {ST_LABEL[p.st]}"
                  role="button"
                  tabindex="0"
                  data-fcp-chip
                  onmouseenter={(e) => showPop(e, p)}
                  onmouseleave={_scheduleHide}
                  onclick={(e) => togglePop(e, p)}
                  onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') togglePop(/** @type {any} */ (e), p); }}
                >{p.label}</span>
              {/each}
            </div>
          </div>
        {/each}
      </div>

      <!-- ── LEGEND ──────────────────────────────────── -->
      <div class="fp-legend" style="border-top:none">
        <span class="fpl-item">
          <span class="fpl-swatch done"></span>
          Vollübersetzung
        </span>
        <span class="fpl-item">
          <span class="fpl-swatch confirmed"></span>
          analysiert
        </span>
        <span class="fpl-item">
          <span class="fpl-swatch partial"></span>
          Anker / Teilanalyse
        </span>
        <span class="fpl-item">
          <span class="fpl-swatch none"></span>
          nicht analysiert
        </span>
      </div><!-- end fp-legend -->
    </div><!-- end fp-body-inner -->
	</div><!-- end fp-body -->

	<!-- ── FOLIO POPOVER (position:fixed, escapes overflow:hidden) ── -->
	{#if pop}
		{@const d = pop.data}
		<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
		<div
			class="fcp-pop"
			class:fcp-pop--above={pop.above}
			style="left:{pop.x}px; {pop.above ? `bottom:${window.innerHeight - pop.y}px` : `top:${pop.y}px`}"
			data-fcp-pop
			onmouseenter={_cancelHide}
			onmouseleave={_scheduleHide}
			role="tooltip"
		>
			<div class="fcp-pop-header">
				<span class="fcp-pop-id">{pop.id}</span>
				<span class="fcp-pop-badge fcp-pop-badge--{d?.status ?? 'none'}">{ST_LABEL[d?.status ?? 'none']}</span>
			</div>

			{#if d?.registerType}
				<div class="fcp-pop-field">
					<div class="fcp-pop-key">Register-Typ</div>
					<div class="fcp-pop-val">{d.registerType}</div>
				</div>
			{/if}

			{#if d?.languageClass}
				<div class="fcp-pop-field">
					<div class="fcp-pop-key">Sprach-Klasse</div>
					<div class="fcp-pop-val">{d.languageClass}</div>
				</div>
			{/if}

			{#if d?.writerHand !== undefined}
				<div class="fcp-pop-field">
					<div class="fcp-pop-key">Schreiber-Hand</div>
					<div class="fcp-pop-val">{d.writerHand}</div>
				</div>
			{/if}

			{#if d?.transcribers?.length}
				<div class="fcp-pop-field">
					<div class="fcp-pop-key">Transkriptoren</div>
					{#each d.transcribers as t}
						<div class="fcp-pop-trow">
							<span class="fcp-pop-siglen">{t.siglen.join(' · ')}</span>
							<span class="fcp-pop-tlabel">{t.label}</span>
						</div>
					{/each}
				</div>
			{/if}

			{#if d?.consensusDenominators?.length}
				<div class="fcp-pop-field">
					<div class="fcp-pop-key">Konsens-Nenner</div>
					{#each d.consensusDenominators as k}
						<div class="fcp-pop-krow">· {k}</div>
					{/each}
				</div>
			{/if}
		</div>
	{/if}
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

		/* Section accent colours */
		&.fp-row--green  { border-left-color: color-mix(in srgb, var(--green) 45%, transparent); }
		&.fp-row--blue   { border-left-color: color-mix(in srgb, var(--blue)  45%, transparent); }
		&.fp-row--gold   { border-left-color: color-mix(in srgb, var(--gold)  45%, transparent); }
		&.fp-row--red    { border-left-color: color-mix(in srgb, var(--red)   45%, transparent); }
	}

	/* Label column */

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

	/* Mini quire bar */

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
		cursor: default;
		transition: transform .1s, box-shadow .1s;
		white-space: nowrap;
		border: 1px solid transparent;

		&:hover, &.fpc-chip--active { transform: translateY(-1px); z-index: 1; }

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

		&.done    {
			background: color-mix(in srgb, var(--gold) 50%, var(--parch));
			border: 1px solid color-mix(in srgb, var(--gold) 80%, transparent);
		}
		&.confirmed {
			background: color-mix(in srgb, var(--gold) 28%, var(--parch));
			border: 1px solid color-mix(in srgb, var(--gold) 55%, transparent);
		}
		&.partial {
			background: color-mix(in srgb, var(--gold) 10%, var(--parch-d));
			border: 1px dashed var(--parch-dk);
		}
		&.none    {
			background: var(--parch-d);
			border: 1px solid color-mix(in srgb, var(--parch-dk) 50%, transparent);
			opacity: .45;
		}
	}

	/* ── Folio popover ──────────────────────────────── */

	@media print { .fcp-pop { display: none !important; } }

	.fcp-pop {
		position: fixed;
		z-index: 200;
		width: 244px;
		background: color-mix(in srgb, var(--parch) 97%, transparent);
		border: 1px solid var(--border);
		border-radius: 2px;
		box-shadow: 0 4px 18px rgba(0,0,0,.14), 0 1px 4px rgba(0,0,0,.08);
		padding: .5rem .65rem .55rem;
		pointer-events: auto;

		/* arrow cue — downward by default, flipped when above */
		&::before {
			content: '';
			position: absolute;
			left: 10px;
			top: -5px;
			width: 8px;
			height: 8px;
			background: color-mix(in srgb, var(--parch) 97%, transparent);
			border-left: 1px solid var(--border);
			border-top: 1px solid var(--border);
			transform: rotate(45deg);
		}

		&.fcp-pop--above::before {
			top: auto;
			bottom: -5px;
			transform: rotate(225deg);
		}
	}

	.fcp-pop-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: .5rem;
		margin-bottom: .4rem;
		padding-bottom: .32rem;
		border-bottom: 1px solid color-mix(in srgb, var(--border) 70%, transparent);
	}

	.fcp-pop-id {
		font-family: var(--font-display);
		font-size: .82rem;
		color: var(--ink);
		letter-spacing: .04em;
	}

	.fcp-pop-badge {
		font-family: var(--font-mono);
		font-size: .5rem;
		padding: 1px 5px;
		border-radius: 1px;
		flex-shrink: 0;

		&.fcp-pop-badge--done {
			background: color-mix(in srgb, var(--gold) 40%, var(--parch));
			border: 1px solid color-mix(in srgb, var(--gold) 70%, transparent);
			color: var(--ink);
			font-weight: 600;
		}
		&.fcp-pop-badge--confirmed {
			background: color-mix(in srgb, var(--gold) 22%, var(--parch));
			border: 1px solid color-mix(in srgb, var(--gold) 50%, transparent);
			color: var(--ink);
		}
		&.fcp-pop-badge--partial {
			background: color-mix(in srgb, var(--gold) 8%, var(--parch-d));
			border: 1px dashed var(--parch-dk);
			color: var(--ink-l);
		}
		&.fcp-pop-badge--none {
			background: var(--parch-d);
			border: 1px solid var(--parch-dk);
			color: var(--ink-f);
		}
	}

	.fcp-pop-field {
		margin-bottom: .32rem;

		&:last-child { margin-bottom: 0; }
	}

	.fcp-pop-key {
		font-family: var(--font-smallcaps);
		font-size: .5rem;
		letter-spacing: .1em;
		text-transform: uppercase;
		color: var(--ink-f);
		margin-bottom: .12rem;
	}

	.fcp-pop-val {
		font-family: var(--font-smallcaps);
		font-size: .6rem;
		color: var(--ink-l);
		line-height: 1.45;
	}

	.fcp-pop-trow {
		display: flex;
		gap: .45rem;
		align-items: baseline;
		margin-bottom: .1rem;

		&:last-child { margin-bottom: 0; }
	}

	.fcp-pop-siglen {
		font-family: var(--font-mono);
		font-size: .6rem;
		color: var(--ink);
		font-weight: 600;
		flex-shrink: 0;
		min-width: 5.5ch;
	}

	.fcp-pop-tlabel {
		font-family: var(--font-smallcaps);
		font-size: .55rem;
		color: var(--ink-f);
		line-height: 1.35;
	}

	.fcp-pop-krow {
		font-family: var(--font-mono);
		font-size: .55rem;
		color: var(--ink-l);
		line-height: 1.6;
	}

	/* ── Mobile ─────────────────────────────────────── */

	@media (max-width: 680px) {
		.fp-label {
			flex: 0 0 110px;
			min-width: 110px;
		}

		.fp-section { display: none; }
	}
</style>
