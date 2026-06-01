<script>
	import { RULES } from '$lib/grammar-rules-data.js';
	import { STATS } from '$lib';
</script>

<div class="summary">
	<div>
		<p class="dropcap">Das vorliegende Dokument fasst den aktuellen Stand der Entzifferungsanalyse des Voynich-Manuskripts zusammen. Es richtet sich an Hebraisten, Aramaisten und Kodikographen, die eine unabhängige Prüfung der vorgeschlagenen Übersetzungen vornehmen möchten.</p>
		<p>Die Grundhypothese: Das Voynich-Manuskript ist in <strong>Mischna-Hebräisch mit aramäischen Lehnpartikeln</strong> verfasst, verschlüsselt durch ein konsonantisches Alphabet mit Niqqud-Markierungen als Vokalhelfer. Die Texte folgen dem Schema eines <em>hippokratisch-mittelalterlichen Medizintraktats</em>: Diagnose → Symptombeschreibung → Therapieindikation → Prognose.</p>
		<p>Version 6.7 wird ausgelöst durch f20r + f20v (Bifolio bC4 — innerstes Bifolio von Quire C, vollständig analysiert). Strukturelle Höhepunkte: <span class="eva">cheol</span> ★★ → ★★★ (R43 erfüllt durch botanischen Zweitbeleg f20r); neue Lexikoneinträge <span class="eva">cheey</span> + <span class="eva">dol·shol</span>; f20r = chor 6× + doppeltes chor-Schlussparadigma (R15); f20v = kompakteste Prognoseformel im Corpus (P.4, 5 Kernwörter); botanische Reihung f19v → f20v (*Scabiosa*-Gruppe) bestätigt bewusste thematische Sequenzierung in Quire C.</p>
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
				<tr><td>Sprache A Anker</td><td>{STATS.foliosA}: 10/10 Ankerwörter je Folio — <strong>100 %</strong> (Quires A+B vollständig, Quire C bC1–bC4)</td></tr>
				<tr><td>Grammatikregeln</td><td><strong>{RULES.length}</strong> (24 validiert + {RULES.length - 24} Kandidaten)</td></tr>
				<tr class="hidden-print">
					<td>Empirische Erweiterung v6.7</td>
					<td>
						<ul>
							<li><span class="eva">cheol</span> ★★ → ★★★: R43 erfüllt (f77r balneologisch + f20r botanisch als Zweitbeleg); genuine ח-ע-Cluster (R50 greift nicht)</li>
							<li>Neue Lexikoneinträge: <span class="eva">cheey</span> ★★★ (Leben/lebendig, Tsere-Variante von chey per R50; f20r P.13 Schlusskolophon) + <span class="eva">dol·shol</span> ★★★ (Schmerz-Scheol, therapeutisches Warnsignal Überdosierung; f20r P.7)</li>
							<li>f20r (<em>Astragalus glycyphyllos</em> ★★★): chor 6×, therapeutisches Fenster (dol·shol P.7 vs. chor·chor·cheey·tchey= P.13); R15 doppeltes chor-Schlussparadigma</li>
							<li>f20v (<em>Centaurea scabiosa</em> ★★★★): kompakteste Prognoseformel Corpus (P.4, 5 Kernwörter); botanische Reihung mit f19v (*Scabiosa*-Gruppe) = bewusste thematische Sequenzierung Quire C</li>
							<li>Quire C bC4 (innerstes Bifolio) vollständig analysiert — Quire C f17–f20 100 % abgedeckt</li>
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
