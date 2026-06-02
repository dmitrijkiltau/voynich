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
				<tr><td>Sprache A Anker</td><td>{STATS.foliosA}: 10/10 Ankerwörter je Folio — <strong>100 %</strong> (Quires A+B vollständig, Quire C bC1–bC4)</td></tr>
				<tr><td>Grammatikregeln</td><td><strong>{RULES.length}</strong> ({STATS.validatedRules} validiert + {RULES.length - STATS.validatedRules} Kandidaten)</td></tr>
				<tr class="hidden-print">
					<td>Empirische Erweiterung v7.2</td>
						<td>
							<ul>
								<li>R53 ★★★ bestätigt: dritter T-Klassen-Beleg <span class="eva">sam.chorly=</span> f24r T.20 — R43 erfüllt (3 Folios, 3 Subtypen)</li>
								<li><code>sar</code> ★★★ → ★★★★: 3. Folio-Beleg (f23v + f24r×2); Arzt-Supervision-Marker strukturell gesichert</li>
								<li>ot-Kompositum-Dreikette f24v P.2: <span class="eva">otol+otaiir+otchos</span> — drei ot-Komposita in Folge (R50-Beobachtung)</li>
								<li>R54 ★★ Kand.: <span class="eva">dal·dam·dal</span>-Triplette f24r P.16 — Blutbefund durch doppelte Schwäche-Setzung eingerahmt; strukturell neu</li>
								<li>R55 ★★★ Kand.: <span class="eva">oro=</span> f24v P.5 — or-Palindrom-Reduplikation in Kolophon-Finalposition; positivster Heilungsabschluss</li>
								<li>R56 ★★ Kand.: <span class="eva">sho.sho</span>-Emphase f24v P.14 — Token-Wortwiederholung (≠ Kompositum chotshol f21v)</li>
								<li>R57 ★★ Kand.: <span class="eva">odaiim=</span> f24v P.16 — m-Suffix-Abschluss-Marker; letzter Kolophon Quire C</li>
								<li>Quire C vollständig (16/16 Seiten): konzentrische Toxizitätssteigerung innen→außen (bC4 sanft → bC1 maximal toxisch)</li>
								<li>12 neue Lexikoneinträge ★★–★★★★: <span class="eva">olom, otaiir, cheekdam</span> (★★★★), <span class="eva">oro, qodom, sam.chorly, sshey, odaiim, ydals, doiir</span> (★★★), <span class="eva">daid, otaiphy</span> (★★)</li>
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
