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
					<td>Empirische Erweiterung v7.4</td>
						<td>
							<ul>
								<li>R3 ★★★★★: 6 neue Belege f1r (ykal, ykaiin, yshey, ycho, yto, ycheey) — >11 Belege / ≥8 Folios</li>
								<li>R11 ★★★★: f1r T1–T4 + f1v P4/P10-Kolophone — 6 neue Belege, alle 6 Transkriptoren einig</li>
								<li>R15 ★★★★★: Belege 7–9 aus f1r — <span class="eva">chol·chol</span> (P3.L15), <span class="eva">keey·keey</span> (P4.L26), <span class="eva">dar…dar</span> (P4.L23) — 9 Belege / 6 Folios</li>
								<li>R59 ★★★ Kand.: qo als isolierter Konnektiv-Token (Paragraphen-Brücke) — f1v P.7 (4/4 Transkriptoren einig)</li>
								<li>2 neue Lexikoneinträge: <span class="eva">daiiin</span> = דִּינִין (Aramäischer Plural, ★★★); <span class="eva">dain</span> = דָּן (Richter Partizip, ★★★)</li>
								<li>Haskama-Struktur f1r: vierfache Autorisierungsformel (T1 göttlich · T2 juridisch · T3 kollektiv · T4 empirisch); din-Trias P3.L14</li>
								<li>Negativtests R54/R55/R56: 0 Falsch-Positive in f1r + f1v ✓; validierte Regeln: 24 → 27</li>
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
