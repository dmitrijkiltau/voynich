<script>
	import { STATS, STEM_WORDS, LEXICON_DERIVED } from '$lib';
	import { getLexiconConfidence, getLexiconRules } from '$lib/lexicon-data.js';
	import { GRAMMAR_PREFIXES, GRAMMAR_SUFFIXES } from '$lib/grammar-data.js';
	import { CONTENT } from '$lib/content.js';

	let { onInsert, filter = $bindable('') } = $props();

	const C = CONTENT.lexicon;

	const TABLES = [
		{
			id: 'stems',
			title: C.tables.stems,
			rows: STEM_WORDS.filter((/** @type {any} */ e) => !e.candidate),
			sortCols: [
				{ key: 'eva',             label: C.columns.eva },
				{ key: 'layer',           label: C.columns.layer },
				{ key: 'confidenceStars', label: C.columns.confidenceStars },
			],
		},
		{
			id: 'stems-candidates',
			title: C.tables.stemsCandidates,
			rows: STEM_WORDS.filter((/** @type {any} */ e) => e.candidate),
			sortCols: [
				{ key: 'eva',             label: C.columns.eva },
				{ key: 'layer',           label: C.columns.layer },
				{ key: 'confidenceStars', label: C.columns.confidenceStars },
			],
		},
		{
			id: 'derived',
			title: C.tables.derived,
			rows: LEXICON_DERIVED.filter((/** @type {any} */ e) => !e.candidate),
			sortCols: [
				{ key: 'eva',             label: C.columns.eva },
				{ key: 'confidenceStars', label: C.columns.confidenceStars },
			],
		},
		{
			id: 'derived-candidates',
			title: C.tables.derivedCandidates,
			rows: LEXICON_DERIVED.filter((/** @type {any} */ e) => e.candidate),
			sortCols: [
				{ key: 'eva',             label: C.columns.eva },
				{ key: 'confidenceStars', label: C.columns.confidenceStars },
			],
		},
	];

	/** @type {Record<string, { col: string, dir: 1|-1 }>} */
	let sortStates = $state(
		Object.fromEntries(TABLES.map((table) => [table.id, { col: '', dir: 1 }]))
	);

	/** @param {any} entry @param {string} key */
	function sortValue(entry, key) {
		switch (key) {
			case 'confidenceStars':
				return entry.confidenceStars ?? 0;
			case 'rules':
				return getLexiconRules(entry).join(', ');
			case 'isAnchor':
				return entry.isAnchor ? 1 : 0;
			default:
				return String(entry[key] ?? '');
		}
	}

	/** @param {string} tableId @param {string} col */
	function toggleSort(tableId, col) {
		const s = sortStates[tableId];
		if (s.col === col && s.dir === -1) {
			sortStates[tableId] = { col: '', dir: 1 };
		} else {
			sortStates[tableId] = {
				col,
				dir: s.col === col ? /** @type {1|-1} */ (-s.dir) : 1,
			};
		}
	}

	let searchText = $state('');
	let filterLayer  = $state('');
	let filterRules  = $state('');
	let filterStarsMin = $state(0);

	const LAYERS = [...new Set(STEM_WORDS.map((/** @type {any} */ e) => e.layer).filter(Boolean))].sort();

	/**
	 * @param {any} entry @param {string} chip @param {boolean} isDerived
	 */
	function matchesChip(entry, chip, isDerived) {
		if (!chip) return true;
		if (chip === 'op-/of-') {
			if (isDerived) return String(entry.morph ?? '').includes('o- + p-') || String(entry.morph ?? '').includes('o- + f-');
			return entry.eva.startsWith('op') || entry.eva.startsWith('of');
		}
		if (chip.startsWith('-')) return entry.eva.endsWith(chip.slice(1));
		if (isDerived) return String(entry.morph ?? '').startsWith(chip);
		return entry.eva.startsWith(chip.replace(/-$/, ''));
	}

	/** @param {{ id: string, rows: any[] }} table */
	function rowsFor(table) {
		const { col, dir } = sortStates[table.id];
		const isStems = table.id === 'stems' || table.id === 'stems-candidates';
		let rows = table.rows;

		const q = searchText.trim().toLowerCase();
		if (q) {
			rows = rows.filter((entry) => {
				const fields = isStems
					? [entry.eva, entry.heb, entry.de, entry.layer, entry.anchorFolio, entry.context, entry.relatedTo?.eva]
					: [entry.eva, entry.morph, entry.heb, entry.de, entry.evidence, entry.context, entry.relatedTo?.eva];
				return fields.some((f) => String(f ?? '').toLowerCase().includes(q));
			});
		}

		if (filter)
			rows = rows.filter((entry) => matchesChip(entry, filter, !isStems));

		if (filterLayer && isStems)
			rows = rows.filter((entry) => entry.layer === filterLayer);

		if (filterRules.trim()) {
			const rq = filterRules.trim().toUpperCase();
			rows = rows.filter((entry) => getLexiconRules(entry).some((/** @type {string} */ r) => r.toUpperCase().includes(rq)));
		}

		if (filterStarsMin > 0)
			rows = rows.filter((entry) => (entry.confidenceStars ?? 0) >= filterStarsMin);

		if (!col) return rows;
		return [...rows].sort((a, b) => {
			const av = sortValue(a, col);
			const bv = sortValue(b, col);
			return av < bv ? -dir : av > bv ? dir : 0;
		});
	}

	/** @param {string} chipEva */
	function toggleChip(chipEva) {
		filter = filter === chipEva ? '' : chipEva;
	}

	function clearAll() {
		searchText = ''; filter = ''; filterLayer = ''; filterRules = ''; filterStarsMin = 0;
	}

	const hasActiveFilter = $derived(!!(searchText.trim() || filter || filterLayer || filterRules.trim() || filterStarsMin > 0));
</script>

<section class="section" id="lexicon">
	<h2>{C.title(STATS.lexicon.toString())}</h2>
	<p>{C.intro}</p>

	<div class="lex-layout">
		<aside class="lex-aside hidden-print">
			<div class="lex-filter-box">
				<div class="filter-row">
					<label class="lbl-xs filter-label" for="lex-search">{C.filter.searchLabel}</label>
					<input
						id="lex-search"
						type="search"
						class="filter-input"
						bind:value={searchText}
						placeholder={C.filter.searchPlaceholder}
					/>
					{#if hasActiveFilter}
						<button type="button" class="filter-clear" onclick={clearAll} title={C.filter.clearAll}>✕</button>
					{/if}
				</div>

				<div class="chips-section">
					<span class="lbl-2xs">{C.filter.prefix}</span>
					<div class="chips-row">
						{#each GRAMMAR_PREFIXES as pfx ('pfx-' + pfx.eva)}
							<button type="button" class="chip" class:chip-active={filter === pfx.eva} title={pfx.fn} onclick={() => toggleChip(pfx.eva)}>{pfx.eva}</button>
						{/each}
					</div>
				</div>

				<div class="chips-section">
					<span class="lbl-2xs">{C.filter.suffix}</span>
					<div class="chips-row">
						{#each GRAMMAR_SUFFIXES as sfx ('sfx-' + sfx.eva)}
							<button type="button" class="chip" class:chip-active={filter === sfx.eva} title={sfx.fn} onclick={() => toggleChip(sfx.eva)}>{sfx.eva}</button>
						{/each}
					</div>
				</div>

				<div class="filter-field">
					<label class="lbl-2xs" for="lex-layer">{C.filter.layer}</label>
					<select id="lex-layer" class="filter-select" bind:value={filterLayer}>
						<option value="">{C.filter.layerAll}</option>
						{#each LAYERS as layer (layer)}
							<option value={layer}>{layer}</option>
						{/each}
					</select>
				</div>

				<div class="filter-field">
					<label class="lbl-2xs" for="lex-rules">{C.filter.rules}</label>
					<input id="lex-rules" type="search" class="filter-input" bind:value={filterRules} placeholder={C.filter.rulesPh} />
				</div>

				<div class="chips-section">
					<span class="lbl-2xs">{C.filter.starsMin}</span>
					<div class="chips-row">
						{#each [4, 5] as s (s)}
							<button type="button" class="chip" class:chip-active={filterStarsMin === s} onclick={() => filterStarsMin = filterStarsMin === s ? 0 : s}>{'★'.repeat(s)}{s === 4 ? '+' : ''}</button>
						{/each}
					</div>
				</div>
			</div>
		</aside>

		<div class="lex-content">
			{#each TABLES as table ('table-' + table.id)}
				{@const rows = rowsFor(table)}
				{#if rows.length > 0 || !hasActiveFilter}
					<div id={table.id} class="lexicon-group">
						<div class="group-header">
							<h3>
								{table.title}
								{#if rows.length !== table.rows.length}
									<span class="filter-count">({rows.length} / {table.rows.length})</span>
								{:else}
									<span class="filter-count">({rows.length})</span>
								{/if}
							</h3>
							<div class="sort-bar hidden-print">
								{#each table.sortCols as col ('sort-' + col.key)}
									{@const s = sortStates[table.id]}
									<button
										type="button"
										class="sort-btn"
										class:sort-btn-active={s.col === col.key}
										onclick={() => toggleSort(table.id, col.key)}
									>
										{col.label}{#if s.col === col.key}<span class="sort-icon" aria-hidden="true">{s.dir === 1 ? ' ▲' : ' ▼'}</span>{/if}
									</button>
								{/each}
							</div>
						</div>

						<div class="lex-list">
							{#each rows as entry, i ('entry-' + entry.eva + '-' + i)}
								{@const isDerived = table.id === 'derived' || table.id === 'derived-candidates'}
								{@const rules = getLexiconRules(entry)}
								{@const morphParts = isDerived && entry.morph ? entry.morph.split(' + ') : []}
								<div class="lex-entry">
									<div class="lex-top">
										<div class="lex-main">
											<span
												class="lex-eva eva eva-insert"
												role="button"
												tabindex="0"
												title={C.insertTitle(entry.eva)}
												onclick={() => onInsert(entry.eva)}
												onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && onInsert(entry.eva)}
											>{entry.eva}</span>

											{#if morphParts.length}
												<span class="lex-morph">
													{#each morphParts as part, pi ('morph-' + part + '-' + pi)}
														<span class="eva part-tag">{part}</span>{#if pi < morphParts.length - 1}<span class="morph-sep"> + </span>{/if}
													{/each}
												</span>
											{/if}

											{#if entry.heb}
												<span class="lex-heb">{entry.heb}</span>
											{/if}

											<div class="lex-details">
												<span class="de-text">{entry.de ?? '—'}{#if entry.uncertain}<span class="badge-uncertain" title={C.uncertainTitle}>?</span>{/if}</span>
												{#if entry.context}<span class="de-ctx">{entry.context}</span>{/if}
												{#if entry.relatedTo}
													<span class="de-related">→ {entry.relatedTo.type}: <span class="eva">{entry.relatedTo.eva}</span></span>
												{/if}
											</div>
										</div>

										<div class="lex-right">
											{#if !isDerived && (entry.layer || entry.isAnchor)}
												<div class="meta-badges">
													{#if entry.layer}<span class="meta-badge meta-layer">{entry.layer}</span>{/if}
													{#if entry.isAnchor}<span class="meta-badge meta-anchor">{C.columns.isAnchor} I</span>{/if}
												</div>
											{/if}
											<div class="meta-bottom">
												<span class="lex-conf {entry.confidenceStars === 5 ? 'conf5' : 'conf'}">{getLexiconConfidence(entry.confidenceStars)}</span>
												{#if entry.candidate}<span class="cand-badge">{C.candidateBadge}</span>{/if}
											</div>
										</div>
									</div>

									{#if !isDerived && (entry.anchorFolio || rules.length)}
										<div class="lex-footer">
											{#if entry.anchorFolio}
												<span class="lex-evidence" title={entry.anchorFolio}>{entry.anchorFolio}</span>
											{/if}
											{#if rules.length}
												<div class="meta-rules">
													{#each rules as rule ('rule-' + rule)}
														<a class="rule-link" href="#rule-{rule}" onclick={(e) => e.stopPropagation()}>{rule}</a>
													{/each}
												</div>
											{/if}
										</div>
									{/if}
									{#if isDerived && (entry.evidence || rules.length)}
										<div class="lex-footer">
											{#if entry.evidence}
												<span class="lex-evidence">{entry.evidence}</span>
											{/if}
											{#if rules.length}
												<div class="meta-rules">
													{#each rules as rule ('rule-' + rule)}
														<a class="rule-link" href="#rule-{rule}" onclick={(e) => e.stopPropagation()}>{rule}</a>
													{/each}
												</div>
											{/if}
										</div>
									{/if}
								</div>
							{/each}
							{#if rows.length === 0}
								<p class="no-results">{C.noResults}</p>
							{/if}
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</section>

<style>
  /* ── Section layout ─────────────────────────────────── */
  #lexicon {
    container-type: inline-size;
  }

  .lex-layout {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & .lex-content {
      min-width: 0;
      
      @media screen {
        & .lex-list {
          max-height: 480px;
          overflow-y: auto;
        }
      }
    }
  }

  @container (min-width: 640px) {
    .lex-layout {
      display: grid;
      grid-template-columns: 1fr 264px;
      grid-template-areas: "content aside";
      gap: 1.5rem;
      align-items: start;

      & .lex-content { grid-area: content; }
    }

    .lex-aside {
      grid-area: aside;
      position: sticky;
      top: 1rem;
      max-height: 100dvh;
      overflow-y: auto;
    }
  }

  /* ── Filter box ─────────────────────────────────────── */

  .lex-filter-box {
    display: flex;
    flex-direction: column;
    gap: .75rem;
    padding: .75rem .85rem;
    background: color-mix(in srgb, var(--parch-d) 55%, transparent);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
  }

  .filter-row {
    display: flex;
    align-items: center;
    gap: .45rem;
  }

  .filter-label {
    white-space: nowrap;
  }

  .filter-input {
    flex: 1;
    min-width: 0;
    padding: .32rem .6rem;
    font-size: var(--text-sm);
    font-family: var(--font-mono);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    background: var(--parch);
    color: var(--ink);
    outline: none;
    transition: border-color var(--t-norm), box-shadow var(--t-norm);

    &:focus {
      border-color: var(--red);
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--red) 20%, transparent);
    }

    &::-webkit-search-cancel-button {
      cursor: pointer;
    }
  }

  .filter-field {
    display: flex;
    flex-direction: column;
    gap: .28rem;
  }

  .filter-select {
    width: 100%;
    padding: .3rem .5rem;
    font-size: var(--text-sm);
    font-family: var(--font-serif);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    background: var(--parch);
    color: var(--ink);
    outline: none;
    cursor: pointer;

    &:focus {
      border-color: var(--red);
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--red) 20%, transparent);
    }
  }

  .filter-clear {
    flex-shrink: 0;
    padding: .28rem .45rem;
    font-family: var(--font-smallcaps);
    font-size: var(--text-2xs);
    letter-spacing: .08em;
    text-transform: uppercase;
    color: var(--ink-f);
    border: 1px solid var(--parch-dk);
    border-radius: var(--radius-md);
    background: transparent;
    cursor: pointer;
    white-space: nowrap;
    transition: all var(--t-fast);

    &:hover {
      color: var(--red);
      border-color: var(--red);
    }
  }

  /* ── Chips ──────────────────────────────────────────── */

  .chips-section {
    display: flex;
    flex-direction: column;
    gap: .3rem;
  }

  .chips-row {
    display: flex;
    flex-wrap: wrap;
    gap: .2rem .22rem;
  }

  .chip {
    padding: .13rem .42rem;
    font-family: var(--font-mono);
    font-size: var(--text-xs);
    border: 1px solid var(--parch-dk);
    border-radius: var(--radius-md);
    background: rgba(255, 255, 255, .5);
    color: var(--ink-l);
    cursor: pointer;
    transition: all var(--t-fast);
    white-space: nowrap;

    &:hover {
      background: rgba(255, 255, 255, .9);
      border-color: var(--border);
      color: var(--ink);
    }

    &:focus-visible {
      outline: 2px solid var(--red);
      outline-offset: 1px;
    }
  }

  .chip-active {
    background: var(--red) !important;
    border-color: var(--red) !important;
    color: white !important;
  }

  /* ── Group header ───────────────────────────────────── */

  .lexicon-group {
    margin-bottom: 2rem;
  }

  .group-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    flex-wrap: wrap;
    margin-bottom: .65rem;
  }

  .group-header h3 {
    margin: 0;
  }

  .filter-count {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    font-weight: normal;
    color: var(--ink-f);
    margin-left: .25em;
  }

  /* ── Sort bar ───────────────────────────────────────── */

  .sort-bar {
    display: flex;
    gap: .25rem;
    flex-wrap: wrap;
    align-items: center;
  }

  .sort-btn {
    padding: .18rem .5rem;
    font-size: var(--text-xs);
    font-family: var(--font-serif);
    border: 1px solid var(--border);
    border-radius: var(--radius-md);
    background: rgba(255, 255, 255, .5);
    color: var(--ink-l);
    cursor: pointer;
    white-space: nowrap;
    transition: all var(--t-fast);

    &:hover {
      background: rgba(255, 255, 255, .9);
      color: var(--ink);
    }

    &:focus-visible {
      outline: 2px solid var(--red);
      outline-offset: 1px;
    }
  }

  .sort-btn-active {
    background: var(--parch-d) !important;
    border-color: var(--parch-dk) !important;
    color: var(--ink) !important;
  }

  .sort-icon {
    font-size: .75em;
    opacity: .6;
  }

  /* ── Card list ──────────────────────────────────────── */

  .lex-list {
    display: flex;
    flex-direction: column;
    gap: .55rem;
  }

  .no-results {
    text-align: center;
    padding: .8rem;
    font-style: italic;
    color: var(--ink-f);
    font-size: var(--text-sm);
    margin: 0;
  }

  /* ── Card entry ─────────────────────────────────────── */

  .lex-entry {
    background: var(--parch);
    border: 1px solid var(--border);
    border-radius: var(--radius-lg);
    padding: .7rem 1rem;
    display: flex;
    flex-direction: column;
    gap: .5rem;
    break-inside: avoid;
    transition: border-color var(--t-fast), transform var(--t-fast);

    @media screen {
      &:hover {
        border-color: var(--parch-dk);
        transform: translateY(-1px);
      }
    }
  }

  /* ── Card left side ─────────────────────────────────── */

  .lex-main {
    display: flex;
    align-items: baseline;
    gap: .5rem .85rem;
    flex: 1;
    min-width: 0;
    flex-wrap: wrap;
  }

  .lex-eva {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    font-weight: bold;
    color: var(--red);
    background: color-mix(in srgb, var(--red) 10%, var(--parch));
    padding: .1rem .45rem;
    border-radius: var(--radius);
    cursor: pointer;
    white-space: nowrap;
    flex-shrink: 0;
    border-bottom: 1px dotted transparent;
    transition: background var(--t-fast), border-color var(--t-fast);

    &:hover, &:focus-visible {
      background: color-mix(in srgb, var(--red) 18%, var(--parch));
      border-bottom-color: var(--red);
      outline: none;
    }
  }

  .lex-morph {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
    gap: .1rem;
    font-size: var(--text-sm);
  }

  .part-tag {
    font-size: var(--text-sm);
    color: var(--ink-f);
    white-space: nowrap;
    font-family: var(--font-mono);
  }

  .morph-sep {
    color: var(--ink-f);
    font-size: var(--text-sm);
  }

  .lex-heb {
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--ink-l);
    direction: rtl;
    background: var(--parch-d);
    padding: .05rem .35rem;
    border-radius: var(--radius);
    white-space: nowrap;
    flex-shrink: 0;
  }

  .lex-details {
    font-size: var(--text-sm);
    color: var(--ink);
    min-width: 0;
  }

  .de-text {
    display: inline;
  }

  .badge-uncertain {
    display: inline-block;
    margin-left: .25em;
    padding: 0 .25em;
    font-size: var(--text-xs);
    font-weight: bold;
    color: color-mix(in srgb, var(--red) 75%, transparent);
    border: 1px solid color-mix(in srgb, var(--red) 35%, transparent);
    border-radius: var(--radius);
    vertical-align: middle;
    line-height: 1.45;
    font-family: var(--font-mono);
  }

  .de-ctx {
    display: inline-block;
    margin-left: .3em;
    padding: .05em .3em;
    font-size: var(--text-xs);
    font-family: var(--font-smallcaps);
    letter-spacing: .04em;
    color: var(--ink-f);
    background: color-mix(in srgb, var(--parch-d) 70%, transparent);
    border: 1px solid var(--parch-dk);
    border-radius: var(--radius);
    vertical-align: middle;
    white-space: nowrap;
  }

  .de-related {
    margin-top: .18em;
    font-size: var(--text-xs);
    color: var(--ink-f);
    font-style: italic;

    & .eva {
      font-style: normal;
    }
  }

  /* ── Card structure ────────────────────────────────── */

  .lex-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;
  }

  .lex-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: .3rem;
    flex-shrink: 0;
  }

  .meta-badges {
    display: flex;
    gap: .3rem;
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  .meta-bottom {
    display: flex;
    align-items: center;
    gap: .4rem;
    justify-content: flex-end;
    flex-wrap: wrap;
  }

  .lex-footer {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: .75rem;
    border-top: 1px dashed var(--border);
    padding-top: .45rem;
  }

  .lex-evidence {
    flex: 1;
    min-width: 0;
    font-size: var(--text-xs);
    color: var(--ink-f);
    font-family: var(--font-mono);
  }

  .meta-badge {
    font-size: var(--text-2xs);
    font-family: var(--font-smallcaps);
    letter-spacing: .04em;
    padding: .15rem .45rem;
    border-radius: var(--radius);
    background: var(--parch-d);
    color: var(--ink-l);
    border: 1px solid var(--border);
    white-space: nowrap;
  }

  .meta-anchor {
    background: color-mix(in srgb, var(--red) 12%, var(--parch-d));
    color: var(--red);
    border-color: color-mix(in srgb, var(--red) 30%, transparent);
    font-weight: 600;
  }


  /* ── Rule links ─────────────────────────────────────── */

  .meta-rules {
    display: flex;
    gap: .2rem;
    flex-wrap: wrap;
  }

  .rule-link {
    font-size: var(--text-xs);
    font-family: var(--font-mono);
    font-weight: bold;
    background: var(--parch-d);
    color: var(--ink-l);
    text-decoration: none;
    padding: .1rem .35rem;
    border-radius: var(--radius);
    border: 1px solid var(--border);
    white-space: nowrap;
    transition: background var(--t-fast), color var(--t-fast);

    &:hover {
      background: var(--parch-dk);
      color: var(--ink);
    }
  }

  /* ── Confidence ─────────────────────────────────────── */

  .lex-conf {
    color: var(--ink-f);
    font-size: var(--text-sm);
    letter-spacing: .05em;
    white-space: nowrap;
  }

  .conf5 {
    color: var(--red);
  }

  .cand-badge {
    display: inline-block;
    padding: .05em .3em;
    font-family: var(--font-smallcaps);
    font-size: var(--text-2xs);
    letter-spacing: .06em;
    text-transform: uppercase;
    color: var(--ink-f);
    border: 1px solid var(--parch-dk);
    border-radius: var(--radius-md);
    vertical-align: middle;
  }

  /* ── Mobile ─────────────────────────────────────────── */

  @container (max-width: 768px) {
    .lex-top {
      flex-direction: column;
      gap: .5rem;
    }

    .lex-main {
      gap: .4rem .7rem;
    }

    .lex-right {
      width: 100%;
      align-items: flex-start;
      flex-direction: row;
      flex-wrap: wrap;
      border-top: 1px dashed var(--border);
      padding-top: .5rem;
    }

    .meta-bottom {
      justify-content: flex-start;
    }
  }

  /* ── Print ──────────────────────────────────────────── */

  @media print {
    .sort-bar {
      display: none;
    }

    .lex-entry {
      border: 1px solid var(--border);
      padding: .5rem .75rem;
      margin-bottom: .4rem;
      box-shadow: none;
    }

    .meta-badge {
      border: 1px solid var(--border);
    }

    .rule-link {
      border: 1px solid var(--border);
    }

    .lex-heb {
      background: var(--parch-d);
    }
  }
</style>
