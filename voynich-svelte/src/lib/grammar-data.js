export const GRAMMAR_PREFIXES = [
  { eva: 'qo-', heb: 'וְ', fn: 'Vav conjunctive „und/auch"', ex_eva: 'qokedam', ex_heb: 'וְכְּדָּם', stars: '★★★★', is5: false },
  { eva: 'o-', heb: 'עַ', fn: 'Ayin „auf/bei/von"', ex_eva: 'okol', ex_heb: 'עַכֹּל', stars: '★★★★', is5: false },
  { eva: 'l-', heb: 'לְ', fn: 'Lamed „zu/für/nach"', ex_eva: 'lchedy', ex_heb: 'לְכְּדֵי', stars: '★★★★', is5: false },
  { eva: 'd-', heb: 'דְּ/דִּי', fn: 'Aramäisches Relativpräfix „von/dessen/welches" (R45) — äußerste morphol. Schale; kein D1-Flag wenn d- vor Konsonant', ex_eva: 'dsholdy', ex_heb: 'דְּשׁוֹל+דִּי', stars: '★★★★★', is5: true },
  { eva: 'p-', heb: 'פְּ', fn: 'Pe-Präfix (Nominalkonstrukt)', ex_eva: 'pchedal', ex_heb: 'פְּכֶּדַּל', stars: '★★★', is5: false },
  { eva: 'op-/of-', heb: 'עַ+פֶּ', fn: 'Ayin+Pe: „auf/an dem Mund/Öffnung von" — astronomischer Koordinatenmarker (R41-Erweiterung per R47)', ex_eva: 'opcheear', ex_heb: 'עַ+פֶּ+כְּ+אֵר', stars: '★★★', is5: false },
  { eva: 'y-', heb: 'יְ', fn: 'Imperfekt 3. Pers. Sg. Mask.', ex_eva: 'yshdal', ex_heb: 'יְשַׁדַּל', stars: '★★★★', is5: false },
  { eva: 't-', heb: 'תָּ', fn: 'Imperfekt 3. Pers. Sg. Fem. / 2. Pers.', ex_eva: 'taiir', ex_heb: 'תָּאִיר', stars: '★★★★', is5: false },
];

export const VERB_PARADIGM = [
  { eva: 'ykchaiin', heb: 'יְ+כְּ+חַיִּין', de: 'er wird wie Leben werden',              folio: 'f9r',     stars: '★★★★',  is5: false, negative: false, candidate: false },
  { eva: 'ycheor',   heb: 'יְ+כְּ+אוֹר',   de: 'er wird wie Licht heilen',               folio: 'f10r',    stars: '★★★★',  is5: false, negative: false, candidate: false },
  { eva: 'ykchor',   heb: 'יְ+כְּ+חֹר',    de: 'er heilt die Pupille',                   folio: 'f11r P6', stars: '★★★★★', is5: true,  negative: false, candidate: false },
  { eva: 'ykchy',    heb: 'יְ+כְּ+הִי',    de: 'er wird Blässe zeigen',                  folio: 'f11v P2', stars: '★★★★',  is5: false, negative: false, candidate: false },
  { eva: 'ykaiin',   heb: 'יְ+כְּ+עַיִן',  de: 'er heilt das Auge',                      folio: 'f14r P8', stars: '★★★★',  is5: false, negative: false, candidate: false },
  { eva: 'ykshol',   heb: 'יְ+כְּ+שׁוֹל',  de: 'er wird zu Scheol gehen (negativ)',       folio: 'f15r P12',stars: '★★★★',  is5: false, negative: true,  candidate: false },
  { eva: 'ykair',    heb: 'יְ+כְּ+אִיר',   de: 'er heilt leuchtend (★★ provisorisch — R43: f16r nur 1×)', folio: 'f16r P1.3', stars: '★★', is5: false, negative: false, candidate: true },
  { eva: 'tshaiin',  heb: 'תּ+שׁ+עַיִן',  de: 'du wirst das Auge [behandeln/waschen] — Direktbefehl (★★★ Kand.)', folio: 'f21r P9', stars: '★★★', is5: false, negative: false, candidate: true },
];

export const GRAMMAR_SUFFIXES = [
  { eva: '-dy', heb: 'דִּי', fn: 'Aramäisch: Genitiv/Relativ „von/dessen"', stars: '★★★★', is5: false },
  { eva: '-dam', heb: 'דָּם', fn: '„Blut" — Zeilenabschluss-Refrain in f57r', stars: '★★★★★', is5: true },
  { eva: '-dal', heb: 'דַּל', fn: '„schwach/dünn" — Diagnose-Refrain', stars: '★★★★', is5: false },
  { eva: '-aiin', heb: 'עַיִן', fn: '„Auge" — diagnostischer Terminus in Suffixposition', stars: '★★★★', is5: false },
  { eva: '-ody', heb: '+דִּי', fn: 'Vokalhelfer + דִּי; Listenregister f57r P.3–P.4', stars: '★★★', is5: false },
  { eva: '-aly', heb: '+לִי', fn: 'Zodiak-Suffix -aly: Vokalhelfer + lamed + Yod; Sternlabel-Register (R52a)', stars: '★★★★', is5: false },
  { eva: '-ary', heb: '+רִי', fn: 'Zodiak-Suffix -ary: Vokalhelfer + resch + Yod; Sternlabel-Register (R52a)', stars: '★★★★', is5: false },
];
