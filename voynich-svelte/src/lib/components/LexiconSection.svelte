<script>
	import { isConf5 } from '$lib';

	let { STATS, LEXICON, onInsert } = $props();

	const CATEGORIES = [
		{ id: 'symptom',    label: 'A. Medizinische Nomina — Symptome & Befunde' },
		{ id: 'prognose',   label: 'B. Prognose-Termini' },
		{ id: 'kolophon',   label: 'C. Kolophon-Formeln' },
		{ id: 'syntax',     label: 'D. Syntaktische Konnektoren' },
		{ id: 'akteur',     label: 'E. Akteure, Anatomie & Botanika' },
		{ id: 'verb',       label: 'F. Verbparadigma' },
		{ id: 'kompositum', label: 'G. Bestätigte Komposita' },
		{ id: 'possessiv',  label: 'H. Possessiv-Formen' },
	];

	const COLS = [
		{ key: 'eva',   label: 'EVA' },
		{ key: 'heb',   label: 'Hebräisch' },
		{ key: 'de',    label: 'Bedeutung' },
		{ key: 'notes', label: 'Notizen' },
		{ key: 'part',  label: 'Pflanzenteil' },
		{ key: 'stars', label: 'Konf.' },
	];

	/** @param {string} catId */
	function hasPart(catId) {
		return LEXICON.some(e => e.cat === catId && e.part);
	}

	/** @param {string} catId */
	function hasNotes(catId) {
		return LEXICON.some(e => e.cat === catId && e.notes);
	}

	/** @param {string} catId */
	function colsFor(catId) {
		return COLS.filter(c => {
			if (c.key === 'part')  return hasPart(catId);
			if (c.key === 'notes') return hasNotes(catId);
			return true;
		});
	}

	/** @type {Record<string, { col: string, dir: 1|-1 }>} */
	let sortStates = $state(
		Object.fromEntries(CATEGORIES.map(c => [c.id, { col: '', dir: 1 }]))
	);

	/** @param {string} catId @param {string} col */
	function toggleSort(catId, col) {
		const s = sortStates[catId];
		if (s.col === col && s.dir === -1) {
			// third click: clear sort
			sortStates[catId] = { col: '', dir: 1 };
		} else {
			sortStates[catId] = {
				col,
				dir: s.col === col ? /** @type {1|-1} */ (-s.dir) : 1,
			};
		}
	}

	/** @param {string} catId */
	function entriesByCat(catId) {
		const entries = LEXICON.filter(/** @param {{ cat: string }} e */ e => e.cat === catId);
		const { col, dir } = sortStates[catId];
		if (!col) return entries;
		return [...entries].sort((a, b) => {
			const av = col === 'stars' ? a.stars.length : (a[col] ?? '');
			const bv = col === 'stars' ? b.stars.length : (b[col] ?? '');
			return av < bv ? -dir : av > bv ? dir : 0;
		});
	}
</script>

<section class="section" id="lexicon">
	<h2>V. Bestätigtes Lexikon ({STATS.lexicon} Einträge)</h2>
	<p>Alle Einträge mit ★★★ oder höher. Klick auf eine Zeile fügt das EVA-Wort in die Eingabe ein.</p>

  <div class="lexicon">
    {#each CATEGORIES as cat}
      <div>
        <h3>{cat.label}</h3>
        <div class="table-wrap">
          <table class="dt">
            <thead>
              <tr>
                {#each colsFor(cat.id) as col}
                  {@const s = sortStates[cat.id]}
                  <th
                    data-sortable
                    aria-sort={s.col === col.key ? (s.dir === 1 ? 'ascending' : 'descending') : 'none'}
                    onclick={() => toggleSort(cat.id, col.key)}
                    onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleSort(cat.id, col.key)}
                    tabindex="0"
                    class={col.key === 'notes' ? ' notes-cell' : ''}
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
              {#each entriesByCat(cat.id) as entry}
                <tr
                  data-clickable
                  title="In Eingabe einfügen: {entry.eva}"
                  onclick={() => onInsert(entry.eva)}
                  onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && onInsert(entry.eva)}
                  tabindex="0"
                >
                  <td><span class="eva">{entry.eva}</span></td>
                  <td><span class="heb-sm">{entry.heb}</span></td>
                  <td class="meaning">{entry.de}</td>
                  {#if hasNotes(cat.id)}
                    <td class="notes-cell">{entry.notes ?? '—'}</td>
                  {/if}
                  {#if hasPart(cat.id)}
                    <td class="part-cell">{entry.part ?? '—'}</td>
                  {/if}
                  <td><span class={isConf5(entry.stars) ? 'conf5' : 'conf'}>{entry.stars}</span></td>
                </tr>
              {/each}
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
  }

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