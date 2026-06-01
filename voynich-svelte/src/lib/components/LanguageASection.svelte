<script>
	import { COMPARISON, FOLIOS } from '$lib/language-a-data.js';
	import { STATS } from '$lib';
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

	<h3>Quires A–C — Textkorpus (alle analysierten Folios)</h3>
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
		<div class="box-title">Schlussfolgerung: Sprache A = Sprache B, dialektale Variante — Quire C: Progressionszone (bC4 vollständig — f17r–f21v, 10/16 Seiten)</div>
		<p style="margin:0;font-size:.92rem">Die Sprachen A und B sind dialektale Varianten desselben Mischna-Hebräisch/Aramäisch-Systems: A hat höhere o-Vokalfrequenz (Ḥolam), B mehr e-Vokale (Segol/Ṣere). Textgenre, Prognose-Schema, Präfix-System und Kolophon-Konventionen sind identisch. Die Quire-Grenze A→B (f8v→f9r) ist textlich unsichtbar. <strong>Quire C (f17–f20)</strong> zeigt B-Merkmale in Sprache-A-Texten mit folio-intern ansteigender Dichte: das <span class="eva">qo-</span>-Präfix tritt auf (bC1 ~5 %, bC2 ~4–5 %, bC3 ~10 % = Quire-H-äquivalent, R33-Erweiterung ★★★); <span class="eva">sheol</span> (Vollform) am Paragraphenende (R34 ★★★); qo-Dopplung <span class="eva">qokchy·qokchy</span> ab f18v (R37 ★★★); <span class="eva">dom=</span> als Kolophon-Finale Spr. A (R39 ★★★). Neu in bC3 (f19v): erste daiin·daiin-Dopplung, erste 7-gliedrige y+t-Verb-Litanei (R49 ★★★), <span class="eva">ytor</span> → ★★★★★. <strong>bC4 (f20r–f21v):</strong> therapeutisches Fenster (<span class="eva">dol·shol</span> + chor-Schlussparadigma R15), <span class="eva">cheol</span> ★★★→★★★★ (R43 definitiv erfüllt, 4. Beleg), Dreifache Licht-Formel f21r P.7 (R52 ★★ Kand.), kompaktester Kolophon Corpus f21v P.8, R51 ★★★ (2-Folio-Kand. f20v+f21v) — Bifolio bC4 vollständig abgeschlossen. <strong>Quire K (f71r–f72r2):</strong> B-Register dominiert (ee/oo per R50 ★★★★, qo-Muster) — Zodiak-Tetraptychon bK1 vollständig; R52a ★★★★ (Determinans-y in Sternlabeln); Doppel-Stier-Hypothese (f71v kalendarisch / f72r1 astromedizinisch). Das Werk ist als Einheit konzipiert.</p>
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
