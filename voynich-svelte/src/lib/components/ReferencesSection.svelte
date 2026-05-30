<script>
	let { onInsert } = $props();
</script>

<div class="references">
  <div>
    <h3>1 · f57r P.9 — Die stärkste Ankersequenz</h3>
    <div class="box blue ref-card">
      <div class="layer-eva">sar · al · daiindy</div>
      <div class="layer-heb">דִּין דִּי &nbsp;·&nbsp; עַל &nbsp;·&nbsp; שַׂר</div>
      <div class="layer-en">"Arzt über — das Urteil dessen"</div>
      <p class="ref-note">
        Drei unabhängig bestätigte Wörter + aramäischer Genitiv-Suffix in natürlicher Wortfolge.
        <span class="conf5">★★★★★</span>
      </p>
      <button class="ref-insert-btn" onclick={() => onInsert('sar al daiindy')}>In Übersetzer laden</button>
    </div>
  </div>

  <div>
    <h3>2 · f103r P.23 — Fünf-Wort-Prognose</h3>
    <div class="box blue ref-card">
      <div class="layer-eva">daiin · sheckhy · lchedy · chckhy · shol</div>
      <div class="layer-heb">שְׁאוֹל · כְּכְּהִי · לְכְּדֵי · שֶׁכְּהִי · דִּין</div>
      <div class="layer-en">"Das Urteil: [der,] der Blässe zeigt — um [sie] zu behandeln — wie Blässe — Scheol."</div>
      <p class="ref-note">
        Vollständiges hippokratisches Prognose-Schema in fünf Wörtern.
        <span class="conf5">★★★★★</span>
      </p>
      <button class="ref-insert-btn" onclick={() => onInsert('daiin sheckhy lchedy chckhy shol')}>In Übersetzer laden</button>
    </div>
  </div>

  <div>
    <h3>3 · f103r P.17 — Binäre Prognose-Formel</h3>
    <div class="box blue ref-card">
      <div class="layer-eva">… or · aiin</div>
      <div class="layer-heb">אַיִן · אוֹר</div>
      <div class="layer-en">"Licht — Nichts."</div>
      <p class="ref-note">
        Zeilenende-Formel: binäre Prognose (Heilung oder Ausweg-los), identisch mit hippokratisch-arabischem Prognostikon-Schema.
      </p>
      <button class="ref-insert-btn" onclick={() => onInsert('or aiin sheol daiin')}>In Übersetzer laden</button>
    </div>
  </div>

  <div>
    <h3>4 · f6v/f7v — Direktionales Antonymenpaar</h3>
    <div class="box green ref-card">
      <div class="antonym-grid">
        <div>
          <div class="layer-eva">lor</div>
          <div class="layer-heb">לְאוֹר</div>
          <div class="layer-en" style="font-size:.9rem">"zum Licht / zur Heilung"</div>
        </div>
        <div>
          <div class="layer-eva">lshol</div>
          <div class="layer-heb">לְשׁוֹל</div>
          <div class="layer-en" style="font-size:.9rem">"zum Tod / zu Scheol"</div>
        </div>
      </div>
      <p class="ref-note" style="margin-top:.6rem">
        Identische l-Direktional-Morphologie, entgegengesetzte Semantik. Hauptneufund v5.2.
        <span class="conf5">★★★★★</span>
      </p>
      <button class="ref-insert-btn" onclick={() => onInsert('lor lshol kaiim')}>In Übersetzer laden</button>
    </div>
  </div>

  <div>
    <h3>5 · f103r P.42 — Sterbens-Terminologie</h3>
    <div class="box blue ref-card">
      <div class="layer-eva">tshey · sheol · cheolshy · chalal</div>
      <div class="layer-heb">חָלָל · [כְּעוֹלְשִׁי] · שְׁאוֹל · תְּשֵׁי</div>
      <div class="layer-en">"Erschöpfung — Scheol — [wie die Last] — der Sterbende."</div>
      <p class="ref-note">
        Dreifache Prognose: Erschöpfung → Tod → Patient im Sterben. <span class="eva">chalal</span> erscheint ausschließlich <em>nach</em> sheol.
      </p>
      <button class="ref-insert-btn" onclick={() => onInsert('tshey sheol cheolshy chalal')}>In Übersetzer laden</button>
    </div>
  </div>

  <div>
    <h3>6 · f11r P.6 / f11v P.6 — Pupillenheilung &amp; positiver Kolophon</h3>
    <div class="box green ref-card">
      <div class="antonym-grid">
        <div>
          <div class="layer-eva">odl · chaiin · ykchor · dair</div>
          <div class="layer-heb">דְּ+אִיר · יְ+כְּ+חֹר · חַיִּין · עַ+דַּל</div>
          <div class="layer-en" style="font-size:.9rem">"Über die Schwäche — Leben — er heilt die Pupille — der Leuchtende."</div>
        </div>
        <div>
          <div class="layer-eva">ycheor · dor · schold=</div>
          <div class="layer-heb">שׁ+כֹּ+לֵד · דּוֹר · יְ+כְּ+אוֹר</div>
          <div class="layer-en" style="font-size:.9rem">"Er wird wie Licht heilen — Generation — [Schlussformel]."</div>
        </div>
      </div>
      <p class="ref-note" style="margin-top:.6rem">
        Erster Beleg von <span class="eva">ykchor</span> (er heilt die Pupille — 4. Verb im y+k+[Terminus]-Paradigma) und von <span class="eva">ycheor=</span> als positivem Schluss-Kolophon. f11v (Borago-Typ) ist das positivste Prognosefolio in Quire B.
        <span class="conf5">★★★★★</span>
      </p>
      <button class="ref-insert-btn" onclick={() => onInsert('odl chaiin ykchor dair ycheor')}>In Übersetzer laden</button>
    </div>
  </div>

  <div>
    <h3>7 · f14r P.8 / f14v P.8 — y+k-Paradigma &amp; Blut-Triade</h3>
    <div class="box green ref-card">
      <div class="antonym-grid">
        <div>
          <div class="layer-eva">ykaiin</div>
          <div class="layer-heb">יְ+כְּ+עַיִן</div>
          <div class="layer-en" style="font-size:.9rem">"er heilt das Auge" — 5. y+k+Terminus-Verb</div>
        </div>
        <div>
          <div class="layer-eva">dol · dair · dam</div>
          <div class="layer-heb">דֶּוֶה · דְּ+אִיר · דָּם</div>
          <div class="layer-en" style="font-size:.9rem">"Schmerz — das Licht davon — Blut"</div>
        </div>
      </div>
      <p class="ref-note" style="margin-top:.6rem">
        <span class="eva">ykaiin</span> vervollständigt das y+k+[Terminus]-Paradigma auf fünf klinische Verbformen (Leben, Licht, Pupille, Blässe, Auge). Die Blut-Triade <span class="eva">dol·dair·dam</span> (f14v P.8) ist der erste <span class="eva">dam</span>-Beleg in Quire B und verbindet f14v mit f3r (Blutpflanze).
        <span class="conf5">★★★★★</span>
      </p>
      <button class="ref-insert-btn" onclick={() => onInsert('ykaiin dol dair dam')}>In Übersetzer laden</button>
    </div>
  </div>

  <div>
    <h3>8 · f15r / f15v — Bifolio bB2 Abschluss</h3>
    <div class="box green ref-card">
      <div class="antonym-grid">
        <div>
          <div class="layer-eva">qotchor · chaiin · chy · kol · daky=</div>
          <div class="layer-heb">קוֹ+תְּ+כֹּר · חַיִּין · כְּהִי · כֹּל · דַּכִּי=</div>
          <div class="layer-en" style="font-size:.9rem">f15r Kolophon: "Zeichen der Pupille — Leben — Blässe — alles — Reinheit" <em>(positiv-ambivalent)</em></div>
        </div>
        <div>
          <div class="layer-eva">daiin · cthor · chol · chor=</div>
          <div class="layer-heb">דִּין · כְּ+תֹּר · כֹּל · כֹּר=</div>
          <div class="layer-en" style="font-size:.9rem">f15v Kolophon: "Urteil — vollständige Heilung — alles — Pupille" <em>(positiv)</em></div>
        </div>
      </div>
      <p class="ref-note" style="margin-top:.6rem">
        <span class="eva">soloiin</span> (f15v P.11) = „Arznei für das Auge" — therapeutisch präzisestes Kompositum im Gesamtkorpus. <span class="eva">ykshol</span> (f15r P.12) = erster negativer y+k+Terminus — Paradigma mit 6 Gliedern + Kandidat <span class="eva">ykair</span>. Bifolio bB2 (f10r/f10v/f15r/f15v) schließt konsistentes ophthalmologisches Programm ab.
        <span class="conf5">★★★★★</span>
      </p>
      <button class="ref-insert-btn" onclick={() => onInsert('soloiin sor cthor chor')}>In Übersetzer laden</button>
    </div>
  </div>

  <div>
    <h3>9 · f16r / f16v — Bifolio bB1 · Quire-B-Abschluss <span class="new-badge">Neu v5.8</span></h3>
    <div class="box green ref-card">
      <div class="antonym-grid">
        <div>
          <div class="layer-eva">saiin · ytaiin=</div>
          <div class="layer-heb">יְ+תָּ+עַיִן &nbsp;·&nbsp; שַׂעַיִן</div>
          <div class="layer-en" style="font-size:.9rem">f16r Mini-Kolophon: "Augenarzt — er wird das Auge heilen" <em>(positiv)</em></div>
        </div>
        <div>
          <div class="layer-eva">sokar · oaorar=</div>
          <div class="layer-heb">עַ+אַ+אוֹר+אָר &nbsp;·&nbsp; שׂ+אוֹ+כְּ+אָר</div>
          <div class="layer-en" style="font-size:.9rem">f16v Quire-Kolophon: "Heilungs-Arzt des Lichts — auf das Licht der Heilung" <em>(positiv)</em></div>
        </div>
      </div>
      <p class="ref-note" style="margin-top:.6rem">
        <span class="eva">tchor</span> (תְּ+חֹר) — fem. Pupillen-Heilungsverb, zwei Belege in bB1 bestätigt ★★★★. <span class="eva">chkar·chkar</span> (f16v P.6) — erste Doppel-Untersuchungsformel im Corpus. Bifolio bB1 (f9r/f9v/f16r/f16v) vollständig — Quire B abgeschlossen; erster rein positiver Quire-Abschluss im analysierten Corpus.
        <span class="conf5">★★★★★</span>
      </p>
      <button class="ref-insert-btn" onclick={() => onInsert('saiin ytaiin sokar oaorar')}>In Übersetzer laden</button>
    </div>
  </div>
</div>


<style>
  .references {
    display: flex;
    flex-wrap: wrap;
    gap: 0 2rem;

    & > div {
      flex: 1 1 480px;
    }
  }

	.ref-card {
		position: relative;
	}

	.ref-note {
		margin: .5rem 0 0;
		font-size: .82rem;
		color: var(--ink-f);
	}

	.ref-insert-btn {
		margin-top: .7rem;
		font-family: var(--font-smallcaps);
		font-size: .65rem;
		letter-spacing: .1em;
		text-transform: uppercase;
		color: var(--blue);
		background: rgba(28, 61, 90, .06);
		border: 1px solid rgba(28, 61, 90, .25);
		border-radius: 2px;
		padding: .25rem .7rem;
		cursor: pointer;
		transition: all .15s;

		&:hover {
			background: rgba(28, 61, 90, .12);
			border-color: var(--blue);
		}
	}

	.antonym-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
</style>
