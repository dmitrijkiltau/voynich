<script>
	import { RULES } from '$lib/grammar-rules-data.js';
	import { STATS } from '$lib';
</script>

<div class="summary">
	<div>
		<p class="dropcap">Das vorliegende Dokument fasst den aktuellen Stand der Entzifferungsanalyse des Voynich-Manuskripts zusammen. Es richtet sich an Hebraisten, Aramaisten und Kodikographen, die eine unabhängige Prüfung der vorgeschlagenen Übersetzungen vornehmen möchten.</p>
		<p>Die Grundhypothese: Das Voynich-Manuskript ist in <strong>Mischna-Hebräisch mit aramäischen Lehnpartikeln</strong> verfasst, verschlüsselt durch ein konsonantisches Alphabet mit Niqqud-Markierungen als Vokalhelfer. Die Texte folgen dem Schema eines <em>hippokratisch-mittelalterlichen Medizintraktats</em>: Diagnose → Symptombeschreibung → Therapieindikation → Prognose. Version 5.7 schließt Bifolio bB2 (f15r/f15v) ab, vervollständigt das y+k+Terminus-Verbparadigma auf sechs Mitglieder (fünf positiv + ein negativer Terminus) und bestätigt den ophthalmologischen Charakter des gesamten Bifolios bB2.</p>
	</div>

	<div class="box hl">
		<div class="box-title">Kernbefunde — Version {STATS.version}</div>
		<table class="dt findings-table">
			<tbody>
				<tr><td>Identifizierte Sprache</td><td>Mischna-Hebräisch / Jüdisch-Aramäisch</td></tr>
				<tr><td>Texttyp</td><td>Medizinischer Traktat — Pharmakopöe (Diagnose, Prognostik)</td></tr>
				<tr><td>Analysierte Folios</td><td>f1v–f15v (Quires A–B, Spr. A), f57r (Spr. B), f103r/v, f114v, f115r/v, f116r/v</td></tr>
				<tr><td>Bestätigte Wörter</td><td><strong>{STATS.lexicon}</strong> (★★★ oder höher)</td></tr>
				<tr><td>Rückwärtstest (Spr. B)</td><td>{STATS.backtestFraction} Vorhersagen bestätigt ({STATS.backtest}); 0 Falsch-Positive</td></tr>
				<tr><td>Sprache A Anker</td><td>f1v–f15v: 10/10 Ankerwörter je Folio — <strong>100 %</strong> (30 Seiten)</td></tr>
				<tr><td>Grammatikregeln</td><td><strong>{RULES.length}</strong> ({RULES.length - 1} validiert + 1 Kandidat)</td></tr>
				<tr>
					<td>Hauptneufunde v5.7</td>
					<td>
						<ul>
							<li><span class="conf5">soloiin</span> (שׁוֹ+לְ+עַיִן = Arznei für das Auge) — therapeutisch präzisestes Kompositum im Gesamtkorpus ★★★★★</li>
							<li><span class="conf5">qotchor</span> (Zeichen der Pupille) — ophthalmologische Schlussformel bB2 ★★★★★</li>
							<li><span class="conf5">ykshol</span> (יְ+כְּ+שׁוֹל) — erster negativer y+k+Terminus; Paradigma mit 6 Gliedern vollständig ★★★★</li>
							<li><span class="conf5">cthor·chor=</span> — Heilungs-Abschlusskolophon f15v; positiver Bifolio-Abschluss bB2</li>
							<li>Bifolio bB2 (f10r/f10v/f15r/f15v) vollständig — konsistentes ophthalmologisches Programm ★★★</li>
							<li><em>Carlina acaulis</em> (f15r) und <em>Paris quadrifolia</em> (f15v) botanisch identifiziert ★★★★</li>
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
