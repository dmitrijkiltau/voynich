export const TESTED = [
  // ── Typ I — Prä-Analyse-Anker (genuine Vorhersagen, eingefroren) ───────────
  { type: 'I', pred: 'dam', heb: 'דָּם', result: '✓ 4× f57r Zeilenende', context: 'qokedam, cheeodam, okoldm, yodam' },
  { type: 'I', pred: 'sar', heb: 'שַׂר', result: '✓ f57r P.9, f103r P.2,17', context: 'immer Zeilenmitte; nach daiin oder shedy' },
  { type: 'I', pred: 'sheol', heb: 'שְׁאוֹל', result: '✓ 8× f103r Zeilenende', context: 'P.23,35,40(×2),42,45' },
  { type: 'I', pred: 'daiin', heb: 'דִּין', result: '✓ 3× Zeilenanfang f103r', context: 'f57r P.5: qokcho·daiin·cheeodam' },
  { type: 'I', pred: 'chalal', heb: 'חָלָל', result: '✓ 1× exakt nach sheol P.42', context: 'tshey·sheol·cheolshy·chalal' },
  { type: 'I', pred: 'dal', heb: 'דַּל', result: '✓ Dreifach-Refrain f103r P.1', context: 'pchedal, yshdal, dal (standalone)' },
  { type: 'I', pred: 'chaiin · ckhy · or · aiin', heb: 'Prognose-Tetrade', result: '✓ f10r P4 (alle vier in einer Zeile)', context: 'vollständiges hippokratisches Schema' },
  { type: 'I', pred: 'shol · dy · … · shol', heb: 'R24-Struktur', result: '✓ f13r P.1 (Dopplungsformel)', context: 'einmaliges Emphase-Muster mit Genitiv-Brücke dy' },
  { type: 'I', pred: 'dam (Quire B)', heb: 'דָּם', result: '✓ f14v P.8 (Blut-Triade)', context: 'dol · dair · dam — Erstbeleg Blutpathologie in bB3; verbindet f14v mit f3r' },
  { type: 'I', pred: 'shol medial · sheol final (R17 Zodiak)', heb: 'שׁוֹל / שְׁאוֹל', result: '✓ f72r1 R1 (shol 2×) · R2 (sheol vor gap) — 5. Register-Bestätigung', context: 'identische Verteilung wie botanische Folios; shol nie in Ringabschlussposition; sheol unmittelbar vor gap-Marker' },
  { type: 'I', pred: 'f69r Stresstest — kosmologisches Rad-Diagramm, Currier-Sprache unklassifiziert (Quire J/X)', heb: 'Mapping v8.0', result: '✓ 10/10 Ankerwörter; shol= in P.4 terminal (R6); sar= 3× terminal (P.1, R.7, R.11, R11); daiin in P.2+C.9 (R7); 6/6 Pflichtkriterien bestanden — 1 Token offen ({&ct}ar)', context: 'Foliotyp: kosmologisches Rad-Diagramm — keine Botanik, kein {plant}-System, keine Currier-Sprachzuordnung; Mapping ohne Anpassung auf neuen Register transferiert' },
  // ── Typ II — Post-hoc-Entdeckungen (interne Kohärenz) ─────────────────────
  { type: 'II', pred: 'chedy', heb: 'כְּדֵי', result: '✓ 22× f103r', context: 'nie mit -ody kombiniert (R5)' },
  { type: 'II', pred: 'shedy', heb: 'שֶׁ+דִּי', result: '✓ 27× f103r', context: 'immer von Konnektoren gefolgt' },
  { type: 'II', pred: 'ckhy', heb: 'כְּהִי', result: '✓ f57r P.2,9; f103r P.17,23', context: '4 unabhängige Belege' },
  { type: 'II', pred: 'taiir', heb: 'תָּאִיר', result: '✓ f57r P.8 Zeilenbeginn', context: 'taiir·sheedy·lchedy·ckheedy' },
  { type: 'II', pred: 'sheoldam', heb: 'שְׁאוֹל+דָּם', result: '✓ f3r P.9 auf Blutpflanze', context: 'botanische Kohärenz; beide ★★★★★-Anker fusioniert' },
  { type: 'II', pred: 'daiidy / daiindy', heb: 'דִּין+דִּי', result: '✓ f57r P.9, f3v P.2, f9r P5', context: 'drei Folios, identische Funktion' },
  { type: 'II', pred: 'tsheoarom', heb: 'תְּ+שְׁאוֹ+רוֹם', result: '✓ f3r P.15 Heilungsformel', context: 'nach 7 Blut-Paragraphen: kohärenter Positionswechsel' },
  { type: 'II', pred: 'dsholdy', heb: 'דְּ+שׁוֹל+דִּי', result: '✓ f9r P5L', context: 'Genitiv-Kompositum parallel zu daiindy' },
  { type: 'II', pred: 'shoiin', heb: 'שׁוֹ+עַיִן', result: '✓ f10v P4 + P6', context: 'Doppelbeleg auf demselben Folio' },
  { type: 'II', pred: 'torshor', heb: 'תֹּר+שׁוֹר', result: '✓ f13r P.1 Paragraph-Öffner', context: 'Jahreszeit-Zeichen; erster Beleg dieser Form im Korpus' },
  { type: 'II', pred: 'pchy', heb: 'פְּחִי', result: '✓ 4× f13r — höchste Atemweg-Dichte', context: 'opchy, qopchy, pchy; bestätigt Alant-Identifikation' },
  { type: 'II', pred: 'ykaiin (y+k+aiin)', heb: 'יְ+כְּ+עַיִן', result: '✓ f14r P.8 — 5. Paradigma-Mitglied', context: 'ykchaiin→ycheor→ykchor→ykchy→ykaiin: 5 positive Ankerpunkte (ykshol = 6. Glied negativ, f15r P.12)' },
  { type: 'II', pred: 'chckhy= (Diagnosekolophon)', heb: 'כְּ+כְּ+הִי', result: '✓ 4× Korpus: f9v, f11v P.6, f14r P.7, f14v P.6', context: 'Konzentration in Bifolio bB3; auch medial belegt (f14v P.6)' },
  { type: 'II', pred: 'ykshol (y+k+shol)', heb: 'יְ+כְּ+שׁוֹל', result: '✓ f15r P.12 — erster negativer y+k+Terminus', context: 'ykchaiin→ycheor→ykchor→ykchy→ykaiin→ykshol: komplettes Paradigma, positiv + negativ belegt' },
  { type: 'II', pred: 'qotchor (Pupillenzeichen)', heb: 'קוֹ+תְּ+כֹּר', result: '✓ f15r Schlusskolophon ★★★★★', context: 'qotchor·chaiin·chy·kol·daky= — positives Pupillen-Urteil; ophthalmologische Abschlussformel bB2' },
  { type: 'II', pred: 'soloiin', heb: 'שׁוֹ+לְ+עַיִן', result: '✓ f15v P.11 — therapeutisch präzisestes Kompositum', context: '„Arznei für das Auge" — höchste Heilarznei-Präzision im Gesamtkorpus; Gegenstück zu shoiin (f10v)' },
  { type: 'II', pred: 'cthor (vollständige Heilung)', heb: 'כְּ+תֹּר', result: '✓ f15v Schlusskolophon', context: 'daiin·cthor·chol·chor= — cthor+chor = Heilung der Pupillenpathologie; positiver Abschluss Bifolio bB2' },
  // ── v6.9 · Zodiak-Tetraptychon bK1 (f71r–f72r2) ────────────────────────────
  { type: 'II', pred: 'otam · otam · chotam (R19/R35)', heb: 'אוֹת+אָם · אוֹת+אָם · כֹּ+אוֹת+אָם', result: '✓ f72r1 R1 — dreistufige Nominal-Intensivierung', context: 'einfach → ×2 → Komparativ ko+X; exaktes R35-Schema; semantisch kohärent: Zeichen der Mutter im Stier-dunkel-Kontext' },
  { type: 'II', pred: 'okaly= / okal= Minimalpaar (R52a)', heb: 'עַ+כָּל+יְ / עַ+כָּל', result: '✓ f72r2 S1.3/S1.5/S1.12 (okal) neben S1.4/S1.12 (okaly) — Determinans-y optional', context: 'identischer Stamm okal mit und ohne -y-Suffix auf demselben Ring; beweist R52a: -y ist Status-Emphaticus-Marker, kein festes Wortbildungselement' },
  { type: 'II', pred: 'alef / otalef — Stier-Exklusivmarker', heb: 'אָלֶף / אוֹת+אָלֶף', result: '✓ f72r1 S1.6 + S1.9 — ausschließlich im Stier-dunkel-Panel', context: 'alef = Ochsenkopf-Piktogramm (Aleph-Ursprung); fehlt in f71r, f71v, f72r2; erste ikonographisch verankerte Buchstabenreferenz im Zodiak-Corpus' },
  // ── v8.0 · f69r Kosmogramm ─────────────────────────────────────────────────
  { type: 'II', pred: 'dar·dar-Dopplung (R36) in kosmologischem Register', heb: 'דַּר·דַּר', result: '✓ f69r R.17 (dair.dar= Terminal) + f69r R.22 (dary.dar direktional) — 2 neue Belege', context: 'R43 erfüllt: f18r + f26v + f69r = 3 Folios, 4 Gesamtbelege → R36 ★★★ validiert; Typ A (direkt adjacent) erstmals in kosmologischem Register belegt' },
  // ── v8.7 · Quire D Abschluss + Quire E Eröffnung (f31r–f34v) ──────────────
  { type: 'I', pred: 'oldam (f34r P.7) → sofortiger Folgebeleg auf f34v P.2', heb: 'עַל+דָּם', result: '✓ f34v P.2 (Abstand: 1 Folio)', context: 'ol+dam Erstbeleg f34r P.7 → unmittelbarer Folgebeleg auf dem Verso desselben Bifolios; R43-Frist binnen einer Sitzung erfüllt' },
  { type: 'I', pred: 'choraiin (f34v P.8) = 3. Attestation (R43 aus f30r P.3 + f33v P.7)', heb: 'כֹּ+אַר+עַיִן', result: '✓ f34v P.8 — Drittbeleg bestätigt', context: 'chorain Erstbeleg f30r P.3 (★★★ Kand.) → f33v P.7 (2. Beleg) → f34v P.8 (3. Beleg): R43-Frist erfüllt → ★★★★ validiert' },
  { type: 'II', pred: 'Tanacetum f31r: dam im Schlusskolophon — Tanacetum = Blutfluss-Kraut (Macer floridus)', heb: 'דָּם', result: '✓ f31r P.15 okedam= — Blutterm im Abschlusskolophon', context: 'Tanacetum parthenium ist im mittelalterlichen Kräuterbuch (Macer floridus) als Mittel gegen Menstruationsblutungen gelistet; botanische und textuelle Ebene konvergieren' },
  { type: 'II', pred: 'Gentiana f32v endet ol.sho.chy= — Gentiana als bitteres Diagnostikum (Scheol-Blässe-Formel)', heb: 'עַל+שׁוֹ+כְּהִי', result: '✓ f32v P.11 ol.sho.chy= — reine Scheol-Diagnose ohne Heilungsformel', context: 'Enzian (Gentiana) gilt in der mittelalterlichen Pharmakologie als schweres Diagnostikum für lebensbedrohliche Zustände; Schlusskolophon spiegelt negative Prognose' },
  { type: 'II', pred: 'Bryonia f34v: Tier-Wurzel + oldar.qoldar = intensivierte Wurzelformeln (dreistufiges Präfix)', heb: 'עַל+דְּ+אַר / וְ+עַל+דְּ+אַר', result: '✓ f34v P.4 oldar.qoldar — tiefste Präfix-Schachtelung im Corpus', context: 'Bryonia-Wurzeln wurden zu Tierfiguren geschnitzt und als Mandragora-Ersatz verkauft; zoomorphe Wurzel-Ikonographie korrespondiert mit maximaler Wurzel-Textintensivierung (qoldar = dreistufig)' },
];

export const STATS = [
  { label: 'Typ I — Genuine Vorhersagen (Prä-Analyse-Anker, eingefroren)', pct: 100, num: '13 / 13', color: 'var(--gold)' },
  { label: 'Typ II — Interne Kohärenz (post-hoc-Entdeckungen)', pct: 87.5, num: '21 / 24', color: 'var(--green)' },
  { label: 'Bestätigt Spr. A (Anker, f1v–f15v)', pct: 100, num: '260 / 260', color: 'var(--green)' },
  { label: 'Falsch-positiv (gesamt)', pct: 0, num: '0', color: 'var(--gold)' },
];
