<script>
	import { RULES } from '$lib/grammar-rules-data.js';
	import { STATS } from '$lib';
</script>

<div class="summary">
	<div>
		<p class="dropcap">Das vorliegende Dokument fasst den aktuellen Stand der Entzifferungsanalyse des Voynich-Manuskripts zusammen. Es richtet sich an Hebraisten, Aramaisten und Kodikographen, die eine unabhängige Prüfung der vorgeschlagenen Übersetzungen vornehmen möchten.</p>
		<p>Die Grundhypothese: Das Voynich-Manuskript ist in <strong>Mischna-Hebräisch mit aramäischen Lehnpartikeln</strong> verfasst, verschlüsselt durch ein konsonantisches Alphabet mit Niqqud-Markierungen als Vokalhelfer. Die Texte folgen dem Schema eines <em>hippokratisch-mittelalterlichen Medizintraktats</em>: Diagnose → Symptombeschreibung → Therapieindikation → Prognose. Version 5.6 schließt Bifolio bB3 (f14r/f14v) ab, vervollständigt das y+k+Terminus-Verbparadigma auf fünf Mitglieder und dokumentiert den ersten Blutpathologie-Befund in Quire B.</p>
	</div>

	<div class="box hl">
		<div class="box-title">Kernbefunde — Version {STATS.version}</div>
		<table class="dt findings-table">
			<tbody>
				<tr><td>Identifizierte Sprache</td><td>Mischna-Hebräisch / Jüdisch-Aramäisch</td></tr>
				<tr><td>Texttyp</td><td>Medizinischer Traktat — Pharmakopöe (Diagnose, Prognostik)</td></tr>
				<tr><td>Analysierte Folios</td><td>f1v–f14v (Quires A–B, Spr. A), f57r (Spr. B), f103r/v, f114v, f115r/v, f116r/v</td></tr>
				<tr><td>Bestätigte Wörter</td><td><strong>{STATS.lexicon}</strong> (★★★ oder höher)</td></tr>
				<tr><td>Rückwärtstest (Spr. B)</td><td>{STATS.backtestFraction} Vorhersagen bestätigt ({STATS.backtest}); 0 Falsch-Positive</td></tr>
				<tr><td>Sprache A Anker</td><td>f1v–f14v: 10/10 Ankerwörter je Folio — <strong>100 %</strong> (28 Seiten)</td></tr>
				<tr><td>Grammatikregeln</td><td><strong>{RULES.length}</strong> ({RULES.length - 1} validiert + 1 Kandidat)</td></tr>
				<tr>
					<td>Hauptneufunde v5.6</td>
					<td>
						<ul>
							<li><span class="conf5">ykaiin</span> (יְ+כְּ+עַיִן = er heilt das Auge) — 5. y+k+Terminus-Verb; Paradigma vollständig ★★★★</li>
							<li><span class="conf5">teor</span> (תְּ+אוֹר = sie wird heilen) — feminines Heilungsverb, Pendant zu taiir ★★★★</li>
							<li><span class="conf5">dol · dair · dam</span> — Blut-Triade f14v P.8; erster dam-Beleg Quire B ★★★★★</li>
							<li>Vier-Typen-Kolophon-Interface dokumentiert (bB3/bB4 vollständig)</li>
							<li><span class="conf5">dchckhy=</span> — Intensiv-Diagnosesiegel; chckhy 4. Korpus-Beleg</li>
							<li>R25 (Kandidat): <span class="conf5">dy×n</span> Genitivkette als Intensitätsskala</li>
							<li>24 neue Lexikoneinträge (112 → 136)</li>
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
