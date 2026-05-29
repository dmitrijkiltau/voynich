<script>
	let { LEXICON, onInsert } = $props();

	const CATEGORIES = [
		{ id: 'symptom', label: 'A. Medizinische Nomina & Symptome' },
		{ id: 'prognose', label: 'B. Prognose-Termini' },
		{ id: 'syntax',   label: 'C. Syntaktische Konnektoren' },
		{ id: 'verb',     label: 'D. Verbformen' },
		{ id: 'akteur',   label: 'E. Akteure, Anatomie & Botanik' },
	];

	/** @param {string} cat */
	function entriesByCat(cat) {
		return LEXICON.filter(/** @param {{ cat: string }} e */ e => e.cat === cat);
	}
</script>

<div class="lexicon">
  {#each CATEGORIES as cat}
    <div>
      <h3>{cat.label}</h3>
      <table class="dt">
        <thead>
          <tr>
            <th>EVA</th>
            <th>Hebräisch</th>
            <th>Bedeutung</th>
            <th>Konf.</th>
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
</style>