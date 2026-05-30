<script>
	const RULES = [
		{ id: 'R1',  rule: '<span class="eva">qo-</span> = <span class="heb-sm">וְ</span> (Vav conjunctive) an jedem Wortanfang',       evidence: 'qokedam, qokol, qokeedy',                                              stars: '★★★★',  is5: false },
		{ id: 'R2',  rule: '<span class="eva">o-</span> am Wortanfang = <span class="heb-sm">עַ</span> (Ayin)',                          evidence: 'okol, okoldm, okaiin, odol',                                           stars: '★★★★',  is5: false },
		{ id: 'R3',  rule: 'y-initiale Wörter = Imperfekt 3. Sg. Mask.',                                                                evidence: 'yteechy, yshdal, ykchaiin, ycheor, ychor',                             stars: '★★★★',  is5: false },
		{ id: 'R4',  rule: 't-initiale Wörter = Imperfekt 3. Sg. Fem. / 2. Sg.',                                                        evidence: 'taiir; tsheoarom',                                                     stars: '★★★★',  is5: false },
		{ id: 'R5',  rule: '<span class="eva">shedy</span> und <span class="eva">chedy</span> kommen nie im selben Absatz vor',          evidence: '15 Zeilen nur chedy, 17 nur shedy, 5 beide (lange Zeilen)',           stars: '★★★★',  is5: false },
		{ id: 'R6',  rule: 'Zeilenabschluss <span class="eva">sheol/shol</span> = Tod-Prognose; <span class="eva">or</span> = Heilungsprognose', evidence: 'f103r: 8× sheol am Zeilenende; P.17 endet or·aiin',             stars: '★★★★',  is5: false },
		{ id: 'R7',  rule: '<span class="eva">daiin</span> am Zeilenanfang = Paragraphen-Öffner',                                       evidence: '3× Zeilenanfang f103r; f57r P.5; f10v: 8×',                           stars: '★★★★',  is5: false },
		{ id: 'R8',  rule: '<span class="eva">-aiin</span> als Suffix = <span class="heb-sm">עַיִן</span> (Auge) diagnostisch',         evidence: 'okaiin, qokaiin je 10–11×',                                           stars: '★★★★',  is5: false },
		{ id: 'R9',  rule: 'Refrain-Wörter erscheinen 3–5× pro Folio in Anker-Position',                                               evidence: 'dam in f57r (4×), dal in f103r P.1 (3×), daiin in f10v (8×)',         stars: '★★★★',  is5: false },
		{ id: 'R10', rule: '<span class="eva">-ody</span>-Paragraphen = eigenständiges Listenregister; nie mit chedy/shedy kombiniert', evidence: 'f57r P.3–P.4: strikte Exklusion',                                     stars: '★★★',   is5: false },
		{ id: 'R11', rule: 'Paragraphen-Ende mit <span class="eva">=</span> = Abschlussformel',                                         evidence: 'kaiim=, dom=, daiin=, chckhan=, chal=; f57r cphedom=',               stars: '★★★',   is5: false },
		{ id: 'R12', rule: 'Trägersatz-Muster: P.1 (Relativsatz) → P.2 (Hauptsatz mit sar)',                                           evidence: 'f57r P.9; f103r P.1→P.2',                                             stars: '★★★',   is5: false },
		{ id: 'R13', rule: 'Paragraphen ohne Randstern = positives Prognose-Vokabular (<span class="eva">or, lor·aiin</span>)',         evidence: 'f103r P.3,17,20; f103v: 5/5 or-Paragraphen sternlos',                stars: '★★★★',  is5: false },
		{ id: 'R14', rule: '{plant}-Marker = Trennlinie Indikation | Prognose in Herbal-Folios',                                        evidence: 'f1v–f10v: 100% konsistent; links = Symptom, rechts = Heilung/Scheol', stars: '★★★★★', is5: true  },
		{ id: 'R15', rule: 'Paradigma-Wiederholungsreihen (×2–×5): Adjektiv/Verb mit Vokal- oder Präfixvariation',                     evidence: 'f1v P.3 (ckhy·ckho·ckhy); f10r P8 (chor·chor·cholor)',              stars: '★★★★',  is5: false },
		{ id: 'R16', rule: 'Mehrspaltige Paragraphen (3–4 {plant}-Segmente) folgen der Bildgeometrie',                                  evidence: 'f2r P.2–P.6: Kornblume mit drei Stielen → drei Segmente',            stars: '★★★★',  is5: false },
		{ id: 'R17', rule: 'Spr. A: <span class="eva">shol</span> (apokor.) medial; Spr. B: <span class="eva">sheol</span> (Vollform) am Zeilenende', evidence: 'f4r–f10v: shol medial (20+×); f103r: sheol final (8×)',  stars: '★★★★',  is5: false },
		{ id: 'R18', rule: 'Diagnosepaar <span class="eva">shol · chaiin</span> = abwägende Prognose; nie einzeln in abwägenden Kontexten', evidence: 'f4r P.2, f4v P.3, f6v P.2, f8v P3, f9r P2',                   stars: '★★★★',  is5: false },
		{ id: 'R19', rule: 'Intensivierungsrhetorik: ×2 = Emphase; ×3 = absolutes Urteil; ×4 + קַיָּם = rechtskräftiges Urteil',      evidence: 'Doppel: f4r,f6r,f8v,f10r; Tripel: f5v P.3; Vierfach: f8r P3.19',   stars: '★★★★',  is5: false },
		{ id: 'R20', rule: 'Direktionales Antonymenpaar: <span class="eva">lor</span> (לְאוֹר) ↔ <span class="eva">lshol</span> (לְשׁוֹל)', evidence: 'f6v P.11 (lor), f7v P.6 (lshol); identische l-Morphologie',     stars: '★★★★★', is5: true  },
		{ id: 'R21', rule: 'Schlussformeln mit =-Marker: kaiim=, dom=, daiin=, chckhan=',                                               evidence: 'f6r, f6v, f8r, f8v, f10v — konsistentes Inventar',                   stars: '★★★★',  is5: false },
		{ id: 'R22', rule: 'Folio-übergreifendes Fallverlaufs-Narrativ: Prognose-Eskalation korrespondiert mit botanischer Ikonographie', evidence: 'Quire A: Heilkräuter → Mandragora → Mohn → Aronstab',             stars: '★★★',   is5: false },
		{ id: 'R23', rule: 'Kurztitel-Format (Siman): 2 Wörter + =-Marker fasst Paragraphenbefund zusammen',                           evidence: 'f8r T1–T3 (ocho·daiin=, okokchodm=, schol·sair=); f9r T10',         stars: '★★★★',  is5: false },
	];
</script>

<p>Alle 23 Regeln wurden durch mindestens zwei unabhängige Belege validiert. R14 und R20 gelten als gesichert (★★★★★).</p>

<div class="rules-wrap">
	<table class="dt">
		<thead>
			<tr><th>#</th><th>Regel</th><th>Evidenz</th><th>Konf.</th></tr>
		</thead>
		<tbody>
			{#each RULES as r}
				<tr>
					<td class="rule-id">{r.id}</td>
					<td>{@html r.rule}</td>
					<td class="note-cell">{r.evidence}</td>
					<td><span class={r.is5 ? 'conf5' : 'conf'}>{r.stars}</span></td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>

<style>
	.rules-wrap {
		overflow-x: auto;
	}

	.rule-id {
		font-family: var(--font-mono);
		color: var(--ink-f);
		font-size: .82rem;
		white-space: nowrap;
	}

	.note-cell {
		color: var(--ink-f);
		font-size: .82rem;
	}
</style>
