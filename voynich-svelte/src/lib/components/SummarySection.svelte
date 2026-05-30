<script>
	import { RULES } from '$lib/grammar-rules-data.js';
	import { STATS } from '$lib';
</script>

<div class="summary">
	<div>
		<p class="dropcap">Das vorliegende Dokument fasst den aktuellen Stand der Entzifferungsanalyse des Voynich-Manuskripts zusammen. Es richtet sich an Hebraisten, Aramaisten und Kodikographen, die eine unabhängige Prüfung der vorgeschlagenen Übersetzungen vornehmen möchten.</p>
		<p>Die Grundhypothese: Das Voynich-Manuskript ist in <strong>Mischna-Hebräisch mit aramäischen Lehnpartikeln</strong> verfasst, verschlüsselt durch ein konsonantisches Alphabet mit Niqqud-Markierungen als Vokalhelfer. Die Texte folgen dem Schema eines <em>hippokratisch-mittelalterlichen Medizintraktats</em>: Diagnose → Symptombeschreibung → Therapieindikation → Prognose. Version 5.8 schließt die Bifolios bB1 (f16r/f16v) ab, vervollständigt damit Quire B vollständig, bestätigt das feminine Pupillen-Verb <span class="eva">tchor</span> (תְּ+חֹר) mit zwei unabhängigen Belegen und identifiziert das Quire-B-Abschlusskolophon <span class="eva">sokar·oaorar=</span> als Doppel-Licht-Invokation.</p>
	</div>

	<div class="box hl">
		<div class="box-title">Kernbefunde — Version {STATS.version}</div>
		<table class="dt findings-table">
			<tbody>
				<tr><td>Identifizierte Sprache</td><td>Mischna-Hebräisch / Jüdisch-Aramäisch</td></tr>
				<tr><td>Texttyp</td><td>Medizinischer Traktat — Pharmakopöe (Diagnose, Prognostik)</td></tr>
				<tr><td>Analysierte Folios</td><td>f1v–f16v (Quires A–B, Spr. A), f57r (Spr. B), f103r/v, f114v, f115r/v, f116r/v</td></tr>
				<tr><td>Bestätigte Wörter</td><td><strong>{STATS.lexicon}</strong> (★★★ oder höher)</td></tr>
				<tr><td>Rückwärtstest (Spr. B)</td><td>{STATS.backtestFraction} Vorhersagen bestätigt ({STATS.backtest}); 0 Falsch-Positive</td></tr>
				<tr><td>Sprache A Anker</td><td>{STATS.foliosA}: 10/10 Ankerwörter je Folio — <strong>100 %</strong> (Quires A+B vollständig)</td></tr>
				<tr><td>Grammatikregeln</td><td><strong>{RULES.length}</strong> (24 validiert + {RULES.length - 24} Kandidaten)</td></tr>
				<tr>
					<td>Hauptneufunde v5.8</td>
					<td>
						<ul>
							<li><span class="conf5">ykshol</span> (יְ+כְּ+שׁוֹל) — erster negativer y+k+Terminus; Paradigma mit 6 Gliedern ★★★★</li>
							<li><span class="conf5">tchor</span> (תְּ+חֹר) — fem. Pupillen-Verb; 2 Belege in bB1 bestätigt ★★★★</li>
							<li><span class="conf5">sokar·oaorar=</span> — Quire-B-Abschlusskolophon; erster rein positiver Quire-Abschluss im Corpus ★★★★★</li>
							<li>Bifolio bB1 (f9r/f9v/f16r/f16v) vollständig — Quire B abgeschlossen ★★★</li>
							<li><span class="eva">ykair</span> — 7. y+k+Terminus-Kandidat; <span class="eva">ytchor/ytchy</span> — y+t-Doppelpräfix-Paradigma R28 ★★★</li>
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
