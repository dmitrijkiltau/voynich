import { STATS, MAPPING, PREFIXES, RULES, STEM_WORDS, LEXICON_DERIVED } from './index.js';
import { GRAMMAR_PREFIXES, GRAMMAR_SUFFIXES, VERB_PARADIGM } from './grammar-data.js';
import { TESTED, STATS as BACKTEST_STATS } from './backtest-data.js';
import { CLASSES } from './word-classes-data.js';
import { COMPARISON, FOLIOS as LANG_A_FOLIOS } from './language-a-data.js';
import { STAR_TYPES, FOLIOS as STAR_FOLIOS } from './margin-stars-data.js';
import { REFS } from './references-data.js';
import { CONFIDENCE_SCALE, ANCHOR_FOLIOS } from './methodology-data.js';
import { OPEN_PROBLEMS } from './open-problems-data.js';
import { getLexiconRules } from './lexicon-data.js';

const _bsI   = BACKTEST_STATS.find(s => s.label.startsWith('Typ I'));
const _bsII  = BACKTEST_STATS.find(s => s.label.startsWith('Typ II'));
const _numI  = _bsI?.num.replace(/ /g, '') ?? '?';
const _pctI  = Math.round(_bsI?.pct ?? 0);
const _numII = _bsII?.num.replace(/ /g, '') ?? '?';
const _pctII = Math.round(_bsII?.pct ?? 0);

/** @param {string} html */
function stripHtml(html) {
  return String(html ?? '')
    .replace(/<strong>(.*?)<\/strong>/g, '**$1**')
    .replace(/<em>(.*?)<\/em>/g, '_$1_')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ').trim();
}

/** @param {number | undefined} n */
function starRating(n) {
  const count = Number(n ?? 0);
  return `${count} von 5 Sternen (${'★'.repeat(count)}${'☆'.repeat(5 - count)})`;
}

/** @param {string[]} headers @param {any[][]} rows */
function tbl(headers, rows) {
  const esc = (/** @type {any} */ s) => String(s ?? '').replace(/\|/g, '\\|').replace(/[\n\r]+/g, ' ');
  return [
    `| ${headers.map(esc).join(' | ')} |`,
    `| ${headers.map(() => '---').join(' | ')} |`,
    ...rows.map((/** @type {any[]} */ r) => `| ${r.map(esc).join(' | ')} |`),
  ].join('\n') + '\n';
}

// No TranslatorTool, nor GibberishTest in Markdown export
const TOC = [
  'I. Zusammenfassung',
  'II. Methodik',
  'III. Zeichenmapping',
  'IV. Lexikon',
  'V. Grammatik',
  'VI. Grammatikregeln',
  'VII. Rückwärtstest',
  'VIII. Referenzen',
  'IX. Wortklassen',
  'X. Sprache A',
  'XI. Randsterne',
  'XII. Offene Probleme',
];

export function generateMarkdown() {
  const s = /** @type {string[]} */([]);
  const line = (t = '') => s.push(t);
  const h = (/** @type {number} */ n, /** @type {string} */ t) => s.push(`${'#'.repeat(n)} ${t}`);

  // ── Title ──────────────────────────────────────────────────────
  h(1, 'Voynich-Manuskript — Formales Mapping-Dokument');
  line(`**EVA → Hebräisch-Aramäisch · Version ${STATS.version} · ${STATS.date}**`);
  line();
  line(`Sprachen A & B · Folios ${STATS.foliosAll}`);
  line();
  line('---');
  line();

  // ── TOC ────────────────────────────────────────────────────────
  h(2, 'Inhaltsangabe');
  line();
  for (const item of TOC) line(`- ${item}`);
  line();
  line('---');
  line();

  // ── I. Zusammenfassung ─────────────────────────────────────────
  h(2, 'I. Zusammenfassung');
  line();
  line('Das vorliegende Dokument fasst den aktuellen Stand der Entzifferungsanalyse des Voynich-Manuskripts zusammen. Es richtet sich an Hebraisten, Aramaisten und Kodikographen, die eine unabhängige Prüfung der vorgeschlagenen Übersetzungen vornehmen möchten.');
  line();
  line('**Die Grundhypothese:** Das Voynich-Manuskript ist in **Mischna-Hebräisch mit aramäischen Lehnpartikeln** verfasst, verschlüsselt durch ein konsonantisches Alphabet mit Niqqud-Markierungen als Vokalhelfer. Die Texte folgen dem Schema eines _hippokratisch-mittelalterlichen Medizintraktats_: Diagnose → Symptombeschreibung → Therapieindikation → Prognose.');
  line();
  line(`**Korrekturen in v${STATS.version}:**`);
  line();
  for (const change of STATS.changelog) line(`- ${change}`);
  line();
  h(3, `Kernbefunde — Version ${STATS.version}`);
  line();
  s.push(tbl(['Eigenschaft', 'Wert'], [
    ['Identifizierte Sprache', 'Mischna-Hebräisch / Jüdisch-Aramäisch'],
    ['Texttyp', 'Medizinischer Traktat / Astronomisch-astrologisches Register — Pharmakopöe + Fixsternkatalog (f58r); f1r: deklarativer Haskama-Typ (sui generis)'],
    ['Analysierte Folios', STATS.foliosAll],
    ['Bestätigte Wörter', `${STATS.lexicon} (★★★ oder höher)`],
    ['Rückwärtstest', `Typ I (genuine Vorhersagen): 10/10 (100%) · Typ II (interne Kohärenz): 29/32 (91%) · 0 Falsch-Positive`],
    ['Sprache A Anker', `${STATS.foliosA}: 10/10 Sprache-A-Ankerwörter je Folio — 100 % (Quires A+B vollständig, Quire C bC1–bC4, Quire D bD1+bD2+bD3+bD4)`],
    ['Grammatikregeln', `${RULES.length} (${STATS.validatedRules} validiert + ${RULES.length - STATS.validatedRules} Kandidaten)`],
  ]));
  line();

  // ── II. Methodik ───────────────────────────────────────────────
  h(2, 'II. Methodik');
  line();
  h(3, 'Rückwärtstest-Prinzip');
  line();
  line('Jede Mapping-Hypothese wird durch Rückwärtstests validiert: Ein bekanntes hebräisches oder aramäisches Wort wird nach dem vorgeschlagenen Mapping in EVA kodiert und im Voynich-Korpus gesucht. Bestätigung erfordert: (a) Vorkommen im Korpus, (b) semantisch plausible Position, (c) kontextuell passende Nachbarwörter.');
  line();
  h(3, 'Konfidenzskala');
  line();
  s.push(tbl(['Sterne', 'Bedeutung', 'Kriterien'],
    CONFIDENCE_SCALE.map(c => [c.stars, c.label, c.criteria])));
  line();
  h(3, 'Anker-Folios');
  line();
  for (const anchor of ANCHOR_FOLIOS) {
    line(`**${anchor.folio} — ${anchor.subtitle}:** ${anchor.desc}`);
    if (anchor.eva) line(`\`${anchor.eva}\` = ${anchor.heb} ${anchor.gloss}`);
    line();
  }

  // ── III. Zeichenmapping ────────────────────────────────────────
  h(2, 'III. Zeichenmapping EVA → Hebräisch');
  line();
  line('Positionell determiniertes Konsonanten- und Vokalmarker-Alphabet. Jedes EVA-Zeichen ist eindeutig einem hebräischen Äquivalent zugeordnet.');
  line();
  for (const m of MAPPING) {
    h(3, `Zeichenmapping: ${m.eva}`);
    line();
    line(`- **EVA-Zeichen:** ${m.eva}`);
    line(`- **Hebräisches Zeichen:** ${m.heb}`);
    line(`- **Name / Funktion:** ${m.name}`);
    line();
  }
  line('**Morphologische Präfixe** — greedy-sortiert (längste zuerst):');
  line();
  for (const p of PREFIXES) {
    h(3, `Morphologisches Präfix: ${p.eva}`);
    line();
    line(`- **EVA-Präfix:** ${p.eva}`);
    line(`- **Hebräisch:** ${p.heb}`);
    line(`- **Bedeutung / Funktion:** ${p.de}`);
    line();
  }
  line('**R2-ext (v7.5):** Das EVA-Zeichen `o` ist positionell vollständig determiniert: (1) `o-` am Wortanfang = ע (Ayin, konsonantisch) — ausnahmslos; (2) `o` im Wortinneren = Ḥolam (Vokalmarker) — ausnahmslos. **Negativtest:** 0 Gegenbeispiele in 140+ validierten Lexikoneinträgen. **f1r Nulltest (positiver Strukturbeleg):** 260 Token analysiert — alle initialen `o` = Ayin, alle internen `o` = Ḥolam, 0 Ausnahmen.');
  line();

  // ── IV. Lexikon ────────────────────────────────────────────────
  h(2, `IV. Bestätigtes Lexikon (${STATS.lexicon} Einträge)`);
  line();
  line('Alle Einträge mit ★★★ oder höher — Stammwörter, Ableitungen und R43-Kandidaten.');
  line();

  /** @param {any} e */
  const _ragDe = (e) => (e.de || '—') + (e.uncertain ? ' ≈' : '');
  /** @param {any} e */
  const _ragContext = (e) => {
    const parts = [];
    if (e.context) parts.push(e.context);
    if (e.relatedTo) parts.push(`${e.relatedTo.type}: ${e.relatedTo.eva}`);
    return parts.join(' / ') || 'Keine zusätzlichen Kontextinformationen';
  };

  const _allLexEntries = /** @type {any[]} */([
    ...STEM_WORDS.map(e => ({ ...e, _kind: 'Stammwort' })),
    ...LEXICON_DERIVED.map(e => ({ ...e, _kind: 'Ableitung' })),
  ]);

  for (const e of _allLexEntries) {
    const typLabel = e._kind + (e.candidate ? ' (R43 Kandidat)' : '');
    h(3, `Lexikoneintrag: ${e.eva}`);
    line();
    line(`- **Wort (EVA-Transkription):** ${e.eva}`);
    line(`- **Hebräische Entsprechung:** ${e.heb}`);
    line(`- **Typ:** ${typLabel}`);
    if (e.morph) line(`- **Morphologie:** ${e.morph}`);
    line(`- **Bedeutung:** ${_ragDe(e)}`);
    line(`- **Linguistischer Kontext:** ${_ragContext(e)}`);
    line(`- **Sprachschicht:** ${e.layer || 'Nicht zugewiesen / Unbekannt'}`);
    line(`- **Anker-Status:** ${e.isAnchor ? 'Anker-Typ I' : 'Kein Anker'}`);
    line(`- **Folio-Referenz (Erstbeleg):** ${e.anchorFolio || e.evidence || '—'}`);
    line(`- **Zugehörige Regeln:** ${getLexiconRules(e).join(', ') || '—'}`);
    line(`- **Konfidenz-Bewertung:** ${starRating(e.confidenceStars)}`);
    line();
  }

  // ── V. Grammatik ──────────────────────────────────────────────
  h(2, 'V. Grammatik — Präfixe, Suffixe & Schemata');
  line();
  line('**Präfix-System**');
  line();
  for (const r of GRAMMAR_PREFIXES) {
    h(3, `Grammatik-Präfix: ${r.eva}`);
    line();
    line(`- **EVA-Präfix:** ${r.eva}`);
    line(`- **Hebräisch:** ${r.heb}`);
    line(`- **Funktion:** ${r.fn}`);
    line(`- **Beispiel (EVA):** ${r.ex_eva}`);
    line(`- **Beispiel (Hebräisch):** ${r.ex_heb}`);
    line(`- **Konfidenz-Bewertung:** ${r.stars}`);
    line();
  }
  line('**Suffix-System**');
  line();
  for (const r of GRAMMAR_SUFFIXES) {
    h(3, `Grammatik-Suffix: ${r.eva}`);
    line();
    line(`- **EVA-Suffix:** ${r.eva}`);
    line(`- **Hebräisch:** ${r.heb}`);
    line(`- **Funktion:** ${r.fn}`);
    line(`- **Konfidenz-Bewertung:** ${r.stars}`);
    line();
  }
  line('**Verb-Paradigma y+k+[Terminus] — 6 bestätigt + 3 Kandidaten**');
  line();
  for (const r of VERB_PARADIGM) {
    h(3, `Verb-Paradigma: ${r.eva}`);
    line();
    line(`- **EVA:** ${r.eva}`);
    line(`- **Hebräisch:** ${r.heb}`);
    line(`- **Bedeutung:** ${r.de}`);
    line(`- **Erstbeleg:** ${r.folio}`);
    if (r.negative) line(`- **Prognose-Typ:** Negativ (Scheol-Richtung)`);
    line(`- **Status:** ${r.candidate ? 'R43 Kandidat' : 'Bestätigt'}`);
    line(`- **Konfidenz-Bewertung:** ${r.stars}`);
    line();
  }
  h(3, 'Prognose-Schemata');
  line();
  line('**Quire A (Kräuter, Sprache A):** Symptom (links) ‡ {plant} ‡ Therapie (rechts) → sheol/or (Prognose) → = (Kolophon)');
  line();
  line('**Quire T / Sprache B:** daiin (Urteil) → shedy+X → Befund (ckhy/dal/dam) → lchedy (Therapieziel) → sheol/or (Prognose)');
  line();

  // ── VI. Grammatikregeln ───────────────────────────────────────
  h(2, 'VI. Grammatikregeln');
  line();
  const candidates = RULES.length - STATS.validatedRules;
  const moratoriumRatio = (STATS.validatedRules / candidates).toFixed(2).replace('.', ',');
  const moratoriumStatus = (STATS.validatedRules / candidates) >= 1.5
    ? `**Regelmoratorium beendet (v${STATS.version})** — Verhältnis ${STATS.validatedRules}:${candidates} = ${moratoriumRatio}:1 ≥ 1,5:1. R60+ freigegeben.`
    : `**v${STATS.version}-Regelmoratorium aktiv** — keine neuen Regeln (R60+) bis Verhältnis ≥ 1,5:1 (aktuell ${STATS.validatedRules}:${candidates} = ${moratoriumRatio}:1).`;
  line(`${RULES.length} Regeln gesamt: **${STATS.validatedRules} validiert** (≥ 2 unabhängige Belege) + **${candidates} Kandidaten**. ${moratoriumStatus} R2-ext (v7.5): explizite o-Positionsregel mit Negativtest. R14 und R20 gesichert (★★★★★).`);
  line();
  for (const r of RULES) {
    h(3, `Regel ${r.id}`);
    line();
    line(`- **Regel-ID:** ${r.id}`);
    line(`- **Name / Fokus:** ${stripHtml(r.focus)}`);
    line(`- **Formale Syntax und Bedingung:** ${stripHtml(r.syntax)}`);
    line(`- **Empirische Evidenz:** ${stripHtml(r.evidence)}`);
    line(`- **Konfidenz-Bewertung:** ${starRating(r.confidenceStars)}`);
    line();
  }

  // ── VII. Rückwärtstest ────────────────────────────────────────
  h(2, 'VII. Rückwärtstest-Statistik');
  line();
  line(`${STATS.backtestTotal} hebräische/aramäische Wörter getestet. Ab v7.5 zwei Klassen: **Typ I** (genuine Vorhersagen — Prä-Analyse-Anker, eingefroren): **${_numI} = ${_pctI}%** · **Typ II** (interne Kohärenz — post-hoc): **${_numII} = ${_pctII}%** · 0 Falsch-Positive in beiden Klassen.`);
  line();
  s.push(tbl(['Kategorie', 'Ergebnis'], BACKTEST_STATS.map(st => [st.label, st.num])));
  line();
  line('**Entscheidend: Keine einzige Vorhersage ergab einen Falsch-Positiv-Treffer.** Bei einem Zufallsalphabet statistisch ausgeschlossen.');
  line();
  line(`**Typ I — Genuine Vorhersagen (${_numI} · ${_pctI}%)**`);
  line();
  for (const t of TESTED.filter(t => t.type === 'I')) {
    h(3, `Rückwärtstest Typ I: ${t.pred}`);
    line();
    line(`- **Vorhersage (EVA):** ${t.pred}`);
    line(`- **Hebräisch:** ${t.heb}`);
    line(`- **Befund:** ${t.result}`);
    line(`- **Kontext:** ${t.context}`);
    line(`- **Klasse:** Typ I — Genuine Vorhersage (eingefroren)`);
    line();
  }
  line(`**Typ II — Interne Kohärenz (${_numII} · ${_pctII}%)**`);
  line();
  for (const t of TESTED.filter(t => t.type === 'II')) {
    h(3, `Rückwärtstest Typ II: ${t.pred}`);
    line();
    line(`- **Vorhersage (EVA):** ${t.pred}`);
    line(`- **Hebräisch:** ${t.heb}`);
    line(`- **Befund:** ${t.result}`);
    line(`- **Kontext:** ${t.context}`);
    line(`- **Klasse:** Typ II — Interne Kohärenz`);
    line();
  }

  // ── VIII. Referenz-Sequenzen ───────────────────────────────────
  h(2, 'VIII. Verankerte Referenz-Sequenzen');
  line();
  line('Die am besten verifizierten Sequenzen des Korpus — als Orientierungshilfe beim Übersetzen.');
  line();
  for (const ref of REFS) {
    const badge = ('badge' in ref && ref.badge) ? ` (${ref.badge})` : '';
    h(3, `${ref.id} · ${ref.folio} — ${ref.title}${badge}`);
    line();
    if (ref.sides) {
      for (const side of ref.sides) {
        line(`**EVA:** \`${side.eva}\``);
        line(`Heb: ${side.heb}`);
        line(side.de);
        line();
      }
    } else {
      line(`EVA: \`${ref.eva}\``);
      line(`Heb: ${ref.heb}`);
      line(`DE: ${ref.de}`);
      line();
    }
    const starsStr = ref.stars ? ` ${ref.stars}` : '';
    line(`_${ref.note}${starsStr}_`);
    line();
  }

  // ── IX. Wortklassen ───────────────────────────────────────────
  h(2, 'IX. Wortklassen-System');
  line();
  line('Taxonomie der neun Wortklassen mit statistischen Exklusionsmustern.');
  line();
  for (const c of CLASSES) {
    h(3, `Wortklasse: ${c.cls}`);
    line();
    line(`- **Klasse:** ${c.cls}`);
    line(`- **Beispielwörter:** ${c.words}`);
    line(`- **Syntaktische Funktion:** ${c.fn}`);
    line();
  }

  // ── X. Sprache A ──────────────────────────────────────────────
  h(2, `X. Sprache A — Quires A–D (${STATS.foliosA})`);
  line();
  for (const c of COMPARISON) {
    h(3, `Sprachvergleich — ${c.feature}`);
    line();
    line(`- **Merkmal:** ${c.feature}`);
    line(`- **Sprache B:** ${c.langB}`);
    line(`- **Sprache A:** ${c.langA}`);
    line();
  }
  for (const f of LANG_A_FOLIOS) {
    h(3, `Sprache-A-Folio: ${f.folio}`);
    line();
    line(`- **Folio:** ${f.folio}`);
    line(`- **Pflanze / Inhalt:** ${f.plant}`);
    line(`- **Signale und Befunde:** ${f.signal}`);
    line(`- **Konfidenz-Bewertung:** ${f.stars}`);
    line();
  }

  // ── XI. Randsterne ────────────────────────────────────────────
  h(2, 'XI. Das Randstern-System');
  line();
  for (const st of STAR_TYPES) {
    h(3, `Randsterntyp: ${st.type}`);
    line();
    line(`- **Typ-Bezeichnung:** ${st.type}`);
    line(`- **Morphologie:** ${st.morph}`);
    line(`- **Funktion / Bedeutung:** ${st.fn}`);
    line(`- **Konfidenz-Bewertung:** ${st.stars}`);
    line();
  }
  for (const f of STAR_FOLIOS) {
    h(3, `Randstern-Folio: ${f.folio}`);
    line();
    line(`- **Folio:** ${f.folio}`);
    line(`- **Strukturprinzip:** ${f.principle}`);
    line(`- **Notiz:** ${f.note}`);
    line();
  }

  // ── XII. Offene Probleme ──────────────────────────────────────
  h(2, 'XII. Offene Probleme und ungelöste Widersprüche');
  line();
  line('Ehrliche Dokumentation der statistischen Anomalien und methodischen Grenzen (eingeführt v7.5). Das Mapping ist eine **starke Lesehypothese**, keine bewiesene Entzifferung.');
  line();
  for (const p of OPEN_PROBLEMS) {
    h(3, `${p.id} — ${p.title}`);
    line();
    line(`**Schwere:** ${p.severity} · **Status:** ${p.status}`);
    line();
    line(p.problem);
    line();
    line(`_Arbeitshypothese: ${p.hypothesis}_`);
    line();
  }
  line('**Scheol-Verteilungsstatistik (v7.5 formalisiert):**');
  line();
  s.push(tbl(['Strukturposition', 'sheol/shol-Vorkommen', 'Andere Lexeme'], [
    ['Zeilenende / Kolophon-Final', '>85 % aller Belege', 'or, dom, kaiim'],
    ['Zeilenmitte (medial)', '<15 % — immer in Kompositum', '—'],
    ['Zeilenanfang', '0 %', '—'],
  ]));
  line();

  // ── Footer ─────────────────────────────────────────────────────
  line('---');
  line();
  line(`Voynich-Manuskript — Formales Mapping-Dokument · Version ${STATS.version} · ${STATS.date}`);
  line(`Lexikon: ${STATS.lexicon} Einträge · Grammatikregeln: ${STATS.rules} · Rückwärtstest: ${STATS.backtestFraction}`);
  line();
  line('_Dieses Dokument ist ein Forschungshilfsmittel. Alle Übersetzungen sind Hypothesen und laden zur Falsifikation ein._');

  return s.join('\n');
}
