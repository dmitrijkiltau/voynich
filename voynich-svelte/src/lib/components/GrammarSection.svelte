<script>
	const GRAMMAR_PREFIXES = [
		{ eva: 'qo-', heb: 'וְ',  fn: 'Vav conjunctive „und/auch"',              ex_eva: 'qokedam',  ex_heb: 'וְכְּדָּם',    stars: '★★★★',  is5: false },
		{ eva: 'o-',  heb: 'עַ',  fn: 'Ayin „auf/bei/von"',                      ex_eva: 'okol',     ex_heb: 'עַכֹּל',      stars: '★★★★',  is5: false },
		{ eva: 'l-',  heb: 'לְ',  fn: 'Lamed „zu/für/nach"',                     ex_eva: 'lchedy',   ex_heb: 'לְכְּדֵי',    stars: '★★★★',  is5: false },
		{ eva: 'd-',  heb: 'דְּ', fn: 'Dalet „von/aus/der"',                     ex_eva: 'dshedy',   ex_heb: 'דְּשֶׁדִּי',  stars: '★★★',   is5: false },
		{ eva: 'y-',  heb: 'יְ',  fn: 'Imperfekt 3. Pers. Sg. Mask.',            ex_eva: 'yshdal',   ex_heb: 'יְשַׁדַּל',   stars: '★★★★',  is5: false },
		{ eva: 't-',  heb: 'תָּ', fn: 'Imperfekt 3. Pers. Sg. Fem. / 2. Pers.', ex_eva: 'taiir',    ex_heb: 'תָּאִיר',     stars: '★★★★',  is5: false },
	];

	const GRAMMAR_SUFFIXES = [
		{ eva: '-dy',   heb: 'דִּי',         fn: 'Aramäisch: Genitiv/Relativ „von/dessen"',               stars: '★★★★',  is5: false },
		{ eva: '-dam',  heb: 'דָּם',         fn: '„Blut" — Zeilenabschluss-Refrain in f57r',             stars: '★★★★★', is5: true },
		{ eva: '-dal',  heb: 'דַּל',         fn: '„schwach/dünn" — Diagnose-Refrain',                    stars: '★★★★',  is5: false },
		{ eva: '-aiin', heb: 'עַיִן', fn: '„Auge" — diagnostischer Terminus in Suffixposition', stars: '★★★★',  is5: false },
	];
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
	<div class="box-title">Prognose-Schema (hippokratisch-mittelalterlich)</div>
	<p style="margin-bottom:.5rem;font-size:.92rem">Jeder vollständige Paragraph folgt dem Schema:</p>
	<div class="schema">
		<div class="schema-step">
			<span class="heb-sm">דִּין</span>
			<span class="lbl">Urteilseröffnung</span>
		</div>
		<span class="schema-arrow">→</span>
		<div class="schema-step">
			<span class="heb-sm">כְּהִי · דַּל · דָּם</span>
			<span class="lbl">Symptombeschreibung</span>
		</div>
		<span class="schema-arrow">→</span>
		<div class="schema-step">
			<span class="heb-sm">שַׂר עַל</span>
			<span class="lbl">Arzt-Indikation</span>
		</div>
		<span class="schema-arrow">→</span>
		<div class="schema-step">
			<span class="heb-sm">אוֹר · שְׁאוֹל</span>
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
    gap: .5rem;
    margin-top: .7rem;
  }

  .schema-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .2rem;
    text-align: center;

    & .lbl {
      font-size: .68rem;
      font-family: var(--font-smallcaps);
      letter-spacing: .08em;
      color: var(--ink-f);
    }
  }

  .schema-arrow {
    color: var(--border);
    font-size: 1.2rem;
    margin: 0 .2rem;
  }
</style>