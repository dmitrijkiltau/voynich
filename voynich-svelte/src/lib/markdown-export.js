import { STATS, MAPPING, PREFIXES, RULES } from './index.js';
import { GRAMMAR_PREFIXES, GRAMMAR_SUFFIXES, VERB_PARADIGM } from './grammar-data.js';
import { TESTED, STATS as BACKTEST_STATS } from './backtest-data.js';
import { CLASSES } from './word-classes-data.js';
import { COMPARISON, FOLIOS as LANG_A_FOLIOS } from './language-a-data.js';
import { STAR_TYPES, FOLIOS as STAR_FOLIOS } from './margin-stars-data.js';
import { REFS } from './references-data.js';
import { CONFIDENCE_SCALE, ANCHOR_FOLIOS } from './methodology-data.js';
import { OPEN_PROBLEMS } from './open-problems-data.js';
import { STEM_WORDS, LEXICON_DERIVED, getLexiconConfidence, getLexiconRules } from './lexicon-data.js';

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
    ['Sprache A Anker', `${STATS.foliosA}: 10/10 Ankerwörter je Folio — 100 % (Quires A+B vollständig, Quire C bC1–bC4, Quire D bD1+bD2+bD3+bD4)`],
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
  line('Das folgende Mapping bildet EVA-Buchstaben auf hebräische Konsonanten ab.');
  line();
  s.push(tbl(['EVA', 'Hebräisch', 'Name'], MAPPING.map(m => [m.eva, m.heb, m.name])));
  line();
  h(3, 'Morphologische Präfixe');
  line();
  s.push(tbl(['EVA', 'Hebräisch', 'Bedeutung'], PREFIXES.map(p => [p.eva, p.heb, p.de])));
  line();
  line('**R2-ext (v7.5):** Das EVA-Zeichen `o` ist positionell vollständig determiniert: (1) `o-` am Wortanfang = ע (Ayin, konsonantisch) — ausnahmslos; (2) `o` im Wortinneren = Ḥolam (Vokalmarker) — ausnahmslos. **Negativtest:** 0 Gegenbeispiele in 140+ validierten Lexikoneinträgen.');
  line();

  // ── IV. Lexikon ────────────────────────────────────────────────
  h(2, `IV. Bestätigtes Lexikon (${STATS.lexicon} Einträge)`);
  line();
  line('Alle Einträge mit ★★★ oder höher, getrennt nach Stammwörtern und abgeleiteten Formen.');
  line();

  h(3, `A. Stammwörter (${STEM_WORDS.length})`);
  line();
  s.push(tbl(
    ['EVA', 'Hebräisch', 'Deutsch', 'Schicht', 'Anker', 'Folio', 'Regeln', 'Konf.'],
    STEM_WORDS.map(e => [
      e.eva,
      e.heb,
      e.de,
      e.layer || '—',
      e.isAnchor ? 'ja' : '—',
      e.anchorFolio || '—',
      getLexiconRules(e).join(', ') || '—',
      getLexiconConfidence(e.confidenceStars),
    ])
  ));
  line();

  h(3, `B. Abgeleitete Lexikon-Einträge (${LEXICON_DERIVED.length})`);
  line();
  s.push(tbl(
    ['EVA', 'Morph.', 'Hebräisch', 'Deutsch', 'Evidenz', 'Regeln', 'Konf.'],
    LEXICON_DERIVED.map((/** @type {any} */ e) => [
      e.eva,
      e.morph || '—',
      e.heb,
      e.de,
      e.evidence || '—',
      getLexiconRules(e).join(', ') || '—',
      getLexiconConfidence(e.confidenceStars),
    ])
  ));
  line();

  // ── V. Grammatik ──────────────────────────────────────────────
  h(2, 'V. Grammatik — Präfixe, Suffixe & Schemata');
  line();
  h(3, 'Präfix-System');
  line();
  s.push(tbl(['EVA-Präfix', 'Hebräisch', 'Funktion', 'Beispiel (EVA)', 'Beispiel (Heb)', 'Konf.'],
    GRAMMAR_PREFIXES.map(r => [r.eva, r.heb, r.fn, r.ex_eva, r.ex_heb, r.stars])));
  line();
  h(3, 'Suffix-System');
  line();
  s.push(tbl(['EVA-Suffix', 'Hebräisch', 'Funktion', 'Konf.'],
    GRAMMAR_SUFFIXES.map(r => [r.eva, r.heb, r.fn, r.stars])));
  line();
  h(3, 'Verb-Paradigma y+k+[Terminus] — 6 bestätigt + 3 Kandidaten');
  line();
  s.push(tbl(['EVA', 'Hebräisch', 'Bedeutung', 'Erstbeleg', 'Konf.'],
    VERB_PARADIGM.map(r => [r.eva, r.heb, r.de, r.folio, r.stars])));
  line();
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
  s.push(tbl(['#', 'Regel', 'Evidenz', 'Konf.'],
    RULES.map(r => [r.id, stripHtml(r.rule), stripHtml(r.evidence), r.stars])));
  line();

  // ── VII. Rückwärtstest ────────────────────────────────────────
  h(2, 'VII. Rückwärtstest-Statistik');
  line();
  line(`${STATS.backtestTotal} hebräische/aramäische Wörter getestet. Ab v7.5 zwei Klassen: **Typ I** (genuine Vorhersagen — Prä-Analyse-Anker, eingefroren): **${_numI} = ${_pctI}%** · **Typ II** (interne Kohärenz — post-hoc): **${_numII} = ${_pctII}%** · 0 Falsch-Positive in beiden Klassen.`);
  line();
  s.push(tbl(['Kategorie', 'Ergebnis'], BACKTEST_STATS.map(st => [st.label, st.num])));
  line();
  line('**Entscheidend: Keine einzige Vorhersage ergab einen Falsch-Positiv-Treffer.** Bei einem Zufallsalphabet statistisch ausgeschlossen.');
  line();
  h(3, `Typ I — Genuine Vorhersagen (${_numI} · ${_pctI}%)`);
  line();
  s.push(tbl(['Vorhersage', 'Hebräisch', 'Befund', 'Kontext'],
    TESTED.filter(t => t.type === 'I').map(t => [t.pred, t.heb, t.result, t.context])));
  line();
  h(3, `Typ II — Interne Kohärenz (${_numII} · ${_pctII}%)`);
  line();
  s.push(tbl(['Vorhersage', 'Hebräisch', 'Befund', 'Kontext'],
    TESTED.filter(t => t.type === 'II').map(t => [t.pred, t.heb, t.result, t.context])));
  line();

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
  s.push(tbl(['Klasse', 'Wörter (Auswahl)', 'Funktion'], CLASSES.map(c => [c.cls, c.words, c.fn])));
  line();

  // ── X. Sprache A ──────────────────────────────────────────────
  h(2, `X. Sprache A — Quires A–D (${STATS.foliosA})`);
  line();
  h(3, 'Sprachvergleich Spr. A vs. Spr. B');
  line();
  s.push(tbl(['Merkmal', 'Sprache B', 'Sprache A'], COMPARISON.map(c => [c.feature, c.langB, c.langA])));
  line();
  h(3, 'Folio-Analyse');
  line();
  s.push(tbl(['Folio', 'Pflanze', 'Signale', 'Konf.'],
    LANG_A_FOLIOS.map(f => [f.folio, f.plant, f.signal, f.stars])));
  line();

  // ── XI. Randsterne ────────────────────────────────────────────
  h(2, 'XI. Das Randstern-System');
  line();
  h(3, 'Sterntypen');
  line();
  s.push(tbl(['Typ', 'Morphologie', 'Funktion', 'Konf.'],
    STAR_TYPES.map(st => [st.type, st.morph, st.fn, st.stars])));
  line();
  h(3, 'Folio-Prinzipien');
  line();
  s.push(tbl(['Folio', 'Prinzip', 'Notiz'], STAR_FOLIOS.map(f => [f.folio, f.principle, f.note])));
  line();

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
