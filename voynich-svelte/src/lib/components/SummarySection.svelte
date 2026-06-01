<script>
	import { RULES } from '$lib/grammar-rules-data.js';
	import { STATS } from '$lib';

	const plant = '{plant}';
</script>

<div class="summary">
	<div>
		<p class="dropcap">Das vorliegende Dokument fasst den aktuellen Stand der Entzifferungsanalyse des Voynich-Manuskripts zusammen. Es richtet sich an Hebraisten, Aramaisten und Kodikographen, die eine unabhängige Prüfung der vorgeschlagenen Übersetzungen vornehmen möchten.</p>
		<p>Die Grundhypothese: Das Voynich-Manuskript ist in <strong>Mischna-Hebräisch mit aramäischen Lehnpartikeln</strong> verfasst, verschlüsselt durch ein konsonantisches Alphabet mit Niqqud-Markierungen als Vokalhelfer. Die Texte folgen dem Schema eines <em>hippokratisch-mittelalterlichen Medizintraktats</em>: Diagnose → Symptombeschreibung → Therapieindikation → Prognose.</p>
		<p>Version {STATS.version} wird ausgelöst durch f22r + f22v (Bifolio bC3 — Quire C Abschluss: <em>Plantago lanceolata</em> + <em>Veratrum album</em>). Strukturelle Höhepunkte: <code>otam</code> ★★★ → ★★★★ (R43 erfüllt: 2. Register, Zodiak + Botanisch); R15 auf Dreistufig-Schema erweitert (Typ B: Verb → Nomen → Direktional, 5. Beleg); R51 ★★★ gesichert (6 Belege · 3 Folios); R53 neuer Kandidat ★★ (Pflanzen-Titel-Duplikation: <span class="eva">daldalol=</span>); neue Kolophon-Formel <span class="eva">oraiino=</span> (Licht seines Auges); 15 neue Lexikoneinträge.</p>
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
				<tr><td>Grammatikregeln</td><td><strong>{RULES.length}</strong> ({STATS.validatedRules} validiert + {RULES.length - STATS.validatedRules} Kandidaten)</td></tr>
				<tr class="hidden-print">
					<td>Empirische Erweiterung v7.0</td>
						<td>
							<ul>
								<li><code>otam</code> ★★★ → ★★★★: R43 erfüllt — 2. Register (Zodiak f72r1 R1 + Botanisch f22v P.3); universelles Urprinzip register-übergreifend bestätigt</li>
								<li>R15 Dreistufig-Schema: f22v P.7 <span class="eva">ychor·chor·qokchol·chory</span> — Typ B erweitert auf Verb → Nomen → Direktional (5. Beleg, ★★★★ bestätigt)</li>
								<li>R51 ★★★ gesichert: 6 Belege über 3 Folios (f20v + f21v + f22v); strukturell stärkstes Beispiel: <span class="eva">saiin</span> als Vollwort zwischen 2×{plant} (f22v P.4)</li>
								<li>R53 neuer Kandidat ★★ (Pflanzen-Titel-Duplikation): <span class="eva">daldalol=</span> f22v T.16 — Corpus-einziger Pflanzen-Titel mit R35-Duplikationsstruktur; semantisch: pathologischer Zustand (doppelte Schwäche des Joches)</li>
								<li>15 neue Lexikoneinträge ★★–★★★★: <span class="eva">oraiino</span> (Kolophon-Formel ★★★★), <span class="eva">ykcheor/okchain</span> (★★★★), <span class="eva">ctheor, cphal, schor, ctheen, pysaiinor, kchorl, daldalol, dsheor, olshly, shotoly, cthoiin</span> (★★★), <span class="eva">ytal</span> (★★)</li>
								<li>Botanische Kohärenz bC3: f22r (<em>Plantago lanceolata</em>) ophthalmologisch-hämatostatisch ★★★★; f22v (<em>Veratrum album</em>) stärkendes Augen-/Blutmittel mit Toxizitäts-Warnung ★★★</li>
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
