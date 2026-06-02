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
				<tr><td>Sprache A Anker</td><td>{STATS.foliosA}: 10/10 Ankerwörter je Folio — <strong>100 %</strong> (Quires A+B vollständig, Quire C bC1–bC4, Quire D bD1)</td></tr>
				<tr><td>Grammatikregeln</td><td><strong>{RULES.length}</strong> ({STATS.validatedRules} validiert + {RULES.length - STATS.validatedRules} Kandidaten)</td></tr>
				<tr class="hidden-print">
					<td>Korrekturen v7.6</td>
						<td>
							<ul>
								<li><strong>Bifolio bD2 (f26r + f26v) analysiert</strong> — erster Sprache-B-Block in Quire D (Hand 2): f26r = <em>Solanum nigrum</em> · f26v = <em>Centaurea cyanus</em></li>
								<li><strong>R36 dar·dar Typ B</strong> ★★★→★★★★ — R43 erfüllt: f18r P.6 + f26v P.6 = 2 Folios (bilaterale Licht-Intensivierung, ophthalmologischer Kontext)</li>
								<li><strong>R37 qo-Präfix-Dopplung</strong> ★★★→★★★★ — R43 erfüllt: f18v P.2+P.3 + f26v P.5 (qotedy·qotedy = 3. Beleg, 2 Folios)</li>
								<li><strong><span class="eva">oraiin</span> R43 bestätigt</strong> — ★★★★ gesichert: f22r + f26v P.4 (reichste Augenlicht-Kolophonformel im Corpus)</li>
								<li><strong>6 neue ★★★ Kandidaten</strong> — <span class="eva">saraiir, ykeechy, qoteedar, cheeol, ory, eedy</span> (alle R43-Frist: 5 Folios)</li>
								<li><strong>Regelmoratorium</strong> weiterhin aktiv — kein R60+; aktuell 29:32 = 0,91:1 (Ziel: ≥ 1,5:1)</li>
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
