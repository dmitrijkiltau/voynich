export const STEM_WORDS = [
  { eva: "dam",     heb: "דָּם",        de: "Blut",                                                 layer: "Mischna-Hebräisch",                     anchorFolio: "f57r",                  confidenceStars: 5, candidate: false, rulesApplied: ["R40"] },
  { eva: "shol",    heb: "שׁוֹל",       de: "Tod / Unterwelt (apokopiert von Sheol)",               layer: "Jüdisch-Aramäisch (Sprache A)",                                               confidenceStars: 5, candidate: false, rulesApplied: ["R40"] },
  { eva: "aiin",    heb: "עַיִן",       de: "Auge / Quelle",                                        layer: "Mischna-Hebräisch",                     anchorFolio: "f22r",                  confidenceStars: 5, candidate: false, rulesApplied: ["R2", "R42"] },
  { eva: "kol",     heb: "כֹּל",        de: "Alles / Gesamtheit",                                   layer: "Hebräisch",                             anchorFolio: "f58r",                  confidenceStars: 5, candidate: false, rulesApplied: ["R2", "R40"] },
  { eva: "shor",    heb: "שׁוּר",       de: "Blick / Reihe / Ochse",                                layer: "Aramäisch / Hebräisch",                                                       confidenceStars: 5, candidate: false, rulesApplied: ["R15"] },
  { eva: "chdy",    heb: "חֶדְוָה",      de: "Freude / Brust (anatomisch über aram. Schicht)",       layer: "Jüdisch-Aramäisch",                     anchorFolio: "f33v",                  confidenceStars: 5, candidate: false, rulesApplied: ["R15"] },
  { eva: "kaiim",   heb: "קַיָּם",       de: "gültig / beständig (Schlussformel)",                   layer: "",                                                                            confidenceStars: 5, candidate: false, rulesApplied: [] },
  { eva: "chor",    heb: "חֹר",        de: "Pupille / Höhle / Loch",                               layer: "Mischna-Hebräisch",                                                           confidenceStars: 4, candidate: false, rulesApplied: ["R15", "R40"] },
  { eva: "or",      heb: "אוֹר",       de: "Licht / Glanz",                                        layer: "Hebräisch",                                                                   confidenceStars: 4, candidate: false, rulesApplied: ["R2"] },
  { eva: "chok",    heb: "חֹק",        de: "Satzung / Vorschrift / Rezepturregel",                 layer: "Mischna-Hebräisch",                                                           confidenceStars: 4, candidate: false, rulesApplied: ["R40"] },
  { eva: "cheey",   heb: "חֵיי",       de: "Leben",                                                layer: "Hebräisch",                             anchorFolio: "f30v",                  confidenceStars: 4, candidate: false, rulesApplied: ["R50"] },
  { eva: "sheol",   heb: "שְׁאוֹל",      de: "Scheol / Tod (Vollform zu shol)",                      layer: "Biblisches Hebräisch",                                                        confidenceStars: 4, candidate: false, rulesApplied: ["R40"] },
  { eva: "dal",     heb: "דַּל",        de: "schwach / abgemagert",                                 layer: "Hebräisch",                                                                   confidenceStars: 4, candidate: false, rulesApplied: ["R40"] },
  { eva: "ckhy",    heb: "כְּהִי",       de: "Blässe / Trübheit",                                    layer: "Mischna-Hebräisch",                                                           confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "char",    heb: "חַר",        de: "heiß / Fieber",                                        layer: "Mischna-Hebräisch",                                                           confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "daiin",   heb: "דִּין",       de: "Urteil / Prognose",                                    layer: "Jüdisch-Aramäisch / Mischna-Hebräisch",                                                                             rulesApplied: ["R40"] },
  { eva: "chalal",  heb: "חָלָל",       de: "Sterbender",                                           layer: "",                                                                            confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "chaiin",  heb: "חַיִּין",      de: "Leben (Chayyim)",                                      layer: "Biblisches Hebräisch",                                                        confidenceStars: 4, candidate: false, rulesApplied: ["R18"] },
  { eva: "chan",    heb: "חָן",        de: "Gnade / günstige Prognose",                            layer: "",                                                                            confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "dom",     heb: "דּוֹם",       de: "Stille / Ende",                                        layer: "",                                                                            confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "tam",     heb: "תָּם",        de: "vollständig / rein",                                   layer: "",                                      anchorFolio: "f69r",                  confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "cheol",   heb: "ח-ע-ל",     de: "schöpfen / heben (balneolog. Augenbad-Marker)",        layer: "",                                                                            confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "olom",    heb: "עוֹלָם",      de: "Ewigkeit / Welt",                                      layer: "",                                      anchorFolio: "f24v",                  confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "sar",     heb: "שַׂר",        de: "Arzt / Meister / Vorsteher",                           layer: "",                                                                            confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "al",      heb: "עַל",        de: "auf / über / betreffend (Basispräposition; Var. ol)",  layer: "",                                                                            confidenceStars: 4, candidate: false, rulesApplied: ["R40"] },
  { eva: "tal",     heb: "טַל",        de: "Tau / Pflanzensaft / Feuchtigkeit",                    layer: "Hebräisch",                             anchorFolio: "f13v (Erstbeleg)",      confidenceStars: 3, candidate: false, rulesApplied: ["R14", "R40"] },
  { eva: "dar",     heb: "דּוֹר",       de: "Generation / Kreis / Wohnort",                         layer: "Hebräisch / Aramäisch",                                                                                             rulesApplied: ["R15", "R41"] },
  { eva: "kar",     heb: "כָּרָה",       de: "graben / untersuchen (med. Kontext)",                  layer: "Mischna-Hebräisch",                     anchorFolio: "f006r P.2 (H/C/F 3/3)", confidenceStars: 3, candidate: false, rulesApplied: ["R40"] },
  { eva: "cham",    heb: "חַם",        de: "Wärme / Entzündung (hippokr. Befund-Term)",            layer: "Mischna-Hebräisch",                                                           confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "ram",     heb: "רָם",        de: "erhöht / Fieber",                                      layer: "",                                                                            confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "dol",     heb: "דָּוֶה",       de: "Schmerz / Krankheit",                                  layer: "Hebräisch",                                                                   confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "shees",   heb: "אֵשׁ",        de: "Feuer / Fieberbrand",                                  layer: "",                                                                            confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "sheey",   heb: "שֵׁי",        de: "Gabe / Wohlbefinden",                                  layer: "Biblisches Hebräisch / Aramäisch",      anchorFolio: "f013r",                 confidenceStars: 3, candidate: false, rulesApplied: ["R40"] },
  { eva: "otan",    heb: "עֹתָן",       de: "Zeit / Jahreszeit der Erkrankung",                     layer: "",                                                                            confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "darom",   heb: "דָּרוֹם",      de: "Süden",                                                layer: "",                                      anchorFolio: "f19v",                  confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "shalom",  heb: "שָׁלוֹם",      de: "Friede / günstige Konstellation",                      layer: "",                                      anchorFolio: "f58r",                  confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "alef",    heb: "אָלֶף",       de: "Aleph (Ochse, ikonograph. Buchstabenreferenz)",        layer: "",                                      anchorFolio: "f72r1",                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "shod",    heb: "שׁוֹד",       de: "Verheerung / Verwüstung",                              layer: "",                                                                            confidenceStars: 3, candidate: false, rulesApplied: ["R40"] },
  { eva: "chom",    heb: "חֹם",        de: "Wärme / Hitze (Schwesterform von cham)",               layer: "Mischna-Hebräisch",                                                           confidenceStars: 3, candidate: false, rulesApplied: ["R40"] },
  { eva: "chey",    heb: "חֵי",        de: "lebendig / am Leben (Adj.)",                           layer: "Hebräisch",                                                                   confidenceStars: 3, candidate: false, rulesApplied: ["R40"] },
  { eva: "dor",     heb: "דֹּר",        de: "Generation / Wachstumszyklus / Zeitraum",              layer: "",                                                                            confidenceStars: 3, candidate: false, rulesApplied: ["R40"] },
  { eva: "chod",    heb: "חֹד",        de: "Schärfe / Akutheit (med. Terminus)",                   layer: "",                                                                            confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "tolol",   heb: "תֹּלֹל",       de: "geschwächt / hängend (Zustands-Adj.)",                 layer: "",                                                                            confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "sam",     heb: "שַׂם",        de: "Arznei",                                               layer: "Mischna-Hebräisch",                                                           confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "shty",    heb: "שְׁתִי",       de: "Getränk / Trank",                                      layer: "",                                                                            confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "pol",     heb: "פֹּל",        de: "Bohne / Beere / Frucht",                               layer: "",                                                                            confidenceStars: 3, candidate: false, rulesApplied: ["R60"] },
  { eva: "pcho",    heb: "פְּחֹ",        de: "Atem / Mund (Sprache-A-Grundform)",                    layer: "",                                                                            confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "fol",     heb: "פֹּל / פּוּל",  de: "Röhrenschaft / Stiel-Hülse (CAULIS-Eröffner)",         layer: "",                                      anchorFolio: "f13v",                  confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "sho",     heb: "שׁוֹ",        de: "Scheol-Gleichheitspartikel",                           layer: "Jüdisch-Aramäisch",                                                           confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "dy",      heb: "דִּי",        de: "von / dessen",                                         layer: "Jüdisch-Aramäisch",                                                           confidenceStars: 2, candidate: false, rulesApplied: ["R41"] },
  { eva: "qodom",   heb: "קֶדֶם",       de: "Osten / Vorzeit / Vergangenheit",                      layer: "",                                      anchorFolio: "f24v",                  confidenceStars: 2, candidate: false, rulesApplied: [] },
];

export const PREF_CH = [
  { eva: "chkar",   morph: "ch- + kar",       heb: "חֲקַר",   de: "er untersucht (Qal von חקר)",  evidence: "f2r P.2 (Erstbeleg) + f9r + f16v + f27v + f115r",  confidenceStars: 3, candidate: false, rulesApplied: ["R43"] },
  { eva: "chckhy",  morph: "ch- + k- + chy",  heb: "חֶכָּהִי",  de: "Blässe-Hitze-Zeichen",         evidence: "",                                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
];

export const PREF_D = [
  { eva: "dsholdy", morph: "d- + shol + -dy",     heb: "דְּשׁוֹלדִּי",      de: "von Scheol (dessen/Genitiv)",                      evidence: "",                                 confidenceStars: 5, candidate: false, rulesApplied: [] },
  { eva: "deaiin",  morph: "d- + aiin",           heb: "דְּעַיִן",        de: "vom Auge",                                         evidence: "f28r P.9 (Kolophon)",              confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "dchckhy", morph: "d- + k- + k- + chy",  heb: "דְּכְּכְּהִי",       de: "von tiefer Blässe (Intensiv-Diagnosesiegel)",      evidence: "",                                 confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "dsho",    morph: "d- + sho",            heb: "דְּשׁוֹ",         de: "von Scheol (Kurzform)",                            evidence: "",                                 confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "dair",    morph: "d- + ir",             heb: "דְּאִיר",        de: "der Leuchtende / Licht davon   ",                  evidence: "f1v P.4 + P.5 (H/C/F 3/3)",        confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "daiir",   morph: "d- + ir",             heb: "דַּאִיר",        de: "der Leuchtende (verlängerte Form von dair)",       evidence: "f31r P.9 (Sprache-B-Variante)",    confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "dainod",  morph: "d- + aiin + od",      heb: "דַּאִיןעֹד",      de: "er behandelt das Auge weiter",                     evidence: "",                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "dchar",   morph: "d- + kar",            heb: "דְּכַּר",         de: "vom Widder / männlich (Zutaten-Term)",             evidence: "f1r P3.19 (Erstbeleg) + f28r P.2", confidenceStars: 3, candidate: false, rulesApplied: ["R45", "R43"] },
  { eva: "dshy",    morph: "d- + shy",            heb: "דְּשֵׁי",         de: "von der Gabe",                                     evidence: "",                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "dairin",  morph: "d- + ir + -in",       heb: "דְּאִירִין",      de: "von dem Leuchtenden",                              evidence: "",                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "dchm",    morph: "d- + cham",           heb: "דְּחָם",         de: "von der Entzündung",                               evidence: "",                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "dchal",   morph: "d- + chal",           heb: "דְּחַל",         de: "von dem was gilt / von dem Sterbenden",            evidence: "",                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "dchy",    morph: "d- + k- + chy",       heb: "דְּכָּהִי",        de: "von der Blässe davon",                             evidence: "",                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "dshor",   morph: "d- + shor",           heb: "דְּשׁוֹר / דְּאֹר",  de: "von/des Lichts",                                   evidence: "f58r P.4",                         confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "ddor",    morph: "d- + dor",            heb: "דְּדֹּר",         de: "von Generation/Zeitraum [intensiv]",               evidence: "f19v P.8",                         confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "dsheor",  morph: "d- + she- + or",      heb: "דְּשֶׁאוֹר",       de: "von dem, was Licht ist",                           evidence: "f22r P.7 (Erstbeleg)",             confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "dairam",  morph: "d- + ir + am",        heb: "דְּאִיראָם",      de: "von dem Leuchtenden aller",                        evidence: "f69r R.3 (Erstbeleg)",             confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "dchorol", morph: "d- + k- + or + ol-",  heb: "דְּכְּאוֹרעֹלְ",     de: "von der Pupille hin",                              evidence: "f30r P.6 (Erstbeleg)",             confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "daid",    morph: "d- + ai + d-",        heb: "דַּאִידַּ",        de: "? / תָּמִיד = dauerhaft (Semantik noch offen)",       evidence: "f24v P.7",                         confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "dait",    morph: "d- + ʿet",            heb: "דַּעִת",         de: "von/aus der Zeit / im Moment (zeitliche Deiktik)", evidence: "f21v P.5 (Erstbeleg)",             confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "dain",    morph: "d- + aiin",           heb: "דַּעַיִן",        de: "das Auge (Kurzform)",                              evidence: "f2r P.9 (provisorisch, §D)",       confidenceStars: 3, candidate: false, rulesApplied: [] },
];

export const PREF_DO = [
  { eva: "doky",  morph: "do- + ky",  heb: "דּוֹכִּי",  de: "sein denn / weil", evidence: "", confidenceStars: 3, rulesApplied: [] },
];

export const PREF_E = [
  { eva: "eeor",  morph: "e- + or",   heb: "אֵאוֹר",  de: "kein Licht",     evidence: "",                     confidenceStars: 3, rulesApplied: [] },
  { eva: "eedy",  morph: "e- + -dy",  heb: "אֵדִּי",   de: "kein Licht von", evidence: "f26r P.5 (Erstbeleg)", confidenceStars: 3, rulesApplied: [] },
];

export const PREF_K = [
  { eva: "cheor",     morph: "k- + or",                 heb: "כְּאוֹר",      de: "wie Licht (Heilungszeichen)",                        evidence: "f2v P.4 (H/C/F/U 4/4, Erstbeleg) + f3v P.6 (H/C/F/U 4/4)",            confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "chokshor",  morph: "k- + chok + shor",        heb: "כְּחֹקשׁוֹר",    de: "wie die Vorschrift des Zeichens",                    evidence: "",                                                                     confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "cheekdam",  morph: "k- + e- + k- + dam",      heb: "כְּאֵכְּדָּם",     de: "wie das Zeichen des Blutes",                         evidence: "f24v P.14 (Erstbeleg)",                                                confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "ckhear",    morph: "k- + k- + or",            heb: "כְּכְּאֵר",      de: "wie das Licht",                                      evidence: "f25v P.4 (Minimalpaar mit chkear, Orthographievarianz)",               confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "kshol",     morph: "k- + shol",               heb: "כְּשׁוֹל",      de: "wie Scheol",                                         evidence: "f28v P1.1",                                                            confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "cholam",    morph: "k- + olom",               heb: "כֹּעוֹלָם",     de: "wie die Welt / wie Ewigkeit",                        evidence: "f69r C.3 (Erstbeleg)",                                                 confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "cthoiin",   morph: "k- + t- + aiin",          heb: "כְּתּעַיִן",     de: "wie vollständige Augen-Heilung",                     evidence: "f22r P.10 (Erstbeleg)",                                                confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "cthom",     morph: "k- + tom",                heb: "כְּתֹם",       de: "wie Vollständigkeit",                                evidence: "f3r P.6+P.10 (H/C/F)",                                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "kchol",     morph: "k- + chol",               heb: "כְּחֹל",       de: "wie Augensalbe / Kohl-Pigment (Blaupigment)",        evidence: "",                                                                     confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "chokeos",   morph: "k- + okeos",              heb: "כֹּכֵּאוֹס",     de: "wie ein Kelch (Botanik)",                            evidence: "f2v P.7 (H/C/F/U 4/5, Erstbeleg; D: chokios)",                         confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "choor",     morph: "k- + or",                 heb: "כְּאוּר",      de: "wie das Licht",                                      evidence: "",                                                                     confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "ksho",      morph: "k- + sho",                heb: "כְּשׁוֹ",       de: "wie Scheol / Tod",                                   evidence: "",                                                                     confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "koiin",     morph: "k- + aiin",               heb: "כֹּעַיִן",      de: "wie das Auge",                                       evidence: "",                                                                     confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "kaiin",     morph: "k- + aiin",               heb: "כְּעַיִן",      de: "wie das Auge",                                       evidence: "f1r P4.23/P4.24 (+ Var. kair P1.2)",                                   confidenceStars: 3, candidate: false, rulesApplied: ["R8", "R43"] },
  { eva: "kchom",     morph: "k- + chom",               heb: "כְּחֹם",       de: "wie Hitze / wie Fieber",                             evidence: "f001r P3.16 (H/N) + f3v P.8 (H/C/F/U 4/4) — R43 erfüllt",             confidenceStars: 3, candidate: false, rulesApplied: ["R31", "R40"] },
  { eva: "cthy",      morph: "k- + t- + hy",            heb: "כְּ+תִי",      de: "wie mein Zeichen / wie diese [Form]",                evidence: "f001r P3.14 (H/C/F/N/U 5/5, Erstbeleg) + f001r P3.17 (5/5) + f001r P4.26 (5/5) + f001v P.3 (3/3) + f001v P.6 (3/3) + f002r P.2 (3/3) + f002r P.6 (3/3) + f003r P.3+P.19 + f003v P.9 (R43: ≥5 Folios, erfüllt)", confidenceStars: 3, candidate: false, rulesApplied: ["R43"] },
  { eva: "chkeey",    morph: "k- + k- + chey",          heb: "כְּכְּאֵיִ",      de: "wie wie Lebendigkeit",                               evidence: "",                                                                     confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "cthal",     morph: "k- + t- + chal",          heb: "כְּתַּחַל",      de: "wie vollständig",                                    evidence: "f1r P4.23 (Erstbeleg) + f3v P.13 (H/C/F/U 4/4, R43-Folgebeleg)",      confidenceStars: 3, candidate: false, rulesApplied: ["R43"] },
  { eva: "chekhol",   morph: "k- + k- + chol",          heb: "כְּכָּחֹל",      de: "wie das Augenpigment",                               evidence: "",                                                                     confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "kchaiin",   morph: "k- + cha + aiin",         heb: "כְּחַעַיִן",     de: "wie die Wärme des Auges",                            evidence: "",                                                                     confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "cphoy",     morph: "k- + p- + cho",           heb: "כְּפְּהוֹ",      de: "wie sein Atemweg / wie sein Mund",                   evidence: "f1r P2.7 (Erstbeleg)",                                                 confidenceStars: 3, candidate: false, rulesApplied: ["R43"] },
  { eva: "cthar",     morph: "k- + t- + char",          heb: "כְּתַּחַר",      de: "wie vollständiges Fieber",                           evidence: "f1r P1.2 (×2, Erstbeleg) + f19r P.7 (R43 erfüllt, 2 Folios)",          confidenceStars: 3, candidate: false, rulesApplied: ["R15", "R19", "R43"] },
  { eva: "chotam",    morph: "k- + ot + am",            heb: "כֹּאוֹתאָם",    de: "wie das Zeichen der Mutter",                         evidence: "f72r1 R1 (R19/R35-Intensivierungsreihe)",                              confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "cheekaiin", morph: "k- + k- + aiin",          heb: "כֵּכְּעַיִן",     de: "wie das Auge",                                       evidence: "f71v R3 (B-Register Zodiak, R50)",                                     confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "cheeol",    morph: "k- + e- + ol",            heb: "כְּאֵעַל",      de: "wie kein Joch / wie Ende des Joches",                evidence: "f26v P.3 + f29r P.5 (R43 erfüllt, 2 Folios)",                          confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "kshy",      morph: "k- + shy",                heb: "כְּשֵׁי",       de: "wie die Gabe",                                       evidence: "f1r P3.16 (Erstbeleg) + f27v P.8 (R43 erfüllt, 2 Folios)",             confidenceStars: 3, candidate: false, rulesApplied: ["R43"] },
  { eva: "chakod",    morph: "k- + akod",               heb: "כְּעַכֹּד",      de: "wie zusammen / versammelt",                          evidence: "f28r P.2 (Erstbeleg)",                                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "chear",     morph: "k- + e- + ar",            heb: "כְּאֵעַר",      de: "wie erleuchten / wie das Licht wirkt",               evidence: "f1r P1.5 (Erstbeleg) + f28v P2.9 (R43 erfüllt, 2 Folios)",             confidenceStars: 3, candidate: false, rulesApplied: ["R43"] },
  { eva: "chseeor",   morph: "k- + shee + or",          heb: "כְּשֵׁאוֹר",     de: "wie die Gabe des Lichts",                            evidence: "f30r P.6 (Erstbeleg)",                                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "cphoaiin",  morph: "k- + pho + aiin",         heb: "כְּפְּעַיִן",     de: "wie der Atemweg des Auges",                          evidence: "f30v P.8 (Erstbeleg, 3/3 Transkriptoren)",                             confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "ctheor",    morph: "k- + ten + or",           heb: "כְּתֶּאוֹר",     de: "wie Licht-Gewähren / wie Erleuchtung",               evidence: "f22r P.9 (Erstbeleg)",                                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "cphary",    morph: "k- + par + -y",           heb: "כְּפַּריְ",      de: "wie sein Sühnopfer / wie seine Expiation",           evidence: "f27r P.5 (R43-Frist abgelaufen)",                                      confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "cphor",     morph: "k- + p- + or",            heb: "כְּפְּאֹר",      de: "wie der Mund des Lichts",                            evidence: "",                                                                     confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "cphal",     morph: "k- + palal",              heb: "כְּפָּלַל",      de: "wie Gebet / Urteil",                                 evidence: "f29v (R43-Frist abgelaufen)",                                          confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "ctheen",    morph: "k- + ten",                heb: "כְּתֵּן",       de: "wie Gewähren / Geben",                               evidence: "f29v (R43-Frist abgelaufen)",                                          confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "kchorl",    morph: "k- + chor + l-",          heb: "כְּחֹרלְ",      de: "wie die Pupille hin",                                evidence: "f29v (R43-Frist abgelaufen)",                                          confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "kchor",     morph: "k- + chor",               heb: "כְּ+חֹר",      de: "wie die Pupille",                                    evidence: "f2v P.5 (4/4, Erstbeleg)",                                             confidenceStars: 4, candidate: false, rulesApplied: ["R41", "R43"] },
  { eva: "chodaiin",  morph: "k- + daiin",              heb: "כֹּ+דִּין",     de: "wie das Urteil",                                     evidence: "f1r P3.16 (5/5, Erstbeleg); f2v P.4 (Folgebeleg)",                     confidenceStars: 4, candidate: false, rulesApplied: ["R41", "R43"] },
  { eva: "kchy",      morph: "k- + chy",                heb: "כְּ+חִי",      de: "wie seine Blässe (Variante von ckhy)",               evidence: "f1r P3.16 (3/5, Erstbeleg); f2v P.2 (Folgebeleg)",                     confidenceStars: 4, candidate: false, rulesApplied: ["R41", "R43"] },
  { eva: "chody",     morph: "k- + -dy",                heb: "כֹּ+דִּי",      de: "wie von ihm / gemäß ihm",                            evidence: "f1v P.2 (3/3, Erstbeleg); f2v P.3 (Folgebeleg)",                       confidenceStars: 3, candidate: false, rulesApplied: ["R41", "R43"] },
  { eva: "chcthy",    morph: "k- + k- + t- + hy",       heb: "כְּ+כְּ+תְּ+חִי",  de: "wie wie ich/es heilt (Doppelintensiv)",              evidence: "f2r P.13 (3/3, Erstbeleg); f2v P.3R (Folgebeleg, R43 erfüllt)",        confidenceStars: 3, candidate: false, rulesApplied: ["R19", "R41", "R43"] },
  { eva: "keol",      morph: "k- + eol",                heb: "כֵּ+עוֹל",     de: "wie das Joch / wie die Last",                        evidence: "f2r P.10 (3/3, Erstbeleg); f2v P.6 (Folgebeleg, R43 erfüllt)",         confidenceStars: 3, candidate: false, rulesApplied: ["R41", "R43"] },
  { eva: "cheaiin",   morph: "k- + e + aiin",           heb: "כְּ+אֵ+עַיִן",   de: "wie das Licht des Auges",                            evidence: "f2v P.7 (5/5, Erstbeleg)",                                             confidenceStars: 3, candidate: false, rulesApplied: ["R41", "R43"] },
  { eva: "chty",      morph: "k- + t- + -y",            heb: "כְּ+תְּ+יְ",     de: "wie es heilt (Kurzverb)",                            evidence: "f2v P.6 (4/4, Erstbeleg)",                                             confidenceStars: 3, candidate: false, rulesApplied: ["R41", "R43"] },
  { eva: "cholo",     morph: "k- + olo",                heb: "כֹּ+לוֹ",      de: "wie für ihn / wie sein Kelch",                       evidence: "f2v P.4 (4/4, Erstbeleg)",                                             confidenceStars: 3, candidate: false, rulesApplied: ["R41", "R43"] },
  { eva: "chedy",     morph: "k- + dy",                 heb: "כְּדֵי",       de: "damit / um zu",                                      evidence: "",                                                                     confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "choraiin",  morph: "k- + ar + aiin",          heb: "כֹּאַרעַיִן",    de: "Heilung des Auges / wie das Licht des Auges",        evidence: "f004r P.2 (H/C/F 3/3, 1 Textvorkommen) + f030r P.3 (H/C/F 3/3, EVA-Var.: chorain)",      confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "cphar",     morph: "k- + par",                heb: "כְּפַּר",       de: "Sühne / Bedeckung",                                  evidence: "f1r P1.5 (Erstbeleg)",                                                 confidenceStars: 3, candidate: false, rulesApplied: ["R43"] },
  { eva: "ckhal",     morph: "k- + hal",                heb: "כְּהַל",       de: "Nachlassen des Fiebers",                             evidence: "",                                                                     confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "cthor",     morph: "k- + tor",                heb: "כְּתֹּר",       de: "vollständige Heilung",                               evidence: "f2r P.12 (Erstbeleg) + f5v/f6r/f8v/f9r … (≥24 Folios)",                confidenceStars: 3, candidate: false, rulesApplied: ["R43"] },
  { eva: "cthaiin",   morph: "k- + t- + aiin",          heb: "כְּתַּעַיִן",     de: "vollständige Augen-Heilung",                         evidence: "f1r P1.5 (Erstbeleg)",                                                 confidenceStars: 3, candidate: false, rulesApplied: ["R8", "R43"] },
  { eva: "ksor",      morph: "k- + shar",               heb: "כֵּשָׁר",       de: "denn/wie passend/gesund",                            evidence: "f27r P.1 (Erstbeleg)",                                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "keeod",     morph: "k- + od",                 heb: "כֵּעוֹד",      de: "denn noch / immer noch",                             evidence: "f27r P.9 (Erstbeleg)",                                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "cthol",     morph: "k- + t- + h + ol",        heb: "כְּתהֹל",      de: "Vollständigkeits-Marker",                            evidence: "f1r P4.24 (Erstbeleg) + f28r P.2 (R43 erfüllt, 2 Folios)",             confidenceStars: 3, candidate: false, rulesApplied: ["R43"] },
  { eva: "cthorchy",  morph: "k- + t- + or + k- + chy", heb: "כְּתְּאוֹרכְּהִי",  de: "vollständige Heilung der Blässe",                    evidence: "f30r P.7 (Erstbeleg)",                                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "cheesees",  morph: "k- + e- + s- + e- + sh",  heb: "כְּאֵשׂאֵשׁ",     de: "Dreifach-Licht-Zeichen",                             evidence: "f25r P.3 (R43-Frist abgelaufen)",                                      confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "chykar",    morph: "k- + hey + kar",          heb: "כְּהֵיכַּר",     de: "Blässe-Kraft (Zutaten-Variante?)",                   evidence: "f29v P.10 (Erstbeleg)",                                                confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "koshet",    morph: "k- + she + t-",           heb: "כֹּשֵׁתְּ",       de: "Scheol-Vollständigkeit (temporaler Abschlussterm)",  evidence: "",                                                                     confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "koaiin",    morph: "k- + oaiin",              heb: "כְּ+עַיִן",      de: "wie das Auge (Var. zu kaiin/koiin)",                  evidence: "f3v P.1 (H/C/D/F/U 5/5, Erstbeleg)",                                 confidenceStars: 3, candidate: true,  rulesApplied: ["R8", "R41"] },
  { eva: "ckhol",     morph: "ck- + hol",               heb: "כְּכֹּל",        de: "vollständig wie alles (Intensiv-Variante)",           evidence: "f3v P.1 (H/C/D/F/U 5/5, Erstbeleg)",                                 confidenceStars: 3, candidate: true,  rulesApplied: [] },
  { eva: "chodaly",   morph: "k- + od + al + -y",       heb: "כֹּ+עוֹד+עַל+יְ", de: "wie noch darüber / wie weiter heilend",               evidence: "f3v P.6 (H/C/F/U 4/4, Erstbeleg)",                                   confidenceStars: 3, candidate: true,  rulesApplied: [] },
  { eva: "chodair",   morph: "k- + od + ir",            heb: "כֹּ+עוֹד+אִיר",  de: "wie weiteres Leuchten / wie noch Licht",              evidence: "f3v P.12 (H/C/F/U 4/4, Erstbeleg)",                                  confidenceStars: 3, candidate: true,  rulesApplied: [] },
  { eva: "cheeykam",  morph: "cheey + k- + am",         heb: "חֵיי+כְּ+עַם",   de: "wie das Leben des Volkes",                            evidence: "f3v P.3 (H/C/F/U 4/4, Erstbeleg)",                                   confidenceStars: 3, candidate: true,  rulesApplied: [] },
  { eva: "kcham",     morph: "k- + cham",               heb: "כְּ+חַם",        de: "wie Wärme/Entzündung (Var. zu kchom mit cham statt chom)", evidence: "f3v P.12 (H/C/F/U 4/4, Erstbeleg)",                            confidenceStars: 3, candidate: true,  rulesApplied: ["R40"] },
  { eva: "cthodoaly", morph: "k- + t- + ody + al + -y", heb: "כְּ+תְּ+עוֹד+עַל+יְ", de: "wie noch weiter darüber (Intensivform zu chodaly)", evidence: "f3v P.9 (H/C/F/U 4/4, Erstbeleg)",                                   confidenceStars: 3, candidate: true,  rulesApplied: [] },
];

export const PREF_L = [
  { eva: "lor",     morph: "l- + or",             heb: "לְאוֹר",      de: "zum Licht / zur Heilung",  evidence: "",                     confidenceStars: 5, rulesApplied: [] },
  { eva: "lshol",   morph: "l- + shol",           heb: "לְשׁוֹל",      de: "zum Tod / zu Scheol",      evidence: "",                     confidenceStars: 5, rulesApplied: [] },
  { eva: "lchedy",  morph: "l- + k- + dy",        heb: "לְכְּדֵי",      de: "um zu / bis zur Grenze",   evidence: "",                     confidenceStars: 4, rulesApplied: [] },
  { eva: "lshaiir", morph: "l- + s- + aiin + ir", heb: "לְשׂעַיִןאִיר",  de: "für Augenlicht-Glanz",     evidence: "f34v P.5 (Erstbeleg)", confidenceStars: 4, rulesApplied: [] },
  { eva: "lshy",    morph: "l- + shy",           heb: "לְ+שֵׁי",        de: "für die Gabe / für sein Wesen", evidence: "f2v P.3 (4/4, Erstbeleg)", confidenceStars: 3, rulesApplied: ["R41", "R43"] },
];

export const PREF_O = [
  { eva: "okaiin",      morph: "o- + k- + aiin",          heb: "עַכְּעַיִן",     de: "auf das Auge",                                               evidence: "f1r P1.4 (C/D/F/U; H/N: otaiin) + korpusweit (R8)", confidenceStars: 4, candidate: false, rulesApplied: ["R8", "R42"] },
  { eva: "odol",        morph: "o- + dol",                heb: "עַדָּוֶה",      de: "auf die Krankheit",                                          evidence: "",                                                  confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "oaorar",      morph: "o- + o- + or + or",       heb: "עַאַאוֹראָר",   de: "auf das Licht der Heilung",                                  evidence: "",                                                  confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "opchy",       morph: "o- + p- + chy",           heb: "עַפְּהִי",      de: "auf den Atemweg",                                            evidence: "",                                                  confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "octhor",      morph: "o- + k- + t- + or",       heb: "עַכְּתֹּר",      de: "auf vollständige Heilung",                                   evidence: "f19r P.13",                                         confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "okchan",      morph: "o- + k- + chan",          heb: "עַכְּחָן",      de: "auf / für die Gnade (positive Prognose-Direktional)",        evidence: "f19v P.9",                                          confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "okchod",      morph: "o- + k- + chod",          heb: "עַכְּחֹד",      de: "auf die Schärfe / Akutheit (therapeut. Direktional)",        evidence: "f19v P.11",                                         confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "oksho",       morph: "o- + k- + sho",           heb: "עַכְּשׁוֹ",      de: "auf / gegen Scheol",                                         evidence: "f1r P3.12 (Einzelfolio; R43-Frist abgelaufen)",     confidenceStars: 2, candidate: false, rulesApplied: ["R40", "R43"] },
  { eva: "oeees",       morph: "o- + esh",                heb: "עַאֵשׁ",       de: "auf dem Feuer / Fieber",                                     evidence: "",                                                  confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "octhos",      morph: "o- + k- + t- + sh",       heb: "עַכְּתֹשׁ",      de: "auf wie Feuer / Fieber",                                     evidence: "",                                                  confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "okorory",     morph: "o- + k- + or + or + -y",  heb: "עַכְּאוֹראוֹרִי", de: "auf das Licht / mein Licht (Possessiv)",                     evidence: "",                                                  confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "okytaiin",    morph: "o- + k- + t- + aiin",     heb: "עַכְּתָּעַיִן",    de: "auf die Weise, dass er das Auge heilt",                      evidence: "",                                                  confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "opchor",      morph: "o- + p- + chor",          heb: "עַפְּחֹר",      de: "auf die Pupille (Atemweg-Befund)",                           evidence: "",                                                  confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "otoaiin",     morph: "o- + oto- + aiin",        heb: "עַתוֹעַיִן",    de: "auf seine Augen (Possessiv)",                                evidence: "f1v P.5 (H/C/F 3/3)",                               confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "oeeen",       morph: "o- + een",                heb: "עַאֵין",      de: "auf das Fehlen / Nichts (emphatische Null)",                 evidence: "",                                                  confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "oir",         morph: "o- + or",                 heb: "עַאוֹר",      de: "auf das Licht / Direktional-Heilung",                        evidence: "",                                                  confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "okshy",       morph: "o- + k- + shy",           heb: "עַכְּשֵׁי",      de: "auf / für die Gabe (therapeut. Direktional)",                evidence: "",                                                  confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "okeor",       morph: "o- + k- + or",            heb: "עַכְּאֵוֹר",     de: "auf / zu dem Licht hin (direktionale Variante)",             evidence: "",                                                  confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "okeom",       morph: "o- + k- + eom",           heb: "עַכְּאֵוֹם",     de: "auf die Vollendung hin",                                     evidence: "f3r P.17 (H/C/F 3/3)",                              confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "okal",        morph: "o- + kol",                heb: "עַכָּל",       de: "auf / über alles",                                           evidence: "f1v P.6 (H/C/F 3/3)",                               confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "oscheor",     morph: "o- + she- + or",          heb: "עַשֶׁאוֹר",     de: "auf dem, was Licht ist",                                     evidence: "f19r P.3",                                          confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "okeodaly",    morph: "o- + k- + ol + dal",      heb: "עַכֵּעֹדַּל",     de: "auf dem Weg des Schwachen",                                  evidence: "f71v R1 + f72r1 R1 (R43 erfüllt, 2 Folios)",        confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "odaiim",      morph: "o- + daiin + -im",        heb: "עַדִּינִים",    de: "auf den (kollektiven) Urteilen",                             evidence: "f24v P.16 (Abschluss-Kolophon-Marker, R57)",        confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "opchol",      morph: "o- + p- + chol",          heb: "עַפְּכֹּל",      de: "auf allem wirkend",                                          evidence: "f3r P.18 (Erstbeleg, H/C/F) + f28r P.1 + f30r P.8", confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "okeeey",      morph: "o- + k- + e + e + e",     heb: "עַכְּאֵאֵאֵ",     de: "auf das dreifache Licht (emphat. Schlusskolophon, Spr. B)",  evidence: "f33r P.7 (Erstbeleg)",                              confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "odaldy",      morph: "o- + dal + -dy",          heb: "עַדַּלדִּי",     de: "über die Schwäche dessen",                                   evidence: "",                                                  confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "oekor",       morph: "o- + e- + qor",           heb: "עַאֵקֹר",      de: "auf die Kälte / das Uprooting (direktional)",                evidence: "",                                                  confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "octhy",       morph: "o- + cth- + y",           heb: "עַכְּתִּי",      de: "auf mein Zeichen (≠ otchy!)",                                evidence: "f3r P.12 (H/C/F 3/3)",                              confidenceStars: 3, candidate: true,  rulesApplied: [] },
  { eva: "ochor",       morph: "o- + chor",               heb: "עַחֹר",       de: "auf die Pupille (direktional)",                              evidence: "f3r P.3 + f3v P.10 (H/F/U 3/5)",                    confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "odaiin",      morph: "o- + daiin",              heb: "עַדִּין",      de: "auf das Urteil (direktional)",                               evidence: "f3r P.20 (H/C/F 3/3)",                              confidenceStars: 3, candidate: true,  rulesApplied: [] },
  { eva: "oiin",        morph: "o- + aiin",               heb: "עַיִן",       de: "das Auge (direkte Form)",                                    evidence: "f1r P3.14 (Einzelfolio; R43-Frist abgelaufen)",     confidenceStars: 2, candidate: false, rulesApplied: ["R2", "R8", "R43"] },
  { eva: "okam",        morph: "o- + ka + -m",            heb: "עַכַּם",       de: "für das Volk / für alle (universale Therapieangabe)",        evidence: "f28r P.6 (Erstbeleg)",                              confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "okchain",     morph: "o- + k- + chaiin",        heb: "עַכְּחַיִּין",    de: "hin zu Leben / auf Leben hin",                               evidence: "f22v P.13 + Parallelbelege (R43 erfüllt)",          confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "opydaiin",    morph: "o- + pi + daiin",         heb: "עַפִּידִּין",    de: "beim Urteil des Mundes",                                     evidence: "",                                                  confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "opsheolaiin", morph: "o- + p- + sheol + aiin",  heb: "עַפֶּשְׁאוֹלעַיִן", de: "am Nadir-Punkt des Sternauges",                              evidence: "f58r P.26",                                         confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "okor",      morph: "o- + k- + or",            heb: "עַ+כְּ+אוֹר",    de: "auf das Licht hin (Var. zu okeor)",                          evidence: "f3v P.2 (H/C/D/F/U 5/5, Erstbeleg)",                 confidenceStars: 3, candidate: true,  rulesApplied: ["R41"] },
  { eva: "okchor",    morph: "o- + k- + chor",          heb: "עַ+כְּ+חֹר",    de: "auf die Pupille (o+k+chor-Komplex)",                         evidence: "f3v P.2 (H/D/F/U 4/5, Erstbeleg)",                    confidenceStars: 3, candidate: true,  rulesApplied: ["R41"] },
];

export const PREF_OL = [
  { eva: "olaiin",    morph: "ol- + aiin",          heb: "עַלעַיִן",   de: "über das Auge",                              evidence: "f017r P.4 (Erstbeleg) + f058r (7×) + f072r2 + f099r + f033v (≥4 Register)", confidenceStars: 5, candidate: false, rulesApplied: ["R61"] },
  { eva: "oldar",     morph: "ol- + d- + ar",       heb: "עַלדְּאַר",   de: "über den Leuchtenden",                       evidence: "f34v P.4 (Erstbeleg)",                         confidenceStars: 5, candidate: false, rulesApplied: ["R61"] },
  { eva: "okoldm",    morph: "ol- + kol + dam",     heb: "עַלכֹּלדָּם",  de: "über alles Blut",                            evidence: "",                                             confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "olteedam",  morph: "ol- + tee + dam",     heb: "עַלתֵּדָּם",   de: "über das Blut der Zeit",                     evidence: "f31v P.7 (Erstbeleg)",                         confidenceStars: 4, candidate: false, rulesApplied: ["R61"] },
  { eva: "olchdaiin", morph: "ol- + chy + daiin",   heb: "עַלכְּהֵדִּין", de: "über Blässe-Urteil",                         evidence: "f34v P.7 (Erstbeleg)",                         confidenceStars: 4, candidate: false, rulesApplied: ["R61"] },
  { eva: "oldckhy",   morph: "ol- + d- + k- + chy", heb: "עַלדְּכְּהִי",  de: "über die Blässe davon",                      evidence: "",                                             confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "olsheol",   morph: "ol- + sheol",         heb: "עַלשְׁאוֹל",  de: "über Scheol",                                evidence: "f31r P.11 (Erstbeleg)",                        confidenceStars: 3, candidate: false, rulesApplied: ["R61"] },
  { eva: "olsheor",   morph: "ol- + sho + or",      heb: "עַלשׁאוֹר",  de: "über Scheol-Licht",                          evidence: "f31r P.13 (Erstbeleg)",                        confidenceStars: 3, candidate: false, rulesApplied: ["R61"] },
  { eva: "oldam",     morph: "ol- + dam",           heb: "עַלדָּם",    de: "über das Blut",                              evidence: "f34r P.7 + f34v P.2 (R43 erfüllt, 2 Folios)",  confidenceStars: 3, candidate: false, rulesApplied: ["R61"] },
  { eva: "olshly",    morph: "ol- + sh- + l- + -y", heb: "עַלשׁלְיְ",   de: "auf Scheol hin (direktionale Scheol-Form)",  evidence: "f22v P.14 (Erstbeleg)",                        confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "olsar",     morph: "ol- + sar",           heb: "עַלשַׂר",    de: "über den Arzt / ärztliche Aufsicht",         evidence: "f23v P.6 (R43-Frist abgelaufen)",              confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "olytol",    morph: "ol- + ytol",          heb: "עַל+יְ+תֹּלֹל", de: "über dem er geschwächt wird",                evidence: "f3v P.2 (H/C/D/F/U 5/5, Erstbeleg)",          confidenceStars: 3, candidate: true,  rulesApplied: ["R61"] },
];

export const PREF_P = [
  { eva: "pchodar",   morph: "p- + k- + dar",   heb: "פְּכֹּדַּר",      de: "wie Finsternis / Dunkelheit",            evidence: "f28r P.1 (Erstbeleg)",     confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "fshody",    morph: "p- + sho + -dy",  heb: "פְּשׁוֹדִּי",     de: "von Scheol",                             evidence: "",                         confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "pchraiin",  morph: "p- + r- + aiin",  heb: "פְּרְעַיִן",     de: "für/bei das Licht des Auges",            evidence: "",                         confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "pchedal",   morph: "p- + k- + dal",   heb: "פְּכֶּדַּל",      de: "bei dem Schwachen",                      evidence: "",                         confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "pochaiin",  morph: "p- + k- + aiin",  heb: "פֹּכְּעַיִן",     de: "beim/am Auge",                           evidence: "f19v P.1",                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "fochof",    morph: "p- + k- + p-",    heb: "פֹכֹפְ",       de: "Mund/Kehle-alles / Kehlenbereich",       evidence: "f27v P.1 (Erstbeleg)",     confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "poraiin",   morph: "p- + or + aiin",  heb: "פְּאוֹרעַיִן",   de: "Licht des Auges",                        evidence: "f29r P.1 (Erstbeleg)",     confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "pchor",     morph: "p- + chor",       heb: "פְּ+חֹר",      de: "durch die Pupille / Öffnung der Höhle",  evidence: "f2v P.1 (5/5, Erstbeleg)", confidenceStars: 3, candidate: false, rulesApplied: ["R41", "R43"] },
  { eva: "pcheol",    morph: "p- + k- + ol",    heb: "פְּכֶּעֹל",      de: "bei der Last",                           evidence: "f3r P.11 (H/C/F 3/3)",     confidenceStars: 3, candidate: true, rulesApplied: [] },
];

export const PREF_QO = [
  { eva: "qoky",      morph: "qo- + ky",              heb: "וְכִּי",     de: "und denn / weil",                        evidence: "",                                 confidenceStars: 5, candidate: false, rulesApplied: [] },
  { eva: "qokchor",   morph: "qo- + o- + k- + chor",  heb: "וְעַכְּחֹר",   de: "und für die Pupille",                    evidence: "f3r P.12 (H/C/F 3/3)",             confidenceStars: 5, candidate: false, rulesApplied: [] },
  { eva: "qotchor",   morph: "qo- + t- + chor",       heb: "קוֹתְּכֹּר",   de: "Pupillen-Zeichen / Urteil der Pupille",  evidence: "f15r (Schlusskolophon)",           confidenceStars: 5, candidate: false, rulesApplied: [] },
  { eva: "qokaiin",   morph: "qo- + k- + aiin",       heb: "וְכְּעַיִן",   de: "und gemäß dem Auge",                     evidence: "kein gesicherter Beleg (f4r P.4: C-Einzellesung, H/F: !okaiin — kein Konsens)",  confidenceStars: 4, candidate: false, rulesApplied: ["R41", "R43"] },
  { eva: "qodaiin",   morph: "qo- + daiin",           heb: "וְדִּין",    de: "und Urteil",                             evidence: "f3r P.7 (H/C/F 3/3)",              confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "qoeees",    morph: "qo- + o- + esh",        heb: "וְעַאֵשׁ",    de: "und auf dem Feuer / Fieber",             evidence: "",                                 confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "qokeees",   morph: "qo- + k- + esh",        heb: "וְכְּעֵשׁ",    de: "und wie Feuer / Fieber",                 evidence: "",                                 confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "qor",       morph: "qo- + or",              heb: "וְאֹר",     de: "und Licht (astronomisch)",               evidence: "f58r P.5",                         confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "qokedam",   morph: "qo- + k- + dam",        heb: "וְכְּדָּם",    de: "und wie das Blut",                       evidence: "",                                 confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "qotchy",    morph: "qo- + ot + k- + chy",   heb: "וְאוֹתכְּהִי", de: "und das Zeichen der Blässe",             evidence: "Backtest-Beleg vorhanden — Erstquelle ausstehend",          confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "qokcheor",  morph: "qo- + k- + k- + or",    heb: "וְכְּכְּאֵוֹר",  de: "und wie das Licht",                      evidence: "",                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "qopchaiin", morph: "qo- + p- + k- + aiin",  heb: "וְפְּכְּעַיִן",  de: "und Atemweg des Auges",                  evidence: "",                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "qokay",     morph: "qo- + k- + chey",       heb: "וְכְּחַי",    de: "und wie lebendig",                       evidence: "",                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "qol",       morph: "qo- + ol",              heb: "וְעַל",     de: "und auf / über",                         evidence: "",                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "qotchol",   morph: "qo- + ot + kol",        heb: "וְאוֹתכֹּל",  de: "und das Universal-Zeichen",              evidence: "Backtest-Beleg vorhanden — Erstquelle ausstehend",          confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "qokshy",    morph: "qo- + k- + shy",        heb: "וְכְּשֵׁי",    de: "und wie die Gabe",                       evidence: "",                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "qokorar",   morph: "qo- + kol + or + ar",   heb: "וְכֹּאוֹראָר", de: "und alles Licht der Heilung",            evidence: "f19r P.4",                         confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "qoldar",    morph: "qo- + ol- + d- + ar",   heb: "וְעַלדְּאַר",  de: "und über den Leuchtenden",               evidence: "f34v P.4 (Erstbeleg)",             confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "qokor",     morph: "qo- + kol + ar",        heb: "וְכֹּאָר",    de: "und alles Licht",                        evidence: "f23v P.8 (Erstbeleg)",             confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "qotal",     morph: "qo- + tal",             heb: "וְטַל",     de: "Tau / Schweißzeichen",                   evidence: "",                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "qokoral",   morph: "qo- + k- + or + ol-",   heb: "וְכְּאֹרעַלְ",  de: "und wie Licht-auf",                      evidence: "f25v P.6 (R43-Frist abgelaufen)",  confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "qoteedar",  morph: "qo- + t- + dar",        heb: "וְתֵּדַּר",    de: "und er/du wirst leuchten",               evidence: "f26r P.8 (R43-Frist abgelaufen)",  confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "qokol",     morph: "qo- + kol",             heb: "וְ+כֹּל",    de: "und alles",                              evidence: "f3r P.5+P.16 (H/C/F)",             confidenceStars: 3, candidate: true, rulesApplied: [] },
  { eva: "qoschodam", morph: "qo- + schol + dam",     heb: "וְשׁכֹּדָּם",   de: "und Universalheilmittel des Blutes",     evidence: "f3r P.12 (H/C/F 3/3)",             confidenceStars: 3, candidate: true, rulesApplied: [] },
  { eva: "qocheor",   morph: "qo- + cheor",           heb: "וְכְּאוֹר",   de: "und wie Licht (= qokcheor Kurzf.?)",     evidence: "f3r P.3 (H/F 2/3)",                confidenceStars: 3, candidate: true,  rulesApplied: [] },
  { eva: "qokshol",   morph: "qo- + k- + shol",       heb: "וְ+כְּ+שׁוֹל", de: "und wie Scheol/Tod",                     evidence: "f3v P.10 (H/C/D/F/U 5/5, Erstbeleg)", confidenceStars: 3, candidate: true,  rulesApplied: ["R41"] },
  { eva: "qokchy",    morph: "qo- + k- + chy",        heb: "וְ+כְּ+הִי",  de: "und wie Blässe",                         evidence: "f3v P.13 (H/C/F 3/4, Erstbeleg)",     confidenceStars: 3, candidate: true,  rulesApplied: ["R41"] },
];

export const PREF_S = [
  { eva: "sor",   morph: "s- + or",           heb: "שׂאֹר",     de: "Arzt des Lichts (Sprache-A-Vokalalternanz von sar)", evidence: "f2r P.6 (Erstbeleg) + f9r + f19v + f22v + f30r + f57v", confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "schol", morph: "s- + kol",          heb: "שׂכֹּל",     de: "Arznei für alles / Universalheilmittel",             evidence: "",                           confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "sokar", morph: "s- + o- + k- + ar", heb: "שׂאוֹכְּאָר",  de: "Heilungs-Arzt des Lichts",                           evidence: "",                           confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "schor", morph: "s- + chor",         heb: "שׂחֹר",     de: "gleich der Pupille",                                 evidence: "f22r P.4 (Erstbeleg)",       confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "soshy", morph: "s- + o- + sh + -y", heb: "שׂאֹשׁיְ",    de: "gleich Scheol-er",                                   evidence: "f25r P.1 (Erstbeleg)",       confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "soin",  morph: "s- + a- + aiin",    heb: "שׂעַיִן",    de: "Feuer des Auges / Augenentzündung",                  evidence: "f30r P.4 (Erstbeleg)",       confidenceStars: 3, candidate: false, rulesApplied: [] },
];

export const PREF_SH = [
  { eva: "shy",   morph: "sh + -y",           heb: "שֵׁי",     de: "Gabe (Kurzform von sheey)",               evidence: "f1v P.3 (3/3, Erstbeleg); f2v P.5 (4/4, R43 erfüllt)", confidenceStars: 3, candidate: false, rulesApplied: ["R40", "R43"] },
  { eva: "shos",  morph: "sh- + a- + sh",     heb: "שׁעַשׁ",   de: "Feuer-Ähnliches",                          evidence: "f29r P.5 (Erstbeleg)",                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "sos",   morph: "sh- + a- + sh",     heb: "שׁעַשׁ",   de: "Feuer auf Feuer / Fieber-Intensivierung",  evidence: "f30v P.7 + P.9 (Erstbeleg)",                           confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "sshey", morph: "sh- + sh- + shey",  heb: "שׁשׁהֵי",  de: "Doppel-Shin-Blässe",                       evidence: "f24r P.17 (R43-Frist abgelaufen)",                     confidenceStars: 2, candidate: false, rulesApplied: [] },
];

export const PREF_SHE = [
  { eva: "shedy",   morph: "she- + -dy",  heb: "שֶׁדִּי",   de: "das/welches von",        evidence: "",                     confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "sheaiin", morph: "she- + aiin", heb: "שֶׁעַיִן",  de: "welche das Auge",        evidence: "f32v P.7 (Erstbeleg)", confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "sheor",   morph: "she- + or",   heb: "שֶׁאֹר",   de: "das/welches Licht ist",  evidence: "",                                confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "sheam",   morph: "she- + am",   heb: "שֶׁ+עַם",  de: "welche das Volk / Gabe der Mutter", evidence: "f3v P.14 (H/C/F/U 4/4, Erstbeleg)", confidenceStars: 3, candidate: true,  rulesApplied: [] },
];

export const PREF_SHO = [
  { eva: "shody", morph: "sho- + -dy",  heb: "שְׁאוֹדִּי", de: "von Scheol", evidence: "f1r P2.8/P2.9/P4.26 (3×)", confidenceStars: 3, candidate: false, rulesApplied: ["R43"] },
];

export const PREF_T = [
  { eva: "teor",      morph: "t- + or",             heb: "תְּאוֹר",    de: "sie wird heilen",                                      evidence: "",                                               confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "tchor",     morph: "t- + chor",           heb: "תְּחֹר",     de: "sie heilt die Pupille",                                evidence: "f3v P.7 (H/C/D/F/U 5/5, Erstbeleg) + f16r P2.5 (Folgebeleg) + f29v P.8 (3. Folio, R43 ✓)", confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "tshoiin",   morph: "t- + sho + aiin",     heb: "תְּשׁוֹעַיִן",  de: "[sie] wendet das Auge von Scheol",                     evidence: "f28v P1.4",                                      confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "taiir",     morph: "t- + ir",             heb: "תָּאִיר",    de: "es wird leuchten / heilen",                            evidence: "",                                               confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "tsheoarom", morph: "t- + she- + or + om", heb: "תְּשְׁאוֹרוֹם", de: "du wirst von Scheol aufsteigen",                       evidence: "f3r P.15 (H/C/F 3/3)",                           confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "toror",     morph: "t- + or + or",        heb: "תְּאוֹראוֹר", de: "sie heilt",                                            evidence: "",                                               confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "tsho",      morph: "t- + sho",            heb: "תְּשׁוֹ",     de: "sie entfernt sich von Scheol",                         evidence: "",                                               confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "tshol",     morph: "t- + shol",           heb: "תְּשׁוֹל",    de: "sie entfernt von Scheol (Vollform von tsho)",          evidence: "f23r P.6 + f23v P.6 (Erstbeleg)",                confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "tchey",     morph: "t- + chey",           heb: "תְּחִי",     de: "möge es/sie leben!",                                   evidence: "f1r P3.17 (Einzelfolio; R43-Frist abgelaufen)",  confidenceStars: 2, candidate: false, rulesApplied: ["R4", "R43"] },
  { eva: "told",      morph: "t- + yld",            heb: "תּוֹלֵד",    de: "es erzeugt / bringt hervor",                           evidence: "",                                               confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "tshdar",    morph: "t- + sh- + d- + ar",  heb: "תְּשׁדָּאַר",   de: "Jahreszeit-Zeichen (Sprache-B-Variante von torshor)",  evidence: "f33r P.1 (Erstbeleg)",                           confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "tshokeody", morph: "t- + sho + k- + chy", heb: "תְּשׁכֵּהִי",   de: "Tav-Scheol-Blässe",                                    evidence: "f31r P.6 (Erstbeleg)",                           confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "tshaiin",   morph: "t- + sh + aiin",      heb: "תּשׁעַיִן",   de: "du wirst das Auge [behandeln]",                        evidence: "f29v (R43-Frist abgelaufen)",                    confidenceStars: 2, candidate: false, rulesApplied: [] },
];

export const PREF_Y = [
  { eva: "ytor",      morph: "y- + t- + or",            heb: "יְתֹּאוֹר",   de: "er/sie wird zum Licht werden / erleuchten",      evidence: "f18v (3×) + f58r P.30 + f19v P.12 (R43 dreifach)", confidenceStars: 5, candidate: false, rulesApplied: [] },
  { eva: "ykchor",    morph: "y- + k- + chor",          heb: "יְכְּחֹר",    de: "er heilt die Pupille",                           evidence: "",                                                 confidenceStars: 5, candidate: false, rulesApplied: [] },
  { eva: "ykchy",     morph: "y- + k- + chy",           heb: "יְכְּהִי",    de: "er wird Blässe zeigen",                          evidence: "f3v P.8 (H/C/F/U 4/4, Erstbeleg) + f11v P2 (Folgebeleg, R43 erfüllt)", confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "ydaiin",    morph: "y- + daiin",              heb: "יְדִּין",    de: "er urteilt",                                     evidence: "",                                                 confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "ykeor",     morph: "y- + k- + or",            heb: "יְכְּאוֹר",   de: "er heilt / wie Licht",                           evidence: "",                                                 confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "ykchaiin",  morph: "y- + k- + chaiin",        heb: "יְכְּחַיִּין",  de: "er wird wie Leben werden",                       evidence: "",                                                 confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "ychor",     morph: "y- + chor",               heb: "יְחֹר",     de: "er wird die Pupille weiten",                     evidence: "",                                                 confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "yodaiin",   morph: "y- + o- + daiin",         heb: "יוֹדִּין",   de: "er weiß das Urteil",                             evidence: "",                                                 confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "ytaiin",    morph: "y- + t- + aiin",          heb: "יְתָּעַיִן",   de: "er wird das Auge heilen",                        evidence: "",                                                 confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "ykaiin",    morph: "y- + k- + aiin",          heb: "יְכְּעַיִן",   de: "er heilt das Auge",                              evidence: "f1r P1.3 (Erstbeleg; R43-Frist offen)",            confidenceStars: 4, candidate: false, rulesApplied: ["R3", "R8", "R42"] },
  { eva: "yfodain",   morph: "y- + padah + aiin",       heb: "יְפָּדָהיִן",  de: "er wird das Auge erlösen / befreien",            evidence: "",                                                 confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "ytchor",    morph: "y- + t- + chor",          heb: "יְתְּחֹר",    de: "er/sie wird die Pupille heilen",                 evidence: "f16v P.2 + f29v P.2 (R43 erfüllt, 2 Folios)",      confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "ychol",     morph: "y- + kol",                heb: "יְכֹּל",     de: "er heilt alles",                                 evidence: "f1v P.7 (ykol ×2, H/C/D/F 4/4) + f18v P.10",       confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "ykar",      morph: "y- + k- + or",            heb: "יְכְּאָר",    de: "er heilt leuchtend (Variante von ykair)",        evidence: "f69r P.3 (register-übergreifend, R43 erfüllt)",    confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "ykcheor",   morph: "y- + k- + k- + or",       heb: "יְכְּכְּאוֹר",  de: "er wird sein wie Licht (dreifach intensiv)",     evidence: "f22v P.5 + Zodiak-Register (R43 erfüllt)",         confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "ytchol",    morph: "y- + t- + kol",           heb: "יְתכֹּל",    de: "er wird alles vollenden",                        evidence: "f28r P.9 (Kolophon)",                              confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "yteol",     morph: "y- + t- + ol",            heb: "יְתאֵעֹל",   de: "er wird handeln / vollbringen",                  evidence: "f28r P.9 (Kolophon, neben ytchol)",                confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "ykcholy",   morph: "y- + k- + chol + -y",     heb: "יְכְּכֹּלְיְ",   de: "er heilt alles",                                 evidence: "f28v P1.2",                                        confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "ysho",      morph: "y- + sho",                heb: "יְשׁוֹ",     de: "es führt zum Tod",                               evidence: "",                                                 confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "ydain",     morph: "y- + d- + aiin",          heb: "יְדַיִן",    de: "er wird das Auge behandeln",                     evidence: "f1r P3.11 (Einzelfolio; R43-Frist abgelaufen)",    confidenceStars: 2, candidate: false, rulesApplied: ["R3", "R43"] },
  { eva: "ytalar",    morph: "y- + tal + or",           heb: "יְתַּאֹר",    de: "er wird [Licht] geben / erleuchten",             evidence: "f58r P.5",                                         confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "ytol",      morph: "y- + tolol",              heb: "יְתֹּלֹל",    de: "er wird geschwächt",                             evidence: "f19v P.3",                                         confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "yees",      morph: "y- + esh",                heb: "יְאֵשׁ",     de: "er löscht das Feuer / Fieber",                   evidence: "f19v P.12",                                        confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "ytar",      morph: "y- + t- + or",            heb: "יְתַּאָר",    de: "er wird Licht geben",                            evidence: "f19v P.12",                                        confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "ychom",     morph: "y- + chom",               heb: "יְחוֹם",    de: "er wird genesen / er wird warm",                 evidence: "f29r P.9 (Erstbeleg)",                             confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "yteey",     morph: "y- + t- + ee",            heb: "יְתֵּאֵי",    de: "er wird [es] bringen / heilen (Sprache B)",      evidence: "f33r P.6 (Erstbeleg, Sprache B)",                  confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "ytsho",     morph: "y- + t- + sho",           heb: "יְתְּשׁ",     de: "er wird Scheol zeigen (R28-Typ)",                evidence: "f32r P.4 (Erstbeleg, R28-Kausalitätspräfix)",      confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "yteechy",   morph: "y- + chy",                heb: "יִחְיֶה",    de: "er wird gesund",                                 evidence: "",                                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "yshdal",    morph: "y- + sh- + dal",          heb: "יְשַׁדַּל",    de: "er wird schwächen",                              evidence: "",                                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "ykeedy",    morph: "y- + k- + dy",            heb: "יְכֵּדֵי",    de: "er wird anordnen",                               evidence: "",                                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "ytchody",   morph: "y- + t- + k- + dy",       heb: "יְתְּכֹּדִּי",   de: "er wird urteilen (Doppelpräfix)",                evidence: "",                                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "ykoiin",    morph: "y- + k- + aiin",          heb: "יְכוֹיִן",   de: "er wird sich erholen",                           evidence: "",                                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "ypchor",    morph: "y- + p- + chor",          heb: "יְפְּחֹר",    de: "er heilt die Pupille [durch Atem]",              evidence: "",                                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "ytchy",     morph: "y- + t- + chy",           heb: "יְתְּכְּהִי",   de: "er/sie wird Blässe zeigen",                      evidence: "f3v P.12 (H/C/F/U 4/4, Erstbeleg) + f16v P.5 (Folgebeleg, R43 erfüllt)", confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "ychody",    morph: "y- + k- + dy",            heb: "יְכֹּדִּי",    de: "er wird urteilen (Variante von ytchody)",        evidence: "",                                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "ytchar",    morph: "y- + t- + char",          heb: "יְתְּחַר",    de: "er/sie wird Fieber zeigen",                      evidence: "",                                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "ykchol",    morph: "y- + k- + chol",          heb: "יְכֹּל",     de: "er heilt alles / er heilt Augenpigment",         evidence: "",                                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "ychair",    morph: "y- + char + ir",          heb: "יְחַאִיר",   de: "er wird durch Wärme leuchten",                   evidence: "",                                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "ychekchy",  morph: "y- + k- + k- + chy",      heb: "יְכְּכְּהִי",   de: "er heilt wie totale Blässe",                     evidence: "",                                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "ytchm",     morph: "y- + t- + cham",          heb: "יְתְּחֵם",    de: "er/sie wird Wärme bringen",                      evidence: "",                                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "ydl",       morph: "y- + dal",                heb: "יִדַּל",     de: "er wird schwach werden (Qal von דלל)",           evidence: "",                                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "ychoees",   morph: "y- + kol + esh",          heb: "יְכֹּעֵשׁ",    de: "er löscht das Feuer / heilt das Fieber",         evidence: "",                                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "ykam",      morph: "y- + qam",                heb: "יְקָם",     de: "er wird aufstehen / sich erheben (Qal קום)",     evidence: "f18v (4×); 2. Folio-Beleg ausstehend",             confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "ykair",     morph: "y- + k- + ir",            heb: "יְכְּאִיר",   de: "er heilt leuchtend",                             evidence: "f16r (1×; R43 prov., unter Mindestgrenze)",        confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "yoar",      morph: "y- + o- + or",            heb: "יְאַאָר",    de: "er wird zum Licht hin [heilen]",                 evidence: "",                                                 confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "ycheol",    morph: "y- + k- + eol",           heb: "יְכְּאֵוֹל",   de: "er wird wie Scheol-Licht sein (ambivalent)",     evidence: "",                                                 confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "ysheol",    morph: "y- + sheol",              heb: "יְשׁאֹל",    de: "er wird [aus] Scheol [aufsteigen]",              evidence: "f29v (R43-Frist abgelaufen, kein Folgebeleg)",     confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "ytal",      morph: "y- + tal",                heb: "יְתַּל",     de: "er wird suspendieren / aufhängen (Qal von תלל)", evidence: "f22v P.10 (Erstbeleg)",                            confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "ytom",      morph: "y- + tom",                heb: "יְתָּם",     de: "er wird vollständig / komplett (Var. ytam)",     evidence: "f29v (R43-Frist abgelaufen)",                      confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "ydals",     morph: "y- + dal + sh-",          heb: "יְדַּלְשׁ",    de: "er wird Schwäche läutern",                       evidence: "f24v P.2 (R43-Frist abgelaufen)",                  confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "ykeechy",   morph: "y- + k- + e- + k- + chy", heb: "יְכְּאֵכְּהֵי",  de: "er heilt wie Blässe-Licht",                      evidence: "f26r P.9 (R43-Frist abgelaufen)",                  confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "ychtaiin",  morph: "y- + k- + t- + aiin",     heb: "יְכְּתָּעַיִן",  de: "er heilt das Auge vollständig",                  evidence: "f3r P.6 (H/C/F 3/3)",                              confidenceStars: 3, candidate: true,  rulesApplied: [] },
  { eva: "ysheor",    morph: "y- + she- + or",          heb: "יְשֶׁאוֹר",   de: "er/sie wird sein, welches Licht ist",            evidence: "f3r P.8 (H/C/F 3/3)",                              confidenceStars: 3, candidate: true,  rulesApplied: [] },
  { eva: "ykoaiin",   morph: "y- + k- + oaiin",         heb: "יְ+כּוֹ+עַיִן", de: "er heilt wie das Auge",                          evidence: "f3v P.1 (H/C/D/F/U 5/5, Erstbeleg)",              confidenceStars: 3, candidate: true,  rulesApplied: ["R41"] },
  { eva: "ytcheear",  morph: "y- + t- + k- + e + ar",   heb: "יְ+תְּ+כְּ+אֵ+אָר", de: "er wird sein wie Heilung durch Licht (R28)",      evidence: "f3v P.9 (H/C/F 3/4, Erstbeleg)",                  confidenceStars: 3, candidate: true,  rulesApplied: ["R28"] },
  { eva: "yteam",     morph: "y- + t- + eam",           heb: "יְ+תְּ+אָם",   de: "er wird das Volk behandeln (R28)",               evidence: "f3v P.14 (H/F/U 3/4, Erstbeleg)",                 confidenceStars: 3, candidate: true,  rulesApplied: ["R28"] },
];

export const SYNTAX_CHOK = [
  { eva: "chokchy",   morph: "chok + k- + chy", heb: "חֹקכְּהִי",   de: "Vorschrift der Blässe",        evidence: "f30v P.7 (Erstbeleg, H/C/F einig)",          confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "chokcheey", morph: "chok + cheey",    heb: "חֹקחֵיי",   de: "Lebensvorschrift",             evidence: "f30v P.11 (Erstbeleg, 3/3 Transkriptoren)",  confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "choky",     morph: "chok + -ey",      heb: "חֹקֵּי",     de: "die Vorschriften des [Falls]", evidence: "f1v P.6 (H/C/F 3/3)",                        confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "chokeor",   morph: "chok + e- + or",  heb: "חֹקאֵאוֹר",  de: "Vorschrift des Lichts",        evidence: "f30v P.3 (Erstbeleg)",                       confidenceStars: 3, candidate: false, rulesApplied: [] },
];

export const SYNTAX_DAIIN = [
  { eva: "daiindy", morph: "daiin + -dy", heb: "דִּינדִּי", de: "das Urteil dessen",                                          evidence: "",                                                           confidenceStars: 5, candidate: false, rulesApplied: [] },
  { eva: "daiiin",  morph: "daiin + -in", heb: "דִּינִין", de: "Urteile (Aram. Emphase-Plural von דין)",                     evidence: "f1r T3 + f26v P.1 + P.7 + f27r P.12 (R43 dreifach erfüllt)", confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "daiinol", morph: "daiin + ol-", heb: "דִּינעַל", de: "Urteil über [etwas]",                                        evidence: "f19r P.12",                                                  confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "daiidal", morph: "daiin + dal", heb: "דִּינדַּל", de: "Urteil der Schwäche",                                        evidence: "f23r P.6 (Erstbeleg)",                                       confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "daiim",   morph: "daiin + -m",  heb: "דִּינם",  de: "Urteile (Plural)",                                           evidence: "f3r P.1 (H/F 2/3) + f3v P.10 (H/C/D/F/U 5/5)",               confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "daiity",  morph: "daiin + t-",  heb: "דִּינתּ",  de: "Urteils-tav / juristische Abschlussform",                    evidence: "f25v P.3 (R43-Frist abgelaufen)",                            confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "daiidy",  morph: "daii + -dy",  heb: "דַּיִּדִּי", de: "dessen Urteil (Kurzform ohne Nun; EVA-distinct von daiindy)", evidence: "f3v P.2 (4/5, Erstbeleg)",                                   confidenceStars: 3, candidate: true,  rulesApplied: [] },
];

export const SYNTAX_DAL = [
  { eva: "daly",      morph: "dal + -y",        heb: "דַּלִּי",     de: "seine/meine Schwäche",         evidence: "",                                                   confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "daly·dal",  morph: "dal + -y · dal",  heb: "דַּלִּידַּל",   de: "seine Schwäche",               evidence: "",                                                   confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "dalchy",    morph: "dal + k- + chy",  heb: "דַּלכְּהִי",   de: "die Schwäche der Blässe",      evidence: "",                                                   confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "dalor",     morph: "dal + or",        heb: "דַּלאוֹר",   de: "schwaches Augenlicht",         evidence: "f2r P.11 (Erstbeleg) + f58r",                        confidenceStars: 3, candidate: false, rulesApplied: ["R43"] },
  { eva: "dala",      morph: "dal + -a",        heb: "דַּלָּ",      de: "Schwäche (Femininum von dal)", evidence: "",                                                   confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "daldalol",  morph: "dal + dal + ol",  heb: "דַּלדַּלעוֹל", de: "doppelte Schwäche des Joches", evidence: "(R43-Frist abgelaufen; R53-Strukturbeleg erhalten)", confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "dalory",    morph: "dal + or + -y",   heb: "דַּלאוֹריְ",  de: "Schwäche zum Licht",           evidence: "f29v (R43-Frist abgelaufen)",                        confidenceStars: 2, candidate: false, rulesApplied: [] },
];

export const SYNTAX_DOL = [
  { eva: "doldy",     morph: "dol + -dy",     heb: "דּוֹלדִּי",   de: "von der Krankheit davon",                        evidence: "",                                     confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "dolar",     morph: "dol + l- + or", heb: "דָּוֶהלְאוֹר", de: "Krankheit zur Heilung",                          evidence: "",                                     confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "doldaiin",  morph: "dol + daiin",   heb: "דּוֹלדִּין",  de: "Krankheits-Urteil",                              evidence: "",                                     confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "dol·shol",  morph: "dol + shol",    heb: "דָּוֶהשׁוֹל",  de: "Schmerz-Scheol (Warnsignal bei Überdosierung)",  evidence: "f20r P.7",                             confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "doiir",     morph: "dol + y + or",  heb: "דֹּיִר",     de: "sehr schwache Erweckung",                        evidence: "f24v P.14 (Folgebeleg erforderlich)",  confidenceStars: 3, candidate: false, rulesApplied: [] },
];

export const SYNTAX_KOL = [
  { eva: "cholar",    morph: "kol + -lo + or",    heb: "כֹּלוֹר",    de: "alles sein Licht",                                 evidence: "",                                 confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "chol·chol", morph: "kol + kol",         heb: "כֹּלכֹּל",    de: "alles-alles",                                      evidence: "f1r P3.15 (R15 Typ A, 7. Beleg)",  confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "chotshol",  morph: "kol + t- + sheol",  heb: "כֹּתּשְׁאוֹל",  de: "alles-du-wirst-Scheol (morphologisch fragwürdig)", evidence: "f21v P.6 (kein Corpus-Parallele)", confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "chololy",   morph: "kol + ol + -y",     heb: "כֹּלעַליְ",   de: "alles über ihm / vollständig darüber",             evidence: "f3r P.5 (H/C/F 3/3)",              confidenceStars: 3, candidate: true,  rulesApplied: [] },
];

export const SYNTAX_OR = [
  { eva: "oraiin",    morph: "or + aiin",       heb: "אוֹרעַיִן",    de: "Licht des Auges / Augenheilung",                   evidence: "f004r + f009r + f020r + f022r + f023v + f024v + f026v + f031v + f099r (≥9 Folios, R43 weit übererfüllt)", confidenceStars: 5, candidate: false, rulesApplied: [] },
  { eva: "oraiino",   morph: "or + aiin + -o",  heb: "אוֹרעַיִןוֹ",   de: "Licht seines Auges",                               evidence: "f22r P.9 (Erstbeleg)",                         confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "orchaiin",  morph: "or + k- + aiin",  heb: "אֹרכְּעַיִין",   de: "Licht-wie-Auge",                                   evidence: "f25v P.7 (alle H/C/F einig)",                  confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "orair",     morph: "or + aiin + ar",  heb: "אוֹרעַיִןאַר",  de: "Licht-Auge-Licht (Ringstruktur)",                  evidence: "f34v P.5 (Erstbeleg)",                         confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "ory",       morph: "or + -y",         heb: "אוֹריְ",      de: "sein Licht / er erleuchtet",                       evidence: "f26v P.8 (Erstbeleg)",                         confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "oro",       morph: "or + -o",         heb: "אֹראֹ",       de: "Licht-Palindrom / maximale Heilungs-Affirmation",  evidence: "f23v P.12 + f24v P.5 (R43 erfüllt, 2 Folios)", confidenceStars: 3, candidate: false, rulesApplied: [] },
];

export const SYNTAX_OT = [
  { eva: "otshol",  morph: "ot + shol",               heb: "אוֹתשׁוֹל",        de: "das Zeichen des Todes",                                        evidence: "",                                                               confidenceStars: 5, candidate: false, rulesApplied: [] },
  { eva: "otaiir",  morph: "ot + aiin + ir",          heb: "אֹתעַיִר",         de: "Zeichen des Augenlichts",                                      evidence: "f24v P.2 + f25r T.7 (R43 erfüllt, T-Klassen-Titel Subtyp C)",    confidenceStars: 5, candidate: false, rulesApplied: [] },
  { eva: "otaiin",  morph: "ot + aiin",               heb: "אוֹת+עַיִן",       de: "Zeichen des Auges",                                            evidence: "f2v P.1 (5/5, Erstbeleg); f1r P1.4 H+N Frühbeleg",               confidenceStars: 4, candidate: false, rulesApplied: ["R2", "R41", "R43"] },
  { eva: "otchor",  morph: "ot + chor",               heb: "אוֹתחֹר",         de: "das Zeichen der Pupille",                                      evidence: "f2v P.6 (H/C/F/U 4/4, Erstbeleg)",                               confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "otchy",   morph: "ot + k- + chy",           heb: "אוֹתכְּהִי",        de: "das Zeichen der Blässe",                                       evidence: "f2v P.3 (H/C/F/U 4/4, Erstbeleg)",                               confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "otchdal", morph: "ot + k- + dal",           heb: "אוֹתכְּדַּל",        de: "Zeichen der Schwäche",                                         evidence: "",                                                               confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "otam",    morph: "ot + tam",                heb: "אוֹתתָּם / אוֹתאָם", de: "Zeichen der Vollständigkeit / der Mutter (register-abhängig)", evidence: "f19v P.10 + f72r1 R1 (3×) + f22v P.3 (R43 erfüllt, 2 Register)", confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "otolam",  morph: "ot + ol- + am",           heb: "אוֹתעַלאָם",       de: "Zeichen über alle / Zeichen der Ewigkeit",                     evidence: "f69r C.9 (Erstbeleg)",                                           confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "otcho",   morph: "ot + cho",                heb: "אוֹתכֹּ",          de: "das Zeichen des [Atems] (Kolophon-Kurzform)",                  evidence: "f1v P.9 (H/C/F 3/3)",                                            confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "otytchy", morph: "ot + y- + t- + k- + chy", heb: "אוֹתיְתְּכְּהִי",      de: "das Zeichen er-wird-Blässe-zeigen",                            evidence: "f19r P.6",                                                       confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "otshor",  morph: "ot + shor",               heb: "אוֹתשׁאוֹר",       de: "das Zeichen des Lichts",                                       evidence: "f23v P.6 (Erstbeleg)",                                           confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "otly",    morph: "ot + l-",                 heb: "אוֹתלֵ",          de: "Zeichen zu/für",                                               evidence: "",                                                               confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "otor",    morph: "ot + or",                 heb: "אוֹתאוֹר",        de: "Zeichen des Lichts / der Heilung",                             evidence: "f16v + f21r P.8 (R43 erfüllt, 2 Folios)",                        confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "otain",   morph: "ot + ain",                heb: "אוֹתאַיִן",        de: "Zeichen des Nichts / Endes",                                   evidence: "",                                                               confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "otchol",  morph: "ot + kol",                heb: "אוֹתכֹּל",         de: "Zeichen von allem / Universalzeichen",                         evidence: "f1r P2.8 (Erstbeleg)",                                           confidenceStars: 3, candidate: false, rulesApplied: ["R43"] },
  { eva: "otalef",  morph: "ot + alef",               heb: "אוֹתאָלֶף",        de: "Zeichen des Aleph / Zeichen des Ochsen",                       evidence: "f72r1 S1.9",                                                     confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "otosy",   morph: "ot + o- + s + -y",        heb: "אֹתאֹשׂיְ",         de: "Zeichen-Scheol-gleich-er",                                     evidence: "f25r T.7 (R43-Frist abgelaufen)",                                confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "otaiphy", morph: "ot + a + y + p- + hey",   heb: "אֹתאַיְפֶּהֵי",       de: "Hapax: Zeichen-Blässe-Mund (Einzelbeleg)",                     evidence: "f24r P.19",                                                      confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "otchom",  morph: "ot + chom",               heb: "אוֹת+חֹם",        de: "Zeichen der Wärme",                                            evidence: "f3r P.15 (H/C/F 3/3)",                                           confidenceStars: 3, candidate: true,  rulesApplied: [] },
  { eva: "otcham",  morph: "ot + cham",               heb: "אוֹת+חַם",        de: "Zeichen der Entzündung (Parallelform zu otchom; cham vs. chom)", evidence: "f3v P.7 (H/C/D/F/U 5/5, Erstbeleg)",                            confidenceStars: 3, candidate: true,  rulesApplied: [] },
  { eva: "otchal",  morph: "ot + chal",               heb: "אוֹת+חַל",        de: "Zeichen des Geltens / Befund-Zeichen",                            evidence: "f3v P.5 (H/C/D/F/U 5/5, Erstbeleg)",                            confidenceStars: 3, candidate: true,  rulesApplied: [] },
  { eva: "otchody", morph: "ot + k- + dy",            heb: "אוֹתכֹּדִּי",        de: "das ganze Zeichen davon",                                      evidence: "f3r P.9 (H/C/F 3/3)",                                            confidenceStars: 3, candidate: true,  rulesApplied: [] },
  { eva: "oteol",   morph: "ot + eol",                heb: "אוֹתאֵעֹל",        de: "Zeichen des Handelns (vgl. yteol)",                            evidence: "f3r P.16 (H/C/F 3/3)",                                           confidenceStars: 3, candidate: true,  rulesApplied: [] },
  { eva: "otal",    morph: "ot + al",                 heb: "אוֹתעַל",         de: "Zeichen über [etwas]",                                         evidence: "f3r P.6 (H/F 2/3)",                                              confidenceStars: 3, candidate: true,  rulesApplied: [] },
];

export const SYNTAX_PCHO = [
  { eva: "pchy",      morph: "pcho + -y",   heb: "פְּחִי",   de: "mein Atem / mein Mund (FLOS/FRUCTUS)", evidence: "", confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "pocheody",  morph: "pcho + -dy",  heb: "פְּחֹדִּי",  de: "des Atemwegs",                         evidence: "", confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "pchodol",   morph: "pcho + dol",  heb: "פְּחֹדֹּל",  de: "Atemweg der Krankheit / Mundschmerz",  evidence: "", confidenceStars: 3, candidate: false, rulesApplied: [] },
];

export const SYNTAX_SAR = [
  { eva: "sary",    morph: "sar + -y",    heb: "שַׂרִי",   de: "mein Arzt / Apotheker (Possessiv)",  evidence: "f009r P.1 + f57r + f103r + f77r (Cross-Register ✓)",     confidenceStars: 5, candidate: false, rulesApplied: [] },
  { eva: "saiin",   morph: "sar + aiin",  heb: "שַׂעַיִן",  de: "Augenarzt",                          evidence: "f2r P.6 (Erstbeleg) + f8v/f9r/f15r/f16v/f22v/f30r/f33r", confidenceStars: 4, candidate: false, rulesApplied: ["R8", "R43"] },
  { eva: "saraiir", morph: "sar + ir",    heb: "שַׂראִיר", de: "Arzt des Leuchtenden",               evidence: "f26v P.2 (R43-Frist abgelaufen)",                        confidenceStars: 2, candidate: false, rulesApplied: [] },
];

export const SYNTAX_SHEOL = [
  { eva: "sheodaiin", morph: "sheol + daiin",     heb: "שְׁאוֹדִּין",  de: "Todesurteil (Vollform)",                           evidence: "",                                               confidenceStars: 5, candidate: false, rulesApplied: [] },
  { eva: "sheoldam",  morph: "sheol + dam",       heb: "שְׁאוֹלדָּם",  de: "tödlicher Blutverlust",                            evidence: "f3r P.9 (H/F 2/3; C: sheoldaj)",                 confidenceStars: 5, candidate: false, rulesApplied: [] },
  { eva: "sheeolody", morph: "sheol + o- + -dy",  heb: "שְׁאוֹלעֹדִּי", de: "von jenem Scheol",                                 evidence: "f71v R1",                                        confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "sheoltey",  morph: "sheol + ta + -y",   heb: "שְׁאוֹלטַיְ",  de: "Scheol des Tau-Zeichens",                          evidence: "f72r1 R1",                                       confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "shoaiin",   morph: "sheol + aiin",      heb: "שְׁאוֹלעַיִן", de: "Scheol des Auges (Todesurteil für das Sehorgan)",  evidence: "f1r P4.24 (Einzelfolio; R43-Frist abgelaufen)",  confidenceStars: 2, candidate: false, rulesApplied: ["R40", "R43"] },
];

export const SYNTAX_SHO = [
  { eva: "shoiin",    morph: "sho + aiin",            heb: "שׁוֹעַיִן",     de: "Scheol des Auges",                                       evidence: "",                                             confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "shosaiin",  morph: "sho + saiin",           heb: "שׁוֹשַׂעַיִן",    de: "Scheol des Augenarztes (diagnostisches Maximalsignal)",  evidence: "f30v P.1 (Erstbeleg)",                         confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "olsho",     morph: "sho + -lo",             heb: "שׁוֹלוֹ",      de: "sein Scheol",                                            evidence: "",                                             confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "sholo",     morph: "sho + -lo",             heb: "שְׁאוֹלוֹ",     de: "Scheol für ihn",                                         evidence: "",                                             confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "shokal",    morph: "sho + kol",             heb: "שׁוֹכָּל",      de: "Scheol von allem",                                       evidence: "f72r2 R2 (Zodiak)",                            confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "shotoly",   morph: "sho + t- + ol + -y",    heb: "שׁוֹתּעוֹליְ",   de: "Scheol-Last hin",                                        evidence: "f22v P.13 (Erstbeleg)",                        confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "shocthy",   morph: "sho + k- + t- + -y",    heb: "שׁוֹכְּתיְ",     de: "vollständiges Scheol",                                   evidence: "f28r P.7 + f29r P.6 (R43 erfüllt, 2 Folios)",  confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "shokchy",   morph: "sho + k- + ky",         heb: "שׁוֹכְּכֵּי",     de: "Scheol-Blässe / Blässe des Todes",                       evidence: "f29r P.7 (Erstbeleg)",                         confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "shot",      morph: "sho + t-",              heb: "שׁוֹתְּ",       de: "vollständiges Scheol",                                   evidence: "f29v P.4 (Erstbeleg)",                         confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "shoty",     morph: "sho + t- + -y",         heb: "שׁוֹתְּיְ",      de: "vollständiges Scheol von ihm",                           evidence: "f30v P.5 (Erstbeleg)",                         confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "sotchaiin", morph: "sho + ot + k- + aiin",  heb: "שׁאוֹתכְּעַיִן",  de: "das Zeichen dem Auge gleich",                            evidence: "",                                             confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "shoin",     morph: "sho + aiin",            heb: "שׁוֹיִן",      de: "Scheol des Auges",                                       evidence: "",                                             confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "shockho",   morph: "sho + k- + ho",         heb: "שׁוֹ+כְּ+הוֹ",  de: "Scheol wie er / wie das Scheol davon",                   evidence: "f3v P.11 (H/C/F/U 4/4, Erstbeleg)",           confidenceStars: 3, candidate: true,  rulesApplied: [] },
];

export const SYNTAX_SHOL = [
  { eva: "sholshdy",  morph: "shol + sh + -dy", heb: "שׁוֹלשׁדִּי",  de: "von dem Scheol",       evidence: "f71v S2.5",            confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "sholol",    morph: "shol + ol-",      heb: "שׁוֹלעַל",   de: "Scheol über [etwas]",  evidence: "f23v P.4 (Erstbeleg)", confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "sholor",    morph: "shol + or",       heb: "שׁוֹלאֹר",   de: "Scheol-Licht",         evidence: "",                     confidenceStars: 2, candidate: false, rulesApplied: [] },
];

export const SYNTAX_MISC = [
  { eva: "shodaiin",    morph: "shod + daiin",          heb: "שׁוֹדִּין",     de: "Todesurteil",                                              evidence: "f2r P.5 (Erstbeleg) + f3r + f4v + f5r",                confidenceStars: 4, candidate: false, rulesApplied: ["R30", "R43"] },
  { eva: "keey",        morph: "keey",                  heb: "כֵּי",        de: "denn / weil",                                              evidence: "f1r P4.26 (keey·keey, R15-Beleg)",                     confidenceStars: 4, candidate: false, rulesApplied: ["R15", "R40"] },
  { eva: "damo",        morph: "dam + -o",              heb: "דָּמוֹ",       de: "sein Blut",                                                evidence: "f3r P.7 (H/C/F 3/3)",                                  confidenceStars: 4, candidate: false, rulesApplied: [] },
  { eva: "chain",       morph: "cha + aiin",            heb: "חַעַיִן",      de: "lebendiges Auge / Auge des Lebens",                        evidence: "f29v P.5 + f30r P.7 (R43 erfüllt, 2 Folios)",          confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "chal",        morph: "chal",                  heb: "חָל",        de: "gilt für / betrifft",                                      evidence: "f3r P.4 (H/C/F 3/3)",                                  confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "chary",       morph: "char + -y",             heb: "חַרִי",       de: "sein Fieber",                                              evidence: "",                                                     confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "chodl",       morph: "chodl (Part. von חדל)", heb: "חֹדֵל",       de: "der Aufhörende / der Sterbende (Aktiv-Partizip)",          evidence: "",                                                     confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "dain",        morph: "dain (Part. QAL דין)",  heb: "דָּן",        de: "Richter (Partizip QAL von דין)",                           evidence: "f1r T2/P3 + f30v P.5 (R43 erfüllt, 2 Folios)",         confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "dan",         morph: "dan",                   heb: "דָּן",        de: "er hat geurteilt (Qal Perfekt) / Richter",                 evidence: "f32r P.19 (Kolophon-Abschluss dan=)",                  confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "darchor",     morph: "dar + chor",            heb: "דַּרְכּוֹר",     de: "sein Krankheitsverlauf",                                   evidence: "",                                                     confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "dary",        morph: "dar + -y",              heb: "דַּרִי",       de: "mein Leuchtendes / mein Licht",                            evidence: "",                                                     confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "sam.chorly",  morph: "sham + kor + li",       heb: "שָׁםכֹּרלִי",    de: "so heile meine Pupille",                                   evidence: "f24r T.20 (R53-Subtyp)",                               confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "shodain",     morph: "shod + d- + aiin",      heb: "שׁוֹדדַּעַיִן",   de: "Zerstörung des Auges (schärfste negative Augenprognose)",  evidence: "f1r P3.12 (Einzelfolio; R43-Frist abgelaufen)",        confidenceStars: 2, candidate: false, rulesApplied: ["R40", "R43"] },
  { eva: "shorodo",     morph: "shor + odo",            heb: "שׁוֹרעוֹדוֹ",   de: "das Zeichen besteht fort",                                 evidence: "",                                                     confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "shydal",      morph: "shy + dal",             heb: "שֵׁידַּל",      de: "die Gabe der Schwäche",                                    evidence: "",                                                     confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "torshor",     morph: "tor + shor",            heb: "תֹּרשׁוֹר",     de: "Jahreszeit-Zeichen / saisonaler Eintrag",                  evidence: "",                                                     confidenceStars: 3, candidate: false, rulesApplied: [] },
  { eva: "dydyd",       morph: "dy + dy + dy",          heb: "דִּידִּידִּי",    de: "dreifacher Relativpartikel (extremer Betonungsmodus)",     evidence: "f1r P3.17 (Einzelbeleg; C: dodyd)",                    confidenceStars: 2, candidate: false, rulesApplied: ["R25"] },
  { eva: "pysaiinor",   morph: "pi + s- + aiin + or",   heb: "פִּישׂעַיִןאוֹר", de: "Mund gleich dem Auge des Lichts",                          evidence: "f29v (R43-Frist abgelaufen)",                          confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "aiior",       morph: "aiin + y + or",         heb: "עַיִאוֹר",     de: "Auge des Lichts",                                          evidence: "f23v P.12 (R43-Frist abgelaufen)",                     confidenceStars: 2, candidate: false, rulesApplied: [] },
  { eva: "keeees",      morph: "keeees",                heb: "???",       de: "Hapax (Schreiberfehler nicht ausgeschlossen)",             evidence: "f21v P.3 (Einzelbeleg, kein Parallelbeleg im Corpus)", confidenceStars: 1, candidate: false, rulesApplied: [] },
];

export const LEXICON = [
  ...STEM_WORDS,
  ...PREF_CH,
  ...PREF_D,
  ...PREF_DO,
  ...PREF_E,
  ...PREF_K,
  ...PREF_L,
  ...PREF_O,
  ...PREF_OL,
  ...PREF_P,
  ...PREF_QO,
  ...PREF_S,
  ...PREF_SH,
  ...PREF_SHE,
  ...PREF_SHO,
  ...PREF_T,
  ...PREF_Y,
  ...SYNTAX_CHOK,
  ...SYNTAX_DAIIN,
  ...SYNTAX_DAL,
  ...SYNTAX_DOL,
  ...SYNTAX_KOL,
  ...SYNTAX_OR,
  ...SYNTAX_OT,
  ...SYNTAX_PCHO,
  ...SYNTAX_SAR,
  ...SYNTAX_SHEOL,
  ...SYNTAX_SHO,
  ...SYNTAX_SHOL,
  ...SYNTAX_MISC,
];

// ALIAS -> CANONICAL
export const LEXICON_ALIASES = /** @type {Record<string,string>} */ ({
	chol:   "kol",
	kedy:   "chedy",
	doiin:  "deaiin",
	doaiin: "deaiin",
	ykol:   "ychol",
	ol:     "al",
	keaiin: "kaiin",
	chetom: "cthom",
	yteor:  "ytor",
	alif:   "alef",
	otalif: "otalef",
	ytam:   "ytom",
	ycheor: "ykeor",
	okain:   "okaiin",
	shdy:    "shedy",
	chorain: "choraiin",
});

/** @param {number | undefined} confidenceStars */
export function getLexiconConfidence(confidenceStars) {
  return '★'.repeat(Number(confidenceStars ?? 0));
}

/** @param {any} entry */
export function getLexiconRules(entry) {
  return entry?.rulesApplied ?? [];
}

/** @param {any} entry */
export function getLexiconKind(entry) {
  if (entry?.isAnchor) return 'Anker';
  if (entry?.morph) return 'Ableitung';
  return 'Eintrag';
}

export const LEXICON_DERIVED = /** @type {typeof LEXICON} */ (
  LEXICON.filter((/** @type {any} */ entry) => !STEM_WORDS.includes(entry))
);
