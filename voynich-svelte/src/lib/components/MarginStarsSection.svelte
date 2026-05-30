<script>
	const STAR_TYPES = [
		{ type: 'Rot',         morph: 'Gefüllte rote Mitte, 6–8 Zacken',  fn: 'Falleröffnung / Akutphase',                              stars: '★★★',  is5: false },
		{ type: 'Leer',        morph: 'Hohle Mitte, Umrandung',            fn: 'Krisenphase / Verlauf (sheol-Vokabular häufig)',          stars: '★★★',  is5: false },
		{ type: 'Punkt',       morph: 'Kleiner Mittelpunkt',               fn: 'Abschlussnotiz / Prognose (stärkstes sheol·chalal)',      stars: '★★★',  is5: false },
		{ type: 'Beige',       morph: 'Pergamentfarbene Mitte',            fn: 'Zweite Seitenhälfte (ab P.27 f103r); schwerste Fälle',   stars: '★★',   is5: false },
		{ type: 'Sonderstern', morph: '8 Zacken + Schleife',               fn: 'Registerabschluss (f103r P.52, f114v P.1)',               stars: '★★★',  is5: false },
	];

	const FOLIOS = [
		{ folio: 'f103r/v', principle: 'Spärlich (19/54 Para.); sternlos = positiver Ausgang', note: 'Inclusio P.1↔P.52; beige Zone ab P.27' },
		{ folio: 'f116r',   principle: 'Regelmäßige ~3er-Gruppen (P.1–P.30); danach sternlose Sektion', note: 'Transkriptor: „End of starred paragraphs"' },
		{ folio: 'f114v',   principle: 'Strikt alternierend Beige–Rot–Beige–Rot', note: 'Paarstruktur; Schleifenlänge als zweite Dimension' },
		{ folio: 'f115r/v', principle: 'Überwiegend 8-zackig mit Schleife', note: 'Stark ch-dominiertes Vokabular — anderes Register' },
	];
</script>

<div class="randstern">
	<p>Auf Quire-T-Seiten (f103r/v, f114v, f115r/v, f116r) markieren handgezeichnete Sternzeichen am linken Rand einzelne Paragraphen. Das System ist unabhängig vom Zeichenmapping analysierbar.</p>

	<div class="box hl or-rule">
		<div class="box-title">Kernbefund: or-Regel (★★★★)</div>
		<p style="margin:0">Paragraphen mit positivem Prognose-Vokabular (<span class="eva">or</span>, <span class="eva">lor·aiin</span>, <span class="eva">olor</span>) tragen auf f103r/v <strong>niemals</strong> einen Randstern. Alle fünf or-Paragraphen auf f103v sind sternlos (5/5). Statistisch nicht zufällig (p &lt; 0,01).</p>
	</div>

	<h3>Sterntypen und Funktionen</h3>
	<table class="dt">
		<thead>
			<tr><th>Typ</th><th>Morphologie</th><th>Funktion</th><th>Konf.</th></tr>
		</thead>
		<tbody>
			{#each STAR_TYPES as s}
				<tr>
					<td><strong>{s.type}</strong></td>
					<td class="note-cell">{s.morph}</td>
					<td class="note-cell">{s.fn}</td>
					<td><span class="conf">{s.stars}</span></td>
				</tr>
			{/each}
		</tbody>
	</table>

	<h3>Dreischritt-Schema (f103r)</h3>
	<p>Die Sternsequenz folgt einem quasi-periodischen Trio <strong>Rot → Leer → Punkt</strong> (viermal vollständig), das einem klassischen medizinischen Dreischritt entspricht:</p>
	<div class="schema">
		<div class="schema-step schema-step--red">
			<span class="star-icon star-icon--red">★</span>
			<span class="lbl"><strong>Rot</strong> — Falleröffnung<br>Anamnese</span>
		</div>
		<span class="schema-arrow">→</span>
		<div class="schema-step">
			<span class="star-icon">☆</span>
			<span class="lbl"><strong>Leer</strong> — Verlauf<br>Krise</span>
		</div>
		<span class="schema-arrow">→</span>
		<div class="schema-step schema-step--gold">
			<span class="star-icon star-icon--gold">✦</span>
			<span class="lbl"><strong>Punkt</strong> — Abschluss<br>Prognose</span>
		</div>
	</div>

	<div class="box blue inclusio">
		<div class="box-title">Strukturelle Inclusio: P.1 ↔ P.52 (f103r)</div>
		<p style="margin:0;font-size:.92rem">P.1 öffnet mit <span class="eva">pchedal · dal · yshdal</span> (dreifach „der Schwache"). P.52 — markiert mit dem einzigen Sonderstern der Seite — beginnt ebenfalls mit <span class="eva">pchedal</span>. Diese bewusste literarische Rahmung ist ein Kompositionsmerkmal mittelalterlicher Medizintraktate.</p>
	</div>

	<h3>Folio-übergreifender Vergleich</h3>
	<table class="dt">
		<thead>
			<tr><th>Folio</th><th>Sternprinzip</th><th>Besonderheit</th></tr>
		</thead>
		<tbody>
			{#each FOLIOS as f}
				<tr>
					<td class="folio-cell">{f.folio}</td>
					<td class="note-cell">{f.principle}</td>
					<td class="note-cell">{f.note}</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.or-rule {
		margin-bottom: 1.2rem;
	}

	.note-cell {
		color: var(--ink-f);
		font-size: .82rem;
	}

	.folio-cell {
		font-family: var(--font-mono);
		color: var(--ink-f);
		font-size: .82rem;
		white-space: nowrap;
	}

	/* ── Schema ─────────────────────────────────────────── */

	.schema {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: .6rem .5rem;
		margin: .85rem 0 1.2rem;
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
		min-width: 6rem;
		box-shadow: 0 1px 3px rgba(0, 0, 0, .07);

		&.schema-step--red  { background: rgba(122, 28, 28, .08); border-color: var(--red); }
		&.schema-step--gold { background: rgba(154, 122, 42, .08); border-color: var(--gold); }

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
		opacity: .55;
	}

	.star-icon {
		font-size: 1.2rem;
		color: var(--ink-f);

		&.star-icon--red  { color: var(--red); }
		&.star-icon--gold { color: var(--gold); }
	}

	.inclusio {
		margin-top: 1rem;
	}
</style>
