<script>
	import { COMPARISON, FOLIOS } from '$lib/language-a-data.js';
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
