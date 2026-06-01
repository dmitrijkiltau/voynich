<script>
	import { RULES } from '$lib/grammar-rules-data.js';
	import { STATS } from '$lib';
</script>

<div class="summary">
	<div>
		<p class="dropcap">Das vorliegende Dokument fasst den aktuellen Stand der Entzifferungsanalyse des Voynich-Manuskripts zusammen. Es richtet sich an Hebraisten, Aramaisten und Kodikographen, die eine unabhängige Prüfung der vorgeschlagenen Übersetzungen vornehmen möchten.</p>
		<p>Die Grundhypothese: Das Voynich-Manuskript ist in <strong>Mischna-Hebräisch mit aramäischen Lehnpartikeln</strong> verfasst, verschlüsselt durch ein konsonantisches Alphabet mit Niqqud-Markierungen als Vokalhelfer. Die Texte folgen dem Schema eines <em>hippokratisch-mittelalterlichen Medizintraktats</em>: Diagnose → Symptombeschreibung → Therapieindikation → Prognose.</p>
		<p>Version 6.8 wird ausgelöst durch f21r + f21v (Bifolio bC4 — vollständig abgeschlossen, Quire C 10/16 Seiten). Strukturelle Höhepunkte: <span class="eva">cheol</span> ★★★ → ★★★★ (4. Beleg, R43 definitiv erfüllt: f77r + f20v + f21r P.5 + P.8); neue Lexikoneinträge <span class="eva">tshaiin</span> ★★★ Kand. + <span class="eva">chotshol</span> ★★★ Kand. + <span class="eva">ysheol</span> ★★★ Kand.; f21r = Dreifache Licht-Formel P.7 (R52 ★★ Kand.) + R15 Typ-B 4. Beleg P.12; f21v = kompaktester Kolophon im Corpus (3 Wörter) + <span class="eva">daiin·daiin</span> R19-Bestätigung; R51 ★★★ (2-Folio-Kand.: f20v + f21v) + R52 ★★ (Kolophon-Trias, 1 Beleg) neu hinzugefügt.</p>
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
					<td>Empirische Erweiterung v6.8</td>
						<td>
							<ul>
								<li><span class="eva">cheol</span> ★★★ → ★★★★: R43 definitiv erfüllt (f77r + f20v + f21r P.5 + P.8, 3 Folios); 4. Beleg sichert genuine ח-ע-Cluster endgültig</li>
								<li>Neue Lexikoneinträge: <span class="eva">tshaiin</span> ★★★ Kand. (du wirst das Auge behandeln; f21r P.9) + <span class="eva">chotshol</span> ★★★ Kand. (intensivstes Negativ-Kompositum; f21v P.6) + <span class="eva">ysheol</span> ★★★ Kand. (Aufstieg aus Scheol; f21r P.12) + <span class="eva">dait</span> ★★ Kand. + <span class="eva">keeees</span> ★ Hapax</li>
								<li>f21r (<em>Thymus serpyllum</em> ★★★★): Dreifache Licht-Formel P.7 (R52 Kand. Corpus-Erstbeleg); Dreifach-Scheol-Sequenz P.11; R15 Typ-B 4. Beleg P.12; Licht-Dichte 7× (höchste im Corpus)</li>
								<li>f21v (<em>Aquilegia vulgaris</em> ★★★★): kompaktester Kolophon im Corpus (3 Wörter, P.8); <span class="eva">daiin·daiin</span> 2. Beleg → R19 ★★★ best.; R51 2. Folio-Beleg → R51 ★★★ best.</li>
								<li>Neue Regeln: R51 ★★★ Kand. (Illustrationszwickel-Einschübe, 2 Folios) + R52 ★★ Kand. (Kolophon-Trias, 1 Beleg) — Bifolio bC4 vollständig, Quire C 10/16 Seiten</li>
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
