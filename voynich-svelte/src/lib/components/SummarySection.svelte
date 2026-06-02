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
				<tr><td>Rückwärtstest</td><td><strong>Typ I (genuine Vorhersagen): 10/10 (100%)</strong> · Typ II (interne Kohärenz): 17/20 (85%) · 0 Falsch-Positive</td></tr>
				<tr><td>Sprache A Anker</td><td>{STATS.foliosA}: 10/10 Ankerwörter je Folio — <strong>100 %</strong> (Quires A+B vollständig, Quire C bC1–bC4, Quire D bD1)</td></tr>
				<tr><td>Grammatikregeln</td><td><strong>{RULES.length}</strong> ({STATS.validatedRules} validiert + {RULES.length - STATS.validatedRules} Kandidaten)</td></tr>
				<tr class="hidden-print">
					<td>Korrekturen v7.5</td>
						<td>
							<ul>
								<li><strong>Regelmoratorium</strong> — keine neuen Regeln (R60+) bis Verhältnis validiert:Kandidaten ≥ 1,5:1 (aktuell 27:32 = 0,84:1; Ziel: 41:27)</li>
								<li><strong>Rückwärtstest-Reform</strong> — Trennung in Typ I (genuine Vorhersagen, 10 Prä-Analyse-Anker, eingefroren) und Typ II (interne Kohärenz, post-hoc); valide Kernaussage: 10/10 = 100%</li>
								<li><strong>R2-ext (v7.5)</strong> — explizite Positionsregel für EVA „o" (Wortanfang = Ayin, wortintern = Ḥolam) mit Negativtest: 0 Gegenbeispiele in 140+ Einträgen ✓</li>
								<li><strong><span class="eva">chotshol</span> herabgestuft</strong> — ★★★ Kand. → ★★ (morphologisch fragwürdig: Einzelbeleg, 3 Morpheme ohne Separator)</li>
								<li><strong>Neuer Abschnitt „Offene Probleme"</strong> — ehrliche Dokumentation ungeklärter statistischer Anomalien (Entropie, Slot-Grammatik, Wortlänge, Blindvalidierung)</li>
								<li>Scheol-Verteilungsstatistik formalisiert: &gt;85 % Zeilenende · &lt;15 % medial · 0 % Zeilenanfang</li>
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
