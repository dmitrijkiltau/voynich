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

// Folios physically missing from the manuscript — no JSON file exists for these.
// Status for all other folios is derived from folio JSON content at runtime.
export const LACUNA = new Set([
  'f59r', 'f59v', 'f60r', 'f60v',
  'f61r', 'f61v', 'f62r', 'f62v',
  'f63r', 'f63v', 'f64r', 'f64v',
  'f91r', 'f91v', 'f92r', 'f92v',
  'f97r', 'f97v', 'f98r', 'f98v',
]);
