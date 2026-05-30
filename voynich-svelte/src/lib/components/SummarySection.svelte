<script>
	import { RULES } from '$lib/grammar-rules-data.js';
	import { STATS } from '$lib';
</script>

<div class="summary">
	<div>
		<p class="dropcap">Das vorliegende Dokument fasst den aktuellen Stand der Entzifferungsanalyse des Voynich-Manuskripts zusammen. Es richtet sich an Hebraisten, Aramaisten und Kodikographen, die eine unabhängige Prüfung der vorgeschlagenen Übersetzungen vornehmen möchten.</p>
		<p>Die Grundhypothese: Das Voynich-Manuskript ist in <strong>Mischna-Hebräisch mit aramäischen Lehnpartikeln</strong> verfasst, verschlüsselt durch ein konsonantisches Alphabet mit Niqqud-Markierungen als Vokalhelfer. Die Texte folgen dem Schema eines <em>hippokratisch-mittelalterlichen Medizintraktats</em>: Diagnose → Symptombeschreibung → Therapieindikation → Prognose. Version 6.0 eröffnet Quire C mit f17r/f17v (Bifolio bC1, Sprache A, Hand 1) und belegt erstmals das <span class="eva">qo-</span>-Präfix in Sprache-A-Texten (13 Belege — R33 Kandidat ★★★) sowie <span class="eva">sheol</span> (Vollform) in Sprache A (R34 Kandidat). f17r identifiziert <em>Centaurea scabiosa</em> (Pupillen/Augenblässe) mit Corpus-Rekord: drei =-Kolophone auf einem Folio. f17v identifiziert <em>Tamus communis</em> (Fieber + Atemweg des Auges) mit 23 Paragraphen — neuem Kräuter-Rekord.</p>
	</div>

	<div class="box hl">
		<div class="box-title">Kernbefunde — Version {STATS.version}</div>
		<table class="dt findings-table">
			<tbody>
				<tr><td>Identifizierte Sprache</td><td>Mischna-Hebräisch / Jüdisch-Aramäisch</td></tr>
				<tr><td>Texttyp</td><td>Medizinischer Traktat — Pharmakopöe (Diagnose, Prognostik); f1r: deklarativer Haskama-Typ (sui generis)</td></tr>
				<tr><td>Analysierte Folios</td><td>{STATS.foliosAll}</td></tr>
				<tr><td>Bestätigte Wörter</td><td><strong>{STATS.lexicon}</strong> (★★★ oder höher)</td></tr>
				<tr><td>Rückwärtstest (Spr. B)</td><td>{STATS.backtestFraction} Vorhersagen bestätigt ({STATS.backtest}); 0 Falsch-Positive</td></tr>
				<tr><td>Sprache A Anker</td><td>{STATS.foliosA}: 10/10 Ankerwörter je Folio — <strong>100 %</strong> (Quires A+B vollständig, Quire C Eröffnung)</td></tr>
				<tr><td>Grammatikregeln</td><td><strong>{RULES.length}</strong> (24 validiert + {RULES.length - 24} Kandidaten)</td></tr>
				<tr>
					<td>Hauptneufunde v6.0</td>
					<td>
						<ul>
							<li>f17r: <em>Centaurea scabiosa</em> — 3 =-Kolophone (Corpus-Rekord); Augenpflanze mit Signaturenwurzel ★★★★</li>
							<li>f17v: <em>Tamus communis</em> — 23 Paragraphen (Kräuter-Rekord); <span class="eva">char</span> im Schlusskolophon bestätigt Fieber-Indikation ★★★</li>
							<li>R33: <span class="eva">qo-</span>-Präfix in Sprache A ab Quire C — 13 Belege; dialektale Übergangszone ★★★</li>
							<li>R34: <span class="eva">sheol</span> (Vollform) in Sprache A — Erstbeleg f17v P.13 ★★★</li>
							<li>R35: <span class="eva">chol·chol</span> — Vollheilungs-Emphase; R19-Erweiterung auf Nominalstämme ★★★</li>
						</ul>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>

<style>
  .summary {
    display: flex;
		justify-content: space-between;
    flex-wrap: wrap;
    gap: 0 2rem;

    & > div {
      flex: 0 1 680px;
    }
  }

	.findings-table td:first-child {
		color: var(--ink-f);
		font-size: .85rem;
		white-space: nowrap;
		width: 1%;
		padding-right: 1.2rem;
	}
</style>
