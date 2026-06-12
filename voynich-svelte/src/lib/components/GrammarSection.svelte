<script>
	import { GRAMMAR_PREFIXES, GRAMMAR_SUFFIXES, VERB_PARADIGM } from '$lib/grammar-data.js';
	import { isConf5 } from '$lib';

	let { onLinkFilter = /** @type {((eva: string) => void) | undefined} */ (undefined) } = $props();
</script>

<div class="grammar-systems">
  <div>
    <h3>
      Präfix-System
      {#if onLinkFilter}<span class="filter-hint">— Zeile anklicken filtert Lexikon</span>{/if}
    </h3>
    <table class="dt">
      <thead>
        <tr>
          <th>EVA-Präfix</th>
          <th>Hebräisch</th>
          <th>Funktion</th>
          <th>Beispiel</th>
          <th>Konf.</th>
        </tr>
      </thead>
      <tbody>
        {#each GRAMMAR_PREFIXES as row (row.eva)}
          <tr
            class:row-filterable={!!onLinkFilter}
            title={onLinkFilter ? `Im Lexikon nach „${row.eva}“ filtern` : undefined}
            onclick={() => onLinkFilter?.(row.eva)}
            onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && onLinkFilter?.(row.eva)}
            tabindex={onLinkFilter ? 0 : undefined}
          >
            <td><span class="eva">{row.eva}</span></td>
            <td><span class="heb-sm">{row.heb}</span></td>
            <td>{row.fn}</td>
            <td><span class="eva">{row.ex_eva}</span> = <span class="heb-sm">{row.ex_heb}</span></td>
            <td><span class={isConf5(row.stars) ? 'conf5' : 'conf'}>{row.stars}</span></td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <div>
    <h3>
      Suffix-System
      {#if onLinkFilter}<span class="filter-hint">— Zeile anklicken filtert Lexikon</span>{/if}
    </h3>
    <table class="dt">
      <thead>
        <tr>
          <th>EVA-Suffix</th>
          <th>Hebräisch</th>
          <th>Funktion</th>
          <th>Konf.</th>
        </tr>
      </thead>
      <tbody>
        {#each GRAMMAR_SUFFIXES as row (row.eva)}
          <tr
            class:row-filterable={!!onLinkFilter}
            title={onLinkFilter ? `Im Lexikon nach „${row.eva}“ filtern` : undefined}
            onclick={() => onLinkFilter?.(row.eva)}
            onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && onLinkFilter?.(row.eva)}
            tabindex={onLinkFilter ? 0 : undefined}
          >
            <td><span class="eva">{row.eva}</span></td>
            <td><span class="heb-sm">{row.heb}</span></td>
            <td>{row.fn}</td>
            <td><span class={isConf5(row.stars) ? 'conf5' : 'conf'}>{row.stars}</span></td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>

<div class="box hl">
	<div class="box-title">Verb-Paradigma y+k+[Terminus] — 6 bestätigt + 1 Kandidat ★★ provisorisch (f16r, R43)</div>
	<p style="margin-bottom:.5rem;font-size:.92rem">Alle klinischen Ankerbegriffe erhalten eine Verbform durch Präfix-Schichtung <span class="eva">y</span> + <span class="eva">k</span> + Terminus (fünf positiv, ein negativ, ein Kandidat):</p>
	<div class="table-scroll">
		<table class="dt" style="margin-top:.4rem">
			<thead>
				<tr><th>EVA</th><th>Hebräisch</th><th>Bedeutung</th><th>Erstbeleg</th><th>Konf.</th></tr>
			</thead>
			<tbody>
				{#each VERB_PARADIGM as row (row.eva)}
					<tr style={row.negative ? 'color:var(--red)' : row.candidate ? 'opacity:.55;font-style:italic' : ''}>
						<td><span class="eva">{row.eva}</span></td>
						<td><span class="heb-sm">{row.heb}</span></td>
						<td class="meaning">{row.de}</td>
						<td>{row.folio}</td>
						<td><span class={isConf5(row.stars) ? 'conf5' : 'conf'}>{row.stars}</span></td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<div class="box hl">
	<div class="box-title">Prognose-Schema Quire A (Kräuter, Spr. A)</div>
	<p style="margin-bottom:.5rem;font-size:.92rem">Jeder Paragraph folgt dem botanischen Schema:</p>
	<div class="schema">
		<div class="schema-step">
			<span class="heb-sm">דָּם·כְּהִי·חַם</span>
			<span class="lbl">Symptom (links)</span>
		</div>
		<span class="schema-arrow">‡</span>
		<div class="schema-step" style="background:rgba(28,61,90,.06);border-color:var(--blue)">
			<span class="heb-sm">{'{'+'plant}'}</span>
			<span class="lbl">Trennmarker</span>
		</div>
		<span class="schema-arrow">‡</span>
		<div class="schema-step">
			<span class="heb-sm">שַׂם·חֲקַר</span>
			<span class="lbl">Therapie (rechts)</span>
		</div>
		<span class="schema-arrow">→</span>
		<div class="schema-step" style="background:rgba(122,28,28,.08);border-color:var(--red)">
			<span class="heb-sm">שְאוֹל·אוֹר</span>
			<span class="lbl">sheol / or<br>Prognose</span>
		</div>
		<span class="schema-arrow">→</span>
		<div class="schema-step" style="background:rgba(154,122,42,.08)">
			<span class="heb-sm">= / קַיָּם</span>
			<span class="lbl">Kolophon</span>
		</div>
	</div>
</div>

<div class="box hl">
	<div class="box-title">Prognose-Schema Quire T / Sprache B</div>
	<p style="margin-bottom:.5rem;font-size:.92rem">Jeder vollständige Paragraph folgt dem Schema:</p>
	<div class="schema">
		<div class="schema-step">
			<span class="heb-sm">דִּין</span>
			<span class="lbl">daiin<br>Urteil</span>
		</div>
		<span class="schema-arrow">→</span>
		<div class="schema-step">
			<span class="heb-sm">שֶׁ+Symptom</span>
			<span class="lbl">shedy+X</span>
		</div>
		<span class="schema-arrow">→</span>
		<div class="schema-step">
			<span class="heb-sm">כְּהִי · דַּל · דָּם</span>
			<span class="lbl">Befund</span>
		</div>
		<span class="schema-arrow">→</span>
		<div class="schema-step">
			<span class="heb-sm">לְכְּדֵי</span>
			<span class="lbl">lchedy<br>Therapieziel</span>
		</div>
		<span class="schema-arrow">→</span>
		<div class="schema-step" style="background:rgba(122,28,28,.08);border-color:var(--red)">
			<span class="heb-sm">שְׁאוֹל · אוֹר</span>
			<span class="lbl">Prognose (Tod/Heilung)</span>
		</div>
	</div>
</div>

<style>
  * + .box {
    margin-top: 1rem;
  }

  .grammar-systems {
    display: flex;
    flex-wrap: wrap;
    gap: 0 2rem;

    & > div {
      flex: 1 1 480px;
      overflow-x: auto;
    }
  }

  .table-scroll {
    overflow-x: auto;
  }

  /* ── Filterable rows ────────────────────────────────── */

  tr.row-filterable {
    cursor: pointer;
    transition: background-color .12s;

    &:hover {
      background-color: color-mix(in srgb, var(--red) 7%, transparent);
    }

    &:focus-visible {
      outline: 2px solid var(--red);
      outline-offset: -2px;
    }
  }

  .filter-hint {
    font-family: var(--font-smallcaps);
    font-size: .6rem;
    letter-spacing: .08em;
    font-weight: normal;
    color: var(--ink-f);
    opacity: .7;
  }

  /* ── Schema diagram ─────────────────────────────────── */

  .schema      { margin-top: .85rem; }
  .schema-step { min-width: 5rem; }
  .schema-arrow { margin: 0 .1rem; }
</style>
