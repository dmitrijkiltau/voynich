export const TESTED = [
  { pred: 'dam', heb: 'דָּם', result: '✓ 4× f57r Zeilenende', context: 'qokedam, cheeodam, okoldm, yodam' },
  { pred: 'sar', heb: 'שַׂר', result: '✓ f57r P.9, f103r P.2,17', context: 'immer Zeilenmitte; nach daiin oder shedy' },
  { pred: 'chedy', heb: 'כְּדֵי', result: '✓ 22× f103r', context: 'nie mit -ody kombiniert (R5)' },
  { pred: 'shedy', heb: 'שֶׁ+דִּי', result: '✓ 27× f103r', context: 'immer von Konnektoren gefolgt' },
  { pred: 'sheol', heb: 'שְׁאוֹל', result: '✓ 8× f103r Zeilenende', context: 'P.23,35,40(×2),42,45' },
  { pred: 'daiin', heb: 'דִּין', result: '✓ 3× Zeilenanfang f103r', context: 'f57r P.5: qokcho·daiin·cheeodam' },
  { pred: 'chalal', heb: 'חָלָל', result: '✓ 1× exakt nach sheol P.42', context: 'tshey·sheol·cheolshy·chalal' },
  { pred: 'ckhy', heb: 'כְּהִי', result: '✓ f57r P.2,9; f103r P.17,23', context: '4 unabhängige Belege' },
  { pred: 'dal', heb: 'דַּל', result: '✓ Dreifach-Refrain f103r P.1', context: 'pchedal, yshdal, dal (standalone)' },
  { pred: 'taiir', heb: 'תָּאִיר', result: '✓ f57r P.8 Zeilenbeginn', context: 'taiir·sheedy·lchedy·ckheedy' },
  { pred: 'sheoldam', heb: 'שְׁאוֹל+דָּם', result: '✓ f3r P.9 auf Blutpflanze', context: 'botanische Kohärenz; beide ★★★★★-Anker fusioniert' },
  { pred: 'daiidy / daiindy', heb: 'דִּין+דִּי', result: '✓ f57r P.9, f3v P.2, f9r P5', context: 'drei Folios, identische Funktion' },
  { pred: 'tsheoarom', heb: 'תְּ+שְׁאוֹ+רוֹם', result: '✓ f3r P.15 Heilungsformel', context: 'nach 7 Blut-Paragraphen: kohärenter Positionswechsel' },
  { pred: 'dsholdy', heb: 'דְּ+שׁוֹל+דִּי', result: '✓ f9r P5L', context: 'Genitiv-Kompositum parallel zu daiindy' },
  { pred: 'shoiin', heb: 'שׁוֹ+עַיִן', result: '✓ f10v P4 + P6', context: 'Doppelbeleg auf demselben Folio' },
  { pred: 'chaiin · ckhy · or · aiin', heb: 'Prognose-Tetrade', result: '✓ f10r P4 (alle vier in einer Zeile)', context: 'vollständiges hippokratisches Schema' },
  { pred: 'torshor', heb: 'תֹּר+שׁוֹר', result: '✓ f13r P.1 Paragraph-Öffner', context: 'Jahreszeit-Zeichen; erster Beleg dieser Form im Korpus' },
  { pred: 'pchy', heb: 'פְּחִי', result: '✓ 4× f13r — höchste Atemweg-Dichte', context: 'opchy, qopchy, pchy; bestätigt Alant-Identifikation' },
  { pred: 'shol · dy · … · shol', heb: 'R24-Struktur', result: '✓ f13r P.1 (Dopplungsformel)', context: 'einmaliges Emphase-Muster mit Genitiv-Brücke dy' },
];

export const STATS = [
  { label: 'Bestätigt Spr. B (★★★★+)', pct: 88, num: '23 / 26', color: 'var(--gold)' },
  { label: 'Bestätigt Spr. A (Anker, f1v–f13v)', pct: 100, num: '260 / 260', color: 'var(--green)' },
  { label: 'Nicht gefunden', pct: 8, num: '2 / 26', color: 'var(--red)' },
  { label: 'Falsch-positiv (gesamt)', pct: 0, num: '0', color: 'var(--gold)' },
];
