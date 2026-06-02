<script>
	import { RULES } from '$lib/grammar-rules-data.js';
	import { STATS } from '$lib';

	const plant = '{plant}';
</script>

<div class="summary">
	<div>
		<p class="dropcap">Das vorliegende Dokument fasst den aktuellen Stand der Entzifferungsanalyse des Voynich-Manuskripts zusammen. Es richtet sich an Hebraisten, Aramaisten und Kodikographen, die eine unabhängige Prüfung der vorgeschlagenen Übersetzungen vornehmen möchten.</p>
		<p>Die Grundhypothese: Das Voynich-Manuskript ist in <strong>Mischna-Hebräisch mit aramäischen Lehnpartikeln</strong> verfasst, verschlüsselt durch ein konsonantisches Alphabet mit Niqqud-Markierungen als Vokalhelfer. Die Texte folgen dem Schema eines <em>hippokratisch-mittelalterlichen Medizintraktats</em>: Diagnose → Symptombeschreibung → Therapieindikation → Prognose.</p>
		<p>Version {STATS.version} {STATS.changelog}</p>
	</div>

	<div class="box hl">
		<div class="box-title">Kernbefunde — Version {STATS.version}</div>
		<table class="dt findings-table">
			<tbody>
				<tr><td>Identifizierte Sprache</td><td>Mischna-Hebräisch / Jüdisch-Aramäisch</td></tr>
				<tr><td>Texttyp</td><td>Medizinischer Traktat / Astronomisch-astrologisches Register — Pharmakopöe + Fixsternkatalog (f58r); f1r: deklarativer Haskama-Typ (sui generis)</td></tr>
				<tr><td>Analysierte Folios</td><td>{STATS.foliosAll}</td></tr>
				<tr><td>Bestätigte Wörter</td><td><strong>{STATS.lexicon}</strong> (★★★ oder höher)</td></tr>
				<tr><td>Rückwärtstest (Spr. B)</td><td>{STATS.backtestFraction} Vorhersagen bestätigt ({STATS.backtest}); 0 Falsch-Positive</td></tr>
				<tr><td>Sprache A Anker</td><td>{STATS.foliosA}: 10/10 Ankerwörter je Folio — <strong>100 %</strong> (Quires A+B vollständig, Quire C bC1–bC4, Quire D bD1)</td></tr>
				<tr><td>Grammatikregeln</td><td><strong>{RULES.length}</strong> ({STATS.validatedRules} validiert + {RULES.length - STATS.validatedRules} Kandidaten)</td></tr>
				<tr class="hidden-print">
					<td>Empirische Erweiterung v7.3</td>
						<td>
							<ul>
								<li>R53 ★★★★: 4. T-Klassen-Beleg <span class="eva">dair.otaiir.otosy=</span> f25r T.7 — Subtyp C (deskriptiv/identifikatorisch) etabliert; R43 Mehrfachbestätigung (4 Folios)</li>
								<li>R58 ★★★ Kand.: 3×daiin in einer Zeile — f25v P.2 (Corpus-Erstbeleg: <span class="eva">dchor.cthor.chor.daiin.s.okeeaiin.daiin.ckhey.daiin</span>)</li>
								<li><span class="eva">otaiir</span> → ★★★★★ Kand.: Zweitbeleg f25r T.7 bestätigt R43-Pflicht; stärkster ot-Kompositum-Kandidat im Corpus</li>
								<li><span class="eva">orchaiin=</span> neue Kolophon-Abschlussformel ★★★★ (f25v P.7): or+chor/k+aiin = Licht-wie-Auge; strukturell reichste Kolophon-Formel bisher</li>
								<li>daiin-Dichte bD1: Corpus-Rekord — 4 Doppelurteile + 3×daiin in einer Zeile (f25v P.2); bD1 = daiin-reichstes Bifolio des gesamten Corpus</li>
								<li>7 neue Lexikoneinträge: <span class="eva">orchaiin, ckhear</span> (★★★★); <span class="eva">otosy, daiity, cheesees, qokoral, soshy</span> (★★★ Kand.)</li>
								<li>Lexikonstand >300-Meilenstein; Botanik: Urtica dioica ★★★★ (f25r) + Chelidonium majus ★★★★ (f25v, Drachen-Motiv); Quire D: 2/16 Seiten</li>
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
