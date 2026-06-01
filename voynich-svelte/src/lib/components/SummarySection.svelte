<script>
	import { RULES } from '$lib/grammar-rules-data.js';
	import { STATS } from '$lib';
</script>

<div class="summary">
	<div>
		<p class="dropcap">Das vorliegende Dokument fasst den aktuellen Stand der Entzifferungsanalyse des Voynich-Manuskripts zusammen. Es richtet sich an Hebraisten, Aramaisten und Kodikographen, die eine unabhängige Prüfung der vorgeschlagenen Übersetzungen vornehmen möchten.</p>
		<p>Die Grundhypothese: Das Voynich-Manuskript ist in <strong>Mischna-Hebräisch mit aramäischen Lehnpartikeln</strong> verfasst, verschlüsselt durch ein konsonantisches Alphabet mit Niqqud-Markierungen als Vokalhelfer. Die Texte folgen dem Schema eines <em>hippokratisch-mittelalterlichen Medizintraktats</em>: Diagnose → Symptombeschreibung → Therapieindikation → Prognose.</p>
		<p>Version 6.9 wird ausgelöst durch f71r + f71v + f72r1 + f72r2 (Bifolio bK1 — Quire K Zodiak-Tetraptychon, vollständig). Strukturelle Höhepunkte: R50 ★★★ → ★★★★ (2. Register bestätigt: 4 Zodiak-Folios, 30+ ee-Token); R52a ★★★ Kand. → ★★★★ (Determinans-y in Sternlabeln: 75 Labels · 47 % · Minimalpaar); R17 5. Register-Bestätigung; R19/R35 erstmals Zodiak (<span class="eva">otam·otam·chotam</span>); R29 → ★★★ Kand. (4 Belege); 9 neue Lexikoneinträge; Suffixe <span class="eva">-aly/-ary</span> formalisiert.</p>
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
					<td>Empirische Erweiterung v6.9</td>
						<td>
							<ul>
								<li>R50 ★★★ → ★★★★: 2. vollständiges Register (Zodiak Quire K) — 4 Folios · 30+ ee-Token · kein Gegenbeispiel; R43 erfüllt</li>
								<li>R52a ★★★ Kand. → ★★★★: Determinans-y in Zodiak-Sternlabeln — 4 Folios · 75 Labels · 47 % · Minimalpaar <span class="eva">okal=</span> vs. <span class="eva">okaly=</span> (f72r2 S1)</li>
								<li>R17 5. Register-Bestätigung (<span class="eva">shol</span> medial / <span class="eva">sheol</span> final in Textringen, f72r1); R19/R35 erstmals Zodiak: <span class="eva">otam·otam·chotam</span> f72r1 R1 (dreistufig) + <span class="eva">otaiin·otain</span> f72r1 S1.8; R29 ★★ → ★★★ Kand. (f71v R2 + f72r1 R2, 4 Belege gesamt)</li>
								<li>9 neue Lexikoneinträge ★★★: <span class="eva">alef/otalef</span> (Stier-Aleph, ikonographisch); <span class="eva">sheeolody, sheoltey, sholshdy, shokal, chotam, cheekaiin, okeodaly</span>; Suffixe <span class="eva">-aly/-ary</span> formalisiert (R52a)</li>
								<li>Doppel-Stier-Hypothese: f71v (hell) = kalendarisch-prognostisch · f72r1 (dunkel) = astromedizinisch (Melothesie Nacken/Kehle); <span class="eva">alef</span> exklusiv in f72r1 — erste ikonographische Buchstabenreferenz im Zodiak-Corpus</li>
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
