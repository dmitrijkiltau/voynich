<script>
	import {
		STEM_WORDS,
		LEXICON_DERIVED,
		getLexiconConfidence,
		getLexiconRules,
	} from '$lib/lexicon-data.js';
	import { GRAMMAR_PREFIXES, GRAMMAR_SUFFIXES } from '$lib/grammar-data.js';

	let { STATS, onInsert, filter = $bindable('') } = $props();

	let searchText = $state('');

	const TABLES = [
		{
			id: 'stems',
			title: 'A. Stammwörter',
			rows: STEM_WORDS,
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
			title: 'B. Abgeleitete Lexikon-Einträge',
			rows: LEXICON_DERIVED,
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
				return entry.isAnchor ? 'ja' : '—';
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

	/**
	 * Checks whether a derived entry matches the active prefix/suffix chip.
	 * Prefixes (no leading dash) are matched against morph.startsWith.
	 * Suffixes (leading dash) are matched against entry.eva.endsWith.
	 * @param {any} entry
	 * @param {string} filterEva
	 */
	function matchesMorphFilter(entry, filterEva) {
		if (!filterEva) return true;
		const morph = String(entry.morph ?? '');
		if (filterEva === 'op-/of-') {
			return morph.includes('o- + p-') || morph.includes('o- + f-');
		}
		if (filterEva.startsWith('-')) {
			return entry.eva.endsWith(filterEva.slice(1));
		}
		return morph.startsWith(filterEva);
	}

	/** @param {{ id: string, rows: any[] }} table */
	function rowsFor(table) {
		const { col, dir } = sortStates[table.id];
		let rows = table.rows;

		const q = searchText.trim().toLowerCase();
		if (q) {
			rows = rows.filter((entry) => {
				const fields =
					table.id === 'stems'
						? [entry.eva, entry.heb, entry.de, entry.layer, entry.anchorFolio]
						: [entry.eva, entry.morph, entry.heb, entry.de, entry.evidence];
				return fields.some((f) => String(f ?? '').toLowerCase().includes(q));
			});
		}

		if (table.id === 'derived' && filter) {
			rows = rows.filter((entry) => matchesMorphFilter(entry, filter));
		}

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
</script>

<section class="section" id="lexicon">
	<h2>V. Bestätigtes Lexikon ({STATS.lexicon} Einträge)</h2>
	<p>Alle Einträge mit ★★★ oder höher, getrennt nach Stammwörtern und abgeleiteten Formen. Klick auf eine Zeile fügt das EVA-Wort in die Eingabe ein.</p>

	<div class="filter-bar hidden-print">
		<label class="filter-label" for="lex-search">Suche</label>
		<input
			id="lex-search"
			type="search"
			class="filter-input"
			bind:value={searchText}
			placeholder="EVA, Bedeutung, Morph. …"
		/>
		{#if searchText.trim() || filter}
			<button type="button" class="filter-clear" onclick={() => { searchText = ''; filter = ''; }} title="Alle Filter löschen">✕ Alles löschen</button>
		{/if}
	</div>

	<div class="lexicon">
		{#each TABLES as table}
			{@const rows = rowsFor(table)}
			<div id={table.id} class="lexicon-table">
				<h3>
					{table.title}
					{#if rows.length !== table.rows.length}
						<span class="filter-count">({rows.length} / {table.rows.length})</span>
					{:else}
						<span class="filter-count">({rows.length})</span>
					{/if}
				</h3>

				{#if table.id === 'derived'}
					<div class="chips-bar hidden-print">
						<div>
							<span class="chips-label">Präfix:</span>
							{#each GRAMMAR_PREFIXES as pfx}
								<button
									type="button"
									class="chip"
									class:chip-active={filter === pfx.eva}
									title="{pfx.fn}"
									onclick={() => toggleChip(pfx.eva)}
								>{pfx.eva}</button>
							{/each}
						</div>

						<div>
							<span class="chips-label">Suffix:</span>
							{#each GRAMMAR_SUFFIXES as sfx}
								<button
									type="button"
									class="chip"
									class:chip-active={filter === sfx.eva}
									title="{sfx.fn}"
									onclick={() => toggleChip(sfx.eva)}
								>{sfx.eva}</button>
							{/each}
						</div>
					</div>
				{/if}

				<div class="table-wrap">
					<table class="dt">
						<thead>
							<tr>
								{#each table.columns as col}
									{@const s = sortStates[table.id]}
									<th
										data-sortable
										aria-sort={s.col === col.key ? (s.dir === 1 ? 'ascending' : 'descending') : 'none'}
										onclick={() => toggleSort(table.id, col.key)}
										onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleSort(table.id, col.key)}
										tabindex="0"
										class={col.key === 'evidence' ? ' notes-cell' : ''}
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
							{#each rows as entry}
								<tr
									data-clickable
									title="In Eingabe einfügen: {entry.eva}"
									onclick={() => onInsert(entry.eva)}
									onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && onInsert(entry.eva)}
									tabindex="0"
								>
									{#each table.columns as col}
										<td class={col.key === 'evidence' ? 'notes-cell' : col.key === 'anchorFolio' ? 'part-cell' : col.key === 'rules' ? 'rules-cell' : ''}>
											{#if col.key === 'confidenceStars'}
												<span class={entry.confidenceStars === 5 ? 'conf5' : 'conf'}>{cellValue(entry, col.key)}</span>
											{:else if col.key === 'rules'}
												{@const rules = getLexiconRules(entry)}
												{#if rules.length}
													{#each rules as rule, i}
														{#if i > 0}<span class="rules-sep">, </span>{/if}<a class="rule-link" href="#rule-{rule}" onclick={(e) => e.stopPropagation()}>{rule}</a>
													{/each}
												{:else}
													—
												{/if}
											{:else if col.key === 'eva'}
												<span class="eva">{cellValue(entry, col.key)}</span>
											{:else if col.key === 'morph'}
												{@const cellValueArr = cellValue(entry, col.key).split(' + ')}
												{#each cellValueArr as part, i}
													<span class="eva part-cell">{part}</span>
													{#if i < cellValueArr.length - 1}
														<span class="rules-sep">+&nbsp;</span>
													{/if}
												{/each}
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
		{/each}
	</div>
</section>

<style>
  .lexicon {
    display: flex;
    flex-wrap: wrap;
    gap: 0 2rem;

    & > div {
      flex: 1 1 560px;
    }

		& .lexicon-table {
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

  /* ── Filter bar ─────────────────────────────────────── */

  .filter-bar {
    display: flex;
    align-items: center;
    gap: .55rem;
    margin-bottom: .6rem;
  }

  .filter-label {
    font-family: var(--font-smallcaps);
    font-size: .7rem;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: var(--ink-f);
    white-space: nowrap;
  }

  .filter-input {
    flex: 1;
    max-width: 380px;
    padding: .32rem .6rem;
    font-size: .85rem;
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

  .filter-clear {
    padding: .28rem .55rem;
    font-family: var(--font-smallcaps);
    font-size: .65rem;
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

  /* ── Chips bar ──────────────────────────────────────── */

  .chips-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: .28rem .35rem;
    margin-bottom: 1rem;
    padding: .45rem .65rem;
    background: color-mix(in srgb, var(--parch-d) 55%, transparent);
    border: 1px solid var(--border);
    border-radius: 3px;
  }

  .chips-label {
    font-family: var(--font-smallcaps);
    font-size: .62rem;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: var(--ink-f);
    white-space: nowrap;
    margin-right: .1rem;
  }

  .chips-sep {
    color: var(--parch-dk);
    font-size: .9rem;
    margin: 0 .25rem;
    align-self: center;
  }

  .chip {
    padding: .15rem .48rem;
    font-family: var(--font-mono);
    font-size: .72rem;
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

  /* ── Table title count ──────────────────────────────── */

  .filter-count {
    font-family: var(--font-mono);
    font-size: .78rem;
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
    font-size: .85rem;
  }

  /* ── Table ──────────────────────────────────────────── */

  .table-wrap {
    max-width: calc(100vw - 2rem);
    max-height: 480px;
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
    font-size: 0.78rem;
    color: var(--ink-f);
    font-style: italic;
    max-width: 320px;
  }

  .part-cell {
    font-size: 0.78rem;
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
      font-size: 0.75em;
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
    font-size: 0.78rem;
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

  @media print {
    .table-wrap {
      max-height: none;
      overflow: visible;
    }

    .notes-cell {
      display: none;
    }

    .filter-bar,
    .chips-bar {
      display: none;
    }
  }
</style>
