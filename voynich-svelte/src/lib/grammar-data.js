export const GRAMMAR_PREFIXES = [
  { eva: 'qo-', heb: 'וְ', fn: 'Vav conjunctive „und/auch"', ex_eva: 'qokedam', ex_heb: 'וְכְּדָּם', stars: '★★★★', is5: false },
  { eva: 'o-', heb: 'עַ', fn: 'Ayin „auf/bei/von"', ex_eva: 'okol', ex_heb: 'עַכֹּל', stars: '★★★★', is5: false },
  { eva: 'l-', heb: 'לְ', fn: 'Lamed „zu/für/nach"', ex_eva: 'lchedy', ex_heb: 'לְכְּדֵי', stars: '★★★★', is5: false },
  { eva: 'd-', heb: 'דְּ', fn: 'Dalet „von/aus/der"', ex_eva: 'dsholdy', ex_heb: 'דְּשׁוֹל+דִּי', stars: '★★★★★', is5: true },
  { eva: 'p-', heb: 'פְּ', fn: 'Pe-Präfix (Nominalkonstrukt)', ex_eva: 'pchedal', ex_heb: 'פְּכֶּדַּל', stars: '★★★', is5: false },
  { eva: 'y-', heb: 'יְ', fn: 'Imperfekt 3. Pers. Sg. Mask.', ex_eva: 'yshdal', ex_heb: 'יְשַׁדַּל', stars: '★★★★', is5: false },
  { eva: 't-', heb: 'תָּ', fn: 'Imperfekt 3. Pers. Sg. Fem. / 2. Pers.', ex_eva: 'taiir', ex_heb: 'תָּאִיר', stars: '★★★★', is5: false },
];

export const GRAMMAR_SUFFIXES = [
  { eva: '-dy', heb: 'דִּי', fn: 'Aramäisch: Genitiv/Relativ „von/dessen"', stars: '★★★★', is5: false },
  { eva: '-dam', heb: 'דָּם', fn: '„Blut" — Zeilenabschluss-Refrain in f57r', stars: '★★★★★', is5: true },
  { eva: '-dal', heb: 'דַּל', fn: '„schwach/dünn" — Diagnose-Refrain', stars: '★★★★', is5: false },
  { eva: '-aiin', heb: 'עַיִן', fn: '„Auge" — diagnostischer Terminus in Suffixposition', stars: '★★★★', is5: false },
  { eva: '-ody', heb: '+דִּי', fn: 'Vokalhelfer + דִּי; Listenregister f57r P.3–P.4', stars: '★★★', is5: false },
];
