<script>
	import { RULES } from '$lib/grammar-rules-data.js';
	import { STATS } from '$lib';
</script>

<div class="summary">
	<div>
		<p class="dropcap">Das vorliegende Dokument fasst den aktuellen Stand der Entzifferungsanalyse des Voynich-Manuskripts zusammen. Es richtet sich an Hebraisten, Aramaisten und Kodikographen, die eine unabhängige Prüfung der vorgeschlagenen Übersetzungen vornehmen möchten.</p>
		<p>Die Grundhypothese: Das Voynich-Manuskript ist in <strong>Mischna-Hebräisch mit aramäischen Lehnpartikeln</strong> verfasst, verschlüsselt durch ein konsonantisches Alphabet mit Niqqud-Markierungen als Vokalhelfer. Die Texte folgen dem Schema eines <em>hippokratisch-mittelalterlichen Medizintraktats</em>: Diagnose → Symptombeschreibung → Therapieindikation → Prognose. Version 6.1 erweitert Quire C mit f18r/f18v (Bifolio bC2, Sprache A, Hand 1) und belegt die erste zoomorphe Begleitfigur im botanischen Corpus (Drache/Salamander, f18v). f18r identifiziert <em>Centaurea montana</em> (Berg-Flockenblume, Pupillen/Augenblässe) mit stärkstem Schlusskolophon in Quire C: <span class="eva">or·shaiin·cthor·okal·dar=</span>. f18v identifiziert <em>Dracunculus vulgaris</em> (Drachenwurz, Fieber + Blässe) mit <span class="eva">dom=</span> als erstmaligem Kolophon-Finale in Sprache A (R39). Vier neue Grammatikregel-Kandidaten: R36 (dar·dar-Dopplung), R37 (qo-Präfix-Dopplung), R38 ({'{plant}'}-am-Anfang), R39 (dom= in Spr. A).</p>
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
					<td>Hauptneufunde v6.1</td>
					<td>
						<ul>
							<li>f18r: <em>Centaurea montana</em> — 2 =-Kolophone; stärkstes Schlusskolophon Quire C (<span class="eva">or·shaiin·cthor·okal·dar=</span>) ★★★★</li>
							<li>f18v: <em>Dracunculus vulgaris</em> — zoomorphe Drachen-Figur (Corpus-Erstbeleg bot. Abschnitt); <span class="eva">ykam</span>/<span class="eva">ytor</span> Auferstehungsverben ★★★★</li>
							<li>R36: <span class="eva">dar·dar</span> — Bilateral-/Intensiv-Dopplung (Erstbeleg f18r P.6) ★★★</li>
							<li>R37: qo-Präfix-Dopplung (<span class="eva">qokchy·qokchy</span>, <span class="eva">qoky·qoky</span>) — intensive Konnektivität (2 Belege f18v) ★★★</li>
							<li>R38: <span class="eva">{'{plant}'}</span>-Marker am Paragraphenanfang = Illustrations-Rahmung (Erstbeleg f18v P.10) ★★★</li>
							<li>R39: <span class="eva">dom=</span> als Kolophon-Finale in Sprache A — Erstbeleg f18v P.10 ★★★</li>
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
