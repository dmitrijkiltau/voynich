<script>
	import { RULES } from '$lib/grammar-rules-data.js';
	import { STATS } from '$lib';
</script>

<div class="summary">
	<div>
		<p class="dropcap">Das vorliegende Dokument fasst den aktuellen Stand der Entzifferungsanalyse des Voynich-Manuskripts zusammen. Es richtet sich an Hebraisten, Aramaisten und Kodikographen, die eine unabhängige Prüfung der vorgeschlagenen Übersetzungen vornehmen möchten.</p>
		<p>Die Grundhypothese: Das Voynich-Manuskript ist in <strong>Mischna-Hebräisch mit aramäischen Lehnpartikeln</strong> verfasst, verschlüsselt durch ein konsonantisches Alphabet mit Niqqud-Markierungen als Vokalhelfer. Die Texte folgen dem Schema eines <em>hippokratisch-mittelalterlichen Medizintraktats</em>: Diagnose → Symptombeschreibung → Therapieindikation → Prognose. Version 6.1 erweitert Quire C mit f18r/f18v (Bifolio bC2, Sprache A, Hand 1) und belegt die erste zoomorphe Begleitfigur im botanischen Corpus (Drache/Salamander, f18v). f18r identifiziert <em>Centaurea montana</em> (Berg-Flockenblume, Pupillen/Augenblässe) mit stärkstem Schlusskolophon in Quire C: <span class="eva">or·shaiin·cthor·okal·dar=</span>. f18v identifiziert <em>Dracunculus vulgaris</em> (Drachenwurz, Fieber + Blässe) mit <span class="eva">dom=</span> als erstmaligem Kolophon-Finale in Sprache A (R39). Version 6.2 konsolidiert diesen Bestand ohne neue Folio-Analysen und formalisiert vier methodische Härtungsmaßnahmen: drei harte Abbruchbedingungen (R40 Kurzwurzel-Konfidenzdeckel, R41 Präfix-Hierarchie-Protokoll, R42 Kongruenzpflicht ★★★★+) und zwei phonotaktische Warnsignale (D1/D2). Lexikalische Aktualisierung: <span class="eva">dy</span> von ★★★★ auf ★★ herabgestuft (R40: 2-Konsonanten-Kurzwurzel, Funktionswort-Ausnahme nicht bestätigt).</p>
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
							<li>R36–R39: <span class="eva">dar·dar</span>-Dopplung, qo-Präfix-Dopplung, {'{plant}'}-Anfangsposition, <span class="eva">dom=</span> in Spr. A ★★★</li>
						</ul>
					</td>
				</tr>
				<tr>
					<td>Methodische Härtung v6.2</td>
					<td>
						<ul>
							<li>R40 Kurzwurzel-Konfidenzdeckel — Basiswurzel ≤ 2 Konsonanten → max. ★★ (Ausnahmen: Funktionswort, Langwurzel-Anker)</li>
							<li>R41 Präfix-Hierarchie-Protokoll — drei harte Abbruchbedingungen für illegale Präfix-Kombinationen</li>
							<li>R42 Kongruenzpflicht ★★★★+ — Genus/Numerus-Kongruenz + Parallelbeleg als Pflichtkriterium</li>
							<li>D1/D2 Phonotaktische Warnsignale — Doppelkonsonanz- und Kehlkopf-Cluster-Flag (kein Hard Stop)</li>
							<li>Lexikon: <span class="eva">dy</span> ★★★★ → ★★ (R40; Funktionswort-Ausnahme unbestätigt)</li>
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
