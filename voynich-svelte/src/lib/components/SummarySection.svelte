<script>
	import { RULES } from '$lib/grammar-rules-data.js';
	import { STATS } from '$lib';
</script>

<div class="summary">
	<div>
		<p class="dropcap">Das vorliegende Dokument fasst den aktuellen Stand der Entzifferungsanalyse des Voynich-Manuskripts zusammen. Es richtet sich an Hebraisten, Aramaisten und Kodikographen, die eine unabhängige Prüfung der vorgeschlagenen Übersetzungen vornehmen möchten.</p>
		<p>Die Grundhypothese: Das Voynich-Manuskript ist in <strong>Mischna-Hebräisch mit aramäischen Lehnpartikeln</strong> verfasst, verschlüsselt durch ein konsonantisches Alphabet mit Niqqud-Markierungen als Vokalhelfer. Die Texte folgen dem Schema eines <em>hippokratisch-mittelalterlichen Medizintraktats</em>: Diagnose → Symptombeschreibung → Therapieindikation → Prognose.</p>
		<p>Version 6.4 wird ausgelöst durch den ersten astronomischen Stresstest (f58r, Quire H, Sprache A). Vier neue Formalisierungen: R45 (Aramäisches d-Relativpräfix — 6 D1-Fehlklassifikationen zurückgezogen), R46 (Wurzelketten-Ausnahme für R44), R47 (qo-Präfix vollständig in Sprache A ab Quire H), R48 (Randstern-System register-übergreifend). Methodisch wichtigstes Ergebnis: Das Mapping besteht den Register-Invarianz-Test — alle validierten Ankerwörter behalten ihre Bedeutungen im astronomischen Kontext ohne eine einzige Ad-hoc-Anpassung.</p>
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
				<tr><td>Sprache A Anker</td><td>{STATS.foliosA}: 10/10 Ankerwörter je Folio — <strong>100 %</strong> (Quires A+B vollständig, Quire C Eröffnung)</td></tr>
				<tr><td>Grammatikregeln</td><td><strong>{RULES.length}</strong> (24 validiert + {RULES.length - 24} Kandidaten)</td></tr>
				<tr class="hidden-print">
					<td>Empirische Erweiterung v6.4</td>
					<td>
						<ul>
							<li>R45 — Aramäisches d-Relativpräfix: 6 D1-Fehlklassifikationen zurückgezogen (<span class="eva">dshodal, dshor, dchairam, dtor, dtshol, dchol</span>)</li>
							<li>R46 — Wurzelketten-Ausnahme: ≥ 3 Tokens einer validierten Basiswurzel → R44 greift nicht (kohärente Intensivierung, vgl. R19)</li>
							<li>R47 — qo-Präfix vollständig in Sprache A ab Quire H (28+/350 Token ~8 %); R1 gilt nur noch für Quires A+B</li>
							<li>R48 — Randstern-System register-übergreifend: f58r (astronomisch) identisches Strukturprinzip wie f103r (medizinisch)</li>
							<li>Register-Invarianz-Test bestanden: alle Ankerwörter (<span class="eva">or, shol, daiin, dal, aiin</span>...) behalten Bedeutungen ohne Anpassung</li>
							<li>Lexikon: <span class="eva">ytor</span> → ★★★★ (R43 bestätigt f58r P.30); +7 neue Einträge: shalom, qor, yteor, ytalar, dshor, opsheolaiin, op-/of-</li>
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
