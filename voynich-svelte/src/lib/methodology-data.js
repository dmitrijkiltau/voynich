export const CONFIDENCE_SCALE = [
  { stars: '★★★★★', label: 'Gesichert',        criteria: 'Rückwärtstest ✓, ≥ 3 Folios, 0 Gegenbeispiele, R42-Kongruenz ✓, R43 erfüllt', is5: true },
  { stars: '★★★★',  label: 'Sehr stark',        criteria: 'Rückwärtstest ✓, ≥ 2 Folios, konsistente Kontextverteilung, R42-Kongruenz ✓, R43 erfüllt', is5: false },
  { stars: '★★★',   label: 'Stark',             criteria: 'Semantisch kohärent, morphologisch konsistent, Basiswurzel ≥ 4 Konsonanten (R40 v2), R43 erfüllt', is5: false },
  { stars: '★★★ Kand.', label: 'Stark-Kandidat', criteria: '★★★-Kriterien erfüllt, R43 ausstehend (Einzel-Folio ≥ 8×, Bestätigung binnen 5 Folios)', is5: false },
  { stars: '★★',    label: 'Möglich',           criteria: 'Passt in Kontext, mehrere Alternativlesarten oder Basiswurzel ≤ 3 Konsonanten ohne 2 Ausnahmen (R40 v2)', is5: false },
  { stars: '★',     label: 'Spekulativ',        criteria: 'Erste Hypothese, noch nicht getestet', is5: false },
];

export const ANCHOR_FOLIOS = [
  {
    folio: 'f57r',
    subtitle: 'Stärkstes Einzelfolio',
    desc: 'Quire 8, Sprache B, Hand 2. Botanisch-pharmazeutische Seite. Enthält die stärkste Einzelsequenz:',
    eva: 'sar · al · daiindy',
    heb: 'שַׂר עַל דִּין דִּי',
    gloss: '„Arzt über das Urteil dessen."',
  },
  {
    folio: 'f103r',
    subtitle: 'Höchste Lexikondichte',
    desc: 'Quire 20, Sprache B. 54 Paragraphen reiner Prosatext mit der höchsten Konzentration bestätigter Wörter und den vollständigsten übersetzten Sätzen.',
    eva: null,
    heb: null,
    gloss: null,
  },
];
