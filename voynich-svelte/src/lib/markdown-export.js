import { STATS, MAPPING, PREFIXES, LEXICON, RULES } from './index.js';
import { GRAMMAR_PREFIXES, GRAMMAR_SUFFIXES, VERB_PARADIGM } from './grammar-data.js';
import { TESTED, STATS as BACKTEST_STATS } from './backtest-data.js';
import { CLASSES } from './word-classes-data.js';
import { COMPARISON, FOLIOS as LANG_A_FOLIOS } from './language-a-data.js';
import { STAR_TYPES, FOLIOS as STAR_FOLIOS } from './margin-stars-data.js';
import { REFS } from './references-data.js';
import { CONFIDENCE_SCALE, ANCHOR_FOLIOS } from './methodology-data.js';

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

const CAT = /** @type {Record<string, string>} */({
  symptom:    'Medizinische Nomina & Symptome',
  prognose:   'Prognose-Termini',
  syntax:     'Syntaktische Konnektoren',
  verb:       'Verbformen',
  akteur:     'Akteure, Anatomie & Botanik',
  kolophon:   'Kolophon-Formeln',
  kompositum: 'Bestätigte Komposita',
  possessiv:  'Possessiv-Formen',
});

const TOC = [
  'I. Zusammenfassung',
  'II. Methodik',
  'IV. Zeichenmapping',
  'V. Lexikon',
  'VI. Grammatik',
  'VII. Grammatikregeln',
  'VIII. Rückwärtstest',
  'IX. Referenzen',
  'X. Wortklassen',
  'XI. Sprache A',
  'XII. Randsterne',
];

export function generateMarkdown() {
  const s = /** @type {string[]} */([]);
  const line = (t = '') => s.push(t);
  const h = (/** @type {number} */ n, /** @type {string} */ t) => s.push(`${'#'.repeat(n)} ${t}`);

  // ── Title ──────────────────────────────────────────────────────
  h(1, 'Voynich-Manuskript — Formales Mapping-Dokument');
  line(`**EVA → Hebräisch-Aramäisch · Version ${STATS.version} · Juni 2026**`);
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
  line('Version 6.8 wird ausgelöst durch f21r + f21v (Bifolio bC4 — vollständig abgeschlossen, Quire C 10/16 Seiten). Strukturelle Höhepunkte: `cheol` ★★★ → ★★★★ (R43 definitiv erfüllt: 4. Beleg f77r + f20v + f21r P.5 + P.8); neue Lexikoneinträge `tshaiin` ★★★ Kand. + `chotshol` ★★★ Kand. + `ysheol` ★★★ Kand.; f21r = Dreifache Licht-Formel P.7 (R52 ★★ Kand., Corpus-Erstbeleg) + R15 Typ-B 4. Beleg P.12; f21v = kompaktester Kolophon im Corpus (3 Wörter) + daiin·daiin R19-Bestätigung; R51 ★★★ (2-Folio-Kand.: f20v + f21v) + R52 ★★ (Kolophon-Trias, 1 Beleg) neu hinzugefügt.');
  line();
  h(3, `Kernbefunde — Version ${STATS.version}`);
  line();
  s.push(tbl(['Eigenschaft', 'Wert'], [
    ['Identifizierte Sprache', 'Mischna-Hebräisch / Jüdisch-Aramäisch'],
    ['Texttyp', 'Medizinischer Traktat / Astronomisch-astrologisches Register — Pharmakopöe + Fixsternkatalog (f58r); f1r: deklarativer Haskama-Typ (sui generis)'],
    ['Analysierte Folios', STATS.foliosAll],
    ['Bestätigte Wörter', `${STATS.lexicon} (★★★ oder höher)`],
    ['Rückwärtstest (Spr. B)', `${STATS.backtestFraction} Vorhersagen bestätigt (${STATS.backtest}); 0 Falsch-Positive`],
    ['Sprache A Anker', `${STATS.foliosA}: 10/10 Ankerwörter je Folio — 100 % (Quires A+B vollständig, Quire C bC1–bC4)`],
    ['Grammatikregeln', `${RULES.length} (24 validiert + ${RULES.length - 24} Kandidaten)`],
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

  // ── IV. Zeichenmapping (III. tool skipped) ─────────────────────
  h(2, 'IV. Zeichenmapping EVA → Hebräisch');
  line();
  line('Das folgende Mapping bildet EVA-Buchstaben auf hebräische Konsonanten ab.');
  line();
  s.push(tbl(['EVA', 'Hebräisch', 'Name'], MAPPING.map(m => [m.eva, m.heb, m.name])));
  line();
  h(3, 'Morphologische Präfixe');
  line();
  s.push(tbl(['EVA', 'Hebräisch', 'Bedeutung'], PREFIXES.map(p => [p.eva, p.heb, p.de])));
  line();
  line('**Sonderregel:** Das EVA-Zeichen `o` hat zwei Funktionen: (1) als konsonantisches ע (Ayin) am Wortanfang, und (2) als Vokalmarker Ḥolam im Wortinneren.');
  line();

  // ── V. Lexikon ─────────────────────────────────────────────────
  h(2, `V. Bestätigtes Lexikon (${STATS.lexicon} Einträge)`);
  line();
  line('Alle Einträge mit ★★★ oder höher.');
  line();
  const cats = [...new Set(LEXICON.map(e => e.cat))];
  for (const cat of cats) {
    h(3, CAT[cat] || cat);
    line();
    s.push(tbl(['EVA', 'Hebräisch', 'Deutsch', 'Konf.'],
      LEXICON.filter(e => e.cat === cat).map(e => [e.eva, e.heb, e.de, e.stars])));
    line();
  }

  // ── VI. Grammatik ──────────────────────────────────────────────
  h(2, 'VI. Grammatik — Präfixe, Suffixe & Schemata');
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
  h(3, 'Verb-Paradigma y+k+[Terminus] — 6 bestätigt + 1 Kandidat');
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

  // ── VII. Grammatikregeln ───────────────────────────────────────
  h(2, 'VII. Grammatikregeln');
  line();
  line(`${RULES.length} Regeln gesamt: **24 validiert** (≥ 2 unabhängige Belege) + **${RULES.length - 24} Kandidaten**. R14 und R20 gelten als gesichert (★★★★★).`);
  line();
  s.push(tbl(['#', 'Regel', 'Evidenz', 'Konf.'],
    RULES.map(r => [r.id, stripHtml(r.rule), stripHtml(r.evidence), r.stars])));
  line();

  // ── VIII. Rückwärtstest ────────────────────────────────────────
  h(2, 'VIII. Rückwärtstest-Statistik');
  line();
  line('26 hebräische/aramäische Wörter wurden nach dem EVA-Mapping kodiert und im Korpus (Sprache B) gesucht. Trefferquote: **88,5 % (23/26)**.');
  line();
  s.push(tbl(['Kategorie', 'Ergebnis'], BACKTEST_STATS.map(st => [st.label, st.num])));
  line();
  line('**Entscheidend: Keine einzige Vorhersage ergab einen Falsch-Positiv-Treffer.** Bei einem Zufallsalphabet statistisch ausgeschlossen.');
  line();
  h(3, 'Getestete Formen');
  line();
  s.push(tbl(['Vorhersage', 'Hebräisch', 'Befund', 'Kontext'],
    TESTED.map(t => [t.pred, t.heb, t.result, t.context])));
  line();

  // ── IX. Referenz-Sequenzen ─────────────────────────────────────
  h(2, 'IX. Verankerte Referenz-Sequenzen');
  line();
  line('Die am besten verifizierten Sequenzen des Korpus — als Orientierungshilfe beim Übersetzen.');
  line();
  for (const ref of REFS) {
    const badge = ref.badge ? ` (${ref.badge})` : '';
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

  // ── X. Wortklassen ────────────────────────────────────────────
  h(2, 'X. Wortklassen-System');
  line();
  line('Taxonomie der neun Wortklassen mit statistischen Exklusionsmustern.');
  line();
  s.push(tbl(['Klasse', 'Wörter (Auswahl)', 'Funktion'], CLASSES.map(c => [c.cls, c.words, c.fn])));
  line();

  // ── XI. Sprache A ──────────────────────────────────────────────
  h(2, `XI. Sprache A — Quires A–C (${STATS.foliosA})`);
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

  // ── XII. Randsterne ────────────────────────────────────────────
  h(2, 'XII. Das Randstern-System');
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

  // ── Footer ─────────────────────────────────────────────────────
  line('---');
  line();
  line(`Voynich-Manuskript — Formales Mapping-Dokument · Version ${STATS.version} · Juni 2026`);
  line(`Lexikon: ${STATS.lexicon} Einträge · Grammatikregeln: ${STATS.rules} · Rückwärtstest: ${STATS.backtest} (${STATS.backtestFraction})`);
  line();
  line('_Dieses Dokument ist ein Forschungshilfsmittel. Alle Übersetzungen sind Hypothesen und laden zur Falsifikation ein._');

  return s.join('\n');
}
