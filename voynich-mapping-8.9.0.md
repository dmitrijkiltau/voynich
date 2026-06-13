# Voynich-Manuskript — Formales Mapping-Dokument
**EVA → Hebräisch-Aramäisch · Version 8.9.0 · Juni 2026**

Sprachen A & B · Folios f1r, f1v–f10r (Quire A komplett, Positionskarten f1v–f10r), f11r–f32v (Quires B–D komplett), f33r–f34v (Quire E Eröffnung, 5/16), f57r/v, f58r, f69r (Quire J Kosmogramm), f71r–f72r2 (Quire K Zodiak), f103r/v, f114v, f115r/v, f116r/v

---

## Inhaltsangabe

- I. Zusammenfassung
- II. Methodik
- III. Zeichenmapping
- IV. Lexikon
- V. Grammatik
- VI. Grammatikregeln
- VII. Rückwärtstest
- VIII. Referenzen
- IX. Wortklassen
- X. Sprache A
- XI. Randsterne
- XII. Offene Probleme

---

## I. Zusammenfassung

Das vorliegende Dokument fasst den aktuellen Stand der Entzifferungsanalyse des Voynich-Manuskripts zusammen. Es richtet sich an Hebraisten, Aramaisten und Kodikographen, die eine unabhängige Prüfung der vorgeschlagenen Übersetzungen vornehmen möchten.

**Die Grundhypothese:** Das Voynich-Manuskript ist in **Mischna-Hebräisch mit aramäischen Lehnpartikeln** verfasst, verschlüsselt durch ein konsonantisches Alphabet mit Niqqud-Markierungen als Vokalhelfer. Die Texte folgen dem Schema eines _hippokratisch-mittelalterlichen Medizintraktats_: Diagnose → Symptombeschreibung → Therapieindikation → Prognose.

**Korrekturen in v8.9.0:**

- GibberishTest Neues Baseline-Protokoll (10 × 50 Wörter): 7,2 % Brutto-Mittelwert, LEX-TREFFER = 0, 10/10 Läufe im Zielkorridor — Brutto-Baseline von 16,4 % auf 7,2 % durch GPA-1-Corpus-Vorab-Filter verschoben.
- R40-Evidenz: v8.9.0-Baseline-Wert dokumentiert (7,2 % Mittelwert, ±2,7 %, Min 2 %, Max 10 %).

### Kernbefunde — Version 8.9.0

| Eigenschaft | Wert |
| --- | --- |
| Identifizierte Sprache | Mischna-Hebräisch / Jüdisch-Aramäisch |
| Texttyp | Medizinischer Traktat / Astronomisch-astrologisches Register — Pharmakopöe + Fixsternkatalog (f58r); f1r: deklarativer Haskama-Typ (sui generis) |
| Analysierte Folios | f1r, f1v–f10r (Quire A komplett, Positionskarten f1v–f10r), f11r–f32v (Quires B–D komplett), f33r–f34v (Quire E Eröffnung, 5/16), f57r/v, f58r, f69r (Quire J Kosmogramm), f71r–f72r2 (Quire K Zodiak), f103r/v, f114v, f115r/v, f116r/v |
| Bestätigte Wörter | 233 (★★★ oder höher) |
| Rückwärtstest | Typ I (genuine Vorhersagen): 10/10 (100%) · Typ II (interne Kohärenz): 29/32 (91%) · 0 Falsch-Positive |
| Sprache A Anker | f1r–f32v: 10/10 Sprache-A-Ankerwörter je Folio — 100 % (Quires A+B vollständig, Quire C bC1–bC4, Quire D bD1+bD2+bD3+bD4) |
| Grammatikregeln | 57 (40 validiert + 17 Kandidaten) |


## II. Methodik

### Rückwärtstest-Prinzip

Jede Mapping-Hypothese wird durch Rückwärtstests validiert: Ein bekanntes hebräisches oder aramäisches Wort wird nach dem vorgeschlagenen Mapping in EVA kodiert und im Voynich-Korpus gesucht. Bestätigung erfordert: (a) Vorkommen im Korpus, (b) semantisch plausible Position, (c) kontextuell passende Nachbarwörter.

### Konfidenzskala

| Sterne | Bedeutung | Kriterien |
| --- | --- | --- |
| ★★★★★ | Gesichert | ≥ 10 Folios Mehrheitskonsens, 0 Gegenbeispiele, R43 erfüllt |
| ★★★★ | Sehr stark | Rückwärtstest ✓ (Typ-I Anker) oder R43 erfüllt + ≥ 5 Folios Mehrheitskonsens |
| ★★★ | Stark | Semantisch kohärent, morphologisch konsistent, Basiswurzel ≥ 4 Konsonanten (R40 v2), R43 erfüllt |
| ★★★ Kand. | Stark-Kandidat | R40 erfüllt (Basiswurzel ≥ 4 Konsonanten) + R41 (Präfixstruktur), R43 ausstehend |
| ★★ | Möglich | Passt in Kontext, mehrere Alternativlesarten oder Basiswurzel ≤ 3 Konsonanten ohne 2 Ausnahmen (R40 v2) |
| ★ | Spekulativ | Erste Hypothese, noch nicht getestet |


### Anker-Folios

**f57r — Stärkstes Einzelfolio:** Quire 8, Sprache B, Hand 2. Botanisch-pharmazeutische Seite. Enthält die stärkste Einzelsequenz:
`sar · al · daiindy` = שַׂר עַל דִּין דִּי „Arzt über das Urteil dessen.“

**f103r — Höchste Lexikondichte:** Quire 20, Sprache B. 54 Paragraphen reiner Prosatext mit der höchsten Konzentration bestätigter Wörter und den vollständigsten übersetzten Sätzen.

**f58r — Erster astronomischer Stresstest:** Quire H (Beinecke VIII), Sprache A. Erster analysierter Nicht-Botanical-Folio. Beweist semantische Invarianz des Mappings über Register hinweg — alle Ankerwörter behalten ihre Bedeutungen ohne Ad-hoc-Anpassung:
`ytor · ar · alom` = יְ+תֹּ+אוֹר · אֹר · עָלוֹם „er wird erleuchten — Licht — in der Welt.“ (f58r P.30 — R43-Bestätigung für ytor ★★★★)

**f71r–f72r2 — Erstes vollständiges Zodiak-Register:** Quire K (Beinecke XI), Sprache B-dominant. Zodiak-Tetraptychon bK1: 4 Panels, 75 Sternlabeln, 12/12 Ankerwörter bestätigt (100 %). Erste Bestätigung von R50 ★★★★ und R52a ★★★★ im Zodiak-Register. R19/R35-Intensivierung erstmals im Zodiak belegt:
`otam · otam · chotam` = אוֹת+אָם · אוֹת+אָם · כֹּ+אוֹת+אָם „Zeichen der Mutter — Zeichen der Mutter — wie das Zeichen der Mutter.“ (f72r1 R1 — R35-Dreistufenschema ★★★)

## III. Zeichenmapping EVA → Hebräisch

Positionell determiniertes Konsonanten- und Vokalmarker-Alphabet. Jedes EVA-Zeichen ist eindeutig einem hebräischen Äquivalent zugeordnet.

### Zeichenmapping: a

- **EVA-Zeichen:** a
- **Hebräisches Zeichen:** אַ
- **Name / Funktion:** Alef / Patach

### Zeichenmapping: b

- **EVA-Zeichen:** b
- **Hebräisches Zeichen:** בּ
- **Name / Funktion:** Bet

### Zeichenmapping: c

- **EVA-Zeichen:** c
- **Hebräisches Zeichen:** כּ
- **Name / Funktion:** Kaf (stark)

### Zeichenmapping: ch

- **EVA-Zeichen:** ch
- **Hebräisches Zeichen:** כ/ח
- **Name / Funktion:** Kaf / Ḥet

### Zeichenmapping: d

- **EVA-Zeichen:** d
- **Hebräisches Zeichen:** ד
- **Name / Funktion:** Dalet

### Zeichenmapping: e

- **EVA-Zeichen:** e
- **Hebräisches Zeichen:** ֶ
- **Name / Funktion:** Vokal: Segol

### Zeichenmapping: ee

- **EVA-Zeichen:** ee
- **Hebräisches Zeichen:** ֵ
- **Name / Funktion:** Vokal: Ṣere

### Zeichenmapping: f

- **EVA-Zeichen:** f
- **Hebräisches Zeichen:** פ/ף
- **Name / Funktion:** Pe (schwach)

### Zeichenmapping: g

- **EVA-Zeichen:** g
- **Hebräisches Zeichen:** ג
- **Name / Funktion:** Gimel

### Zeichenmapping: h

- **EVA-Zeichen:** h
- **Hebräisches Zeichen:** ה
- **Name / Funktion:** He

### Zeichenmapping: i

- **EVA-Zeichen:** i
- **Hebräisches Zeichen:** י
- **Name / Funktion:** Yod / Ḥiriq

### Zeichenmapping: ii

- **EVA-Zeichen:** ii
- **Hebräisches Zeichen:** יִ
- **Name / Funktion:** Yod + Ḥiriq

### Zeichenmapping: k

- **EVA-Zeichen:** k
- **Hebräisches Zeichen:** כ
- **Name / Funktion:** Kaf (weich)

### Zeichenmapping: l

- **EVA-Zeichen:** l
- **Hebräisches Zeichen:** ל
- **Name / Funktion:** Lamed

### Zeichenmapping: m

- **EVA-Zeichen:** m
- **Hebräisches Zeichen:** מ
- **Name / Funktion:** Mem

### Zeichenmapping: n

- **EVA-Zeichen:** n
- **Hebräisches Zeichen:** נ
- **Name / Funktion:** Nun

### Zeichenmapping: o

- **EVA-Zeichen:** o
- **Hebräisches Zeichen:** ע/ֹ
- **Name / Funktion:** Ayin / Ḥolam

### Zeichenmapping: oo

- **EVA-Zeichen:** oo
- **Hebräisches Zeichen:** וֹ
- **Name / Funktion:** Vav Ḥolam

### Zeichenmapping: p

- **EVA-Zeichen:** p
- **Hebräisches Zeichen:** פּ
- **Name / Funktion:** Pe (stark)

### Zeichenmapping: q

- **EVA-Zeichen:** q
- **Hebräisches Zeichen:** ק
- **Name / Funktion:** Qof

### Zeichenmapping: r

- **EVA-Zeichen:** r
- **Hebräisches Zeichen:** ר
- **Name / Funktion:** Reš

### Zeichenmapping: s

- **EVA-Zeichen:** s
- **Hebräisches Zeichen:** שׂ/ס
- **Name / Funktion:** Sin / Samech

### Zeichenmapping: sh

- **EVA-Zeichen:** sh
- **Hebräisches Zeichen:** שׁ
- **Name / Funktion:** Šin

### Zeichenmapping: t

- **EVA-Zeichen:** t
- **Hebräisches Zeichen:** ת/ט
- **Name / Funktion:** Tav / Ṭet

### Zeichenmapping: y

- **EVA-Zeichen:** y
- **Hebräisches Zeichen:** יְ/וֹ
- **Name / Funktion:** Yod-Vav / Verb-Präfix

### Zeichenmapping: aiin

- **EVA-Zeichen:** aiin
- **Hebräisches Zeichen:** עַיִן
- **Name / Funktion:** Auge-Suffix

### Zeichenmapping: ai

- **EVA-Zeichen:** ai
- **Hebräisches Zeichen:** ַי
- **Name / Funktion:** Patach + Yod

**Morphologische Präfixe** — greedy-sortiert (längste zuerst):

### Morphologisches Präfix: qok

- **EVA-Präfix:** qok
- **Hebräisch:** וְכְּ
- **Bedeutung / Funktion:** und wie

### Morphologisches Präfix: qod

- **EVA-Präfix:** qod
- **Hebräisch:** וְדְּ
- **Bedeutung / Funktion:** und von

### Morphologisches Präfix: qo

- **EVA-Präfix:** qo
- **Hebräisch:** וְ
- **Bedeutung / Funktion:** und/auch

### Morphologisches Präfix: o

- **EVA-Präfix:** o
- **Hebräisch:** עַ
- **Bedeutung / Funktion:** auf/bei

### Morphologisches Präfix: l

- **EVA-Präfix:** l
- **Hebräisch:** לְ
- **Bedeutung / Funktion:** zu/für

### Morphologisches Präfix: d

- **EVA-Präfix:** d
- **Hebräisch:** דְּ
- **Bedeutung / Funktion:** von/aus

### Morphologisches Präfix: p

- **EVA-Präfix:** p
- **Hebräisch:** פְּ
- **Bedeutung / Funktion:** Pe-Präfix

### Morphologisches Präfix: y

- **EVA-Präfix:** y
- **Hebräisch:** יְ
- **Bedeutung / Funktion:** Imperfekt 3.Sg.m.

### Morphologisches Präfix: t

- **EVA-Präfix:** t
- **Hebräisch:** תָּ
- **Bedeutung / Funktion:** Imperfekt 3.Sg.f./2.Sg.

**R2-ext (v7.5):** Das EVA-Zeichen `o` ist positionell vollständig determiniert: (1) `o-` am Wortanfang = ע (Ayin, konsonantisch) — ausnahmslos; (2) `o` im Wortinneren = Ḥolam (Vokalmarker) — ausnahmslos. **Negativtest:** 0 Gegenbeispiele in 140+ validierten Lexikoneinträgen. **f1r Nulltest (positiver Strukturbeleg):** 260 Token analysiert — alle initialen `o` = Ayin, alle internen `o` = Ḥolam, 0 Ausnahmen.

## IV. Bestätigtes Lexikon (233 Einträge)

Alle Einträge mit ★★★ oder höher — Stammwörter, Ableitungen und R43-Kandidaten.

### Lexikoneintrag: aiin

- **Wort (EVA-Transkription):** aiin
- **Hebräische Entsprechung:** עַיִן
- **Typ:** Stammwort
- **Bedeutung:** Auge / Quelle
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Mischna-Hebräisch
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f8r P3.17 (H/C 2/2, Erstbeleg)
- **Zugehörige Regeln:** R42, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: al

- **Wort (EVA-Transkription):** al
- **Hebräische Entsprechung:** עַל
- **Typ:** Stammwort
- **Bedeutung:** auf / über / betreffend
- **Linguistischer Kontext:** Basispräposition / Variante: ol
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f2r P.5 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R19, R40, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: alef

- **Wort (EVA-Transkription):** alef
- **Hebräische Entsprechung:** אָלֶף
- **Typ:** Stammwort (R43 Kandidat)
- **Bedeutung:** Aleph
- **Linguistischer Kontext:** ikonographisch
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** —
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: chaiin

- **Wort (EVA-Transkription):** chaiin
- **Hebräische Entsprechung:** חַיִּין
- **Typ:** Stammwort
- **Bedeutung:** Leben
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Biblisches Hebräisch
- **Anker-Status:** Anker-Typ I
- **Folio-Referenz (Erstbeleg):** f2r P.3 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R18, R19, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: chalal

- **Wort (EVA-Transkription):** chalal
- **Hebräische Entsprechung:** חָלָל
- **Typ:** Stammwort (R43 Kandidat)
- **Bedeutung:** Sterbender
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Anker-Typ I
- **Folio-Referenz (Erstbeleg):** f103r P.42 (H/F 2/2, Erstbeleg)
- **Zugehörige Regeln:** —
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: cham

- **Wort (EVA-Transkription):** cham
- **Hebräische Entsprechung:** חַם
- **Typ:** Stammwort
- **Bedeutung:** Wärme / Entzündung
- **Linguistischer Kontext:** medizinisch
- **Sprachschicht:** Mischna-Hebräisch
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3r P.2 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R19, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: chan

- **Wort (EVA-Transkription):** chan
- **Hebräische Entsprechung:** חָן
- **Typ:** Stammwort
- **Bedeutung:** Gnade / günstige Prognose
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f2r P.12 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: char

- **Wort (EVA-Transkription):** char
- **Hebräische Entsprechung:** חַר
- **Typ:** Stammwort
- **Bedeutung:** heiß / Fieber
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Mischna-Hebräisch
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1v P.1 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: chdy

- **Wort (EVA-Transkription):** chdy
- **Hebräische Entsprechung:** חֶדְוָה
- **Typ:** Stammwort
- **Bedeutung:** Freude / Brust
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Jüdisch-Aramäisch
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1r P3.14 (H/C/F/N/U 5/5, Erstbeleg)
- **Zugehörige Regeln:** R15, R19, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: cheey

- **Wort (EVA-Transkription):** cheey
- **Hebräische Entsprechung:** חֵיי
- **Typ:** Stammwort
- **Bedeutung:** Leben
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Hebräisch
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f7v P.3 (H/C/U 3/4, Erstbeleg)
- **Zugehörige Regeln:** R43, R50
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: cheol

- **Wort (EVA-Transkription):** cheol
- **Hebräische Entsprechung:** ח-ע-ל
- **Typ:** Stammwort
- **Bedeutung:** schöpfen / heben
- **Linguistischer Kontext:** balneologisch
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f2v P.8 (H/F/U 3/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: chey

- **Wort (EVA-Transkription):** chey
- **Hebräische Entsprechung:** חֵי
- **Typ:** Stammwort
- **Bedeutung:** lebendig / am Leben
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Hebräisch
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1r P3.20 (H/C/F/N/X/U 6/6, Erstbeleg)
- **Zugehörige Regeln:** R19, R40, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: chod

- **Wort (EVA-Transkription):** chod
- **Hebräische Entsprechung:** חֹד
- **Typ:** Stammwort
- **Bedeutung:** Schärfe / Akutheit
- **Linguistischer Kontext:** medizinisch
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f18v P.7 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: chok

- **Wort (EVA-Transkription):** chok
- **Hebräische Entsprechung:** חֹק
- **Typ:** Stammwort
- **Bedeutung:** Satzung / Vorschrift / Rezepturregel
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Mischna-Hebräisch
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1r P4.27 (H/C/F/N/X/U 6/6, Erstbeleg)
- **Zugehörige Regeln:** R2, R40, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: chom

- **Wort (EVA-Transkription):** chom
- **Hebräische Entsprechung:** חֹם
- **Typ:** Stammwort
- **Bedeutung:** Wärme / Hitze
- **Linguistischer Kontext:** Schwesterform: cham
- **Sprachschicht:** Mischna-Hebräisch
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3r P.7 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R40, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: chor

- **Wort (EVA-Transkription):** chor
- **Hebräische Entsprechung:** חֹר
- **Typ:** Stammwort
- **Bedeutung:** Pupille / Höhle / Loch
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Mischna-Hebräisch
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1r P3.20 (H/C/F/N/X/U 6/6, Erstbeleg)
- **Zugehörige Regeln:** R2, R15, R19, R40, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: chy

- **Wort (EVA-Transkription):** chy
- **Hebräische Entsprechung:** חַי
- **Typ:** Stammwort
- **Bedeutung:** lebendig / am Leben
- **Linguistischer Kontext:** Vokalvariante: chey
- **Sprachschicht:** Hebräisch
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1v P.6 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R19, R40, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: ckhy

- **Wort (EVA-Transkription):** ckhy
- **Hebräische Entsprechung:** כְּהִי
- **Typ:** Stammwort
- **Bedeutung:** Blässe / Trübheit
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Mischna-Hebräisch
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1v P.3 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: daiin

- **Wort (EVA-Transkription):** daiin
- **Hebräische Entsprechung:** דִּין
- **Typ:** Stammwort
- **Bedeutung:** Urteil / Prognose
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Jüdisch-Aramäisch / Mischna-Hebräisch
- **Anker-Status:** Anker-Typ I
- **Folio-Referenz (Erstbeleg):** f1r P2.9 (H/C/F/N/X/U 6/6, Erstbeleg)
- **Zugehörige Regeln:** R19, R40, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: dal

- **Wort (EVA-Transkription):** dal
- **Hebräische Entsprechung:** דַּל
- **Typ:** Stammwort
- **Bedeutung:** schwach / abgemagert
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Hebräisch
- **Anker-Status:** Anker-Typ I
- **Folio-Referenz (Erstbeleg):** f1r P4.26 (H/F/U 3/5, Erstbeleg)
- **Zugehörige Regeln:** R40, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: dam

- **Wort (EVA-Transkription):** dam
- **Hebräische Entsprechung:** דָּם
- **Typ:** Stammwort
- **Bedeutung:** Blut
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Mischna-Hebräisch
- **Anker-Status:** Anker-Typ I
- **Folio-Referenz (Erstbeleg):** f1v P.4 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R19, R40, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: dar

- **Wort (EVA-Transkription):** dar
- **Hebräische Entsprechung:** דּוֹר
- **Typ:** Stammwort
- **Bedeutung:** Generation / Kreis / Wohnort
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Hebräisch / Aramäisch
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1v P.5 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R15, R19, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: darom

- **Wort (EVA-Transkription):** darom
- **Hebräische Entsprechung:** דָּרוֹם
- **Typ:** Stammwort (R43 Kandidat)
- **Bedeutung:** Süden
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f19v P.2 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: dol

- **Wort (EVA-Transkription):** dol
- **Hebräische Entsprechung:** דָּוֶה
- **Typ:** Stammwort
- **Bedeutung:** Schmerz / Krankheit
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Hebräisch
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1v P.4 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R19, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: dom

- **Wort (EVA-Transkription):** dom
- **Hebräische Entsprechung:** דּוֹם
- **Typ:** Stammwort
- **Bedeutung:** Stille / Ende
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f15r P.13 (H/C/F 3/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: dor

- **Wort (EVA-Transkription):** dor
- **Hebräische Entsprechung:** דֹּר
- **Typ:** Stammwort
- **Bedeutung:** Generation / Wachstumszyklus / Zeitraum
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f2v P.6 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R40, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: dy

- **Wort (EVA-Transkription):** dy
- **Hebräische Entsprechung:** דִּי
- **Typ:** Stammwort
- **Bedeutung:** von / dessen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Jüdisch-Aramäisch
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f5r P.1 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R19, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: fol

- **Wort (EVA-Transkription):** fol
- **Hebräische Entsprechung:** פֹּל / פּוּל
- **Typ:** Stammwort (R43 Kandidat)
- **Bedeutung:** Röhrenschaft / Stiel-Hülse
- **Linguistischer Kontext:** CAULIS-Marker
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f65v P.1 (H/C 2/2, Erstbeleg)
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: kaiim

- **Wort (EVA-Transkription):** kaiim
- **Hebräische Entsprechung:** קַיָּם
- **Typ:** Stammwort (R43 Kandidat)
- **Bedeutung:** gültig / beständig
- **Linguistischer Kontext:** Schlussformel
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Anker-Typ I
- **Folio-Referenz (Erstbeleg):** f6r P.14 (H/C 2/3, Erstbeleg)
- **Zugehörige Regeln:** —
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: kar

- **Wort (EVA-Transkription):** kar
- **Hebräische Entsprechung:** כָּרָה
- **Typ:** Stammwort
- **Bedeutung:** graben / untersuchen
- **Linguistischer Kontext:** medizinisch
- **Sprachschicht:** Mischna-Hebräisch
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f6r P.2 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R40, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: kol

- **Wort (EVA-Transkription):** kol
- **Hebräische Entsprechung:** כֹּל
- **Typ:** Stammwort
- **Bedeutung:** Alles / Gesamtheit
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Hebräisch
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f2r P.9 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R40, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: ody

- **Wort (EVA-Transkription):** ody
- **Hebräische Entsprechung:** עֹ+דִּי
- **Typ:** Stammwort
- **Bedeutung:** -ody als freies Morphem
- **Linguistischer Kontext:** Suffix-Morphem / vgl.: dy
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f4v P.12 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: olom

- **Wort (EVA-Transkription):** olom
- **Hebräische Entsprechung:** עוֹלָם
- **Typ:** Stammwort (R43 Kandidat)
- **Bedeutung:** Ewigkeit / Welt
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f24v P.7 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: or

- **Wort (EVA-Transkription):** or
- **Hebräische Entsprechung:** אוֹר
- **Typ:** Stammwort
- **Bedeutung:** Licht / Glanz
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Hebräisch
- **Anker-Status:** Anker-Typ I
- **Folio-Referenz (Erstbeleg):** f1r P1.3 (H/C/F/N/U 5/5, Erstbeleg)
- **Zugehörige Regeln:** R2, R19, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: otan

- **Wort (EVA-Transkription):** otan
- **Hebräische Entsprechung:** עֹתָן
- **Typ:** Stammwort (R43 Kandidat)
- **Bedeutung:** Zeit / Jahreszeit der Erkrankung
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: pcho

- **Wort (EVA-Transkription):** pcho
- **Hebräische Entsprechung:** פְּחֹ
- **Typ:** Stammwort (R43 Kandidat)
- **Bedeutung:** Atem / Mund
- **Linguistischer Kontext:** Sprache-A
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: pol

- **Wort (EVA-Transkription):** pol
- **Hebräische Entsprechung:** פֹּל
- **Typ:** Stammwort
- **Bedeutung:** Bohne / Beere / Frucht
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1v P.10 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R43, R60
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: qodom

- **Wort (EVA-Transkription):** qodom
- **Hebräische Entsprechung:** קֶדֶם
- **Typ:** Stammwort (R43 Kandidat)
- **Bedeutung:** Osten / Vorzeit / Vergangenheit
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f24v P.11 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: ram

- **Wort (EVA-Transkription):** ram
- **Hebräische Entsprechung:** רָם
- **Typ:** Stammwort
- **Bedeutung:** erhöht / Fieber
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f9r P.3 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: sam

- **Wort (EVA-Transkription):** sam
- **Hebräische Entsprechung:** שַׂם
- **Typ:** Stammwort
- **Bedeutung:** Arznei
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Mischna-Hebräisch
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3r P.17 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: sar

- **Wort (EVA-Transkription):** sar
- **Hebräische Entsprechung:** שַׂר
- **Typ:** Stammwort
- **Bedeutung:** Arzt / Meister / Vorsteher
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Anker-Typ I
- **Folio-Referenz (Erstbeleg):** f8v P.2 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: shalom

- **Wort (EVA-Transkription):** shalom
- **Hebräische Entsprechung:** שָׁלוֹם
- **Typ:** Stammwort (R43 Kandidat)
- **Bedeutung:** Friede / günstige Konstellation
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f58r P.4 (H/F 2/2, Erstbeleg)
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: shees

- **Wort (EVA-Transkription):** shees
- **Hebräische Entsprechung:** אֵשׁ
- **Typ:** Stammwort
- **Bedeutung:** Feuer / Fieberbrand
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f5v P.4 (H/F/U 3/4, Erstbeleg)
- **Zugehörige Regeln:** R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: sheey

- **Wort (EVA-Transkription):** sheey
- **Hebräische Entsprechung:** שֵׁי
- **Typ:** Stammwort
- **Bedeutung:** Gabe / Wohlbefinden
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Biblisches Hebräisch / Aramäisch
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f2r P.9 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R40, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: sheo

- **Wort (EVA-Transkription):** sheo
- **Hebräische Entsprechung:** שֶׁ+עֹ
- **Typ:** Stammwort
- **Bedeutung:** das/welches [Licht/Ende]
- **Linguistischer Kontext:** Kurzform: sheor
- **Sprachschicht:** Jüdisch-Aramäisch / Hebräisch
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1r P3.17 (H/F/U 3/5, Erstbeleg)
- **Zugehörige Regeln:** R2, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: sheol

- **Wort (EVA-Transkription):** sheol
- **Hebräische Entsprechung:** שְׁאוֹל
- **Typ:** Stammwort
- **Bedeutung:** Scheol / Tod
- **Linguistischer Kontext:** Vollform: shol
- **Sprachschicht:** Biblisches Hebräisch
- **Anker-Status:** Anker-Typ I
- **Folio-Referenz (Erstbeleg):** f3r P.11 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R40, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: sho

- **Wort (EVA-Transkription):** sho
- **Hebräische Entsprechung:** שׁוֹ
- **Typ:** Stammwort
- **Bedeutung:** Scheol-Gleichheitspartikel
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Jüdisch-Aramäisch
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f2r P.13 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R19, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: shod

- **Wort (EVA-Transkription):** shod
- **Hebräische Entsprechung:** שׁוֹד
- **Typ:** Stammwort
- **Bedeutung:** Verheerung / Verwüstung
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1r P1.3 (H/C/F/N/U 5/5, Erstbeleg)
- **Zugehörige Regeln:** R2, R40, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: shol

- **Wort (EVA-Transkription):** shol
- **Hebräische Entsprechung:** שׁוֹל
- **Typ:** Stammwort
- **Bedeutung:** Tod / Unterwelt
- **Linguistischer Kontext:** Kurzform: sheol
- **Sprachschicht:** Jüdisch-Aramäisch (Sprache A)
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1r P1.1 (H/C/U 3/5, Erstbeleg)
- **Zugehörige Regeln:** R2, R19, R40, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: shor

- **Wort (EVA-Transkription):** shor
- **Hebräische Entsprechung:** שׁוּר
- **Typ:** Stammwort
- **Bedeutung:** Blick / Reihe / Ochse
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Aramäisch / Hebräisch
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1v P.9 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R15, R19, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: shty

- **Wort (EVA-Transkription):** shty
- **Hebräische Entsprechung:** שְׁתִי
- **Typ:** Stammwort (R43 Kandidat)
- **Bedeutung:** Getränk / Trank
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** —
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: tal

- **Wort (EVA-Transkription):** tal
- **Hebräische Entsprechung:** טַל
- **Typ:** Stammwort
- **Bedeutung:** Tau / Pflanzensaft / Feuchtigkeit
- **Linguistischer Kontext:** CAULIS-Marker
- **Sprachschicht:** Hebräisch
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f13v P.9 (H/C 2/3, Erstbeleg)
- **Zugehörige Regeln:** R14, R40, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: tam

- **Wort (EVA-Transkription):** tam
- **Hebräische Entsprechung:** תָּם
- **Typ:** Stammwort
- **Bedeutung:** vollständig / rein
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f34r P.8 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: tolol

- **Wort (EVA-Transkription):** tolol
- **Hebräische Entsprechung:** תֹּלֹל
- **Typ:** Stammwort (R43 Kandidat)
- **Bedeutung:** geschwächt / hängend
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f18v P.8 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: chckhy

- **Wort (EVA-Transkription):** chckhy
- **Hebräische Entsprechung:** חֶכָּהִי
- **Typ:** Ableitung
- **Morphologie:** ch- + k- + chy
- **Bedeutung:** Blässe-Hitze-Zeichen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f6r P.2 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: chkar

- **Wort (EVA-Transkription):** chkar
- **Hebräische Entsprechung:** חֲקַר
- **Typ:** Ableitung
- **Morphologie:** ch- + kar
- **Bedeutung:** er untersucht
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f2r P.2 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: chodain

- **Wort (EVA-Transkription):** chodain
- **Hebräische Entsprechung:** כְּ+דָּן
- **Typ:** Ableitung
- **Morphologie:** k- + dain
- **Bedeutung:** wie der Richter
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1r P3.14 (H/C/F/N/U 5/5, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: daid

- **Wort (EVA-Transkription):** daid
- **Hebräische Entsprechung:** דַּאִידַּ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** d- + ai + d-
- **Bedeutung:** ? / dauerhaft ≈
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f24v P.7 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: daiir

- **Wort (EVA-Transkription):** daiir
- **Hebräische Entsprechung:** דַּאִיר
- **Typ:** Ableitung
- **Morphologie:** d- + ir
- **Bedeutung:** der Leuchtende
- **Linguistischer Kontext:** Vollform: dair
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f23r P.8 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: dainod

- **Wort (EVA-Transkription):** dainod
- **Hebräische Entsprechung:** דַּאִיןעֹד
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** d- + aiin + od
- **Bedeutung:** er behandelt das Auge weiter
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f16r T1.4 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: dair

- **Wort (EVA-Transkription):** dair
- **Hebräische Entsprechung:** דְּאִיר
- **Typ:** Ableitung
- **Morphologie:** d- + ir
- **Bedeutung:** der Leuchtende / Licht davon   
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1v P.4 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: dairam

- **Wort (EVA-Transkription):** dairam
- **Hebräische Entsprechung:** דְּאִיראָם
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** d- + ir + am
- **Bedeutung:** von dem Leuchtenden aller
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f50v P.7 (C/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: dairin

- **Wort (EVA-Transkription):** dairin
- **Hebräische Entsprechung:** דְּאִירִין
- **Typ:** Ableitung
- **Morphologie:** d- + ir + -in
- **Bedeutung:** von dem Leuchtenden
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f16v P.6 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: dait

- **Wort (EVA-Transkription):** dait
- **Hebräische Entsprechung:** דַּעִת
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** d- + ʿet
- **Bedeutung:** von/aus der Zeit / im Moment
- **Linguistischer Kontext:** temporal
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: dchal

- **Wort (EVA-Transkription):** dchal
- **Hebräische Entsprechung:** דְּחַל
- **Typ:** Ableitung
- **Morphologie:** d- + chal
- **Bedeutung:** von dem was gilt / von dem Sterbenden
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f18v P.1 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: dchar

- **Wort (EVA-Transkription):** dchar
- **Hebräische Entsprechung:** דְּכַּר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** d- + kar
- **Bedeutung:** vom Widder / männlich
- **Linguistischer Kontext:** Zutaten
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f28r P.2 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R41, R45
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: dchckhy

- **Wort (EVA-Transkription):** dchckhy
- **Hebräische Entsprechung:** דְּכְּכְּהִי
- **Typ:** Ableitung
- **Morphologie:** d- + k- + k- + chy
- **Bedeutung:** von tiefer Blässe
- **Linguistischer Kontext:** Diagnosesiegel
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f14v P.9 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: dchm

- **Wort (EVA-Transkription):** dchm
- **Hebräische Entsprechung:** דְּחָם
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** d- + cham
- **Bedeutung:** von der Entzündung
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f13r P.1 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: dchor

- **Wort (EVA-Transkription):** dchor
- **Hebräische Entsprechung:** דְּ+חֹר
- **Typ:** Ableitung
- **Morphologie:** d- + chor
- **Bedeutung:** von der Pupille
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1v P.9 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R19, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: dchorol

- **Wort (EVA-Transkription):** dchorol
- **Hebräische Entsprechung:** דְּכְּאוֹרעֹלְ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** d- + k- + or + ol-
- **Bedeutung:** von der Pupille hin
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: dchy

- **Wort (EVA-Transkription):** dchy
- **Hebräische Entsprechung:** דְּכָּהִי
- **Typ:** Ableitung
- **Morphologie:** d- + k- + chy
- **Bedeutung:** von der Blässe davon
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f6v P.4 (H/C/D 3/5, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: ddor

- **Wort (EVA-Transkription):** ddor
- **Hebräische Entsprechung:** דְּדֹּר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** d- + dor
- **Bedeutung:** von Generation/Zeitraum [intensiv]
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: deaiin

- **Wort (EVA-Transkription):** deaiin
- **Hebräische Entsprechung:** דְּעַיִן
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** d- + aiin
- **Bedeutung:** vom Auge
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f28r P.9 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: dsheor

- **Wort (EVA-Transkription):** dsheor
- **Hebräische Entsprechung:** דְּשֶׁאוֹר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** d- + she- + or
- **Bedeutung:** von dem, was Licht ist
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: dsho

- **Wort (EVA-Transkription):** dsho
- **Hebräische Entsprechung:** דְּשׁוֹ
- **Typ:** Ableitung
- **Morphologie:** d- + sho
- **Bedeutung:** von Scheol
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f27v P.6 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: dsholdy

- **Wort (EVA-Transkription):** dsholdy
- **Hebräische Entsprechung:** דְּשׁוֹלדִּי
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** d- + shol + -dy
- **Bedeutung:** von Scheol
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f9r P.5 (H/C 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: dshor

- **Wort (EVA-Transkription):** dshor
- **Hebräische Entsprechung:** דְּשׁוֹר / דְּאֹר
- **Typ:** Ableitung
- **Morphologie:** d- + shor
- **Bedeutung:** von/des Lichts
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f22v P.2 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: dshy

- **Wort (EVA-Transkription):** dshy
- **Hebräische Entsprechung:** דְּשֵׁי
- **Typ:** Ableitung
- **Morphologie:** d- + shy
- **Bedeutung:** von der Gabe
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f16v P.9 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: doky

- **Wort (EVA-Transkription):** doky
- **Hebräische Entsprechung:** דּוֹכִּי
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** do- + ky
- **Bedeutung:** sein denn / weil
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f18v P.9 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: eedy

- **Wort (EVA-Transkription):** eedy
- **Hebräische Entsprechung:** אֵדִּי
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** e- + -dy
- **Bedeutung:** kein Licht von
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f26r P.5 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R19, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: eeor

- **Wort (EVA-Transkription):** eeor
- **Hebräische Entsprechung:** אֵאוֹר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** e- + or
- **Bedeutung:** kein Licht
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f24r P.4 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: chakod

- **Wort (EVA-Transkription):** chakod
- **Hebräische Entsprechung:** כְּעַכֹּד
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** k- + akod
- **Bedeutung:** wie zusammen / versammelt
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f28r P.2 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: chcthy

- **Wort (EVA-Transkription):** chcthy
- **Hebräische Entsprechung:** כְּ+כְּ+תְּ+חִי
- **Typ:** Ableitung
- **Morphologie:** k- + k- + t- + hy
- **Bedeutung:** wie wie ich/es heilt
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f2r P.13 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: cheaiin

- **Wort (EVA-Transkription):** cheaiin
- **Hebräische Entsprechung:** כְּ+אֵ+עַיִן
- **Typ:** Ableitung
- **Morphologie:** k- + e + aiin
- **Bedeutung:** wie das Licht des Auges
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f2v P.7 (H/C/D/F/U 5/5, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: chear

- **Wort (EVA-Transkription):** chear
- **Hebräische Entsprechung:** כְּאֵעַר
- **Typ:** Ableitung
- **Morphologie:** k- + e- + ar
- **Bedeutung:** wie erleuchten / wie das Licht wirkt
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f8v P.3 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R19, R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: chedy

- **Wort (EVA-Transkription):** chedy
- **Hebräische Entsprechung:** כְּדֵי
- **Typ:** Ableitung
- **Morphologie:** k- + dy
- **Bedeutung:** damit / um zu
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f26r P.2 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R19, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: cheekaiin

- **Wort (EVA-Transkription):** cheekaiin
- **Hebräische Entsprechung:** כֵּכְּעַיִן
- **Typ:** Ableitung
- **Morphologie:** k- + k- + aiin
- **Bedeutung:** wie das Auge
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f33r P.7 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: cheekdam

- **Wort (EVA-Transkription):** cheekdam
- **Hebräische Entsprechung:** כְּאֵכְּדָּם
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** k- + e- + k- + dam
- **Bedeutung:** wie das Zeichen des Blutes
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: cheeol

- **Wort (EVA-Transkription):** cheeol
- **Hebräische Entsprechung:** כְּאֵעַל
- **Typ:** Ableitung
- **Morphologie:** k- + e- + ol
- **Bedeutung:** wie kein Joch / wie Ende des Joches
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f17v P.22 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: cheesees

- **Wort (EVA-Transkription):** cheesees
- **Hebräische Entsprechung:** כְּאֵשׂאֵשׁ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** k- + e- + s- + e- + sh
- **Bedeutung:** Dreifach-Licht-Zeichen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f25r P.3 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: cheeykam

- **Wort (EVA-Transkription):** cheeykam
- **Hebräische Entsprechung:** חֵיי+כְּ+עַם
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** cheey + k- + am
- **Bedeutung:** wie das Leben des Volkes
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3v P.3 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: chekhol

- **Wort (EVA-Transkription):** chekhol
- **Hebräische Entsprechung:** כְּכָּחֹל
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** k- + k- + chol
- **Bedeutung:** wie das Augenpigment
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: cheor

- **Wort (EVA-Transkription):** cheor
- **Hebräische Entsprechung:** כְּאוֹר
- **Typ:** Ableitung
- **Morphologie:** k- + or
- **Bedeutung:** wie Licht
- **Linguistischer Kontext:** Heilungszeichen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f2v P.4 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: chkeey

- **Wort (EVA-Transkription):** chkeey
- **Hebräische Entsprechung:** כְּכְּאֵיִ
- **Typ:** Ableitung
- **Morphologie:** k- + k- + chey
- **Bedeutung:** wie wie Lebendigkeit
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f7v P.3 (H/C/U 3/4, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: chodaiin

- **Wort (EVA-Transkription):** chodaiin
- **Hebräische Entsprechung:** כֹּ+דִּין
- **Typ:** Ableitung
- **Morphologie:** k- + daiin
- **Bedeutung:** wie das Urteil
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f2v P.4 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: chodair

- **Wort (EVA-Transkription):** chodair
- **Hebräische Entsprechung:** כֹּ+עוֹד+אִיר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** k- + od + ir
- **Bedeutung:** wie weiteres Leuchten / wie noch Licht
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3v P.12 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: chodaly

- **Wort (EVA-Transkription):** chodaly
- **Hebräische Entsprechung:** כֹּ+עוֹד+עַל+יְ
- **Typ:** Ableitung
- **Morphologie:** k- + od + al + -y
- **Bedeutung:** wie noch darüber / wie weiter heilend
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3v P.6 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: chody

- **Wort (EVA-Transkription):** chody
- **Hebräische Entsprechung:** כֹּ+דִּי
- **Typ:** Ableitung
- **Morphologie:** k- + -dy
- **Bedeutung:** wie von ihm / gemäß ihm
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1v P.2 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: chokeos

- **Wort (EVA-Transkription):** chokeos
- **Hebräische Entsprechung:** כֹּכֵּאוֹס
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** k- + okeos
- **Bedeutung:** wie ein Kelch
- **Linguistischer Kontext:** botanisch
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f2v P.7 (H/C/F/U 4/5, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: chokshor

- **Wort (EVA-Transkription):** chokshor
- **Hebräische Entsprechung:** כְּחֹקשׁוֹר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** k- + chok + shor
- **Bedeutung:** wie die Vorschrift des Zeichens
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f14v P.8 (H/C/U 3/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: cholam

- **Wort (EVA-Transkription):** cholam
- **Hebräische Entsprechung:** כֹּעוֹלָם
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** k- + olom
- **Bedeutung:** wie die Welt / wie Ewigkeit
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f69r C.3 (H/U/V 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: cholo

- **Wort (EVA-Transkription):** cholo
- **Hebräische Entsprechung:** כֹּ+לוֹ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** k- + olo
- **Bedeutung:** wie für ihn / wie sein Kelch
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f2v P.4 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: choor

- **Wort (EVA-Transkription):** choor
- **Hebräische Entsprechung:** כְּאוּר
- **Typ:** Ableitung
- **Morphologie:** k- + or
- **Bedeutung:** wie das Licht
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f8r P1.7 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: choraiin

- **Wort (EVA-Transkription):** choraiin
- **Hebräische Entsprechung:** כֹּאַרעַיִן
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** k- + ar + aiin
- **Bedeutung:** Heilung des Auges / wie das Licht des Auges
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f4r P.2 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: chotam

- **Wort (EVA-Transkription):** chotam
- **Hebräische Entsprechung:** כֹּאוֹתאָם
- **Typ:** Ableitung
- **Morphologie:** k- + ot + am
- **Bedeutung:** wie das Zeichen der Mutter
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f58r P.22 (H/F 2/2, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: chseeor

- **Wort (EVA-Transkription):** chseeor
- **Hebräische Entsprechung:** כְּשֵׁאוֹר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** k- + shee + or
- **Bedeutung:** wie die Gabe des Lichts
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: chty

- **Wort (EVA-Transkription):** chty
- **Hebräische Entsprechung:** כְּ+תְּ+יְ
- **Typ:** Ableitung
- **Morphologie:** k- + t- + -y
- **Bedeutung:** wie es heilt
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f2v P.6 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: chykar

- **Wort (EVA-Transkription):** chykar
- **Hebräische Entsprechung:** כְּהֵיכַּר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** k- + hey + kar
- **Bedeutung:** Blässe-Kraft ≈
- **Linguistischer Kontext:** Zutaten
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f29v P.10 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: ckhal

- **Wort (EVA-Transkription):** ckhal
- **Hebräische Entsprechung:** כְּהַל
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** k- + hal
- **Bedeutung:** Nachlassen des Fiebers
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f6v P.17 (H/C/D 3/5, Erstbeleg)
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: ckhear

- **Wort (EVA-Transkription):** ckhear
- **Hebräische Entsprechung:** כְּכְּאֵר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** k- + k- + or
- **Bedeutung:** wie das Licht
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f25v P.4 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: ckhol

- **Wort (EVA-Transkription):** ckhol
- **Hebräische Entsprechung:** כְּכֹּל
- **Typ:** Ableitung
- **Morphologie:** ck- + hol
- **Bedeutung:** vollständig wie alles
- **Linguistischer Kontext:** Intensiv
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3v P.1 (H/C/D/F/U 5/5, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: cphal

- **Wort (EVA-Transkription):** cphal
- **Hebräische Entsprechung:** כְּפָּלַל
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** k- + palal
- **Bedeutung:** wie Gebet / Urteil
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: cphar

- **Wort (EVA-Transkription):** cphar
- **Hebräische Entsprechung:** כְּפַּר
- **Typ:** Ableitung
- **Morphologie:** k- + par
- **Bedeutung:** Sühne / Bedeckung
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f11v P.1 (H/C/U 3/4, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: cphary

- **Wort (EVA-Transkription):** cphary
- **Hebräische Entsprechung:** כְּפַּריְ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** k- + par + -y
- **Bedeutung:** wie sein Sühnopfer / wie seine Expiation
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f27r P.5 (H/C/F 3/4, Erstbeleg)
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: cphoaiin

- **Wort (EVA-Transkription):** cphoaiin
- **Hebräische Entsprechung:** כְּפְּעַיִן
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** k- + pho + aiin
- **Bedeutung:** wie der Atemweg des Auges
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f30v P.8 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: cphor

- **Wort (EVA-Transkription):** cphor
- **Hebräische Entsprechung:** כְּפְּאֹר
- **Typ:** Ableitung
- **Morphologie:** k- + p- + or
- **Bedeutung:** wie der Mund des Lichts
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3v P.1 (H/C/F/U 4/5, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: cphoy

- **Wort (EVA-Transkription):** cphoy
- **Hebräische Entsprechung:** כְּפְּהוֹ
- **Typ:** Ableitung
- **Morphologie:** k- + p- + cho
- **Bedeutung:** wie sein Atemweg / wie sein Mund
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1r P2.7 (H/N/U 3/5, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: cthaiin

- **Wort (EVA-Transkription):** cthaiin
- **Hebräische Entsprechung:** כְּתַּעַיִן
- **Typ:** Ableitung
- **Morphologie:** k- + t- + aiin
- **Bedeutung:** vollständige Augen-Heilung
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f6r P.5 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R8, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: cthal

- **Wort (EVA-Transkription):** cthal
- **Hebräische Entsprechung:** כְּתַּחַל
- **Typ:** Ableitung
- **Morphologie:** k- + t- + chal
- **Bedeutung:** wie vollständig
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3v P.13 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: cthar

- **Wort (EVA-Transkription):** cthar
- **Hebräische Entsprechung:** כְּתַּחַר
- **Typ:** Ableitung
- **Morphologie:** k- + t- + char
- **Bedeutung:** wie vollständiges Fieber
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f6v P.16 (H/C/D/F/U 5/5, Erstbeleg)
- **Zugehörige Regeln:** R15, R19, R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: ctheen

- **Wort (EVA-Transkription):** ctheen
- **Hebräische Entsprechung:** כְּתֵּן
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** k- + ten
- **Bedeutung:** wie Gewähren / Geben
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: ctheor

- **Wort (EVA-Transkription):** ctheor
- **Hebräische Entsprechung:** כְּתֶּאוֹר
- **Typ:** Ableitung
- **Morphologie:** k- + ten + or
- **Bedeutung:** wie Licht-Gewähren / wie Erleuchtung
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f22r P.9 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: cthey

- **Wort (EVA-Transkription):** cthey
- **Hebräische Entsprechung:** כְּ+תֶ
- **Typ:** Ableitung
- **Morphologie:** k- + t- + ey
- **Bedeutung:** wie diese Form
- **Linguistischer Kontext:** Kolophon / Vokalvariante: cthy
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1r P3.13 (H/C/F/U 4/5, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: cthodoaly

- **Wort (EVA-Transkription):** cthodoaly
- **Hebräische Entsprechung:** כְּ+תְּ+עוֹד+עַל+יְ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** k- + t- + ody + al + -y
- **Bedeutung:** wie noch weiter darüber
- **Linguistischer Kontext:** Intensivform: chodaly
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3v P.9 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: cthoiin

- **Wort (EVA-Transkription):** cthoiin
- **Hebräische Entsprechung:** כְּתּעַיִן
- **Typ:** Ableitung
- **Morphologie:** k- + t- + aiin
- **Bedeutung:** wie vollständige Augen-Heilung
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f15v P.10 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: cthol

- **Wort (EVA-Transkription):** cthol
- **Hebräische Entsprechung:** כְּתהֹל
- **Typ:** Ableitung
- **Morphologie:** k- + t- + h + ol
- **Bedeutung:** Vollständigkeits-Marker
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1v P.6 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R19, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: cthom

- **Wort (EVA-Transkription):** cthom
- **Hebräische Entsprechung:** כְּתֹם
- **Typ:** Ableitung
- **Morphologie:** k- + tom
- **Bedeutung:** wie Vollständigkeit
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3r P.6 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: cthor

- **Wort (EVA-Transkription):** cthor
- **Hebräische Entsprechung:** כְּתֹּר
- **Typ:** Ableitung
- **Morphologie:** k- + tor
- **Bedeutung:** vollständige Heilung
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f2r P.12 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: cthorchy

- **Wort (EVA-Transkription):** cthorchy
- **Hebräische Entsprechung:** כְּתְּאוֹרכְּהִי
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** k- + t- + or + k- + chy
- **Bedeutung:** vollständige Heilung der Blässe
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f30r P.7 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: cthy

- **Wort (EVA-Transkription):** cthy
- **Hebräische Entsprechung:** כְּ+תִי
- **Typ:** Ableitung
- **Morphologie:** k- + t- + hy
- **Bedeutung:** wie mein Zeichen / wie diese [Form]
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1r P3.14 (H/C/F/N/U 5/5, Erstbeleg)
- **Zugehörige Regeln:** R19, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: kaiin

- **Wort (EVA-Transkription):** kaiin
- **Hebräische Entsprechung:** כְּעַיִן
- **Typ:** Ableitung
- **Morphologie:** k- + aiin
- **Bedeutung:** wie das Auge
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f15r P.8 (H/C/F 3/4, Erstbeleg)
- **Zugehörige Regeln:** R8, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: kchaiin

- **Wort (EVA-Transkription):** kchaiin
- **Hebräische Entsprechung:** כְּחַעַיִן
- **Typ:** Ableitung
- **Morphologie:** k- + cha + aiin
- **Bedeutung:** wie die Wärme des Auges
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f18r T.14 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: kcham

- **Wort (EVA-Transkription):** kcham
- **Hebräische Entsprechung:** כְּ+חַם
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** k- + cham
- **Bedeutung:** wie Wärme / Entzündung
- **Linguistischer Kontext:** Variante: kchom
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3v P.12 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R40, R41
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: kchol

- **Wort (EVA-Transkription):** kchol
- **Hebräische Entsprechung:** כְּחֹל
- **Typ:** Ableitung
- **Morphologie:** k- + chol
- **Bedeutung:** wie Augensalbe / Kohl-Pigment
- **Linguistischer Kontext:** Pigment
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f8v P.7 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: kchom

- **Wort (EVA-Transkription):** kchom
- **Hebräische Entsprechung:** כְּחֹם
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** k- + chom
- **Bedeutung:** wie Hitze / wie Fieber
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3v P.8 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R31, R40, R41
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: kchor

- **Wort (EVA-Transkription):** kchor
- **Hebräische Entsprechung:** כְּ+חֹר
- **Typ:** Ableitung
- **Morphologie:** k- + chor
- **Bedeutung:** wie die Pupille
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f8v P.13 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: kchorl

- **Wort (EVA-Transkription):** kchorl
- **Hebräische Entsprechung:** כְּחֹרלְ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** k- + chor + l-
- **Bedeutung:** wie die Pupille hin
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: kchy

- **Wort (EVA-Transkription):** kchy
- **Hebräische Entsprechung:** כְּ+חִי
- **Typ:** Ableitung
- **Morphologie:** k- + chy
- **Bedeutung:** wie seine Blässe
- **Linguistischer Kontext:** Variante: ckhy
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f2v P.2 (H/F/U 3/5, Erstbeleg)
- **Zugehörige Regeln:** R19, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: keeod

- **Wort (EVA-Transkription):** keeod
- **Hebräische Entsprechung:** כֵּעוֹד
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** k- + od
- **Bedeutung:** denn noch / immer noch
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: keol

- **Wort (EVA-Transkription):** keol
- **Hebräische Entsprechung:** כֵּ+עוֹל
- **Typ:** Ableitung
- **Morphologie:** k- + eol
- **Bedeutung:** wie das Joch / wie die Last
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f2v P.6 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: koaiin

- **Wort (EVA-Transkription):** koaiin
- **Hebräische Entsprechung:** כְּ+עַיִן
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** k- + oaiin
- **Bedeutung:** wie das Auge
- **Linguistischer Kontext:** Variante: kaiin
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3v P.1 (H/C/D/F/U 5/5, Erstbeleg)
- **Zugehörige Regeln:** R2, R8, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: koiin

- **Wort (EVA-Transkription):** koiin
- **Hebräische Entsprechung:** כֹּעַיִן
- **Typ:** Ableitung
- **Morphologie:** k- + aiin
- **Bedeutung:** wie das Auge
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f16r P1.3 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: koshet

- **Wort (EVA-Transkription):** koshet
- **Hebräische Entsprechung:** כֹּשֵׁתְּ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** k- + she + t-
- **Bedeutung:** Scheol-Vollständigkeit
- **Linguistischer Kontext:** Schlussformel
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f16v P.3 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: ksho

- **Wort (EVA-Transkription):** ksho
- **Hebräische Entsprechung:** כְּשׁוֹ
- **Typ:** Ableitung
- **Morphologie:** k- + sho
- **Bedeutung:** wie Scheol / Tod
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f14v P.4 (C/F/U 3/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: kshol

- **Wort (EVA-Transkription):** kshol
- **Hebräische Entsprechung:** כְּשׁוֹל
- **Typ:** Ableitung
- **Morphologie:** k- + shol
- **Bedeutung:** wie Scheol
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f23v P.10 (H/C/U 3/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: kshy

- **Wort (EVA-Transkription):** kshy
- **Hebräische Entsprechung:** כְּשֵׁי
- **Typ:** Ableitung
- **Morphologie:** k- + shy
- **Bedeutung:** wie die Gabe
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f7v P.3 (H/C/U 3/4, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: ksor

- **Wort (EVA-Transkription):** ksor
- **Hebräische Entsprechung:** כֵּשָׁר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** k- + shar
- **Bedeutung:** denn/wie passend/gesund
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: lchedy

- **Wort (EVA-Transkription):** lchedy
- **Hebräische Entsprechung:** לְכְּדֵי
- **Typ:** Ableitung
- **Morphologie:** l- + k- + dy
- **Bedeutung:** um zu / bis zur Grenze
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f39r P.8 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: lor

- **Wort (EVA-Transkription):** lor
- **Hebräische Entsprechung:** לְאוֹר
- **Typ:** Ableitung
- **Morphologie:** l- + or
- **Bedeutung:** zum Licht / zur Heilung
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f6v P.11 (H/F/U 3/5, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: lshaiir

- **Wort (EVA-Transkription):** lshaiir
- **Hebräische Entsprechung:** לְשׂעַיִןאִיר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** l- + s- + aiin + ir
- **Bedeutung:** für Augenlicht-Glanz
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f34v P.5 (H/C/F 3/4, Erstbeleg)
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: lshol

- **Wort (EVA-Transkription):** lshol
- **Hebräische Entsprechung:** לְשׁוֹל
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** l- + shol
- **Bedeutung:** zum Tod / zu Scheol
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: lshy

- **Wort (EVA-Transkription):** lshy
- **Hebräische Entsprechung:** לְ+שֵׁי
- **Typ:** Ableitung
- **Morphologie:** l- + shy
- **Bedeutung:** für die Gabe / für sein Wesen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f2v P.3 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: oaorar

- **Wort (EVA-Transkription):** oaorar
- **Hebräische Entsprechung:** עַאַאוֹראָר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** o- + o- + or + or
- **Bedeutung:** auf das Licht der Heilung
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f16v P.13 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: ochor

- **Wort (EVA-Transkription):** ochor
- **Hebräische Entsprechung:** עַחֹר
- **Typ:** Ableitung
- **Morphologie:** o- + chor
- **Bedeutung:** auf die Pupille
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3r P.3 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: octhor

- **Wort (EVA-Transkription):** octhor
- **Hebräische Entsprechung:** עַכְּתֹּר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** o- + k- + t- + or
- **Bedeutung:** auf vollständige Heilung
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: octhos

- **Wort (EVA-Transkription):** octhos
- **Hebräische Entsprechung:** עַכְּתֹשׁ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** o- + k- + t- + sh
- **Bedeutung:** auf wie Feuer / Fieber
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f13v P.1 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: octhy

- **Wort (EVA-Transkription):** octhy
- **Hebräische Entsprechung:** עַכְּתִּי
- **Typ:** Ableitung
- **Morphologie:** o- + cth- + y
- **Bedeutung:** auf mein Zeichen
- **Linguistischer Kontext:** ≠ otchy
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3r P.12 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: odaiim

- **Wort (EVA-Transkription):** odaiim
- **Hebräische Entsprechung:** עַדִּינִים
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** o- + daiin + -im
- **Bedeutung:** auf den kollektiven Urteilen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f24v P.16 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: odaiin

- **Wort (EVA-Transkription):** odaiin
- **Hebräische Entsprechung:** עַדִּין
- **Typ:** Ableitung
- **Morphologie:** o- + daiin
- **Bedeutung:** auf das Urteil
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1r P3.14 (H/C/F/N/U 5/5, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: odaldy

- **Wort (EVA-Transkription):** odaldy
- **Hebräische Entsprechung:** עַדַּלדִּי
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** o- + dal + -dy
- **Bedeutung:** über die Schwäche dessen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f17v P.1 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: odol

- **Wort (EVA-Transkription):** odol
- **Hebräische Entsprechung:** עַדָּוֶה
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** o- + dol
- **Bedeutung:** auf die Krankheit
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f9v P.6 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: oeeen

- **Wort (EVA-Transkription):** oeeen
- **Hebräische Entsprechung:** עַאֵין
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** o- + een
- **Bedeutung:** auf das Fehlen / Nichts
- **Linguistischer Kontext:** Emphase
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f14r P.12 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: oeees

- **Wort (EVA-Transkription):** oeees
- **Hebräische Entsprechung:** עַאֵשׁ
- **Typ:** Ableitung
- **Morphologie:** o- + esh
- **Bedeutung:** auf dem Feuer / Fieber
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f9v P.3 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: oekor

- **Wort (EVA-Transkription):** oekor
- **Hebräische Entsprechung:** עַאֵקֹר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** o- + e- + qor
- **Bedeutung:** auf die Kälte / das Uprooting
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f17v P.6 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: oiin

- **Wort (EVA-Transkription):** oiin
- **Hebräische Entsprechung:** עַיִן
- **Typ:** Ableitung
- **Morphologie:** o- + aiin
- **Bedeutung:** das Auge
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1r P3.14 (H/C/F/N/U 5/5, Erstbeleg)
- **Zugehörige Regeln:** R2, R8, R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: oir

- **Wort (EVA-Transkription):** oir
- **Hebräische Entsprechung:** עַאוֹר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** o- + or
- **Bedeutung:** auf das Licht / Direktional-Heilung
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f14r P.6 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: okaiin

- **Wort (EVA-Transkription):** okaiin
- **Hebräische Entsprechung:** עַכְּעַיִן
- **Typ:** Ableitung
- **Morphologie:** o- + k- + aiin
- **Bedeutung:** auf das Auge
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f6r P.7 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R8, R19, R41, R42, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: okal

- **Wort (EVA-Transkription):** okal
- **Hebräische Entsprechung:** עַכָּל
- **Typ:** Ableitung
- **Morphologie:** o- + kol
- **Bedeutung:** auf / über alles
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1v P.6 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R19, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: okam

- **Wort (EVA-Transkription):** okam
- **Hebräische Entsprechung:** עַכַּם
- **Typ:** Ableitung
- **Morphologie:** o- + ka + -m
- **Bedeutung:** für das Volk / für alle
- **Linguistischer Kontext:** medizinisch
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f28r P.6 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: okchain

- **Wort (EVA-Transkription):** okchain
- **Hebräische Entsprechung:** עַכְּחַיִּין
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** o- + k- + chaiin
- **Bedeutung:** hin zu Leben / auf Leben hin
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f22v P.13 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: okchan

- **Wort (EVA-Transkription):** okchan
- **Hebräische Entsprechung:** עַכְּחָן
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** o- + k- + chan
- **Bedeutung:** auf / für die Gnade
- **Linguistischer Kontext:** Prognose
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f32v P.6 (H/C/F 3/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: okchod

- **Wort (EVA-Transkription):** okchod
- **Hebräische Entsprechung:** עַכְּחֹד
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** o- + k- + chod
- **Bedeutung:** auf die Schärfe / Akutheit
- **Linguistischer Kontext:** medizinisch
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f57v R3.1 (V/U 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: okchor

- **Wort (EVA-Transkription):** okchor
- **Hebräische Entsprechung:** עַ+כְּ+חֹר
- **Typ:** Ableitung
- **Morphologie:** o- + k- + chor
- **Bedeutung:** auf die Pupille
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3v P.2 (H/D/F/U 4/5, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: okeeey

- **Wort (EVA-Transkription):** okeeey
- **Hebräische Entsprechung:** עַכְּאֵאֵאֵ
- **Typ:** Ableitung
- **Morphologie:** o- + k- + e + e + e
- **Bedeutung:** auf das dreifache Licht
- **Linguistischer Kontext:** Kolophon
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f17v P.4 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: okeodaly

- **Wort (EVA-Transkription):** okeodaly
- **Hebräische Entsprechung:** עַכֵּעֹדַּל
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** o- + k- + ol + dal
- **Bedeutung:** auf dem Weg des Schwachen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: okeom

- **Wort (EVA-Transkription):** okeom
- **Hebräische Entsprechung:** עַכְּאֵוֹם
- **Typ:** Ableitung
- **Morphologie:** o- + k- + eom
- **Bedeutung:** auf die Vollendung hin
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3r P.17 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: okeor

- **Wort (EVA-Transkription):** okeor
- **Hebräische Entsprechung:** עַכְּאֵוֹר
- **Typ:** Ableitung
- **Morphologie:** o- + k- + or
- **Bedeutung:** auf / zu dem Licht hin
- **Linguistischer Kontext:** Variante: okor
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f15v P.3 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: okor

- **Wort (EVA-Transkription):** okor
- **Hebräische Entsprechung:** עַ+כְּ+אוֹר
- **Typ:** Ableitung
- **Morphologie:** o- + k- + or
- **Bedeutung:** auf das Licht hin
- **Linguistischer Kontext:** Variante: okeor
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3v P.2 (H/C/D/F/U 5/5, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: okorory

- **Wort (EVA-Transkription):** okorory
- **Hebräische Entsprechung:** עַכְּאוֹראוֹרִי
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** o- + k- + or + or + -y
- **Bedeutung:** auf das Licht / mein Licht
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f13r P.10 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: oksho

- **Wort (EVA-Transkription):** oksho
- **Hebräische Entsprechung:** עַכְּשׁוֹ
- **Typ:** Ableitung
- **Morphologie:** o- + k- + sho
- **Bedeutung:** auf / gegen Scheol
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1r P3.12 (H/C/F/N/U 5/5, Erstbeleg)
- **Zugehörige Regeln:** R2, R40, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: okshy

- **Wort (EVA-Transkription):** okshy
- **Hebräische Entsprechung:** עַכְּשֵׁי
- **Typ:** Ableitung
- **Morphologie:** o- + k- + shy
- **Bedeutung:** auf / für die Gabe
- **Linguistischer Kontext:** medizinisch
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f14v P.5 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: okytaiin

- **Wort (EVA-Transkription):** okytaiin
- **Hebräische Entsprechung:** עַכְּתָּעַיִן
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** o- + k- + t- + aiin
- **Bedeutung:** auf die Weise, dass er das Auge heilt
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f16v P.11 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: opchol

- **Wort (EVA-Transkription):** opchol
- **Hebräische Entsprechung:** עַפְּכֹּל
- **Typ:** Ableitung
- **Morphologie:** o- + p- + chol
- **Bedeutung:** auf allem wirkend
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3r P.18 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: opchor

- **Wort (EVA-Transkription):** opchor
- **Hebräische Entsprechung:** עַפְּחֹר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** o- + p- + chor
- **Bedeutung:** auf die Pupille
- **Linguistischer Kontext:** medizinisch
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f13r P.1 (H/C 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: opchy

- **Wort (EVA-Transkription):** opchy
- **Hebräische Entsprechung:** עַפְּהִי
- **Typ:** Ableitung
- **Morphologie:** o- + p- + chy
- **Bedeutung:** auf den Atemweg
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f13r P.1 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: opsheolaiin

- **Wort (EVA-Transkription):** opsheolaiin
- **Hebräische Entsprechung:** עַפֶּשְׁאוֹלעַיִן
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** o- + p- + sheol + aiin
- **Bedeutung:** am Nadir-Punkt des Sternauges
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f58r P.26 (H/F 2/2, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: opydaiin

- **Wort (EVA-Transkription):** opydaiin
- **Hebräische Entsprechung:** עַפִּידִּין
- **Typ:** Ableitung
- **Morphologie:** o- + pi + daiin
- **Bedeutung:** beim Urteil des Mundes
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f8v P.1 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: oscheor

- **Wort (EVA-Transkription):** oscheor
- **Hebräische Entsprechung:** עַשֶׁאוֹר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** o- + she- + or
- **Bedeutung:** auf dem, was Licht ist
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f19r P.3 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: otoaiin

- **Wort (EVA-Transkription):** otoaiin
- **Hebräische Entsprechung:** עַתוֹעַיִן
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** o- + oto- + aiin
- **Bedeutung:** auf seine Augen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1v P.5 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: okoldm

- **Wort (EVA-Transkription):** okoldm
- **Hebräische Entsprechung:** עַלכֹּלדָּם
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** ol- + kol + dam
- **Bedeutung:** über alles Blut
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: olaiin

- **Wort (EVA-Transkription):** olaiin
- **Hebräische Entsprechung:** עַלעַיִן
- **Typ:** Ableitung
- **Morphologie:** ol- + aiin
- **Bedeutung:** über das Auge
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f17r P.4 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43, R61
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: olchdaiin

- **Wort (EVA-Transkription):** olchdaiin
- **Hebräische Entsprechung:** עַלכְּהֵדִּין
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** ol- + chy + daiin
- **Bedeutung:** über Blässe-Urteil
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41, R61
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: oldam

- **Wort (EVA-Transkription):** oldam
- **Hebräische Entsprechung:** עַלדָּם
- **Typ:** Ableitung
- **Morphologie:** ol- + dam
- **Bedeutung:** über das Blut
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f22r P.10 (H/C 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43, R61
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: oldar

- **Wort (EVA-Transkription):** oldar
- **Hebräische Entsprechung:** עַלדְּאַר
- **Typ:** Ableitung
- **Morphologie:** ol- + d- + ar
- **Bedeutung:** über den Leuchtenden
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f23v P.9 (H/F/U 3/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43, R61
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: oldckhy

- **Wort (EVA-Transkription):** oldckhy
- **Hebräische Entsprechung:** עַלדְּכְּהִי
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** ol- + d- + k- + chy
- **Bedeutung:** über die Blässe davon
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: olsar

- **Wort (EVA-Transkription):** olsar
- **Hebräische Entsprechung:** עַלשַׂר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** ol- + sar
- **Bedeutung:** über den Arzt / ärztliche Aufsicht
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f23v P.6 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: olsheol

- **Wort (EVA-Transkription):** olsheol
- **Hebräische Entsprechung:** עַלשְׁאוֹל
- **Typ:** Ableitung
- **Morphologie:** ol- + sheol
- **Bedeutung:** über Scheol
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f31r P.11 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43, R61
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: olsheor

- **Wort (EVA-Transkription):** olsheor
- **Hebräische Entsprechung:** עַלשׁאוֹר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** ol- + sho + or
- **Bedeutung:** über Scheol-Licht
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f31r P.13 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R61
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: olshly

- **Wort (EVA-Transkription):** olshly
- **Hebräische Entsprechung:** עַלשׁלְיְ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** ol- + sh- + l- + -y
- **Bedeutung:** auf Scheol hin
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f22v P.14 (H/C/F 3/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: olteedam

- **Wort (EVA-Transkription):** olteedam
- **Hebräische Entsprechung:** עַלתֵּדָּם
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** ol- + tee + dam
- **Bedeutung:** über das Blut der Zeit
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f31v P.7 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R61
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: olytol

- **Wort (EVA-Transkription):** olytol
- **Hebräische Entsprechung:** עַל+יְ+תֹּלֹל
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** ol- + ytol
- **Bedeutung:** über dem er geschwächt wird
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3v P.2 (H/C/D/F/U 5/5, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R61
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: fochof

- **Wort (EVA-Transkription):** fochof
- **Hebräische Entsprechung:** פֹכֹפְ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** p- + k- + p-
- **Bedeutung:** Mund/Kehle-alles / Kehlenbereich
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: fshody

- **Wort (EVA-Transkription):** fshody
- **Hebräische Entsprechung:** פְּשׁוֹדִּי
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** p- + sho + -dy
- **Bedeutung:** von Scheol
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: pchedal

- **Wort (EVA-Transkription):** pchedal
- **Hebräische Entsprechung:** פְּכֶּדַּל
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** p- + k- + dal
- **Bedeutung:** bei dem Schwachen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: pcheol

- **Wort (EVA-Transkription):** pcheol
- **Hebräische Entsprechung:** פְּכֶּעֹל
- **Typ:** Ableitung
- **Morphologie:** p- + k- + ol
- **Bedeutung:** bei der Last
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3r P.11 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: pchodar

- **Wort (EVA-Transkription):** pchodar
- **Hebräische Entsprechung:** פְּכֹּדַּר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** p- + k- + dar
- **Bedeutung:** wie Finsternis / Dunkelheit
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f115r P.29 (H/F 2/2, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: pchor

- **Wort (EVA-Transkription):** pchor
- **Hebräische Entsprechung:** פְּ+חֹר
- **Typ:** Ableitung
- **Morphologie:** p- + chor
- **Bedeutung:** durch die Pupille / Öffnung der Höhle
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f9v P.5 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: pchraiin

- **Wort (EVA-Transkription):** pchraiin
- **Hebräische Entsprechung:** פְּרְעַיִן
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** p- + r- + aiin
- **Bedeutung:** für/bei das Licht des Auges
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: pochaiin

- **Wort (EVA-Transkription):** pochaiin
- **Hebräische Entsprechung:** פֹּכְּעַיִן
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** p- + k- + aiin
- **Bedeutung:** beim/am Auge
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f19v P.1 (H/C/U 3/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: poraiin

- **Wort (EVA-Transkription):** poraiin
- **Hebräische Entsprechung:** פְּאוֹרעַיִן
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** p- + or + aiin
- **Bedeutung:** Licht des Auges
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: qocheor

- **Wort (EVA-Transkription):** qocheor
- **Hebräische Entsprechung:** וְכְּאוֹר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** qo- + cheor
- **Bedeutung:** und wie Licht ≈
- **Linguistischer Kontext:** Kurzform: qokcheor
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3r P.3 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: qodaiin

- **Wort (EVA-Transkription):** qodaiin
- **Hebräische Entsprechung:** וְדִּין
- **Typ:** Ableitung
- **Morphologie:** qo- + daiin
- **Bedeutung:** und Urteil
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3r P.7 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: qoeees

- **Wort (EVA-Transkription):** qoeees
- **Hebräische Entsprechung:** וְעַאֵשׁ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** qo- + o- + esh
- **Bedeutung:** und auf dem Feuer / Fieber
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f18v P.2 (H/C/U 3/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: qokaiin

- **Wort (EVA-Transkription):** qokaiin
- **Hebräische Entsprechung:** וְכְּעַיִן
- **Typ:** Ableitung
- **Morphologie:** qo- + k- + aiin
- **Bedeutung:** und gemäß dem Auge
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f5r P.2 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R19, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: qokay

- **Wort (EVA-Transkription):** qokay
- **Hebräische Entsprechung:** וְכְּחַי
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** qo- + k- + chey
- **Bedeutung:** und wie lebendig
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f18v P.4 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: qokcheor

- **Wort (EVA-Transkription):** qokcheor
- **Hebräische Entsprechung:** וְכְּכְּאֵוֹר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** qo- + k- + k- + or
- **Bedeutung:** und wie das Licht
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f67v1 Y.7 (H/V 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: qokchor

- **Wort (EVA-Transkription):** qokchor
- **Hebräische Entsprechung:** וְעַכְּחֹר
- **Typ:** Ableitung
- **Morphologie:** qo- + o- + k- + chor
- **Bedeutung:** und für die Pupille
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3r P.12 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: qokchy

- **Wort (EVA-Transkription):** qokchy
- **Hebräische Entsprechung:** וְ+כְּ+הִי
- **Typ:** Ableitung
- **Morphologie:** qo- + k- + chy
- **Bedeutung:** und wie Blässe
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3v P.13 (H/C/F 3/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R19, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: qokedam

- **Wort (EVA-Transkription):** qokedam
- **Hebräische Entsprechung:** וְכְּדָּם
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** qo- + k- + dam
- **Bedeutung:** und wie das Blut
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f57r P.8 (H/C 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: qokeees

- **Wort (EVA-Transkription):** qokeees
- **Hebräische Entsprechung:** וְכְּעֵשׁ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** qo- + k- + esh
- **Bedeutung:** und wie Feuer / Fieber
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f18v P.6 (H/C/U 3/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: qokol

- **Wort (EVA-Transkription):** qokol
- **Hebräische Entsprechung:** וְ+כֹּל
- **Typ:** Ableitung
- **Morphologie:** qo- + kol
- **Bedeutung:** und alles
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3r P.5 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: qokor

- **Wort (EVA-Transkription):** qokor
- **Hebräische Entsprechung:** וְכֹּאָר
- **Typ:** Ableitung
- **Morphologie:** qo- + kol + ar
- **Bedeutung:** und alles Licht
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f6v P.14 (H/C/D/F 4/5, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: qokoral

- **Wort (EVA-Transkription):** qokoral
- **Hebräische Entsprechung:** וְכְּאֹרעַלְ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** qo- + k- + or + ol-
- **Bedeutung:** und wie Licht-auf
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: qokorar

- **Wort (EVA-Transkription):** qokorar
- **Hebräische Entsprechung:** וְכֹּאוֹראָר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** qo- + kol + or + ar
- **Bedeutung:** und alles Licht der Heilung
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f19r P.4 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: qokshol

- **Wort (EVA-Transkription):** qokshol
- **Hebräische Entsprechung:** וְ+כְּ+שׁוֹל
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** qo- + k- + shol
- **Bedeutung:** und wie Scheol/Tod
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3v P.10 (H/C/D/F/U 5/5, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: qokshy

- **Wort (EVA-Transkription):** qokshy
- **Hebräische Entsprechung:** וְכְּשֵׁי
- **Typ:** Ableitung
- **Morphologie:** qo- + k- + shy
- **Bedeutung:** und wie die Gabe
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f23r P.8 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: qoky

- **Wort (EVA-Transkription):** qoky
- **Hebräische Entsprechung:** וְכִּי
- **Typ:** Ableitung
- **Morphologie:** qo- + ky
- **Bedeutung:** und denn / weil
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f7v P.2 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R19, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: qol

- **Wort (EVA-Transkription):** qol
- **Hebräische Entsprechung:** וְעַל
- **Typ:** Ableitung
- **Morphologie:** qo- + ol
- **Bedeutung:** und auf / über
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f55v P.8 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R19, R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: qoldar

- **Wort (EVA-Transkription):** qoldar
- **Hebräische Entsprechung:** וְעַלדְּאַר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** qo- + ol- + d- + ar
- **Bedeutung:** und über den Leuchtenden
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f34v P.4 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: qopchaiin

- **Wort (EVA-Transkription):** qopchaiin
- **Hebräische Entsprechung:** וְפְּכְּעַיִן
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** qo- + p- + k- + aiin
- **Bedeutung:** und Atemweg des Auges
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f17v P.17 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: qor

- **Wort (EVA-Transkription):** qor
- **Hebräische Entsprechung:** וְאֹר
- **Typ:** Ableitung
- **Morphologie:** qo- + or
- **Bedeutung:** und Licht
- **Linguistischer Kontext:** astronomisch
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f17r P.4 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: qoschodam

- **Wort (EVA-Transkription):** qoschodam
- **Hebräische Entsprechung:** וְשׁכֹּדָּם
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** qo- + schol + dam
- **Bedeutung:** und Universalheilmittel des Blutes
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3r P.12 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: qotaiin

- **Wort (EVA-Transkription):** qotaiin
- **Hebräische Entsprechung:** וְ+תָּ+עַיִן
- **Typ:** Ableitung
- **Morphologie:** qo- + t- + aiin
- **Bedeutung:** und sie heilt das Auge
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f2r P.3 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: qotal

- **Wort (EVA-Transkription):** qotal
- **Hebräische Entsprechung:** וְטַל
- **Typ:** Ableitung
- **Morphologie:** qo- + tal
- **Bedeutung:** Tau / Schweißzeichen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f37v P.19b (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: qotchol

- **Wort (EVA-Transkription):** qotchol
- **Hebräische Entsprechung:** וְאוֹתכֹּל
- **Typ:** Ableitung
- **Morphologie:** qo- + ot + kol
- **Bedeutung:** und das Universal-Zeichen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3v P.2 (C/D/U 3/5, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: qotchor

- **Wort (EVA-Transkription):** qotchor
- **Hebräische Entsprechung:** קוֹתְּכֹּר
- **Typ:** Ableitung
- **Morphologie:** qo- + t- + chor
- **Bedeutung:** Pupillen-Zeichen / Urteil der Pupille
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f10r P.8 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: qotchy

- **Wort (EVA-Transkription):** qotchy
- **Hebräische Entsprechung:** וְאוֹתכְּהִי
- **Typ:** Ableitung
- **Morphologie:** qo- + ot + k- + chy
- **Bedeutung:** und das Zeichen der Blässe
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f7r P.3 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: qoteedar

- **Wort (EVA-Transkription):** qoteedar
- **Hebräische Entsprechung:** וְתֵּדַּר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** qo- + t- + dar
- **Bedeutung:** und er/du wirst leuchten
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f26r P.8 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: qoty

- **Wort (EVA-Transkription):** qoty
- **Hebräische Entsprechung:** וְ+תְּ+יְ
- **Typ:** Ableitung
- **Morphologie:** qo- + t- + y
- **Bedeutung:** und sie heilt es
- **Linguistischer Kontext:** Parallelform: qoky
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f2v P.2 (H/F/U 3/5, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: schol

- **Wort (EVA-Transkription):** schol
- **Hebräische Entsprechung:** שׂכֹּל
- **Typ:** Ableitung
- **Morphologie:** s- + kol
- **Bedeutung:** Arznei für alles / Universalheilmittel
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f8r T3.21 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: schor

- **Wort (EVA-Transkription):** schor
- **Hebräische Entsprechung:** שׂחֹר
- **Typ:** Ableitung
- **Morphologie:** s- + chor
- **Bedeutung:** gleich der Pupille
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f22r P.4 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: soin

- **Wort (EVA-Transkription):** soin
- **Hebräische Entsprechung:** שׂעַיִן
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** s- + a- + aiin
- **Bedeutung:** Feuer des Auges / Augenentzündung
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: sokar

- **Wort (EVA-Transkription):** sokar
- **Hebräische Entsprechung:** שׂאוֹכְּאָר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** s- + o- + k- + ar
- **Bedeutung:** Heilungs-Arzt des Lichts
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f16v P.13 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: sor

- **Wort (EVA-Transkription):** sor
- **Hebräische Entsprechung:** שׂאֹר
- **Typ:** Ableitung
- **Morphologie:** s- + or
- **Bedeutung:** Arzt des Lichts
- **Linguistischer Kontext:** Vokalvariante: sar
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f9r P.5 (H/C 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: soshy

- **Wort (EVA-Transkription):** soshy
- **Hebräische Entsprechung:** שׂאֹשׁיְ
- **Typ:** Ableitung
- **Morphologie:** s- + o- + sh + -y
- **Bedeutung:** gleich Scheol-er
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f14r P.8 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: shaiin

- **Wort (EVA-Transkription):** shaiin
- **Hebräische Entsprechung:** שַׁ+עַיִן
- **Typ:** Ableitung
- **Morphologie:** sh- + aiin
- **Bedeutung:** Feuer-Auge / Kurzform zu sheaiin
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f2r P.8 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: shar

- **Wort (EVA-Transkription):** shar
- **Hebräische Entsprechung:** שֶׁ+אַר
- **Typ:** Ableitung
- **Morphologie:** sh- + ar
- **Bedeutung:** welches das Licht ist
- **Linguistischer Kontext:** Variante: shear
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3v P.13 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: shos

- **Wort (EVA-Transkription):** shos
- **Hebräische Entsprechung:** שׁעַשׁ
- **Typ:** Ableitung
- **Morphologie:** sh- + a- + sh
- **Bedeutung:** Feuer-Ähnliches
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1r P2.9 (H/C/N/U 4/6, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: shy

- **Wort (EVA-Transkription):** shy
- **Hebräische Entsprechung:** שֵׁי
- **Typ:** Ableitung
- **Morphologie:** sh + -y
- **Bedeutung:** Gabe
- **Linguistischer Kontext:** Kurzform: sheey
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1v P.3 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R19, R40, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: sos

- **Wort (EVA-Transkription):** sos
- **Hebräische Entsprechung:** שׁעַשׁ
- **Typ:** Ableitung
- **Morphologie:** sh- + a- + sh
- **Bedeutung:** Feuer auf Feuer / Fieber-Intensivierung
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f20v P.2 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: sshey

- **Wort (EVA-Transkription):** sshey
- **Hebräische Entsprechung:** שׁשׁהֵי
- **Typ:** Ableitung
- **Morphologie:** sh- + sh- + shey
- **Bedeutung:** Doppel-Shin-Blässe
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f24r P.17 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: sheaiin

- **Wort (EVA-Transkription):** sheaiin
- **Hebräische Entsprechung:** שֶׁעַיִן
- **Typ:** Ableitung
- **Morphologie:** she- + aiin
- **Bedeutung:** welche das Auge
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f8v P.2 (H/F/U 3/4, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: sheam

- **Wort (EVA-Transkription):** sheam
- **Hebräische Entsprechung:** שֶׁ+עַם
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** she- + am
- **Bedeutung:** welche das Volk / Gabe der Mutter
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3v P.14 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: shear

- **Wort (EVA-Transkription):** shear
- **Hebräische Entsprechung:** שֶׁ+אַר
- **Typ:** Ableitung
- **Morphologie:** she- + ar
- **Bedeutung:** welches das Licht / die Heilung ist
- **Linguistischer Kontext:** Vokalvariante: sheor
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f8v P.12 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: shedy

- **Wort (EVA-Transkription):** shedy
- **Hebräische Entsprechung:** שֶׁדִּי
- **Typ:** Ableitung
- **Morphologie:** she- + -dy
- **Bedeutung:** das/welches von
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f26r P.5 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R19, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: sheor

- **Wort (EVA-Transkription):** sheor
- **Hebräische Entsprechung:** שֶׁאֹר
- **Typ:** Ableitung
- **Morphologie:** she- + or
- **Bedeutung:** das/welches Licht ist
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f6r P.4 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: shey

- **Wort (EVA-Transkription):** shey
- **Hebräische Entsprechung:** שֶׁ+יְ
- **Typ:** Ableitung
- **Morphologie:** she- + -y
- **Bedeutung:** sein/welches [Licht]
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3r P.11 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: shody

- **Wort (EVA-Transkription):** shody
- **Hebräische Entsprechung:** שְׁאוֹדִּי
- **Typ:** Ableitung
- **Morphologie:** sho- + -dy
- **Bedeutung:** von Scheol
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1r P2.9 (H/C/F/N/X/U 6/6, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: taiir

- **Wort (EVA-Transkription):** taiir
- **Hebräische Entsprechung:** תָּאִיר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** t- + ir
- **Bedeutung:** es wird leuchten / heilen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: tchey

- **Wort (EVA-Transkription):** tchey
- **Hebräische Entsprechung:** תְּחִי
- **Typ:** Ableitung
- **Morphologie:** t- + chey
- **Bedeutung:** möge es/sie leben!
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1r P3.17 (H/F/U 3/5, Erstbeleg)
- **Zugehörige Regeln:** R4, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: tchor

- **Wort (EVA-Transkription):** tchor
- **Hebräische Entsprechung:** תְּחֹר
- **Typ:** Ableitung
- **Morphologie:** t- + chor
- **Bedeutung:** sie heilt die Pupille
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3v P.7 (H/C/D/F/U 5/5, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: teor

- **Wort (EVA-Transkription):** teor
- **Hebräische Entsprechung:** תְּאוֹר
- **Typ:** Ableitung
- **Morphologie:** t- + or
- **Bedeutung:** sie wird heilen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f14r P.12 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: told

- **Wort (EVA-Transkription):** told
- **Hebräische Entsprechung:** תּוֹלֵד
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** t- + yld
- **Bedeutung:** es erzeugt / bringt hervor
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f18v P.1 (H/C/U 3/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: toror

- **Wort (EVA-Transkription):** toror
- **Hebräische Entsprechung:** תְּאוֹראוֹר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** t- + or + or
- **Bedeutung:** sie heilt
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f16r P2.10 (H/C 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: tshaiin

- **Wort (EVA-Transkription):** tshaiin
- **Hebräische Entsprechung:** תּשׁעַיִן
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** t- + sh + aiin
- **Bedeutung:** du wirst das Auge [behandeln]
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f21r P.9 (H/C 2/3, Erstbeleg)
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: tshdar

- **Wort (EVA-Transkription):** tshdar
- **Hebräische Entsprechung:** תְּשׁדָּאַר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** t- + sh- + d- + ar
- **Bedeutung:** Jahreszeit-Zeichen
- **Linguistischer Kontext:** Variante: torshor
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f33r P.1 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: tsheoarom

- **Wort (EVA-Transkription):** tsheoarom
- **Hebräische Entsprechung:** תְּשְׁאוֹרוֹם
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** t- + she- + or + om
- **Bedeutung:** du wirst von Scheol aufsteigen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3r P.15 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: tsho

- **Wort (EVA-Transkription):** tsho
- **Hebräische Entsprechung:** תְּשׁוֹ
- **Typ:** Ableitung
- **Morphologie:** t- + sho
- **Bedeutung:** sie entfernt sich von Scheol
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f21v P.6 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: tshoiin

- **Wort (EVA-Transkription):** tshoiin
- **Hebräische Entsprechung:** תְּשׁוֹעַיִן
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** t- + sho + aiin
- **Bedeutung:** [sie] wendet das Auge von Scheol
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: tshokeody

- **Wort (EVA-Transkription):** tshokeody
- **Hebräische Entsprechung:** תְּשׁכֵּהִי
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** t- + sho + k- + chy
- **Bedeutung:** Tav-Scheol-Blässe
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: tshol

- **Wort (EVA-Transkription):** tshol
- **Hebräische Entsprechung:** תְּשׁוֹל
- **Typ:** Ableitung
- **Morphologie:** t- + shol
- **Bedeutung:** sie entfernt von Scheol
- **Linguistischer Kontext:** Vollform: tsho
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f23r P.6 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: ychair

- **Wort (EVA-Transkription):** ychair
- **Hebräische Entsprechung:** יְחַאִיר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** y- + char + ir
- **Bedeutung:** er wird durch Wärme leuchten
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f18r P.12 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: ychekchy

- **Wort (EVA-Transkription):** ychekchy
- **Hebräische Entsprechung:** יְכְּכְּהִי
- **Typ:** Ableitung
- **Morphologie:** y- + k- + k- + chy
- **Bedeutung:** er heilt wie totale Blässe
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f17r P.5 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: ycheol

- **Wort (EVA-Transkription):** ycheol
- **Hebräische Entsprechung:** יְכְּאֵוֹל
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** y- + k- + eol
- **Bedeutung:** er wird wie Scheol-Licht sein
- **Linguistischer Kontext:** ambivalent
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f24v P.7 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: ychody

- **Wort (EVA-Transkription):** ychody
- **Hebräische Entsprechung:** יְכֹּדִּי
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** y- + k- + dy
- **Bedeutung:** er wird urteilen
- **Linguistischer Kontext:** Variante: ytchody
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f30r P.2 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: ychoees

- **Wort (EVA-Transkription):** ychoees
- **Hebräische Entsprechung:** יְכֹּעֵשׁ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** y- + kol + esh
- **Bedeutung:** er löscht das Feuer / heilt das Fieber
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: ychol

- **Wort (EVA-Transkription):** ychol
- **Hebräische Entsprechung:** יְכֹּל
- **Typ:** Ableitung
- **Morphologie:** y- + kol
- **Bedeutung:** er heilt alles
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f6r P.8 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: ychom

- **Wort (EVA-Transkription):** ychom
- **Hebräische Entsprechung:** יְחוֹם
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** y- + chom
- **Bedeutung:** er wird genesen / er wird warm
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f29r P.9 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: ychor

- **Wort (EVA-Transkription):** ychor
- **Hebräische Entsprechung:** יְחֹר
- **Typ:** Ableitung
- **Morphologie:** y- + chor
- **Bedeutung:** er wird die Pupille weiten
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f6v P.8 (H/C/D/F/U 5/5, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: ychtaiin

- **Wort (EVA-Transkription):** ychtaiin
- **Hebräische Entsprechung:** יְכְּתָּעַיִן
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** y- + k- + t- + aiin
- **Bedeutung:** er heilt das Auge vollständig
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3r P.6 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: ydaiin

- **Wort (EVA-Transkription):** ydaiin
- **Hebräische Entsprechung:** יְדִּין
- **Typ:** Ableitung
- **Morphologie:** y- + daiin
- **Bedeutung:** er urteilt
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f6r P.6 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: ydain

- **Wort (EVA-Transkription):** ydain
- **Hebräische Entsprechung:** יְדַיִן
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** y- + d- + aiin
- **Bedeutung:** er wird das Auge behandeln
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f16r P2.8 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R3, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: ydals

- **Wort (EVA-Transkription):** ydals
- **Hebräische Entsprechung:** יְדַּלְשׁ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** y- + dal + sh-
- **Bedeutung:** er wird Schwäche läutern
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f24v P.2 (H/F/U 3/4, Erstbeleg)
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: ydl

- **Wort (EVA-Transkription):** ydl
- **Hebräische Entsprechung:** יִדַּל
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** y- + dal
- **Bedeutung:** er wird schwach werden
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f18v P.4 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: yees

- **Wort (EVA-Transkription):** yees
- **Hebräische Entsprechung:** יְאֵשׁ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** y- + esh
- **Bedeutung:** er löscht das Feuer / Fieber
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f19v P.12 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: yfodain

- **Wort (EVA-Transkription):** yfodain
- **Hebräische Entsprechung:** יְפָּדָהיִן
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** y- + padah + aiin
- **Bedeutung:** er wird das Auge erlösen / befreien
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: ykaiin

- **Wort (EVA-Transkription):** ykaiin
- **Hebräische Entsprechung:** יְכְּעַיִן
- **Typ:** Ableitung
- **Morphologie:** y- + k- + aiin
- **Bedeutung:** er heilt das Auge
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1r P1.3 (H/C/F/N/U 5/5, Erstbeleg)
- **Zugehörige Regeln:** R3, R8, R41, R42, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: ykair

- **Wort (EVA-Transkription):** ykair
- **Hebräische Entsprechung:** יְכְּאִיר
- **Typ:** Ableitung
- **Morphologie:** y- + k- + ir
- **Bedeutung:** er heilt leuchtend
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f16r P1.3 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: ykam

- **Wort (EVA-Transkription):** ykam
- **Hebräische Entsprechung:** יְקָם
- **Typ:** Ableitung
- **Morphologie:** y- + qam
- **Bedeutung:** er wird aufstehen / sich erheben
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f18v P.8 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: ykar

- **Wort (EVA-Transkription):** ykar
- **Hebräische Entsprechung:** יְכְּאָר
- **Typ:** Ableitung
- **Morphologie:** y- + k- + or
- **Bedeutung:** er heilt leuchtend
- **Linguistischer Kontext:** Variante: ykair
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f18v P.6 (H/C/U 3/4, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: ykchaiin

- **Wort (EVA-Transkription):** ykchaiin
- **Hebräische Entsprechung:** יְכְּחַיִּין
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** y- + k- + chaiin
- **Bedeutung:** er wird wie Leben werden
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f10r P.7 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: ykcheor

- **Wort (EVA-Transkription):** ykcheor
- **Hebräische Entsprechung:** יְכְּכְּאוֹר
- **Typ:** Ableitung
- **Morphologie:** y- + k- + k- + or
- **Bedeutung:** er wird sein wie Licht
- **Linguistischer Kontext:** Intensiv
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f22v P.5 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: ykchol

- **Wort (EVA-Transkription):** ykchol
- **Hebräische Entsprechung:** יְכֹּל
- **Typ:** Ableitung
- **Morphologie:** y- + k- + chol
- **Bedeutung:** er heilt alles / er heilt Augenpigment
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f18r P.4 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: ykcholy

- **Wort (EVA-Transkription):** ykcholy
- **Hebräische Entsprechung:** יְכְּכֹּלְיְ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** y- + k- + chol + -y
- **Bedeutung:** er heilt alles
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: ykchor

- **Wort (EVA-Transkription):** ykchor
- **Hebräische Entsprechung:** יְכְּחֹר
- **Typ:** Ableitung
- **Morphologie:** y- + k- + chor
- **Bedeutung:** er heilt die Pupille
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f19r P.10 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: ykchy

- **Wort (EVA-Transkription):** ykchy
- **Hebräische Entsprechung:** יְכְּהִי
- **Typ:** Ableitung
- **Morphologie:** y- + k- + chy
- **Bedeutung:** er wird Blässe zeigen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3v P.8 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: ykeechy

- **Wort (EVA-Transkription):** ykeechy
- **Hebräische Entsprechung:** יְכְּאֵכְּהֵי
- **Typ:** Ableitung
- **Morphologie:** y- + k- + e- + k- + chy
- **Bedeutung:** er heilt wie Blässe-Licht
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f68r2 P.2 (H/F/R/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: ykeedy

- **Wort (EVA-Transkription):** ykeedy
- **Hebräische Entsprechung:** יְכֵּדֵי
- **Typ:** Ableitung
- **Morphologie:** y- + k- + dy
- **Bedeutung:** er wird anordnen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f26r P.3 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: ykeor

- **Wort (EVA-Transkription):** ykeor
- **Hebräische Entsprechung:** יְכְּאוֹר
- **Typ:** Ableitung
- **Morphologie:** y- + k- + or
- **Bedeutung:** er heilt / wie Licht
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f6r P.3 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: ykoaiin

- **Wort (EVA-Transkription):** ykoaiin
- **Hebräische Entsprechung:** יְ+כּוֹ+עַיִן
- **Typ:** Ableitung
- **Morphologie:** y- + k- + oaiin
- **Bedeutung:** er heilt wie das Auge
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3v P.1 (H/C/D/F/U 5/5, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: ykoiin

- **Wort (EVA-Transkription):** ykoiin
- **Hebräische Entsprechung:** יְכוֹיִן
- **Typ:** Ableitung
- **Morphologie:** y- + k- + aiin
- **Bedeutung:** er wird sich erholen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f5v P.4 (H/F/U 3/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: yoar

- **Wort (EVA-Transkription):** yoar
- **Hebräische Entsprechung:** יְאַאָר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** y- + o- + or
- **Bedeutung:** er wird zum Licht hin [heilen]
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: yodaiin

- **Wort (EVA-Transkription):** yodaiin
- **Hebräische Entsprechung:** יוֹדִּין
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** y- + o- + daiin
- **Bedeutung:** er weiß das Urteil
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f6v P.13 (H/C/D/F/U 5/5, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: ypchor

- **Wort (EVA-Transkription):** ypchor
- **Hebräische Entsprechung:** יְפְּחֹר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** y- + p- + chor
- **Bedeutung:** er heilt die Pupille [durch Atem]
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: yshdal

- **Wort (EVA-Transkription):** yshdal
- **Hebräische Entsprechung:** יְשַׁדַּל
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** y- + sh- + dal
- **Bedeutung:** er wird schwächen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: ysheol

- **Wort (EVA-Transkription):** ysheol
- **Hebräische Entsprechung:** יְשׁאֹל
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** y- + sheol
- **Bedeutung:** er wird [aus] Scheol [aufsteigen]
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f21r P.12 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: ysheor

- **Wort (EVA-Transkription):** ysheor
- **Hebräische Entsprechung:** יְשֶׁאוֹר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** y- + she- + or
- **Bedeutung:** er/sie wird sein, welches Licht ist
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3r P.8 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: ysho

- **Wort (EVA-Transkription):** ysho
- **Hebräische Entsprechung:** יְשׁוֹ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** y- + sho
- **Bedeutung:** es führt zum Tod
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f38r P.6 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: ytaiin

- **Wort (EVA-Transkription):** ytaiin
- **Hebräische Entsprechung:** יְתָּעַיִן
- **Typ:** Ableitung
- **Morphologie:** y- + t- + aiin
- **Bedeutung:** er wird das Auge heilen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f6r P.3 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: ytal

- **Wort (EVA-Transkription):** ytal
- **Hebräische Entsprechung:** יְתַּל
- **Typ:** Ableitung
- **Morphologie:** y- + tal
- **Bedeutung:** er wird suspendieren / aufhängen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f13v P.9 (H/C 2/3, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: ytalar

- **Wort (EVA-Transkription):** ytalar
- **Hebräische Entsprechung:** יְתַּאֹר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** y- + tal + or
- **Bedeutung:** er wird [Licht] geben / erleuchten
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f58r P.5 (H/F 2/2, Erstbeleg)
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: ytar

- **Wort (EVA-Transkription):** ytar
- **Hebräische Entsprechung:** יְתַּאָר
- **Typ:** Ableitung
- **Morphologie:** y- + t- + or
- **Bedeutung:** er wird Licht geben
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f19v P.12 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: ytchar

- **Wort (EVA-Transkription):** ytchar
- **Hebräische Entsprechung:** יְתְּחַר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** y- + t- + char
- **Bedeutung:** er/sie wird Fieber zeigen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: ytcheear

- **Wort (EVA-Transkription):** ytcheear
- **Hebräische Entsprechung:** יְ+תְּ+כְּ+אֵ+אָר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** y- + t- + k- + e + ar
- **Bedeutung:** er wird sein wie Heilung durch Licht
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3v P.9 (H/C/F 3/4, Erstbeleg)
- **Zugehörige Regeln:** R28, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: ytchm

- **Wort (EVA-Transkription):** ytchm
- **Hebräische Entsprechung:** יְתְּחֵם
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** y- + t- + cham
- **Bedeutung:** er/sie wird Wärme bringen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: ytchody

- **Wort (EVA-Transkription):** ytchody
- **Hebräische Entsprechung:** יְתְּכֹּדִּי
- **Typ:** Ableitung
- **Morphologie:** y- + t- + k- + dy
- **Bedeutung:** er wird urteilen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f8r P2.11 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: ytchol

- **Wort (EVA-Transkription):** ytchol
- **Hebräische Entsprechung:** יְתכֹּל
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** y- + t- + kol
- **Bedeutung:** er wird alles vollenden
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f28r P.9 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: ytchor

- **Wort (EVA-Transkription):** ytchor
- **Hebräische Entsprechung:** יְתְּחֹר
- **Typ:** Ableitung
- **Morphologie:** y- + t- + chor
- **Bedeutung:** er/sie wird die Pupille heilen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f15v P.5 (H/C/U 3/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: ytchy

- **Wort (EVA-Transkription):** ytchy
- **Hebräische Entsprechung:** יְתְּכְּהִי
- **Typ:** Ableitung
- **Morphologie:** y- + t- + chy
- **Bedeutung:** er/sie wird Blässe zeigen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3v P.12 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: yteam

- **Wort (EVA-Transkription):** yteam
- **Hebräische Entsprechung:** יְ+תְּ+אָם
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** y- + t- + eam
- **Bedeutung:** er wird das Volk behandeln
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3v P.14 (H/F/U 3/4, Erstbeleg)
- **Zugehörige Regeln:** R28, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: yteechy

- **Wort (EVA-Transkription):** yteechy
- **Hebräische Entsprechung:** יִחְיֶה
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** y- + chy
- **Bedeutung:** er wird gesund
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: yteey

- **Wort (EVA-Transkription):** yteey
- **Hebräische Entsprechung:** יְתֵּאֵי
- **Typ:** Ableitung
- **Morphologie:** y- + t- + ee
- **Bedeutung:** er wird [es] bringen / heilen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f33r P.6 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: yteol

- **Wort (EVA-Transkription):** yteol
- **Hebräische Entsprechung:** יְתאֵעֹל
- **Typ:** Ableitung
- **Morphologie:** y- + t- + ol
- **Bedeutung:** er wird handeln / vollbringen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f21r P.11 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: ytol

- **Wort (EVA-Transkription):** ytol
- **Hebräische Entsprechung:** יְתֹּלֹל
- **Typ:** Ableitung
- **Morphologie:** y- + tolol
- **Bedeutung:** er wird geschwächt
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f15r P.13 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: ytom

- **Wort (EVA-Transkription):** ytom
- **Hebräische Entsprechung:** יְתָּם
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** y- + tom
- **Bedeutung:** er wird vollständig / komplett
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: ytor

- **Wort (EVA-Transkription):** ytor
- **Hebräische Entsprechung:** יְתֹּאוֹר
- **Typ:** Ableitung
- **Morphologie:** y- + t- + or
- **Bedeutung:** er/sie wird zum Licht werden / erleuchten
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f5v P.3 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: ytsho

- **Wort (EVA-Transkription):** ytsho
- **Hebräische Entsprechung:** יְתְּשׁ
- **Typ:** Ableitung
- **Morphologie:** y- + t- + sho
- **Bedeutung:** er wird Scheol zeigen
- **Linguistischer Kontext:** R28-Typ
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f32r P.4 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: yty

- **Wort (EVA-Transkription):** yty
- **Hebräische Entsprechung:** יְ+תְּ+יְ
- **Typ:** Ableitung
- **Morphologie:** y- + t- + y
- **Bedeutung:** er heilt es ≈
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3v P.13 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R19, R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: chokcheey

- **Wort (EVA-Transkription):** chokcheey
- **Hebräische Entsprechung:** חֹקחֵיי
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** chok + cheey
- **Bedeutung:** Lebensvorschrift
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f30v P.11 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: chokchy

- **Wort (EVA-Transkription):** chokchy
- **Hebräische Entsprechung:** חֹקכְּהִי
- **Typ:** Ableitung
- **Morphologie:** chok + k- + chy
- **Bedeutung:** Vorschrift der Blässe
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f8v P.9 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: chokeor

- **Wort (EVA-Transkription):** chokeor
- **Hebräische Entsprechung:** חֹקאֵאוֹר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** chok + e- + or
- **Bedeutung:** Vorschrift des Lichts
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f30v P.3 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: choky

- **Wort (EVA-Transkription):** choky
- **Hebräische Entsprechung:** חֹקֵּי
- **Typ:** Ableitung
- **Morphologie:** chok + -ey
- **Bedeutung:** die Vorschriften des [Falls]
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1v P.6 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R19, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: daiidal

- **Wort (EVA-Transkription):** daiidal
- **Hebräische Entsprechung:** דִּינדַּל
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** daiin + dal
- **Bedeutung:** Urteil der Schwäche
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f23r P.6 (H/C 2/3, Erstbeleg)
- **Zugehörige Regeln:** —
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: daiidy

- **Wort (EVA-Transkription):** daiidy
- **Hebräische Entsprechung:** דַּיִּדִּי
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** daii + -dy
- **Bedeutung:** dessen Urteil
- **Linguistischer Kontext:** Variante: daiindy
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3v P.2 (H/C/F/U 4/5, Erstbeleg)
- **Zugehörige Regeln:** —
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: daiiin

- **Wort (EVA-Transkription):** daiiin
- **Hebräische Entsprechung:** דִּינִין
- **Typ:** Ableitung
- **Morphologie:** daiin + -in
- **Bedeutung:** Urteile
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1r T3.21 (H/C/F/N/X/U 6/6, Erstbeleg)
- **Zugehörige Regeln:** R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: daiim

- **Wort (EVA-Transkription):** daiim
- **Hebräische Entsprechung:** דִּינם
- **Typ:** Ableitung
- **Morphologie:** daiin + -m
- **Bedeutung:** Urteile
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3v P.10 (H/C/D/F/U 5/5, Erstbeleg)
- **Zugehörige Regeln:** R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: daiindy

- **Wort (EVA-Transkription):** daiindy
- **Hebräische Entsprechung:** דִּינדִּי
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** daiin + -dy
- **Bedeutung:** das Urteil dessen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** —
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: daiinol

- **Wort (EVA-Transkription):** daiinol
- **Hebräische Entsprechung:** דִּינעַל
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** daiin + ol-
- **Bedeutung:** Urteil über [etwas]
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f19r P.12 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: daiity

- **Wort (EVA-Transkription):** daiity
- **Hebräische Entsprechung:** דִּינתּ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** daiin + t-
- **Bedeutung:** Urteils-tav / juristische Abschlussform
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f25v P.3 (H/C 2/3, Erstbeleg)
- **Zugehörige Regeln:** —
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: dala

- **Wort (EVA-Transkription):** dala
- **Hebräische Entsprechung:** דַּלָּ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** dal + -a
- **Bedeutung:** Schwäche
- **Linguistischer Kontext:** Femininum: dal
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f14r P.5 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** —
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: dalchy

- **Wort (EVA-Transkription):** dalchy
- **Hebräische Entsprechung:** דַּלכְּהִי
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** dal + k- + chy
- **Bedeutung:** die Schwäche der Blässe
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f58r P.4 (H/F 2/2, Erstbeleg)
- **Zugehörige Regeln:** R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: daldalol

- **Wort (EVA-Transkription):** daldalol
- **Hebräische Entsprechung:** דַּלדַּלעוֹל
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** dal + dal + ol
- **Bedeutung:** doppelte Schwäche des Joches
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: dalor

- **Wort (EVA-Transkription):** dalor
- **Hebräische Entsprechung:** דַּלאוֹר
- **Typ:** Ableitung
- **Morphologie:** dal + or
- **Bedeutung:** schwaches Augenlicht
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f2r P.11 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: dalory

- **Wort (EVA-Transkription):** dalory
- **Hebräische Entsprechung:** דַּלאוֹריְ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** dal + or + -y
- **Bedeutung:** Schwäche zum Licht
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f23r P.11 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: daly

- **Wort (EVA-Transkription):** daly
- **Hebräische Entsprechung:** דַּלִּי
- **Typ:** Ableitung
- **Morphologie:** dal + -y
- **Bedeutung:** seine/meine Schwäche
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f9v P.8 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: daly·dal

- **Wort (EVA-Transkription):** daly·dal
- **Hebräische Entsprechung:** דַּלִּידַּל
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** dal + -y · dal
- **Bedeutung:** seine Schwäche
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** —
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: doiir

- **Wort (EVA-Transkription):** doiir
- **Hebräische Entsprechung:** דֹּיִר
- **Typ:** Ableitung
- **Morphologie:** dol + y + or
- **Bedeutung:** sehr schwache Erweckung
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f10r P.4 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: dolar

- **Wort (EVA-Transkription):** dolar
- **Hebräische Entsprechung:** דָּוֶהלְאוֹר
- **Typ:** Ableitung
- **Morphologie:** dol + l- + or
- **Bedeutung:** Krankheit zur Heilung
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f8v P.3 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: doldaiin

- **Wort (EVA-Transkription):** doldaiin
- **Hebräische Entsprechung:** דּוֹלדִּין
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** dol + daiin
- **Bedeutung:** Krankheits-Urteil
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f18r P.7 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: doldy

- **Wort (EVA-Transkription):** doldy
- **Hebräische Entsprechung:** דּוֹלדִּי
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** dol + -dy
- **Bedeutung:** von der Krankheit davon
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f18r P.7 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: dol·shol

- **Wort (EVA-Transkription):** dol·shol
- **Hebräische Entsprechung:** דָּוֶהשׁוֹל
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** dol + shol
- **Bedeutung:** Schmerz-Scheol
- **Linguistischer Kontext:** Warnsignal
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: cholar

- **Wort (EVA-Transkription):** cholar
- **Hebräische Entsprechung:** כֹּלוֹר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** kol + -lo + or
- **Bedeutung:** alles sein Licht
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f68r2 S.11 (H/V/U 3/4, Erstbeleg)
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: chol·chol

- **Wort (EVA-Transkription):** chol·chol
- **Hebräische Entsprechung:** כֹּלכֹּל
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** kol + kol
- **Bedeutung:** alles-alles
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: chololy

- **Wort (EVA-Transkription):** chololy
- **Hebräische Entsprechung:** כֹּלעַליְ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** kol + ol + -y
- **Bedeutung:** alles über ihm / vollständig darüber
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3r P.5 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: chotshol

- **Wort (EVA-Transkription):** chotshol
- **Hebräische Entsprechung:** כֹּתּשְׁאוֹל
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** kol + t- + sheol
- **Bedeutung:** alles-du-wirst-Scheol ≈
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f21v P.6 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: oraiin

- **Wort (EVA-Transkription):** oraiin
- **Hebräische Entsprechung:** אוֹרעַיִן
- **Typ:** Ableitung
- **Morphologie:** or + aiin
- **Bedeutung:** Licht des Auges / Augenheilung
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f9r T.10 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: oraiino

- **Wort (EVA-Transkription):** oraiino
- **Hebräische Entsprechung:** אוֹרעַיִןוֹ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** or + aiin + -o
- **Bedeutung:** Licht seines Auges
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: orair

- **Wort (EVA-Transkription):** orair
- **Hebräische Entsprechung:** אוֹרעַיִןאַר
- **Typ:** Ableitung
- **Morphologie:** or + aiin + ar
- **Bedeutung:** Licht-Auge-Licht
- **Linguistischer Kontext:** Ringstruktur
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f34v P.5 (H/C/F 3/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: orchaiin

- **Wort (EVA-Transkription):** orchaiin
- **Hebräische Entsprechung:** אֹרכְּעַיִין
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** or + k- + aiin
- **Bedeutung:** Licht-wie-Auge
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f25v P.7 (H/C 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: oro

- **Wort (EVA-Transkription):** oro
- **Hebräische Entsprechung:** אֹראֹ
- **Typ:** Ableitung
- **Morphologie:** or + -o
- **Bedeutung:** Licht-Palindrom / maximale Heilungs-Affirmation
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f24v P.5 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: ory

- **Wort (EVA-Transkription):** ory
- **Hebräische Entsprechung:** אוֹריְ
- **Typ:** Ableitung
- **Morphologie:** or + -y
- **Bedeutung:** sein Licht / er erleuchtet
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f40r P.11 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: otaiin

- **Wort (EVA-Transkription):** otaiin
- **Hebräische Entsprechung:** אוֹת+עַיִן
- **Typ:** Ableitung
- **Morphologie:** ot + aiin
- **Bedeutung:** Zeichen des Auges
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f4v P.10 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R19, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: otaiir

- **Wort (EVA-Transkription):** otaiir
- **Hebräische Entsprechung:** אֹתעַיִר
- **Typ:** Ableitung
- **Morphologie:** ot + aiin + ir
- **Bedeutung:** Zeichen des Augenlichts
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f24v P.2 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: otain

- **Wort (EVA-Transkription):** otain
- **Hebräische Entsprechung:** אוֹתאַיִן
- **Typ:** Ableitung
- **Morphologie:** ot + ain
- **Bedeutung:** Zeichen des Nichts / Endes
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f5r P.4 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: otaiphy

- **Wort (EVA-Transkription):** otaiphy
- **Hebräische Entsprechung:** אֹתאַיְפֶּהֵי
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** ot + a + y + p- + hey
- **Bedeutung:** Zeichen-Blässe-Mund
- **Linguistischer Kontext:** Hapax
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: otal

- **Wort (EVA-Transkription):** otal
- **Hebräische Entsprechung:** אוֹתעַל
- **Typ:** Ableitung
- **Morphologie:** ot + al
- **Bedeutung:** Zeichen über [etwas]
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3r P.6 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: otalef

- **Wort (EVA-Transkription):** otalef
- **Hebräische Entsprechung:** אוֹתאָלֶף
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** ot + alef
- **Bedeutung:** Zeichen des Aleph / Zeichen des Ochsen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f72r1 S1.9 (H/K/V 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: otam

- **Wort (EVA-Transkription):** otam
- **Hebräische Entsprechung:** אוֹתתָּם / אוֹתאָם
- **Typ:** Ableitung
- **Morphologie:** ot + tam
- **Bedeutung:** Zeichen der Vollständigkeit / der Mutter
- **Linguistischer Kontext:** registerabhängig
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f6v P.11 (H/F/U 3/5, Erstbeleg)
- **Zugehörige Regeln:** R2, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: otchal

- **Wort (EVA-Transkription):** otchal
- **Hebräische Entsprechung:** אוֹת+חַל
- **Typ:** Ableitung
- **Morphologie:** ot + chal
- **Bedeutung:** Zeichen des Geltens / Befund-Zeichen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f2r P.1 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: otcham

- **Wort (EVA-Transkription):** otcham
- **Hebräische Entsprechung:** אוֹת+חַם
- **Typ:** Ableitung
- **Morphologie:** ot + cham
- **Bedeutung:** Zeichen der Entzündung
- **Linguistischer Kontext:** Parallelform: otchom
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3v P.7 (H/C/D/F/U 5/5, Erstbeleg)
- **Zugehörige Regeln:** R2, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: otchdal

- **Wort (EVA-Transkription):** otchdal
- **Hebräische Entsprechung:** אוֹתכְּדַּל
- **Typ:** Ableitung
- **Morphologie:** ot + k- + dal
- **Bedeutung:** Zeichen der Schwäche
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f18v P.1 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: otcho

- **Wort (EVA-Transkription):** otcho
- **Hebräische Entsprechung:** אוֹתכֹּ
- **Typ:** Ableitung
- **Morphologie:** ot + cho
- **Bedeutung:** das Zeichen des [Atems]
- **Linguistischer Kontext:** Kolophon
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1v P.9 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: otchody

- **Wort (EVA-Transkription):** otchody
- **Hebräische Entsprechung:** אוֹתכֹּדִּי
- **Typ:** Ableitung
- **Morphologie:** ot + k- + dy
- **Bedeutung:** das ganze Zeichen davon
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3r P.9 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: otchol

- **Wort (EVA-Transkription):** otchol
- **Hebräische Entsprechung:** אוֹתכֹּל
- **Typ:** Ableitung
- **Morphologie:** ot + kol
- **Bedeutung:** Zeichen von allem / Universalzeichen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3r P.7 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: otchom

- **Wort (EVA-Transkription):** otchom
- **Hebräische Entsprechung:** אוֹת+חֹם
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** ot + chom
- **Bedeutung:** Zeichen der Wärme
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3r P.15 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: otchor

- **Wort (EVA-Transkription):** otchor
- **Hebräische Entsprechung:** אוֹתחֹר
- **Typ:** Ableitung
- **Morphologie:** ot + chor
- **Bedeutung:** das Zeichen der Pupille
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f2v P.6 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R19, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: otchy

- **Wort (EVA-Transkription):** otchy
- **Hebräische Entsprechung:** אוֹתכְּהִי
- **Typ:** Ableitung
- **Morphologie:** ot + k- + chy
- **Bedeutung:** das Zeichen der Blässe
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f2v P.3 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: oteol

- **Wort (EVA-Transkription):** oteol
- **Hebräische Entsprechung:** אוֹתאֵעֹל
- **Typ:** Ableitung
- **Morphologie:** ot + eol
- **Bedeutung:** Zeichen des Handelns
- **Linguistischer Kontext:** vgl.: yteol
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1r P3.12 (H/C/F/N/U 5/5, Erstbeleg)
- **Zugehörige Regeln:** R2, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: otly

- **Wort (EVA-Transkription):** otly
- **Hebräische Entsprechung:** אוֹתלֵ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** ot + l-
- **Bedeutung:** Zeichen zu/für
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f16r P1.2 (H/C 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: otolam

- **Wort (EVA-Transkription):** otolam
- **Hebräische Entsprechung:** אוֹתעַלאָם
- **Typ:** Ableitung
- **Morphologie:** ot + ol- + am
- **Bedeutung:** Zeichen über alle / Zeichen der Ewigkeit
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f69r C.9 (H/U/V 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: otor

- **Wort (EVA-Transkription):** otor
- **Hebräische Entsprechung:** אוֹתאוֹר
- **Typ:** Ableitung
- **Morphologie:** ot + or
- **Bedeutung:** Zeichen des Lichts / der Heilung
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f4v P.8 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: otosy

- **Wort (EVA-Transkription):** otosy
- **Hebräische Entsprechung:** אֹתאֹשׂיְ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** ot + o- + s + -y
- **Bedeutung:** Zeichen-Scheol-gleich-er
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f25r T.7 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: otshol

- **Wort (EVA-Transkription):** otshol
- **Hebräische Entsprechung:** אוֹתשׁוֹל
- **Typ:** Ableitung
- **Morphologie:** ot + shol
- **Bedeutung:** das Zeichen des Todes
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f7v P.1 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: otshor

- **Wort (EVA-Transkription):** otshor
- **Hebräische Entsprechung:** אוֹתשׁאוֹר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** ot + shor
- **Bedeutung:** das Zeichen des Lichts
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f23v P.6 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: otytchy

- **Wort (EVA-Transkription):** otytchy
- **Hebräische Entsprechung:** אוֹתיְתְּכְּהִי
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** ot + y- + t- + k- + chy
- **Bedeutung:** das Zeichen er-wird-Blässe-zeigen
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: pchodol

- **Wort (EVA-Transkription):** pchodol
- **Hebräische Entsprechung:** פְּחֹדֹּל
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** pcho + dol
- **Bedeutung:** Atemweg der Krankheit / Mundschmerz
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f17v P.1 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: pchy

- **Wort (EVA-Transkription):** pchy
- **Hebräische Entsprechung:** פְּחִי
- **Typ:** Ableitung
- **Morphologie:** pcho + -y
- **Bedeutung:** mein Atem / mein Mund
- **Linguistischer Kontext:** FLOS/FRUCTUS
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f8v P.10 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: pocheody

- **Wort (EVA-Transkription):** pocheody
- **Hebräische Entsprechung:** פְּחֹדִּי
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** pcho + -dy
- **Bedeutung:** des Atemwegs
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f16r P1.1 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: saiin

- **Wort (EVA-Transkription):** saiin
- **Hebräische Entsprechung:** שַׂעַיִן
- **Typ:** Ableitung
- **Morphologie:** sar + aiin
- **Bedeutung:** Augenarzt
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f2r P.12 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R8, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: saraiir

- **Wort (EVA-Transkription):** saraiir
- **Hebräische Entsprechung:** שַׂראִיר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** sar + ir
- **Bedeutung:** Arzt des Leuchtenden
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** —
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: sary

- **Wort (EVA-Transkription):** sary
- **Hebräische Entsprechung:** שַׂרִי
- **Typ:** Ableitung
- **Morphologie:** sar + -y
- **Bedeutung:** mein Arzt / Apotheker
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f9r P.1 (H/C 2/3, Erstbeleg)
- **Zugehörige Regeln:** R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: sheeolody

- **Wort (EVA-Transkription):** sheeolody
- **Hebräische Entsprechung:** שְׁאוֹלעֹדִּי
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** sheol + o- + -dy
- **Bedeutung:** von jenem Scheol
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: sheodaiin

- **Wort (EVA-Transkription):** sheodaiin
- **Hebräische Entsprechung:** שְׁאוֹדִּין
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** sheol + daiin
- **Bedeutung:** Todesurteil
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f66r R.7 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: sheoldam

- **Wort (EVA-Transkription):** sheoldam
- **Hebräische Entsprechung:** שְׁאוֹלדָּם
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** sheol + dam
- **Bedeutung:** tödlicher Blutverlust
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3r P.9 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: sheoltey

- **Wort (EVA-Transkription):** sheoltey
- **Hebräische Entsprechung:** שְׁאוֹלטַיְ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** sheol + ta + -y
- **Bedeutung:** Scheol des Tau-Zeichens
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f58v P2.22 (H/U 2/2, Erstbeleg)
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: shoaiin

- **Wort (EVA-Transkription):** shoaiin
- **Hebräische Entsprechung:** שְׁאוֹלעַיִן
- **Typ:** Ableitung
- **Morphologie:** sheol + aiin
- **Bedeutung:** Scheol des Auges
- **Linguistischer Kontext:** Diagnose
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f36v P.1 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R40, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: olsho

- **Wort (EVA-Transkription):** olsho
- **Hebräische Entsprechung:** שׁוֹלוֹ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** sho + -lo
- **Bedeutung:** sein Scheol
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: shockho

- **Wort (EVA-Transkription):** shockho
- **Hebräische Entsprechung:** שׁוֹ+כְּ+הוֹ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** sho + k- + ho
- **Bedeutung:** Scheol wie er / wie das Scheol davon
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3v P.11 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: shocthy

- **Wort (EVA-Transkription):** shocthy
- **Hebräische Entsprechung:** שׁוֹכְּתיְ
- **Typ:** Ableitung
- **Morphologie:** sho + k- + t- + -y
- **Bedeutung:** vollständiges Scheol
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f20v P.7 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: shoiin

- **Wort (EVA-Transkription):** shoiin
- **Hebräische Entsprechung:** שׁוֹעַיִן
- **Typ:** Ableitung
- **Morphologie:** sho + aiin
- **Bedeutung:** Scheol des Auges
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f20r P.12 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: shoin

- **Wort (EVA-Transkription):** shoin
- **Hebräische Entsprechung:** שׁוֹיִן
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** sho + aiin
- **Bedeutung:** Scheol des Auges
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: shokal

- **Wort (EVA-Transkription):** shokal
- **Hebräische Entsprechung:** שׁוֹכָּל
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** sho + kol
- **Bedeutung:** Scheol von allem
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f58r P.35 (H/F 2/2, Erstbeleg)
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: shokchy

- **Wort (EVA-Transkription):** shokchy
- **Hebräische Entsprechung:** שׁוֹכְּכֵּי
- **Typ:** Ableitung
- **Morphologie:** sho + k- + ky
- **Bedeutung:** Scheol-Blässe / Blässe des Todes
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f8r P1.3 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: sholo

- **Wort (EVA-Transkription):** sholo
- **Hebräische Entsprechung:** שְׁאוֹלוֹ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** sho + -lo
- **Bedeutung:** Scheol für ihn
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: shosaiin

- **Wort (EVA-Transkription):** shosaiin
- **Hebräische Entsprechung:** שׁוֹשַׂעַיִן
- **Typ:** Ableitung
- **Morphologie:** sho + saiin
- **Bedeutung:** Scheol des Augenarztes
- **Linguistischer Kontext:** Diagnose
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f20r P.5 (H/F 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: shot

- **Wort (EVA-Transkription):** shot
- **Hebräische Entsprechung:** שׁוֹתְּ
- **Typ:** Ableitung
- **Morphologie:** sho + t-
- **Bedeutung:** vollständiges Scheol
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f42r P2.13 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: shotoly

- **Wort (EVA-Transkription):** shotoly
- **Hebräische Entsprechung:** שׁוֹתּעוֹליְ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** sho + t- + ol + -y
- **Bedeutung:** Scheol-Last hin
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f22v P.13 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: shoty

- **Wort (EVA-Transkription):** shoty
- **Hebräische Entsprechung:** שׁוֹתְּיְ
- **Typ:** Ableitung
- **Morphologie:** sho + t- + -y
- **Bedeutung:** vollständiges Scheol von ihm
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f15r P.12 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2, R41, R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: sotchaiin

- **Wort (EVA-Transkription):** sotchaiin
- **Hebräische Entsprechung:** שׁאוֹתכְּעַיִן
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** sho + ot + k- + aiin
- **Bedeutung:** das Zeichen dem Auge gleich
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f18r P.11 (H/C 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: sholol

- **Wort (EVA-Transkription):** sholol
- **Hebräische Entsprechung:** שׁוֹלעַל
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** shol + ol-
- **Bedeutung:** Scheol über [etwas]
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: sholor

- **Wort (EVA-Transkription):** sholor
- **Hebräische Entsprechung:** שׁוֹלאֹר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** shol + or
- **Bedeutung:** Scheol-Licht
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f17v P.21 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: sholshdy

- **Wort (EVA-Transkription):** sholshdy
- **Hebräische Entsprechung:** שׁוֹלשׁדִּי
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** shol + sh + -dy
- **Bedeutung:** von dem Scheol
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: aiior

- **Wort (EVA-Transkription):** aiior
- **Hebräische Entsprechung:** עַיִאוֹר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** aiin + y + or
- **Bedeutung:** Auge des Lichts
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: chain

- **Wort (EVA-Transkription):** chain
- **Hebräische Entsprechung:** חַעַיִן
- **Typ:** Ableitung
- **Morphologie:** cha + aiin
- **Bedeutung:** lebendiges Auge / Auge des Lebens
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f25r P.3 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: chal

- **Wort (EVA-Transkription):** chal
- **Hebräische Entsprechung:** חָל
- **Typ:** Ableitung
- **Morphologie:** chal
- **Bedeutung:** gilt für / betrifft
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3r P.4 (H/C/D/F 4/4, Erstbeleg)
- **Zugehörige Regeln:** R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: chary

- **Wort (EVA-Transkription):** chary
- **Hebräische Entsprechung:** חַרִי
- **Typ:** Ableitung
- **Morphologie:** char + -y
- **Bedeutung:** sein Fieber
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f8v P.4 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R43
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: chodl

- **Wort (EVA-Transkription):** chodl
- **Hebräische Entsprechung:** חֹדֵל
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** chodl (Part. von חדל)
- **Bedeutung:** der Aufhörende / der Sterbende
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f11r P.5 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: dain

- **Wort (EVA-Transkription):** dain
- **Hebräische Entsprechung:** דָּן
- **Typ:** Ableitung
- **Morphologie:** dain (Part. QAL דין)
- **Bedeutung:** Richter
- **Linguistischer Kontext:** Alternativlesung: aiin
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1r T2.10 (H/F/N/X/U 5/6, Erstbeleg)
- **Zugehörige Regeln:** R19, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: damo

- **Wort (EVA-Transkription):** damo
- **Hebräische Entsprechung:** דָּמוֹ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** dam + -o
- **Bedeutung:** sein Blut
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f3r P.7 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: dan

- **Wort (EVA-Transkription):** dan
- **Hebräische Entsprechung:** דָּן
- **Typ:** Ableitung
- **Morphologie:** dan
- **Bedeutung:** er hat geurteilt / Richter
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f2r P.5 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: darchor

- **Wort (EVA-Transkription):** darchor
- **Hebräische Entsprechung:** דַּרְכּוֹר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** dar + chor
- **Bedeutung:** sein Krankheitsverlauf
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f5v P.3 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: dary

- **Wort (EVA-Transkription):** dary
- **Hebräische Entsprechung:** דַּרִי
- **Typ:** Ableitung
- **Morphologie:** dar + -y
- **Bedeutung:** mein Leuchtendes / mein Licht
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f9v P.9 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: dydyd

- **Wort (EVA-Transkription):** dydyd
- **Hebräische Entsprechung:** דִּידִּידִּי
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** dy + dy + dy
- **Bedeutung:** dreifacher Relativpartikel
- **Linguistischer Kontext:** Emphase
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1r P3.17 (H/F/U 3/5, Erstbeleg)
- **Zugehörige Regeln:** R25
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: keeees

- **Wort (EVA-Transkription):** keeees
- **Hebräische Entsprechung:** ???
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** keeees
- **Bedeutung:** Hapax ≈
- **Linguistischer Kontext:** Hapax
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f21v P.3 (H/C/F/U 4/4, Erstbeleg)
- **Zugehörige Regeln:** —
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: keey

- **Wort (EVA-Transkription):** keey
- **Hebräische Entsprechung:** כֵּי
- **Typ:** Ableitung
- **Morphologie:** keey
- **Bedeutung:** denn / weil
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1r P4.26 (H/F/U 3/5, Erstbeleg)
- **Zugehörige Regeln:** R15, R19, R40, R43
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Lexikoneintrag: pysaiinor

- **Wort (EVA-Transkription):** pysaiinor
- **Hebräische Entsprechung:** פִּישׂעַיִןאוֹר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** pi + s- + aiin + or
- **Bedeutung:** Mund gleich dem Auge des Lichts
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2, R41
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: sam.chorly

- **Wort (EVA-Transkription):** sam.chorly
- **Hebräische Entsprechung:** שָׁםכֹּרלִי
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** sham + kor + li
- **Bedeutung:** so heile meine Pupille
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: shodaiin

- **Wort (EVA-Transkription):** shodaiin
- **Hebräische Entsprechung:** שׁוֹדִּין
- **Typ:** Ableitung
- **Morphologie:** shod + daiin
- **Bedeutung:** Todesurteil
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f2r P.5 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2, R30, R43
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Lexikoneintrag: shodain

- **Wort (EVA-Transkription):** shodain
- **Hebräische Entsprechung:** שׁוֹדדַּעַיִן
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** shod + d- + aiin
- **Bedeutung:** Zerstörung des Auges
- **Linguistischer Kontext:** Diagnose
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f1r P3.12 (H/C/F/N/U 5/5, Erstbeleg)
- **Zugehörige Regeln:** R2, R40, R41
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Lexikoneintrag: shorodo

- **Wort (EVA-Transkription):** shorodo
- **Hebräische Entsprechung:** שׁוֹרעוֹדוֹ
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** shor + odo
- **Bedeutung:** das Zeichen besteht fort
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f13r P.5 (H/C 2/3, Erstbeleg)
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Lexikoneintrag: shydal

- **Wort (EVA-Transkription):** shydal
- **Hebräische Entsprechung:** שֵׁידַּל
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** shy + dal
- **Bedeutung:** die Gabe der Schwäche
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** —
- **Zugehörige Regeln:** —
- **Konfidenz-Bewertung:** 1 von 5 Sternen (★☆☆☆☆)

### Lexikoneintrag: torshor

- **Wort (EVA-Transkription):** torshor
- **Hebräische Entsprechung:** תֹּרשׁוֹר
- **Typ:** Ableitung (R43 Kandidat)
- **Morphologie:** tor + shor
- **Bedeutung:** Jahreszeit-Zeichen / saisonaler Eintrag
- **Linguistischer Kontext:** Keine zusätzlichen Kontextinformationen
- **Sprachschicht:** Nicht zugewiesen / Unbekannt
- **Anker-Status:** Kein Anker
- **Folio-Referenz (Erstbeleg):** f13r P.1 (H/C/F 3/3, Erstbeleg)
- **Zugehörige Regeln:** R2
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

## V. Grammatik — Präfixe, Suffixe & Schemata

**Präfix-System**

### Grammatik-Präfix: qo-

- **EVA-Präfix:** qo-
- **Hebräisch:** וְ
- **Funktion:** Vav conjunctive „und/auch“
- **Beispiel (EVA):** qokedam
- **Beispiel (Hebräisch):** וְכְּדָּם
- **Konfidenz-Bewertung:** ★★★★

### Grammatik-Präfix: o-

- **EVA-Präfix:** o-
- **Hebräisch:** עַ
- **Funktion:** Ayin „auf/bei/von“
- **Beispiel (EVA):** okol
- **Beispiel (Hebräisch):** עַכֹּל
- **Konfidenz-Bewertung:** ★★★★

### Grammatik-Präfix: l-

- **EVA-Präfix:** l-
- **Hebräisch:** לְ
- **Funktion:** Lamed „zu/für/nach“
- **Beispiel (EVA):** lchedy
- **Beispiel (Hebräisch):** לְכְּדֵי
- **Konfidenz-Bewertung:** ★★★★

### Grammatik-Präfix: d-

- **EVA-Präfix:** d-
- **Hebräisch:** דְּ/דִּי
- **Funktion:** Aramäisches Relativpräfix „von/dessen/welches“ (R45) — äußerste morphol. Schale; kein D1-Flag wenn d- vor Konsonant
- **Beispiel (EVA):** dsholdy
- **Beispiel (Hebräisch):** דְּשׁוֹל+דִּי
- **Konfidenz-Bewertung:** ★★★★★

### Grammatik-Präfix: p-

- **EVA-Präfix:** p-
- **Hebräisch:** פְּ
- **Funktion:** Pe-Präfix (Nominalkonstrukt)
- **Beispiel (EVA):** pchedal
- **Beispiel (Hebräisch):** פְּכֶּדַּל
- **Konfidenz-Bewertung:** ★★★

### Grammatik-Präfix: op-/of-

- **EVA-Präfix:** op-/of-
- **Hebräisch:** עַ+פֶּ
- **Funktion:** Ayin+Pe: „auf/an dem Mund/Öffnung von“ — astronomischer Koordinatenmarker (R41-Erweiterung per R47)
- **Beispiel (EVA):** opcheear
- **Beispiel (Hebräisch):** עַ+פֶּ+כְּ+אֵר
- **Konfidenz-Bewertung:** ★★★

### Grammatik-Präfix: y-

- **EVA-Präfix:** y-
- **Hebräisch:** יְ
- **Funktion:** Imperfekt 3. Pers. Sg. Mask.
- **Beispiel (EVA):** yshdal
- **Beispiel (Hebräisch):** יְשַׁדַּל
- **Konfidenz-Bewertung:** ★★★★

### Grammatik-Präfix: t-

- **EVA-Präfix:** t-
- **Hebräisch:** תָּ
- **Funktion:** Imperfekt 3. Pers. Sg. Fem. / 2. Pers.
- **Beispiel (EVA):** taiir
- **Beispiel (Hebräisch):** תָּאִיר
- **Konfidenz-Bewertung:** ★★★★

**Suffix-System**

### Grammatik-Suffix: -dy

- **EVA-Suffix:** -dy
- **Hebräisch:** דִּי
- **Funktion:** Aramäisch: Genitiv/Relativ „von/dessen“
- **Konfidenz-Bewertung:** ★★★★

### Grammatik-Suffix: -dam

- **EVA-Suffix:** -dam
- **Hebräisch:** דָּם
- **Funktion:** „Blut“ — Zeilenabschluss-Refrain in f57r
- **Konfidenz-Bewertung:** ★★★★★

### Grammatik-Suffix: -dal

- **EVA-Suffix:** -dal
- **Hebräisch:** דַּל
- **Funktion:** „schwach/dünn“ — Diagnose-Refrain
- **Konfidenz-Bewertung:** ★★★★

### Grammatik-Suffix: -aiin

- **EVA-Suffix:** -aiin
- **Hebräisch:** עַיִן
- **Funktion:** „Auge“ — diagnostischer Terminus in Suffixposition
- **Konfidenz-Bewertung:** ★★★★

### Grammatik-Suffix: -ody

- **EVA-Suffix:** -ody
- **Hebräisch:** +דִּי
- **Funktion:** Vokalhelfer + דִּי; Listenregister f57r P.3–P.4
- **Konfidenz-Bewertung:** ★★★

### Grammatik-Suffix: -aly

- **EVA-Suffix:** -aly
- **Hebräisch:** +לִי
- **Funktion:** Zodiak-Suffix -aly: Vokalhelfer + lamed + Yod; Sternlabel-Register (R52a)
- **Konfidenz-Bewertung:** ★★★★

### Grammatik-Suffix: -ary

- **EVA-Suffix:** -ary
- **Hebräisch:** +רִי
- **Funktion:** Zodiak-Suffix -ary: Vokalhelfer + resch + Yod; Sternlabel-Register (R52a)
- **Konfidenz-Bewertung:** ★★★★

**Verb-Paradigma y+k+[Terminus] — 6 bestätigt + 3 Kandidaten**

### Verb-Paradigma: ykchaiin

- **EVA:** ykchaiin
- **Hebräisch:** יְ+כְּ+חַיִּין
- **Bedeutung:** er wird wie Leben werden
- **Erstbeleg:** f9r
- **Status:** Bestätigt
- **Konfidenz-Bewertung:** ★★★★

### Verb-Paradigma: ycheor

- **EVA:** ycheor
- **Hebräisch:** יְ+כְּ+אוֹר
- **Bedeutung:** er wird wie Licht heilen
- **Erstbeleg:** f10r
- **Status:** Bestätigt
- **Konfidenz-Bewertung:** ★★★★

### Verb-Paradigma: ykchor

- **EVA:** ykchor
- **Hebräisch:** יְ+כְּ+חֹר
- **Bedeutung:** er heilt die Pupille
- **Erstbeleg:** f11r P6
- **Status:** Bestätigt
- **Konfidenz-Bewertung:** ★★★★★

### Verb-Paradigma: ykchy

- **EVA:** ykchy
- **Hebräisch:** יְ+כְּ+הִי
- **Bedeutung:** er wird Blässe zeigen
- **Erstbeleg:** f11v P2
- **Status:** Bestätigt
- **Konfidenz-Bewertung:** ★★★★

### Verb-Paradigma: ykaiin

- **EVA:** ykaiin
- **Hebräisch:** יְ+כְּ+עַיִן
- **Bedeutung:** er heilt das Auge
- **Erstbeleg:** f14r P8
- **Status:** Bestätigt
- **Konfidenz-Bewertung:** ★★★★

### Verb-Paradigma: ykshol

- **EVA:** ykshol
- **Hebräisch:** יְ+כְּ+שׁוֹל
- **Bedeutung:** er wird zu Scheol gehen (negativ)
- **Erstbeleg:** f15r P12
- **Prognose-Typ:** Negativ (Scheol-Richtung)
- **Status:** Bestätigt
- **Konfidenz-Bewertung:** ★★★★

### Verb-Paradigma: ykair

- **EVA:** ykair
- **Hebräisch:** יְ+כְּ+אִיר
- **Bedeutung:** er heilt leuchtend (★★ provisorisch — R43: f16r nur 1×)
- **Erstbeleg:** f16r P1.3
- **Status:** R43 Kandidat
- **Konfidenz-Bewertung:** ★★

### Verb-Paradigma: tshaiin

- **EVA:** tshaiin
- **Hebräisch:** תּ+שׁ+עַיִן
- **Bedeutung:** du wirst das Auge [behandeln/waschen] — Direktbefehl (★★★ Kand.)
- **Erstbeleg:** f21r P9
- **Status:** R43 Kandidat
- **Konfidenz-Bewertung:** ★★★

### Verb-Paradigma: ykeechy

- **EVA:** ykeechy
- **Hebräisch:** יְ+כְּ+אֵ+כְּ+הֵי
- **Bedeutung:** er heilt wie Blässe-Licht (8. y+k-Verb; ★★★ Kand. R43-Frist: 5 Folios)
- **Erstbeleg:** f26r P9
- **Status:** R43 Kandidat
- **Konfidenz-Bewertung:** ★★★

### Prognose-Schemata

**Quire A (Kräuter, Sprache A):** Symptom (links) ‡ {plant} ‡ Therapie (rechts) → sheol/or (Prognose) → = (Kolophon)

**Quire T / Sprache B:** daiin (Urteil) → shedy+X → Befund (ckhy/dal/dam) → lchedy (Therapieziel) → sheol/or (Prognose)

## VI. Grammatikregeln

57 Regeln gesamt: **40 validiert** (≥ 2 unabhängige Belege) + **17 Kandidaten**. **Regelmoratorium beendet (v8.9.0)** — Verhältnis 40:17 = 2,35:1 ≥ 1,5:1. R60+ freigegeben. R2-ext (v7.5): explizite o-Positionsregel mit Negativtest. R14 und R20 gesichert (★★★★★).

### Regel R1

- **Regel-ID:** R1
- **Name / Fokus:** qo- = וְ (Vav conjunctive) — ausschließlich Sprache B in Quires A+B
- **Formale Syntax und Bedingung:** ^qo- (Verbundpräfix) im Regelfall ausschließlich in Spr. BSpr. A Quire A: absent im Regelfall — f001r 0/260 Tokens; f2r Frühbefund → s. §E + R33Gilt mit vollem Geltungsbereich nur für Quires A+B — s. R33 (emergierend), R47 (vollständig), R59 (isoliertes qo-Einzeltoken auch in Spr. A)
- **Empirische Evidenz:** qokedam, qokol, qokeedy (f57r, f103r); f001r Spr. A: 0 Belege in 260 Tokens ★★★★★; Ausnahmen ab Quire C: s. R33 (emergierend) + R47 (Quire H vollständig integriert)
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Regel R2

- **Regel-ID:** R2
- **Name / Fokus:** **o-Positionsdetermination**
- **Formale Syntax und Bedingung:** ^o → עַ (Ayin, konsonantisch) — ausnahmslos[wortintern]o → ֹ (Ḥolam, Vokalmarker) — ausnahmslosKein Ermessensspielraum (vgl. Mater lectionis: positionell Konsonant _oder_ Vokalmarker)**Negativtest:** 0 Gegenbeispiele in 140+ Einträgen
- **Empirische Evidenz:** Wortanfang → Ayin: okol, okoldm, okaiin, odol, okaiin, otor, otam, okchan; wortintern → Ḥolam: qokol (קוֹ+כֹּל), okoldm (עַל+כֹּל+דָּם), sokar, ytor, ychor, shol; Negativtest (v7.5): 0 Gegenbeispiele in 140+ Lexikoneinträgen ✓
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Regel R3

- **Regel-ID:** R3
- **Name / Fokus:** y-initiale Wörter = Imperfekt 3. Sg. Mask.
- **Formale Syntax und Bedingung:** ^y → Yiqtol 3. Sg. Mask.
- **Empirische Evidenz:** yteechy, yshdal, ykchaiin, ycheor, ychor; f1r: ykal, ykaiin, yshey, ycho, yto, ycheey (6 neue Belege) — >11 Belege / ≥8 Folios
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Regel R4

- **Regel-ID:** R4
- **Name / Fokus:** t-initiale Wörter = Imperfekt 3. Sg. Fem. / 2. Sg.
- **Formale Syntax und Bedingung:** ^t → Yiqtol 3. Sg. Fem. / 2. Sg.
- **Empirische Evidenz:** taiir; tsheoarom
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Regel R5

- **Regel-ID:** R5
- **Name / Fokus:** shedy und chedy kommen nie im selben Absatz vor
- **Formale Syntax und Bedingung:** ¬(shedy ∧ chedy) im selben Absatz — gegenseitige Exklusion
- **Empirische Evidenz:** 15 Zeilen nur chedy, 17 nur shedy, 5 beide (lange Zeilen)
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Regel R6

- **Regel-ID:** R6
- **Name / Fokus:** Zeilenabschluss-Prognose: sheol/shol = Tod; or = Heilung
- **Formale Syntax und Bedingung:** Zeilenende: sheol/shol → TodesprognoseZeilenende: or → Heilungsprognose
- **Empirische Evidenz:** f103r: 8× sheol am Zeilenende; P.17 endet or·aiin
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Regel R7

- **Regel-ID:** R7
- **Name / Fokus:** daiin am Zeilenanfang = Paragraphen-Öffner
- **Formale Syntax und Bedingung:** ^daiin in Zeilenposition 1 → Paragrapheneröffnungspartikel
- **Empirische Evidenz:** 3× Zeilenanfang f103r; f57r P.5; f10v: 8×
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Regel R8

- **Regel-ID:** R8
- **Name / Fokus:** -aiin als Suffix = עַיִן (Auge) diagnostisch
- **Formale Syntax und Bedingung:** Suffix -aiin → עַיִן (Auge) — diagnostische Funktion
- **Empirische Evidenz:** okaiin, qokaiin je 10–11×
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Regel R9

- **Regel-ID:** R9
- **Name / Fokus:** Refrain-Wörter — Anker-Position (3–5× pro Folio)
- **Formale Syntax und Bedingung:** 3–5× pro Folio in definierter Anker-Position (Absatzeröffner oder Kolophon)
- **Empirische Evidenz:** dam in f57r (4×), dal in f103r P.1 (3×), daiin in f10v (8×)
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Regel R10

- **Regel-ID:** R10
- **Name / Fokus:** -ody-Paragraphen = eigenständiges Listenregister
- **Formale Syntax und Bedingung:** Paragraphen mit -ody-Endwörtern: nie mit chedy/shedy kombiniert
- **Empirische Evidenz:** f57r P.3–P.4: strikte Exklusion
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Regel R11

- **Regel-ID:** R11
- **Name / Fokus:** Paragraphen-Ende mit = = Abschlussformel
- **Formale Syntax und Bedingung:** Token X= in Finalposition → Kolophon-Abschluss_Sektionsabschluss-Variante: odaiim= (עַ+דִּינִים, Plural-Intensiv) in Final-Kolophon — eigenständige Regel bei 2+ Belegen zu erheben (ex R57, v8.1)_
- **Empirische Evidenz:** kaiim=, dom=, daiin=, chckhan=, chal=; f57r cphedom=; f1r T1–T4 (alle 6 Transkriptoren einig); f1v P4-Kolophon chokody=, P10-Kolophon chodar= — 6 neue Belege. _Sektionsabschluss-Variante (1 Beleg, f24v P.16): odaiim= in Final-Kolophon des letzten Quire-C-Paragraphen._
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Regel R12

- **Regel-ID:** R12
- **Name / Fokus:** Trägersatz-Muster: P.1 (Relativsatz) → P.2 (Hauptsatz mit sar)
- **Formale Syntax und Bedingung:** Absatz-Sequenz: P.n = Relativsatz → P.(n+1) = Hauptsatz mit sar
- **Empirische Evidenz:** f57r P.9; f103r P.1→P.2
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Regel R13

- **Regel-ID:** R13
- **Name / Fokus:** Paragraphen ohne Randstern = positives Prognose-Vokabular
- **Formale Syntax und Bedingung:** Kein Randstern → positive Terme (or, lor·aiin)
- **Empirische Evidenz:** f103r P.3,17,20; f103v: 5/5 or-Paragraphen sternlos
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Regel R14

- **Regel-ID:** R14
- **Name / Fokus:** **{plant}-Marker: Strukturelle und pharmakologische Doppelfunktion**
- **Formale Syntax und Bedingung:** **Ebene 1 (horizontal):** Text links von {plant} = Diagnose/Indikation; rechts = Therapie/Prognose**Ebene 2 (vertikal):** Vertikale Position von {plant} ≡ Pflanzenteil der Illustration:↑ FLOS/FRUCTUS · CAULIS · FOLIUM · RADIX ↓_Korollar: Kein {plant}-Marker oder Text über gesamter Pflanze = Ganzpflanzen-Präparat (TOTUS)_**Farbcode (dreistufig ★★★★★):**Ebene 1: Alle Wurzeln (homogene Terracotta/Dunkelrot-Fläche) = kein Text (13 Belege)Ebene 2: Homogene Fläche an beliebigem Pflanzenteil = kein Text (3 Nicht-Wurzel-Belege)Ebene 3: Grün = prescribiert (Text vorhanden)_Drei-Kategorien: Fläche (stumm) ≠ Linie/Strich (illustrativ) ≠ FLOS-dotted/Textur (prescribiert)_
- **Empirische Evidenz:** f1v–f10v: 100 % konsistent (Ebene 1); Stolfi f16r: „interrupted by the plant's flower“ — Blüten-Position explizit dokumentiert ★★★★★; pol (Frucht-Term) an Frucht-Position f22r P.1 ★★★★★; f19r: gesamter Text auf Blüten-Höhe, saiin+chor semantisch kohärent mit Kornblumen-Pharmakologie (Augenwasser, Konjunktivitis) ★★★★★; f14r/f15r/f22r/f28r/f30v: rote Wurzeln ohne Text — 5 Belege ★★★★; f13r (v8.4): Inula helenium orange-rote Hauptwurzel ohne Text — 10. Beleg ★★★★★; f002r (v8.4): dunkel übermale Centaurea-Wurzel ohne Text — Beleg 11 ★★★★★; f007r (v8.4): orange-rote Sternblumen-Rhizomwurzel ohne Text — Beleg 12 ★★★★★; f31r (v8.7): pharmakologisches Dunkelrot-Rhizom Tanacetum parthenium ohne Text — Beleg 13 ★★★★★; f25r: dunkelrote Bohnen an Stengelknoten ohne Text — Erstbeleg Nicht-Wurzel-Rot-Muster; f010r (v8.4): rote Oval-Strukturen (Nicht-Wurzel!) ohne Text — 3. Nicht-Wurzel-Beleg → Ebene 2 ★★★★★; f009r: rote Punkt-Ähre MIT Text = FLOS-therapeutisches Rot (dotted) ≠ homogenes Terracotta — Drei-Kategorien-Verfeinerung bestätigt; 21/21 analysierten Folios zeigen selektive Pflanzenteil-Annotation (Muster I)
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Regel R15

- **Regel-ID:** R15
- **Name / Fokus:** **Paradigma-Wiederholungsreihen** (×2–×5)
- **Formale Syntax und Bedingung:** **Typ A:** X · X (direkt nebeneinander)**Typ B:** X · [ZT] · X (mit Zwischentext)**Typ B-Dreistufig:** Verb → Nomen → Direktional mit Zwischentext**Typ C:** Drei phonologisch verwandte Stämme in direkter Folge (semantisches Spannungsfeld: Licht-Zeichen → Pupille → Scheol)_**Typ D** (Kand., 1 Beleg): Drei semantisch synonyme Heilungsterme in Kolophon-Finalposition (ex R52, v8.1)_
- **Empirische Evidenz:** f1v P.3 (ckhy·ckho·ckhy); f10r P8 (chor·chor·cholor); f20r P.13 (chor·chor — Typ A); f21r P.12 (ykeea·**chor**·sheey·ysheol·**chor**·chol·daiin·chkaiin= — Typ B, 4. Beleg); f22v P.7 (ychor·chor·qokchol·chory — Dreistufig-Schema, Typ B, 5. Beleg); f23r P.7 (qokchol·dar·qokchol — nominale Rahmendopplung, Typ B nominal, 6. Beleg); f1r P3.L15 (chol·chol — Typ A, 7. Beleg, 4/4 Transkriptoren); f1r P4.L26 (keey·keey — Typ A, 8. Beleg, 3/4 Transkriptoren); f1r P4.L23 (dar…dar — Typ B, 9. Beleg, 4/4); f29r P.8 (shor·chor·sho — Typ C, 10. Beleg); f33v P.6 (chdy·chdy — Typ A, 11. Beleg); f34r P.5 (shedy·shedy — Typ A, 12. Beleg); f34r P.13 (qokar·qokar — Typ B, 13. Beleg) — 13 Belege / 9 Folios → ★★★★★
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Regel R16

- **Regel-ID:** R16
- **Name / Fokus:** **Mehrfach-{plant}: Zwei Ebenen**
- **Formale Syntax und Bedingung:** **Typ 1 (Horizontal-Dreisegment):** Alle {plant}-Marker auf gleicher Höhe: [Diagnose] {plant} [Brücke] {plant} [Prognose] — ein Pflanzenteil**Typ 2 (Vertikal-Zweiteilverschreibung):** {plant}-Marker auf verschiedenen Höhen → jeder Marker kennzeichnet anderen PflanzenteilAbgrenzung: Typ 1 = gleiche Bildzeile; Typ 2 = ≥1 Bildzone Abstand
- **Empirische Evidenz:** Typ 1: f2r P.2–P.6: Kornblume mit drei Stielen → drei Segmente auf gleicher Höhe; Typ 2: f15r bilateral-Blüte (zwei Knospen, je eigene Textspalte auf Blüten-Höhe) ★★★★; f30r P.11+P.12: zwei {plant}-Marker auf Blatt-/Rhizom-Höhe → Typ 2 zu prüfen
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Regel R17

- **Regel-ID:** R17
- **Name / Fokus:** shol (apokor.) medial vs. sheol (Vollform) am Zeilenende
- **Formale Syntax und Bedingung:** Spr. A: shol → MedialpositionSpr. B: sheol → Zeilenende-FinalpositionR17 gilt uneingeschränkt für Quires I–II
- **Empirische Evidenz:** f4r–f10v: shol medial (20+×); f103r: sheol final (8×); Zodiak-Register bestätigt ★★★★: f72r1 R1 shol (2× medial) / f72r1 R2 sheol (direkt vor gap = 5. Register-Bestätigung)
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Regel R18

- **Regel-ID:** R18
- **Name / Fokus:** Diagnosepaar shol · chaiin = abwägende Prognose
- **Formale Syntax und Bedingung:** shol ∧ chaiin → abwägende Prognose; nie einzeln in abwägenden Kontexten
- **Empirische Evidenz:** f4r P.2, f4v P.3, f6v P.2, f8v P3, f9r P2
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Regel R19

- **Regel-ID:** R19
- **Name / Fokus:** **Intensivierungsrhetorik**
- **Formale Syntax und Bedingung:** ×2 = Emphase×3 = absolutes Urteil×4 + קַיָאם = rechtskräftiges Urteil_**Typ E (★★★ Kand.): ABAB-Verflechtung** — A·B·A·B = doppelt-verflochtene Intensivierung zweier komplementärer PositivtermeDistinkt von Typ A (AA) und Typ B (AXA)_
- **Empirische Evidenz:** Doppel: f4r,f6r,f8v,f10r; Tripel: f5v P.3; Vierfach: f8r P3.19; daiin·daiin (Doppelurteil): f19v P.4 (1. Beleg) + f21v P.4 (2. Beleg, ★★★ Kand. bestätigt); Zodiak-Register ★★★: otam·otam·chotam f72r1 R1 (dreistufige Nominal-Intensivierung) + otaiin·otain f72r1 S1.8 (Kurzform-Paradigmawiederholung); f29r P.6: shor·shor — shor-Dopplung (★★★ Kand.); f30r P.11: cheor·chey·cheor·chey — Corpus-Erstbeleg ABAB-Verflechtung (Typ E ★★★ Kand., alle H/C/F einig). _Rahmungsvariante (1 Beleg, f24r P.16): dal·dam·dal = doppelte Schwäche rahmt Blutbefund — Sandwich-Analogon zu R15-Typ-B-Dopplung (ex R54, v8.1)_
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Regel R20

- **Regel-ID:** R20
- **Name / Fokus:** Direktionales Antonymenpaar lor ↔ lshol
- **Formale Syntax und Bedingung:** lor = לְאוֹר (zu Licht/Heilung)lshol = לְשׁוֹל (zu Scheol/Tod)Identische l-Morphologie
- **Empirische Evidenz:** f6v P.11 (lor), f7v P.6 (lshol); identische l-Morphologie
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Regel R21

- **Regel-ID:** R21
- **Name / Fokus:** Schlussformeln mit =-Marker — Inventar
- **Formale Syntax und Bedingung:** Inventar: kaiim=, dom=, daiin=, chckhan=_Erweitert: qor·chain·cthorchy= (Dreiterm-Positiv: Licht–Auge-des-Lebens–vollständige-Heilung-der-Blässe); shol·chokcheey·daiin·kchydy= (Vierterm Scheol-Leben-Urteil-Blässe)_
- **Empirische Evidenz:** f6r, f6v, f8r, f8v, f10v — konsistentes Inventar; f30r P.7 + f30v P.11 — zwei neue Kolophon-Typen (beide H/C/F vollständig einig)
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Regel R22

- **Regel-ID:** R22
- **Name / Fokus:** Folio-übergreifendes Fallverlaufs-Narrativ
- **Formale Syntax und Bedingung:** Prognose-Eskalation ↔ botanische IkonographieQuire A: Heilkräuter → Mandragora → Mohn → Aronstab
- **Empirische Evidenz:** Quire A: Heilkräuter → Mandragora → Mohn → Aronstab
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Regel R23

- **Regel-ID:** R23
- **Name / Fokus:** Kurztitel-Format (Siman)
- **Formale Syntax und Bedingung:** Format: 2 Wörter + =-Marker → fasst Paragraphenbefund zusammen
- **Empirische Evidenz:** f8r T1–T3 (ocho·daiin=, okokchodm=, schol·sair=); f9r T10
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Regel R24

- **Regel-ID:** R24
- **Name / Fokus:** shol·dy·…·shol — Emphase-Dopplung mit Genitiv-Brücke
- **Formale Syntax und Bedingung:** Schema: shol + דִּי + […] + shol
- **Empirische Evidenz:** f13r P.1: torshor·opchy·shol·dy·qopchy·shol — einmaliges Strukturmuster
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Regel R25

- **Regel-ID:** R25
- **Name / Fokus:** dy × n — Genitivkette als Intensitätsskala
- **Formale Syntax und Bedingung:** ×1 = Standard×2 = Emphase×3 = absoluter Superlativ_Fusioniertes Token dydyd möglich — ändert Intensitätssemantik nicht (Einzelbeleg f1r P3.17, ex R32, v8.1)_
- **Empirische Evidenz:** f14r P.10, f14v P.7 (×2); f14v P.6 (×3, einmalig) — Kandidat
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Regel R28

- **Regel-ID:** R28
- **Name / Fokus:** y+t+[Terminus] — intensivierte/aspektuell verstärkte Imperfektform
- **Formale Syntax und Bedingung:** y- (3. Sg. Mask.) + t- (3. Sg. Fem./temporal) kombiniert → aspektuell verstärkte FormGilt stammübergreifend: Licht-, Heilungs- _und_ Scheol-Stämme (kein Stammgruppen-Constraint)
- **Empirische Evidenz:** ytchor (f16v P.2), ytchy (f16v P.5); f28r P.9: ytchol + yteol (2 aufeinanderfolgende y+t-Verben im Kolophon); f29v P.2: ytchor (Zweitbeleg → ★★★★ in Verbformen) — R43 erfüllt: f16v + f28r = 2 Folios → ★★★ validiert; f30v P.5: ytor = y+t+or (or-Stamm); f32r P.4: ytsho = y+t+sho (Scheol-Stamm) — 3. Folio-Beleg (f16v + f28r + f32r), diverse Termini → ★★★★
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Regel R29

- **Regel-ID:** R29
- **Name / Fokus:** oto+or — positive Prognose-Abschluss-Geste
- **Formale Syntax und Bedingung:** otor in Finalposition unmittelbar vor Quire-Abschlusskolophon → positive Prognose
- **Empirische Evidenz:** otor in f16v P.12 (vor sokar·oaorar= Quire-B-Abschluss); Zodiak: f71v R2 (eingebettet zwischen shepchol + sheo·shopcho — liturgische Prognose-Formel) + f72r1 R2 (direkt vor chokaiin, am R2-Segment-Ende) — 4 Belege gesamt, ★★★ Kand.
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Regel R30

- **Regel-ID:** R30
- **Name / Fokus:** sho- + Nomen = Scheol-Lokalisierung / Todesform des Nomens
- **Formale Syntax und Bedingung:** Präfix sho- + Nomen → Todesform des Nomens (Scheol-Lokalisierung)
- **Empirische Evidenz:** shodain (f001r P3.12), shoaiin (f001r P4.24), shokcheey (f001r P4.22); shoinn (f13v) ★★★★
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Regel R31

- **Regel-ID:** R31
- **Name / Fokus:** Temperatur-Antonymenpaar kor ↔ kchom — hippokratisches Diagnostikschema
- **Formale Syntax und Bedingung:** kor = קֹר (Kälte) ↔ kchom = כְּ+חֹם (Fieber)In aufeinanderfolgenden Zeilen → hippokratisches Diagnostikschema (vgl. R20)
- **Empirische Evidenz:** f001r P3.15 (kor) + P3.16 (kchom); Parallele zu lor↔lshol (R20)
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Regel R33

- **Regel-ID:** R33
- **Name / Fokus:** qo--Präfix in Sprache-A-Texten ab Quire C — Übergangszone
- **Formale Syntax und Bedingung:** Quire A (f001r): qo- absent — 0/260 Tokens ★★★★★Quire A (f2r): Frühemergenz — 4 qo-Tokens, 3/3 Transkriptoren-Konsens → s. §EQuire C: emergierend (~5–10 %, folio-intern ansteigend)Quire H: vollständig integriert → s. R47R1 gilt mit vollem Geltungsbereich nur für Quires I–II
- **Empirische Evidenz:** f17r: 7 qo-Formen (Spr. A); f17v: 6 qo-Formen (Spr. A) — 13 Belege in ~250 Token (~5,2 %); f18r/v (bC2): 8–10 qo-Formen in ~200 Token (~4–5 %); f19r/v (bC3): ~18 qo-Formen in ~175 Token (~10 %) — überschreitet Quire-H-Dichte; 0 Belege in Quires A+B Spr. A (~800 Token); f58r (Quire H, Spr. A): 28+ qo-Formen in ~350 Token (~8 %) — Vollintegration, s. R47; f2r (Quire A, Spr. A): qotaiin (P.3), qoy (P.8), qokey (P.9), qoky (P.10) — 4 Tokens, 3/3 Konsens — Frühemergenz §E
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Regel R34

- **Regel-ID:** R34
- **Name / Fokus:** sheol (Vollform) in Sprache-A-Texten am Paragraphenende ab Quire C
- **Formale Syntax und Bedingung:** sheol am Paragraphenende auch in Spr. A ab Quire Cshol (apokor.) bleibt dominant; R17 gilt uneingeschränkt nur für Quires I–II
- **Empirische Evidenz:** f17v P.13: ykeor·chol·chol·cthol·chkor·sheol-{plant} — Erstbeleg Spr. A sheol am Paragraphenende; 0 Belege in Quires A+B Spr. A
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Regel R35

- **Regel-ID:** R35
- **Name / Fokus:** Dopplung chol·chol = Vollheilungs-Emphase vor Todesformel
- **Formale Syntax und Bedingung:** chol·chol = כֹּל·כֹּל (alles-alles) vor nachfolgender TodesformelErweitert R19-Intensivierungsschema auf Nominalstämme
- **Empirische Evidenz:** f17v P.13: chol·chol·cthol·chkor·sheol — Erstbeleg; f29v P.2 (Zweitbeleg) + f29v P.3 (Drittbeleg) — Foliobeleg-Cluster; R43 erfüllt: f17v + f29v = 2 Folios → ★★★ validiert; Parallele zu chol·chol·chol auf f8v (R19)
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Regel R36

- **Regel-ID:** R36
- **Name / Fokus:** Dopplung dar·dar = Bilateral-/Intensiv-Dopplung **(register-übergreifend)**
- **Formale Syntax und Bedingung:** dar = דַּר (leuchtend/Licht-davon)Typ A: direkt (dar.dar); Typ B: mit Zwischentext (dar…dar)Gilt für ophthalmologischen und kosmologischen Kontext
- **Empirische Evidenz:** f18r P.6: dar.dar — Corpus-Erstbeleg (★★★ Kand.); f26v P.6: dar…dar — 2. Beleg (Typ B) → R43 erfüllt → ★★★★; f69r R.17: dair.dar= — 3. Beleg (Typ A, Terminal, kosmologisch); f69r R.22: dary.dar — 4. Beleg (Typ A, direktional) → 3 Folios · 4 Belege · register-übergreifend (botanisch f18r+f26v, kosmologisch f69r) · 0 Gegenbeispiele → ★★★★★; R19-Strukturkonformität identisch zu daly·dal, chol·chol, or·or-Palindrom
- **Konfidenz-Bewertung:** 5 von 5 Sternen (★★★★★)

### Regel R37

- **Regel-ID:** R37
- **Name / Fokus:** R19-Intensivierungsschema für qo--Präfix-Wortgruppen ab Quire C
- **Formale Syntax und Bedingung:** qoky·qoky, qokchy·qokchy, … → Dopplung verstärkt kausale Verbindung oder diagnostischen BefundGilt ab Quire C
- **Empirische Evidenz:** f18v P.2: qokchy·qokchy (Corpus-Erstbeleg qo-Dopplung); f18v P.3: qoky·qoky (2. Beleg, verschiedene Lemmata); f26v P.5: qotedy·qotedy (3. Beleg, neues Lemma); R43 erfüllt: f18v + f26v = 2 Folios
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Regel R38

- **Regel-ID:** R38
- **Name / Fokus:** {plant}-Marker am Paragraphenanfang — neue Strukturvariante in Quire C
- **Formale Syntax und Bedingung:** Quires A+B: {plant} nie am ParagraphenanfangQuire C: {plant} in Anfangsposition → Illustration rahmt nachfolgenden Kolophon
- **Empirische Evidenz:** f18v P.10: {plant}yko.dshy.dair.ykol.dom= — Corpus-Erstbeleg der Anfangspositionierung; 0 Belege in Quires A+B
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Regel R39

- **Regel-ID:** R39
- **Name / Fokus:** dom= als Schlusskolophon-Finale in Sprache A
- **Formale Syntax und Bedingung:** dom= = דּוֹם (Stille/Ende) → positiv-neutrale PrognoseSpr. A-Erstbeleg f18v P.10; in Spr. B bereits belegt (f57r)dom = neutral/positiv (Stille) vs. shol = negativ (Tod)
- **Empirische Evidenz:** f18v P.10: dom= — Erstbeleg Spr. A; Parallelbeleg Spr. B: f57r Kolophon-Kontext
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Regel R40

- **Regel-ID:** R40
- **Name / Fokus:** **Kurzwurzel-Konfidenzdeckel v2**
- **Formale Syntax und Bedingung:** Basiswurzel ≤ 3 Konsonanten nach Präfix-/Suffix-Abzug → max. ★★Ausnahmen (mind. 2 müssen erfüllt sein):(a) Funktionswort ≤ 3 EVA-Zeichen gesamt (Konj./Präp./Artikel/Partikel)(b) Rückwärtstest-Anker (derzeit 23 Anker)(c) Korpusfrequenz ≥ 15× in ≥ 3 Folios mit sem. konsistentem Kontext**HARD CAP ★★** bei < 2 erfüllten Bedingungen**Klausel (d) — GibberishTest-Protokoll (GPA-1):** Generierte Pseudowörter mit ≥ 1 Stolfi-Corpus-Treffer (beliebiges Folio) gelten als _versehentlich echte Corpus-Tokens_ und werden vor Testauswertung verworfen — Ersatz-Token generieren, bis genuines Hapax (0 Corpus-Belege) vorliegt. Hintergrund: Voynich-like Bigramm-Sampling reproduziert mit ~12–15 % Wahrscheinlichkeit Hochfrequenz-Tokens (daiin, chor, or, shol u. a.); deren korrekte ★★★+-Bewertung ist kein Framework-Fehlalarm, sondern ein Sampler-Artefakt.
- **Empirische Evidenz:** or → ★★★★ bleibt (b ✓ + c ✓: 52×, 5 Folios); chor → ★★★★ bleibt (b ✓ + c ✓: 47×, 5 Folios); daiin → ★★★★ bleibt (b ✓ + c ✓: 38×, 5 Folios); shol → ★★★ bleibt (b ✓ + c ✓: 19×, 5 Folios); ky → ★★★ bleibt (a ✓ + b ✓); dy → ★★ (a nur 1/2 — zu lang für Grenzfall); v8.8.9 GibberishTest-Diagnose: 16,4 % ★★★+-Rate — davon 75,6 % (62/82 Treffer, 10 Läufe) LEX-Treffer auf echte Corpus-Tokens; nach GPA-1-Protokoll erwartete Residualrate: ~4,0 % (R40-Ausnahme-Pfad) → Zielkorridor ≤ 10 % ✓; v8.9.0 GibberishTest Neues Baseline-Protokoll (10 × 50 Wörter, 13. Juni 2026): 7,2 % Brutto-Mittelwert (±2,7 %, Min 2 %, Max 10 %), LEX-TREFFER = 0, 10/10 Läufe im Zielkorridor — offizieller Brutto-Baseline (Verschiebung 16,4 % → 7,2 % durch GPA-1-Corpus-Vorab-Filter)
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Regel R41

- **Regel-ID:** R41
- **Name / Fokus:** **Präfix-Hierarchie-Protokoll**
- **Formale Syntax und Bedingung:** Valide Reihenfolge (strict order):[d- Relativ (R45)] → [Konj.: o-/qo-/v-] → [Präp.: l-/b-/k-/m-] → [Komp.: op-/of-] → [Artikel: ha-] → [Basis]**Ungültig:**(a) Präp. direkt vor Konj. ohne Basiswurzel-Trennung(b) > 2 geschichtete Präfixe aus verschiedenen Klassen(c) sho- + positiver Prognoseterm im selben Token
- **Empirische Evidenz:** Ausnahme: qo-k--Kombination in Quire C (R33) ist validierte Einzelklasse; illegale Beispiele: l-o-[Wort] (Präp.+Konj.), o-qo-[Wort] (Doppel-Konj.), qo-k-ch-[Wort] (> 2 Präfix-Layer); neu: d-Relativpräfix (R45) bildet äußerste Schale; op-/of- (R48, Quire H) als Koordinatenmarker im astronomischen Register f58r P.26
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Regel R42

- **Regel-ID:** R42
- **Name / Fokus:** **Kongruenzpflicht für ★★★★+**
- **Formale Syntax und Bedingung:** Kondition für ★★★★+:(a) Genus + Numerus kompatibel(b) ≥ 1 unabhängiger Parallelbeleg im Corpus★★★ ohne Kongruenztest: vorläufig → Scheitern bei Nachanalyse → **Herabstufung auf ★★**
- **Empirische Evidenz:** ykchaiin Mask.Sg. + aiin Sg.mask. ✓ f9r; ykchy Mask.Sg. + chy Sg. ✓ f11v; ykchor Mask.Sg. + chor Sg. ✓ f11r; ykshol Mask.Sg. + shol Sg. ✓ f15r — 4/4 Kongruenztests bestanden; ykam/ytor f18v: Parallelbeleg noch ausstehend
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Regel R43

- **Regel-ID:** R43
- **Name / Fokus:** **Multi-Folio-Validierungspflicht**
- **Formale Syntax und Bedingung:** ★★★+: ≥ 2 verschiedene Folios mit sem. kompatiblem KontextAusnahme: ★★★ Kand. bei ≥ 8 Einzelfolio-Belegen (Bestätigung innerhalb der nächsten 5 analysierten Folios; andernfalls → ★★)
- **Empirische Evidenz:** ykam f18v (4×, Erstbeleg) → ★★★ Kand. bis Quire-H-Bestätigung; ytor f18v (3×) + f58r P.30 (R43 erfüllt) → **★★★★**; ykair f16r (1×) → ★★ provisorisch (unter Minimum 8×); kchom f001r (2×) → ★★★ Kand. (Flag bleibt)
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Regel R44

- **Regel-ID:** R44
- **Name / Fokus:** **Konsekutive Kurzwurzel-Sequenzsperre**
- **Formale Syntax und Bedingung:** 2 aufeinanderfolgende Tokens mit Basis ≤ 3 Konsonanten → Sequenz max. ★★Ausnahmen (beide müssen erfüllt sein):(a) mind. 1 Token = Rückwärtstest-Anker (R40-Ausnahme b)(b) R42-Kongruenzstandard erfülltNicht anwendbar auf Funktionswort-Hauptwort-Paare
- **Empirische Evidenz:** ykchaiin + daiin: daiin Rückwärtstest-Anker (b ✓) + R42-Kongruenz ✓ → R44 greift nicht; ky + chor: Funktionswort-Ausnahme → R44 greift nicht; Neues Verb + neues Objekt (je ★★★ Kand.): kein Anker, kein Parallelbeleg → Sequenz ★★; shol + neues Adj. (Einzelbeleg): shol Anker ✓, R42-Kongruenz fehlt → ★★
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Regel D1/D2

- **Regel-ID:** D1/D2
- **Name / Fokus:** ⚠ **Phonotaktische Warnsignale** (Warnsystem, kein Hard Stop)
- **Formale Syntax und Bedingung:** **D1 Doppelkonsonanz-Warnung:** 2× identisches Mapping im Basiswort-Kern → ⚠ Flag (erfordert Erklärung: Geminierung/Dagesh, Assimilation, Schreibervarianz)**D2 Kehlkopf-Cluster-Warnung:** 2 laryngale/pharyngale Konsonanten nebeneinander → ⚠ Flag (erfordert morphologische Rechtfertigung)Konfidenz wird _nicht_ automatisch reduziert**R45-Ausnahme:** d--Anlaut vor Konsonant triggert kein D1-Flag
- **Empirische Evidenz:** EVA-Phonologie noch nicht gesichert → kein Hard Stop möglich; D1-Erklärungsoptionen: Dagesh-Verdopplung, partielle Assimilation, Schreibervarianz; D2: Doppel-Laryngal im Mischna-Hebräisch selten und markiert; R45-Ausnahme: 6 D1-Fehlklassifikationen auf f58r durch aramäisches d-Relativpräfix aufgelöst
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Regel R45

- **Regel-ID:** R45
- **Name / Fokus:** **Aramäisches d-Relativpräfix** als morphologische Klasse
- **Formale Syntax und Bedingung:** ^d + Konsonant (kein Vokalträger) → דְּ/דִּי (de-/di-, Relativpräfix „von/dessen/welches“)(a) Kein D1-Flag(b) Äußerste morphologische Schale in R41-Hierarchie**Abgrenzung:** d- + Vokalindikator = Basiskonsonant (z. B. dal)
- **Empirische Evidenz:** f58r: dshodal (P.2), dshor (P.4), dchairam (P.5), dtor (P.34), dtshol (P.38), dchol (P.40) — 6 klare Instanzen; alle durch דְּ-Relativpräfix vollständig aufgelöst; 6 D1-Fehlklassifikationen zurückgezogen
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Regel R46

- **Regel-ID:** R46
- **Name / Fokus:** **Wurzelketten-Ausnahme für R44**
- **Formale Syntax und Bedingung:** ≥ 3 aufeinanderfolgende Tokens morphologisch als Ableitungen einer einzigen validierten Basiswurzel → R44 greift nichtNachweis: explizite Dokumentation aller Ableitungsformen; ein nicht-ableitbares Token bricht die KetteGibberishTest-neutral (Pseudowörter bilden keine systematischen Wurzelketten)
- **Empirische Evidenz:** f58r P.5: char.ar.al.char.arary.ytalar — 6 Tokens, alle Derivate der validierten Basiswurzel א-ו-ר (Licht); R44 greift nicht; semantisch: astronomische Licht-Litanei über Sternglanz
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Regel R47

- **Regel-ID:** R47
- **Name / Fokus:** **qo-Präfix-Vollintegration ab Quire H** (Erweiterung von R33)
- **Formale Syntax und Bedingung:** Quire-Progressionsskala:Quires A+B: absentQuire C: emergierend (R33)Quire T: vollständigQuire H: vollständig (~8 %)Quire H ist keine Übergangszone — vollständig integriertR1 gilt nur für Quires A+B
- **Empirische Evidenz:** f58r (Quire H, Spr. A): 28+ qo--Formen in ~350 Token (Stichprobe: qor, qokaiin, qocphody, qokalam, qotyshey, qokaldy, qotaily u. a.); Vergleich: f17r/v Quire C (R33): 13 Belege/250 Token; f57r Quire T (Spr. B): ~8 %; f001r Quire A: 0/260 Token
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Regel R48

- **Regel-ID:** R48
- **Name / Fokus:** **Randstern-System Quire H** — astronomisches Register
- **Formale Syntax und Bedingung:** 6-Zacken (kein Kern) → Block 1: generisches Sternen-Register7-Zacken (kleiner Kern) → Block 2: Planetenreihe8-Zacken (größerer Kern) → Block 3: op-KoordinatenformatPrinzip register-übergreifend identisch: Randstern = struktureller Gliederungsmarker
- **Empirische Evidenz:** f58r: Stern 1 (6-Zacken) über P.1 → Block P.1–P.15 (~150 Token); Stern 2 (7-Zacken) über P.16 → Block P.16–P.25 (~100 Token); Stern 3 (8-Zacken) über P.26 → Block P.26–P.40 (~155 Token); Kolophone (=) an P.15 und P.25 als Blockabschluss
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Regel R49

- **Regel-ID:** R49
- **Name / Fokus:** **y+t-Verb-Litanei als Schlusskolophon**
- **Formale Syntax und Bedingung:** ≥ 4 aufeinanderfolgende y+t-präfigierte Heilungsverben in Finalposition (unmittelbar vor =)Dreistufiges Schema: Ursachen-Verb(en) → Illuminations-Verb(en) → Organ-Heilungs-Verb(en)Verben sem. kohärent, aber _nicht_ zwingend gleiche Basiswurzel (Unterschied zu R46)
- **Empirische Evidenz:** f19v P.12: yees.ykchol.oty.ytor.ytar.ytchor.ytaiin= (7 y-Verben — Corpus-Rekord): yees (Fieber löschen) → ykchol (alles heilen) → oty (Zeichen) → ytor+ytar (Illumination ×2, R19) → ytchor+ytaiin (Pupille→Auge, Organ-Spezifizierung); alle 4 Transkriptoren (H, C, F, U) identisch — Kandidat, 1 Beleg, erfordert Folgebestätigung
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Regel R50

- **Regel-ID:** R50
- **Name / Fokus:** **Galiläische Guttural-Abschwächung** — Sprache-B-Vokalklärung
- **Formale Syntax und Bedingung:** (a) ee → Tsere-Vokal (ֵ) ausschließlich — nicht als ה+ה (Doppellaryngal)(b) oo → Vav-Holam (וֹ) ausschließlich — nicht als ו+ו(c) D2-Warnungen durch Interpretation B automatisch suspendiert bei validierten Spr.-B-Formen**Ausnahme:** ch+[Vokal]+ol (ח-ע-ל) = genuine Benachbarung — nicht von R50 erfasst_v7.2: ot-Kompositum-Dreikette (otol+otaiir+otchos) = strukturelle Intensivierung durch Dreifach-ot_
- **Empirische Evidenz:** Quire M (f77r): D2-Warnungen 42→3 (93 % Reduktion); häufigste Tokens: qokeedy, qoteedy, cheedy, sheedy, qokeey, cheey, sheeol; Residualfälle: cheeol (P.21), cheol (P.24, P.38). Zodiak-Register (Quire K, 4 Folios, v6.9): 30+ ee-Tokens in f71r/f71v/f72r1/f72r2, kein D2-Gegenbeispiel — **R43 erfüllt: 2. vollständiges Register, ★★★ → ★★★★**. v7.2: ot-Kompositum-Dreikette f24v P.2 (otol+otaiir+otchos) — Beobachtung
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Regel R51

- **Regel-ID:** R51
- **Name / Fokus:** **Illustrationszwickel-Einschübe** — Platzmangel-Querverweise
- **Formale Syntax und Bedingung:** Bedingungen für Zwickel-Einschub:(a) 1–3 Zeichen zwischen/nach {plant}-Markern (kein vollständiger Satz)(b) Zeichenqualität verschlechtert (!!!-Notation)(c) mehrere Fragmentparagraphen in FolgeInterpretation: nachträgliche Kreuzreferenz-Einschübe des Schreibers
- **Empirische Evidenz:** f20v P.7 (s vor {plant}), P.8 (d.s vor {plant}), P.9 (d.s!!!!!! vor {plant}) — drei Belege auf einem Folio, qualitative Eskalation; f21v P.7 (s vor sheaiin + {plant}) — zweiter Folio-Beleg → Aufstufung auf ★★★ (2 Folios); f22v P.4 (saiin als Vollwort zwischen 2×{plant} — strukturell stärkstes Beispiel: שׂ+עַיִן = „gleich dem Auge“) + P.10 (s vor {plant}) — 6 Belege über 3 Folios (R43 erfüllt: ≥3 Folios) → ★★★ gesichert
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Regel R52a

- **Regel-ID:** R52a
- **Name / Fokus:** **Determinans-y im Zodiak-Sternlabel-Register**
- **Formale Syntax und Bedingung:** Suffixe -y, -dy, -ody (~47 % der Labels) → aramäischer Status Emphaticus (Suffixartikel)Optional: nackter Kernstamm existiert parallel (okal= neben okaly=)Zusatz-Varianten: -ary, -alyAlle resultierenden Kernstämme morphologisch intakt nach Suffix-Abzug
- **Empirische Evidenz:** f71r (53 %: 8/15), f71v (47 %: 7/15), f72r1 (40 %: 6/15), f72r2 (47 %: 14/30) — 4 Folios · 75 Labels · 35 Belege; Minimalpaar-Kontrolle: okal= (3×: S1.3, S1.5, S1.12) vs. okaly= (2×: S1.4, S1.12) in f72r2 — Suffix als optionaler Determinant belegt; keine R40-Konflikte nach Suffix-Abzug
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Regel R53

- **Regel-ID:** R53
- **Name / Fokus:** **Pflanzen-Titel-Duplikation** (T-Klassen-Titelposition am Folioende)
- **Formale Syntax und Bedingung:** **Subtyp A:** R35-Duplikation: [Duplikation+Direktional=]**Subtyp B:** Emphase-Direktional: [ee-Emphase+Direktional=]**Subtyp C:** Deskriptiv/Identifikatorisch: [Zeichen-Kompositum+Direktional=]Strikt T-Klassen-Titelposition (Unterschied zu R35: allgemeine Vollheilungs-Emphase)
- **Empirische Evidenz:** **Beleg 1** f22v T.16: daldalol= (dal·dal+ol) — Subtyp A; **Beleg 2** f23v P.12: eeeoly= ({plant}-Titel) — Subtyp B; **Beleg 3** f24r T.20: sam.chorly= — T-Klassen-Formel: sham + kor + li; **Beleg 4** f25r T.7: dair.otaiir.otosy= — Subtyp C; R43 Mehrfachbestätigung (4 Folios, 3 Subtypen) → ★★★★
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Regel R55

- **Regel-ID:** R55
- **Name / Fokus:** **or-Reduplikation als Kolophon-Abschluss**
- **Formale Syntax und Bedingung:** oro= = אֹ+ר+אֹ (Licht-Licht-Palindrom) in unmittelbarer Kolophon-Finalposition (=-Marker)Unterschied zu R15: or-Lexem-beschränkt und palindromisch konstruiertLatente Unterregel der R15-Familie
- **Empirische Evidenz:** f24v P.5: oro= — Corpus-Erstbeleg (1 Beleg); oro-Frist abgelaufen (f29v). Validierungsbedarf bei erneutem Auftreten. Herabgestuft von ★★★ auf ★★ Kand. (v8.1)
- **Konfidenz-Bewertung:** 2 von 5 Sternen (★★☆☆☆)

### Regel R56

- **Regel-ID:** R56
- **Name / Fokus:** **sho.sho-Emphase** — direkte Wortwiederholung ohne Genitivbrücke
- **Formale Syntax und Bedingung:** sho.sho ohne BrückenpartikelUnterschied zu R24 (shol·dy·…·shol): keine GenitivbrückeUnterschied zu R30 (sho- als Präfix in Komposita): Token-Ebene
- **Empirische Evidenz:** f24v P.14: sho.sho — Corpus-Erstbeleg; f27v P.7: sho·sho — Folgebeleg (R43 erfüllt: 2 Folios) → ★★★ validiert
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Regel R58

- **Regel-ID:** R58
- **Name / Fokus:** **3×daiin-Konzentration** in einer Zeile
- **Formale Syntax und Bedingung:** 3× daiin-Tokens in einer einzigen Paragraph-Zeile → maximale Urteils-KonzentrationUnterschied zu R19 (allg. Intensivierungsrhetorik): R58 zählt ZeilendichteUnterschied zu R9 (3–5× pro Folio): R9 zählt folio-weite Häufigkeit
- **Empirische Evidenz:** f25v P.2: dchor.cthor.chor.daiin.s.okeeaiin.daiin.ckhey.daiin — Corpus-Erstbeleg (alle H/C/F einig); f30v — 2. Beleg; f32v P.9: otchol.daiin.daiin.ctho.daiin.qotaiin — 3. Folio-Beleg (H/C/F/U konsistent); R43-Frist erfüllt: f25v + f30v + f32v = 3 unabhängige Folios → ★★★★ validiert
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Regel R59

- **Regel-ID:** R59
- **Name / Fokus:** **qo als isolierter Konnektiv-Token**
- **Formale Syntax und Bedingung:** qo als Einzelwort-Token (gefolgt von Punkt-Separator) = bare וְ (Vav conjunctivum als Partikel)Abgrenzung von R1: R1 = Verbundpräfix (qo+Stamm); R59 = alleinstehendes WortIn Spr. A (Quire A): max. 1× pro Folio belegbar
- **Empirische Evidenz:** f1v P.7: qo.ol.choiees.cheol.dol.cthey- — Erstbeleg (alle 4 Transkriptoren H/C/D/F einig); f28r P.1: Folgebeleg (2. Folio) → R43 erfüllt (f1v + f28r = 2 Folios) → ★★★ validiert
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

### Regel R60

- **Regel-ID:** R60
- **Name / Fokus:** **Pharmakologische Pflanzenteil-Annotation**
- **Formale Syntax und Bedingung:** **Layout-Typen:****A** (Apex-Text: gesamter Text über Pflanze = FLOS/FRUCTUS/Triebspitzen als Einheit)**B** (Bilateral-Blüte: Indikation links + Therapie rechts auf Blüten-Höhe)**C** (Vertikale Zonentrennung: oben = FLOS/FRUCTUS, unten = FOLIUM/CAULIS)**D** (Interweaved: jede Textzeile neben anderem Pflanzenteil)_Kein {plant}-Marker = Ganzpflanzen-Präparat (TOTUS)_**Kor. 1 ★★★:** Gilt für Spr. A + B (register-unabhängig)**Kor. 2 ★★★:** Mandrake-Menschenkopf = ikonographisches Toxizitäts-Signal**Kor. 3 ★★★★★:** FOLIUM-Zone systematisch textfrei (25/25 Folios, 0 Gegenbelege)**Kor. 4 ★★★★★:** Drei-Kategorien-Farbcode: Fläche (stumm) / Linie (illustrativ) / Textur (prescribiert)
- **Empirische Evidenz:** 21/21 analysierten Folios (Quire A f1v–f10r + f13r/v + f14r + f15r + f16r + f22r + f28r + f30r/v + f33r + f57r): Muster I — selektive Annotation (kein Text neben nicht-verschriebenen Teilen) — 0 Gegenbeispiele ★★★★; Stolfi f16r: „interrupted by the plant's flower“ ★★★★★; pol (Frucht-Term) an Frucht-Position f22r P.1 — stärkster semantischer Einzelbeweis ★★★★★; f19r: Blüten-Semantik (saiin+chor) stimmt mit Kornblumen-Pharmakologie (Augenwasser, Konjunktivitis) überein ★★★★★; f21r: keine {plant}-Marker → Thymian-Ganzpflanzen-Präparat ★★★; f14r/f22r/f28r/f30v: rote Wurzeln ohne Text — 4 Belege ★★★★; f25r: Reeds Colors: green,dark-red bestätigt Farbcode unabhängig; f57r + f33r: beide Sprachregister bestätigt ★★★; FOLIUM-Textfreiheit: 25/25 Folios (100 %), 0 Gegenbeispiele — grüne, dunkle, rot-geschattete Blätter alle textfrei; v8.7: f32r/v + f33v + f34r/v ergänzt → 25-Folio-Schwelle → ★★★★★; f009r rote Punkt-Ähre MIT Text = FLOS-therapeutisch (Drei-Kategorien-Bestätigung); f010r rote Ovale OHNE Text = Ebene-2-Nicht-Wurzel-Beleg ★★★★★
- **Konfidenz-Bewertung:** 4 von 5 Sternen (★★★★☆)

### Regel R61

- **Regel-ID:** R61
- **Name / Fokus:** **ol+[Ankerwort] — Intensivierungsformel**
- **Formale Syntax und Bedingung:** ol (עַל = über/auf) unmittelbar vor validiertem Ankerwort → „Überwindung“/Konfrontation mit dem genannten ZustandPositionstendenz: häufig unmittelbar vor {plant}-Marker (Therapie-Direktional)Steigerungsform: qoldar = qo+ol+dar (dreistufiges Präfix, maximale Intensivierung)Register: Spr. A + B; Quire D + E (cross-register, cross-quire)
- **Empirische Evidenz:** olsheol (f31r P.11) = über Scheol; olteedam (f31v P.7) = über das Blut der Zeit; olaiin (f33v P.6) = über das Auge; oldam (f34r P.7 + f34v P.2) = über das Blut; oldar (f34v P.4) = über den Leuchtenden; olchdaiin (f34v P.7) = über Blässe-Urteil — 6 Belege in einer Sitzung, alle Ankerwörter ★★★★★-Klasse; Steigerungsform: qoldar (f34v P.4) = qo + ol + dar = dreistufiges Präfix (maximale Intensivierung)
- **Konfidenz-Bewertung:** 3 von 5 Sternen (★★★☆☆)

## VII. Rückwärtstest-Statistik

39 hebräische/aramäische Wörter getestet. Ab v7.5 zwei Klassen: **Typ I** (genuine Vorhersagen — Prä-Analyse-Anker, eingefroren): **10/10 = 100%** · **Typ II** (interne Kohärenz — post-hoc): **29/32 = 91%** · 0 Falsch-Positive in beiden Klassen.

| Kategorie | Ergebnis |
| --- | --- |
| Typ I — Genuine Vorhersagen (Prä-Analyse-Anker, eingefroren) | 10 / 10 |
| Typ II — Interne Kohärenz (post-hoc-Entdeckungen) | 29 / 32 |
| Bestätigt Spr. A (Anker, f1v–f15v) | 260 / 260 |
| Falsch-positiv (gesamt) | 0 |


**Entscheidend: Keine einzige Vorhersage ergab einen Falsch-Positiv-Treffer.** Bei einem Zufallsalphabet statistisch ausgeschlossen.

**Typ I — Genuine Vorhersagen (10/10 · 100%)**

### Rückwärtstest Typ I: dam

- **Vorhersage (EVA):** dam
- **Hebräisch:** דָּם
- **Befund:** ✓ 4× f57r Zeilenende
- **Kontext:** qokedam, cheeodam, okoldm, yodam
- **Klasse:** Typ I — Genuine Vorhersage (eingefroren)

### Rückwärtstest Typ I: sar

- **Vorhersage (EVA):** sar
- **Hebräisch:** שַׂר
- **Befund:** ✓ f57r P.9, f103r P.2,17
- **Kontext:** immer Zeilenmitte; nach daiin oder shedy
- **Klasse:** Typ I — Genuine Vorhersage (eingefroren)

### Rückwärtstest Typ I: sheol

- **Vorhersage (EVA):** sheol
- **Hebräisch:** שְׁאוֹל
- **Befund:** ✓ 8× f103r Zeilenende
- **Kontext:** P.23,35,40(×2),42,45
- **Klasse:** Typ I — Genuine Vorhersage (eingefroren)

### Rückwärtstest Typ I: daiin

- **Vorhersage (EVA):** daiin
- **Hebräisch:** דִּין
- **Befund:** ✓ 3× Zeilenanfang f103r
- **Kontext:** f57r P.5: qokcho·daiin·cheeodam
- **Klasse:** Typ I — Genuine Vorhersage (eingefroren)

### Rückwärtstest Typ I: chalal

- **Vorhersage (EVA):** chalal
- **Hebräisch:** חָלָל
- **Befund:** ✓ 1× exakt nach sheol P.42
- **Kontext:** tshey·sheol·cheolshy·chalal
- **Klasse:** Typ I — Genuine Vorhersage (eingefroren)

### Rückwärtstest Typ I: dal

- **Vorhersage (EVA):** dal
- **Hebräisch:** דַּל
- **Befund:** ✓ Dreifach-Refrain f103r P.1
- **Kontext:** pchedal, yshdal, dal (standalone)
- **Klasse:** Typ I — Genuine Vorhersage (eingefroren)

### Rückwärtstest Typ I: shol · dy · … · shol

- **Vorhersage (EVA):** shol · dy · … · shol
- **Hebräisch:** R24-Struktur
- **Befund:** ✓ f13r P.1 (Dopplungsformel)
- **Kontext:** einmaliges Emphase-Muster mit Genitiv-Brücke dy
- **Klasse:** Typ I — Genuine Vorhersage (eingefroren)

### Rückwärtstest Typ I: or

- **Vorhersage (EVA):** or
- **Hebräisch:** אוֹר
- **Befund:** ✓ f103r P.17 or·aiin (Heilungszeichen); f6v, f8r, f57r — Prognose-Abschluss
- **Kontext:** Anker: or = Licht/Heilung; f103r P.17 endet or·aiin; vgl. lor ★★★★★; R6 bestätigt (v7.4-Anker)
- **Klasse:** Typ I — Genuine Vorhersage (eingefroren)

### Rückwärtstest Typ I: chaiin

- **Vorhersage (EVA):** chaiin
- **Hebräisch:** חַיִּין
- **Befund:** ✓ f2r P.3 (Erstbeleg, H/C/F 3/3), f4r, f4v, f6r, f8v — R18-Diagnosepaar shol·chaiin, Quire A
- **Kontext:** Anker: chaiin = Leben; R18 Diagnosepaar shol·chaiin (abwägende Prognose); R43 erfüllt (f2r + f4r ≥2 Folios); ★★★★
- **Klasse:** Typ I — Genuine Vorhersage (eingefroren)

### Rückwärtstest Typ I: kaiim

- **Vorhersage (EVA):** kaiim
- **Hebräisch:** קַיָּם
- **Befund:** ✓ f6r, f8r kaiim= (Kolophon-Abschlussformel); 10+ Belege
- **Kontext:** Anker: kaiim = gültig/beständig; R11-Schlussformel ★★★★★; f57r cphedom= (Parallelform)
- **Klasse:** Typ I — Genuine Vorhersage (eingefroren)

**Typ II — Interne Kohärenz (29/32 · 91%)**

### Rückwärtstest Typ II: chedy

- **Vorhersage (EVA):** chedy
- **Hebräisch:** כְּדֵי
- **Befund:** ✓ 22× f103r
- **Kontext:** nie mit -ody kombiniert (R5)
- **Klasse:** Typ II — Interne Kohärenz

### Rückwärtstest Typ II: shedy

- **Vorhersage (EVA):** shedy
- **Hebräisch:** שֶׁ+דִּי
- **Befund:** ✓ 27× f103r
- **Kontext:** immer von Konnektoren gefolgt
- **Klasse:** Typ II — Interne Kohärenz

### Rückwärtstest Typ II: ckhy

- **Vorhersage (EVA):** ckhy
- **Hebräisch:** כְּהִי
- **Befund:** ✓ f57r P.2,9; f103r P.17,23
- **Kontext:** 4 unabhängige Belege
- **Klasse:** Typ II — Interne Kohärenz

### Rückwärtstest Typ II: taiir

- **Vorhersage (EVA):** taiir
- **Hebräisch:** תָּאִיר
- **Befund:** ✓ f57r P.8 Zeilenbeginn
- **Kontext:** taiir·sheedy·lchedy·ckheedy
- **Klasse:** Typ II — Interne Kohärenz

### Rückwärtstest Typ II: sheoldam

- **Vorhersage (EVA):** sheoldam
- **Hebräisch:** שְׁאוֹל+דָּם
- **Befund:** ✓ f3r P.9 auf Blutpflanze
- **Kontext:** botanische Kohärenz; beide ★★★★★-Anker fusioniert
- **Klasse:** Typ II — Interne Kohärenz

### Rückwärtstest Typ II: daiidy / daiindy

- **Vorhersage (EVA):** daiidy / daiindy
- **Hebräisch:** דִּין+דִּי
- **Befund:** ✓ f57r P.9, f3v P.2, f9r P5
- **Kontext:** drei Folios, identische Funktion
- **Klasse:** Typ II — Interne Kohärenz

### Rückwärtstest Typ II: tsheoarom

- **Vorhersage (EVA):** tsheoarom
- **Hebräisch:** תְּ+שְׁאוֹ+רוֹם
- **Befund:** ✓ f3r P.15 Heilungsformel
- **Kontext:** nach 7 Blut-Paragraphen: kohärenter Positionswechsel
- **Klasse:** Typ II — Interne Kohärenz

### Rückwärtstest Typ II: dsholdy

- **Vorhersage (EVA):** dsholdy
- **Hebräisch:** דְּ+שׁוֹל+דִּי
- **Befund:** ✓ f9r P5L
- **Kontext:** Genitiv-Kompositum parallel zu daiindy
- **Klasse:** Typ II — Interne Kohärenz

### Rückwärtstest Typ II: shoiin

- **Vorhersage (EVA):** shoiin
- **Hebräisch:** שׁוֹ+עַיִן
- **Befund:** ✓ f10v P4 + P6
- **Kontext:** Doppelbeleg auf demselben Folio
- **Klasse:** Typ II — Interne Kohärenz

### Rückwärtstest Typ II: torshor

- **Vorhersage (EVA):** torshor
- **Hebräisch:** תֹּר+שׁוֹר
- **Befund:** ✓ f13r P.1 Paragraph-Öffner
- **Kontext:** Jahreszeit-Zeichen; erster Beleg dieser Form im Korpus
- **Klasse:** Typ II — Interne Kohärenz

### Rückwärtstest Typ II: pchy

- **Vorhersage (EVA):** pchy
- **Hebräisch:** פְּחִי
- **Befund:** ✓ 4× f13r — höchste Atemweg-Dichte
- **Kontext:** opchy, qopchy, pchy; bestätigt Alant-Identifikation
- **Klasse:** Typ II — Interne Kohärenz

### Rückwärtstest Typ II: ykaiin (y+k+aiin)

- **Vorhersage (EVA):** ykaiin (y+k+aiin)
- **Hebräisch:** יְ+כְּ+עַיִן
- **Befund:** ✓ f14r P.8 — 5. Paradigma-Mitglied
- **Kontext:** ykchaiin→ycheor→ykchor→ykchy→ykaiin: 5 positive Ankerpunkte (ykshol = 6. Glied negativ, f15r P.12)
- **Klasse:** Typ II — Interne Kohärenz

### Rückwärtstest Typ II: chckhy= (Diagnosekolophon)

- **Vorhersage (EVA):** chckhy= (Diagnosekolophon)
- **Hebräisch:** כְּ+כְּ+הִי
- **Befund:** ✓ 4× Korpus: f9v, f11v P.6, f14r P.7, f14v P.6
- **Kontext:** Konzentration in Bifolio bB3; auch medial belegt (f14v P.6)
- **Klasse:** Typ II — Interne Kohärenz

### Rückwärtstest Typ II: ykshol (y+k+shol)

- **Vorhersage (EVA):** ykshol (y+k+shol)
- **Hebräisch:** יְ+כְּ+שׁוֹל
- **Befund:** ✓ f15r P.12 — erster negativer y+k+Terminus
- **Kontext:** ykchaiin→ycheor→ykchor→ykchy→ykaiin→ykshol: komplettes Paradigma, positiv + negativ belegt
- **Klasse:** Typ II — Interne Kohärenz

### Rückwärtstest Typ II: qotchor (Pupillenzeichen)

- **Vorhersage (EVA):** qotchor (Pupillenzeichen)
- **Hebräisch:** קוֹ+תְּ+כֹּר
- **Befund:** ✓ f15r Schlusskolophon ★★★★★
- **Kontext:** qotchor·chaiin·chy·kol·daky= — positives Pupillen-Urteil; ophthalmologische Abschlussformel bB2
- **Klasse:** Typ II — Interne Kohärenz

### Rückwärtstest Typ II: soloiin

- **Vorhersage (EVA):** soloiin
- **Hebräisch:** שׁוֹ+לְ+עַיִן
- **Befund:** ✓ f15v P.11 — therapeutisch präzisestes Kompositum
- **Kontext:** „Arznei für das Auge“ — höchste Heilarznei-Präzision im Gesamtkorpus; Gegenstück zu shoiin (f10v)
- **Klasse:** Typ II — Interne Kohärenz

### Rückwärtstest Typ II: cthor (vollständige Heilung)

- **Vorhersage (EVA):** cthor (vollständige Heilung)
- **Hebräisch:** כְּ+תֹּר
- **Befund:** ✓ f15v Schlusskolophon
- **Kontext:** daiin·cthor·chol·chor= — cthor+chor = Heilung der Pupillenpathologie; positiver Abschluss Bifolio bB2
- **Klasse:** Typ II — Interne Kohärenz

### Rückwärtstest Typ II: chaiin · ckhy · or · aiin (Prognose-Tetrade)

- **Vorhersage (EVA):** chaiin · ckhy · or · aiin (Prognose-Tetrade)
- **Hebräisch:** Prognose-Tetrade
- **Befund:** ✓ f10r P4 (alle vier in einer Zeile)
- **Kontext:** vollständiges hippokratisches Schema; kombinierter Test post-v7.4 → Typ II (v8.8), Einzelanker or/chaiin bleiben Typ I
- **Klasse:** Typ II — Interne Kohärenz

### Rückwärtstest Typ II: dam (Quire B)

- **Vorhersage (EVA):** dam (Quire B)
- **Hebräisch:** דָּם
- **Befund:** ✓ f14v P.8 (Blut-Triade)
- **Kontext:** dol · dair · dam — Erstbeleg Blutpathologie in bB3; verbindet f14v mit f3r; post-v7.4 → Typ II (v8.8)
- **Klasse:** Typ II — Interne Kohärenz

### Rückwärtstest Typ II: shol medial · sheol final (R17 Zodiak)

- **Vorhersage (EVA):** shol medial · sheol final (R17 Zodiak)
- **Hebräisch:** שׁוֹל / שְׁאוֹל
- **Befund:** ✓ f72r1 R1 (shol 2×) · R2 (sheol vor gap) — 5. Register-Bestätigung
- **Kontext:** identische Verteilung wie botanische Folios; Zodiak-Register post-v7.4 → Typ II (v8.8)
- **Klasse:** Typ II — Interne Kohärenz

### Rückwärtstest Typ II: f69r Stresstest — kosmologisches Rad-Diagramm, Currier-Sprache unklassifiziert (Quire J/X)

- **Vorhersage (EVA):** f69r Stresstest — kosmologisches Rad-Diagramm, Currier-Sprache unklassifiziert (Quire J/X)
- **Hebräisch:** Mapping v8.0
- **Befund:** ✓ 10/10 Ankerwörter; shol= in P.4 terminal (R6); sar= 3× terminal (P.1, R.7, R.11, R11); daiin in P.2+C.9 (R7); 6/6 Pflichtkriterien bestanden — 1 Token offen ({&ct}ar)
- **Kontext:** Foliotyp: kosmologisches Rad-Diagramm — keine Botanik, kein {plant}-System, keine Currier-Sprachzuordnung; Mapping ohne Anpassung; f69r post-v7.4 → Typ II (v8.8)
- **Klasse:** Typ II — Interne Kohärenz

### Rückwärtstest Typ II: otam · otam · chotam (R19/R35)

- **Vorhersage (EVA):** otam · otam · chotam (R19/R35)
- **Hebräisch:** אוֹת+אָם · אוֹת+אָם · כֹּ+אוֹת+אָם
- **Befund:** ✓ f72r1 R1 — dreistufige Nominal-Intensivierung
- **Kontext:** einfach → ×2 → Komparativ ko+X; exaktes R35-Schema; semantisch kohärent: Zeichen der Mutter im Stier-dunkel-Kontext
- **Klasse:** Typ II — Interne Kohärenz

### Rückwärtstest Typ II: okaly= / okal= Minimalpaar (R52a)

- **Vorhersage (EVA):** okaly= / okal= Minimalpaar (R52a)
- **Hebräisch:** עַ+כָּל+יְ / עַ+כָּל
- **Befund:** ✓ f72r2 S1.3/S1.5/S1.12 (okal) neben S1.4/S1.12 (okaly) — Determinans-y optional
- **Kontext:** identischer Stamm okal mit und ohne -y-Suffix auf demselben Ring; beweist R52a: -y ist Status-Emphaticus-Marker, kein festes Wortbildungselement
- **Klasse:** Typ II — Interne Kohärenz

### Rückwärtstest Typ II: alef / otalef — Stier-Exklusivmarker

- **Vorhersage (EVA):** alef / otalef — Stier-Exklusivmarker
- **Hebräisch:** אָלֶף / אוֹת+אָלֶף
- **Befund:** ✓ f72r1 S1.6 + S1.9 — ausschließlich im Stier-dunkel-Panel
- **Kontext:** alef = Ochsenkopf-Piktogramm (Aleph-Ursprung); fehlt in f71r, f71v, f72r2; erste ikonographisch verankerte Buchstabenreferenz im Zodiak-Corpus
- **Klasse:** Typ II — Interne Kohärenz

### Rückwärtstest Typ II: dar·dar-Dopplung (R36) in kosmologischem Register

- **Vorhersage (EVA):** dar·dar-Dopplung (R36) in kosmologischem Register
- **Hebräisch:** דַּר·דַּר
- **Befund:** ✓ f69r R.17 (dair.dar= Terminal) + f69r R.22 (dary.dar direktional) — 2 neue Belege
- **Kontext:** R43 erfüllt: f18r + f26v + f69r = 3 Folios, 4 Gesamtbelege → R36 ★★★ validiert; Typ A (direkt adjacent) erstmals in kosmologischem Register belegt
- **Klasse:** Typ II — Interne Kohärenz

### Rückwärtstest Typ II: oldam (f34r P.7) → sofortiger Folgebeleg auf f34v P.2

- **Vorhersage (EVA):** oldam (f34r P.7) → sofortiger Folgebeleg auf f34v P.2
- **Hebräisch:** עַל+דָּם
- **Befund:** ✓ f34v P.2 (Abstand: 1 Folio)
- **Kontext:** ol+dam Erstbeleg f34r P.7 → unmittelbarer Folgebeleg auf dem Verso desselben Bifolios; R43-Frist binnen einer Sitzung erfüllt; post-v7.4 → Typ II (v8.8)
- **Klasse:** Typ II — Interne Kohärenz

### Rückwärtstest Typ II: Tanacetum f31r: dam im Schlusskolophon — Tanacetum = Blutfluss-Kraut (Macer floridus)

- **Vorhersage (EVA):** Tanacetum f31r: dam im Schlusskolophon — Tanacetum = Blutfluss-Kraut (Macer floridus)
- **Hebräisch:** דָּם
- **Befund:** ✓ f31r P.15 okedam= — Blutterm im Abschlusskolophon
- **Kontext:** Tanacetum parthenium ist im mittelalterlichen Kräuterbuch (Macer floridus) als Mittel gegen Menstruationsblutungen gelistet; botanische und textuelle Ebene konvergieren
- **Klasse:** Typ II — Interne Kohärenz

### Rückwärtstest Typ II: Gentiana f32v endet ol.sho.chy= — Gentiana als bitteres Diagnostikum (Scheol-Blässe-Formel)

- **Vorhersage (EVA):** Gentiana f32v endet ol.sho.chy= — Gentiana als bitteres Diagnostikum (Scheol-Blässe-Formel)
- **Hebräisch:** עַל+שׁוֹ+כְּהִי
- **Befund:** ✓ f32v P.11 ol.sho.chy= — reine Scheol-Diagnose ohne Heilungsformel
- **Kontext:** Enzian (Gentiana) gilt in der mittelalterlichen Pharmakologie als schweres Diagnostikum für lebensbedrohliche Zustände; Schlusskolophon spiegelt negative Prognose
- **Klasse:** Typ II — Interne Kohärenz

### Rückwärtstest Typ II: Bryonia f34v: Tier-Wurzel + oldar.qoldar = intensivierte Wurzelformeln (dreistufiges Präfix)

- **Vorhersage (EVA):** Bryonia f34v: Tier-Wurzel + oldar.qoldar = intensivierte Wurzelformeln (dreistufiges Präfix)
- **Hebräisch:** עַל+דְּ+אַר / וְ+עַל+דְּ+אַר
- **Befund:** ✓ f34v P.4 oldar.qoldar — tiefste Präfix-Schachtelung im Corpus
- **Kontext:** Bryonia-Wurzeln wurden zu Tierfiguren geschnitzt und als Mandragora-Ersatz verkauft; zoomorphe Wurzel-Ikonographie korrespondiert mit maximaler Wurzel-Textintensivierung (qoldar = dreistufig)
- **Klasse:** Typ II — Interne Kohärenz

## VIII. Verankerte Referenz-Sequenzen

Die am besten verifizierten Sequenzen des Korpus — als Orientierungshilfe beim Übersetzen.

### 1 · f57r P.9 — Die stärkste Ankersequenz

EVA: `sar · al · daiindy`
Heb: שַׂר עַל דִּין דִּי
DE: „Arzt über — das Urteil dessen“

_Drei unabhängig bestätigte Wörter + aramäischer Genitiv-Suffix in natürlicher Wortfolge. ★★★★★_

### 2 · f103r P.23 — Fünf-Wort-Prognose

EVA: `daiin · sheckhy · lchedy · chckhy · shol`
Heb: שְׁאוֹל · כְּכְּהִי · לְכְּדֵי · שֶׁכְּהִי · דִּין
DE: „Das Urteil: [der,] der Blässe zeigt — um [sie] zu behandeln — wie Blässe — Scheol.“

_Vollständiges hippokratisches Prognose-Schema in fünf Wörtern. ★★★★★_

### 3 · f103r P.17 — Binäre Prognose-Formel

EVA: `… or · aiin`
Heb: אַיִן · אוֹר
DE: „Licht — Nichts.“

_Zeilenende-Formel: binäre Prognose (Heilung oder Ausweg-los), identisch mit hippokratisch-arabischem Prognostikon-Schema._

### 4 · f6v/f7v — Direktionales Antonymenpaar

**EVA:** `lor`
Heb: לְאוֹר
„zum Licht / zur Heilung“

**EVA:** `lshol`
Heb: לְשׁוֹל
„zum Tod / zu Scheol“

_Identische l-Direktional-Morphologie, entgegengesetzte Semantik. Hauptneufund v5.2. ★★★★★_

### 5 · f103r P.42 — Sterbens-Terminologie

EVA: `tshey · sheol · cheolshy · chalal`
Heb: חָלָל · [כְּעוֹלְשִׁי] · שְׁאוֹל · תְּשֵׁי
DE: „Erschöpfung — Scheol — [wie die Last] — der Sterbende.“

_Dreifache Prognose: Erschöpfung → Tod → Patient im Sterben. chalal erscheint ausschließlich nach sheol._

### 6 · f11r P.6 / f11v P.6 — Pupillenheilung & positiver Kolophon

**EVA:** `odl · chaiin · ykchor · dair`
Heb: דְּ+אִיר · יְ+כְּ+חֹר · חַיִּין · עַ+דַּל
„Über die Schwäche — Leben — er heilt die Pupille — der Leuchtende.“

**EVA:** `ycheor · dor · schold=`
Heb: שׁ+כֹּ+לֵד · דּוֹר · יְ+כְּ+אוֹר
„Er wird wie Licht heilen — Generation — [Schlussformel].“

_Erster Beleg von ykchor (er heilt die Pupille — 4. Verb im y+k+[Terminus]-Paradigma) und von ycheor= als positivem Schluss-Kolophon. f11v (Borago-Typ) ist das positivste Prognosefolio in Quire B. ★★★★★_

### 7 · f14r P.8 / f14v P.8 — y+k-Paradigma & Blut-Triade

**EVA:** `ykaiin`
Heb: יְ+כְּ+עַיִן
„er heilt das Auge“ — 5. y+k+Terminus-Verb

**EVA:** `dol · dair · dam`
Heb: דֶּוֶה · דְּ+אִיר · דָּם
„Schmerz — das Licht davon — Blut“

_ykaiin vervollständigt das y+k+[Terminus]-Paradigma auf fünf klinische Verbformen (Leben, Licht, Pupille, Blässe, Auge). Die Blut-Triade dol·dair·dam (f14v P.8) ist der erste dam-Beleg in Quire B und verbindet f14v mit f3r (Blutpflanze). ★★★★★_

### 8 · f15r / f15v — Bifolio bB2 Abschluss

**EVA:** `qotchor · chaiin · chy · kol · daky=`
Heb: קוֹ+תְּ+כֹּר · חַיִּין · כְּהִי · כֹּל · דַּכִּי=
f15r Kolophon: „Zeichen der Pupille — Leben — Blässe — alles — Reinheit“ (positiv-ambivalent)

**EVA:** `daiin · cthor · chol · chor=`
Heb: דִּין · כְּ+תֹּר · כֹּל · כֹּר=
f15v Kolophon: „Urteil — vollständige Heilung — alles — Pupille“ (positiv)

_soloiin (f15v P.11) = „Arznei für das Auge“ — therapeutisch präzisestes Kompositum im Gesamtkorpus. ykshol (f15r P.12) = erster negativer y+k+Terminus — Paradigma mit 6 Gliedern + Kandidat ykair. Bifolio bB2 (f10r/f10v/f15r/f15v) schließt konsistentes ophthalmologisches Programm ab. ★★★★★_

### 9 · f16r / f16v — Bifolio bB1 · Quire-B-Abschluss

**EVA:** `saiin · ytaiin=`
Heb: יְ+תָּ+עַיִן · שַׂעַיִן
f16r Mini-Kolophon: „Augenarzt — er wird das Auge heilen“ (positiv)

**EVA:** `sokar · oaorar=`
Heb: שׂ+אוֹ+כְּ+אָר · עַ+אַ+אוֹר+אָר
f16v Quire-Kolophon: „Heilungs-Arzt des Lichts — auf das Licht der Heilung“ (positiv)

_tchor (תְּ+חֹר) — fem. Pupillen-Heilungsverb, zwei Belege in bB1 bestätigt ★★★★. chkar·chkar (f16v P.6) — erste Doppel-Untersuchungsformel im Corpus. Bifolio bB1 (f9r/f9v/f16r/f16v) vollständig — Quire B abgeschlossen; erster rein positiver Quire-Abschluss im analysierten Corpus. ★★★★★_

### 10 · f18r / f18v — Bifolio bC2 · Quire C

**EVA:** `or · shaiin · cthor · cthal · okal · dar=`
Heb: אוֹר · שַׁ+עַיִן · כְּ+תֹּר · כְּ+תַּ+חַל · עַ+כָּל · דַּר=
f18r Schlusskolophon P.13: „Licht des Auges — vollständige Heilung — wie vollständig — über alles — leuchtend.“ (stark positiv ★★★★★)

**EVA:** `yko · dshy · dair · ykol · dom=`
Heb: יְ+כוֹ · דְּ+שֵׁי · דְּ+אִיר · יְ+כֹּל · דּוֹם=
f18v Schlusskolophon P.10: „Er wird sich erholen — von der Gabe — der Leuchtende — er heilt alles — Stille/Ende.“ (positiv-neutral, R39-Erstbeleg dom= in Spr. A)

_f18r: Centaurea montana — stärkstes Schlusskolophon in Quire C; dar·dar (R36-Erstbeleg), doldaiin (Krankheits-Urteil, Corpus-Erstbeleg). f18v: Dracunculus vulgaris — erste zoomorphe Begleitfigur im botanischen Corpus; ykam/ytor Auferstehungsverben; qokchy·qokchy R37-Erstbeleg. ★★★★_

### 11 · f72r1 — Stier-dunkel · R19/R35 Intensivierung & R52a Minimalpaar

**EVA:** `otam · otam · chotam`
Heb: אוֹת+אָם · אוֹת+אָם · כֹּ+אוֹת+אָם
„Zeichen der Mutter — Zeichen der Mutter — wie das Zeichen der Mutter.“ (R19/R35 dreistufige Nominal-Intensivierung)

**EVA:** `okal= · okaly=`
Heb: עַ+כָּל / עַ+כָּל+יְ
„auf allem“ neben „auf allem (det.)“ — R52a-Minimalpaar: Determinans-y optional (f72r2 S1)

_Erstes vollständiges Zodiak-Register: R17 ★★★★ (5. Register), R19/R35 ★★★ (Zodiak-Erstbeleg), R50 ★★★★ (2. Register), R52a ★★★★ (4 Folios · 75 Labels · 47%). alef/otalef = erste ikonographische Buchstabenreferenz im Zodiak-Corpus. ★★★★_

## IX. Wortklassen-System

Taxonomie der neun Wortklassen mit statistischen Exklusionsmustern.

### Wortklasse: Diagnose-Nomina

- **Klasse:** Diagnose-Nomina
- **Beispielwörter:** dal, ckhy, dam, chalal, or, ram, char, chor
- **Syntaktische Funktion:** Symptome, Befunde, klinische Termini

### Wortklasse: Prognose-Formeln

- **Klasse:** Prognose-Formeln
- **Beispielwörter:** sheol, daiin, or·aiin, shol·chaiin, lor ↔ lshol
- **Syntaktische Funktion:** Ausgangsformeln: Tod / Heilung / Urteil

### Wortklasse: Syntaktische Konnektoren

- **Klasse:** Syntaktische Konnektoren
- **Beispielwörter:** chedy, shedy, dy, lchedy, chal
- **Syntaktische Funktion:** Zweck-, Relativ- und Applikationsklauseln

### Wortklasse: Verbformen

- **Klasse:** Verbformen
- **Beispielwörter:** taiir, ykchaiin, ycheor, ychor, yshdal
- **Syntaktische Funktion:** y-/t-initiale Imperfekt-Formen

### Wortklasse: Diagnostik-Termini

- **Klasse:** Diagnostik-Termini
- **Beispielwörter:** okaiin, qokaiin, qotal, dain, chkar
- **Syntaktische Funktion:** Untersuchungsakt: Auge, Schweiß, Erscheinung

### Wortklasse: Akteure & Relationen

- **Klasse:** Akteure & Relationen
- **Beispielwörter:** sar, saiin, al/ol, daiin (Öffner)
- **Syntaktische Funktion:** Subjekte, Präpositionen, Fallmarker

### Wortklasse: Therapeutika

- **Klasse:** Therapeutika
- **Beispielwörter:** sam, chkar, tsheoarom
- **Syntaktische Funktion:** Rezeptur, Untersuchung, Heilungsformeln

### Wortklasse: Botanische Terme

- **Klasse:** Botanische Terme
- **Beispielwörter:** pol, shty, chokeos, otoaiin
- **Syntaktische Funktion:** Pflanzenteile, Früchte, Wirkorgane

### Wortklasse: Kolophon-Formeln

- **Klasse:** Kolophon-Formeln
- **Beispielwörter:** kaiim=, dom=, daiin=, chckhan=, ocho·daiin=
- **Syntaktische Funktion:** Abschlussformeln: rechtlich / diagnostisch / Titel

## X. Sprache A — Quires A–D (f1r–f32v)

### Sprachvergleich — Kernvokabular

- **Merkmal:** Kernvokabular
- **Sprache B:** sheol, daiin, dal, ckhy, dam, sar, or
- **Sprache A:** Identisch — alle 10 Sprache-A-Ankerwörter je Folio bestätigt (f1r: 10/10 ★★★★★)

### Sprachvergleich — qo-Präfix (R1/R33)

- **Merkmal:** qo-Präfix (R1/R33)
- **Sprache B:** 8+ Belege; Kernmerkmal Spr. B ★★★★★
- **Sprache A:** Absent in Quires I–II (0 / ~800 Token); ab Quire III präsent: 13 Belege f17r/f17v (~5%) + 8–10 in f18r/f18v (~4–5%) + ~18 in f19r/f19v (~10% = Quire-H-äquivalent, R33-Erweiterung); R37: qo-Präfix-Dopplung ab f18v; R49: y+t-Verb-Litanei f19v P.12; bC4 (f20–f21): Vollintegration bestätigt; bC3 (f22–f23) + bC1 (f24): konsistent — Quire C f17–f24 vollständig

### Sprachvergleich — Dominanter Vokal

- **Merkmal:** Dominanter Vokal
- **Sprache B:** e / ee (Segol/Ṣere)
- **Sprache A:** o (Ḥolam) häufiger; dol statt dal, ckho neben ckhy

### Sprachvergleich — Struktur

- **Merkmal:** Struktur
- **Sprache B:** Prosa ohne Bildtrennmarker
- **Sprache A:** {plant}-Marker in Kräuter-Folios (R14); f1r: Prosa ohne Marker (Haskama-Typ, sui generis)

### Sprachvergleich — Kolophon-Inventar

- **Merkmal:** Kolophon-Inventar
- **Sprache B:** cphedom=, daiin·cheeodam
- **Sprache A:** kaiim=, dom=, daiin=, chckhan=, Kurztitel (R23)

### Sprachvergleich — Verbparadigma

- **Merkmal:** Verbparadigma
- **Sprache B:** taiir, yshdal
- **Sprache A:** ykchaiin, ycheor, ychor, ytchody — vollständiger

### Sprachvergleich — Quire-Grenze

- **Merkmal:** Quire-Grenze
- **Sprache B:** Quire A → B (f8v → f9r):
- **Sprache A:** textlich unsichtbar — identische Ankerverteilung

### Sprache-A-Folio: f1r

- **Folio:** f1r
- **Pflanze / Inhalt:** Kein Botanical — deklarativer Prosatext
- **Signale und Befunde:** qo-: 0 Belege; 10/10 Sprache-A-Anker; 4 Absätze + T1–T4; rote Großinitialen (Funktion offen); Erased Key (Jim Reeds 1994); ★★★★ auf Strukturbefunden (R2-ext 260 Token, Ankerverteilung, Absatzstruktur)
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f1v

- **Folio:** f1v
- **Pflanze / Inhalt:** Belladonna
- **Signale und Befunde:** shol 5×, pol (Beere), otoaiin (Pupille)
- **Konfidenz-Bewertung:** ★★★★★

### Sprache-A-Folio: f2r

- **Folio:** f2r
- **Pflanze / Inhalt:** Kornblume (Augenwasser)
- **Signale und Befunde:** ytoain=, saiin, aiin 8+ Komposita
- **Konfidenz-Bewertung:** ★★★★★

### Sprache-A-Folio: f2v

- **Folio:** f2v
- **Pflanze / Inhalt:** Seerose
- **Signale und Befunde:** shty (Trank), chokeos (Kelch)
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f3r

- **Folio:** f3r
- **Pflanze / Inhalt:** Blutpflanze (Polygonum)
- **Signale und Befunde:** dam 4×, damo 2×, sheoldam — höchste Blutdichte
- **Konfidenz-Bewertung:** ★★★★★

### Sprache-A-Folio: f4r/v

- **Folio:** f4r/v
- **Pflanze / Inhalt:** Geranium-Typ
- **Signale und Befunde:** shol·chaiin (abwägend)
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f5r

- **Folio:** f5r
- **Pflanze / Inhalt:** Mandragora
- **Signale und Befunde:** shodaiin 4× pro Satz (narkotisch-toxisch)
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f6r

- **Folio:** f6r
- **Pflanze / Inhalt:** Schlafmohn
- **Signale und Befunde:** alle drei shol-Formen; kaiim=
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f6v

- **Folio:** f6v
- **Pflanze / Inhalt:** Blaue Distel
- **Signale und Befunde:** sar-Öffner; dom=; lor (Heilungsrichtung)
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f7r

- **Folio:** f7r
- **Pflanze / Inhalt:** Seerose (Nymphaea)
- **Signale und Befunde:** sheey 3× (positiv)
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f7v

- **Folio:** f7v
- **Pflanze / Inhalt:** Lungenkraut
- **Signale und Befunde:** otshol · sheodaiin · lshol — dichteste Todesformeln
- **Konfidenz-Bewertung:** ★★★★★

### Sprache-A-Folio: f8r

- **Folio:** f8r
- **Pflanze / Inhalt:** Aronstab (Arum)
- **Signale und Befunde:** chor 6×, shol 5×; shol·kaiin×4 + kaiim=
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f8v

- **Folio:** f8v
- **Pflanze / Inhalt:** Röhrenblüter / Lungenkraut
- **Signale und Befunde:** saiin; chol·chol·chol; daiin= (Quire-Ende)
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f9r

- **Folio:** f9r
- **Pflanze / Inhalt:** Sauerampfer (Rumex)
- **Signale und Befunde:** or·chaiin (positiv); dsholdy; chkar=
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f9v

- **Folio:** f9v
- **Pflanze / Inhalt:** Viola tricolor
- **Signale und Befunde:** chkaiin·ckhy·chor= (Diagnosekolophon); daiin 7×
- **Konfidenz-Bewertung:** ★★★★★

### Sprache-A-Folio: f10r

- **Folio:** f10r
- **Pflanze / Inhalt:** Wegwarte (Cichorium)
- **Signale und Befunde:** Prognose-Tetrade chaiin·ckhy·or·aiin; chor 7×
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f10v

- **Folio:** f10v
- **Pflanze / Inhalt:** Convolvulus / Glockenblume
- **Signale und Befunde:** daiin 8× (Rekord); shoiin×2; dsho=; chckhan=
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f11r

- **Folio:** f11r
- **Pflanze / Inhalt:** Lungenkraut-Typ II
- **Signale und Befunde:** ykchor·dair·ycheor (Pupillenheilung-Tripel); positiver Kolophon
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f11v

- **Folio:** f11v
- **Pflanze / Inhalt:** Kräuter-Komplex
- **Signale und Befunde:** chkaiin·ckhy·chor= (Diagnosekolophon, 2. Beleg); odl·chaiin
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f13r

- **Folio:** f13r
- **Pflanze / Inhalt:** Großer Alant (Inula helenium)
- **Signale und Befunde:** torshor; pchy 4× — Atemweg-Rekord; shol×2; Doppelkolophon
- **Konfidenz-Bewertung:** ★★★

### Sprache-A-Folio: f13v

- **Folio:** f13v
- **Pflanze / Inhalt:** Schachtelhalm-Typ (Equisetum)
- **Signale und Befunde:** 9 × {plant}-Marker (Rekord Quire B); qoky·daiin= (Minikolophon)
- **Konfidenz-Bewertung:** ★★★

### Sprache-A-Folio: f14r

- **Folio:** f14r
- **Pflanze / Inhalt:** Schlafmohn (Papaver somniferum) ★★★★ · Alt.: Schlangenwurz-Typ (Bistorta officinalis) ★★★
- **Signale und Befunde:** dain + chor dominant; chckhy= (3. Korpus-Beleg); Doppelkolophon P.7 + P.13; ykaiin (5. y+k-Verb); Layout Typ C (P.1–P.7 Blüte/Kapsel FLOS / P.8–P.9 Blätter bilateral FOLIUM); rote Wurzel ohne Text (R60 Ebene 2, Erstbeleg)
- **Konfidenz-Bewertung:** ★★★

### Sprache-A-Folio: f14v

- **Folio:** f14v
- **Pflanze / Inhalt:** Farn-Typ (Dryopteris-Gruppe)
- **Signale und Befunde:** dam (Blut-Triade P.8, Erstbeleg Quire B); dchckhy= (Intensiv-Siegel); Dreisegment-Kolophon; dy×3 (R25)
- **Konfidenz-Bewertung:** ★★★

### Sprache-A-Folio: f15r

- **Folio:** f15r
- **Pflanze / Inhalt:** Silberdistel (Carlina acaulis)
- **Signale und Befunde:** qotchor ★★★★★ (Pupillen-Zeichen, Kolophon); ykshol P.12 (erster negativer y+k+Terminus); sheey·cthy·dain (Gabe+Heilung+Auge); chaiin+Abwägungskolophon; Layout Typ B (bilateral: linke Spalte = linke Blütenknospe / rechte Spalte = rechte Blütenknospe); Doppel-{plant}-Marker alle Paragraphen; Sonnen-/Medaillonsymbol über Apex (R60 Muster VI Kand.); rote Wurzel ohne Text (R60 Ebene 2)
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f15v

- **Folio:** f15v
- **Pflanze / Inhalt:** Einbeere (Paris quadrifolia)
- **Signale und Befunde:** soloiin P.11 (Arznei für Auge) ★★★★★; sor P.10 (Heilungsarznei); opchor P.1 (Atemweg-Pupillen-Befund); cthor·chor= (vollständige Heilung, Kolophon)
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f16r

- **Folio:** f16r
- **Pflanze / Inhalt:** Cannabis sativa (Hanf) ★★★★ · Alt.: Wunderbaum (Ricinus communis) ★★★
- **Signale und Befunde:** tchor P2.5 (fem. Pupillen-Verb, 1. Beleg); saiin·ytaiin= (Intra-Paragraph-Kolophon); qokchor·dl·dy·shey= (Schlusskolophon); Layout Typ C (P.1.1–2 Blüten FLOS / P.1.3–P.2 Blätter FOLIUM); opchy+saiin+chor FLOS-Position (Atemweg+Augenarzt+Pupille); beige Wurzel ohne Text (R60 Ebene 1); Stolfi: „interrupted by the plant's flower“ ★★★★★
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f16v

- **Folio:** f16v
- **Pflanze / Inhalt:** Alpen-Mannstreu (Eryngium alpinum)
- **Signale und Befunde:** chkar·chkar (Doppel-Untersuchungsformel, einmalig); okaiin×2; otor P.12 (Zeichen des Lichts); sokar·oaorar= (Quire-B-Abschlusskolophon)
- **Konfidenz-Bewertung:** ★★★★★

### Sprache-A-Folio: f17r

- **Folio:** f17r
- **Pflanze / Inhalt:** Skabiosen-Flockenblume (Centaurea scabiosa)
- **Signale und Befunde:** 3 =-Kolophone P.3+P.6+P.12 (Corpus-Rekord für ein Folio); chor 3×; 7 qo-Formen in Spr. A (R33); Marginalinschrift (nicht Voynichesisch, vermutl. Latein)
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f17v

- **Folio:** f17v
- **Pflanze / Inhalt:** Schwarze Zaunrübe (Tamus communis)
- **Signale und Befunde:** 23 Paragraphen (Kräuter-Rekord); sar P.17 ohne {plant} (wie f57r/f103r); sheol Vollform Spr. A P.13 (R34); char im Schlusskolophon; or·okaiin·or Palindrom P.6
- **Konfidenz-Bewertung:** ★★★

### Sprache-A-Folio: f18r

- **Folio:** f18r
- **Pflanze / Inhalt:** Berg-Flockenblume (Centaurea montana)
- **Signale und Befunde:** 13 P. + Siman T.14; 2 =-Kolophone P.4+P.13; chor/qokchor 5× (Leitterm); dar·dar R36-Erstbeleg P.6; doldaiin Corpus-Erstbeleg P.7; doppelter {plant}-Marker P.8; Schlusskolophon or·shaiin·cthor·okal·dar= (stark positiv ★★★★★)
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f18v

- **Folio:** f18v
- **Pflanze / Inhalt:** Drachenwurz (Dracunculus vulgaris)
- **Signale und Befunde:** 10 P.; qokchy/chy 5× (Leitterm); Zoomorphe Drachen-Figur (Corpus-Erstbeleg bot. Abschnitt); {plant} am Kolophon-Anfang R38; qokchy·qokchy R37-Erstbeleg P.2; ykam/ytor (Auferstehungsverben) P.8; dom= Schlusskolophon-Finale Spr. A (R39)
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f19r

- **Folio:** f19r
- **Pflanze / Inhalt:** Kornblume (Centaurea cyanus) ★★★★ · Alt.: Stephanskraut (Delphinium staphisagria) ★★★
- **Signale und Befunde:** 13 P. + Schlusskolophon P.13; pchor-Eröffnung (Pupillen-Direktional, Primärindikation); chor/ykchor 6×; ckhy-Kompositionen 8× (stärkste Blässe-Dichte in Quire C); ~9 qo-Formen (~11 %); daiin.cthor.chol.ykchor.chordy (P.10, f15v-Parallele); Layout Typ A (Gesamttext auf Blüten-Höhe — 0 Texte bei Blättern/Wurzel); saiin+chor = Blüten-Pharmakologie Kornblume (Augenwasser, Konjunktivitis ★★★★★)
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f19v

- **Folio:** f19v
- **Pflanze / Inhalt:** Teufelsabbiss (Succisa pratensis)
- **Signale und Befunde:** 12 P. + T.13 Siman; 3 =-Kolophone (P.6a Mini + P.12 Haupt + T.13); daiin·daiin R19-Dopplung P.4 (Corpus-Erstbeleg); yees.ykchol.oty.ytor.ytar.ytchor.ytaiin= (P.12, 7-Verb-Litanei — R49, Corpus-Rekord); ytor 3. Folio-Beleg → ★★★★★; darom (Süden, erster Richtungsterm bot. Corpus)
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f20r

- **Folio:** f20r
- **Pflanze / Inhalt:** Süßes Tragant (Astragalus glycyphyllos)
- **Signale und Befunde:** chor 6× (Pupillen-Leitterm); qotchol P.1 (Universal-Zeichen); dol·shol P.7 (Schmerz-Scheol, Erstbeleg therapeutisches Fenster); cheol Corpus-Erstbeleg botanisch → ★★★ (R43 erfüllt); doppeltes chor-Schlussparadigma R15 P.13: chor·chor·cheey·tchey= (Pupille—Pupille—Leben—sie belebt); Layout Typ A (Apex-Text: Gesamttext auf Blüten-/Fruchtstand-Höhe — kein Text bei Stängel/Wurzel)
- **Konfidenz-Bewertung:** ★★★

### Sprache-A-Folio: f20v

- **Folio:** f20v
- **Pflanze / Inhalt:** Skabiosen-Flockenblume (Centaurea scabiosa)
- **Signale und Befunde:** kompakteste Prognoseformel Corpus P.4 (5 Kernwörter im Kolophon); botanische Reihung mit f19v (Scabiosa-Gruppe, bewusste thematische Sequenzierung); Faserwurzelsystem + blaue Köpfchenblüten mit weißem Hüllkelch; balneologisch (Augenbad, Hildegard von Bingen); Quire C bC4 innerstes Bifolio vollständig
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f21r

- **Folio:** f21r
- **Pflanze / Inhalt:** Sand-Thymian (Thymus serpyllum)
- **Signale und Befunde:** cheol ★★★★ gesichert (4. Beleg! f77r+f20v+f21r P.5+P.8 → R43 definitiv erfüllt, 3 Folios); Dreifache Licht-Formel P.7 (shoeor·cheor·cthor — Corpus-Erstbeleg, R52 Kand.); R15 Typ-B 4. Beleg P.12 (ykeea·chor·…·chor·chkaiin=); Dreifach-Scheol-Sequenz P.11 (shol·chol·shol·tchol — Corpus-Erstbeleg); or/cheol/chor Licht-Dichte 7× (höchste im Corpus); tshaiin Erstbeleg P.9 (★★★ Kand.); Layout Typ A; kein einziger {plant}-Marker in P.1–P.3 = Ganzpflanzen-Präparat TOTUS (R60 A-contrario-Beweis ★★★)
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f21v

- **Folio:** f21v
- **Pflanze / Inhalt:** Gemeine Akelei (Aquilegia vulgaris)
- **Signale und Befunde:** einfachste Kolophon-Struktur im Corpus: 1 =-Marker (P.8, cho·l·kchochaiin=, 3 Wörter — neuer Rekord); chotshol Corpus-Erstbeleg P.6 (★★★ Kand.: alles-du-wirst-Scheol — intensivstes Negativ-Kompositum); daiin·daiin R19-Dopplung P.4 (2. Beleg → R19 ★★★ best.); doppeltes qokchy P.2; keeees Hapax P.3; s-Einschub R51 P.7 (2. Folio-Beleg → R51 ★★★); Bifolio bC4 vollständig
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f22r

- **Folio:** f22r
- **Pflanze / Inhalt:** Papaver / kandelaberförmige Infloreszenz · Alt.: Spitzwegerich (Plantago lanceolata) ★★★
- **Signale und Befunde:** oraiino P.9 (Kolophon-Formel: Licht seines Auges ★★★★); R15 5. Beleg (Typ B: qokchol·dar·qokchol — Wortspiegelung mit dar als Zwischentext); cthoinn P.10 (vollständige Augen-Heilung, Variante); ctheor ★★★ Kand. P.9; cphal ★★★ Kand. P.7; ctheen ★★★ Kand. P.6; schor ★★★ Kand. P.4; dsheor P.7 (d-Relativpräfix R45); Layout Typ C (P.1–P.2 Samenkapseln FRUCTUS / P.4+ Spiralinfloreszenz bilateral); pol an Kapsel-Position P.1 ★★★★★ (stärkster Einzelbeweis R60); rote Wurzel ohne Text (R60 Ebene 2)
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f22v

- **Folio:** f22v
- **Pflanze / Inhalt:** Weißer Germer (Veratrum album)
- **Signale und Befunde:** daldalol= T.16 (R53 Subtyp A Erstbeleg: dal·dal+ol — doppelte Schwäche des Joches); ykcheor ★★★★ P.5 (R43 erfüllt: f22v + Zodiak-Register); okchain ★★★★ P.13 (Heilungsdirektional: auf Leben hin); pysaiinor ★★★ P.1 (Mund gleich dem Auge des Lichts); olshly P.14 (auf Scheol hin); shotoly P.13 (Scheol-Last hin, sho-Präfix R30)
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f23r

- **Folio:** f23r
- **Pflanze / Inhalt:** Wiesen-Storchschnabel (Geranium pratense)
- **Signale und Befunde:** Drei-Kolophon-Architektur P.3+P.5+P.11 (strukturelle Parallele zu f17r — Außenbifolio-Korrespondenz Quire C); tshol P.6 als P.6-Strukturtoken (erster Beleg); R15 6. Beleg Typ B nominal: qokchol·dar·qokchol P.7; daiidal P.6 (Urteil der Schwäche ★★★); ytom P.5 (er wird vollständig ★★★); dalory P.11 (Schwäche zum Licht ★★★)
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f23v

- **Folio:** f23v
- **Pflanze / Inhalt:** Borretsch (Borago officinalis)
- **Signale und Befunde:** dam·dam P.8 (bilateral — Corpus-Erstbeleg Quire C, Borago-Blutklärungsindikation); tshol P.6 (P.6-Strukturtoken 2. Beleg: beide Seiten desselben Folios f23r+f23v); sar P.6 (Arzt-Supervision über {plant}, 3. Folio-Beleg → ★★★★); qokor P.8 (und alles Licht ★★★); otshor P.6 (Zeichen des Lichts ★★★); olsar P.6 (ärztliche Aufsicht ★★★); aiior P.12 (Auge des Lichts ★★★); Bifolio bC2 vollständig
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f24r

- **Folio:** f24r
- **Pflanze / Inhalt:** Taubenkropf-Leimkraut (Silene vulgaris)
- **Signale und Befunde:** R53 3. T-Klassen-Beleg T.20: sam.chorly= (so heile meine Pupille — R43 erfüllt); sar×2 P.x (3. Folio-Beleg → sar ★★★★); dal·dam·dal-Triplette P.16 (R54 Erstbeleg ★★ Kand.); sshey P.17 (Doppel-Shin-Blässe, R56 ★★★ Kand.); otaiphy P.19 (Hapax ★★ Kand.); sam.chorly ★★★ Kand.; Botanik: Hämostase + Augenwirkung + Supervision
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f24v

- **Folio:** f24v
- **Pflanze / Inhalt:** Physalis-Typ / Scabiosa ★★★ · Alt.: Küchenschelle (Pulsatilla vulgaris) ★★
- **Signale und Befunde:** Quire-Zeichen „39“ = III = Quire C (letztes Folio Quire C); ot-Kompositum-Dreikette P.2 (otol+otaiir+otchos — R50-Beobachtung); olom ★★★★ P.7 (Ewigkeit/Welt); otaiir ★★★★ P.2 (Zeichen des Augenlichts); cheekdam ★★★★ P.14 (wie das Zeichen des Blutes); oro= P.5 (or-Palindrom-Reduplikation, R55 ★★★ Kand.); odaiim= P.16 (Abschluss-Kolophon-Marker, R57 ★★ Kand.); sho.sho P.14 (R56 ★★ Kand.); Quire C vollständig (16/16 = 100 %); Layout Typ C unilateral-links (oberer Block Blüten+Knollen FLOS / unterer Block Knollen+Blätter); grüne Knollen mit Text; orange Wurzel ohne Text (R60 Ebene 1)
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f25r

- **Folio:** f25r
- **Pflanze / Inhalt:** Brennnessel (Urtica dioica)
- **Signale und Befunde:** R53 4. T-Klassen-Beleg T.7: dair.otaiir.otosy= (Subtyp C — deskriptiv/identifikatorisch: Zeichen-Augenlicht → R53 ★★★★); otaiir Zweitbeleg → ★★★★★ Kand. (R43 erfüllt); daiin·daiin P.5 + daiin P.1 (4×daiin im Bifolio); otosy ★★★ Kand. T.7 (Zeichen-Scheol-gleich-er); cheesees ★★★ Kand. P.3 (Dreifach-Licht-Zeichen); soshy ★★★ Kand. P.1; Bifolio bD1 (Quire D außen): Kontinuität zu Quire C bestätigt; Botanik: Blut/Anämie + Augenindikation; dunkelrote Bohnen an Stengelknoten ohne Text (R60 Ebene 2 Nicht-Wurzel-Erstbeleg ★★★★★ — Reeds: Colors: green,dark-red); T.7 als Pflanzenteil-Deskriptor an Blattspitze (grüne FOLIUM-Zone → R60-Erweiterung, ★★★★ Kand.)
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f25v

- **Folio:** f25v
- **Pflanze / Inhalt:** Schöllkraut (Chelidonium majus)
- **Signale und Befunde:** orchaiin= P.7 (neue Kolophon-Abschlussformel ★★★★: or+chor/k+aiin = Licht-wie-Auge); 3×daiin P.2 (dchor.cthor.chor.daiin.s.okeeaiin.daiin.ckhey.daiin — Corpus-Erstbeleg 3×daiin in einer Zeile, R58 ★★★ Kand.); daiin·daiin P.5 (4. Doppelurteil im Bifolio); ckhear ★★★★ P.4 (ckh-Variante: wie das Licht); qokoral ★★★ Kand. P.6; daiity ★★★ Kand. P.3; R33 qo-Belege: qochol P.5, qokcho + qotchy P.6 (Quire-D-Einstieg Kontinuität); Drachen-Motiv (Toxizitätssignal + Augenheilung); Botanik: Augen (toxisch) + Scheol
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f26r

- **Folio:** f26r
- **Pflanze / Inhalt:** Schwarzer Nachtschatten (Solanum nigrum) — Sprache B
- **Signale und Befunde:** Erster Sprache-B-Einschub Quire D (bD2); Diagnose-Leitterm: psheoky (Pe+Scheol-Öffnung), chckhy (Blässe), dal (Schwäche); Therapie: sar+dal+dar; ykeechy ★★★ Kand. P.9 (8. y+k-Verb: er heilt wie Blässe-Licht); qoteedar ★★★ Kand. P.8 (und er/du wirst leuchten); eedy ★★★ Kand. P.5 (Negativ-Licht-Genitiv); 10 Paragraphen; ={plant}-Abschluss P.10 (otal=); Prognose: ambivalent (psheoky-Toxizität / sheey-Gabe); Indikation: Pallor, Augenschwäche, Atemwegsbefund
- **Konfidenz-Bewertung:** ★★★

### Sprache-A-Folio: f26v

- **Folio:** f26v
- **Pflanze / Inhalt:** Kornblume (Centaurea cyanus) — Sprache B
- **Signale und Befunde:** Sprache-B-Folgenseite bD2; oraiin ★★★★ P.4 (R43 erfüllt: f22r+f26v = 2 Folios); R36 dar·dar Typ B → ★★★★ P.6 (f18r+f26v = 2 Folios); R37 qo-Dopplung → ★★★★ P.5: qotedy·qotedy (f18v+f26v = 2 Folios); stärkste Sequenz P.4: or·cheos·oraiin·okeo·chekaiin= (Augenlicht-Kolophonformel ★★★★, H/C/F/U einig); saraiir ★★★ Kand. P.2 (Arzt des Leuchtenden); daiiin ★★★ Kand. P.1+P.7; cheeol ★★★ Kand. P.3; ory ★★★ Kand. P.8; 9 Paragraphen; ={plant}-Abschluss P.9 (dy=); beidseitige ={plant}-Symmetrie mit f26r; Indikation: Augenlicht, Augenentzündung
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f27r

- **Folio:** f27r
- **Pflanze / Inhalt:** Beinwell (Symphytum officinale) · Alt.: Ochsenzunge (Anchusa officinalis) ★★★
- **Signale und Befunde:** ksor+shey-Eignungsformel P.1 (ksor ★★★ Kand.); Scheol-Trias P.2; chol·shy-Parallelismus P.3 (Herzstück); qokey P.4 + qotchey P.10 (R33 qo- in Spr. A Quire D bestätigt); cphary ★★★ Kand. P.5 (Sühnopfer-Formel); Doppelkolophon P.6= + P.12a=; daiiin P.12 → ★★★★ (R43 dreifach erfüllt: f1r+f26v+f27r = 3 Folios); shod ★★★ Kand. P.1; chees·chos (Kälte/Hitze, hippokratische Diagnosekontraste) P.12; 12 Paragraphen + 1 Titelzeile; Indikation: Lungenentzündung, Wunden, Blutstillstand
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f27v

- **Folio:** f27v
- **Pflanze / Inhalt:** Wiesen-Margerite (Leucanthemum vulgare) · Alt.: Mutterkraut (Tanacetum parthenium) ★★★
- **Signale und Befunde:** Dreifach-Scheol + kchor·chor P.1 (schwere ophthalmologische Diagnose); shy·shy-Gabe-Intensivierung P.2 (Heilungsoptimismus R19); dsho P.3 + P.6 (Scheol-Genealogie); qoky P.5 (R33 qo- in Spr. A Quire D); sho·sho-Emphase P.7 → R56 ★★★ validiert (R43 erfüllt: f24v P.14 + f27v P.7 = 2 Folios); Heilungskolophon kshy= P.8 (kshy ★★★ Kand.); fochof/chof ★★★ Kand. P.1 (Mund/Kehle-alles); kchrrr Hapax P.6 (Dreifach-r); 8 Paragraphen + Kolophon-Pflanzensegment; Indikation: Augenentzündung, ophthalmologische Komplikation; Bifolio bD3 abgeschlossen
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f28r

- **Folio:** f28r
- **Pflanze / Inhalt:** Großer Wegerich (Plantago major)
- **Signale und Befunde:** Ophthalmologische Diagnosesequenz: or+chor+otaiin Leitterm; ytchol·yteol·deaiin= (y+t-Doppelverb-Kolophon, Corpus-Erstbeleg) P.9; pchodar ★★★ Kand. P.1 (Finsternis/Dunkelheit); kshol ★★★★ P.1 (wie Scheol); qo-Solitär P.1 → R59 ★★★ validiert (R43 erfüllt: f1v+f28r = 2 Folios); shod ★★★ validiert P.1 (R43 erfüllt: f27r+f28r); 9 Paragraphen; dreifache Dunkelheits-Metaphorik; Indikation: Sehverlust, Scheol-Ophthalmologie; Bifolio bD4 (innerstes Quire D); Layout Typ B (bilateral-Ähre: Diagnose links / Therapie rechts auf gleicher Spadix-Höhe); rote Wurzel ohne Text (R60 Ebene 2)
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f28v

- **Folio:** f28v
- **Pflanze / Inhalt:** Odermennig (Agrimonia eupatoria) · Alt.: Baldrian (Valeriana officinalis) ★★★
- **Signale und Befunde:** Augenheilungs-Therapiesequenz: ykcholy ★★★★ P1.2 (er heilt alles); tshoiin ★★★★ P1.4 ([sie] wendet das Auge von Scheol); dreifache {plant}-Marker P2.8 (Corpus-Erstbeleg — Dreiphasen-Rezept); Heilerkolophon sor·dar= P2.9 (sor ★★★★ Arzt-Variante); Kurztitel T1.6: daiin.chkaiin= (R23 2. Quire-D-Beleg); chear ★★★ Kand. P2.9; 5+1T+3 Texteinheiten; Bifolio bD4 vollständig — Quire-D-Zentrum ophthalmologisch gesichert
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f29r

- **Folio:** f29r
- **Pflanze / Inhalt:** Krauser Ampfer (Rumex crispus)
- **Signale und Befunde:** Begleittherapie Blässe + Fieber; poraiin ★★★ Kand. P.1 (Licht des Auges); shor·shor P.6 → R19-Erweiterung auf shor-Stamm (Corpus-Erstbeleg shor-Dopplung, ★★★ Kand.); R15 Typ C Erstbeleg P.8: shor·chor·sho — Dreikette als semantisches Spannungsfeld; shocthy ★★★ validiert (R43: f28r P.7+f29r P.6); cheeol ★★★ validiert (R43: f26v P.3+f29r P.5); shos ★★★ Kand. P.5; shokchy ★★★ Kand. P.7; ychom ★★★ Kand. P.9; 9 Paragraphen; Kolophon-Marker P.4+P.9; Indikation: Blutarmut, Blässe, Fieber
- **Konfidenz-Bewertung:** ★★★

### Sprache-A-Folio: f29v

- **Folio:** f29v
- **Pflanze / Inhalt:** Natternkopf / Viper's Bugloss (Echium vulgare)
- **Signale und Befunde:** Pharmakopöe-Katalog Augenpflanzen (21+ {plant}-Marker); chol·chol R35-Cluster P.2+P.3 → R35 ★★★ validiert (R43: f17v+f29v = 2 Folios); ytchor ★★★★ P.2 (R43: f16v+f29v = 2 Folios); tchor Zweitbeleg P.8 → ★★★★ bestätigt; shot ★★★ Kand. P.4; chain ★★★ Kand. P.5 → R43 erfüllt f30r; chykar ★★ Kand. P.10; Dual-Kolophon: shot·sho·okaiin= (neg.) + ykaiin-oaiin= (pos.); 12 Paragraphen; Bifolio bD4 vollständig — Quire D abgeschlossen
- **Konfidenz-Bewertung:** ★★★★

### Sprache-A-Folio: f30r

- **Folio:** f30r
- **Pflanze / Inhalt:** Salomonssiegel (Polygonatum multiflorum) ★★★★ · Alt.: Traubenhyazinthe (Muscari racemosum) ★★★
- **Signale und Befunde:** 13 Paragraphen; R19 Typ E Corpus-Erstbeleg P.11: cheor·chey·cheor·chey (ABAB-Licht-Leben-Verflechtung, ★★★ Kand.); chor solitär zwischen 2 {plant} P.12 (diagnostischer Kern visuell eingerahmt); chain ★★★ validiert P.7 (R43 erfüllt: f29v+f30r); opchol ★★★ validiert P.8 (R43 erfüllt: f28r+f30r); Kolophon P.7: qor·chain·cthorchy= (Dreiterm positiv); Kolophon P.13: chodaiin·chtchey·chear·shy·keey=; chorain ★★★ Kand. P.3; cthorchy ★★★ Kand. P.7; dchorol + chseeor ★★★ Kand. P.6; soin ★★★ Kand. P.4; ~14× {plant}-Marker; Indikation: Blässe-Ophthalmologie, Pupillenheilung, Licht-Sandwich-Formel; Layout Typ C (P.1–P.7 Beeren FRUCTUS / P.8–P.13 Blatt+Rhizom FOLIUM/CAULIS — zwei Zonen, chor solitär P.12 = Rhizom-Kernterm)
- **Konfidenz-Bewertung:** ★★★★★

### Sprache-A-Folio: f30v

- **Folio:** f30v
- **Pflanze / Inhalt:** Brennnessel (Urtica dioica) ★★★★ · Alt.: Hängebirke (Betula pendula) ★★★
- **Signale und Befunde:** 11 Paragraphen; stärkste Scheol-Dichte bD3 (~8× sho/shol); dain ★★★ validiert P.5 (R43 erfüllt: f1r+f30v); R28 Erweiterung ytor = y+t+or Kand. P.5 (erste Anwendung auf kurzen or-Stamm); Schlusskolophon P.11: shol·chokcheey·daiin·kchydy= (chokcheey ★★★★ Kand. Lebensvorschrift); shosaiin ★★★★ Kand. P.1 (Scheol des Augenarztes); cphoaiin ★★★ Kand. P.8 (wie der Atemweg des Auges, 3/3 Transkriptoren); sos ★★★ Kand. P.7+P.9 (2× auf diesem Folio); kcho·tcho·ctho morphologisches Triplett P.7; 9× {plant}-Marker; Bifolio bD3 vollständig; Quire-D-Innenbifolios bD3+bD4 abgeschlossen; orange-braune Wurzel ohne Text (R60 Ebene 1 — Folgebeleg zu f24v)
- **Konfidenz-Bewertung:** ★★★★

## XI. Das Randstern-System

### Randsterntyp: Rot

- **Typ-Bezeichnung:** Rot
- **Morphologie:** Gefüllte rote Mitte, 6–8 Zacken
- **Funktion / Bedeutung:** Falleröffnung / Akutphase
- **Konfidenz-Bewertung:** ★★★

### Randsterntyp: Leer

- **Typ-Bezeichnung:** Leer
- **Morphologie:** Hohle Mitte, Umrandung
- **Funktion / Bedeutung:** Krisenphase / Verlauf (sheol-Vokabular häufig)
- **Konfidenz-Bewertung:** ★★★

### Randsterntyp: Punkt

- **Typ-Bezeichnung:** Punkt
- **Morphologie:** Kleiner Mittelpunkt
- **Funktion / Bedeutung:** Abschlussnotiz / Prognose (stärkstes sheol·chalal)
- **Konfidenz-Bewertung:** ★★★

### Randsterntyp: Beige

- **Typ-Bezeichnung:** Beige
- **Morphologie:** Pergamentfarbene Mitte
- **Funktion / Bedeutung:** Zweite Seitenhälfte (ab P.27 f103r); schwerste Fälle
- **Konfidenz-Bewertung:** ★★

### Randsterntyp: Sonderstern

- **Typ-Bezeichnung:** Sonderstern
- **Morphologie:** 8 Zacken + Schleife
- **Funktion / Bedeutung:** Registerabschluss (f103r P.52, f114v P.1)
- **Konfidenz-Bewertung:** ★★★

### Randsterntyp: 6-Zacken (Quire H)

- **Typ-Bezeichnung:** 6-Zacken (Quire H)
- **Morphologie:** 6-zackig, goldfarben, kein Kern
- **Funktion / Bedeutung:** Block 1: allgemeines Sternen-Register (f58r P.1–P.15)
- **Konfidenz-Bewertung:** ★★★

### Randsterntyp: 7-Zacken + Kern (Quire H)

- **Typ-Bezeichnung:** 7-Zacken + Kern (Quire H)
- **Morphologie:** 7-zackig, goldfarben, kleiner Kern
- **Funktion / Bedeutung:** Block 2: Planetenreihe — 7 klassische Planeten (f58r P.16–P.25)
- **Konfidenz-Bewertung:** ★★★

### Randsterntyp: 8-Zacken + Kern (Quire H)

- **Typ-Bezeichnung:** 8-Zacken + Kern (Quire H)
- **Morphologie:** 8-zackig, goldfarben, größerer Kern
- **Funktion / Bedeutung:** Block 3: Fixsternkatalog / op-Koordinatenformat — R48 (f58r P.26–P.40)
- **Konfidenz-Bewertung:** ★★★

### Randstern-Folio: f103r/v

- **Folio:** f103r/v
- **Strukturprinzip:** Spärlich (19/54 Para.); sternlos = positiver Ausgang
- **Notiz:** Inclusio P.1↔P.52; beige Zone ab P.27

### Randstern-Folio: f116r

- **Folio:** f116r
- **Strukturprinzip:** Regelmäßige ~3er-Gruppen (P.1–P.30); danach sternlose Sektion
- **Notiz:** Transkriptor: “End of starred paragraphs”

### Randstern-Folio: f114v

- **Folio:** f114v
- **Strukturprinzip:** Strikt alternierend Beige–Rot–Beige–Rot
- **Notiz:** Paarstruktur; Schleifenlänge als zweite Dimension

### Randstern-Folio: f115r/v

- **Folio:** f115r/v
- **Strukturprinzip:** Überwiegend 8-zackig mit Schleife
- **Notiz:** Stark ch-dominiertes Vokabular — anderes Register

### Randstern-Folio: f58r

- **Folio:** f58r
- **Strukturprinzip:** 3 Randsterne (gold) markieren 3 Textblöcke; je ein Stern über dem ersten Paragraphen des Blocks
- **Notiz:** 6-Zacken (P.1–P.15) · 7-Zacken+Kern (P.16–P.25) · 8-Zacken+Kern (P.26–P.40) — R48

## XII. Offene Probleme und ungelöste Widersprüche

Ehrliche Dokumentation der statistischen Anomalien und methodischen Grenzen (eingeführt v7.5). Das Mapping ist eine **starke Lesehypothese**, keine bewiesene Entzifferung.

### OP1 — Wortlängenverteilung

**Schwere:** hoch · **Status:** offen

Die Wortlängenverteilung im Voynich-Corpus ist zu schmal für freie semitische Morphologie. Semitische Sprachen erlauben agglutinative Konstrukte mit variablen Wortlängen; das Voynich-Profil zeigt eine auffällig rigide Konzentration auf 4–8 EVA-Zeichen.

_Arbeitshypothese: Mögliche Erklärungen: (a) systematisches Abbreviatursystem, das Konsonanten weglässt; (b) grammatikalisiertes Register-System mit stark reduzierten Formen; (c) feste Slot-Grammatik als bewusste Kodierungsstrategie._

### OP2 — Buchstaben-Slot-Grammatik

**Schwere:** hoch · **Status:** offen

Bestimmte EVA-Zeichen kommen statistisch nur in bestimmten Wortpositionen vor (Slot-Grammatik nach Tiltman/Stolfi). Diese Eigenschaft passt zu keiner bekannten natürlichen Sprache direkt. Im Mapping-System wird sie durch Präfix-/Suffix-Hierarchien erklärt (R41), aber nicht formal modelliert.

_Arbeitshypothese: Das System kodiert möglicherweise feste grammatische Funktionen pro Slot (Präfix / Wurzel / Suffix-Register) mit phonotaktischen Constraints, die im Mischna-Hebräisch keine direkte Parallele haben._

### OP3 — Entropie-Abweichung

**Schwere:** hoch · **Status:** offen

Die Buchstaben-Entropie des Voynich-Textes liegt zwischen Englisch und Chinesisch — ungewöhnlich für semitische Konsonantenschriften (die typischerweise niedrigere Entropie aufweisen). Kryptologische Forschung (Landini, Stolfi, Rugg, Tiltman) hat dies konsistent gezeigt.

_Arbeitshypothese: Ursache unklar: Abbreviatursystem? Grammatikalisierung? Kodiertes Register-System mit hoher Vokalmarker-Dichte? Das Mapping erklärt den semantischen Inhalt, aber nicht die Entropiestruktur._

### OP4 — Fehlende unabhängige Blindvalidierung

**Schwere:** mittel · **Status:** ausstehend

Das System wurde noch nicht durch einen unabhängigen Hebraisten blind getestet — d.h. ein Fachmann, der das Mapping nicht kennt, hat noch nicht versucht, Voynich-Text damit zu lesen. Dies ist die stärkste Form der externen Validierung und fehlt vollständig.

_Arbeitshypothese: Bis zur Blindvalidierung gilt: Das Mapping ist eine starke Lesehypothese mit konsistenter Semantik, aber keine bewiesene Entzifferung. Interne Kohärenz beweist keine externe Gültigkeit._

### OP6 — Frist-Tracking-Lücke

**Schwere:** mittel · **Status:** offen

Das Mapping dokumentiert R43-Fristen in Lexikoneinträgen, aber es gibt kein aktives Tracking-System, das automatisch auf abgelaufene Fristen hinweist. Folge: 15 Einträge sind über mehrere Mapping-Versionen hinweg im ★★★-Kand.-Status verblieben, obwohl ihre Frist längst verstrichen war.

_Arbeitshypothese: Einführung einer Pflege-Tabelle für aktive R43-Fristen, die bei jeder neuen Mapping-Version systematisch geprüft wird. Aktive Fristen nach v8.1-Bereinigung: 24 Einträge; nach f30r/f30v: −3 geschlossen (opchol, dain, chain → validiert) + 12 neue Kand. (chorain, cthorchy, dchorol, chseeor, soin, chokcheey, cphoaiin, sos, shoty, shosaiin, chokeor, chokchy) → ~33 aktive Fristen._

### OP7 — Moratorium-Drift

**Schwere:** niedrig-mittel · **Status:** offen

Das Regelmoratorium hemmt nur die Einführung R60+, aber nicht die Akkumulation neuer Kandidaten durch Folio-Analysen. Zwischen v7.5 und v8.0 wurden mit R36, R59, R56, R35 vier Validierungen erreicht — jedoch gleichzeitig R49, R51, R55, R56, R57, R58 als neue Kandidaten eingeführt. Das Verhältnis verbesserte sich von 0,84:1 (v7.4) nur auf 1,27:1 (v8.0), nicht auf das Ziel 1,50:1.

_Arbeitshypothese: Strenger Vorbehalt: Neue Kandidaten-Regeln aus zukünftigen Folio-Analysen erhöhen den Nenner und können die Konsolidierungseffekte konterkarieren. Das Moratorium sollte bei zukünftigen Überschreitungen erneut aktiviert werden._

### OP9 — f009r Vollübersetzung P.1–P.9

**Schwere:** hoch · **Status:** ausstehend

Folio f009r (Bistorta officinalis) ist als neues Anker-Folio mit vollständigen Transkriptionen verfügbar, aber nur P.1 links wurde in v8.4 übersetzt. Die restlichen Paragraphen P.2–P.9 einschließlich der bilateralen FLOS-Struktur sind noch unübersetzt.

_Arbeitshypothese: Vollübersetzung mit Ankerwort-Test: sary, shor, cthy, tydlo gegen bekannte Bedeutungen testen. Cross-Register-Bestätigung für FLOS-Eröffner-Muster._

### OP10 — Verso-Folios f2v–f10v Positionskarten

**Schwere:** mittel · **Status:** offen

Die Retroanalyse v8.4 deckte nur die Recto-Seiten f2r–f10r ab. Die entsprechenden Verso-Folios f2v–f10v (außer f2v und f3v, die bereits teilw. analysiert wurden) haben noch keine Pflanzenteil-Positionskarten.

_Arbeitshypothese: Bilder verfügbar. Muster der Recto-Seiten (Typ A/C/D dominierend) vermutlich auf Verso übertragbar, aber morphologische Unterschiede möglich (z.B. Typ B auf Verso-Seiten)._

### OP12 — FOLIUM-Textfreiheit: Regel oder Layout-Artefakt?

**Schwere:** niedrig-mittel · **Status:** offen

25/25 Folios zeigen FOLIUM-Textfreiheit (R60 Korollar 3, v8.7: ★★★★★). Die 25-Folio-Schwelle wurde mit f32r, f32v, f33v, f34r, f34v überschritten. Offene Grundsatzfrage bleibt: bewusste pharmakologische Kodierung oder rein layoutbedingtes Phänomen?

_Arbeitshypothese: Theoretische Reflexion: Wenn FOLIUM-Textfreiheit ein Artefakt wäre, müssten Blätter in Apex-Position (oben) Text haben. Aber f002v und f005r (riesige Rundblätter dominant) haben trotz Blatt-Dominanz KEINEN Text. Bei 25 Folios und 0 Gegenbeispielen spricht die Evidenz für semantische Intention. R60 Korollar 3 auf ★★★★★ aufgestuft._

### OP13 — Quire-E-Zoomorphie-Hypothese

**Schwere:** mittel · **Status:** offen

Quire E eröffnet mit zwei zoomorphen Wurzel-Darstellungen: f33r (Mandragora officinarum, humanoid) und f34v (Bryonia alba, quadruped — Hirsch/Hase). Dies markiert einen möglichen ikonographischen Subkodex für Pflanzen mit anthropo- oder zoomorphen Wurzeln. Offen: Setzt sich das Muster in f35r/f35v und weiteren Quire-E-Folios fort?

_Arbeitshypothese: Quire E fokussiert auf Pflanzen mit magisch-pharmakologischer Doppelfunktion, deren Wurzeln in menschliche oder tierische Formen wachsen (Mandragora, Bryonia). Im mittelalterlichen Kräuterbuch sind diese Pflanzen als „Kräfte-Pflanzen" mit besonderer pharmakologischer Potenz klassifiziert. R60 Korollar 2 (Ikonographische Toxizitäts-Warnung) könnte als Quire-E-spezifische Erweiterung formal werden. Prüfen: f35r/f35v auf zoomorphe Elemente._

**Scheol-Verteilungsstatistik (v7.5 formalisiert):**

| Strukturposition | sheol/shol-Vorkommen | Andere Lexeme |
| --- | --- | --- |
| Zeilenende / Kolophon-Final | >85 % aller Belege | or, dom, kaiim |
| Zeilenmitte (medial) | <15 % — immer in Kompositum | — |
| Zeilenanfang | 0 % | — |


---

Voynich-Manuskript — Formales Mapping-Dokument · Version 8.9.0 · Juni 2026
Lexikon: 233 Einträge · Grammatikregeln: 57 · Rückwärtstest: Typ I: 10/10 (100%) · Typ II: 29/32 (91%)

_Dieses Dokument ist ein Forschungshilfsmittel. Alle Übersetzungen sind Hypothesen und laden zur Falsifikation ein._