<script>
	import { GRAMMAR_PREFIXES, GRAMMAR_SUFFIXES } from '$lib/grammar-data.js';
</script>

<div class="grammar-systems">
  <div>
    <h3>Präfix-System</h3>
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
        {#each GRAMMAR_PREFIXES as row}
          <tr>
            <td><span class="eva">{row.eva}</span></td>
            <td><span class="heb-sm">{row.heb}</span></td>
            <td>{row.fn}</td>
            <td><span class="eva">{row.ex_eva}</span> = <span class="heb-sm">{row.ex_heb}</span></td>
            <td><span class={row.is5 ? 'conf5' : 'conf'}>{row.stars}</span></td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>

  <div>
    <h3>Suffix-System</h3>
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
        {#each GRAMMAR_SUFFIXES as row}
          <tr>
            <td><span class="eva">{row.eva}</span></td>
            <td><span class="heb-sm">{row.heb}</span></td>
            <td>{row.fn}</td>
            <td><span class={row.is5 ? 'conf5' : 'conf'}>{row.stars}</span></td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>

<div class="box hl">
	<div class="box-title">Verb-Paradigma y+k+[Terminus] — 6 bestätigt + 1 Kandidat (f16r)</div>
	<p style="margin-bottom:.5rem;font-size:.92rem">Alle klinischen Ankerbegriffe erhalten eine Verbform durch Präfix-Schichtung <span class="eva">y</span> + <span class="eva">k</span> + Terminus (fünf positiv, ein negativ, ein Kandidat):</p>
	<div class="table-scroll">
		<table class="dt" style="margin-top:.4rem">
			<thead>
				<tr><th>EVA</th><th>Hebräisch</th><th>Bedeutung</th><th>Erstbeleg</th><th>Konf.</th></tr>
			</thead>
			<tbody>
				<tr>
					<td><span class="eva">ykchaiin</span></td>
					<td><span class="heb-sm">יְ+כְּ+חַיִּין</span></td>
					<td class="meaning">er wird wie Leben werden</td>
					<td>f9r</td>
					<td><span class="conf">★★★★</span></td>
				</tr>
				<tr>
					<td><span class="eva">ycheor</span></td>
					<td><span class="heb-sm">יְ+כְּ+אוֹר</span></td>
					<td class="meaning">er wird wie Licht heilen</td>
					<td>f10r</td>
					<td><span class="conf">★★★★</span></td>
				</tr>
				<tr>
					<td><span class="eva">ykchor</span></td>
					<td><span class="heb-sm">יְ+כְּ+חֹר</span></td>
					<td class="meaning">er heilt die Pupille</td>
					<td>f11r P6</td>
					<td><span class="conf5">★★★★★</span></td>
				</tr>
				<tr>
					<td><span class="eva">ykchy</span></td>
					<td><span class="heb-sm">יְ+כְּ+הִי</span></td>
					<td class="meaning">er wird Blässe zeigen</td>
					<td>f11v P2</td>
					<td><span class="conf">★★★★</span></td>
				</tr>
				<tr>
					<td><span class="eva">ykaiin</span></td>
					<td><span class="heb-sm">יְ+כְּ+עַיִן</span></td>
					<td class="meaning">er heilt das Auge</td>
					<td>f14r P8</td>
					<td><span class="conf">★★★★</span></td>
				</tr>
				<tr style="color:var(--red)">
					<td><span class="eva">ykshol</span></td>
					<td><span class="heb-sm">יְ+כְּ+שׁוֹל</span></td>
					<td class="meaning">er wird zu Scheol gehen <em>(negativ)</em></td>
					<td>f15r P12</td>
					<td><span class="conf">★★★★</span></td>
				</tr>
				<tr style="opacity:.65;font-style:italic">
					<td><span class="eva">ykair</span></td>
					<td><span class="heb-sm">יְ+כְּ+אִיר</span></td>
					<td class="meaning">er heilt leuchtend <em style="font-size:.8em;opacity:.8">(Kandidat)</em></td>
					<td>f16r P1.3</td>
					<td><span class="conf">★★★</span></td>
				</tr>
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

  /* ── Schema diagram ─────────────────────────────────── */

  .schema {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: .6rem .5rem;
    margin-top: .85rem;
  }

  .schema-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .25rem;
    text-align: center;
    background: var(--parch-d);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: .55rem .9rem;
    min-width: 5rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .07);

    & .lbl {
      font-size: .62rem;
      font-family: var(--font-smallcaps);
      letter-spacing: .09em;
      text-transform: uppercase;
      color: var(--ink-f);
      line-height: 1.4;
    }
  }

  .schema-arrow {
    color: var(--ink-f);
    font-size: 1.1rem;
    flex-shrink: 0;
    margin: 0 .1rem;
    opacity: .55;
  }
</style>