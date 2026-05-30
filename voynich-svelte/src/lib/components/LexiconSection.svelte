<script>
	let { LEXICON, onInsert } = $props();

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
		{ key: 'stars', label: 'Konf.' },
	];

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
			const av = col === 'stars' ? a[col].length : a[col];
			const bv = col === 'stars' ? b[col].length : b[col];
			return av < bv ? -dir : av > bv ? dir : 0;
		});
	}
</script>

<div class="lexicon">
  {#each CATEGORIES as cat}
    <div>
      <h3>{cat.label}</h3>
      <table class="dt">
        <thead>
          <tr>
            {#each COLS as col}
              {@const s = sortStates[cat.id]}
              <th
                data-sortable
                aria-sort={s.col === col.key ? (s.dir === 1 ? 'ascending' : 'descending') : 'none'}
                onclick={() => toggleSort(cat.id, col.key)}
                onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleSort(cat.id, col.key)}
                tabindex="0"
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
            {@const is5 = entry.stars.length >= 9}
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
              <td><span class={is5 ? 'conf5' : 'conf'}>{entry.stars}</span></td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/each}
</div>

<style>
  .lexicon {
    display: flex;
    flex-wrap: wrap;
    gap: 0 2rem;

    & > div {
      flex: 1 1 480px;
    }
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
</style>