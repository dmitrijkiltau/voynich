<script>
	const GRAMMAR_PREFIXES = [
		{ eva: 'qo-', heb: 'וְ',  fn: 'Vav conjunctive „und/auch"',              ex_eva: 'qokedam',  ex_heb: 'וְכְּדָּם',    stars: '★★★★',  is5: false },
		{ eva: 'o-',  heb: 'עַ',  fn: 'Ayin „auf/bei/von"',                      ex_eva: 'okol',     ex_heb: 'עַכֹּל',      stars: '★★★★',  is5: false },
		{ eva: 'l-',  heb: 'לְ',  fn: 'Lamed „zu/für/nach"',                     ex_eva: 'lchedy',   ex_heb: 'לְכְּדֵי',    stars: '★★★★',  is5: false },
		{ eva: 'd-',  heb: 'דְּ', fn: 'Dalet „von/aus/der“',                     ex_eva: 'dsholdy',  ex_heb: 'דְּשׁוֹל+דִּי', stars: '★★★★★', is5: true  },
		{ eva: 'p-',  heb: 'פְּ', fn: 'Pe-Präfix (Nominalkonstrukt)',            ex_eva: 'pchedal',  ex_heb: 'פְּכֶּדַּל',    stars: '★★★',   is5: false },
		{ eva: 'y-',  heb: 'יְ',  fn: 'Imperfekt 3. Pers. Sg. Mask.',            ex_eva: 'yshdal',   ex_heb: 'יְשַׁדַּל',   stars: '★★★★',  is5: false },
		{ eva: 't-',  heb: 'תָּ', fn: 'Imperfekt 3. Pers. Sg. Fem. / 2. Pers.', ex_eva: 'taiir',    ex_heb: 'תָּאִיר',     stars: '★★★★',  is5: false },
	];

	const GRAMMAR_SUFFIXES = [
		{ eva: '-dy',   heb: 'דִּי',         fn: 'Aramäisch: Genitiv/Relativ „von/dessen"',               stars: '★★★★',  is5: false },
		{ eva: '-dam',  heb: 'דָּם',         fn: '„Blut" — Zeilenabschluss-Refrain in f57r',             stars: '★★★★★', is5: true },
		{ eva: '-dal',  heb: 'דַּל',         fn: '„schwach/dünn" — Diagnose-Refrain',                    stars: '★★★★',  is5: false },
		{ eva: '-aiin', heb: 'עַיִן', fn: '„Auge" — diagnostischer Terminus in Suffixposition', stars: '★★★★',  is5: false },		{ eva: '-ody',  heb: '+דִּי',  fn: 'Vokalhelfer + דִּי; Listenregister f57r P.3–P.4', stars: '★★★',   is5: false },	];
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
	<div class="box-title">Verb-Paradigma y+k+[Terminus] — vollständig ab f11r/f11v <span class="new-badge">Neu v5.4</span></div>
	<p style="margin-bottom:.5rem;font-size:.92rem">Alle vier klinischen Ankerbegriffe erhalten eine Verbform durch Präfix-Schichtung <span class="eva">y</span> + <span class="eva">k</span> + Terminus:</p>
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
		</tbody>
	</table>
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
    }
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