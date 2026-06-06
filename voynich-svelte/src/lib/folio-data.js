// Folio pages — grouped by quire
export const FOLIO_PAGES = [
  { q: 'q01', label: 'Lage 1 — Kräuter A · f1–f8',          pages: ['f1r','f1v','f2r','f2v','f3r','f3v','f4r','f4v','f5r','f5v','f6r','f6v','f7r','f7v','f8r','f8v'] },
  { q: 'q02', label: 'Lage 2 — Kräuter A · f9–f16',         pages: ['f9r','f9v','f10r','f10v','f11r','f11v','f13r','f13v','f14r','f14v','f15r','f15v','f16r','f16v'] },
  { q: 'q03', label: 'Lage 3 — Kräuter A · f17–f24',        pages: ['f17r','f17v','f18r','f18v','f19r','f19v','f20r','f20v','f21r','f21v','f22r','f22v','f23r','f23v','f24r','f24v'] },
  { q: 'q04', label: 'Lage 4 — Kräuter A · f25–f32',        pages: ['f25r','f25v','f26r','f26v','f27r','f27v','f28r','f28v','f29r','f29v','f30r','f30v','f31r','f31v','f32r','f32v'] },
  { q: 'q05', label: 'Lage 5 — Kräuter A/B · f33–f40',      pages: ['f33r','f33v','f34r','f34v','f35r','f35v','f36r','f36v','f37r','f37v','f38r','f38v','f39r','f39v','f40r','f40v'] },
  { q: 'q06', label: 'Lage 6 — Kräuter B · f41–f48',        pages: ['f41r','f41v','f42r','f42v','f43r','f43v','f44r','f44v','f45r','f45v','f46r','f46v','f47r','f47v','f48r','f48v'] },
  { q: 'q07', label: 'Lage 7 — Kräuter B · f49–f56',        pages: ['f49r','f49v','f50r','f50v','f51r','f51v','f52r','f52v','f53r','f53v','f54r','f54v','f55r','f55v','f56r','f56v'] },
  { q: 'q08', label: 'Lage 8 — Astronomisch · f57–f66',     pages: ['f57r','f57v','f58r','f58v','f65r','f65v','f66r','f66v'] },
  { q: 'q09', label: 'Lage 9 — Zodiak · f67–f68',           pages: ['f67r1','f67r2','f67v2','f67v1','f68r1','f68r2','f68r3','f68v3','f68v2','f68v1'] },
  { q: 'q10', label: 'Lage 10 — Biologisch · f69–f70',      pages: ['f69r','f69v','f70r1','f70r2','f70v2','f70v1'] },
  { q: 'q11', label: 'Lage 11 — Biologisch · f71–f72',      pages: ['f71r','f71v','f72r1','f72r2','f72r3','f72v3','f72v2','f72v1'] },
  { q: 'q12', label: 'Lage 12 — Biologisch · f73',          pages: ['f73r','f73v'] },
  { q: 'q13', label: 'Lage 13 — Biologisch · f75–f84',      pages: ['f75r','f75v','f76r','f76v','f77r','f77v','f78r','f78v','f79r','f79v','f80r','f80v','f81r','f81v','f82r','f82v','f83r','f83v','f84r','f84v'] },
  { q: 'q14', label: 'Lage 14 — Kosmologisch · f85–f86',    pages: ['f85r1','f85r2','fRos','f86v4','f86v6','f86v5','f86v3'] },
  { q: 'q15', label: 'Lage 15 — Pharmazeutisch · f87–f90',  pages: ['f87r','f87v','f88r','f88v','f89r1','f89r2','f89v2','f89v1','f90r1','f90r2','f90v2','f90v1'] },
  { q: 'q16', label: 'Lage 16 — Pharmazeutisch · f91–f92',  pages: ['f91r','f91v','f92r','f92v'] },
  { q: 'q17', label: 'Lage 17 — Pharmazeutisch · f93–f96',  pages: ['f93r','f93v','f94r','f94v','f95r1','f95r2','f95v2','f95v1','f96r','f96v'] },
  { q: 'q18', label: 'Lage 18 — Pharmazeutisch · f97–f98',  pages: ['f97r','f97v','f98r','f98v'] },
  { q: 'q19', label: 'Lage 19 — Pharmazeutisch · f99–f102', pages: ['f99r','f99v','f100r','f100v','f101r','f101v2','f101v1','f102r1','f102r2','f102v2','f102v1'] },
  { q: 'q20', label: 'Lage 20 — Rezepte/Sterne · f103–f116',pages: ['f103r','f103v','f104r','f104v','f105r','f105v','f106r','f106v','f107r','f107v','f108r','f108v','f111r','f111v','f112r','f112v','f113r','f113v','f114r','f114v','f115r','f115v','f116r','f116v'] },
];

/**
 * @typedef {{
 *   status: 'done' | 'confirmed' | 'partial';
 *   registerType?: string;
 *   languageClass?: string;
 *   writerHand?: number;
 *   transcribers?: { siglen: string[]; label: string }[];
 *   consensusDenominators?: string[];
 *   scanUrl?: string;
 * }} FolioEntry
 */

// Per-folio decryption status and metadata.
// status: 'done' — full translation
//         'confirmed' — heavily confirmed (★★★★+) in backtest
//         'partial' — image studied, lexicon anchors known, or Language-A range without full txt
//         absent — not yet analyzed (default 'none')
/** @type {Record<string, FolioEntry>} */
export const FOLIO_DATA = {
  // ── Lage 1 · Kräuter A (f1–f8) — Language-A lexicon range ────────────────
  f1r: {
    status: 'confirmed',
    registerType: 'Prosa / Haskama-Typ (sui generis) — kein {plant}-System',
    languageClass: 'Sprache A (Currier)',
    writerHand: 1,
    transcribers: [
      { siglen: ['H', 'C', 'F', 'N', 'U'], label: 'P-Zeilen, n=5' },
      { siglen: ['X'],                     label: 'Titel-/Kurzzeilen' },
      { siglen: ['D'],                     label: 'nur P1.4' },
      { siglen: ['J'],                     label: 'Erased-Key, nicht textrelevant' },
    ],
    consensusDenominators: [
      'P-Zeilen n=5 (H C F N U)',
      'Titel/Kurzzeilen n=6 (+X)',
      'P1.4 n=6 (+D)',
    ],
    scanUrl: 'https://collections.library.yale.edu/iiif/2/1006076/full/full/0/default.jpg',
  },
  f1v: {
    status: 'confirmed',
    registerType: 'Herbal (Standard Kräuterbild) — {plant}-System aktiv',
    languageClass: 'Sprache A (Currier)',
    writerHand: 1,
    transcribers: [
      { siglen: ['H', 'C', 'F'], label: 'P.1–P.10, n=3 Standard' },
      { siglen: ['D'],           label: 'P.7–P.8 zusätzlich, n=4' },
    ],
    consensusDenominators: [
      'P.1–P.6 + P.9–P.10: n=3 (H/C/F)',
      'P.7–P.8: n=4 (H/C/D/F)',
    ],
    scanUrl: 'https://collections.library.yale.edu/iiif/2/1006077/full/2804,/0/default.jpg',
  },
  f2r: { status: 'confirmed' },    f2v: { status: 'partial' },
  f3r: { status: 'confirmed' },    f3v: { status: 'confirmed' },    f4r: { status: 'confirmed' },    f4v: { status: 'partial' },
  f5r: { status: 'confirmed' },    f5v: { status: 'partial' },      f6r: { status: 'confirmed' },    f6v: { status: 'partial' },
  f7r: { status: 'confirmed' },    f7v: { status: 'partial' },      f8r: { status: 'confirmed' },    f8v: { status: 'partial' },

  // ── Lage 2 · Kräuter A (f9–f16) — translation HTMLs + txt transcriptions ──
  f9r:  { status: 'confirmed' },  f9v:  { status: 'confirmed' },
  f10r: { status: 'confirmed' },  f10v: { status: 'confirmed' },
  f11r: { status: 'confirmed' },  f11v: { status: 'confirmed' },
  f13r: { status: 'confirmed' },  f13v: { status: 'confirmed' },
  f14r: { status: 'confirmed' },  f14v: { status: 'confirmed' },
  f15r: { status: 'confirmed' },  f15v: { status: 'confirmed' },
  f16r: { status: 'confirmed' },  f16v: { status: 'confirmed' },

  // ── Lage 3 · Kräuter A (f17–f24) — Quire C (bC1–bC4) ───────────────────
  f17r: { status: 'confirmed' },  f17v: { status: 'confirmed' },
  f18r: { status: 'confirmed' },  f18v: { status: 'confirmed' },
  f19r: { status: 'confirmed' },  f19v: { status: 'confirmed' },
  f20r: { status: 'confirmed' },  f20v: { status: 'confirmed' },
  f21r: { status: 'confirmed' },  f21v: { status: 'confirmed' },
  f22r: { status: 'confirmed' },  f22v: { status: 'confirmed' },
  f23r: { status: 'confirmed' },  f23v: { status: 'confirmed' },
  f24r: { status: 'confirmed' },  f24v: { status: 'confirmed' },

  // ── Lage 4 · Kräuter A (f25–f32) — Quire D vollständig ──────────────────
  f25r: { status: 'confirmed' },  f25v: { status: 'confirmed' },
  f26r: { status: 'confirmed' },  f26v: { status: 'confirmed' },
  f27r: { status: 'confirmed' },  f27v: { status: 'confirmed' },
  f28r: { status: 'confirmed' },  f28v: { status: 'confirmed' },
  f29r: { status: 'confirmed' },  f29v: { status: 'confirmed' },
  f30r: { status: 'confirmed' },  f30v: { status: 'confirmed' },
  f31r: { status: 'confirmed' },  f31v: { status: 'confirmed' },
  f32r: { status: 'confirmed' },  f32v: { status: 'confirmed' },

  // ── Lage 10 · Kosmologisch — f69r Rad-Diagramm vollständig analysiert ──────
  f69r: { status: 'confirmed' },

  // ── Lage 5 · Kräuter B — f33r/v + f34r/v analysiert (v8.7, Sprache B) ─────
  f33r: { status: 'confirmed' },  f33v: { status: 'confirmed' },
  f34r: { status: 'confirmed' },  f34v: { status: 'confirmed' },

  // ── Lage 11 · Biologisch — f71–f72 · Zodiak bK1 vollständig analysiert ───
  f71r:  { status: 'confirmed' }, f71v:  { status: 'confirmed' },
  f72r1: { status: 'confirmed' }, f72r2: { status: 'confirmed' },

  // ── Lage 8 · Astronomisch — f57r+f58r analysiert; f57v = Zodiak-Diagramm ──
  f57r: { status: 'confirmed' },
  f57v: { status: 'partial' },
  f58r: { status: 'confirmed' },

  // ── Lage 14 · Kosmologisch — f85v+f86r txt+jpg asset ────────────────────
  f85r1: { status: 'partial' }, f85r2: { status: 'partial' }, fRos:  { status: 'partial' },
  f86v4: { status: 'partial' }, f86v6: { status: 'partial' }, f86v5: { status: 'partial' }, f86v3: { status: 'partial' },

  // ── Lage 20 · Rezepte / Randsterne ───────────────────────────────────────
  f103r: { status: 'confirmed' }, f103v: { status: 'confirmed' },
  f114v: { status: 'confirmed' },
  f115r: { status: 'confirmed' }, f115v: { status: 'confirmed' },
  f116r: { status: 'confirmed' }, f116v: { status: 'confirmed' },
};
