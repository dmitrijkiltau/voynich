<script>
	const COMPARISON = [
		{ feature: 'Kernvokabular',       langB: 'sheol, daiin, dal, ckhy, dam, sar, or',                       langA: 'Identisch — alle 10 Ankerwörter je Folio bestätigt' },
		{ feature: 'Dominanter Vokal',    langB: 'e / ee (Segol/Ṣere)',                                         langA: 'o (Ḥolam) häufiger; dol statt dal, ckho neben ckhy' },
		{ feature: 'Struktur',            langB: 'Prosa ohne Bildtrennmarker',                                   langA: '{plant}-Marker teilt jeden Paragraphen (R14)' },
		{ feature: 'Kolophon-Inventar',   langB: 'cphedom=, daiin·cheeodam',                                    langA: 'kaiim=, dom=, daiin=, chckhan=, Kurztitel (R23)' },
		{ feature: 'Verbparadigma',       langB: 'taiir, yshdal',                                               langA: 'ykchaiin, ycheor, ychor, ytchody — vollständiger' },
		{ feature: 'Quire-Grenze',        langB: 'Quire A → B (f8v → f9r):',                                    langA: 'textlich unsichtbar — identische Ankerverteilung' },
	];

	const FOLIOS = [
		{ folio: 'f1v',  plant: 'Belladonna',           signal: 'shol 5×, pol (Beere), otoaiin (Pupille)',                               stars: '★★★★★', is5: true  },
		{ folio: 'f2r',  plant: 'Kornblume (Augenwasser)', signal: 'ytoain=, saiin, aiin 8+ Komposita',                                  stars: '★★★★★', is5: true  },
		{ folio: 'f2v',  plant: 'Seerose',               signal: 'shty (Trank), chokeos (Kelch)',                                        stars: '★★★★',  is5: false },
		{ folio: 'f3r',  plant: 'Blutpflanze (Polygonum)', signal: 'dam 4×, damo 2×, sheoldam — höchste Blutdichte',                     stars: '★★★★★', is5: true  },
		{ folio: 'f4r/v',plant: 'Geranium-Typ',          signal: 'shol·chaiin (abwägend)',                                               stars: '★★★★',  is5: false },
		{ folio: 'f5r',  plant: 'Mandragora',            signal: 'shodaiin 4× pro Satz (narkotisch-toxisch)',                            stars: '★★★★',  is5: false },
		{ folio: 'f6r',  plant: 'Schlafmohn',            signal: 'alle drei shol-Formen; kaiim=',                                        stars: '★★★★',  is5: false },
		{ folio: 'f6v',  plant: 'Blaue Distel',          signal: 'sar-Öffner; dom=; lor (Heilungsrichtung)',                             stars: '★★★★',  is5: false },
		{ folio: 'f7r',  plant: 'Seerose (Nymphaea)',    signal: 'sheey 3× (positiv)',                                                   stars: '★★★★',  is5: false },
		{ folio: 'f7v',  plant: 'Lungenkraut',           signal: 'otshol · sheodaiin · lshol — dichteste Todesformeln',                  stars: '★★★★★', is5: true  },
		{ folio: 'f8r',  plant: 'Aronstab (Arum)',       signal: 'chor 6×, shol 5×; shol·kaiin×4 + kaiim=',                             stars: '★★★★',  is5: false },
		{ folio: 'f8v',  plant: 'Röhrenblüter / Lungenkraut', signal: 'saiin; chol·chol·chol; daiin= (Quire-Ende)',                      stars: '★★★★',  is5: false },
		{ folio: 'f9r',  plant: 'Sauerampfer (Rumex)',   signal: 'or·chaiin (positiv); dsholdy; chkar=',                                 stars: '★★★★',  is5: false },
		{ folio: 'f9v',  plant: 'Viola tricolor',        signal: 'chkaiin·ckhy·chor= (Diagnosekolophon); daiin 7×',                      stars: '★★★★★', is5: true  },
		{ folio: 'f10r', plant: 'Wegwarte (Cichorium)',  signal: 'Prognose-Tetrade chaiin·ckhy·or·aiin; chor 7×',                        stars: '★★★★',  is5: false },
		{ folio: 'f10v', plant: 'Convolvulus / Glockenblume', signal: 'daiin 8× (Rekord); shoiin×2; dsho=; chckhan=',                    stars: '★★★★',  is5: false },
		{ folio: 'f11r', plant: 'Lungenkraut-Typ II',   signal: 'ykchor·dair·ycheor (Pupillenheilung-Tripel); positiver Kolophon',       stars: '★★★★',  is5: false },
		{ folio: 'f11v', plant: 'Kräuter-Komplex',      signal: 'chkaiin·ckhy·chor= (Diagnosekolophon, 2. Beleg); odl·chaiin',           stars: '★★★★',  is5: false },
		{ folio: 'f13r', plant: 'Großer Alant (Inula helenium)', signal: 'torshor (NEU); pchy 4× — Atemweg-Rekord; shol×2; Doppelkolophon', stars: '★★★',   is5: false },
		{ folio: 'f13v', plant: 'Schachtelhalm-Typ (Equisetum)', signal: '9 × {plant}-Marker (Rekord Quire B); qoky·daiin= (Minikolophon)', stars: '★★★',   is5: false },
	];
</script>

<div class="sprache-a">
	<div class="box hl">
		<div class="box-title">Sprache A vs. B — Hauptunterschiede</div>
		<table class="dt">
			<thead>
				<tr><th>Merkmal</th><th>Sprache B (f57r, f103r)</th><th>Sprache A (f1v–f10v)</th></tr>
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

	<h3>Quire A — Botanische Kohärenz (alle Folios)</h3>
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
						<td><span class={f.is5 ? 'conf5' : 'conf'}>{f.stars}</span></td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>

	<div class="box green conclusion">
		<div class="box-title">Schlussfolgerung: Sprache A = Sprache B, dialektale Variante</div>
		<p style="margin:0;font-size:.92rem">Die Sprachen A und B sind dialektale Varianten desselben Mischna-Hebräisch/Aramäisch-Systems: A hat höhere o-Vokalfrequenz (Ḥolam), B mehr e-Vokale (Segol/Ṣere). Textgenre, Prognose-Schema, Präfix-System und Kolophon-Konventionen sind identisch. Die Quire-Grenze A→B (f8v→f9r) ist textlich unsichtbar. Das Werk ist als Einheit konzipiert.</p>
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
	}
</style>
