<script>
	import { RULES } from '$lib/grammar-rules-data.js';
	import { STATS } from '$lib';
</script>

<div class="summary">
	<div>
		<p class="dropcap">Das vorliegende Dokument fasst den aktuellen Stand der Entzifferungsanalyse des Voynich-Manuskripts zusammen. Es richtet sich an Hebraisten, Aramaisten und Kodikographen, die eine unabhängige Prüfung der vorgeschlagenen Übersetzungen vornehmen möchten.</p>
		<p>Die Grundhypothese: Das Voynich-Manuskript ist in <strong>Mischna-Hebräisch mit aramäischen Lehnpartikeln</strong> verfasst, verschlüsselt durch ein konsonantisches Alphabet mit Niqqud-Markierungen als Vokalhelfer. Die Texte folgen dem Schema eines <em>hippokratisch-mittelalterlichen Medizintraktats</em>: Diagnose → Symptombeschreibung → Therapieindikation → Prognose.</p>
		<p>Version 6.6 wird ausgelöst durch f77r (D2-Phonotaktik-Härtetest, Quire M/XIII). Strukturelle Höhepunkte: R50-Galiläische Guttural-Abschwächung formaliert <span class="eva">ee</span>/oo als reine Vokalmarker und reduziert D2-Warnungen auf f77r von 42→3 (93 %); 3 Residualkonflikte identifizieren genuine ח-ע-Cluster (<span class="eva">cheol</span>/<span class="eva">cheeol</span>). Neuer Lexikonkandidat: <span class="eva">cheol</span> ★★.</p>
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
				<tr><td>Sprache A Anker</td><td>{STATS.foliosA}: 10/10 Ankerwörter je Folio — <strong>100 %</strong> (Quires A+B vollständig, Quire C bC1–bC3)</td></tr>
				<tr><td>Grammatikregeln</td><td><strong>{RULES.length}</strong> (24 validiert + {RULES.length - 24} Kandidaten)</td></tr>
				<tr class="hidden-print">
					<td>Empirische Erweiterung v6.6</td>
					<td>
						<ul>
							<li>R50 — Galiläische Guttural-Abschwächung: <span class="eva">ee</span>/<span class="eva">oo</span> = reine Vokalmarker (Tsere/Holam), nie als ה+ה geparst; D2-Reduktion f77r 42→3 (93 %)</li>
							<li>3 Residual-D2-Konflikte = genuine ח-ע-Cluster: <span class="eva">cheeol</span> (P.21), <span class="eva">cheol</span> (P.24, P.38 f77r); alle 4 Transkriptoren einheitlich</li>
							<li>Neuer Lexikonkandidat: <span class="eva">cheol</span> / <span class="eva">cheeol</span> ★★ — ח-ע-ל (schöpfen / heben); balneologisch konsistent (Aquädukt-Ikonographie f77r)</li>
							<li>Erstanalyse Quire M (f77r): 40 Paragraphen + 10 Label-Tokens; vollständig Sprache B, Hand 2; qo-Präfix-Dichte &gt;8 %</li>
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
