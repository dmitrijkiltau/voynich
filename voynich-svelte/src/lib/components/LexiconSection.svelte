<script>
	import { STEM_WORDS, LEXICON_DERIVED } from '$lib';
	import { getLexiconConfidence, getLexiconRules } from '$lib/lexicon-data.js';
	import { GRAMMAR_PREFIXES, GRAMMAR_SUFFIXES } from '$lib/grammar-data.js';

	let { STATS, onInsert, filter = $bindable('') } = $props();

	let searchText = $state('');

	const TABLES = [
		{
			id: 'stems',
			title: 'A. Stammwörter',
			rows: STEM_WORDS.filter((/** @type {any} */ e) => !e.candidate),
			columns: [
				{ key: 'eva', label: 'EVA' },
				{ key: 'heb', label: 'Hebräisch' },
				{ key: 'de', label: 'Bedeutung' },
				{ key: 'layer', label: 'Schicht' },
				{ key: 'isAnchor', label: 'Anker' },
				{ key: 'anchorFolio', label: 'Folio' },
				{ key: 'rules', label: 'Regeln' },
				{ key: 'confidenceStars', label: 'Konf.' },
			],
		},
		{
			id: 'stems-candidates',
			title: 'B. Stammwörter (R43 Kandidaten)',
			rows: STEM_WORDS.filter((/** @type {any} */ e) => e.candidate),
			columns: [
				{ key: 'eva', label: 'EVA' },
				{ key: 'heb', label: 'Hebräisch' },
				{ key: 'de', label: 'Bedeutung' },
				{ key: 'layer', label: 'Schicht' },
				{ key: 'isAnchor', label: 'Anker' },
				{ key: 'anchorFolio', label: 'Folio' },
				{ key: 'rules', label: 'Regeln' },
				{ key: 'confidenceStars', label: 'Konf.' },
			],
		},
		{
			id: 'derived',
			title: 'C. Abgeleitete Lexikon-Einträge',
			rows: LEXICON_DERIVED.filter((/** @type {any} */ e) => !e.candidate),
			columns: [
				{ key: 'eva', label: 'EVA' },
				{ key: 'morph', label: 'Morph.' },
				{ key: 'heb', label: 'Hebräisch' },
				{ key: 'de', label: 'Bedeutung' },
				{ key: 'evidence', label: 'Evidenz' },
				{ key: 'rules', label: 'Regeln' },
				{ key: 'confidenceStars', label: 'Konf.' },
			],
		},
		{
			id: 'derived-candidates',
			title: 'D. Abgeleitete Lexikon-Einträge (R43 Kandidaten)',
			rows: LEXICON_DERIVED.filter((/** @type {any} */ e) => e.candidate),
			columns: [
				{ key: 'eva', label: 'EVA' },
				{ key: 'morph', label: 'Morph.' },
				{ key: 'heb', label: 'Hebräisch' },
				{ key: 'de', label: 'Bedeutung' },
				{ key: 'evidence', label: 'Evidenz' },
				{ key: 'rules', label: 'Regeln' },
				{ key: 'confidenceStars', label: 'Konf.' },
			],
		},
	];

	/** @type {Record<string, { col: string, dir: 1|-1 }>} */
	let sortStates = $state(
		Object.fromEntries(TABLES.map((table) => [table.id, { col: '', dir: 1 }]))
	);

	/** @param {any} entry @param {string} key */
	function cellValue(entry, key) {
		switch (key) {
			case 'layer':
			case 'morph':
			case 'evidence':
			case 'anchorFolio':
				return entry[key] || '—';
			case 'isAnchor':
				return entry.isAnchor ? 'I' : '—';
			case 'rules': {
				const rules = getLexiconRules(entry);
				return rules.length ? rules.join(', ') : '—';
			}
			case 'confidenceStars':
				return getLexiconConfidence(entry.confidenceStars);
			default:
				return entry[key] ?? '—';
		}
	}

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

	let filterLayer  = $state('');
	let filterRules  = $state('');
	let filterStarsMin = $state(0);

	const LAYERS = [...new Set(STEM_WORDS.map((/** @type {any} */ e) => e.layer).filter(Boolean))].sort();

	/**
	 * Prefix/suffix chip filter — works on every table.
	 * Derived entries: match on morph. Stems: match on eva.
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
	<h2>V. Bestätigtes Lexikon ({STATS.lexicon} Einträge)</h2>
	<p>Alle Einträge mit ★★★ oder höher, getrennt nach Stammwörtern und abgeleiteten Formen. Klick auf das EVA-Wort fügt es in die Eingabe ein.</p>

	<div class="lex-layout">
		<aside class="lex-aside hidden-print">
			<div class="lex-filter-box">
				<div class="filter-row">
					<label class="filter-label" for="lex-search">Suche</label>
					<input
						id="lex-search"
						type="search"
						class="filter-input"
						bind:value={searchText}
						placeholder="EVA, Bedeutung, Morph. …"
					/>
					{#if hasActiveFilter}
						<button type="button" class="filter-clear" onclick={clearAll} title="Alle Filter löschen">✕</button>
					{/if}
				</div>

				<div class="chips-section">
					<span class="chips-label">Präfix</span>
					<div class="chips-row">
						{#each GRAMMAR_PREFIXES as pfx ('pfx-' + pfx.eva)}
							<button type="button" class="chip" class:chip-active={filter === pfx.eva} title={pfx.fn} onclick={() => toggleChip(pfx.eva)}>{pfx.eva}</button>
						{/each}
					</div>
				</div>

				<div class="chips-section">
					<span class="chips-label">Suffix</span>
					<div class="chips-row">
						{#each GRAMMAR_SUFFIXES as sfx ('sfx-' + sfx.eva)}
							<button type="button" class="chip" class:chip-active={filter === sfx.eva} title={sfx.fn} onclick={() => toggleChip(sfx.eva)}>{sfx.eva}</button>
						{/each}
					</div>
				</div>

				<div class="filter-field">
					<label class="chips-label" for="lex-layer">Schicht</label>
					<select id="lex-layer" class="filter-select" bind:value={filterLayer}>
						<option value="">Alle</option>
						{#each LAYERS as layer (layer)}
							<option value={layer}>{layer}</option>
						{/each}
					</select>
				</div>

				<div class="filter-field">
					<label class="chips-label" for="lex-rules">Regeln</label>
					<input id="lex-rules" type="search" class="filter-input" bind:value={filterRules} placeholder="z.B. R40" />
				</div>

				<div class="chips-section">
					<span class="chips-label">Sterne (min)</span>
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
					<div id={table.id} class="lexicon-table">
						<h3>
							{table.title}
							{#if rows.length !== table.rows.length}
								<span class="filter-count">({rows.length} / {table.rows.length})</span>
							{:else}
								<span class="filter-count">({rows.length})</span>
							{/if}
						</h3>

						<div class="table-wrap">
							<table class={'dt ' + table.id + '-table'}>
								<thead>
									<tr>
										{#each table.columns as col ('col-' + col.key)}
											{@const s = sortStates[table.id]}
											<th
												data-sortable
												aria-sort={s.col === col.key ? (s.dir === 1 ? 'ascending' : 'descending') : 'none'}
												onclick={() => toggleSort(table.id, col.key)}
												onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleSort(table.id, col.key)}
												tabindex="0"
												class={(table.id + '-' + col.key) + (col.key === 'evidence' ? ' notes-cell' : '')}
											>
												{col.label}
												<span class="sort-icon" aria-hidden="true">
													{#if s.col === col.key}
														{s.dir === 1 ? '▲' : '▼'}
													{:else}
														⇅
													{/if}
												</span>
											</th>
										{/each}
									</tr>
								</thead>
								<tbody>
									{#each rows as entry, i ('entry-' + entry.eva + '-' + i)}
										<tr>
											{#each table.columns as col ('entry-col-' + col.key)}
												<td class={(table.id + '-' + col.key) + (col.key === 'evidence' ? ' notes-cell' : col.key === 'anchorFolio' ? ' part-cell' : col.key === 'rules' ? ' rules-cell' : '')}>
													{#if col.key === 'confidenceStars'}
														<span class={entry.confidenceStars === 5 ? 'conf5' : 'conf'}>{cellValue(entry, col.key)}</span>{#if entry.candidate}<span class="cand-badge">Kand.</span>{/if}
													{:else if col.key === 'rules'}
														{@const rules = getLexiconRules(entry)}
														{#if rules.length}
															{#each rules as rule, ri ('rule-' + rule)}
																{#if ri > 0}<span class="rules-sep">, </span>{/if}<a class="rule-link" href="#rule-{rule}" onclick={(e) => e.stopPropagation()}>{rule}</a>
															{/each}
														{:else}
															—
														{/if}
													{:else if col.key === 'eva'}
														<span
															class="eva eva-insert"
															role="button"
															tabindex="0"
															title="In Eingabe einfügen: {entry.eva}"
															onclick={() => onInsert(entry.eva)}
															onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && onInsert(entry.eva)}
														>{cellValue(entry, col.key)}</span>
													{:else if col.key === 'morph'}
														{@const parts = cellValue(entry, col.key).split(' + ')}
														{#each parts as part, pi ('part-' + part + '-' + pi)}
															<span class="eva part-cell">{part}</span>
															{#if pi < parts.length - 1}
																<span class="rules-sep">+&nbsp;</span>
															{/if}
														{/each}
													{:else if col.key === 'de'}
														<span class="de-text">{entry.de ?? '—'}</span>{#if entry.uncertain}<span class="badge-uncertain" title="Semantik unsicher">?</span>{/if}{#if entry.context}<span class="de-ctx">{entry.context}</span>{/if}
														{#if entry.relatedTo}
															<span class="de-related">→ {entry.relatedTo.type}: <span class="eva">{entry.relatedTo.eva}</span></span>
														{/if}
													{:else}
														{cellValue(entry, col.key)}
													{/if}
												</td>
											{/each}
										</tr>
									{/each}
									{#if rows.length === 0}
										<tr>
											<td colspan={table.columns.length} class="no-results">Keine Einträge gefunden.</td>
										</tr>
									{/if}
								</tbody>
							</table>
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</section>

<style>
  /* ── Section layout ─────────────────────────────────── */

  .lex-layout {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .lex-content {
    container-type: inline-size;
    min-width: 0;
  }

  @media (min-width: 1360px) {
    .lex-layout {
      display: grid;
      grid-template-columns: 1fr 264px;
      grid-template-areas: "content aside";
      gap: 1.5rem;
      align-items: start;
    }

    .lex-content { grid-area: content; }

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
    border-radius: 4px;
  }

  .filter-row {
    display: flex;
    align-items: center;
    gap: .45rem;
  }

  .filter-label {
    font-family: var(--font-smallcaps);
    font-size: var(--text-xs);
    letter-spacing: .1em;
    text-transform: uppercase;
    color: var(--ink-f);
    white-space: nowrap;
  }

  .filter-input {
    flex: 1;
    min-width: 0;
    padding: .32rem .6rem;
    font-size: var(--text-sm);
    font-family: var(--font-mono);
    border: 1px solid var(--border);
    border-radius: 3px;
    background: var(--parch);
    color: var(--ink);
    outline: none;
    transition: border-color .15s, box-shadow .15s;

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
    font-family: var(--font-body);
    border: 1px solid var(--border);
    border-radius: 3px;
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
    border-radius: 3px;
    background: transparent;
    cursor: pointer;
    white-space: nowrap;
    transition: all .12s;

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

  .chips-label {
    font-family: var(--font-smallcaps);
    font-size: var(--text-2xs);
    letter-spacing: .1em;
    text-transform: uppercase;
    color: var(--ink-f);
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
    border-radius: 3px;
    background: rgba(255, 255, 255, .5);
    color: var(--ink-l);
    cursor: pointer;
    transition: all .12s;
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
    color: #fff !important;
  }

  /* ── De cell: new field badges ──────────────────────── */

  .badge-uncertain {
    display: inline-block;
    margin-left: .25em;
    padding: 0 .25em;
    font-size: var(--text-xs);
    font-weight: bold;
    color: color-mix(in srgb, var(--red) 75%, transparent);
    border: 1px solid color-mix(in srgb, var(--red) 35%, transparent);
    border-radius: 2px;
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
    border-radius: 2px;
    vertical-align: middle;
    white-space: nowrap;
  }

  .de-related {
    display: block;
    margin-top: .18em;
    font-size: var(--text-xs);
    color: var(--ink-f);
    font-style: italic;

    & .eva {
      font-style: normal;
    }
  }

  /* ── Table title count ──────────────────────────────── */

  .filter-count {
    font-family: var(--font-mono);
    font-size: var(--text-sm);
    font-weight: normal;
    color: var(--ink-f);
    margin-left: .25em;
  }

  /* ── No results row ─────────────────────────────────── */

  .no-results {
    text-align: center;
    padding: .8rem;
    font-style: italic;
    color: var(--ink-f);
    font-size: var(--text-sm);
  }

  /* ── Table ──────────────────────────────────────────── */

  .table-wrap {
    max-width: 100%;
    max-height: 480px;
    overflow: auto;
  }

  .dt {
    width: 100%;

    & thead {
      position: sticky;
      top: 0;
      z-index: 1;
    }
  }

  td.notes-cell {
    min-width: 240px;
    font-size: var(--text-sm);
    color: var(--ink-f);
    font-style: italic;
  }

  .part-cell {
    font-size: var(--text-sm);
    color: var(--ink-f);
    white-space: nowrap;
    font-family: var(--font-mono);
  }

  th[data-sortable] {
    cursor: pointer;
    user-select: none;
    white-space: nowrap;

    &:hover {
      background-color: color-mix(in srgb, currentColor 8%, transparent);
    }

    & .sort-icon {
      margin-inline-start: 0.3em;
      opacity: 0.4;
      font-size: var(--text-xs);
    }

    &[aria-sort='ascending'] .sort-icon,
    &[aria-sort='descending'] .sort-icon {
      opacity: 1;
    }
  }

  /* ── Rule links ─────────────────────────────────────── */

  .rules-cell {
    white-space: nowrap;
    font-family: var(--font-mono);
    font-size: var(--text-sm);
  }

  .rule-link {
    color: var(--red);
    text-decoration: none;
    border-bottom: 1px dotted color-mix(in srgb, var(--red) 50%, transparent);

    &:hover {
      border-bottom-style: solid;
    }
  }

  .rules-sep {
    color: var(--ink-f);
  }

  .eva-insert {
    cursor: pointer;
    border-bottom: 1px dotted transparent;
    transition: border-color .12s, color .12s;

    &:hover, &:focus-visible {
      border-bottom-color: var(--red);
      color: var(--red);
      outline: none;
    }
  }

  .cand-badge {
    display: inline-block;
    margin-left: .35em;
    padding: .05em .3em;
    font-family: var(--font-smallcaps);
    font-size: var(--text-2xs);
    letter-spacing: .06em;
    text-transform: uppercase;
    color: var(--ink-f);
    border: 1px solid var(--parch-dk);
    border-radius: 3px;
    vertical-align: middle;
  }

  /* ── Responsive table layout ────────────────────────── */

  .lex-content {
    & .lexicon-table {
      & thead {
        position: sticky;
        top: 0;
        z-index: 1;
      }

      @container (max-width: 768px) {
        & tr {
          display: grid;
          border: 1px solid var(--border);
          padding: 1rem;
          break-inside: avoid;

          &:not(:last-child) {
            margin-bottom: .8rem;
          }

          & td {
            border-bottom: 0;
          }
        }

        & thead tr {
          margin-bottom: .8rem;
        }

        & th, & td {
          padding: 0;
        }

        & .stems-table tr, & .stems-candidates-table tr {
          grid-template-columns: 2fr 1fr 4rem 3rem;
          grid-template-areas:
            "eva eva confidenceStars confidenceStars"
            "de de heb heb"
            "layer layer rules rules"
            "anchorFolio anchorFolio anchorFolio isAnchor";

          & .stems-eva, & .stems-candidates-eva { grid-area: eva; }
          & .stems-heb, & .stems-candidates-heb { grid-area: heb; }
          & .stems-de, & .stems-candidates-de { grid-area: de; }
          & .stems-layer, & .stems-candidates-layer { grid-area: layer; }
          & .stems-isAnchor, & .stems-candidates-isAnchor { grid-area: isAnchor; }
          & .stems-anchorFolio, & .stems-candidates-anchorFolio { grid-area: anchorFolio; }
          & .stems-rules, & .stems-candidates-rules { grid-area: rules; }
          & .stems-confidenceStars, & .stems-candidates-confidenceStars { grid-area: confidenceStars; }

          & :is(.stems-heb, .stems-isAnchor, .stems-rules, .stems-confidenceStars),
          & :is(.stems-candidates-heb, .stems-candidates-isAnchor, .stems-candidates-rules, .stems-candidates-confidenceStars) {
            justify-self: end;
            text-align: end;
          }
        }

        & .derived-table tr, & .derived-candidates-table tr {
          grid-template-columns: auto auto;
          grid-template-areas:
            "eva confidenceStars"
            "de heb"
            "morph rules"
            "evidence evidence";

          & .derived-eva, & .derived-candidates-eva { grid-area: eva; }
          & .derived-heb, & .derived-candidates-heb { grid-area: heb; }
          & .derived-de, & .derived-candidates-de { grid-area: de; }
          & .derived-morph, & .derived-candidates-morph { grid-area: morph; }
          & .derived-evidence, & .derived-candidates-evidence { grid-area: evidence; }
          & .derived-rules, & .derived-candidates-rules { grid-area: rules; }
          & .derived-confidenceStars, & .derived-candidates-confidenceStars { grid-area: confidenceStars; }

          & :is(.derived-heb, .derived-rules, .derived-confidenceStars),
          & :is(.derived-candidates-heb, .derived-candidates-rules, .derived-candidates-confidenceStars) {
            justify-self: end;
            text-align: end;
          }
        }
      }

      @media screen {
        @container (min-width: 769px) {
          overflow: hidden;

          & th:first-child, & td:first-child {
            position: sticky;
            left: 0;
          }

          & thead th:first-child {
            z-index: 1;
            background: var(--parch-d);
          }

          & tbody tr {
            background: var(--parch);

            & td:first-child {
              z-index: 0;
              background: var(--parch);
              border-bottom: 1px solid var(--border);
            }
          }
        }
      }
    }
  }

  /* ── Print ──────────────────────────────────────────── */

  @media print {
    .table-wrap {
      max-height: none;
      overflow: visible;
    }

    .notes-cell {
      display: none;
    }
  }
</style>
