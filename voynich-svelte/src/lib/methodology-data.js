export const CONFIDENCE_SCALE = [
  { stars: '★★★★★', label: 'Gesichert',        criteria: 'Rückwärtstest ✓, ≥ 3 Folios, 0 Gegenbeispiele, R42-Kongruenz ✓, R43 erfüllt' },
  { stars: '★★★★',  label: 'Sehr stark',        criteria: 'Rückwärtstest ✓, ≥ 2 Folios, konsistente Kontextverteilung, R42-Kongruenz ✓, R43 erfüllt' },
  { stars: '★★★',   label: 'Stark',             criteria: 'Semantisch kohärent, morphologisch konsistent, Basiswurzel ≥ 4 Konsonanten (R40 v2), R43 erfüllt' },
  { stars: '★★★ Kand.', label: 'Stark-Kandidat', criteria: '★★★-Kriterien erfüllt, R43 ausstehend (Einzel-Folio ≥ 8×, Bestätigung binnen 5 Folios)' },
  { stars: '★★',    label: 'Möglich',           criteria: 'Passt in Kontext, mehrere Alternativlesarten oder Basiswurzel ≤ 3 Konsonanten ohne 2 Ausnahmen (R40 v2)' },
  { stars: '★',     label: 'Spekulativ',        criteria: 'Erste Hypothese, noch nicht getestet' },
];

export const ANCHOR_FOLIOS = [
  {
    folio: 'f57r',
    subtitle: 'Stärkstes Einzelfolio',
    desc: 'Quire 8, Sprache B, Hand 2. Botanisch-pharmazeutische Seite. Enthält die stärkste Einzelsequenz:',
    eva: 'sar · al · daiindy',
    heb: 'שַׂר עַל דִּין דִּי',
    gloss: '„Arzt über das Urteil dessen.“',
  },
  {
    folio: 'f103r',
    subtitle: 'Höchste Lexikondichte',
    desc: 'Quire 20, Sprache B. 54 Paragraphen reiner Prosatext mit der höchsten Konzentration bestätigter Wörter und den vollständigsten übersetzten Sätzen.',
    eva: null,
    heb: null,
    gloss: null,
  },
  {
    folio: 'f58r',
    subtitle: 'Erster astronomischer Stresstest',
    desc: 'Quire H (Beinecke VIII), Sprache A. Erster analysierter Nicht-Botanical-Folio. Beweist semantische Invarianz des Mappings über Register hinweg — alle Ankerwörter behalten ihre Bedeutungen ohne Ad-hoc-Anpassung:',
    eva: 'ytor · ar · alom',
    heb: 'יְ+תֹּ+אוֹר · אֹר · עָלוֹם',
    gloss: '„er wird erleuchten — Licht — in der Welt.“ (f58r P.30 — R43-Bestätigung für ytor ★★★★)',
  },  {
    folio: 'f71r–f72r2',
    subtitle: 'Erstes vollständiges Zodiak-Register',
    desc: 'Quire K (Beinecke XI), Sprache B-dominant. Zodiak-Tetraptychon bK1: 4 Panels, 75 Sternlabeln, 12/12 Ankerwörter bestätigt (100 %). Erste Bestätigung von R50 ★★★★ und R52a ★★★★ im Zodiak-Register. R19/R35-Intensivierung erstmals im Zodiak belegt:',
    eva: 'otam · otam · chotam',
    heb: 'אוֹת+אָם · אוֹת+אָם · כֹּ+אוֹת+אָם',
    gloss: '„Zeichen der Mutter — Zeichen der Mutter — wie das Zeichen der Mutter.“ (f72r1 R1 — R35-Dreistufenschema ★★★)',
  },];
