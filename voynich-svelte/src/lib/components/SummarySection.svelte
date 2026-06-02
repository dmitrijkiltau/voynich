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
				<tr><td>Sprache A Anker</td><td>{STATS.foliosA}: 10/10 Ankerwörter je Folio — <strong>100 %</strong> (Quires A+B vollständig, Quire C bC1–bC4, Quire D bD1+bD3)</td></tr>
				<tr><td>Grammatikregeln</td><td><strong>{RULES.length}</strong> ({STATS.validatedRules} validiert + {RULES.length - STATS.validatedRules} Kandidaten)</td></tr>
				<tr class="hidden-print">
					<td>Korrekturen v7.7</td>
						<td>
							<ul>
								<li><strong>Bifolio bD3 (f27r + f27v) analysiert</strong> — Rückkehr zu Sprache A nach Sprache-B-Einschub bD2: f27r = <em>Symphytum officinale</em> (Beinwell) · f27v = <em>Leucanthemum vulgare</em> (Wiesen-Margerite)</li>
								<li><strong><span class="eva">daiiin</span></strong> ★★★→★★★★ — R43 dreifach erfüllt: f1r T3 + f26v P.1/P.7 + f27r P.12 = 3 Folios</li>
								<li><strong>R56 sho·sho-Emphase</strong> ★★★ Kand.→★★★ validiert — R43 erfüllt: f24v P.14 + f27v P.7 = 2 Folios</li>
								<li><strong>7 neue ★★★ Kandidaten</strong> — <span class="eva">ksor, shod, keeod, cphary, dor</span> (R43 bestätigt), <span class="eva">fochof/chof, kshy</span> (alle R43-Frist: 5 Folios)</li>
								<li><strong>Regelmoratorium</strong> erstmals > 1,0 — 30 validiert : 29 Kandidaten = 1,03:1 (Ziel: ≥ 1,5:1)</li>
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
