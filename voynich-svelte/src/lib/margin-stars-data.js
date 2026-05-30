export const STAR_TYPES = [
  { type: 'Rot', morph: 'Gefüllte rote Mitte, 6–8 Zacken', fn: 'Falleröffnung / Akutphase', stars: '★★★', is5: false },
  { type: 'Leer', morph: 'Hohle Mitte, Umrandung', fn: 'Krisenphase / Verlauf (sheol-Vokabular häufig)', stars: '★★★', is5: false },
  { type: 'Punkt', morph: 'Kleiner Mittelpunkt', fn: 'Abschlussnotiz / Prognose (stärkstes sheol·chalal)', stars: '★★★', is5: false },
  { type: 'Beige', morph: 'Pergamentfarbene Mitte', fn: 'Zweite Seitenhälfte (ab P.27 f103r); schwerste Fälle', stars: '★★', is5: false },
  { type: 'Sonderstern', morph: '8 Zacken + Schleife', fn: 'Registerabschluss (f103r P.52, f114v P.1)', stars: '★★★', is5: false },
];

export const FOLIOS = [
  { folio: 'f103r/v', principle: 'Spärlich (19/54 Para.); sternlos = positiver Ausgang', note: 'Inclusio P.1↔P.52; beige Zone ab P.27' },
  { folio: 'f116r', principle: 'Regelmäßige ~3er-Gruppen (P.1–P.30); danach sternlose Sektion', note: 'Transkriptor: „End of starred paragraphs"' },
  { folio: 'f114v', principle: 'Strikt alternierend Beige–Rot–Beige–Rot', note: 'Paarstruktur; Schleifenlänge als zweite Dimension' },
  { folio: 'f115r/v', principle: 'Überwiegend 8-zackig mit Schleife', note: 'Stark ch-dominiertes Vokabular — anderes Register' },
];
