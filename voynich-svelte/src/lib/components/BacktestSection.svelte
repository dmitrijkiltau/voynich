<script>
	const STATS = [
		{ label: 'Bestätigt Spr. B (★★★★+)', pct: 88, num: '23 / 26', color: 'var(--gold)' },
		{ label: 'Bestätigt Spr. A (Anker, f1v–f13v)', pct: 100, num: '260 / 260', color: 'var(--green)' },
		{ label: 'Nicht gefunden', pct: 8, num: '2 / 26', color: 'var(--red)' },
		{ label: 'Falsch-positiv (gesamt)', pct: 0, num: '0', color: 'var(--gold)' },
	];

	const TESTED = [
		{ pred: 'dam',                      heb: 'דָּם',                    result: '✓ 4× f57r Zeilenende',              context: 'qokedam, cheeodam, okoldm, yodam' },
		{ pred: 'sar',                      heb: 'שַׂר',                    result: '✓ f57r P.9, f103r P.2,17',          context: 'immer Zeilenmitte; nach daiin oder shedy' },
		{ pred: 'chedy',                    heb: 'כְּדֵי',                  result: '✓ 22× f103r',                       context: 'nie mit -ody kombiniert (R5)' },
		{ pred: 'shedy',                    heb: 'שֶׁ+דִּי',                result: '✓ 27× f103r',                       context: 'immer von Konnektoren gefolgt' },
		{ pred: 'sheol',                    heb: 'שְׁאוֹל',                 result: '✓ 8× f103r Zeilenende',             context: 'P.23,35,40(×2),42,45' },
		{ pred: 'daiin',                    heb: 'דִּין',                   result: '✓ 3× Zeilenanfang f103r',           context: 'f57r P.5: qokcho·daiin·cheeodam' },
		{ pred: 'chalal',                   heb: 'חָלָל',                   result: '✓ 1× exakt nach sheol P.42',        context: 'tshey·sheol·cheolshy·chalal' },
		{ pred: 'ckhy',                     heb: 'כְּהִי',                  result: '✓ f57r P.2,9; f103r P.17,23',       context: '4 unabhängige Belege' },
		{ pred: 'dal',                      heb: 'דַּל',                    result: '✓ Dreifach-Refrain f103r P.1',      context: 'pchedal, yshdal, dal (standalone)' },
		{ pred: 'taiir',                    heb: 'תָּאִיר',                 result: '✓ f57r P.8 Zeilenbeginn',           context: 'taiir·sheedy·lchedy·ckheedy' },
		{ pred: 'sheoldam',                 heb: 'שְׁאוֹל+דָּם',            result: '✓ f3r P.9 auf Blutpflanze',         context: 'botanische Kohärenz; beide ★★★★★-Anker fusioniert' },
		{ pred: 'daiidy / daiindy',         heb: 'דִּין+דִּי',              result: '✓ f57r P.9, f3v P.2, f9r P5',      context: 'drei Folios, identische Funktion' },
		{ pred: 'tsheoarom',                heb: 'תְּ+שְׁאוֹ+רוֹם',         result: '✓ f3r P.15 Heilungsformel',         context: 'nach 7 Blut-Paragraphen: kohärenter Positionswechsel' },
		{ pred: 'dsholdy',                  heb: 'דְּ+שׁוֹל+דִּי',          result: '✓ f9r P5L',                         context: 'Genitiv-Kompositum parallel zu daiindy' },
		{ pred: 'shoiin',                   heb: 'שׁוֹ+עַיִן',              result: '✓ f10v P4 + P6',                    context: 'Doppelbeleg auf demselben Folio' },
		{ pred: 'chaiin · ckhy · or · aiin',heb: 'Prognose-Tetrade',        result: '✓ f10r P4 (alle vier in einer Zeile)', context: 'vollständiges hippokratisches Schema' },
		{ pred: 'torshor',                  heb: 'תֹּר+שׁוֹר',               result: '✓ f13r P.1 Paragraph-Öffner',        context: 'Jahreszeit-Zeichen; erster Beleg dieser Form im Korpus' },
		{ pred: 'pchy',                     heb: 'פְּחִי',                   result: '✓ 4× f13r — höchste Atemweg-Dichte', context: 'opchy, qopchy, pchy; bestätigt Alant-Identifikation' },
		{ pred: 'shol · dy · … · shol',     heb: 'R24-Struktur',             result: '✓ f13r P.1 (Dopplungsformel)',       context: 'einmaliges Emphase-Muster mit Genitiv-Brücke dy' },
	];
</script>

<div class="backtest">
	<p>26 hebräische/aramäische Wörter wurden nach dem EVA-Mapping kodiert und im Korpus (Sprache B) gesucht. Trefferquote: <strong>88,5 % (23/26)</strong>. In Quire A/B wurden je Folio 10 Ankerwörter bestätigt (100 %).</p>

	<div class="stat-bars">
		{#each STATS as s}
			<div class="stat-row">
				<span class="stat-label">{s.label}</span>
				<div class="stat-bar-wrap">
					<div class="stat-bar" style="width:{s.pct}%; background:{s.color}"></div>
				</div>
				<span class="stat-num">{s.num}</span>
			</div>
		{/each}
	</div>

	<div class="box green no-fp">
		<p style="margin:0;font-size:.92rem">Entscheidend: <strong>Keine einzige Vorhersage ergab einen Falsch-Positiv-Treffer.</strong> Kein kodiertes Wort taucht in einem semantisch inkohärenten Kontext auf — bei einem Zufallsalphabet statistisch ausgeschlossen.</p>
	</div>

	<h3>Getestete Formen (Auswahl)</h3>
	<div class="tested-wrap">
		<table class="dt">
			<thead>
				<tr><th>Vorhersage</th><th>Hebräisch</th><th>Befund</th><th>Kontext</th></tr>
			</thead>
			<tbody>
				{#each TESTED as t}
					<tr>
						<td><span class="eva">{t.pred}</span></td>
						<td><span class="heb-sm">{t.heb}</span></td>
						<td class="result-cell">{t.result}</td>
						<td class="note-cell">{t.context}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style>
	.stat-bars {
		display: flex;
		flex-direction: column;
		gap: .5rem;
		margin: 1.2rem 0;
	}

	.stat-row {
		display: flex;
		align-items: center;
		gap: .8rem;
		font-size: .88rem;
	}

	.stat-label {
		min-width: 280px;
		color: var(--ink-l);

		@media (max-width: 768px) {
			min-width: 160px;
		}
	}

	.stat-bar-wrap {
		flex: 1;
		background: var(--parch-dk);
		border-radius: 1px;
		height: 8px;
		overflow: hidden;
	}

	.stat-bar {
		height: 100%;
		border-radius: 1px;
		transition: width .4s ease;
	}

	.stat-num {
		color: var(--ink-f);
		min-width: 4.5rem;
		text-align: right;
		font-family: var(--font-mono);
		font-size: .82rem;
	}

	.no-fp {
		margin-top: 1rem;
	}

	.tested-wrap {
		overflow-x: auto;
	}

	.result-cell {
		color: var(--green);
		font-size: .82rem;
		white-space: nowrap;
	}

	.note-cell {
		color: var(--ink-f);
		font-size: .82rem;
	}
</style>
