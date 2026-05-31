<script>
	import { RULES } from '$lib/grammar-rules-data.js';
	import { STATS } from '$lib';
</script>

<div class="summary">
	<div>
		<p class="dropcap">Das vorliegende Dokument fasst den aktuellen Stand der Entzifferungsanalyse des Voynich-Manuskripts zusammen. Es richtet sich an Hebraisten, Aramaisten und Kodikographen, die eine unabhängige Prüfung der vorgeschlagenen Übersetzungen vornehmen möchten.</p>
		<p>Die Grundhypothese: Das Voynich-Manuskript ist in <strong>Mischna-Hebräisch mit aramäischen Lehnpartikeln</strong> verfasst, verschlüsselt durch ein konsonantisches Alphabet mit Niqqud-Markierungen als Vokalhelfer. Die Texte folgen dem Schema eines <em>hippokratisch-mittelalterlichen Medizintraktats</em>: Diagnose → Symptombeschreibung → Therapieindikation → Prognose.</p>
		<p>Version 6.5 wird ausgelöst durch Bifolio bC3 (f19r + f19v — Stephanskraut + Teufelsabbiss). Strukturelle Höhepunkte: erste daiin·daiin-Dopplung, erste 7-gliedrige y+t-Verb-Litanei (R49), dritter ytor-Beleg (→ ★★★★★), erster Richtungsterm darom (Süden), stärkste qo-Dichte in Quire C (~10 %, R33-Erweiterung). 15 neue Lexikonkandidaten.</p>
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
				<tr><td>Sprache A Anker</td><td>{STATS.foliosA}: 10/10 Ankerwörter je Folio — <strong>100 %</strong> (Quires A+B vollständig, Quire C bC1–bC3)</td></tr>
				<tr><td>Grammatikregeln</td><td><strong>{RULES.length}</strong> (24 validiert + {RULES.length - 24} Kandidaten)</td></tr>
				<tr class="hidden-print">
					<td>Empirische Erweiterung v6.5</td>
					<td>
						<ul>
							<li>R49 — y+t-Verb-Litanei als Schlusskolophon: 7-gliedrige Verb-Kette f19v P.12 (Corpus-Rekord); alle 4 Transkriptoren identisch</li>
							<li>R33-Erweiterung — qo-Progressionsklausel: bC3 (f19) ~10 % = Quire-H-äquivalent; Übergangszone gilt nur für bC1/bC2</li>
							<li>Lexikon: <span class="eva">ytor</span> → ★★★★★ (R43 dreifach: f18v + f58r + f19v); +15 neue Kandidaten (oscheor, qokorar, cthar, octhor, okchan, okchod ...)</li>
							<li>Erste daiin·daiin-Dopplung (f19v P.4, R19-Erweiterung auf Urteilsebene)</li>
							<li>Erster Richtungsterm <span class="eva">darom</span> (דָּרוֹם = Süden, f19v P.2) im botanischen Corpus</li>
							<li>bC3 = ophthalmologisch spezifischstes Bifolio in Quire C: pchor-Eröffnung (f19r) + 7-Verb-Illuminations-Litanei (f19v)</li>
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
