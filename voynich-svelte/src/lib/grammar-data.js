export const GRAMMAR_PREFIXES = [
  { eva: 'qo-', heb: 'וְ', fn: 'Vav conjunctive „und/auch“', ex_eva: 'qokedam', ex_heb: 'וְכְּדָּם', stars: '★★★★' },
  { eva: 'o-', heb: 'עַ', fn: 'Ayin „auf/bei/von“', ex_eva: 'okol', ex_heb: 'עַכֹּל', stars: '★★★★' },
  { eva: 'l-', heb: 'לְ', fn: 'Lamed „zu/für/nach“', ex_eva: 'lchedy', ex_heb: 'לְכְּדֵי', stars: '★★★★' },
  { eva: 'd-', heb: 'דְּ/דִּי', fn: 'Aramäisches Relativpräfix „von/dessen/welches“ (R45) — äußerste morphol. Schale; kein D1-Flag wenn d- vor Konsonant', ex_eva: 'dsholdy', ex_heb: 'דְּשׁוֹל+דִּי', stars: '★★★★★' },
  { eva: 'p-', heb: 'פְּ', fn: 'Pe-Präfix (Nominalkonstrukt)', ex_eva: 'pchedal', ex_heb: 'פְּכֶּדַּל', stars: '★★★' },
  { eva: 'op-/of-', heb: 'עַ+פֶּ', fn: 'Ayin+Pe: „auf/an dem Mund/Öffnung von“ — astronomischer Koordinatenmarker (R41-Erweiterung per R47)', ex_eva: 'opcheear', ex_heb: 'עַ+פֶּ+כְּ+אֵר', stars: '★★★' },
  { eva: 'y-', heb: 'יְ', fn: 'Imperfekt 3. Pers. Sg. Mask.', ex_eva: 'yshdal', ex_heb: 'יְשַׁדַּל', stars: '★★★★' },
  { eva: 't-', heb: 'תָּ', fn: 'Imperfekt 3. Pers. Sg. Fem. / 2. Pers.', ex_eva: 'taiir', ex_heb: 'תָּאִיר', stars: '★★★★' },
];

export const VERB_PARADIGM = [
  { eva: 'ykchaiin', heb: 'יְ+כְּ+חַיִּין', de: 'er wird wie Leben werden',              folio: 'f9r',     stars: '★★★★', negative: false, candidate: false },
  { eva: 'ycheor',   heb: 'יְ+כְּ+אוֹר',   de: 'er wird wie Licht heilen',               folio: 'f10r',    stars: '★★★★', negative: false, candidate: false },
  { eva: 'ykchor',   heb: 'יְ+כְּ+חֹר',    de: 'er heilt die Pupille',                   folio: 'f11r P6', stars: '★★★★★',  negative: false, candidate: false },
  { eva: 'ykchy',    heb: 'יְ+כְּ+הִי',    de: 'er wird Blässe zeigen',                  folio: 'f11v P2', stars: '★★★★', negative: false, candidate: false },
  { eva: 'ykaiin',   heb: 'יְ+כְּ+עַיִן',  de: 'er heilt das Auge',                      folio: 'f14r P8', stars: '★★★★', negative: false, candidate: false },
  { eva: 'ykshol',   heb: 'יְ+כְּ+שׁוֹל',  de: 'er wird zu Scheol gehen (negativ)',       folio: 'f15r P12',stars: '★★★★', negative: true,  candidate: false },
  { eva: 'ykair',    heb: 'יְ+כְּ+אִיר',        de: 'er heilt leuchtend (★★ provisorisch — R43: f16r nur 1×)',               folio: 'f16r P1.3', stars: '★★', negative: false, candidate: true },
  { eva: 'tshaiin',  heb: 'תּ+שׁ+עַיִן',       de: 'du wirst das Auge [behandeln/waschen] — Direktbefehl (★★★ Kand.)',       folio: 'f21r P9',   stars: '★★★', negative: false, candidate: true },
  { eva: 'ykeechy',  heb: 'יְ+כְּ+אֵ+כְּ+הֵי', de: 'er heilt wie Blässe-Licht (8. y+k-Verb; ★★★ Kand. R43-Frist: 5 Folios)', folio: 'f26r P9',   stars: '★★★', negative: false, candidate: true },
];

export const GRAMMAR_SUFFIXES = [
  { eva: '-dy', heb: 'דִּי', fn: 'Aramäisch: Genitiv/Relativ „von/dessen“', stars: '★★★★' },
  { eva: '-dam', heb: 'דָּם', fn: '„Blut“ — Zeilenabschluss-Refrain in f57r', stars: '★★★★★' },
  { eva: '-dal', heb: 'דַּל', fn: '„schwach/dünn“ — Diagnose-Refrain', stars: '★★★★' },
  { eva: '-aiin', heb: 'עַיִן', fn: '„Auge“ — diagnostischer Terminus in Suffixposition', stars: '★★★★' },
  { eva: '-ody', heb: '+דִּי', fn: 'Vokalhelfer + דִּי; Listenregister f57r P.3–P.4', stars: '★★★' },
  { eva: '-aly', heb: '+לִי', fn: 'Zodiak-Suffix -aly: Vokalhelfer + lamed + Yod; Sternlabel-Register (R52a)', stars: '★★★★' },
  { eva: '-ary', heb: '+רִי', fn: 'Zodiak-Suffix -ary: Vokalhelfer + resch + Yod; Sternlabel-Register (R52a)', stars: '★★★★' },
];
