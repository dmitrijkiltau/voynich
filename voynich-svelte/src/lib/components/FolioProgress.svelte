<script>
	import { FOLIO_PAGES, FOLIO_STATUS } from '$lib';

	let open = $state(false);

	/** @param {string} p */
	function st(p) { return /** @type {Record<string,string>} */ (FOLIO_STATUS)[p] ?? 'none'; }

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

	// Section accent colours (left-border visual cue)
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
		const pages   = q.pages.map(p => ({ id: p, label: p.slice(1), st: st(p) }));
		const done    = pages.filter(p => p.st === 'done').length;
		const partial = pages.filter(p => p.st === 'partial').length;
		const total   = pages.length;
		return {
			...q,
			short: SECTION_ABBR[q.q] ?? '',
			hue:   SECTION_HUE[q.q]  ?? 'none',
			roman: ROMAN[i],
			pages, done, partial, total,
			pctDone:    (done    / total) * 100,
			pctPartial: (partial / total) * 100,
		};
	});

	const totalPages   = quires.reduce((s, q) => s + q.total,   0);
	const totalDone    = quires.reduce((s, q) => s + q.done,    0);
	const totalPartial = quires.reduce((s, q) => s + q.partial, 0);
	const totalNone    = totalPages - totalDone - totalPartial;

	const pctDone     = (totalDone    / totalPages) * 100;
	const pctPartial  = (totalPartial / totalPages) * 100;
	const pctAnalyzed = ((totalDone + totalPartial) / totalPages) * 100;
</script>

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
			<span class="fpc done">{totalDone}&nbsp;<em>analysiert</em></span>
			<span class="fpc-sep">·</span>
			<span class="fpc partial">{totalPartial}&nbsp;<em>Anker</em></span>
			<span class="fpc-sep">·</span>
			<span class="fpc none">{totalNone}&nbsp;<em>ausstehend</em></span>
			<span class="fpc-sep">·</span>
			<span class="fpc total">{totalPages}&nbsp;<em>Seiten</em></span>
		</div>

		<!-- Segmented global progress bar -->
		<div class="fp-global-bar" title="Gesamt: {pctAnalyzed.toFixed(1)} % analysiert">
			<div class="fpgb-done"    style="width:{pctDone}%"   ></div>
			<div class="fpgb-partial" style="width:{pctPartial}%"></div>
			<div class="fpgb-tick" style="left:{pctDone}%"       ></div>
		</div>
		<div class="fp-bar-labels">
			<span>0 %</span>
			<span class="fp-bar-done-mark" style="left:{pctDone}%">{pctDone.toFixed(0)} %</span>
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
                <span class="fp-fraction">{q.done + q.partial}/{q.total}</span>
              </div>
              <!-- Mini quire bar -->
              <div class="fp-qbar">
                <div class="fp-qb-done"    style="width:{q.pctDone}%"   ></div>
                <div class="fp-qb-partial" style="width:{q.pctPartial}%"></div>
              </div>
            </div>

            <!-- Folio chips -->
            <div class="fp-chips">
              {#each q.pages as p}
                <span
                  class="fpc-chip fpc-chip--{p.st}"
                  title="{p.id} · {p.st === 'done' ? 'analysiert' : p.st === 'partial' ? 'Teilanalyse / Anker bekannt' : 'nicht analysiert'}"
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

			&.done    { color: var(--gold); font-weight: 600; }
			&.partial { color: color-mix(in srgb, var(--gold) 70%, var(--ink-f)); }
			&.none    { color: var(--ink-f); }
			&.total   { color: var(--ink-l); }
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
			background: linear-gradient(90deg, var(--gold), color-mix(in srgb, var(--gold) 75%, var(--red)));
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

		&:hover { transform: translateY(-1px); z-index: 1; }

		&.fpc-chip--done {
			background: color-mix(in srgb, var(--gold) 28%, var(--parch));
			border-color: color-mix(in srgb, var(--gold) 55%, transparent);
			color: var(--ink);
			font-weight: 600;

			&:hover {
				box-shadow: 0 2px 6px color-mix(in srgb, var(--gold) 30%, transparent);
			}
		}

		&.fpc-chip--partial {
			background: color-mix(in srgb, var(--gold) 10%, var(--parch-d));
			border-color: var(--parch-dk);
			border-style: dashed;
			color: var(--ink-l);

			&:hover {
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

	/* ── Mobile ─────────────────────────────────────── */

	@media (max-width: 680px) {
		.fp-label {
			flex: 0 0 110px;
			min-width: 110px;
		}

		.fp-section { display: none; }
	}
</style>
