<script>
	import { RULES } from '$lib/grammar-rules-data.js';
	import { STATS } from '$lib';

	const plant = '{plant}';
</script>

<div class="summary">
	<div>
		<p class="dropcap">Das vorliegende Dokument fasst den aktuellen Stand der Entzifferungsanalyse des Voynich-Manuskripts zusammen. Es richtet sich an Hebraisten, Aramaisten und Kodikographen, die eine unabhängige Prüfung der vorgeschlagenen Übersetzungen vornehmen möchten.</p>
		<p>Die Grundhypothese: Das Voynich-Manuskript ist in <strong>Mischna-Hebräisch mit aramäischen Lehnpartikeln</strong> verfasst, verschlüsselt durch ein konsonantisches Alphabet mit Niqqud-Markierungen als Vokalhelfer. Die Texte folgen dem Schema eines <em>hippokratisch-mittelalterlichen Medizintraktats</em>: Diagnose → Symptombeschreibung → Therapieindikation → Prognose.</p>
		<p>Version {STATS.version} wird ausgelöst durch f23r + f23v (Bifolio bC2 Abschluss — <em>Geranium pratense</em> + <em>Borago officinalis</em>). Strukturelle Höhepunkte: R53 ★★ → ★★★ Kand. (zweiter T-Klassen-Titel: <span class="eva">eeeoly=</span> f23v P.12, Subtyp-Differenzierung A/B); bilaterales <code>dam·dam</code> f23v P.8 (Corpus-Erstbeleg Quire C); <span class="eva">tshol</span> als P.6-Strukturtoken auf beiden Seiten desselben Folios; neues Kompositum <code>daiidal</code> (Urteil der Schwäche); f23r mit drei Kolophonen (P.3 + P.5 + P.11) — Parallele zu f17r; R15 6. Beleg (Typ B nominal: <span class="eva">qokchol·dar·qokchol</span>); Bifolio bC2 vollständig — Bogen Quire C geschlossen; 9 neue Lexikoneinträge.</p>
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
					<td>Empirische Erweiterung v7.1</td>
						<td>
							<ul>
								<li>R53 ★★ → ★★★ Kand.: zweiter T-Klassen-Titel <span class="eva">eeeoly=</span> f23v P.12 — Subtyp A (R35-Duplikation, Zustandsbeschreibung) vs. Subtyp B (Emphase-Direktional, Heilungsbefehl); R43 ausstehend (drittes Folio)</li>
								<li>R15 6. Beleg (Typ B nominal): <span class="eva">qokchol·dar·qokchol</span> f23r P.7 — nominale Rahmendopplung mit <code>dar</code> (Leuchtender) als Zwischentext</li>
								<li>Bilaterales <code>dam·dam</code> f23v P.8 — Corpus-Erstbeleg Quire C; Borago-Blutklärungsindikation bestätigt</li>
								<li><span class="eva">tshol</span> als P.6-Strukturtoken: beide Seiten desselben Folios (f23r P.6 + f23v P.6); Scheol-Umkehr-Paragraphen-Hypothese ★★ Kand.</li>
								<li>f23r Drei-Kolophon-Architektur (P.3 + P.5 + P.11): strukturelle Parallele zu f17r — Außenbifolio-Korrespondenz Quire C</li>
								<li>Bifolio bC2 vollständig (f18r → f18v → f23v → f23r) — Thema-Bogen: Auge → Systemisch → Blut → Blässe/Atemweg; Quire C: 14/16 Seiten (87,5 %)</li>
								<li>9 neue Lexikoneinträge ★★–★★★: <span class="eva">tshol, daiidal, dalory, ytom, qokor, otshor, olsar, aiior</span> (★★★), <span class="eva">sholol</span> (★★)</li>
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
