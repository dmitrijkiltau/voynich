<script>
	import { RULES } from '$lib/grammar-rules-data.js';
	import { STATS } from '$lib';
</script>

<div class="summary">
	<div>
		<p class="dropcap">Das vorliegende Dokument fasst den aktuellen Stand der Entzifferungsanalyse des Voynich-Manuskripts zusammen. Es richtet sich an Hebraisten, Aramaisten und Kodikographen, die eine unabhängige Prüfung der vorgeschlagenen Übersetzungen vornehmen möchten.</p>
		<p>Die Grundhypothese: Das Voynich-Manuskript ist in <strong>Mischna-Hebräisch mit aramäischen Lehnpartikeln</strong> verfasst, verschlüsselt durch ein konsonantisches Alphabet mit Niqqud-Markierungen als Vokalhelfer. Die Texte folgen dem Schema eines <em>hippokratisch-mittelalterlichen Medizintraktats</em>: Diagnose → Symptombeschreibung → Therapieindikation → Prognose. Version 5.9 analysiert das Eröffnungsfolio f001r (bA1, Quire A, Sprache A, Hand 1) — den einzigen bisher untersuchten deklarativen Prosatext des Gesamtkorpus. Die Analyse belegt den vollständigen Ausfall des <span class="eva">qo-</span>Präfixes als B-exklusives Merkmal (★★★★★), bestätigt 10/10 Sprache-A-Ankerwörter (100 %) und stützt die Hypothese, f001r sei eine <strong>Haskama</strong> — eine rabbinische Billigungsseite mit Vier-Absatz-Layout, roten Großinitialen (&252/&253 = Aries-Symbol ★★★★) und dem historischen „Erased Key" (Jim Reeds, 1994).</p>
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
				<tr><td>Sprache A Anker</td><td>{STATS.foliosA}: 10/10 Ankerwörter je Folio — <strong>100 %</strong> (Quires A+B vollständig)</td></tr>
				<tr><td>Grammatikregeln</td><td><strong>{RULES.length}</strong> (24 validiert + {RULES.length - 24} Kandidaten)</td></tr>
				<tr>
					<td>Hauptneufunde v5.9</td>
					<td>
						<ul>
							<li>f001r als <strong>Haskama</strong> — deklarativer Texttyp sui generis; 4 Absätze + Kurztitel T1–T4 ★★★</li>
							<li><span class="eva">qo-</span>-Präfix vollständig absent in Sprache A — R1 als <strong>B-exklusiv</strong> gesichert ★★★★★</li>
							<li><span class="conf5">shodain</span> (שׁוֹד+דַּ+עַיִן) — Zerstörung des Auges; schärfste Erblindungs-Formel ★★★★</li>
							<li><span class="conf5">oksho</span> (עַ+כְּ+שׁוֹ) — erste präpositionale Scheol-Form in Sprache A ★★★★</li>
							<li><span class="eva">kor</span> ↔ <span class="eva">kchom</span> — Temperatur-Antonymenpaar; hippokratisches Diagnostikschema R31 ★★★</li>
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
