// All translatable German UI strings, organized by section.
// Functions accept runtime values (STATS, RULES) where interpolation is needed.

export const CONTENT = {

  // ── Navigation ─────────────────────────────────────────────────────────────
  nav: [
    { id: 'abstract',        label: 'I. Zusammenfassung' },
    { id: 'methodology',     label: 'II. Methodik' },
    { id: 'translator-tool', label: 'III. Übersetzer' },
    { id: 'mapping',         label: 'IV. Zeichenmapping' },
    { id: 'lexicon',         label: 'V. Lexikon' },
    { id: 'grammar',         label: 'VI. Grammatik' },
    { id: 'grammar-rules',   label: 'VII. Grammatikregeln' },
    { id: 'backwards-test',  label: 'VIII. Rückwärtstest' },
    { id: 'references',      label: 'IX. Referenzen' },
    { id: 'word-classes',    label: 'X. Wortklassen' },
    { id: 'language-a',      label: 'XI. Sprache A' },
    { id: 'margin-stars',    label: 'XII. Randsterne' },
    { id: 'gibberish',       label: 'XIII. Gibberish-Test' },
    { id: 'open-problems',   label: 'XIV. Offene Probleme' },
  ],

  // ── I. Zusammenfassung ─────────────────────────────────────────────────────
  summary: {
    title: 'I. Zusammenfassung',
    abstract: `Das vorliegende Dokument fasst den aktuellen Stand der Entzifferungsanalyse des Voynich-Manuskripts zusammen. Es richtet sich an Hebraisten, Aramaisten und Kodikographen, die eine unabhängige Prüfung der vorgeschlagenen Übersetzungen vornehmen möchten.`,
    hypothesis: `Die Grundhypothese: Das Voynich-Manuskript ist in Mischna-Hebräisch mit aramäischen Lehnpartikeln verfasst, verschlüsselt durch ein konsonantisches Alphabet mit Niqqud-Markierungen als Vokalhelfer. Die Texte folgen dem Schema eines hippokratisch-mittelalterlichen Medizintraktats: Diagnose → Symptombeschreibung → Therapieindikation → Prognose.`,
    findings: [
      { label: 'Identifizierte Sprache', value: 'Mischna-Hebräisch / Jüdisch-Aramäisch' },
      { label: 'Texttyp', value: 'Medizinischer Traktat / Astronomisch-astrologisches Register — Pharmakopöe + Fixsternkatalog (f58r); f1r: deklarativer Haskama-Typ (sui generis)' },
      { label: 'Analysierte Folios', value: (/** @type {{ foliosAll: any; }} */ s) => s.foliosAll },
      { label: 'Bestätigte Wörter', value: (/** @type {{ lexicon: any; }} */ s) => `${s.lexicon} (★★★ oder höher)` },
      { label: 'Rückwärtstest', value: (/** @type {{ backtestFraction: any; }} */ s) => `${s.backtestFraction} · 0 Falsch-Positive` },
      { label: 'Sprache A Anker', value: (/** @type {{ foliosA: any; }} */ s) => `${s.foliosA}: 10/10 Sprache-A-Ankerwörter je Folio — 100 % (Quires A+B vollständig, Quire C bC1–bC4, Quire D bD1+bD2+bD3+bD4 vollständig)` },
      { label: 'Grammatikregeln', value: (/** @type {{ validatedRules: number; }} */ s, /** @type {string | any[]} */ r) => `${r.length} (${s.validatedRules} validiert + ${r.length - s.validatedRules} Kandidaten)` },
    ],
    correctionsTitle: (/** @type {string} */ v) => `Korrekturen in v${v}`,
  },

  // ── II. Methodik ───────────────────────────────────────────────────────────
  methodology: {
    title: 'II. Methodik',
    backwardsTest: {
      title: 'Rückwärtstest-Prinzip',
      description: 'Jede Mapping-Hypothese wird durch Rückwärtstests validiert: Ein bekanntes hebräisches oder aramäisches Wort wird nach dem vorgeschlagenen Mapping in EVA kodiert und im Voynich-Korpus gesucht. Bestätigung erfordert: (a) Vorkommen im Korpus, (b) semantisch plausible Position, (c) kontextuell passende Nachbarwörter.',
    },
    confidence: {
      title: 'Konfidenzskala',
      stars: 'Sterne',
      label: 'Bedeutung',
      criteria: 'Kriterien',
    },
    anchorFolios: {
      title: 'Anker-Folios',
    },
  },

  // ── III. Übersetzer ────────────────────────────────────────────────────────
  translator: {
    title: 'III. Übersetzungstool',
    intro: 'EVA-Text in das Eingabefeld eingeben (Wörter durch Leerzeichen oder · getrennt; neue Zeile = neuer Paragraph). Das Tool durchsucht das bestätigte <a href="#lexicon">Lexikon</a>, erkennt Präfixe und zeigt Hebräisch, Wort-für-Wort-Analyse und deutsche Bedeutung an. Unbekannte Wörter werden als solche markiert.',
    methodNote: {
      title: 'Hinweis zur Methodik',
      text: (/** @type {string} */ lexicon) => `Das Tool arbeitet auf dem bestätigten <a href="#lexicon">Lexikon</a> (${lexicon} Einträge, ★★★ oder höher). Komplexe Komposita und unbekannte Wörter werden als „unbekannt" markiert. Die Ausgabe ist eine <em>Hypothese</em> — keine abgeschlossene Übersetzung.`,
    },
    inputPlaceholder: "z.B.  daiin · shedy · sar · al · dam\n→ neue Zeile = neuer Paragraph",
  },

  // ── IV. Zeichenmapping ─────────────────────────────────────────────────────
  mapping: {
    title: 'IV. Zeichenmapping EVA → Hebräisch',
    intro: 'Das folgende Mapping bildet EVA-Buchstaben auf hebräische Konsonanten ab. Klick auf eine Zelle fügt das Zeichen in die Eingabe ein.',
    specialRule: {
      title: 'Sonderregel: o als Ayin vs. Ḥolam',
      text: 'Das EVA-Zeichen <span class="eva">o</span> hat zwei Funktionen: (1) als konsonantisches <span class="heb-sm">ע</span> (Ayin) am Wortanfang, und (2) als Vokalmarker Ḥolam <span class="heb-sm">ֹ</span> im Wortinneren. Das Präfix <span class="eva">o-</span> am Wortanfang entspricht fast immer <span class="heb-sm">עַ</span>.',
    },
  },

  // ── V. Lexikon ─────────────────────────────────────────────────────────────
  lexicon: {
    title: (/** @type {string} */ lexicon) => `V. Bestätigtes Lexikon (${lexicon} Einträge)`,
    intro: 'Alle Einträge mit ★★★ oder höher, getrennt nach Stammwörtern und abgeleiteten Formen. Klick auf das EVA-Wort fügt es in die Eingabe ein.',
    tables: {
      stems:            'A. Stammwörter',
      stemsCandidates:  'B. Stammwörter (R43 Kandidaten)',
      derived:          'C. Abgeleitete Lexikon-Einträge',
      derivedCandidates:'D. Abgeleitete Lexikon-Einträge (R43 Kandidaten)',
    },
    columns: {
      eva:             'EVA',
      heb:             'Hebräisch',
      de:              'Bedeutung',
      layer:           'Schicht',
      isAnchor:        'Anker',
      anchorFolio:     'Folio',
      rules:           'Regeln',
      confidenceStars: 'Konf.',
      morph:           'Morph.',
      evidence:        'Evidenz',
    },
  },

  // ── VI. Grammatik ──────────────────────────────────────────────────────────
  grammar: {
    title: 'VI. Grammatik — Präfixe, Suffixe & Schemata',
    intro: 'Die wichtigsten morphologischen Regeln für das Lesen von EVA-Sequenzen.',
    prefixSystem: {
      title: 'Präfix-System',
      filterHint: '— Zeile anklicken filtert Lexikon',
    },
    suffixSystem: {
      title: 'Suffix-System',
      filterHint: '— Zeile anklicken filtert Lexikon',
    },
    verbParadigm: {
      title: 'Verb-Paradigma y+k+[Terminus] — 6 bestätigt + 1 Kandidat ★★ provisorisch (f16r, R43)',
      intro: 'Alle klinischen Ankerbegriffe erhalten eine Verbform durch Präfix-Schichtung <span class="eva">y</span> + <span class="eva">k</span> + Terminus (fünf positiv, ein negativ, ein Kandidat):',
    },
    prognosisA: {
      title: 'Prognose-Schema Quire A (Kräuter, Spr. A)',
      intro: 'Jeder Paragraph folgt dem botanischen Schema:',
    },
    prognosisT: {
      title: 'Prognose-Schema Quire T / Sprache B',
      intro: 'Jeder vollständige Paragraph folgt dem Schema:',
    },
    columns: {
      evaPrefix:  'EVA-Präfix',
      evaSuffix:  'EVA-Suffix',
      heb:        'Hebräisch',
      fn:         'Funktion',
      example:    'Beispiel',
      confidence: 'Konf.',
      de:         'Bedeutung',
      folio:      'Erstbeleg',
    },
  },

  // ── VII. Grammatikregeln ───────────────────────────────────────────────────
  grammarRules: {
    title: 'VII. Grammatikregeln',
    changelogTitle: 'Aufstufungen & Absorptionen — Versionshistorie',
    columns: {
      id:         '#',
      focus:      'Regelfokus & Name',
      syntax:     'Formale Syntax / Bedingung',
      evidence:   'Empirische Evidenz',
      confidence: 'Konf.',
    },
  },

  // ── VIII. Rückwärtstest ────────────────────────────────────────────────────
  backtest: {
    title: 'VIII. Rückwärtstest-Statistik',
    introHtml: (/** @type {string} */ count) => `${count} hebräische/aramäische Wörter wurden nach dem EVA-Mapping kodiert und im Korpus (Sprache B) gesucht. Ab v7.5 werden zwei Klassen unterschieden: <strong>Typ I</strong> (genuine Vorhersagen — Prä-Analyse-Anker, eingefroren vor jeder Folioanalyse) und <strong>Typ II</strong> (interne Kohärenz — post-hoc-Entdeckungen, belegen Systemkonsistenz, keine externe Vorhersagekraft).`,
    typeI: {
      title: 'Typ I — Genuine Vorhersagen',
      noteHtml: (/** @type {string} */ count) => `Diese ${count} Wörter wurden als semantische Priors <em>vor</em> jeder Folioanalyse definiert (eingefroren v7.4: dam, or, daiin, sheol, shol, dal, sar, chaiin, kaiim, chalal). Sie können nicht rückwirkend erweitert werden. Ihre Bestätigung ist die valide Kernaussage der Rückwärtsteststärke.`,
    },
    typeII: {
      title: 'Typ II — Interne Kohärenz',
      noteHtml: (/** @type {string} */ count) => `Diese ${count} Wörter wurden <em>während</em> der Folioanalyse erstmals identifiziert. Sie belegen interne Systemkonsistenz, aber keine externe Vorhersagekraft. 29 bestätigt, 3 historische Fehlschläge (nicht im Datensatz).`,
    },
    noFpSuffix: '· 0 Falsch-Positive',
    noFalsePositivesHtml: 'Entscheidend: <strong>Keine einzige Vorhersage ergab einen Falsch-Positiv-Treffer.</strong> Kein kodiertes Wort taucht in einem semantisch inkohärenten Kontext auf — in beiden Klassen, bei einem Zufallsalphabet statistisch ausgeschlossen.',
    columns: { prediction: 'Vorhersage', heb: 'Hebräisch', result: 'Befund', context: 'Kontext' },
  },

  // ── IX. Referenzen ─────────────────────────────────────────────────────────
  references: {
    title: 'IX. Verankerte Referenz-Sequenzen',
    intro: 'Die am besten verifizierten Sequenzen des Korpus — als Orientierungshilfe beim Übersetzen.',
    insertButton: 'In Übersetzer laden',
  },

  // ── X. Wortklassen ─────────────────────────────────────────────────────────
  wordClasses: {
    title: 'X. Wortklassen-System',
    intro: 'Taxonomie der neun Wortklassen mit statistischen Exklusionsmustern.',
    exclTitle: 'Statistische Exklusionsmuster',
    exclIntroHtml: 'Drei nachgewiesene Exklusionen (alle p &lt; 0,01):',
    columns: { cls: 'Klasse', words: 'Wörter (EVA)', fn: 'Funktion im Text' },
  },

  // ── XI. Sprache A ──────────────────────────────────────────────────────────
  languageA: {
    title: (/** @type {string} */ foliosA) => `XI. Sprache A — Quires A–D (${foliosA})`,
    comparisonTitle: 'Sprache A vs. B — Hauptunterschiede',
    corpusTitle: 'Quires A–D — Textkorpus (alle analysierten Folios)',
    columns: {
      feature:    'Merkmal',
      langBHeader:'Sprache B (f57r, f103r)',
      langAHeader:(/** @type {string} */ foliosA) => `Sprache A (${foliosA})`,
      folio:      'Folio',
      plant:      'Pflanze',
      signal:     'Textsignal',
      confidence: 'Konf.',
    },
  },

  // ── XII. Randsterne ────────────────────────────────────────────────────────
  marginStars: {
    title: 'XII. Das Randstern-System',
    intro: 'Auf Quire-T-Seiten (f103r/v, f114v, f115r/v, f116r) markieren handgezeichnete Sternzeichen am linken Rand einzelne Paragraphen. Das System ist unabhängig vom Zeichenmapping analysierbar.',
    orRuleTitle: 'Kernbefund: or-Regel (★★★★)',
    orRuleTextHtml: 'Paragraphen mit positivem Prognose-Vokabular (<span class="eva">or</span>, <span class="eva">lor·aiin</span>, <span class="eva">olor</span>) tragen auf f103r/v <strong>niemals</strong> einen Randstern. Alle fünf or-Paragraphen auf f103v sind sternlos (5/5). Statistisch nicht zufällig (p &lt; 0,01).',
    starTypesTitle: 'Sterntypen und Funktionen',
    schemaTitle: 'Dreischritt-Schema (f103r)',
    schemaDescHtml: 'Die Sternsequenz folgt einem quasi-periodischen Trio <strong>Rot → Leer → Punkt</strong> (viermal vollständig), das einem klassischen medizinischen Dreischritt entspricht:',
    inclusioTitle: 'Strukturelle Inclusio: P.1 ↔ P.52 (f103r)',
    inclusioParagraphHtml: 'P.1 öffnet mit <span class="eva">pchedal · dal · yshdal</span> (dreifach „der Schwache"). P.52 — markiert mit dem einzigen Sonderstern der Seite — beginnt ebenfalls mit <span class="eva">pchedal</span>. Diese bewusste literarische Rahmung ist ein Kompositionsmerkmal mittelalterlicher Medizintraktate.',
    folioCompTitle: 'Folio-übergreifender Vergleich',
    schema: {
      red:   { icon: '★', label: '<strong>Rot</strong> — Falleröffnung<br>Anamnese' },
      empty: { icon: '☆', label: '<strong>Leer</strong> — Verlauf<br>Krise' },
      dot:   { icon: '✦', label: '<strong>Punkt</strong> — Abschluss<br>Prognose' },
    },
    columns: {
      type:       'Typ',
      morph:      'Morphologie',
      fn:         'Funktion',
      confidence: 'Konf.',
      folio:      'Folio',
      principle:  'Sternprinzip',
      note:       'Besonderheit',
    },
  },

  // ── XIII. Gibberish-Test ───────────────────────────────────────────────────
  gibberish: {
    title: (/** @type {string} */ version) => `XIII. Gibberish-Test (v${version})`,
    intro: 'Empirisches Falsifikationswerkzeug: Pseudowörter mit Voynich-ähnlicher Bigramm-Statistik werden durch <strong>R40 v2</strong>, <strong>R41</strong> (Präfix-Hierarchie mit R45-Präzisierung: d-/REL → Konj. → Präp. → Basis) und <strong>D1/D2</strong> geführt. Abbruchschwelle: &gt; 15 % · Warnzone: 11–15 % · Zielkorridor: ≤ 10 % strukturelle Falsch-Positive (★★★).',
    updateNoteHtml: (/** @type {string} */ rate) => `<em>v8.8.9-Update:</em> R41-Klassifikation korrigiert — d-Relativpräfix (R45) wird als REL-Klasse (äußerste Schale) behandelt, nicht als PREP; Konjunktionsklasse um v- erweitert. Testwert: ${rate}.`,
  },

  // ── XIV. Offene Probleme ───────────────────────────────────────────────────
  openProblems: {
    title: 'XIV. Offene Probleme und ungelöste Widersprüche',
    intro: 'Ehrliche Dokumentation der statistischen Anomalien und methodischen Grenzen, die das System nicht erklärt. Eingeführt in v7.5.',
    auditNote: {
      title: 'Methodischer Vorbehalt (v7.5)',
      textHtml: 'Das Mapping ist eine <strong>starke Lesehypothese</strong>, keine bewiesene Entzifferung. Die folgenden Probleme widersprechen der Hypothese nicht zwingend, müssen aber sichtbar bleiben. Interne Kohärenz beweist keine externe Gültigkeit.',
    },
    workingHypothesisLabel: 'Arbeitshypothese:',
    severity: {
      hoch:               'Schwere: hoch',
      mittel:             'Schwere: mittel',
      strukturell:        'Strukturell',
      'niedrig-mittel':   'Schwere: niedrig–mittel',
      'hoch (methodisch)':'Schwere: hoch (methodisch)',
    },
    status: {
      offen:      'offen',
      ausstehend: 'ausstehend',
      moratorium: 'Moratorium aktiv',
      gelöst:     'gelöst',
    },
    scheolBoxTitle: 'Scheol-Verteilungsstatistik (v7.5 formalisiert)',
    scheolColumns: {
      position: 'Strukturposition',
      sheol:    'sheol/shol-Vorkommen',
      other:    'Andere Lexeme',
    },
    scheolNote: 'Diese Verteilung ist nicht die eines zufällig platzierten Begriffs. Sie folgt präzise R6 (Zeilenabschluss sheol = Tod-Prognose) und R17 (shol apokor. medial / sheol Vollform final).',
  },
};
