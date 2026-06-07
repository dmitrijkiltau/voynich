<script>
	import { STAR_TYPES, FOLIOS } from '$lib/margin-stars-data.js';
</script>

<div class="randstern">
	<p>Auf Quire-T-Seiten (f103r/v, f114v, f115r/v, f116r) markieren handgezeichnete Sternzeichen am linken Rand einzelne Paragraphen. Das System ist unabhängig vom Zeichenmapping analysierbar.</p>

	<div class="box hl or-rule">
		<div class="box-title">Kernbefund: or-Regel (★★★★)</div>
		<p style="margin:0">Paragraphen mit positivem Prognose-Vokabular (<span class="eva">or</span>, <span class="eva">lor·aiin</span>, <span class="eva">olor</span>) tragen auf f103r/v <strong>niemals</strong> einen Randstern. Alle fünf or-Paragraphen auf f103v sind sternlos (5/5). Statistisch nicht zufällig (p &lt; 0,01).</p>
	</div>

	<h3>Sterntypen und Funktionen</h3>
	<div class="table-wrap">
		<table class="dt">
			<thead>
				<tr><th>Typ</th><th>Morphologie</th><th>Funktion</th><th>Konf.</th></tr>
			</thead>
			<tbody>
				{#each STAR_TYPES as s (s.type)}
					<tr>
						<td><strong>{s.type}</strong></td>
						<td class="note-cell">{s.morph}</td>
						<td class="note-cell">{s.fn}</td>
						<td><span class="conf">{s.stars}</span></td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

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
	<div class="table-wrap">
		<table class="dt">
			<thead>
				<tr><th>Folio</th><th>Sternprinzip</th><th>Besonderheit</th></tr>
			</thead>
			<tbody>
				{#each FOLIOS as f (f.folio)}
					<tr>
						<td class="folio-cell">{f.folio}</td>
						<td class="note-cell">{f.principle}</td>
						<td class="note-cell">{f.note}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
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
