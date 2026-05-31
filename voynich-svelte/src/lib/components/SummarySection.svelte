<script>
	import { RULES } from '$lib/grammar-rules-data.js';
	import { STATS } from '$lib';
</script>

<div class="summary">
	<div>
		<p class="dropcap">Das vorliegende Dokument fasst den aktuellen Stand der Entzifferungsanalyse des Voynich-Manuskripts zusammen. Es richtet sich an Hebraisten, Aramaisten und Kodikographen, die eine unabhängige Prüfung der vorgeschlagenen Übersetzungen vornehmen möchten.</p>
		<p>Die Grundhypothese: Das Voynich-Manuskript ist in <strong>Mischna-Hebräisch mit aramäischen Lehnpartikeln</strong> verfasst, verschlüsselt durch ein konsonantisches Alphabet mit Niqqud-Markierungen als Vokalhelfer. Die Texte folgen dem Schema eines <em>hippokratisch-mittelalterlichen Medizintraktats</em>: Diagnose → Symptombeschreibung → Therapieindikation → Prognose.</p>
		<p>Version 6.3 ist eine empirisch ausgelöste Revision: Der GibberishTest (10 × 50 Pseudowörter) ergab eine mittlere ★★★+-Rate von 31 % — die selbst gesetzte Abbruchschwelle von 20 % war überschritten. Drei neue Härtungsmaßnahmen wurden eingeführt: R40 v2 (Kurzwurzel-Schwelle auf ≤ 3 Konsonanten, kumulative 2/3-Ausnahmen), R43 (Multi-Folio-Validierungspflicht) und R44 (Konsekutive Kurzwurzel-Sequenzsperre). Die GibberishTest-Abbruchschwelle wurde auf &gt; 15 % verschärft, Zielkorridor ≤ 10 %.</p>
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
				<tr class="hidden-print">
					<td>Empirische Härtung v6.3</td>
					<td>
						<ul>
							<li>GibberishTest (10 × 50 Pseudowörter): Mittlere ★★★+-Rate 31 % — Abbruchschwelle 20 % überschritten</li>
							<li>R40 v2 — Kurzwurzel-Schwelle auf ≤ 3 Konsonanten; kumulative 2/3-Ausnahmen (Funktionswort + Rückwärtstest + Korpusfrequenz ≥ 15×/3 Folios)</li>
							<li>R43 — Multi-Folio-Validierungspflicht: ★★★ nur bei ≥ 2 Folios; Kandidaten-Flag bei Einzel-Folio ≥ 8×</li>
							<li>R44 — Konsekutive Kurzwurzel-Sequenzsperre: zwei aufeinander folgende ≤3-Kons.-Wörter → Sequenz max. ★★ ohne Anker + R42-Kongruenz</li>
							<li>Neue GibberishTest-Schwellen: Abbruch &gt; 15 %, Warnzone 11–15 %, Zielkorridor ≤ 10 %</li>
							<li>Lexikon: <span class="eva">ytor</span> ★★★★ → ★★★ Kand. (R43); <span class="eva">ykam</span> ★★★ Kand. (R43); <span class="eva">ykair</span> ★★★ → ★★ (R43 Einzelbeleg); <span class="eva">kchom</span> ★★★ Kand.-Flag (R43)</li>
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
