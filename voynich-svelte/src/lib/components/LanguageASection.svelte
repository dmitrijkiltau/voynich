<script>
	import { COMPARISON, FOLIOS } from '$lib/language-a-data.js';
	import { STATS, isConf5 } from '$lib';

	const plant = "{plant}";
</script>

<div class="sprache-a">
	<div class="box hl">
		<div class="box-title">Sprache A vs. B — Hauptunterschiede</div>
		<div class="table-wrap">
			<table class="dt">
				<thead>
					<tr><th>Merkmal</th><th>Sprache B (f57r, f103r)</th><th>Sprache A ({STATS.foliosA})</th></tr>
				</thead>
				<tbody>
					{#each COMPARISON as c}
						<tr>
							<td class="feature-cell">{c.feature}</td>
							<td class="note-cell">{c.langB}</td>
							<td class="note-cell">{c.langA}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>

	<h3>Quires A–D — Textkorpus (alle analysierten Folios)</h3>
	<div class="folio-wrap">
		<table class="dt">
			<thead>
				<tr><th>Folio</th><th>Pflanze</th><th>Textsignal</th><th>Konf.</th></tr>
			</thead>
			<tbody>
				{#each FOLIOS as f}
					<tr>
						<td class="folio-cell">{f.folio}</td>
						<td>{f.plant}</td>
						<td class="note-cell">{f.signal}</td>
						<td><span class={isConf5(f.stars) ? 'conf5' : 'conf'}>{f.stars}</span></td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<div class="box green conclusion">
		<div class="box-title">Schlussfolgerung: Sprache A = Sprache B — dialektale Variante</div>
		<p class="conclusion-intro">
			Die Sprachen A und B sind dialektale Varianten desselben Mischna-Hebräisch/Aramäisch-Systems:
			A hat höhere o-Vokalfrequenz (Ḥolam), B mehr e-Vokale (Segol/Ṣere).
			Textgenre, Prognose-Schema, Präfix-System und Kolophon-Konventionen sind identisch —
			die Quire-Grenze A→B (f8v→f9r) ist textlich unsichtbar. Das Werk ist als Einheit konzipiert.
		</p>
		<ul>
			<li>
				<strong>Quire C vollständig (f17r–f21v, bC1–bC4, 16/16):</strong>
				<span class="eva">qo-</span>-Präfix emergierend (R33 ★★★: bC1 ~5 %, bC2 ~4–5 %, bC3 ~10 %);
				<span class="eva">sheol</span> Vollform Spr. A (R34); qo-Dopplung (R37);
				<span class="eva">dom=</span> Kolophon-Finale (R39).
				bC3: erste daiin·daiin-Dopplung, 7-gliedrige y+t-Litanei (R49), <span class="eva">ytor</span> → ★★★★★.
				bC4: <span class="eva">cheol</span> ★★★★ (4. Beleg), R51 ★★★ (Illustrationszwickel), kompaktester Kolophon Corpus (f21v P.8).
			</li>
			<li>
				<strong>Quire K bK1 vollständig (f71r–f72r2):</strong>
				B-Register; R50 ★★★★ (ee/oo-Vokalklärung) + R52a ★★★★ (Determinans-y in Sternlabeln);
				75 Sternlabeln, 12/12 Ankerwörter (100 %); Doppel-Stier-Hypothese (f71v kalendarisch / f72r1 astromedizinisch).
			</li>
			<li>
				<strong>Bifolio bD1 (f25r–f25v):</strong>
				daiin-reichstes Bifolio Corpus — 4 Doppelurteile + 3×daiin in einer Zeile (f25v P.2, R58 ★★★ Kand.);
				<span class="eva">orchaiin=</span> ★★★★ (neue Kolophon-Formel);
				<em>Urtica dioica</em> (f25r) + <em>Chelidonium majus</em> mit Drachen-Motiv (f25v).
			</li>
			<li>
				<strong>Bifolio bD2 (f26r–f26v, Sprache B):</strong>
				Spr.-B-Einschub; oraiin ★★★★ + dar·dar R36 ★★★★ + qotedy·qotedy R37 ★★★★ je R43 erfüllt;
				stärkste Sequenz f26v P.4: <span class="eva">or·cheos·oraiin·okeo·chekaiin=</span> (Augenlicht-Kolophon ★★★★).
			</li>
			<li>
				<strong>Bifolio bD3 vollständig (f27r+f27v+f30r+f30v):</strong>
				f27r/v (v7.7): <em>Symphytum officinale</em> + <em>Leucanthemum vulgare</em>;
				R56 ★★★ validiert (<span class="eva">sho·sho</span>-Emphase).
				f30r (v8.1): <em>Polygonatum multiflorum</em>;
				R19 Typ E Corpus-Erstbeleg (<span class="eva">cheor·chey·cheor·chey</span>), chain + opchol ★★★ validiert.
				f30v (v8.1): <em>Urtica dioica</em>;
				dain ★★★ validiert, R28→<span class="eva">ytor</span> Kand.,
				<span class="eva">chokcheey</span> ★★★★ Kand. (Lebensvorschrift).
			</li>
			<li>
				<strong>Bifolio bD4 vollständig (f28r–f29v):</strong>
				ophthalmologischer Bogen —
				f28r: Diagnose Sehverlust (<em>Plantago major</em>, <span class="eva">ytchol·yteol·deaiin=</span>);
				f28v: Therapie Augenlicht (<em>Agrimonia eupatoria</em>, <span class="eva">sor·dar=</span> Heilerkolophon);
				f29r: Begleittherapie Blässe/Fieber (<em>Rumex crispus</em>, R15 Typ C Erstbeleg <span class="eva">shor·chor·sho</span>, shocthy+cheeol ★★★ validiert);
				f29v: Pharmakopöe Augenpflanzen (<em>Echium vulgare</em>, R35+ytchor ★★★★ + R59 ★★★ validiert).
			</li>
			<li>
				<strong>Quire D gesamt:</strong>
				Innenbifolios bD3+bD4 vollständig ✓ · bD1 (f25 ✓, f32 ausstehend) · bD2 (f26 ✓, f31 ausstehend)
				— <strong>12/16 Seiten analysiert (75 %)</strong>.
			</li>
		</ul>
	</div>
</div>

<style>
	.feature-cell {
		color: var(--ink-f);
		font-size: .85rem;
		white-space: nowrap;
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

	.folio-wrap {
		overflow-x: auto;
	}

	.conclusion {
		margin-top: 1.2rem;

		& .conclusion-intro {
			margin: 0 0 .6rem;
			font-size: .92rem;
		}

		& ul {
			margin: 0;
			padding-left: 1.2rem;
			display: flex;
			flex-direction: column;
			gap: .35rem;
		}

		& li {
			font-size: .88rem;
			line-height: 1.55;
		}
	}
</style>
