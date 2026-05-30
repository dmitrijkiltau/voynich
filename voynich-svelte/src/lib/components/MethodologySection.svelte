<div class="methodik">
	<div class="methodik-grid">
		<div>
			<h3>Rückwärtstest-Prinzip</h3>
			<p>Jede Mapping-Hypothese wird durch Rückwärtstests validiert: Ein bekanntes hebräisches oder aramäisches Wort wird nach dem vorgeschlagenen Mapping in EVA kodiert und im Voynich-Korpus gesucht. Bestätigung erfordert: (a) Vorkommen im Korpus, (b) semantisch plausible Position, (c) kontextuell passende Nachbarwörter.</p>

			<h3>Konfidenzskala</h3>
			<table class="dt">
				<thead>
					<tr><th>Sterne</th><th>Bedeutung</th><th>Kriterien</th></tr>
				</thead>
				<tbody>
					<tr><td><span class="conf5">★★★★★</span></td><td>Gesichert</td><td>Rückwärtstest ✓, 3+ Kontexte, keine Gegenbeispiele</td></tr>
					<tr><td><span class="conf">★★★★</span></td><td>Sehr stark</td><td>Rückwärtstest ✓, konsistente Kontextverteilung</td></tr>
					<tr><td><span class="conf">★★★</span></td><td>Stark</td><td>Semantisch kohärent, morphologisch konsistent</td></tr>
					<tr><td><span class="conf">★★</span></td><td>Möglich</td><td>Passt in Kontext, mehrere Alternativlesarten</td></tr>
					<tr><td><span class="conf">★</span></td><td>Spekulativ</td><td>Erste Hypothese, noch nicht getestet</td></tr>
				</tbody>
			</table>
		</div>

		<div>
			<h3>Anker-Folios</h3>
			<div class="box blue anchor-card">
				<div class="box-title">f57r — Stärkstes Einzelfolio</div>
				<p>Quire 8, Sprache B, Hand 2. Botanisch-pharmazeutische Seite. Enthält die stärkste Einzelsequenz:</p>
				<div class="layer-eva">sar · al · daiindy</div>
				<div class="layer-heb">שַׂר עַל דִּין דִּי</div>
				<div class="anchor-gloss">„Arzt über das Urteil dessen."</div>
			</div>
			<div class="box blue anchor-card">
				<div class="box-title">f103r — Höchste Lexikondichte</div>
				<p>Quire 20, Sprache B. 54 Paragraphen reiner Prosatext mit der höchsten Konzentration bestätigter Wörter und den vollständigsten übersetzten Sätzen.</p>
			</div>
		</div>
	</div>
</div>

<style>
	.methodik-grid {
		display: flex;
		flex-wrap: wrap;
		gap: 0 2rem;

		& > div {
			flex: 1 1 420px;
		}
	}

	.anchor-card {
		margin-bottom: .8rem;

		& p {
			margin-bottom: .5rem;
			font-size: .9rem;
		}
	}

	.anchor-gloss {
		font-style: italic;
		color: var(--ink-l);
		font-size: .9rem;
		border-left: 2px solid var(--gold);
		padding-left: .7rem;
		margin-top: .3rem;
	}
</style>
