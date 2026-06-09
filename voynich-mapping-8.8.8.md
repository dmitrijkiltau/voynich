# Voynich-Manuskript — Formales Mapping-Dokument
**EVA → Hebräisch-Aramäisch · Version 8.8.8 · Juni 2026**

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

**Korrekturen in v8.8.8:**

- f4r-Audit
- Weitere Automatisierungen bei der Regelableitung, z.B. die Erkennung von Präfixmorphemen für R41.

### Kernbefunde — Version 8.8.8

| Eigenschaft | Wert |
| --- | --- |
| Identifizierte Sprache | Mischna-Hebräisch / Jüdisch-Aramäisch |
| Texttyp | Medizinischer Traktat / Astronomisch-astrologisches Register — Pharmakopöe + Fixsternkatalog (f58r); f1r: deklarativer Haskama-Typ (sui generis) |
| Analysierte Folios | f1r, f1v–f10r (Quire A komplett, Positionskarten f1v–f10r), f11r–f32v (Quires B–D komplett), f33r–f34v (Quire E Eröffnung, 5/16), f57r/v, f58r, f69r (Quire J Kosmogramm), f71r–f72r2 (Quire K Zodiak), f103r/v, f114v, f115r/v, f116r/v |
| Bestätigte Wörter | 199 (★★★ oder höher) |
| Rückwärtstest | Typ I (genuine Vorhersagen): 10/10 (100%) · Typ II (interne Kohärenz): 29/32 (91%) · 0 Falsch-Positive |
| Sprache A Anker | f1r–f32v: 10/10 Sprache-A-Ankerwörter je Folio — 100 % (Quires A+B vollständig, Quire C bC1–bC4, Quire D bD1+bD2+bD3+bD4) |
| Grammatikregeln | 57 (40 validiert + 17 Kandidaten) |


## II. Methodik

### Rückwärtstest-Prinzip

Jede Mapping-Hypothese wird durch Rückwärtstests validiert: Ein bekanntes hebräisches oder aramäisches Wort wird nach dem vorgeschlagenen Mapping in EVA kodiert und im Voynich-Korpus gesucht. Bestätigung erfordert: (a) Vorkommen im Korpus, (b) semantisch plausible Position, (c) kontextuell passende Nachbarwörter.

### Konfidenzskala

| Sterne | Bedeutung | Kriterien |
| --- | --- | --- |
| ★★★★★ | Gesichert | Rückwärtstest ✓, ≥ 3 Folios, 0 Gegenbeispiele, R42-Kongruenz ✓, R43 erfüllt |
| ★★★★ | Sehr stark | Rückwärtstest ✓, ≥ 2 Folios, konsistente Kontextverteilung, R42-Kongruenz ✓, R43 erfüllt |
| ★★★ | Stark | Semantisch kohärent, morphologisch konsistent, Basiswurzel ≥ 4 Konsonanten (R40 v2), R43 erfüllt |
| ★★★ Kand. | Stark-Kandidat | ★★★-Kriterien erfüllt, R43 ausstehend (Einzel-Folio ≥ 8×, Bestätigung binnen 5 Folios) |
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

Das folgende Mapping bildet EVA-Buchstaben auf hebräische Konsonanten ab.

| EVA | Hebräisch | Name |
| --- | --- | --- |
| a | אַ | Alef / Patach |
| b | בּ | Bet |
| c | כּ | Kaf (stark) |
| ch | כ/ח | Kaf / Ḥet |
| d | ד | Dalet |
| e | ֶ | Vokal: Segol |
| ee | ֵ | Vokal: Ṣere |
| f | פ/ף | Pe (schwach) |
| g | ג | Gimel |
| h | ה | He |
| i | י | Yod / Ḥiriq |
| ii | יִ | Yod + Ḥiriq |
| k | כ | Kaf (weich) |
| l | ל | Lamed |
| m | מ | Mem |
| n | נ | Nun |
| o | ע/ֹ | Ayin / Ḥolam |
| oo | וֹ | Vav Ḥolam |
| p | פּ | Pe (stark) |
| q | ק | Qof |
| r | ר | Reš |
| s | שׂ/ס | Sin / Samech |
| sh | שׁ | Šin |
| t | ת/ט | Tav / Ṭet |
| y | יְ/וֹ | Yod-Vav / Verb-Präfix |
| aiin | עַיִן | Auge-Suffix |
| ai | ַי | Patach + Yod |


### Morphologische Präfixe

| EVA | Hebräisch | Bedeutung |
| --- | --- | --- |
| qok | וְכְּ | und wie |
| qod | וְדְּ | und von |
| qo | וְ | und/auch |
| o | עַ | auf/bei |
| l | לְ | zu/für |
| d | דְּ | von/aus |
| p | פְּ | Pe-Präfix |
| y | יְ | Imperfekt 3.Sg.m. |
| t | תָּ | Imperfekt 3.Sg.f./2.Sg. |


**R2-ext (v7.5):** Das EVA-Zeichen `o` ist positionell vollständig determiniert: (1) `o-` am Wortanfang = ע (Ayin, konsonantisch) — ausnahmslos; (2) `o` im Wortinneren = Ḥolam (Vokalmarker) — ausnahmslos. **Negativtest:** 0 Gegenbeispiele in 140+ validierten Lexikoneinträgen. **f1r Nulltest (positiver Strukturbeleg):** 260 Token analysiert — alle initialen `o` = Ayin, alle internen `o` = Ḥolam, 0 Ausnahmen.

## IV. Bestätigtes Lexikon (199 Einträge)

Alle Einträge mit ★★★ oder höher, getrennt nach Stammwörtern und abgeleiteten Formen.

### A. Stammwörter (36)

| EVA | Hebräisch | Deutsch | Schicht | Anker | Folio | Regeln | Konf. |
| --- | --- | --- | --- | --- | --- | --- | --- |
| aiin | עַיִן | Auge / Quelle | Mischna-Hebräisch | — | f8r P3.17 (H/C 2/2, Erstbeleg) | R42, R43 | ★★★★★ |
| al | עַל | auf / über / betreffend (Basispräposition; Var. ol) | — | — | f2r P.5 (H/C/F 3/3, Erstbeleg) | R19, R40, R43 | ★★★★ |
| chaiin | חַיִּין | Leben (Chayyim) | Biblisches Hebräisch | ja | f2r P.3 (H/C/F 3/3, Erstbeleg) | R18, R19, R43 | ★★★★ |
| cham | חַם | Wärme / Entzündung (hippokr. Befund-Term) | Mischna-Hebräisch | — | f3r P.2 (H/C/F 3/3, Erstbeleg) | R19, R43 | ★★★★ |
| chan | חָן | Gnade / günstige Prognose | — | — | f2r P.12 (H/C/F 3/3, Erstbeleg) | R43 | ★★★★ |
| char | חַר | heiß / Fieber | Mischna-Hebräisch | — | f1v P.1 (H/C/F 3/3, Erstbeleg) | R43 | ★★★★ |
| chdy | חֶדְוָה | Freude / Brust (anatomisch über aram. Schicht) | Jüdisch-Aramäisch | — | f1r P3.14 (H/C/F/N/U 5/5, Erstbeleg) | R15, R19, R43 | ★★★★★ |
| cheey | חֵיי | Leben | Hebräisch | — | f7v P.3 (H/C/U 3/4, Erstbeleg) | R43, R50 | ★★★★ |
| cheol | ח-ע-ל | schöpfen / heben (balneolog. Augenbad-Marker) | — | — | f2v P.8 (H/F/U 3/4, Erstbeleg) | R2, R43 | ★★★★ |
| chey | חֵי | lebendig / am Leben (Adj.) | Hebräisch | — | f1r P3.20 (H/C/F/N/X/U 6/6, Erstbeleg) | R19, R40, R43 | ★★★★ |
| chy | חַי | lebendig / am Leben (Adj.; Vokalvariante von chey) | Hebräisch | — | f1v P.6 (H/F 2/3, Erstbeleg) | R40, R43 | ★★★★ |
| chom | חֹם | Wärme / Hitze (Schwesterform von cham) | Mischna-Hebräisch | — | f3r P.7 (H/C/F 3/3, Erstbeleg) | R2, R40, R43 | ★★★★ |
| chor | חֹר | Pupille / Höhle / Loch | Mischna-Hebräisch | — | f1r P3.20 (H/C/F/N/X/U 6/6, Erstbeleg) | R2, R15, R19, R40, R43 | ★★★★ |
| ckhy | כְּהִי | Blässe / Trübheit | Mischna-Hebräisch | — | f1v P.3 (H/C/F 3/3, Erstbeleg) | R43 | ★★★★ |
| daiin | דִּין | Urteil / Prognose | Jüdisch-Aramäisch / Mischna-Hebräisch | ja | f1r P2.9 (H/C/F/N/X/U 6/6, Erstbeleg) | R19, R40, R43 | ★★★★ |
| dal | דַּל | schwach / abgemagert | Hebräisch | ja | f1r P4.26 (H/F/U 3/5, Erstbeleg) | R40, R43 | ★★★★ |
| dam | דָּם | Blut | Mischna-Hebräisch | ja | f1v P.4 (H/C/F 3/3, Erstbeleg) | R40, R43 | ★★★★★ |
| dar | דּוֹר | Generation / Kreis / Wohnort | Hebräisch / Aramäisch | — | f1v P.5 (H/C/F 3/3, Erstbeleg) | R15, R19, R43 | ★★★★ |
| dol | דָּוֶה | Schmerz / Krankheit | Hebräisch | — | f1v P.4 (H/C/F 3/3, Erstbeleg) | R2, R19, R43 | ★★★★ |
| dom | דּוֹם | Stille / Ende | — | — | f15r P.13 (H/C/F 3/4, Erstbeleg) | R2, R43 | ★★★★ |
| dor | דֹּר | Generation / Wachstumszyklus / Zeitraum | — | — | f2v P.6 (H/C/F/U 4/4, Erstbeleg) | R2, R40, R43 | ★★★★ |
| dy | דִּי | von / dessen | Jüdisch-Aramäisch | — | f5r P.1 (H/C/F 3/3, Erstbeleg) | R19, R43 | ★★★★ |
| kar | כָּרָה | graben / untersuchen (med. Kontext) | Mischna-Hebräisch | — | f6r P.2 (H/C/F 3/3, Erstbeleg) | R40, R43 | ★★★ |
| kol | כֹּל | Alles / Gesamtheit | Hebräisch | — | f2r P.9 (H/C/F 3/3, Erstbeleg) | R2, R40, R43 | ★★★★★ |
| or | אוֹר | Licht / Glanz | Hebräisch | ja | f1r P1.3 (H/C/F/N/U 5/5, Erstbeleg) | R2, R43 | ★★★★ |
| pol | פֹּל | Bohne / Beere / Frucht | — | — | f1v P.10 (H/C/F 3/3, Erstbeleg) | R2, R43, R60 | ★★★ |
| sam | שַׂם | Arznei | Mischna-Hebräisch | — | f3r P.17 (H/F 2/3, Erstbeleg) | R43 | ★★★ |
| sar | שַׂר | Arzt / Meister / Vorsteher | — | ja | f8v P.2 (H/C/F/U 4/4, Erstbeleg) | R43 | ★★★★ |
| shees | אֵשׁ | Feuer / Fieberbrand | — | — | f5v P.4 (H/F/U 3/4, Erstbeleg) | R43 | ★★★ |
| sheey | שֵׁי | Gabe / Wohlbefinden | Biblisches Hebräisch / Aramäisch | — | f2r P.9 (H/C/F 3/3, Erstbeleg) | R40, R43 | ★★★★ |
| sheol | שְׁאוֹל | Scheol / Tod (Vollform zu shol) | Biblisches Hebräisch | ja | f3r P.11 (H/C/F 3/3, Erstbeleg) | R2, R40, R43 | ★★★★ |
| sho | שׁוֹ | Scheol-Gleichheitspartikel | Jüdisch-Aramäisch | — | f2r P.13 (H/C/F 3/3, Erstbeleg) | R2, R19, R43 | ★★★★ |
| shod | שׁוֹד | Verheerung / Verwüstung | — | — | f1r P1.3 (H/C/F/N/U 5/5, Erstbeleg) | R2, R40, R43 | ★★★★ |
| shol | שׁוֹל | Tod / Unterwelt (apokopiert von Sheol) | Jüdisch-Aramäisch (Sprache A) | — | f1r P1.1 (H/C/U 3/5, Erstbeleg) | R2, R19, R40, R43 | ★★★★★ |
| shor | שׁוּר | Blick / Reihe / Ochse | Aramäisch / Hebräisch | — | f1v P.9 (H/C/F 3/3, Erstbeleg) | R2, R15, R19, R43 | ★★★★★ |
| tal | טַל | Tau / Pflanzensaft / Feuchtigkeit | Hebräisch | — | f13v P.9 (H/C 2/3, Erstbeleg) | R14, R40, R43 | ★★★ |


### B. Stammwörter (R43 Kandidaten) (16)

| EVA | Hebräisch | Deutsch | Schicht | Anker | Folio | Regeln | Konf. |
| --- | --- | --- | --- | --- | --- | --- | --- |
| alef | אָלֶף | Aleph (Ochse, ikonograph. Buchstabenreferenz) | — | — | — | — | ★★★ (R43 Kandidat) |
| chalal | חָלָל | Sterbender | — | ja | f103r P.42 (H/F 2/2, Erstbeleg) | — | ★★★★ (R43 Kandidat) |
| chod | חֹד | Schärfe / Akutheit (med. Terminus) | — | — | f18v P.7 (H/C/F/U 4/4, Erstbeleg) | R2 | ★★★ (R43 Kandidat) |
| chok | חֹק | Satzung / Vorschrift / Rezepturregel | Mischna-Hebräisch | — | f1r P4.27 (H/C/F/N/X/U 6/6, Erstbeleg) | R2, R40 | ★★★★ (R43 Kandidat) |
| darom | דָּרוֹם | Süden | — | — | f19v P.2 (H/C/F/U 4/4, Erstbeleg) | R2 | ★★★ (R43 Kandidat) |
| fol | פֹּל / פּוּל | Röhrenschaft / Stiel-Hülse (CAULIS-Eröffner) | — | — | — | R2 | ★★★ (R43 Kandidat) |
| kaiim | קַיָּם | gültig / beständig (Schlussformel) | — | ja | f6r P.14 (H/C 2/3, Erstbeleg) | — | ★★★★★ (R43 Kandidat) |
| olom | עוֹלָם | Ewigkeit / Welt | — | — | f24v P.7 (H/C/F/U 4/4, Erstbeleg) | R2 | ★★★★ (R43 Kandidat) |
| otan | עֹתָן | Zeit / Jahreszeit der Erkrankung | — | — | — | R2 | ★★★ (R43 Kandidat) |
| pcho | פְּחֹ | Atem / Mund (Sprache-A-Grundform) | — | — | — | R2 | ★★★ (R43 Kandidat) |
| qodom | קֶדֶם | Osten / Vorzeit / Vergangenheit | — | — | f24v P.11 (H/C/F/U 4/4, Erstbeleg) | R2 | ★★ (R43 Kandidat) |
| ram | רָם | erhöht / Fieber | — | — | f9r P.3 (H/F 2/3, Erstbeleg) | — | ★★★ (R43 Kandidat) |
| shalom | שָׁלוֹם | Friede / günstige Konstellation | — | — | f58r P.4 (H/F 2/2, Erstbeleg) | R2 | ★★★ (R43 Kandidat) |
| shty | שְׁתִי | Getränk / Trank | — | — | — | — | ★★★ (R43 Kandidat) |
| tam | תָּם | vollständig / rein | — | — | f34r P.8 (H/C/F 3/3, Erstbeleg) | — | ★★★★ (R43 Kandidat) |
| tolol | תֹּלֹל | geschwächt / hängend (Zustands-Adj.) | — | — | f18v P.8 (H/C/F/U 4/4, Erstbeleg) | R2 | ★★★ (R43 Kandidat) |


### C. Abgeleitete Lexikon-Einträge (163)

| EVA | Morph. | Hebräisch | Deutsch | Evidenz | Regeln | Konf. |
| --- | --- | --- | --- | --- | --- | --- |
| chckhy | ch- + k- + chy | חֶכָּהִי | Blässe-Hitze-Zeichen | f6r P.2 (H/C/F 3/3, Erstbeleg), f6v P.2 (H/C/F/U 4/4), f11v P.2 (H/C/F/U 4/4), f13r, f14r, f18r, f19r, f32v, f34r, f34v, f66r, f77r, f103r, f103v, f114v | R41, R43 | ★★★★ |
| chkar | ch- + kar | חֲקַר | er untersucht (Qal von חקר) | f2r P.2 (H/C/F 3/3, Erstbeleg), f9r T.10 (H/F 2/3), f16v P.6 (H/C/F 3/3), f115r | R41, R43 | ★★★ |
| daiir | d- + ir | דַּאִיר | der Leuchtende (verlängerte Form von dair) | f23r P.8 (H/C/F 3/3, Erstbeleg), f31r P.9 (H/C/F 3/3), f57r P.2 (H/C 2/3), f66r | R41, R43 | ★★★ |
| dain | d- + aiin | דַּעַיִן | das Auge (Kurzform) | f1r (T2.10–P3.20, ×4, Erstbeleg), f2r P.9 (H/C/F 3/3), f3v P.14 (H/C/F/U 4/4), f7r, f7v, f8r, f8v, f10r, f10v, f11r, f11v, f13v, f14r, f15r, f17v, f22r, f23r, f23v, f27r, f28v, f32r, f32v, f33v | R41, R43 | ★★★★ |
| dair | d- + ir | דְּאִיר | der Leuchtende / Licht davon    | f1v (P.4, P.5, Erstbeleg), f3r P.19 (H/F 2/3), f10r P.7 (H/C/F 3/3), f14v, f17r, f18v, f25r, f27r, f31v, f58r, f66r, f103v, f115r, f115v | R41, R43 | ★★★★ |
| dchal | d- + chal | דְּחַל | von dem was gilt / von dem Sterbenden | f18v P.1 (H/C/F/U 4/4, Erstbeleg), f24v P.15 (C/F/U 3/4) | R41, R43 | ★★★ |
| dchckhy | d- + k- + k- + chy | דְּכְּכְּהִי | von tiefer Blässe (Intensiv-Diagnosesiegel) | f14v P.9 (H/C/F/U 4/4, Erstbeleg), f25r P.4 (H/C/F 3/3) | R41, R43 | ★★★★ |
| dchor | d- + chor | דְּ+חֹר | von der Pupille | f1v P.9 (H/C/F 3/3, Erstbeleg), f4r P.2 (H/C/F 3/3), f6v P.20 (H/C/F/U 4/4), f8v, f9v, f13r, f20r, f22r, f25v, f29r, f29v, f30r, f32r | R2, R41, R43 | ★★★★ |
| dchy | d- + k- + chy | דְּכָּהִי | von der Blässe davon | f6v P.4 (H/C/D 3/5, Erstbeleg), f8r P1.2 (H/C 2/3), f10r P.7 (H/C/F 3/3), f11v, f13r, f13v, f18v, f20r, f27r | R41, R43 | ★★★★ |
| dsho | d- + sho | דְּשׁוֹ | von Scheol (Kurzform) | f27v P.6 (H/C/F/U 4/4, Erstbeleg), f28r P.8 (H/C/F 3/3), f32v P.3 (H/C/F/U 4/4) | R2, R41, R43 | ★★★★ |
| dshor | d- + shor | דְּשׁוֹר / דְּאֹר | von/des Lichts | f22v P.2 (H/C/F/U 4/4, Erstbeleg), f25v P.5 (H/C/F 3/3), f32r P.4 (H/C/F 3/3), f58r | R2, R41, R43 | ★★★ |
| dshy | d- + shy | דְּשֵׁי | von der Gabe | f16v P.9 (H/C/F 3/3, Erstbeleg), f18v P.10 (H/F/U 3/4) | R41, R43 | ★★★ |
| chcthy | k- + k- + t- + hy | כְּ+כְּ+תְּ+חִי | wie wie ich/es heilt (Doppelintensiv) | f2r P.13 (H/C/F 3/3, Erstbeleg), f2v P.3 (H/C/F/U 4/4), f4v P.9 (H/C/F/U 4/4), f10r, f18r, f19v, f21r, f24v, f34v, f77r, f103v, f115v | R41, R43 | ★★★★ |
| chear | k- + e- + ar | כְּאֵעַר | wie erleuchten / wie das Licht wirkt | f8v (P.3, P.16, P.17, Erstbeleg), f23v P.5 (H/C/F/U 4/4), f28v P2.9 (H/C/F/U 4/4), f30r | R19, R41, R43 | ★★★ |
| chedy | k- + dy | כְּדֵי | damit / um zu | f26r (P.2, P.7, Erstbeleg), f26v (P.3, P.6), f31r (P.7, P.14), f31v, f32r, f33v, f34r, f34v, f57r, f66r, f77r, f85v2, f103r, f103v, f114v, f115r, f115v | R41, R43 | ★★★★ |
| cheekaiin | k- + k- + aiin | כֵּכְּעַיִן | wie das Auge | f33r P.7 (H/C/F 3/3, Erstbeleg), f71v R3.1 (H/C 2/2) | R41, R43 | ★★★ |
| cheeol | k- + e- + ol | כְּאֵעַל | wie kein Joch / wie Ende des Joches | f17v P.22 (H/C/F 3/3, Erstbeleg), f26v P.3 (H/C/U 3/4), f77r P.21 (H/F/V 3/4) | R2, R41, R43 | ★★★ |
| cheor | k- + or | כְּאוֹר | wie Licht (Heilungszeichen) | f2v P.4 (H/C/F/U 4/4, Erstbeleg), f3r P.19 (H/F 2/3), f3v P.6 (H/C/F/U 4/4), f4v, f5r, f8v, f14r, f15v, f17v, f21r, f24r, f24v, f30r, f58r, f66r, f71v, f114v, f115r | R2, R41, R43 | ★★★★ |
| chkeey | k- + k- + chey | כְּכְּאֵיִ | wie wie Lebendigkeit | f7v P.3 (H/C/U 3/4, Erstbeleg), f17v (P.7, P.23), f30r P.2 (H/F 2/3), f99r | R41, R43 | ★★★ |
| chodaiin | k- + daiin | כֹּ+דִּין | wie das Urteil | f2v P.4 (H/C/F/U 4/4, Erstbeleg), f3v P.11 (H/C/F/U 4/4), f8r P1.3 (H/C/F 3/3), f10r, f10v, f15r, f17v, f20r, f20v, f21v, f28r, f30r, f114v, f115v | R2, R41, R43 | ★★★★ |
| chody | k- + -dy | כֹּ+דִּי | wie von ihm / gemäß ihm | f1v (P.2, P.10, Erstbeleg), f2v P.3 (H/C/F/U 4/4), f5r P.1 (H/C/F 3/3), f9v, f15v, f16v, f21v, f58r, f66r, f99r, f115r, f115v | R2, R41, R43 | ★★★★ |
| choor | k- + or | כְּאוּר | wie das Licht | f8r P1.7 (H/C/F 3/3, Erstbeleg), f14r P.6 (H/C/F 3/3) | R2, R41, R43 | ★★★ |
| chotam | k- + ot + am | כֹּאוֹתאָם | wie das Zeichen der Mutter | f58r P.22 (H/F 2/2, Erstbeleg), f115v P.7 (H/F 2/2) | R2, R41, R43 | ★★★ |
| chty | k- + t- + -y | כְּ+תְּ+יְ | wie es heilt (Kurzverb) | f2v P.6 (H/C/F/U 4/4, Erstbeleg), f9v P.5 (H/C/F/U 4/4), f21v P.4 (H/C/F/U 4/4), f34r, f103r | R41, R43 | ★★★★ |
| ckhol | ck- + hol | כְּכֹּל | vollständig wie alles (Intensiv-Variante) | f3v P.1 (H/C/D/F/U 5/5, Erstbeleg), f8r P3.15 (H/C/F 3/3), f25v P.4 (H/C/F 3/3), f58r, f99r | R2, R41, R43 | ★★★★ |
| cphor | k- + p- + or | כְּפְּאֹר | wie der Mund des Lichts | f3v P.1 (H/C/F/U 4/5, Erstbeleg), f17r P.5 (H/C/F/U 4/4), f32v P.7 (H/F/U 3/4), f115v | R2, R41, R43 | ★★★ |
| cphoy | k- + p- + cho | כְּפְּהוֹ | wie sein Atemweg / wie sein Mund | f1r P2.7 (H/N/U 3/5, Erstbeleg), f18v P.8 (H/C/F/U 4/4) | R2, R41, R43 | ★★★ |
| cthaiin | k- + t- + aiin | כְּתַּעַיִן | vollständige Augen-Heilung | f6r (P.5, P.6, Erstbeleg), f8v P.8 (H/F/U 3/4), f10r P.6 (H/C/F 3/3), f15r, f18r, f20v, f32v | R8, R41, R43 | ★★★★ |
| cthal | k- + t- + chal | כְּתַּחַל | wie vollständig | f3v P.13 (H/C/F/U 4/4, Erstbeleg), f18r P.13 (H/C/F 3/3), f24r P.14 (H/C/F 3/3) | R41, R43 | ★★★ |
| cthar | k- + t- + char | כְּתַּחַר | wie vollständiges Fieber | f6v P.16 (H/C/D/F/U 5/5, Erstbeleg), f8v (P.4, P.7), f15r P.13 (H/F/U 3/4), f17r, f24r | R15, R19, R41, R43 | ★★★★ |
| cthey | k- + t- + ey | כְּ+תֶ | wie diese Form (Vokal-Variante von cthy; Kolophon-Marker) | f1r P3.13 (H/C/F/U 4/5, Erstbeleg), f2r P.3 (H/C/F 3/3), f4r P.13 (H/C/F 3/3), f4v, f5r, f8r, f8v, f17r, f20r, f26r, f27r | R41, R43 | ★★★★ |
| cthoiin | k- + t- + aiin | כְּתּעַיִן | wie vollständige Augen-Heilung | f15v P.10 (H/C/F/U 4/4, Erstbeleg), f22r P.10 (H/C 2/3) | R2, R41, R43 | ★★★ |
| cthol | k- + t- + h + ol | כְּתהֹל | Vollständigkeits-Marker | f1v P.6 (H/F 2/3, Erstbeleg), f3r (P.1, P.5), f4r (P.2, P.7), f4v, f6v, f7r, f7v, f8v, f17v, f18r, f19v, f22r, f23v, f24r, f28r, f28v, f30v, f32r | R2, R19, R41, R43 | ★★★★ |
| cthom | k- + tom | כְּתֹם | wie Vollständigkeit | f3r (P.6, P.10, Erstbeleg), f4r P.7 (H/C/D/F 4/4), f6r P.12 (H/C/F 3/3), f6v, f24r | R2, R41, R43 | ★★★★ |
| cthor | k- + tor | כְּתֹּר | vollständige Heilung | f2r P.12 (H/C/F 3/3, Erstbeleg), f5v P.4 (H/F/U 3/4), f6r P.2 (H/C/F 3/3), f8v, f9r, f9v, f10r, f11v, f13v, f14v, f15v, f16v, f17v, f18r, f19r, f19v, f21r, f25r, f25v, f28v, f29r | R2, R41, R43 | ★★★★ |
| cthy | k- + t- + hy | כְּ+תִי | wie mein Zeichen / wie diese [Form] | f1r (P3.14, P3.17, P4.26, Erstbeleg), f1v (P.3, P.6), f2r P.2 (H/C/F 3/3), f3r, f3v, f4r, f5r, f6r, f6v, f7v, f9r, f9v, f10r, f10v, f11r, f15r, f15v, f16r, f17r, f17v, f18r, f20v, f21r, f22r, f22v, f28r, f29r | R41, R43 | ★★★★ |
| kaiin | k- + aiin | כְּעַיִן | wie das Auge | f15r P.8 (H/C/F 3/4, Erstbeleg), f29r P.7 (H/C/F 3/4), f71v R2.1 (H/C 2/2), f103r, f115v | R8, R41, R43 | ★★★★ |
| kchaiin | k- + cha + aiin | כְּחַעַיִן | wie die Wärme des Auges | f18r T.14 (H/C/F 3/3, Erstbeleg), f29r P.3 (H/C/F/U 4/4) | R41, R43 | ★★★ |
| kchol | k- + chol | כְּחֹל | wie Augensalbe / Kohl-Pigment (Blaupigment) | f8v P.7 (H/C/F/U 4/4, Erstbeleg), f9v P.10 (H/C/U 3/4), f11r P.2 (H/C 2/3), f13r, f19v, f22r | R2, R41, R43 | ★★★★ |
| kchor | k- + chor | כְּ+חֹר | wie die Pupille | f8v P.13 (H/C/F/U 4/4, Erstbeleg), f13v P.10 (H/C 2/3), f17v P.4 (H/C/F 3/3), f18r, f19r, f19v, f25v, f30v, f115r | R2, R41, R43 | ★★★★ |
| kchy | k- + chy | כְּ+חִי | wie seine Blässe (Variante von ckhy) | f2v P.2 (H/F/U 3/5, Erstbeleg), f5r P.7 (H/F 2/3), f11r P.4 (H/C/F 3/3), f13r, f14r, f15r, f16r, f16v, f19v, f22r, f22v, f25r, f31r, f34r, f103r | R19, R41, R43 | ★★★★ |
| keol | k- + eol | כֵּ+עוֹל | wie das Joch / wie die Last | f2v P.6 (H/C/F/U 4/4, Erstbeleg), f24v P.10 (H/C/F/U 4/4), f27r P.3 (H/C/F/U 4/4), f114v | R2, R41, R43 | ★★★ |
| ksho | k- + sho | כְּשׁוֹ | wie Scheol / Tod | f14v P.4 (C/F/U 3/4, Erstbeleg), f30r P.2 (H/F 2/3), f32v P.7 (H/C/F/U 4/4) | R2, R41, R43 | ★★★ |
| kshol | k- + shol | כְּשׁוֹל | wie Scheol | f23v P.10 (H/C/U 3/4, Erstbeleg), f28v P1.1 (H/C/F/U 4/4) | R2, R41, R43 | ★★★★ |
| kshy | k- + shy | כְּשֵׁי | wie die Gabe | f7v (P.3, P.4, Erstbeleg), f11r P.2 (H/C 2/3) | R41, R43 | ★★★ |
| lchedy | l- + k- + dy | לְכְּדֵי | um zu / bis zur Grenze | f66r R.29 (H/C/F 3/3, Erstbeleg), f77r (P.7–P.29, ×4), f103r P.23 (H/F 2/2), f103v, f115v | R41, R43 | ★★★★ |
| lor | l- + or | לְאוֹר | zum Licht / zur Heilung | f6v P.11 (H/F/U 3/5, Erstbeleg), f34r P.14 (H/C/F 3/3), f66r R.15 (H/C 2/3), f103r, f103v, f115r, f115v | R2, R41, R43 | ★★★★★ |
| ochor | o- + chor | עַחֹר | auf die Pupille (direktional) | f3r P.3 (H/F 2/3, Erstbeleg), f3v P.10 (H/F/U 3/5) | R2, R41, R43 | ★★★ |
| octhy | o- + cth- + y | עַכְּתִּי | auf mein Zeichen (≠ otchy!) | f3r P.12 (H/C/F 3/3, Erstbeleg), f29v P.11 (H/C/F/U 4/4), f114v P.34 (H/F 2/2) | R2, R41, R43 | ★★★ |
| odaiin | o- + daiin | עַדִּין | auf das Urteil (direktional) | f1r P3.14 (H/C/F/N/U 5/5, Erstbeleg), f7r P.4 (H/C/F 3/3), f9r P.1 (H/C 2/3), f17v, f21v, f22r, f22v, f24r, f57r, f58r, f85v2, f114v, f115v | R2, R41, R43 | ★★★★ |
| oeees | o- + esh | עַאֵשׁ | auf dem Feuer / Fieber | f9v P.3 (H/C/F/U 4/4, Erstbeleg), f13r P.3 (H/C 2/3), f24r P.15 (H/C/F 3/3) | R2, R41, R43 | ★★★ |
| oiin | o- + aiin | עַיִן | das Auge (direkte Form) | f1r P3.14 (H/C/F/N/U 5/5, Erstbeleg), f13r P.6 (H/C/F 3/3), f15v P.8 (H/C/F/U 4/4), f23v | R2, R8, R41, R43 | ★★★ |
| okaiin | o- + k- + aiin | עַכְּעַיִן | auf das Auge | f6r P.7 (H/F 2/3, Erstbeleg), f15r P.11 (H/F/U 3/4), f15v P.3 (H/C/F/U 4/4), f16v, f17r, f17v, f21r, f23r, f29v, f33r, f34r, f66r, f71v, f77r, f85v2, f103r, f103v, f114v, f115r, f115v | R2, R8, R19, R41, R42, R43 | ★★★★ |
| okal | o- + kol | עַכָּל | auf / über alles | f1v P.6 (H/F 2/3, Erstbeleg), f8r P3.20 (H/C/F 3/3), f13v P.7 (H/F 2/3), f16r, f17v, f18r, f23v, f25r, f31v, f33r, f57v, f58r, f66r, f71v, f72r2, f73v, f85v2, f114v | R2, R19, R41, R43 | ★★★★ |
| okam | o- + ka + -m | עַכַּם | für das Volk / für alle (universale Therapieangabe) | f28r P.6 (H/C/F 3/3, Erstbeleg), f31v P.8 (H/F 2/3), f34v P.10 (H/C/F/U 4/4), f57r, f72r2, f103r | R2, R41, R43 | ★★★★ |
| okchor | o- + k- + chor | עַ+כְּ+חֹר | auf die Pupille (o+k+chor-Komplex) | f3v P.2 (H/D/F/U 4/5, Erstbeleg), f13r (P.6, P.7), f14v P.5 (H/C/F/U 4/4), f18v, f19v, f20r, f32r | R2, R41, R43 | ★★★★ |
| okeeey | o- + k- + e + e + e | עַכְּאֵאֵאֵ | auf das dreifache Licht (emphat. Schlusskolophon, Spr. B) | f17v P.4 (H/F 2/3, Erstbeleg), f33r P.7 (H/C/F 3/3), f99r P4.15 (H/F/U 3/3), f103r | R2, R41, R43 | ★★★ |
| okeom | o- + k- + eom | עַכְּאֵוֹם | auf die Vollendung hin | f3r P.17 (H/F 2/3, Erstbeleg), f17v P.23 (H/C/F 3/3) | R2, R41, R43 | ★★★ |
| okeor | o- + k- + or | עַכְּאֵוֹר | auf / zu dem Licht hin (direktionale Variante) | f15v P.3 (H/C/F/U 4/4, Erstbeleg), f17v (P.10, P.23), f18r P.4 (H/C/F 3/3), f103v | R2, R41, R43 | ★★★ |
| okor | o- + k- + or | עַ+כְּ+אוֹר | auf das Licht hin (Var. zu okeor) | f3v P.2 (H/C/D/F/U 5/5, Erstbeleg), f9r P.3 (H/C/F 3/3), f14r P.6 (H/C/F 3/3), f15r, f17r, f31v, f32r, f34r, f85v2, f99r, f115v | R2, R41, R43 | ★★★★ |
| oksho | o- + k- + sho | עַכְּשׁוֹ | auf / gegen Scheol | f1r P3.12 (H/C/F/N/U 5/5, Erstbeleg), f28r P.5 (H/C/F 3/3) | R2, R40, R41, R43 | ★★★ |
| okshy | o- + k- + shy | עַכְּשֵׁי | auf / für die Gabe (therapeut. Direktional) | f14v P.5 (H/C/F/U 4/4, Erstbeleg), f17r P.2 (H/C/F/U 4/4), f18v P.2 (H/C/U 3/4) | R2, R41, R43 | ★★★ |
| opchol | o- + p- + chol | עַפְּכֹּל | auf allem wirkend | f3r P.18 (H/C/F 3/3, Erstbeleg), f22r P.10 (H/C 2/3), f30r P.8 (H/F 2/3) | R2, R41, R43 | ★★★ |
| opchy | o- + p- + chy | עַפְּהִי | auf den Atemweg | f13r P.1 (H/C/F 3/3, Erstbeleg), f16r (P1.1, P2.5), f22r P.1 (H/C 2/3), f103v | R2, R41, R43 | ★★★★ |
| opydaiin | o- + pi + daiin | עַפִּידִּין | beim Urteil des Mundes | f8v P.1 (H/C/F/U 4/4, Erstbeleg), f17v P.1 (H/C/F 3/3), f58r P.26 (H/F 2/2) | R2, R41, R43 | ★★★ |
| olaiin | ol- + aiin | עַלעַיִן | über das Auge | f17r P.4 (H/C/F/U 4/4, Erstbeleg), f33v P.6 (H/C/F/U 4/4), f77r P.31 (H/C/F/V 4/4), f99r, f103v, f114v | R2, R41, R43, R61 | ★★★★★ |
| oldam | ol- + dam | עַלדָּם | über das Blut | f22r P.10 (H/C 2/3, Erstbeleg), f34r P.7 (H/F 2/3), f34v P.2 (H/C/F 3/4) | R2, R41, R43, R61 | ★★★ |
| oldar | ol- + d- + ar | עַלדְּאַר | über den Leuchtenden | f23v P.9 (H/F/U 3/4, Erstbeleg), f34v P.4 (H/C/F/U 4/4) | R2, R41, R43, R61 | ★★★★★ |
| pchor | p- + chor | פְּ+חֹר | durch die Pupille / Öffnung der Höhle | f9v P.5 (H/C/F/U 4/4, Erstbeleg), f19r P.1 (H/C/F 3/3), f103v P.12 (H/F 2/2) | R2, R41, R43 | ★★★ |
| qodaiin | qo- + daiin | וְדִּין | und Urteil | f3r P.7 (H/C/F 3/3, Erstbeleg), f6r (P.7, P.13), f28r P.6 (H/C/F 3/3) | R2, R41, R43 | ★★★★ |
| qokaiin | qo- + k- + aiin | וְכְּעַיִן | und gemäß dem Auge | f5r P.2 (H/C/F 3/3, Erstbeleg), f9v P.2 (H/C/F/U 4/4), f15r P.3 (H/F/U 3/4), f15v, f23r, f23v, f25v, f29r, f77r, f103r, f103v, f114v, f115v | R2, R19, R41, R43 | ★★★★ |
| qokchor | qo- + o- + k- + chor | וְעַכְּחֹר | und für die Pupille | f3r P.12 (H/C/F 3/3, Erstbeleg), f11v P.4 (H/C/F/U 4/4), f15r P.2 (H/C/F/U 4/4), f16r, f18r, f32r | R2, R41, R43 | ★★★★★ |
| qokchy | qo- + k- + chy | וְ+כְּ+הִי | und wie Blässe | f3v P.13 (H/C/F 3/4, Erstbeleg), f7r P.8 (H/F 2/3), f7v P.3 (H/C/F/U 4/4), f10r, f13v, f18r, f18v, f19v, f21v, f22r, f22v, f24r, f29r, f31r, f32r, f34v, f103r, f115r | R2, R19, R41, R43 | ★★★★ |
| qokol | qo- + kol | וְ+כֹּל | und alles | f3r (P.5, P.16, Erstbeleg), f13v P.2 (H/C/F 3/3), f16r P2.11 (C/F 2/3), f17r, f18v, f22r, f22v, f23v, f28r, f66r, f77r, f99r, f114v, f115r | R2, R41, R43 | ★★★★ |
| qokor | qo- + kol + ar | וְכֹּאָר | und alles Licht | f6v P.14 (H/C/D/F 4/5, Erstbeleg), f15v P.3 (H/C/F/U 4/4), f23v P.8 (H/C/U 3/4), f58r, f77r, f115r, f115v | R2, R41, R43 | ★★★★ |
| qokshy | qo- + k- + shy | וְכְּשֵׁי | und wie die Gabe | f23r P.8 (H/C/F 3/3, Erstbeleg), f66r R.8 (H/F 2/3), f103v P.22 (H/F 2/2) | R2, R41, R43 | ★★★ |
| qoky | qo- + ky | וְכִּי | und denn / weil | f7v P.2 (H/C/F/U 4/4, Erstbeleg), f11v P.4 (H/C/F/U 4/4), f13r P.7 (H/C 2/3), f13v, f15v, f19r, f22r, f22v, f24r, f25v, f34r, f58r, f66r, f77r, f99r, f103r, f103v, f115r, f115v | R2, R19, R41, R43 | ★★★★★ |
| qol | qo- + ol | וְעַל | und auf / über | f77r (P.10–P.36, ×4, Erstbeleg), f103r (P.50, P.52), f103v (P.16, P.34), f115r | R2, R41, R43 | ★★★ |
| qor | qo- + or | וְאֹר | und Licht (astronomisch) | f17r P.4 (H/C/F/U 4/4, Erstbeleg), f24r P.14 (H/C/F 3/3), f29r P.9 (H/C/F/U 4/4), f30r, f58r, f66r, f77r | R2, R41, R43 | ★★★★ |
| qotaiin | qo- + t- + aiin | וְ+תָּ+עַיִן | und sie heilt das Auge | f2r P.3 (H/C/F 3/3, Erstbeleg), f4r (P.3, P.7), f21r P.10 (H/C 2/3), f24r, f25r, f77r, f103v, f114v, f115r | R2, R41, R43 | ★★★★ |
| qotal | qo- + tal | וְטַל | Tau / Schweißzeichen | f66r R.27 (H/C/F 3/3, Erstbeleg), f77r P.21 (H/C/F/V 4/4), f103r (P.39, P.43), f103v, f114v | R2, R41, R43 | ★★★★ |
| qotchol | qo- + ot + kol | וְאוֹתכֹּל | und das Universal-Zeichen | f3v P.2 (C/D/U 3/5, Erstbeleg), f4r P.4 (H/C/D/F 4/4), f10r P.5 (H/C/F 3/3), f13r, f20r, f21r, f32r | R2, R41, R43 | ★★★★ |
| qotchor | qo- + t- + chor | קוֹתְּכֹּר | Pupillen-Zeichen / Urteil der Pupille | f10r P.8 (H/C/F 3/3, Erstbeleg), f15r P.14 (C/F/U 3/4), f19r P.9 (H/C/F 3/3), f30r, f30v | R2, R41, R43 | ★★★★★ |
| qotchy | qo- + ot + k- + chy | וְאוֹתכְּהִי | und das Zeichen der Blässe | f7r P.3 (H/C/F 3/3, Erstbeleg), f7v P.5 (H/C/F/U 4/4), f10r (P.3, P.12), f11r, f14v, f15r, f16v, f18v, f19r, f19v, f20r, f21v, f22v, f24r, f25r, f30r, f32r, f32v, f103r, f115v | R2, R41, R43 | ★★★★ |
| qoty | qo- + t- + y | וְ+תְּ+יְ | und sie heilt es (Parallelbildung zu qoky) | f2v P.2 (H/F/U 3/5, Erstbeleg), f3r P.18 (H/C/F 3/3), f4r P.11 (H/C/D/F 4/4), f4v, f11r, f11v, f16v, f28v, f29r, f66r, f77r, f103r, f103v | R2, R41, R43 | ★★★★ |
| schor | s- + chor | שׂחֹר | gleich der Pupille | f22r P.4 (H/C/F 3/3, Erstbeleg), f32r P.4 (H/C/F 3/3) | R2, R41, R43 | ★★★ |
| sor | s- + or | שׂאֹר | Arzt des Lichts (Sprache-A-Vokalalternanz von sar) | f9r P.5 (H/C 2/3, Erstbeleg), f10r P.4 (H/F 2/3), f15v P.10 (H/C/F/U 4/4), f16v, f17v, f19v, f28v, f30r, f114v, f115r | R2, R41, R43 | ★★★★ |
| soshy | s- + o- + sh + -y | שׂאֹשׁיְ | gleich Scheol-er | f14r P.8 (H/C/F 3/3, Erstbeleg), f25r P.1 (H/C/F 3/3) | R2, R41, R43 | ★★★ |
| shos | sh- + a- + sh | שׁעַשׁ | Feuer-Ähnliches | f1r P2.9 (H/C/N/U 4/6, Erstbeleg), f20v P.6 (H/C/F 3/4), f32r P.11 (H/C/F 3/3) | R2, R41, R43 | ★★★ |
| shy | sh + -y | שֵׁי | Gabe (Kurzform von sheey) | f1v P.3 (H/C/F 3/3, Erstbeleg), f6v P.12 (H/C/F/U 4/4), f8r (P1.1, P1.3, P1.6), f9r, f10r, f11v, f13r, f14r, f15r, f19r, f21r, f22v, f24v, f25v, f27r, f29r, f29v, f30r, f34r, f66r | R19, R40, R43 | ★★★★ |
| sos | sh- + a- + sh | שׁעַשׁ | Feuer auf Feuer / Fieber-Intensivierung | f20v P.2 (H/C/F/U 4/4, Erstbeleg), f25v P.1 (H/C/F 3/3), f30v (P.7, P.9), f57v | R2, R41, R43 | ★★★ |
| sshey | sh- + sh- + shey | שׁשׁהֵי | Doppel-Shin-Blässe | f24r P.17 (H/C/F 3/3, Erstbeleg), f103r P.53 (H/F 2/2) | R41, R43 | ★★★ |
| sheaiin | she- + aiin | שֶׁעַיִן | welche das Auge | f8v P.2 (H/F/U 3/4, Erstbeleg), f21r P.2 (H/C/F 3/3), f30v P.1 (H/C/F 3/3), f32v | R41, R43 | ★★★★ |
| shear | she- + ar | שֶׁ+אַר | welches das Licht/die Heilung ist (Vokalvariante von sheor) | f8v P.12 (H/C/F/U 4/4, Erstbeleg), f29r P.3 (H/F/U 3/4), f77r (P.13, P.16) | R41, R43 | ★★★★ |
| shedy | she- + -dy | שֶׁדִּי | das/welches von | f26r (P.5, P.8, Erstbeleg), f26v (P.1, P.6), f31r P.8 (H/C/F 3/3), f34r, f34v, f66r, f77r, f85v2, f103r, f103v, f114v, f115r, f115v | R19, R41, R43 | ★★★★ |
| sheor | she- + or | שֶׁאֹר | das/welches Licht ist | f6r P.4 (H/F 2/3, Erstbeleg), f17v P.21 (H/C 2/3), f32r P.2 (H/C/F 3/3), f66r, f103r, f103v | R2, R41, R43 | ★★★★ |
| shody | sho- + -dy | שְׁאוֹדִּי | von Scheol | f1r (P2.9, P4.26, Erstbeleg), f1v P.9 (H/C/F 3/3), f4v P.13 (H/C/F/U 4/4), f5r, f7r, f16r, f20r, f21r, f22v, f25r, f29v, f33r, f66r, f77r, f103r | R2, R41, R43 | ★★★★ |
| tchey | t- + chey | תְּחִי | möge es/sie leben! | f1r P3.17 (H/F/U 3/5, Erstbeleg), f11v P.4 (H/C/F/U 4/4), f19v P.7 (H/C/F/U 4/4), f20r, f27r, f32r, f103r | R4, R41, R43 | ★★★★ |
| tchor | t- + chor | תְּחֹר | sie heilt die Pupille | f3v (P.7, P.11, P.12, Erstbeleg), f13r P.6 (H/C/F 3/3), f16r P2.5 (H/C 2/3), f18r, f22v, f57v | R2, R41, R43 | ★★★★ |
| teor | t- + or | תְּאוֹר | sie wird heilen | f14r P.12 (H/F 2/3, Erstbeleg), f32v P.2 (H/F/U 3/4), f103v P.21 (H/F 2/2) | R2, R41, R43 | ★★★★ |
| tsho | t- + sho | תְּשׁוֹ | sie entfernt sich von Scheol | f21v P.6 (H/C/F/U 4/4, Erstbeleg), f28v P2.7 (H/C/F/U 4/4) | R2, R41, R43 | ★★★ |
| tshol | t- + shol | תְּשׁוֹל | sie entfernt von Scheol (Vollform von tsho) | f23r P.6 (H/C/F 3/3, Erstbeleg), f23v P.6 (H/C/F/U 4/4), f99r P1.1 (H/F 2/2) | R2, R41, R43 | ★★★ |
| ychekchy | y- + k- + k- + chy | יְכְּכְּהִי | er heilt wie totale Blässe | f17r P.5 (H/C/F/U 4/4, Erstbeleg), f18r T.14 (H/C/F 3/3) | R41, R43 | ★★★ |
| ychol | y- + kol | יְכֹּל | er heilt alles | f6r P.8 (H/C/F 3/3, Erstbeleg), f6v P.7 (H/C/F/U 4/4), f14r P.6 (H/C/F 3/3), f18v | R2, R41, R43 | ★★★★ |
| ychor | y- + chor | יְחֹר | er wird die Pupille weiten | f6v P.8 (H/C/D/F/U 5/5, Erstbeleg), f17v P.15 (H/C/F 3/3), f22v P.7 (H/C/F/U 4/4), f23r, f24r | R2, R41, R43 | ★★★★ |
| ydaiin | y- + daiin | יְדִּין | er urteilt | f6r P.6 (H/C/F 3/3, Erstbeleg), f17v P.20 (H/F 2/3), f18r P.10 (H/C 2/3), f22r, f24v, f29v, f66r | R41, R43 | ★★★★ |
| ykaiin | y- + k- + aiin | יְכְּעַיִן | er heilt das Auge | f1r P1.3 (H/C/F/N/U 5/5, Erstbeleg), f9v P.3 (H/C/F/U 4/4), f14r P.8 (H/C/F 3/3), f20v, f22v, f115r | R3, R8, R41, R42, R43 | ★★★★ |
| ykar | y- + k- + or | יְכְּאָר | er heilt leuchtend (Variante von ykair) | f18v P.6 (H/C/U 3/4, Erstbeleg), f34v P.2 (H/C/F 3/4) | R41, R43 | ★★★★ |
| ykchol | y- + k- + chol | יְכֹּל | er heilt alles / er heilt Augenpigment | f18r P.4 (H/C/F 3/3, Erstbeleg), f19v P.12 (H/C/F/U 4/4) | R2, R41, R43 | ★★★ |
| ykchy | y- + k- + chy | יְכְּהִי | er wird Blässe zeigen | f3v P.8 (H/C/F/U 4/4, Erstbeleg), f11v P.2 (H/C/F/U 4/4), f13r (P.2, P.3), f16v, f17r, f19v, f23r | R41, R43 | ★★★★ |
| ykeedy | y- + k- + dy | יְכֵּדֵי | er wird anordnen | f26r P.3 (H/F 2/3, Erstbeleg), f31r P.7 (H/C/F 3/3), f103r (P.35, P.39), f115v | R41, R43 | ★★★ |
| ykeor | y- + k- + or | יְכְּאוֹר | er heilt / wie Licht | f6r P.3 (H/C/F 3/3, Erstbeleg), f17v P.13 (H/C/F 3/3), f73v S1.5 (H/V/U 3/3) | R2, R41, R43 | ★★★★ |
| ytaiin | y- + t- + aiin | יְתָּעַיִן | er wird das Auge heilen | f6r P.3 (H/C/F 3/3, Erstbeleg), f9r P.2 (H/C/F 3/3), f13v P.8 (H/C 2/3), f16r, f19v, f22v | R41, R43 | ★★★★ |
| ytal | y- + tal | יְתַּל | er wird suspendieren / aufhängen (Qal von תלל) | f13v P.9 (H/C 2/3, Erstbeleg), f22v P.10 (H/C/U 3/4), f34v P.3 (H/C/F/U 4/4), f58r | R41, R43 | ★★★ |
| ytar | y- + t- + or | יְתַּאָר | er wird Licht geben | f19v P.12 (H/C/F/U 4/4, Erstbeleg), f34r P.2 (H/C/F 3/3), f58r (P.2, P.13), f85v2, f115v | R41, R43 | ★★★★ |
| ytchor | y- + t- + chor | יְתְּחֹר | er/sie wird die Pupille heilen | f15v (P.5, P.8, Erstbeleg), f16v P.2 (H/C/F 3/3), f19v P.12 (H/C/F/U 4/4) | R2, R41, R43 | ★★★★ |
| ytchy | y- + t- + chy | יְתְּכְּהִי | er/sie wird Blässe zeigen | f3v P.12 (H/C/F/U 4/4, Erstbeleg), f11r P.2 (H/C 2/3), f13r P.4 (H/C/F 3/3), f16v, f27r | R41, R43 | ★★★★ |
| yteey | y- + t- + ee | יְתֵּאֵי | er wird [es] bringen / heilen (Sprache B) | f33r P.6 (H/C/F 3/3, Erstbeleg), f103v (P.26, P.38) | R41, R43 | ★★★ |
| yteol | y- + t- + ol | יְתאֵעֹל | er wird handeln / vollbringen | f21r P.11 (H/C/F 3/3, Erstbeleg), f28r P.9 (H/C/F 3/3) | R2, R41, R43 | ★★★★ |
| ytol | y- + tolol | יְתֹּלֹל | er wird geschwächt | f15r P.13 (H/C/F/U 4/4, Erstbeleg), f18r P.6 (H/F 2/3), f18v P.9 (H/C/F/U 4/4), f19v | R2, R41, R43 | ★★★ |
| ytor | y- + t- + or | יְתֹּאוֹר | er/sie wird zum Licht werden / erleuchten | f5v P.3 (H/C/F/U 4/4, Erstbeleg), f18v P.8 (H/C/F/U 4/4), f19v P.12 (H/C/F/U 4/4), f58r | R2, R41, R43 | ★★★★★ |
| yty | y- + t- + y | יְ+תְּ+יְ | er heilt es (doppeltes y-Präfix mit t-Infix; Morphemanalyse offen) | f3v P.13 (H/C/F/U 4/4, Erstbeleg), f4r P.4 (H/C/D/F 4/4), f10r (P.3, P.7), f22r | R41, R43 | ★★★ |
| chokchy | chok + k- + chy | חֹקכְּהִי | Vorschrift der Blässe | f8v P.9 (H/C/F/U 4/4, Erstbeleg), f16v P.2 (H/C 2/3), f18r P.11 (H/C 2/3), f30v | R2, R41, R43 | ★★★★ |
| choky | chok + -ey | חֹקֵּי | die Vorschriften des [Falls] | f1v P.6 (H/F 2/3, Erstbeleg), f6r P.3 (H/C/F 3/3), f15v P.4 (H/C/F/U 4/4), f16r, f20r, f58r, f99r, f114v | R2, R43 | ★★★★ |
| daiiin | daiin + -in | דִּינִין | Urteile (Aram. Emphase-Plural von דין) | f1r T3.21 (H/C/F/N/X/U 6/6, Erstbeleg), f9v P.5 (H/C/F/U 4/4), f28v P1.5 (H/C/F/U 4/4), f77r | R43 | ★★★★ |
| dalor | dal + or | דַּלאוֹר | schwaches Augenlicht | f2r P.11 (H/F 2/3, Erstbeleg), f58r (P.8, P.11) | R2, R43 | ★★★ |
| daly | dal + -y | דַּלִּי | seine/meine Schwäche | f9v P.8 (H/C/F/U 4/4, Erstbeleg), f34r P.14 (H/C/F 3/3), f58r P.29 (H/F 2/2), f66r, f85v2 | R43 | ★★★★ |
| doiir | dol + y + or | דֹּיִר | sehr schwache Erweckung | f10r P.4 (H/F 2/3, Erstbeleg), f24v P.14 (H/F/U 3/4), f32r P.15 (H/C/F 3/3) | R2, R43 | ★★★ |
| dolar | dol + l- + or | דָּוֶהלְאוֹר | Krankheit zur Heilung | f8v P.3 (H/C/F/U 4/4, Erstbeleg), f66r R.19 (H/C 2/3) | R2, R41, R43 | ★★★ |
| oraiin | or + aiin | אוֹרעַיִן | Licht des Auges / Augenheilung | f9r T.10 (H/C/F 3/3, Erstbeleg), f24v P.5 (H/C/F/U 4/4), f26v P.4 (H/C/F/U 4/4), f31v, f85v2, f99r, f103r, f103v | R2, R43 | ★★★★★ |
| orair | or + aiin + ar | אוֹרעַיִןאַר | Licht-Auge-Licht (Ringstruktur) | f34v P.5 (H/C/F 3/4, Erstbeleg), f115v P.13 (H/F 2/2) | R2, R43 | ★★★★ |
| oro | or + -o | אֹראֹ | Licht-Palindrom / maximale Heilungs-Affirmation | f24v P.5 (H/C/F/U 4/4, Erstbeleg), f99r L1.5 (H/V 2/3) | R2, R43 | ★★★ |
| otaiin | ot + aiin | אוֹת+עַיִן | Zeichen des Auges | f4v P.10 (H/C/F/U 4/4, Erstbeleg), f6r P.9 (H/C/F 3/3), f7r P.5 (H/C/F 3/3), f8v, f9r, f9v, f15r, f17v, f20r, f21r, f22v, f28r, f58r, f71v, f72r1, f103r, f114v | R2, R43 | ★★★★ |
| otaiir | ot + aiin + ir | אֹתעַיִר | Zeichen des Augenlichts | f24v P.2 (H/C/F/U 4/4, Erstbeleg), f25r T.7 (H/C/F 3/3) | R2, R43 | ★★★★★ |
| otain | ot + ain | אוֹתאַיִן | Zeichen des Nichts / Endes | f5r P.4 (H/C/F 3/3, Erstbeleg), f72r1 S1.8 (H/K/V 3/3) | R2, R43 | ★★★ |
| otal | ot + al | אוֹתעַל | Zeichen über [etwas] | f3r P.6 (H/F 2/3, Erstbeleg), f13v P.9 (H/C 2/3), f24r P.6 (H/C/F 3/3), f26r, f27r, f33v, f57v, f58r, f71v, f72r2, f103r, f103v, f114v, f115v | R2, R43 | ★★★★ |
| otam | ot + tam | אוֹתתָּם / אוֹתאָם | Zeichen der Vollständigkeit / der Mutter (register-abhängig) | f6v P.11 (H/F/U 3/5, Erstbeleg), f19v P.10 (H/C/F/U 4/4), f24r P.17 (H/C/F 3/3), f33v, f34v, f66r, f72r2, f103r, f103v, f114v | R2, R43 | ★★★★ |
| otchal | ot + chal | אוֹת+חַל | Zeichen des Geltens / Befund-Zeichen | f2r P.1 (H/C/F 3/3, Erstbeleg), f3v P.5 (H/C/D/F/U 5/5) | R2, R43 | ★★★ |
| otcham | ot + cham | אוֹת+חַם | Zeichen der Entzündung (Parallelform zu otchom; cham vs. chom) | f3v P.7 (H/C/D/F/U 5/5, Erstbeleg), f6r (P.1, P.4) | R2, R43 | ★★★ |
| otchdal | ot + k- + dal | אוֹתכְּדַּל | Zeichen der Schwäche | f18v P.1 (H/C/F/U 4/4, Erstbeleg), f72r1 S2.3 (H/K/V 3/3) | R2, R41, R43 | ★★★★ |
| otcho | ot + cho | אוֹתכֹּ | das Zeichen des [Atems] (Kolophon-Kurzform) | f1v P.9 (H/C/F 3/3, Erstbeleg), f14r P.7 (H/C/F 3/3), f15r P.13 (H/C/F/U 4/4) | R2, R43 | ★★★ |
| otchody | ot + k- + dy | אוֹתכֹּדִּי | das ganze Zeichen davon | f3r P.9 (H/C/F 3/3, Erstbeleg), f71v S1.4 (H/C/K/V 4/4) | R2, R41, R43 | ★★★ |
| otchol | ot + kol | אוֹתכֹּל | Zeichen von allem / Universalzeichen | f3r P.7 (H/C/F 3/3, Erstbeleg), f4r P.3 (H/C/F 3/3), f5v P.5 (H/C/F/U 4/4), f7r, f9r, f13r, f13v, f17r, f24v, f32r | R2, R43 | ★★★★ |
| otchor | ot + chor | אוֹתחֹר | das Zeichen der Pupille | f2v P.6 (H/C/F/U 4/4, Erstbeleg), f3r P.19 (H/F 2/3), f5v P.3 (H/C/F/U 4/4), f13r, f15r, f15v, f16v, f28r, f99r | R2, R19, R43 | ★★★★ |
| otchy | ot + k- + chy | אוֹתכְּהִי | das Zeichen der Blässe | f2v P.3 (H/C/F/U 4/4, Erstbeleg), f9v P.6 (H/C/F/U 4/4), f10r P.3 (H/C/F 3/3), f13v, f18v, f19r, f19v, f20r, f85v2 | R2, R41, R43 | ★★★★ |
| oteol | ot + eol | אוֹתאֵעֹל | Zeichen des Handelns (vgl. yteol) | f1r P3.12 (H/C/F/N/U 5/5, Erstbeleg), f3r P.16 (H/C/F 3/3), f17v P.15 (H/C/F 3/3), f103r | R2, R43 | ★★★ |
| otor | ot + or | אוֹתאוֹר | Zeichen des Lichts / der Heilung | f4v P.8 (H/C/F/U 4/4, Erstbeleg), f10r P.10 (H/C/F 3/3), f16v P.12 (H/C/F 3/3), f17v, f23v, f25r, f28r, f71v | R2, R43 | ★★★★ |
| otshol | ot + shol | אוֹתשׁוֹל | das Zeichen des Todes | f7v P.1 (H/C/F/U 4/4, Erstbeleg), f18r P.2 (H/C/F 3/3) | R2, R43 | ★★★★★ |
| pchy | pcho + -y | פְּחִי | mein Atem / mein Mund (FLOS/FRUCTUS) | f8v P.10 (H/C/F/U 4/4, Erstbeleg), f27r P.7 (H/F/U 3/4) | R43 | ★★★★ |
| saiin | sar + aiin | שַׂעַיִן | Augenarzt | f2r P.12 (H/C/F 3/3, Erstbeleg), f8v P.1 (H/C/F/U 4/4), f16r P2.9 (H/C/F 3/3), f16v, f21r, f22v, f26r, f31r, f31v, f34r, f57v, f66r, f77r, f103r, f103v, f115r, f115v | R8, R43 | ★★★★ |
| shocthy | sho + k- + t- + -y | שׁוֹכְּתיְ | vollständiges Scheol | f20v P.7 (H/C/F/U 4/4, Erstbeleg), f25r P.4 (H/C/F 3/3), f29r P.6 (H/C/F/U 4/4) | R2, R41, R43 | ★★★ |
| shoiin | sho + aiin | שׁוֹעַיִן | Scheol des Auges | f20r P.12 (H/C/F 3/3, Erstbeleg), f28v P1.5 (H/C/F/U 4/4) | R2, R43 | ★★★★ |
| shokchy | sho + k- + ky | שׁוֹכְּכֵּי | Scheol-Blässe / Blässe des Todes | f8r P1.3 (H/C/F 3/3, Erstbeleg), f29r P.7 (H/C/F 3/4), f115v P.31 (H/F 2/2) | R2, R41, R43 | ★★★ |
| shosaiin | sho + saiin | שׁוֹשַׂעַיִן | Scheol des Augenarztes (diagnostisches Maximalsignal) | f20r P.5 (H/F 2/3, Erstbeleg), f30v P.1 (H/C/F 3/3) | R2, R43 | ★★★★ |
| shoty | sho + t- + -y | שׁוֹתְּיְ | vollständiges Scheol von ihm | f15r P.12 (H/C/F/U 4/4, Erstbeleg), f22v P.4 (H/C/F/U 4/4), f29v P.5 (H/C/F/U 4/4) | R2, R41, R43 | ★★★ |
| chain | cha + aiin | חַעַיִן | lebendiges Auge / Auge des Lebens | f25r P.3 (H/C/F 3/3, Erstbeleg), f28v P2.8 (H/C/F/U 4/4), f29v P.5 (H/C/F/U 4/4), f30r, f103r | R43 | ★★★★ |
| chal | chal | חָל | gilt für / betrifft | f3r P.4 (H/C/D/F 4/4, Erstbeleg), f8r P3.20 (H/C/F 3/3), f8v P.12 (H/C/F/U 4/4), f23r, f58r, f71v, f103r | R43 | ★★★★ |
| chary | char + -y | חַרִי | sein Fieber | f8v P.4 (H/C/F/U 4/4, Erstbeleg), f58r P.6 (H/F 2/2), f103v P.44 (H/F 2/2) | R43 | ★★★ |
| dain | dain (Part. QAL דין) | דָּן | Richter (Partizip QAL von דין) | f1r (T2.10–P3.20, ×4, Erstbeleg), f2r P.9 (H/C/F 3/3), f3v P.14 (H/C/F/U 4/4), f7r, f7v, f8r, f8v, f10r, f10v, f11r, f11v, f13v, f14r, f15r, f17v, f22r, f23r, f23v, f27r, f28v, f32r, f32v, f33v | R43 | ★★★★ |
| dan | dan | דָּן | er hat geurteilt (Qal Perfekt) / Richter | f2r (P.5, P.7, P.11, Erstbeleg), f11v P.1 (H/C/U 3/4), f16v P.5 (H/C/F 3/3) | R43 | ★★★ |
| dary | dar + -y | דַּרִי | mein Leuchtendes / mein Licht | f9v P.9 (H/C/F/U 4/4, Erstbeleg), f66r (L.4, R.20), f77r P.24 (H/F/V 3/4), f114v, f115v | R43 | ★★★★ |
| keey | keey | כֵּי | denn / weil | f1r P4.26 (H/F/U 3/5, Erstbeleg), f4v P.12 (H/C/F/U 4/4), f5r P.7 (H/F 2/3), f7r, f21r, f27r, f30r, f31r, f99r, f103v, f115r, f115v | R15, R19, R40, R43 | ★★★★ |
| shodaiin | shod + daiin | שׁוֹדִּין | Todesurteil | f2r P.5 (H/C/F 3/3, Erstbeleg), f3r P.18 (H/C/F 3/3), f4v P.13 (H/C/F/U 4/4), f5r, f32r | R2, R30, R43 | ★★★★ |


### D. Abgeleitete Lexikon-Einträge (R43 Kandidaten) (212)

| EVA | Morph. | Hebräisch | Deutsch | Evidenz | Regeln | Konf. |
| --- | --- | --- | --- | --- | --- | --- |
| daid | d- + ai + d- | דַּאִידַּ | ? / תָּמִיד = dauerhaft (Semantik noch offen) | f24v P.7 (H/C/F/U 4/4, Erstbeleg) | R41 | ★★ (R43 Kandidat) |
| dainod | d- + aiin + od | דַּאִיןעֹד | er behandelt das Auge weiter | f16r T1.4 (H/C/F 3/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| dairam | d- + ir + am | דְּאִיראָם | von dem Leuchtenden aller | — | R41 | ★★★ (R43 Kandidat) |
| dairin | d- + ir + -in | דְּאִירִין | von dem Leuchtenden | f16v P.6 (H/C/F 3/3, Erstbeleg) | R41 | ★★★ (R43 Kandidat) |
| dait | d- + ʿet | דַּעִת | von/aus der Zeit / im Moment (zeitliche Deiktik) | — | R41 | ★★ (R43 Kandidat) |
| dchar | d- + kar | דְּכַּר | vom Widder / männlich (Zutaten-Term) | f28r P.2 (H/C/F 3/3, Erstbeleg) | R41, R45 | ★★★ (R43 Kandidat) |
| dchm | d- + cham | דְּחָם | von der Entzündung | f13r P.1 (H/F 2/3, Erstbeleg) | R41 | ★★★ (R43 Kandidat) |
| dchorol | d- + k- + or + ol- | דְּכְּאוֹרעֹלְ | von der Pupille hin | — | R2, R41 | ★★★ (R43 Kandidat) |
| ddor | d- + dor | דְּדֹּר | von Generation/Zeitraum [intensiv] | — | R2, R41 | ★★★ (R43 Kandidat) |
| deaiin | d- + aiin | דְּעַיִן | vom Auge | f28r P.9 (H/C/F 3/3, Erstbeleg) | R41 | ★★★★ (R43 Kandidat) |
| dsheor | d- + she- + or | דְּשֶׁאוֹר | von dem, was Licht ist | — | R2, R41 | ★★★ (R43 Kandidat) |
| dsholdy | d- + shol + -dy | דְּשׁוֹלדִּי | von Scheol (dessen/Genitiv) | f9r P.5 (H/C 2/3, Erstbeleg) | R2, R41 | ★★★★★ (R43 Kandidat) |
| doky | do- + ky | דּוֹכִּי | sein denn / weil | f18v P.9 (H/C/F/U 4/4, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| eedy | e- + -dy | אֵדִּי | kein Licht von | f26r P.5 (H/C/F 3/3, Erstbeleg) | R19, R41 | ★★★ (R43 Kandidat) |
| eeor | e- + or | אֵאוֹר | kein Licht | f24r P.4 (H/C/F 3/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| chakod | k- + akod | כְּעַכֹּד | wie zusammen / versammelt | f28r P.2 (H/C/F 3/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| cheaiin | k- + e + aiin | כְּ+אֵ+עַיִן | wie das Licht des Auges | f2v P.7 (H/C/D/F/U 5/5, Erstbeleg) | R41 | ★★★ (R43 Kandidat) |
| cheekdam | k- + e- + k- + dam | כְּאֵכְּדָּם | wie das Zeichen des Blutes | — | R41 | ★★★★ (R43 Kandidat) |
| cheesees | k- + e- + s- + e- + sh | כְּאֵשׂאֵשׁ | Dreifach-Licht-Zeichen | f25r P.3 (H/C/F 3/3, Erstbeleg) | R41 | ★★ (R43 Kandidat) |
| cheeykam | cheey + k- + am | חֵיי+כְּ+עַם | wie das Leben des Volkes | f3v P.3 (H/C/F/U 4/4, Erstbeleg) | R41 | ★★★ (R43 Kandidat) |
| chekhol | k- + k- + chol | כְּכָּחֹל | wie das Augenpigment | — | R2, R41 | ★★★ (R43 Kandidat) |
| chodair | k- + od + ir | כֹּ+עוֹד+אִיר | wie weiteres Leuchten / wie noch Licht | f3v P.12 (H/C/F/U 4/4, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| chodaly | k- + od + al + -y | כֹּ+עוֹד+עַל+יְ | wie noch darüber / wie weiter heilend | f3v P.6 (H/C/F/U 4/4, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| chokeos | k- + okeos | כֹּכֵּאוֹס | wie ein Kelch (Botanik) | f2v P.7 (H/C/F/U 4/5, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| chokshor | k- + chok + shor | כְּחֹקשׁוֹר | wie die Vorschrift des Zeichens | f14v P.8 (H/C/U 3/4, Erstbeleg) | R2, R41 | ★★★★ (R43 Kandidat) |
| cholam | k- + olom | כֹּעוֹלָם | wie die Welt / wie Ewigkeit | — | R2, R41 | ★★★★ (R43 Kandidat) |
| cholo | k- + olo | כֹּ+לוֹ | wie für ihn / wie sein Kelch | f2v P.4 (H/C/F/U 4/4, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| choraiin | k- + ar + aiin | כֹּאַרעַיִן | Heilung des Auges / wie das Licht des Auges | f4r P.2 (H/C/F 3/3, Erstbeleg) | R2, R41 | ★★★★ (R43 Kandidat) |
| chseeor | k- + shee + or | כְּשֵׁאוֹר | wie die Gabe des Lichts | — | R2, R41 | ★★★ (R43 Kandidat) |
| chykar | k- + hey + kar | כְּהֵיכַּר | Blässe-Kraft (Zutaten-Variante?) | f29v P.10 (H/C/F/U 4/4, Erstbeleg) | R41 | ★★ (R43 Kandidat) |
| ckhal | k- + hal | כְּהַל | Nachlassen des Fiebers | f6v P.17 (H/C/D 3/5, Erstbeleg) | R41 | ★★★ (R43 Kandidat) |
| ckhear | k- + k- + or | כְּכְּאֵר | wie das Licht | f25v P.4 (H/C/F 3/3, Erstbeleg) | R41 | ★★★★ (R43 Kandidat) |
| cphal | k- + palal | כְּפָּלַל | wie Gebet / Urteil | — | R41 | ★★ (R43 Kandidat) |
| cphar | k- + par | כְּפַּר | Sühne / Bedeckung | f11v P.1 (H/C/U 3/4, Erstbeleg) | R41 | ★★★ (R43 Kandidat) |
| cphary | k- + par + -y | כְּפַּריְ | wie sein Sühnopfer / wie seine Expiation | f27r P.5 (H/C/F 3/4, Erstbeleg) | R41 | ★★ (R43 Kandidat) |
| cphoaiin | k- + pho + aiin | כְּפְּעַיִן | wie der Atemweg des Auges | f30v P.8 (H/C/F 3/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| ctheen | k- + ten | כְּתֵּן | wie Gewähren / Geben | — | R41 | ★★ (R43 Kandidat) |
| ctheor | k- + ten + or | כְּתֶּאוֹר | wie Licht-Gewähren / wie Erleuchtung | f22r P.9 (H/C/F 3/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| cthodoaly | k- + t- + ody + al + -y | כְּ+תְּ+עוֹד+עַל+יְ | wie noch weiter darüber (Intensivform zu chodaly) | f3v P.9 (H/C/F/U 4/4, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| cthorchy | k- + t- + or + k- + chy | כְּתְּאוֹרכְּהִי | vollständige Heilung der Blässe | f30r P.7 (H/C/F 3/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| kcham | k- + cham | כְּ+חַם | wie Wärme/Entzündung (Var. zu kchom mit cham statt chom) | f3v P.12 (H/C/F/U 4/4, Erstbeleg) | R40, R41 | ★★★ (R43 Kandidat) |
| kchom | k- + chom | כְּחֹם | wie Hitze / wie Fieber | f3v P.8 (H/C/F/U 4/4, Erstbeleg) | R2, R31, R40, R41 | ★★★ (R43 Kandidat) |
| kchorl | k- + chor + l- | כְּחֹרלְ | wie die Pupille hin | — | R2, R41 | ★★ (R43 Kandidat) |
| keeod | k- + od | כֵּעוֹד | denn noch / immer noch | — | R2, R41 | ★★★ (R43 Kandidat) |
| koaiin | k- + oaiin | כְּ+עַיִן | wie das Auge (Var. zu kaiin/koiin) | f3v P.1 (H/C/D/F/U 5/5, Erstbeleg) | R2, R8, R41 | ★★★ (R43 Kandidat) |
| koiin | k- + aiin | כֹּעַיִן | wie das Auge | f16r P1.3 (H/C/F 3/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| koshet | k- + she + t- | כֹּשֵׁתְּ | Scheol-Vollständigkeit (temporaler Abschlussterm) | f16v P.3 (H/F 2/3, Erstbeleg) | R2, R41 | ★★ (R43 Kandidat) |
| ksor | k- + shar | כֵּשָׁר | denn/wie passend/gesund | — | R2, R41 | ★★★ (R43 Kandidat) |
| lshaiir | l- + s- + aiin + ir | לְשׂעַיִןאִיר | für Augenlicht-Glanz | f34v P.5 (H/C/F 3/4, Erstbeleg) | R41 | ★★★★ (R43 Kandidat) |
| lshol | l- + shol | לְשׁוֹל | zum Tod / zu Scheol | — | R2, R41 | ★★★★★ (R43 Kandidat) |
| lshy | l- + shy | לְ+שֵׁי | für die Gabe / für sein Wesen | f2v P.3 (H/C/F/U 4/4, Erstbeleg) | R41 | ★★★ (R43 Kandidat) |
| oaorar | o- + o- + or + or | עַאַאוֹראָר | auf das Licht der Heilung | f16v P.13 (H/F 2/3, Erstbeleg) | R2, R41 | ★★★★ (R43 Kandidat) |
| octhor | o- + k- + t- + or | עַכְּתֹּר | auf vollständige Heilung | — | R2, R41 | ★★★★ (R43 Kandidat) |
| octhos | o- + k- + t- + sh | עַכְּתֹשׁ | auf wie Feuer / Fieber | f13v P.1 (H/C/F 3/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| odaiim | o- + daiin + -im | עַדִּינִים | auf den (kollektiven) Urteilen | f24v P.16 (H/C/F/U 4/4, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| odaldy | o- + dal + -dy | עַדַּלדִּי | über die Schwäche dessen | f17v P.1 (H/C/F 3/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| odol | o- + dol | עַדָּוֶה | auf die Krankheit | f9v P.6 (H/C/F/U 4/4, Erstbeleg) | R2, R41 | ★★★★ (R43 Kandidat) |
| oeeen | o- + een | עַאֵין | auf das Fehlen / Nichts (emphatische Null) | f14r P.12 (H/F 2/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| oekor | o- + e- + qor | עַאֵקֹר | auf die Kälte / das Uprooting (direktional) | f17v P.6 (H/F 2/3, Erstbeleg) | R2, R41 | ★★ (R43 Kandidat) |
| oir | o- + or | עַאוֹר | auf das Licht / Direktional-Heilung | f14r P.6 (H/C/F 3/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| okchain | o- + k- + chaiin | עַכְּחַיִּין | hin zu Leben / auf Leben hin | f22v P.13 (H/C/F/U 4/4, Erstbeleg) | R2, R41 | ★★★★ (R43 Kandidat) |
| okchan | o- + k- + chan | עַכְּחָן | auf / für die Gnade (positive Prognose-Direktional) | f32v P.6 (H/C/F 3/4, Erstbeleg) | R2, R41 | ★★★★ (R43 Kandidat) |
| okchod | o- + k- + chod | עַכְּחֹד | auf die Schärfe / Akutheit (therapeut. Direktional) | f57v R3.1 (V/U 2/3, Erstbeleg) | R2, R41 | ★★★★ (R43 Kandidat) |
| okeodaly | o- + k- + ol + dal | עַכֵּעֹדַּל | auf dem Weg des Schwachen | — | R2, R41 | ★★★ (R43 Kandidat) |
| okorory | o- + k- + or + or + -y | עַכְּאוֹראוֹרִי | auf das Licht / mein Licht (Possessiv) | f13r P.10 (H/C/F 3/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| okytaiin | o- + k- + t- + aiin | עַכְּתָּעַיִן | auf die Weise, dass er das Auge heilt | f16v P.11 (H/C/F 3/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| opchor | o- + p- + chor | עַפְּחֹר | auf die Pupille (Atemweg-Befund) | f13r P.1 (H/C 2/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| opsheolaiin | o- + p- + sheol + aiin | עַפֶּשְׁאוֹלעַיִן | am Nadir-Punkt des Sternauges | f58r P.26 (H/F 2/2, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| oscheor | o- + she- + or | עַשֶׁאוֹר | auf dem, was Licht ist | f19r P.3 (H/F 2/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| otoaiin | o- + oto- + aiin | עַתוֹעַיִן | auf seine Augen (Possessiv) | f1v P.5 (H/C/F 3/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| okoldm | ol- + kol + dam | עַלכֹּלדָּם | über alles Blut | — | R2, R41 | ★★★★ (R43 Kandidat) |
| olchdaiin | ol- + chy + daiin | עַלכְּהֵדִּין | über Blässe-Urteil | — | R2, R41, R61 | ★★★★ (R43 Kandidat) |
| oldckhy | ol- + d- + k- + chy | עַלדְּכְּהִי | über die Blässe davon | — | R2, R41 | ★★★ (R43 Kandidat) |
| olsar | ol- + sar | עַלשַׂר | über den Arzt / ärztliche Aufsicht | f23v P.6 (H/C/F/U 4/4, Erstbeleg) | R2, R41 | ★★ (R43 Kandidat) |
| olsheol | ol- + sheol | עַלשְׁאוֹל | über Scheol | f31r P.11 (H/C/F 3/3, Erstbeleg) | R2, R41, R61 | ★★★ (R43 Kandidat) |
| olsheor | ol- + sho + or | עַלשׁאוֹר | über Scheol-Licht | f31r P.13 (H/C/F 3/3, Erstbeleg) | R2, R41, R61 | ★★★ (R43 Kandidat) |
| olshly | ol- + sh- + l- + -y | עַלשׁלְיְ | auf Scheol hin (direktionale Scheol-Form) | f22v P.14 (H/C/F 3/4, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| olteedam | ol- + tee + dam | עַלתֵּדָּם | über das Blut der Zeit | f31v P.7 (H/F 2/3, Erstbeleg) | R2, R41, R61 | ★★★★ (R43 Kandidat) |
| olytol | ol- + ytol | עַל+יְ+תֹּלֹל | über dem er geschwächt wird | f3v P.2 (H/C/D/F/U 5/5, Erstbeleg) | R2, R41, R61 | ★★★ (R43 Kandidat) |
| fochof | p- + k- + p- | פֹכֹפְ | Mund/Kehle-alles / Kehlenbereich | — | R2, R41 | ★★★ (R43 Kandidat) |
| fshody | p- + sho + -dy | פְּשׁוֹדִּי | von Scheol | — | R2, R41 | ★★★ (R43 Kandidat) |
| pchedal | p- + k- + dal | פְּכֶּדַּל | bei dem Schwachen | — | R41 | ★★★ (R43 Kandidat) |
| pcheol | p- + k- + ol | פְּכֶּעֹל | bei der Last | f3r P.11 (H/C/F 3/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| pchodar | p- + k- + dar | פְּכֹּדַּר | wie Finsternis / Dunkelheit | f115r P.29 (H/F 2/2, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| pchraiin | p- + r- + aiin | פְּרְעַיִן | für/bei das Licht des Auges | — | R41 | ★★★ (R43 Kandidat) |
| pochaiin | p- + k- + aiin | פֹּכְּעַיִן | beim/am Auge | f19v P.1 (H/C/U 3/4, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| poraiin | p- + or + aiin | פְּאוֹרעַיִן | Licht des Auges | — | R2, R41 | ★★★ (R43 Kandidat) |
| qocheor | qo- + cheor | וְכְּאוֹר | und wie Licht (= qokcheor Kurzf.?) | f3r P.3 (H/F 2/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| qoeees | qo- + o- + esh | וְעַאֵשׁ | und auf dem Feuer / Fieber | f18v P.2 (H/C/U 3/4, Erstbeleg) | R2, R41 | ★★★★ (R43 Kandidat) |
| qokay | qo- + k- + chey | וְכְּחַי | und wie lebendig | f18v P.4 (H/C/F/U 4/4, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| qokcheor | qo- + k- + k- + or | וְכְּכְּאֵוֹר | und wie das Licht | — | R2, R41 | ★★★ (R43 Kandidat) |
| qokedam | qo- + k- + dam | וְכְּדָּם | und wie das Blut | f57r P.8 (H/C 2/3, Erstbeleg) | R2, R41 | ★★★★ (R43 Kandidat) |
| qokeees | qo- + k- + esh | וְכְּעֵשׁ | und wie Feuer / Fieber | f18v P.6 (H/C/U 3/4, Erstbeleg) | R2, R41 | ★★★★ (R43 Kandidat) |
| qokoral | qo- + k- + or + ol- | וְכְּאֹרעַלְ | und wie Licht-auf | — | R2, R41 | ★★ (R43 Kandidat) |
| qokorar | qo- + kol + or + ar | וְכֹּאוֹראָר | und alles Licht der Heilung | f19r P.4 (H/C/F 3/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| qokshol | qo- + k- + shol | וְ+כְּ+שׁוֹל | und wie Scheol/Tod | f3v P.10 (H/C/D/F/U 5/5, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| qoldar | qo- + ol- + d- + ar | וְעַלדְּאַר | und über den Leuchtenden | f34v P.4 (H/C/F/U 4/4, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| qopchaiin | qo- + p- + k- + aiin | וְפְּכְּעַיִן | und Atemweg des Auges | f17v P.17 (H/C/F 3/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| qoschodam | qo- + schol + dam | וְשׁכֹּדָּם | und Universalheilmittel des Blutes | f3r P.12 (H/C/F 3/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| qoteedar | qo- + t- + dar | וְתֵּדַּר | und er/du wirst leuchten | f26r P.8 (H/C/F 3/3, Erstbeleg) | R2, R41 | ★★ (R43 Kandidat) |
| schol | s- + kol | שׂכֹּל | Arznei für alles / Universalheilmittel | f8r T3.21 (H/C/F 3/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| soin | s- + a- + aiin | שׂעַיִן | Feuer des Auges / Augenentzündung | — | R2, R41 | ★★★ (R43 Kandidat) |
| sokar | s- + o- + k- + ar | שׂאוֹכְּאָר | Heilungs-Arzt des Lichts | f16v P.13 (H/C/F 3/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| sheam | she- + am | שֶׁ+עַם | welche das Volk / Gabe der Mutter | f3v P.14 (H/C/F/U 4/4, Erstbeleg) | R41 | ★★★ (R43 Kandidat) |
| taiir | t- + ir | תָּאִיר | es wird leuchten / heilen | — | R41 | ★★★★ (R43 Kandidat) |
| told | t- + yld | תּוֹלֵד | es erzeugt / bringt hervor | f18v P.1 (H/C/U 3/4, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| toror | t- + or + or | תְּאוֹראוֹר | sie heilt | f16r P2.10 (H/C 2/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| tshaiin | t- + sh + aiin | תּשׁעַיִן | du wirst das Auge [behandeln] | f21r P.9 (H/C 2/3, Erstbeleg) | R41 | ★★ (R43 Kandidat) |
| tshdar | t- + sh- + d- + ar | תְּשׁדָּאַר | Jahreszeit-Zeichen (Sprache-B-Variante von torshor) | f33r P.1 (H/C/F 3/3, Erstbeleg) | R41 | ★★★ (R43 Kandidat) |
| tsheoarom | t- + she- + or + om | תְּשְׁאוֹרוֹם | du wirst von Scheol aufsteigen | f3r P.15 (H/C/F 3/3, Erstbeleg) | R2, R41 | ★★★★ (R43 Kandidat) |
| tshoiin | t- + sho + aiin | תְּשׁוֹעַיִן | [sie] wendet das Auge von Scheol | — | R2, R41 | ★★★★ (R43 Kandidat) |
| tshokeody | t- + sho + k- + chy | תְּשׁכֵּהִי | Tav-Scheol-Blässe | — | R2, R41 | ★★★ (R43 Kandidat) |
| ychair | y- + char + ir | יְחַאִיר | er wird durch Wärme leuchten | f18r P.12 (H/C/F 3/3, Erstbeleg) | R41 | ★★★ (R43 Kandidat) |
| ycheol | y- + k- + eol | יְכְּאֵוֹל | er wird wie Scheol-Licht sein (ambivalent) | f24v P.7 (H/C/F/U 4/4, Erstbeleg) | R2, R41 | ★★ (R43 Kandidat) |
| ychody | y- + k- + dy | יְכֹּדִּי | er wird urteilen (Variante von ytchody) | f30r P.2 (H/F 2/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| ychoees | y- + kol + esh | יְכֹּעֵשׁ | er löscht das Feuer / heilt das Fieber | — | R2, R41 | ★★★ (R43 Kandidat) |
| ychom | y- + chom | יְחוֹם | er wird genesen / er wird warm | f29r P.9 (H/C/F/U 4/4, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| ychtaiin | y- + k- + t- + aiin | יְכְּתָּעַיִן | er heilt das Auge vollständig | f3r P.6 (H/F 2/3, Erstbeleg) | R41 | ★★★ (R43 Kandidat) |
| ydain | y- + d- + aiin | יְדַיִן | er wird das Auge behandeln | f16r P2.8 (H/C/F 3/3, Erstbeleg) | R3, R41 | ★★ (R43 Kandidat) |
| ydals | y- + dal + sh- | יְדַּלְשׁ | er wird Schwäche läutern | f24v P.2 (H/F/U 3/4, Erstbeleg) | R41 | ★★ (R43 Kandidat) |
| ydl | y- + dal | יִדַּל | er wird schwach werden (Qal von דלל) | f18v P.4 (H/C/F/U 4/4, Erstbeleg) | R41 | ★★★ (R43 Kandidat) |
| yees | y- + esh | יְאֵשׁ | er löscht das Feuer / Fieber | f19v P.12 (H/C/F/U 4/4, Erstbeleg) | R41 | ★★★ (R43 Kandidat) |
| yfodain | y- + padah + aiin | יְפָּדָהיִן | er wird das Auge erlösen / befreien | — | R2, R41 | ★★★★ (R43 Kandidat) |
| ykair | y- + k- + ir | יְכְּאִיר | er heilt leuchtend | f16r P1.3 (H/C/F 3/3, Erstbeleg) | R41 | ★★ (R43 Kandidat) |
| ykam | y- + qam | יְקָם | er wird aufstehen / sich erheben (Qal קום) | f18v P.8 (H/C/F/U 4/4, Erstbeleg) | R41 | ★★★ (R43 Kandidat) |
| ykchaiin | y- + k- + chaiin | יְכְּחַיִּין | er wird wie Leben werden | f10r P.7 (H/C/F 3/3, Erstbeleg) | R41 | ★★★★ (R43 Kandidat) |
| ykcheor | y- + k- + k- + or | יְכְּכְּאוֹר | er wird sein wie Licht (dreifach intensiv) | f22v P.5 (H/C/F/U 4/4, Erstbeleg) | R2, R41 | ★★★★ (R43 Kandidat) |
| ykcholy | y- + k- + chol + -y | יְכְּכֹּלְיְ | er heilt alles | — | R2, R41 | ★★★★ (R43 Kandidat) |
| ykchor | y- + k- + chor | יְכְּחֹר | er heilt die Pupille | f19r (P.10, P.12, Erstbeleg) | R2, R41 | ★★★★★ (R43 Kandidat) |
| ykeechy | y- + k- + e- + k- + chy | יְכְּאֵכְּהֵי | er heilt wie Blässe-Licht | — | R41 | ★★ (R43 Kandidat) |
| ykoaiin | y- + k- + oaiin | יְ+כּוֹ+עַיִן | er heilt wie das Auge | f3v P.1 (H/C/D/F/U 5/5, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| ykoiin | y- + k- + aiin | יְכוֹיִן | er wird sich erholen | f5v P.4 (H/F/U 3/4, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| yoar | y- + o- + or | יְאַאָר | er wird zum Licht hin [heilen] | — | R2, R41 | ★★ (R43 Kandidat) |
| yodaiin | y- + o- + daiin | יוֹדִּין | er weiß das Urteil | f6v P.13 (H/C/D/F/U 5/5, Erstbeleg) | R2, R41 | ★★★★ (R43 Kandidat) |
| ypchor | y- + p- + chor | יְפְּחֹר | er heilt die Pupille [durch Atem] | — | R2, R41 | ★★★ (R43 Kandidat) |
| yshdal | y- + sh- + dal | יְשַׁדַּל | er wird schwächen | — | R41 | ★★★ (R43 Kandidat) |
| ysheol | y- + sheol | יְשׁאֹל | er wird [aus] Scheol [aufsteigen] | f21r P.12 (H/C/F 3/3, Erstbeleg) | R2, R41 | ★★ (R43 Kandidat) |
| ysheor | y- + she- + or | יְשֶׁאוֹר | er/sie wird sein, welches Licht ist | f3r P.8 (H/C/F 3/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| ysho | y- + sho | יְשׁוֹ | es führt zum Tod | — | R2, R41 | ★★★★ (R43 Kandidat) |
| ytalar | y- + tal + or | יְתַּאֹר | er wird [Licht] geben / erleuchten | f58r P.5 (H/F 2/2, Erstbeleg) | R41 | ★★★ (R43 Kandidat) |
| ytchar | y- + t- + char | יְתְּחַר | er/sie wird Fieber zeigen | — | R41 | ★★★ (R43 Kandidat) |
| ytcheear | y- + t- + k- + e + ar | יְ+תְּ+כְּ+אֵ+אָר | er wird sein wie Heilung durch Licht (R28) | f3v P.9 (H/C/F 3/4, Erstbeleg) | R28, R41 | ★★★ (R43 Kandidat) |
| ytchm | y- + t- + cham | יְתְּחֵם | er/sie wird Wärme bringen | — | R41 | ★★★ (R43 Kandidat) |
| ytchody | y- + t- + k- + dy | יְתְּכֹּדִּי | er wird urteilen (Doppelpräfix) | f8r P2.11 (H/C/F 3/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| ytchol | y- + t- + kol | יְתכֹּל | er wird alles vollenden | f28r P.9 (H/C/F 3/3, Erstbeleg) | R2, R41 | ★★★★ (R43 Kandidat) |
| yteam | y- + t- + eam | יְ+תְּ+אָם | er wird das Volk behandeln (R28) | f3v P.14 (H/F/U 3/4, Erstbeleg) | R28, R41 | ★★★ (R43 Kandidat) |
| yteechy | y- + chy | יִחְיֶה | er wird gesund | — | R41 | ★★★ (R43 Kandidat) |
| ytom | y- + tom | יְתָּם | er wird vollständig / komplett (Var. ytam) | — | R2, R41 | ★★ (R43 Kandidat) |
| ytsho | y- + t- + sho | יְתְּשׁ | er wird Scheol zeigen (R28-Typ) | f32r P.4 (H/C/F 3/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| chokcheey | chok + cheey | חֹקחֵיי | Lebensvorschrift | f30v P.11 (H/C/F 3/3, Erstbeleg) | R2 | ★★★★ (R43 Kandidat) |
| chokeor | chok + e- + or | חֹקאֵאוֹר | Vorschrift des Lichts | f30v P.3 (H/C/F 3/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| daiidal | daiin + dal | דִּינדַּל | Urteil der Schwäche | f23r P.6 (H/C 2/3, Erstbeleg) | — | ★★★ (R43 Kandidat) |
| daiidy | daii + -dy | דַּיִּדִּי | dessen Urteil (Kurzform ohne Nun; EVA-distinct von daiindy) | f3v P.2 (H/C/F/U 4/5, Erstbeleg) | — | ★★★ (R43 Kandidat) |
| daiim | daiin + -m | דִּינם | Urteile (Plural) | f3v P.10 (H/C/D/F/U 5/5, Erstbeleg) | — | ★★★ (R43 Kandidat) |
| daiindy | daiin + -dy | דִּינדִּי | das Urteil dessen | — | — | ★★★★★ (R43 Kandidat) |
| daiinol | daiin + ol- | דִּינעַל | Urteil über [etwas] | f19r P.12 (H/C/F 3/3, Erstbeleg) | R2 | ★★★ (R43 Kandidat) |
| daiity | daiin + t- | דִּינתּ | Urteils-tav / juristische Abschlussform | f25v P.3 (H/C 2/3, Erstbeleg) | — | ★★ (R43 Kandidat) |
| dala | dal + -a | דַּלָּ | Schwäche (Femininum von dal) | f14r P.5 (H/F 2/3, Erstbeleg) | — | ★★★ (R43 Kandidat) |
| dalchy | dal + k- + chy | דַּלכְּהִי | die Schwäche der Blässe | f58r P.4 (H/F 2/2, Erstbeleg) | R41 | ★★★★ (R43 Kandidat) |
| daldalol | dal + dal + ol | דַּלדַּלעוֹל | doppelte Schwäche des Joches | — | R2 | ★★ (R43 Kandidat) |
| dalory | dal + or + -y | דַּלאוֹריְ | Schwäche zum Licht | f23r P.11 (H/C/F 3/3, Erstbeleg) | R2 | ★★ (R43 Kandidat) |
| daly·dal | dal + -y · dal | דַּלִּידַּל | seine Schwäche | — | — | ★★★★ (R43 Kandidat) |
| doldaiin | dol + daiin | דּוֹלדִּין | Krankheits-Urteil | f18r P.7 (H/F 2/3, Erstbeleg) | R2 | ★★★ (R43 Kandidat) |
| doldy | dol + -dy | דּוֹלדִּי | von der Krankheit davon | f18r P.7 (H/C/F 3/3, Erstbeleg) | R2 | ★★★ (R43 Kandidat) |
| dol·shol | dol + shol | דָּוֶהשׁוֹל | Schmerz-Scheol (Warnsignal bei Überdosierung) | — | R2 | ★★★ (R43 Kandidat) |
| cholar | kol + -lo + or | כֹּלוֹר | alles sein Licht | — | R2 | ★★★ (R43 Kandidat) |
| chol·chol | kol + kol | כֹּלכֹּל | alles-alles | — | R2 | ★★★ (R43 Kandidat) |
| chololy | kol + ol + -y | כֹּלעַליְ | alles über ihm / vollständig darüber | f3r P.5 (H/C/F 3/3, Erstbeleg) | R2 | ★★★ (R43 Kandidat) |
| chotshol | kol + t- + sheol | כֹּתּשְׁאוֹל | alles-du-wirst-Scheol (morphologisch fragwürdig) | f21v P.6 (H/C/F/U 4/4, Erstbeleg) | R2, R41 | ★★ (R43 Kandidat) |
| oraiino | or + aiin + -o | אוֹרעַיִןוֹ | Licht seines Auges | — | R2 | ★★★★ (R43 Kandidat) |
| orchaiin | or + k- + aiin | אֹרכְּעַיִין | Licht-wie-Auge | f25v P.7 (H/C 2/3, Erstbeleg) | R2, R41 | ★★★★ (R43 Kandidat) |
| ory | or + -y | אוֹריְ | sein Licht / er erleuchtet | — | R2 | ★★★ (R43 Kandidat) |
| otaiphy | ot + a + y + p- + hey | אֹתאַיְפֶּהֵי | Hapax: Zeichen-Blässe-Mund (Einzelbeleg) | — | R2, R41 | ★★ (R43 Kandidat) |
| otalef | ot + alef | אוֹתאָלֶף | Zeichen des Aleph / Zeichen des Ochsen | f72r1 S1.9 (H/K/V 3/3, Erstbeleg) | R2 | ★★★ (R43 Kandidat) |
| otchom | ot + chom | אוֹת+חֹם | Zeichen der Wärme | f3r P.15 (H/C/F 3/3, Erstbeleg) | R2 | ★★★ (R43 Kandidat) |
| otly | ot + l- | אוֹתלֵ | Zeichen zu/für | f16r P1.2 (H/C 2/3, Erstbeleg) | R2 | ★★★ (R43 Kandidat) |
| otolam | ot + ol- + am | אוֹתעַלאָם | Zeichen über alle / Zeichen der Ewigkeit | f72r2 S1.16 (H/K 2/3, Erstbeleg) | R2, R41 | ★★★★ (R43 Kandidat) |
| otosy | ot + o- + s + -y | אֹתאֹשׂיְ | Zeichen-Scheol-gleich-er | f25r T.7 (H/C/F 3/3, Erstbeleg) | R2, R41 | ★★ (R43 Kandidat) |
| otshor | ot + shor | אוֹתשׁאוֹר | das Zeichen des Lichts | f23v P.6 (H/C/F/U 4/4, Erstbeleg) | R2 | ★★★ (R43 Kandidat) |
| otytchy | ot + y- + t- + k- + chy | אוֹתיְתְּכְּהִי | das Zeichen er-wird-Blässe-zeigen | — | R2, R41 | ★★★ (R43 Kandidat) |
| pchodol | pcho + dol | פְּחֹדֹּל | Atemweg der Krankheit / Mundschmerz | f17v P.1 (H/C/F 3/3, Erstbeleg) | R2 | ★★★ (R43 Kandidat) |
| pocheody | pcho + -dy | פְּחֹדִּי | des Atemwegs | f16r P1.1 (H/F 2/3, Erstbeleg) | R2 | ★★★ (R43 Kandidat) |
| saraiir | sar + ir | שַׂראִיר | Arzt des Leuchtenden | — | — |  (R43 Kandidat) |
| sary | sar + -y | שַׂרִי | mein Arzt / Apotheker (Possessiv) | f9r P.1 (H/C 2/3, Erstbeleg) | — | ★★★★★ (R43 Kandidat) |
| sheeolody | sheol + o- + -dy | שְׁאוֹלעֹדִּי | von jenem Scheol | — | R2, R41 | ★★★ (R43 Kandidat) |
| sheodaiin | sheol + daiin | שְׁאוֹדִּין | Todesurteil (Vollform) | f66r R.7 (H/F 2/3, Erstbeleg) | R2 | ★★★★★ (R43 Kandidat) |
| sheoldam | sheol + dam | שְׁאוֹלדָּם | tödlicher Blutverlust | f3r P.9 (H/F 2/3, Erstbeleg) | R2 | ★★★★★ (R43 Kandidat) |
| sheoltey | sheol + ta + -y | שְׁאוֹלטַיְ | Scheol des Tau-Zeichens | — | R2 | ★★★ (R43 Kandidat) |
| shoaiin | sheol + aiin | שְׁאוֹלעַיִן | Scheol des Auges (Todesurteil für das Sehorgan) | — | R2, R40 | ★★ (R43 Kandidat) |
| olsho | sho + -lo | שׁוֹלוֹ | sein Scheol | — | R2 | ★★★ (R43 Kandidat) |
| shockho | sho + k- + ho | שׁוֹ+כְּ+הוֹ | Scheol wie er / wie das Scheol davon | f3v P.11 (H/C/F/U 4/4, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| shoin | sho + aiin | שׁוֹיִן | Scheol des Auges | — | R2 | ★★ (R43 Kandidat) |
| shokal | sho + kol | שׁוֹכָּל | Scheol von allem | f58r P.35 (H/F 2/2, Erstbeleg) | R2 | ★★★ (R43 Kandidat) |
| sholo | sho + -lo | שְׁאוֹלוֹ | Scheol für ihn | — | R2 | ★★★ (R43 Kandidat) |
| shot | sho + t- | שׁוֹתְּ | vollständiges Scheol | — | R2 | ★★★ (R43 Kandidat) |
| shotoly | sho + t- + ol + -y | שׁוֹתּעוֹליְ | Scheol-Last hin | f22v P.13 (H/C/F/U 4/4, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| sotchaiin | sho + ot + k- + aiin | שׁאוֹתכְּעַיִן | das Zeichen dem Auge gleich | f18r P.11 (H/C 2/3, Erstbeleg) | R2, R41 | ★★★ (R43 Kandidat) |
| sholol | shol + ol- | שׁוֹלעַל | Scheol über [etwas] | — | R2 | ★★ (R43 Kandidat) |
| sholor | shol + or | שׁוֹלאֹר | Scheol-Licht | f17v P.21 (H/C/F 3/3, Erstbeleg) | R2 | ★★ (R43 Kandidat) |
| sholshdy | shol + sh + -dy | שׁוֹלשׁדִּי | von dem Scheol | — | R2 | ★★★ (R43 Kandidat) |
| aiior | aiin + y + or | עַיִאוֹר | Auge des Lichts | — | R2 | ★★ (R43 Kandidat) |
| chodl | chodl (Part. von חדל) | חֹדֵל | der Aufhörende / der Sterbende (Aktiv-Partizip) | f11r P.5 (H/C/F 3/3, Erstbeleg) | R2 | ★★★ (R43 Kandidat) |
| damo | dam + -o | דָּמוֹ | sein Blut | f3r (P.7, P.8, Erstbeleg) | R2 | ★★★★ (R43 Kandidat) |
| darchor | dar + chor | דַּרְכּוֹר | sein Krankheitsverlauf | f5v P.3 (H/C/F/U 4/4, Erstbeleg) | R2 | ★★★ (R43 Kandidat) |
| dydyd | dy + dy + dy | דִּידִּידִּי | dreifacher Relativpartikel (extremer Betonungsmodus) | f1r P3.17 (H/F/U 3/5, Erstbeleg) | R25 | ★★ (R43 Kandidat) |
| keeees | keeees | ??? | Hapax (Schreiberfehler nicht ausgeschlossen) | f21v P.3 (H/C/F/U 4/4, Erstbeleg) | — | ★★ (R43 Kandidat) |
| pysaiinor | pi + s- + aiin + or | פִּישׂעַיִןאוֹר | Mund gleich dem Auge des Lichts | — | R2, R41 | ★★ (R43 Kandidat) |
| sam.chorly | sham + kor + li | שָׁםכֹּרלִי | so heile meine Pupille | — | R2 | ★★★ (R43 Kandidat) |
| shodain | shod + d- + aiin | שׁוֹדדַּעַיִן | Zerstörung des Auges (schärfste negative Augenprognose) | f1r P3.12 (H/C/F/N/U 5/5, Erstbeleg) | R2, R40, R41 | ★★ (R43 Kandidat) |
| shorodo | shor + odo | שׁוֹרעוֹדוֹ | das Zeichen besteht fort | f13r P.5 (H/C 2/3, Erstbeleg) | R2 | ★★★ (R43 Kandidat) |
| shydal | shy + dal | שֵׁידַּל | die Gabe der Schwäche | — | — | ★★★ (R43 Kandidat) |
| torshor | tor + shor | תֹּרשׁוֹר | Jahreszeit-Zeichen / saisonaler Eintrag | f13r P.1 (H/C/F 3/3, Erstbeleg) | R2 | ★★★ (R43 Kandidat) |


## V. Grammatik — Präfixe, Suffixe & Schemata

### Präfix-System

| EVA-Präfix | Hebräisch | Funktion | Beispiel (EVA) | Beispiel (Heb) | Konf. |
| --- | --- | --- | --- | --- | --- |
| qo- | וְ | Vav conjunctive „und/auch“ | qokedam | וְכְּדָּם | ★★★★ |
| o- | עַ | Ayin „auf/bei/von“ | okol | עַכֹּל | ★★★★ |
| l- | לְ | Lamed „zu/für/nach“ | lchedy | לְכְּדֵי | ★★★★ |
| d- | דְּ/דִּי | Aramäisches Relativpräfix „von/dessen/welches“ (R45) — äußerste morphol. Schale; kein D1-Flag wenn d- vor Konsonant | dsholdy | דְּשׁוֹל+דִּי | ★★★★★ |
| p- | פְּ | Pe-Präfix (Nominalkonstrukt) | pchedal | פְּכֶּדַּל | ★★★ |
| op-/of- | עַ+פֶּ | Ayin+Pe: „auf/an dem Mund/Öffnung von“ — astronomischer Koordinatenmarker (R41-Erweiterung per R47) | opcheear | עַ+פֶּ+כְּ+אֵר | ★★★ |
| y- | יְ | Imperfekt 3. Pers. Sg. Mask. | yshdal | יְשַׁדַּל | ★★★★ |
| t- | תָּ | Imperfekt 3. Pers. Sg. Fem. / 2. Pers. | taiir | תָּאִיר | ★★★★ |


### Suffix-System

| EVA-Suffix | Hebräisch | Funktion | Konf. |
| --- | --- | --- | --- |
| -dy | דִּי | Aramäisch: Genitiv/Relativ „von/dessen“ | ★★★★ |
| -dam | דָּם | „Blut“ — Zeilenabschluss-Refrain in f57r | ★★★★★ |
| -dal | דַּל | „schwach/dünn“ — Diagnose-Refrain | ★★★★ |
| -aiin | עַיִן | „Auge“ — diagnostischer Terminus in Suffixposition | ★★★★ |
| -ody | +דִּי | Vokalhelfer + דִּי; Listenregister f57r P.3–P.4 | ★★★ |
| -aly | +לִי | Zodiak-Suffix -aly: Vokalhelfer + lamed + Yod; Sternlabel-Register (R52a) | ★★★★ |
| -ary | +רִי | Zodiak-Suffix -ary: Vokalhelfer + resch + Yod; Sternlabel-Register (R52a) | ★★★★ |


### Verb-Paradigma y+k+[Terminus] — 6 bestätigt + 3 Kandidaten

| EVA | Hebräisch | Bedeutung | Erstbeleg | Konf. |
| --- | --- | --- | --- | --- |
| ykchaiin | יְ+כְּ+חַיִּין | er wird wie Leben werden | f9r | ★★★★ |
| ycheor | יְ+כְּ+אוֹר | er wird wie Licht heilen | f10r | ★★★★ |
| ykchor | יְ+כְּ+חֹר | er heilt die Pupille | f11r P6 | ★★★★★ |
| ykchy | יְ+כְּ+הִי | er wird Blässe zeigen | f11v P2 | ★★★★ |
| ykaiin | יְ+כְּ+עַיִן | er heilt das Auge | f14r P8 | ★★★★ |
| ykshol | יְ+כְּ+שׁוֹל | er wird zu Scheol gehen (negativ) | f15r P12 | ★★★★ |
| ykair | יְ+כְּ+אִיר | er heilt leuchtend (★★ provisorisch — R43: f16r nur 1×) | f16r P1.3 | ★★ |
| tshaiin | תּ+שׁ+עַיִן | du wirst das Auge [behandeln/waschen] — Direktbefehl (★★★ Kand.) | f21r P9 | ★★★ |
| ykeechy | יְ+כְּ+אֵ+כְּ+הֵי | er heilt wie Blässe-Licht (8. y+k-Verb; ★★★ Kand. R43-Frist: 5 Folios) | f26r P9 | ★★★ |


### Prognose-Schemata

**Quire A (Kräuter, Sprache A):** Symptom (links) ‡ {plant} ‡ Therapie (rechts) → sheol/or (Prognose) → = (Kolophon)

**Quire T / Sprache B:** daiin (Urteil) → shedy+X → Befund (ckhy/dal/dam) → lchedy (Therapieziel) → sheol/or (Prognose)

## VI. Grammatikregeln

57 Regeln gesamt: **40 validiert** (≥ 2 unabhängige Belege) + **17 Kandidaten**. **Regelmoratorium beendet (v8.8.8)** — Verhältnis 40:17 = 2,35:1 ≥ 1,5:1. R60+ freigegeben. R2-ext (v7.5): explizite o-Positionsregel mit Negativtest. R14 und R20 gesichert (★★★★★).

| # | Regel | Evidenz | Konf. |
| --- | --- | --- | --- |
| R1 | qo- = וְ (Vav conjunctive) — ausschließlich Sprache B in Quires A+B — ^qo- (Verbundpräfix) im Regelfall ausschließlich in Spr. BSpr. A Quire A: absent im Regelfall — f001r 0/260 Tokens; f2r Frühbefund → s. §E + R33Gilt mit vollem Geltungsbereich nur für Quires A+B — s. R33 (emergierend), R47 (vollständig), R59 (isoliertes qo-Einzeltoken auch in Spr. A) | qokedam, qokol, qokeedy (f57r, f103r); f001r Spr. A: 0 Belege in 260 Tokens ★★★★★; Ausnahmen ab Quire C: s. R33 (emergierend) + R47 (Quire H vollständig integriert) | ★★★★★ |
| R2 | **o-Positionsdetermination** — ^o → עַ (Ayin, konsonantisch) — ausnahmslos[wortintern]o → ֹ (Ḥolam, Vokalmarker) — ausnahmslosKein Ermessensspielraum (vgl. Mater lectionis: positionell Konsonant _oder_ Vokalmarker)**Negativtest:** 0 Gegenbeispiele in 140+ Einträgen | Wortanfang → Ayin: okol, okoldm, okaiin, odol, okaiin, otor, otam, okchan; wortintern → Ḥolam: qokol (קוֹ+כֹּל), okoldm (עַל+כֹּל+דָּם), sokar, ytor, ychor, shol; Negativtest (v7.5): 0 Gegenbeispiele in 140+ Lexikoneinträgen ✓ | ★★★★ |
| R3 | y-initiale Wörter = Imperfekt 3. Sg. Mask. — ^y → Yiqtol 3. Sg. Mask. | yteechy, yshdal, ykchaiin, ycheor, ychor; f1r: ykal, ykaiin, yshey, ycho, yto, ycheey (6 neue Belege) — >11 Belege / ≥8 Folios | ★★★★★ |
| R4 | t-initiale Wörter = Imperfekt 3. Sg. Fem. / 2. Sg. — ^t → Yiqtol 3. Sg. Fem. / 2. Sg. | taiir; tsheoarom | ★★★★ |
| R5 | shedy und chedy kommen nie im selben Absatz vor — ¬(shedy ∧ chedy) im selben Absatz — gegenseitige Exklusion | 15 Zeilen nur chedy, 17 nur shedy, 5 beide (lange Zeilen) | ★★★★ |
| R6 | Zeilenabschluss-Prognose: sheol/shol = Tod; or = Heilung — Zeilenende: sheol/shol → TodesprognoseZeilenende: or → Heilungsprognose | f103r: 8× sheol am Zeilenende; P.17 endet or·aiin | ★★★★ |
| R7 | daiin am Zeilenanfang = Paragraphen-Öffner — ^daiin in Zeilenposition 1 → Paragrapheneröffnungspartikel | 3× Zeilenanfang f103r; f57r P.5; f10v: 8× | ★★★★ |
| R8 | -aiin als Suffix = עַיִן (Auge) diagnostisch — Suffix -aiin → עַיִן (Auge) — diagnostische Funktion | okaiin, qokaiin je 10–11× | ★★★★ |
| R9 | Refrain-Wörter — Anker-Position (3–5× pro Folio) — 3–5× pro Folio in definierter Anker-Position (Absatzeröffner oder Kolophon) | dam in f57r (4×), dal in f103r P.1 (3×), daiin in f10v (8×) | ★★★★ |
| R10 | -ody-Paragraphen = eigenständiges Listenregister — Paragraphen mit -ody-Endwörtern: nie mit chedy/shedy kombiniert | f57r P.3–P.4: strikte Exklusion | ★★★ |
| R11 | Paragraphen-Ende mit = = Abschlussformel — Token X= in Finalposition → Kolophon-Abschluss_Sektionsabschluss-Variante: odaiim= (עַ+דִּינִים, Plural-Intensiv) in Final-Kolophon — eigenständige Regel bei 2+ Belegen zu erheben (ex R57, v8.1)_ | kaiim=, dom=, daiin=, chckhan=, chal=; f57r cphedom=; f1r T1–T4 (alle 6 Transkriptoren einig); f1v P4-Kolophon chokody=, P10-Kolophon chodar= — 6 neue Belege. _Sektionsabschluss-Variante (1 Beleg, f24v P.16): odaiim= in Final-Kolophon des letzten Quire-C-Paragraphen._ | ★★★★ |
| R12 | Trägersatz-Muster: P.1 (Relativsatz) → P.2 (Hauptsatz mit sar) — Absatz-Sequenz: P.n = Relativsatz → P.(n+1) = Hauptsatz mit sar | f57r P.9; f103r P.1→P.2 | ★★★ |
| R13 | Paragraphen ohne Randstern = positives Prognose-Vokabular — Kein Randstern → positive Terme (or, lor·aiin) | f103r P.3,17,20; f103v: 5/5 or-Paragraphen sternlos | ★★★★ |
| R14 | **{plant}-Marker: Strukturelle und pharmakologische Doppelfunktion** — **Ebene 1 (horizontal):** Text links von {plant} = Diagnose/Indikation; rechts = Therapie/Prognose**Ebene 2 (vertikal):** Vertikale Position von {plant} ≡ Pflanzenteil der Illustration:↑ FLOS/FRUCTUS · CAULIS · FOLIUM · RADIX ↓_Korollar: Kein {plant}-Marker oder Text über gesamter Pflanze = Ganzpflanzen-Präparat (TOTUS)_**Farbcode (dreistufig ★★★★★):**Ebene 1: Alle Wurzeln (homogene Terracotta/Dunkelrot-Fläche) = kein Text (13 Belege)Ebene 2: Homogene Fläche an beliebigem Pflanzenteil = kein Text (3 Nicht-Wurzel-Belege)Ebene 3: Grün = prescribiert (Text vorhanden)_Drei-Kategorien: Fläche (stumm) ≠ Linie/Strich (illustrativ) ≠ FLOS-dotted/Textur (prescribiert)_ | f1v–f10v: 100 % konsistent (Ebene 1); Stolfi f16r: „interrupted by the plant's flower“ — Blüten-Position explizit dokumentiert ★★★★★; pol (Frucht-Term) an Frucht-Position f22r P.1 ★★★★★; f19r: gesamter Text auf Blüten-Höhe, saiin+chor semantisch kohärent mit Kornblumen-Pharmakologie (Augenwasser, Konjunktivitis) ★★★★★; f14r/f15r/f22r/f28r/f30v: rote Wurzeln ohne Text — 5 Belege ★★★★; f13r (v8.4): Inula helenium orange-rote Hauptwurzel ohne Text — 10. Beleg ★★★★★; f002r (v8.4): dunkel übermale Centaurea-Wurzel ohne Text — Beleg 11 ★★★★★; f007r (v8.4): orange-rote Sternblumen-Rhizomwurzel ohne Text — Beleg 12 ★★★★★; f31r (v8.7): pharmakologisches Dunkelrot-Rhizom Tanacetum parthenium ohne Text — Beleg 13 ★★★★★; f25r: dunkelrote Bohnen an Stengelknoten ohne Text — Erstbeleg Nicht-Wurzel-Rot-Muster; f010r (v8.4): rote Oval-Strukturen (Nicht-Wurzel!) ohne Text — 3. Nicht-Wurzel-Beleg → Ebene 2 ★★★★★; f009r: rote Punkt-Ähre MIT Text = FLOS-therapeutisches Rot (dotted) ≠ homogenes Terracotta — Drei-Kategorien-Verfeinerung bestätigt; 21/21 analysierten Folios zeigen selektive Pflanzenteil-Annotation (Muster I) | ★★★★★ |
| R15 | **Paradigma-Wiederholungsreihen** (×2–×5) — **Typ A:** X · X (direkt nebeneinander)**Typ B:** X · [ZT] · X (mit Zwischentext)**Typ B-Dreistufig:** Verb → Nomen → Direktional mit Zwischentext**Typ C:** Drei phonologisch verwandte Stämme in direkter Folge (semantisches Spannungsfeld: Licht-Zeichen → Pupille → Scheol)_**Typ D** (Kand., 1 Beleg): Drei semantisch synonyme Heilungsterme in Kolophon-Finalposition (ex R52, v8.1)_ | f1v P.3 (ckhy·ckho·ckhy); f10r P8 (chor·chor·cholor); f20r P.13 (chor·chor — Typ A); f21r P.12 (ykeea·**chor**·sheey·ysheol·**chor**·chol·daiin·chkaiin= — Typ B, 4. Beleg); f22v P.7 (ychor·chor·qokchol·chory — Dreistufig-Schema, Typ B, 5. Beleg); f23r P.7 (qokchol·dar·qokchol — nominale Rahmendopplung, Typ B nominal, 6. Beleg); f1r P3.L15 (chol·chol — Typ A, 7. Beleg, 4/4 Transkriptoren); f1r P4.L26 (keey·keey — Typ A, 8. Beleg, 3/4 Transkriptoren); f1r P4.L23 (dar…dar — Typ B, 9. Beleg, 4/4); f29r P.8 (shor·chor·sho — Typ C, 10. Beleg); f33v P.6 (chdy·chdy — Typ A, 11. Beleg); f34r P.5 (shedy·shedy — Typ A, 12. Beleg); f34r P.13 (qokar·qokar — Typ B, 13. Beleg) — 13 Belege / 9 Folios → ★★★★★ | ★★★★★ |
| R16 | **Mehrfach-{plant}: Zwei Ebenen** — **Typ 1 (Horizontal-Dreisegment):** Alle {plant}-Marker auf gleicher Höhe: [Diagnose] {plant} [Brücke] {plant} [Prognose] — ein Pflanzenteil**Typ 2 (Vertikal-Zweiteilverschreibung):** {plant}-Marker auf verschiedenen Höhen → jeder Marker kennzeichnet anderen PflanzenteilAbgrenzung: Typ 1 = gleiche Bildzeile; Typ 2 = ≥1 Bildzone Abstand | Typ 1: f2r P.2–P.6: Kornblume mit drei Stielen → drei Segmente auf gleicher Höhe; Typ 2: f15r bilateral-Blüte (zwei Knospen, je eigene Textspalte auf Blüten-Höhe) ★★★★; f30r P.11+P.12: zwei {plant}-Marker auf Blatt-/Rhizom-Höhe → Typ 2 zu prüfen | ★★★★ |
| R17 | shol (apokor.) medial vs. sheol (Vollform) am Zeilenende — Spr. A: shol → MedialpositionSpr. B: sheol → Zeilenende-FinalpositionR17 gilt uneingeschränkt für Quires I–II | f4r–f10v: shol medial (20+×); f103r: sheol final (8×); Zodiak-Register bestätigt ★★★★: f72r1 R1 shol (2× medial) / f72r1 R2 sheol (direkt vor gap = 5. Register-Bestätigung) | ★★★★ |
| R18 | Diagnosepaar shol · chaiin = abwägende Prognose — shol ∧ chaiin → abwägende Prognose; nie einzeln in abwägenden Kontexten | f4r P.2, f4v P.3, f6v P.2, f8v P3, f9r P2 | ★★★★ |
| R19 | **Intensivierungsrhetorik** — ×2 = Emphase×3 = absolutes Urteil×4 + קַיָאם = rechtskräftiges Urteil_**Typ E (★★★ Kand.): ABAB-Verflechtung** — A·B·A·B = doppelt-verflochtene Intensivierung zweier komplementärer PositivtermeDistinkt von Typ A (AA) und Typ B (AXA)_ | Doppel: f4r,f6r,f8v,f10r; Tripel: f5v P.3; Vierfach: f8r P3.19; daiin·daiin (Doppelurteil): f19v P.4 (1. Beleg) + f21v P.4 (2. Beleg, ★★★ Kand. bestätigt); Zodiak-Register ★★★: otam·otam·chotam f72r1 R1 (dreistufige Nominal-Intensivierung) + otaiin·otain f72r1 S1.8 (Kurzform-Paradigmawiederholung); f29r P.6: shor·shor — shor-Dopplung (★★★ Kand.); f30r P.11: cheor·chey·cheor·chey — Corpus-Erstbeleg ABAB-Verflechtung (Typ E ★★★ Kand., alle H/C/F einig). _Rahmungsvariante (1 Beleg, f24r P.16): dal·dam·dal = doppelte Schwäche rahmt Blutbefund — Sandwich-Analogon zu R15-Typ-B-Dopplung (ex R54, v8.1)_ | ★★★★ |
| R20 | Direktionales Antonymenpaar lor ↔ lshol — lor = לְאוֹר (zu Licht/Heilung)lshol = לְשׁוֹל (zu Scheol/Tod)Identische l-Morphologie | f6v P.11 (lor), f7v P.6 (lshol); identische l-Morphologie | ★★★★★ |
| R21 | Schlussformeln mit =-Marker — Inventar — Inventar: kaiim=, dom=, daiin=, chckhan=_Erweitert: qor·chain·cthorchy= (Dreiterm-Positiv: Licht–Auge-des-Lebens–vollständige-Heilung-der-Blässe); shol·chokcheey·daiin·kchydy= (Vierterm Scheol-Leben-Urteil-Blässe)_ | f6r, f6v, f8r, f8v, f10v — konsistentes Inventar; f30r P.7 + f30v P.11 — zwei neue Kolophon-Typen (beide H/C/F vollständig einig) | ★★★★ |
| R22 | Folio-übergreifendes Fallverlaufs-Narrativ — Prognose-Eskalation ↔ botanische IkonographieQuire A: Heilkräuter → Mandragora → Mohn → Aronstab | Quire A: Heilkräuter → Mandragora → Mohn → Aronstab | ★★★ |
| R23 | Kurztitel-Format (Siman) — Format: 2 Wörter + =-Marker → fasst Paragraphenbefund zusammen | f8r T1–T3 (ocho·daiin=, okokchodm=, schol·sair=); f9r T10 | ★★★★ |
| R24 | shol·dy·…·shol — Emphase-Dopplung mit Genitiv-Brücke — Schema: shol + דִּי + […] + shol | f13r P.1: torshor·opchy·shol·dy·qopchy·shol — einmaliges Strukturmuster | ★★★ |
| R25 | dy × n — Genitivkette als Intensitätsskala — ×1 = Standard×2 = Emphase×3 = absoluter Superlativ_Fusioniertes Token dydyd möglich — ändert Intensitätssemantik nicht (Einzelbeleg f1r P3.17, ex R32, v8.1)_ | f14r P.10, f14v P.7 (×2); f14v P.6 (×3, einmalig) — Kandidat | ★★★ |
| R28 | y+t+[Terminus] — intensivierte/aspektuell verstärkte Imperfektform — y- (3. Sg. Mask.) + t- (3. Sg. Fem./temporal) kombiniert → aspektuell verstärkte FormGilt stammübergreifend: Licht-, Heilungs- _und_ Scheol-Stämme (kein Stammgruppen-Constraint) | ytchor (f16v P.2), ytchy (f16v P.5); f28r P.9: ytchol + yteol (2 aufeinanderfolgende y+t-Verben im Kolophon); f29v P.2: ytchor (Zweitbeleg → ★★★★ in Verbformen) — R43 erfüllt: f16v + f28r = 2 Folios → ★★★ validiert; f30v P.5: ytor = y+t+or (or-Stamm); f32r P.4: ytsho = y+t+sho (Scheol-Stamm) — 3. Folio-Beleg (f16v + f28r + f32r), diverse Termini → ★★★★ | ★★★★ |
| R29 | oto+or — positive Prognose-Abschluss-Geste — otor in Finalposition unmittelbar vor Quire-Abschlusskolophon → positive Prognose | otor in f16v P.12 (vor sokar·oaorar= Quire-B-Abschluss); Zodiak: f71v R2 (eingebettet zwischen shepchol + sheo·shopcho — liturgische Prognose-Formel) + f72r1 R2 (direkt vor chokaiin, am R2-Segment-Ende) — 4 Belege gesamt, ★★★ Kand. | ★★★ |
| R30 | sho- + Nomen = Scheol-Lokalisierung / Todesform des Nomens — Präfix sho- + Nomen → Todesform des Nomens (Scheol-Lokalisierung) | shodain (f001r P3.12), shoaiin (f001r P4.24), shokcheey (f001r P4.22); shoinn (f13v) ★★★★ | ★★★ |
| R31 | Temperatur-Antonymenpaar kor ↔ kchom — hippokratisches Diagnostikschema — kor = קֹר (Kälte) ↔ kchom = כְּ+חֹם (Fieber)In aufeinanderfolgenden Zeilen → hippokratisches Diagnostikschema (vgl. R20) | f001r P3.15 (kor) + P3.16 (kchom); Parallele zu lor↔lshol (R20) | ★★★ |
| R33 | qo--Präfix in Sprache-A-Texten ab Quire C — Übergangszone — Quire A (f001r): qo- absent — 0/260 Tokens ★★★★★Quire A (f2r): Frühemergenz — 4 qo-Tokens, 3/3 Transkriptoren-Konsens → s. §EQuire C: emergierend (~5–10 %, folio-intern ansteigend)Quire H: vollständig integriert → s. R47R1 gilt mit vollem Geltungsbereich nur für Quires I–II | f17r: 7 qo-Formen (Spr. A); f17v: 6 qo-Formen (Spr. A) — 13 Belege in ~250 Token (~5,2 %); f18r/v (bC2): 8–10 qo-Formen in ~200 Token (~4–5 %); f19r/v (bC3): ~18 qo-Formen in ~175 Token (~10 %) — überschreitet Quire-H-Dichte; 0 Belege in Quires A+B Spr. A (~800 Token); f58r (Quire H, Spr. A): 28+ qo-Formen in ~350 Token (~8 %) — Vollintegration, s. R47; f2r (Quire A, Spr. A): qotaiin (P.3), qoy (P.8), qokey (P.9), qoky (P.10) — 4 Tokens, 3/3 Konsens — Frühemergenz §E | ★★★ |
| R34 | sheol (Vollform) in Sprache-A-Texten am Paragraphenende ab Quire C — sheol am Paragraphenende auch in Spr. A ab Quire Cshol (apokor.) bleibt dominant; R17 gilt uneingeschränkt nur für Quires I–II | f17v P.13: ykeor·chol·chol·cthol·chkor·sheol-{plant} — Erstbeleg Spr. A sheol am Paragraphenende; 0 Belege in Quires A+B Spr. A | ★★★ |
| R35 | Dopplung chol·chol = Vollheilungs-Emphase vor Todesformel — chol·chol = כֹּל·כֹּל (alles-alles) vor nachfolgender TodesformelErweitert R19-Intensivierungsschema auf Nominalstämme | f17v P.13: chol·chol·cthol·chkor·sheol — Erstbeleg; f29v P.2 (Zweitbeleg) + f29v P.3 (Drittbeleg) — Foliobeleg-Cluster; R43 erfüllt: f17v + f29v = 2 Folios → ★★★ validiert; Parallele zu chol·chol·chol auf f8v (R19) | ★★★ |
| R36 | Dopplung dar·dar = Bilateral-/Intensiv-Dopplung **(register-übergreifend)** — dar = דַּר (leuchtend/Licht-davon)Typ A: direkt (dar.dar); Typ B: mit Zwischentext (dar…dar)Gilt für ophthalmologischen und kosmologischen Kontext | f18r P.6: dar.dar — Corpus-Erstbeleg (★★★ Kand.); f26v P.6: dar…dar — 2. Beleg (Typ B) → R43 erfüllt → ★★★★; f69r R.17: dair.dar= — 3. Beleg (Typ A, Terminal, kosmologisch); f69r R.22: dary.dar — 4. Beleg (Typ A, direktional) → 3 Folios · 4 Belege · register-übergreifend (botanisch f18r+f26v, kosmologisch f69r) · 0 Gegenbeispiele → ★★★★★; R19-Strukturkonformität identisch zu daly·dal, chol·chol, or·or-Palindrom | ★★★★★ |
| R37 | R19-Intensivierungsschema für qo--Präfix-Wortgruppen ab Quire C — qoky·qoky, qokchy·qokchy, … → Dopplung verstärkt kausale Verbindung oder diagnostischen BefundGilt ab Quire C | f18v P.2: qokchy·qokchy (Corpus-Erstbeleg qo-Dopplung); f18v P.3: qoky·qoky (2. Beleg, verschiedene Lemmata); f26v P.5: qotedy·qotedy (3. Beleg, neues Lemma); R43 erfüllt: f18v + f26v = 2 Folios | ★★★★ |
| R38 | {plant}-Marker am Paragraphenanfang — neue Strukturvariante in Quire C — Quires A+B: {plant} nie am ParagraphenanfangQuire C: {plant} in Anfangsposition → Illustration rahmt nachfolgenden Kolophon | f18v P.10: {plant}yko.dshy.dair.ykol.dom= — Corpus-Erstbeleg der Anfangspositionierung; 0 Belege in Quires A+B | ★★★ |
| R39 | dom= als Schlusskolophon-Finale in Sprache A — dom= = דּוֹם (Stille/Ende) → positiv-neutrale PrognoseSpr. A-Erstbeleg f18v P.10; in Spr. B bereits belegt (f57r)dom = neutral/positiv (Stille) vs. shol = negativ (Tod) | f18v P.10: dom= — Erstbeleg Spr. A; Parallelbeleg Spr. B: f57r Kolophon-Kontext | ★★★ |
| R40 | **Kurzwurzel-Konfidenzdeckel v2** — Basiswurzel ≤ 3 Konsonanten nach Präfix-/Suffix-Abzug → max. ★★Ausnahmen (mind. 2 müssen erfüllt sein):(a) Funktionswort ≤ 3 EVA-Zeichen gesamt (Konj./Präp./Artikel/Partikel)(b) Rückwärtstest-Anker (derzeit 23 Anker)(c) Korpusfrequenz ≥ 15× in ≥ 3 Folios mit sem. konsistentem Kontext**HARD CAP ★★** bei < 2 erfüllten Bedingungen | or → ★★★★ bleibt (b ✓ + c ✓: 52×, 5 Folios); chor → ★★★★ bleibt (b ✓ + c ✓: 47×, 5 Folios); daiin → ★★★★ bleibt (b ✓ + c ✓: 38×, 5 Folios); shol → ★★★ bleibt (b ✓ + c ✓: 19×, 5 Folios); ky → ★★★ bleibt (a ✓ + b ✓); dy → ★★ (a nur 1/2 — zu lang für Grenzfall) | ★★★ |
| R41 | **Präfix-Hierarchie-Protokoll** — Valide Reihenfolge (strict order):[d- Relativ (R45)] → [Konj.: o-/qo-/v-] → [Präp.: l-/b-/k-/m-] → [Komp.: op-/of-] → [Artikel: ha-] → [Basis]**Ungültig:**(a) Präp. direkt vor Konj. ohne Basiswurzel-Trennung(b) > 2 geschichtete Präfixe aus verschiedenen Klassen(c) sho- + positiver Prognoseterm im selben Token | Ausnahme: qo-k--Kombination in Quire C (R33) ist validierte Einzelklasse; illegale Beispiele: l-o-[Wort] (Präp.+Konj.), o-qo-[Wort] (Doppel-Konj.), qo-k-ch-[Wort] (> 2 Präfix-Layer); neu: d-Relativpräfix (R45) bildet äußerste Schale; op-/of- (R48, Quire H) als Koordinatenmarker im astronomischen Register f58r P.26 | ★★★ |
| R42 | **Kongruenzpflicht für ★★★★+** — Kondition für ★★★★+:(a) Genus + Numerus kompatibel(b) ≥ 1 unabhängiger Parallelbeleg im Corpus★★★ ohne Kongruenztest: vorläufig → Scheitern bei Nachanalyse → **Herabstufung auf ★★** | ykchaiin Mask.Sg. + aiin Sg.mask. ✓ f9r; ykchy Mask.Sg. + chy Sg. ✓ f11v; ykchor Mask.Sg. + chor Sg. ✓ f11r; ykshol Mask.Sg. + shol Sg. ✓ f15r — 4/4 Kongruenztests bestanden; ykam/ytor f18v: Parallelbeleg noch ausstehend | ★★★ |
| R43 | **Multi-Folio-Validierungspflicht** — ★★★+: ≥ 2 verschiedene Folios mit sem. kompatiblem KontextAusnahme: ★★★ Kand. bei ≥ 8 Einzelfolio-Belegen (Bestätigung innerhalb der nächsten 5 analysierten Folios; andernfalls → ★★) | ykam f18v (4×, Erstbeleg) → ★★★ Kand. bis Quire-H-Bestätigung; ytor f18v (3×) + f58r P.30 (R43 erfüllt) → **★★★★**; ykair f16r (1×) → ★★ provisorisch (unter Minimum 8×); kchom f001r (2×) → ★★★ Kand. (Flag bleibt) | ★★★ |
| R44 | **Konsekutive Kurzwurzel-Sequenzsperre** — 2 aufeinanderfolgende Tokens mit Basis ≤ 3 Konsonanten → Sequenz max. ★★Ausnahmen (beide müssen erfüllt sein):(a) mind. 1 Token = Rückwärtstest-Anker (R40-Ausnahme b)(b) R42-Kongruenzstandard erfülltNicht anwendbar auf Funktionswort-Hauptwort-Paare | ykchaiin + daiin: daiin Rückwärtstest-Anker (b ✓) + R42-Kongruenz ✓ → R44 greift nicht; ky + chor: Funktionswort-Ausnahme → R44 greift nicht; Neues Verb + neues Objekt (je ★★★ Kand.): kein Anker, kein Parallelbeleg → Sequenz ★★; shol + neues Adj. (Einzelbeleg): shol Anker ✓, R42-Kongruenz fehlt → ★★ | ★★★ |
| D1/D2 | ⚠ **Phonotaktische Warnsignale** (Warnsystem, kein Hard Stop) — **D1 Doppelkonsonanz-Warnung:** 2× identisches Mapping im Basiswort-Kern → ⚠ Flag (erfordert Erklärung: Geminierung/Dagesh, Assimilation, Schreibervarianz)**D2 Kehlkopf-Cluster-Warnung:** 2 laryngale/pharyngale Konsonanten nebeneinander → ⚠ Flag (erfordert morphologische Rechtfertigung)Konfidenz wird _nicht_ automatisch reduziert**R45-Ausnahme:** d--Anlaut vor Konsonant triggert kein D1-Flag | EVA-Phonologie noch nicht gesichert → kein Hard Stop möglich; D1-Erklärungsoptionen: Dagesh-Verdopplung, partielle Assimilation, Schreibervarianz; D2: Doppel-Laryngal im Mischna-Hebräisch selten und markiert; R45-Ausnahme: 6 D1-Fehlklassifikationen auf f58r durch aramäisches d-Relativpräfix aufgelöst | ★★ |
| R45 | **Aramäisches d-Relativpräfix** als morphologische Klasse — ^d + Konsonant (kein Vokalträger) → דְּ/דִּי (de-/di-, Relativpräfix „von/dessen/welches“)(a) Kein D1-Flag(b) Äußerste morphologische Schale in R41-Hierarchie**Abgrenzung:** d- + Vokalindikator = Basiskonsonant (z. B. dal) | f58r: dshodal (P.2), dshor (P.4), dchairam (P.5), dtor (P.34), dtshol (P.38), dchol (P.40) — 6 klare Instanzen; alle durch דְּ-Relativpräfix vollständig aufgelöst; 6 D1-Fehlklassifikationen zurückgezogen | ★★★ |
| R46 | **Wurzelketten-Ausnahme für R44** — ≥ 3 aufeinanderfolgende Tokens morphologisch als Ableitungen einer einzigen validierten Basiswurzel → R44 greift nichtNachweis: explizite Dokumentation aller Ableitungsformen; ein nicht-ableitbares Token bricht die KetteGibberishTest-neutral (Pseudowörter bilden keine systematischen Wurzelketten) | f58r P.5: char.ar.al.char.arary.ytalar — 6 Tokens, alle Derivate der validierten Basiswurzel א-ו-ר (Licht); R44 greift nicht; semantisch: astronomische Licht-Litanei über Sternglanz | ★★★ |
| R47 | **qo-Präfix-Vollintegration ab Quire H** (Erweiterung von R33) — Quire-Progressionsskala:Quires A+B: absentQuire C: emergierend (R33)Quire T: vollständigQuire H: vollständig (~8 %)Quire H ist keine Übergangszone — vollständig integriertR1 gilt nur für Quires A+B | f58r (Quire H, Spr. A): 28+ qo--Formen in ~350 Token (Stichprobe: qor, qokaiin, qocphody, qokalam, qotyshey, qokaldy, qotaily u. a.); Vergleich: f17r/v Quire C (R33): 13 Belege/250 Token; f57r Quire T (Spr. B): ~8 %; f001r Quire A: 0/260 Token | ★★★ |
| R48 | **Randstern-System Quire H** — astronomisches Register — 6-Zacken (kein Kern) → Block 1: generisches Sternen-Register7-Zacken (kleiner Kern) → Block 2: Planetenreihe8-Zacken (größerer Kern) → Block 3: op-KoordinatenformatPrinzip register-übergreifend identisch: Randstern = struktureller Gliederungsmarker | f58r: Stern 1 (6-Zacken) über P.1 → Block P.1–P.15 (~150 Token); Stern 2 (7-Zacken) über P.16 → Block P.16–P.25 (~100 Token); Stern 3 (8-Zacken) über P.26 → Block P.26–P.40 (~155 Token); Kolophone (=) an P.15 und P.25 als Blockabschluss | ★★★ |
| R49 | **y+t-Verb-Litanei als Schlusskolophon** — ≥ 4 aufeinanderfolgende y+t-präfigierte Heilungsverben in Finalposition (unmittelbar vor =)Dreistufiges Schema: Ursachen-Verb(en) → Illuminations-Verb(en) → Organ-Heilungs-Verb(en)Verben sem. kohärent, aber _nicht_ zwingend gleiche Basiswurzel (Unterschied zu R46) | f19v P.12: yees.ykchol.oty.ytor.ytar.ytchor.ytaiin= (7 y-Verben — Corpus-Rekord): yees (Fieber löschen) → ykchol (alles heilen) → oty (Zeichen) → ytor+ytar (Illumination ×2, R19) → ytchor+ytaiin (Pupille→Auge, Organ-Spezifizierung); alle 4 Transkriptoren (H, C, F, U) identisch — Kandidat, 1 Beleg, erfordert Folgebestätigung | ★★★ |
| R50 | **Galiläische Guttural-Abschwächung** — Sprache-B-Vokalklärung — (a) ee → Tsere-Vokal (ֵ) ausschließlich — nicht als ה+ה (Doppellaryngal)(b) oo → Vav-Holam (וֹ) ausschließlich — nicht als ו+ו(c) D2-Warnungen durch Interpretation B automatisch suspendiert bei validierten Spr.-B-Formen**Ausnahme:** ch+[Vokal]+ol (ח-ע-ל) = genuine Benachbarung — nicht von R50 erfasst_v7.2: ot-Kompositum-Dreikette (otol+otaiir+otchos) = strukturelle Intensivierung durch Dreifach-ot_ | Quire M (f77r): D2-Warnungen 42→3 (93 % Reduktion); häufigste Tokens: qokeedy, qoteedy, cheedy, sheedy, qokeey, cheey, sheeol; Residualfälle: cheeol (P.21), cheol (P.24, P.38). Zodiak-Register (Quire K, 4 Folios, v6.9): 30+ ee-Tokens in f71r/f71v/f72r1/f72r2, kein D2-Gegenbeispiel — **R43 erfüllt: 2. vollständiges Register, ★★★ → ★★★★**. v7.2: ot-Kompositum-Dreikette f24v P.2 (otol+otaiir+otchos) — Beobachtung | ★★★★ |
| R51 | **Illustrationszwickel-Einschübe** — Platzmangel-Querverweise — Bedingungen für Zwickel-Einschub:(a) 1–3 Zeichen zwischen/nach {plant}-Markern (kein vollständiger Satz)(b) Zeichenqualität verschlechtert (!!!-Notation)(c) mehrere Fragmentparagraphen in FolgeInterpretation: nachträgliche Kreuzreferenz-Einschübe des Schreibers | f20v P.7 (s vor {plant}), P.8 (d.s vor {plant}), P.9 (d.s!!!!!! vor {plant}) — drei Belege auf einem Folio, qualitative Eskalation; f21v P.7 (s vor sheaiin + {plant}) — zweiter Folio-Beleg → Aufstufung auf ★★★ (2 Folios); f22v P.4 (saiin als Vollwort zwischen 2×{plant} — strukturell stärkstes Beispiel: שׂ+עַיִן = „gleich dem Auge“) + P.10 (s vor {plant}) — 6 Belege über 3 Folios (R43 erfüllt: ≥3 Folios) → ★★★ gesichert | ★★★ |
| R52a | **Determinans-y im Zodiak-Sternlabel-Register** — Suffixe -y, -dy, -ody (~47 % der Labels) → aramäischer Status Emphaticus (Suffixartikel)Optional: nackter Kernstamm existiert parallel (okal= neben okaly=)Zusatz-Varianten: -ary, -alyAlle resultierenden Kernstämme morphologisch intakt nach Suffix-Abzug | f71r (53 %: 8/15), f71v (47 %: 7/15), f72r1 (40 %: 6/15), f72r2 (47 %: 14/30) — 4 Folios · 75 Labels · 35 Belege; Minimalpaar-Kontrolle: okal= (3×: S1.3, S1.5, S1.12) vs. okaly= (2×: S1.4, S1.12) in f72r2 — Suffix als optionaler Determinant belegt; keine R40-Konflikte nach Suffix-Abzug | ★★★★ |
| R53 | **Pflanzen-Titel-Duplikation** (T-Klassen-Titelposition am Folioende) — **Subtyp A:** R35-Duplikation: [Duplikation+Direktional=]**Subtyp B:** Emphase-Direktional: [ee-Emphase+Direktional=]**Subtyp C:** Deskriptiv/Identifikatorisch: [Zeichen-Kompositum+Direktional=]Strikt T-Klassen-Titelposition (Unterschied zu R35: allgemeine Vollheilungs-Emphase) | **Beleg 1** f22v T.16: daldalol= (dal·dal+ol) — Subtyp A; **Beleg 2** f23v P.12: eeeoly= ({plant}-Titel) — Subtyp B; **Beleg 3** f24r T.20: sam.chorly= — T-Klassen-Formel: sham + kor + li; **Beleg 4** f25r T.7: dair.otaiir.otosy= — Subtyp C; R43 Mehrfachbestätigung (4 Folios, 3 Subtypen) → ★★★★ | ★★★★ |
| R55 | **or-Reduplikation als Kolophon-Abschluss** — oro= = אֹ+ר+אֹ (Licht-Licht-Palindrom) in unmittelbarer Kolophon-Finalposition (=-Marker)Unterschied zu R15: or-Lexem-beschränkt und palindromisch konstruiertLatente Unterregel der R15-Familie | f24v P.5: oro= — Corpus-Erstbeleg (1 Beleg); oro-Frist abgelaufen (f29v). Validierungsbedarf bei erneutem Auftreten. Herabgestuft von ★★★ auf ★★ Kand. (v8.1) | ★★ |
| R56 | **sho.sho-Emphase** — direkte Wortwiederholung ohne Genitivbrücke — sho.sho ohne BrückenpartikelUnterschied zu R24 (shol·dy·…·shol): keine GenitivbrückeUnterschied zu R30 (sho- als Präfix in Komposita): Token-Ebene | f24v P.14: sho.sho — Corpus-Erstbeleg; f27v P.7: sho·sho — Folgebeleg (R43 erfüllt: 2 Folios) → ★★★ validiert | ★★★ |
| R58 | **3×daiin-Konzentration** in einer Zeile — 3× daiin-Tokens in einer einzigen Paragraph-Zeile → maximale Urteils-KonzentrationUnterschied zu R19 (allg. Intensivierungsrhetorik): R58 zählt ZeilendichteUnterschied zu R9 (3–5× pro Folio): R9 zählt folio-weite Häufigkeit | f25v P.2: dchor.cthor.chor.daiin.s.okeeaiin.daiin.ckhey.daiin — Corpus-Erstbeleg (alle H/C/F einig); f30v — 2. Beleg; f32v P.9: otchol.daiin.daiin.ctho.daiin.qotaiin — 3. Folio-Beleg (H/C/F/U konsistent); R43-Frist erfüllt: f25v + f30v + f32v = 3 unabhängige Folios → ★★★★ validiert | ★★★★ |
| R59 | **qo als isolierter Konnektiv-Token** — qo als Einzelwort-Token (gefolgt von Punkt-Separator) = bare וְ (Vav conjunctivum als Partikel)Abgrenzung von R1: R1 = Verbundpräfix (qo+Stamm); R59 = alleinstehendes WortIn Spr. A (Quire A): max. 1× pro Folio belegbar | f1v P.7: qo.ol.choiees.cheol.dol.cthey- — Erstbeleg (alle 4 Transkriptoren H/C/D/F einig); f28r P.1: Folgebeleg (2. Folio) → R43 erfüllt (f1v + f28r = 2 Folios) → ★★★ validiert | ★★★ |
| R60 | **Pharmakologische Pflanzenteil-Annotation** — **Layout-Typen:****A** (Apex-Text: gesamter Text über Pflanze = FLOS/FRUCTUS/Triebspitzen als Einheit)**B** (Bilateral-Blüte: Indikation links + Therapie rechts auf Blüten-Höhe)**C** (Vertikale Zonentrennung: oben = FLOS/FRUCTUS, unten = FOLIUM/CAULIS)**D** (Interweaved: jede Textzeile neben anderem Pflanzenteil)_Kein {plant}-Marker = Ganzpflanzen-Präparat (TOTUS)_**Kor. 1 ★★★:** Gilt für Spr. A + B (register-unabhängig)**Kor. 2 ★★★:** Mandrake-Menschenkopf = ikonographisches Toxizitäts-Signal**Kor. 3 ★★★★★:** FOLIUM-Zone systematisch textfrei (25/25 Folios, 0 Gegenbelege)**Kor. 4 ★★★★★:** Drei-Kategorien-Farbcode: Fläche (stumm) / Linie (illustrativ) / Textur (prescribiert) | 21/21 analysierten Folios (Quire A f1v–f10r + f13r/v + f14r + f15r + f16r + f22r + f28r + f30r/v + f33r + f57r): Muster I — selektive Annotation (kein Text neben nicht-verschriebenen Teilen) — 0 Gegenbeispiele ★★★★; Stolfi f16r: „interrupted by the plant's flower“ ★★★★★; pol (Frucht-Term) an Frucht-Position f22r P.1 — stärkster semantischer Einzelbeweis ★★★★★; f19r: Blüten-Semantik (saiin+chor) stimmt mit Kornblumen-Pharmakologie (Augenwasser, Konjunktivitis) überein ★★★★★; f21r: keine {plant}-Marker → Thymian-Ganzpflanzen-Präparat ★★★; f14r/f22r/f28r/f30v: rote Wurzeln ohne Text — 4 Belege ★★★★; f25r: Reeds Colors: green,dark-red bestätigt Farbcode unabhängig; f57r + f33r: beide Sprachregister bestätigt ★★★; FOLIUM-Textfreiheit: 25/25 Folios (100 %), 0 Gegenbeispiele — grüne, dunkle, rot-geschattete Blätter alle textfrei; v8.7: f32r/v + f33v + f34r/v ergänzt → 25-Folio-Schwelle → ★★★★★; f009r rote Punkt-Ähre MIT Text = FLOS-therapeutisch (Drei-Kategorien-Bestätigung); f010r rote Ovale OHNE Text = Ebene-2-Nicht-Wurzel-Beleg ★★★★★ | ★★★★ |
| R61 | **ol+[Ankerwort] — Intensivierungsformel** — ol (עַל = über/auf) unmittelbar vor validiertem Ankerwort → „Überwindung“/Konfrontation mit dem genannten ZustandPositionstendenz: häufig unmittelbar vor {plant}-Marker (Therapie-Direktional)Steigerungsform: qoldar = qo+ol+dar (dreistufiges Präfix, maximale Intensivierung)Register: Spr. A + B; Quire D + E (cross-register, cross-quire) | olsheol (f31r P.11) = über Scheol; olteedam (f31v P.7) = über das Blut der Zeit; olaiin (f33v P.6) = über das Auge; oldam (f34r P.7 + f34v P.2) = über das Blut; oldar (f34v P.4) = über den Leuchtenden; olchdaiin (f34v P.7) = über Blässe-Urteil — 6 Belege in einer Sitzung, alle Ankerwörter ★★★★★-Klasse; Steigerungsform: qoldar (f34v P.4) = qo + ol + dar = dreistufiges Präfix (maximale Intensivierung) | ★★★ |


## VII. Rückwärtstest-Statistik

39 hebräische/aramäische Wörter getestet. Ab v7.5 zwei Klassen: **Typ I** (genuine Vorhersagen — Prä-Analyse-Anker, eingefroren): **10/10 = 100%** · **Typ II** (interne Kohärenz — post-hoc): **29/32 = 91%** · 0 Falsch-Positive in beiden Klassen.

| Kategorie | Ergebnis |
| --- | --- |
| Typ I — Genuine Vorhersagen (Prä-Analyse-Anker, eingefroren) | 10 / 10 |
| Typ II — Interne Kohärenz (post-hoc-Entdeckungen) | 29 / 32 |
| Bestätigt Spr. A (Anker, f1v–f15v) | 260 / 260 |
| Falsch-positiv (gesamt) | 0 |


**Entscheidend: Keine einzige Vorhersage ergab einen Falsch-Positiv-Treffer.** Bei einem Zufallsalphabet statistisch ausgeschlossen.

### Typ I — Genuine Vorhersagen (10/10 · 100%)

| Vorhersage | Hebräisch | Befund | Kontext |
| --- | --- | --- | --- |
| dam | דָּם | ✓ 4× f57r Zeilenende | qokedam, cheeodam, okoldm, yodam |
| sar | שַׂר | ✓ f57r P.9, f103r P.2,17 | immer Zeilenmitte; nach daiin oder shedy |
| sheol | שְׁאוֹל | ✓ 8× f103r Zeilenende | P.23,35,40(×2),42,45 |
| daiin | דִּין | ✓ 3× Zeilenanfang f103r | f57r P.5: qokcho·daiin·cheeodam |
| chalal | חָלָל | ✓ 1× exakt nach sheol P.42 | tshey·sheol·cheolshy·chalal |
| dal | דַּל | ✓ Dreifach-Refrain f103r P.1 | pchedal, yshdal, dal (standalone) |
| shol · dy · … · shol | R24-Struktur | ✓ f13r P.1 (Dopplungsformel) | einmaliges Emphase-Muster mit Genitiv-Brücke dy |
| or | אוֹר | ✓ f103r P.17 or·aiin (Heilungszeichen); f6v, f8r, f57r — Prognose-Abschluss | Anker: or = Licht/Heilung; f103r P.17 endet or·aiin; vgl. lor ★★★★★; R6 bestätigt (v7.4-Anker) |
| chaiin | חַיִּין | ✓ f2r P.3 (Erstbeleg, H/C/F 3/3), f4r, f4v, f6r, f8v — R18-Diagnosepaar shol·chaiin, Quire A | Anker: chaiin = Leben; R18 Diagnosepaar shol·chaiin (abwägende Prognose); R43 erfüllt (f2r + f4r ≥2 Folios); ★★★★ |
| kaiim | קַיָּם | ✓ f6r, f8r kaiim= (Kolophon-Abschlussformel); 10+ Belege | Anker: kaiim = gültig/beständig; R11-Schlussformel ★★★★★; f57r cphedom= (Parallelform) |


### Typ II — Interne Kohärenz (29/32 · 91%)

| Vorhersage | Hebräisch | Befund | Kontext |
| --- | --- | --- | --- |
| chedy | כְּדֵי | ✓ 22× f103r | nie mit -ody kombiniert (R5) |
| shedy | שֶׁ+דִּי | ✓ 27× f103r | immer von Konnektoren gefolgt |
| ckhy | כְּהִי | ✓ f57r P.2,9; f103r P.17,23 | 4 unabhängige Belege |
| taiir | תָּאִיר | ✓ f57r P.8 Zeilenbeginn | taiir·sheedy·lchedy·ckheedy |
| sheoldam | שְׁאוֹל+דָּם | ✓ f3r P.9 auf Blutpflanze | botanische Kohärenz; beide ★★★★★-Anker fusioniert |
| daiidy / daiindy | דִּין+דִּי | ✓ f57r P.9, f3v P.2, f9r P5 | drei Folios, identische Funktion |
| tsheoarom | תְּ+שְׁאוֹ+רוֹם | ✓ f3r P.15 Heilungsformel | nach 7 Blut-Paragraphen: kohärenter Positionswechsel |
| dsholdy | דְּ+שׁוֹל+דִּי | ✓ f9r P5L | Genitiv-Kompositum parallel zu daiindy |
| shoiin | שׁוֹ+עַיִן | ✓ f10v P4 + P6 | Doppelbeleg auf demselben Folio |
| torshor | תֹּר+שׁוֹר | ✓ f13r P.1 Paragraph-Öffner | Jahreszeit-Zeichen; erster Beleg dieser Form im Korpus |
| pchy | פְּחִי | ✓ 4× f13r — höchste Atemweg-Dichte | opchy, qopchy, pchy; bestätigt Alant-Identifikation |
| ykaiin (y+k+aiin) | יְ+כְּ+עַיִן | ✓ f14r P.8 — 5. Paradigma-Mitglied | ykchaiin→ycheor→ykchor→ykchy→ykaiin: 5 positive Ankerpunkte (ykshol = 6. Glied negativ, f15r P.12) |
| chckhy= (Diagnosekolophon) | כְּ+כְּ+הִי | ✓ 4× Korpus: f9v, f11v P.6, f14r P.7, f14v P.6 | Konzentration in Bifolio bB3; auch medial belegt (f14v P.6) |
| ykshol (y+k+shol) | יְ+כְּ+שׁוֹל | ✓ f15r P.12 — erster negativer y+k+Terminus | ykchaiin→ycheor→ykchor→ykchy→ykaiin→ykshol: komplettes Paradigma, positiv + negativ belegt |
| qotchor (Pupillenzeichen) | קוֹ+תְּ+כֹּר | ✓ f15r Schlusskolophon ★★★★★ | qotchor·chaiin·chy·kol·daky= — positives Pupillen-Urteil; ophthalmologische Abschlussformel bB2 |
| soloiin | שׁוֹ+לְ+עַיִן | ✓ f15v P.11 — therapeutisch präzisestes Kompositum | „Arznei für das Auge“ — höchste Heilarznei-Präzision im Gesamtkorpus; Gegenstück zu shoiin (f10v) |
| cthor (vollständige Heilung) | כְּ+תֹּר | ✓ f15v Schlusskolophon | daiin·cthor·chol·chor= — cthor+chor = Heilung der Pupillenpathologie; positiver Abschluss Bifolio bB2 |
| chaiin · ckhy · or · aiin (Prognose-Tetrade) | Prognose-Tetrade | ✓ f10r P4 (alle vier in einer Zeile) | vollständiges hippokratisches Schema; kombinierter Test post-v7.4 → Typ II (v8.8), Einzelanker or/chaiin bleiben Typ I |
| dam (Quire B) | דָּם | ✓ f14v P.8 (Blut-Triade) | dol · dair · dam — Erstbeleg Blutpathologie in bB3; verbindet f14v mit f3r; post-v7.4 → Typ II (v8.8) |
| shol medial · sheol final (R17 Zodiak) | שׁוֹל / שְׁאוֹל | ✓ f72r1 R1 (shol 2×) · R2 (sheol vor gap) — 5. Register-Bestätigung | identische Verteilung wie botanische Folios; Zodiak-Register post-v7.4 → Typ II (v8.8) |
| f69r Stresstest — kosmologisches Rad-Diagramm, Currier-Sprache unklassifiziert (Quire J/X) | Mapping v8.0 | ✓ 10/10 Ankerwörter; shol= in P.4 terminal (R6); sar= 3× terminal (P.1, R.7, R.11, R11); daiin in P.2+C.9 (R7); 6/6 Pflichtkriterien bestanden — 1 Token offen ({&ct}ar) | Foliotyp: kosmologisches Rad-Diagramm — keine Botanik, kein {plant}-System, keine Currier-Sprachzuordnung; Mapping ohne Anpassung; f69r post-v7.4 → Typ II (v8.8) |
| otam · otam · chotam (R19/R35) | אוֹת+אָם · אוֹת+אָם · כֹּ+אוֹת+אָם | ✓ f72r1 R1 — dreistufige Nominal-Intensivierung | einfach → ×2 → Komparativ ko+X; exaktes R35-Schema; semantisch kohärent: Zeichen der Mutter im Stier-dunkel-Kontext |
| okaly= / okal= Minimalpaar (R52a) | עַ+כָּל+יְ / עַ+כָּל | ✓ f72r2 S1.3/S1.5/S1.12 (okal) neben S1.4/S1.12 (okaly) — Determinans-y optional | identischer Stamm okal mit und ohne -y-Suffix auf demselben Ring; beweist R52a: -y ist Status-Emphaticus-Marker, kein festes Wortbildungselement |
| alef / otalef — Stier-Exklusivmarker | אָלֶף / אוֹת+אָלֶף | ✓ f72r1 S1.6 + S1.9 — ausschließlich im Stier-dunkel-Panel | alef = Ochsenkopf-Piktogramm (Aleph-Ursprung); fehlt in f71r, f71v, f72r2; erste ikonographisch verankerte Buchstabenreferenz im Zodiak-Corpus |
| dar·dar-Dopplung (R36) in kosmologischem Register | דַּר·דַּר | ✓ f69r R.17 (dair.dar= Terminal) + f69r R.22 (dary.dar direktional) — 2 neue Belege | R43 erfüllt: f18r + f26v + f69r = 3 Folios, 4 Gesamtbelege → R36 ★★★ validiert; Typ A (direkt adjacent) erstmals in kosmologischem Register belegt |
| oldam (f34r P.7) → sofortiger Folgebeleg auf f34v P.2 | עַל+דָּם | ✓ f34v P.2 (Abstand: 1 Folio) | ol+dam Erstbeleg f34r P.7 → unmittelbarer Folgebeleg auf dem Verso desselben Bifolios; R43-Frist binnen einer Sitzung erfüllt; post-v7.4 → Typ II (v8.8) |
| Tanacetum f31r: dam im Schlusskolophon — Tanacetum = Blutfluss-Kraut (Macer floridus) | דָּם | ✓ f31r P.15 okedam= — Blutterm im Abschlusskolophon | Tanacetum parthenium ist im mittelalterlichen Kräuterbuch (Macer floridus) als Mittel gegen Menstruationsblutungen gelistet; botanische und textuelle Ebene konvergieren |
| Gentiana f32v endet ol.sho.chy= — Gentiana als bitteres Diagnostikum (Scheol-Blässe-Formel) | עַל+שׁוֹ+כְּהִי | ✓ f32v P.11 ol.sho.chy= — reine Scheol-Diagnose ohne Heilungsformel | Enzian (Gentiana) gilt in der mittelalterlichen Pharmakologie als schweres Diagnostikum für lebensbedrohliche Zustände; Schlusskolophon spiegelt negative Prognose |
| Bryonia f34v: Tier-Wurzel + oldar.qoldar = intensivierte Wurzelformeln (dreistufiges Präfix) | עַל+דְּ+אַר / וְ+עַל+דְּ+אַר | ✓ f34v P.4 oldar.qoldar — tiefste Präfix-Schachtelung im Corpus | Bryonia-Wurzeln wurden zu Tierfiguren geschnitzt und als Mandragora-Ersatz verkauft; zoomorphe Wurzel-Ikonographie korrespondiert mit maximaler Wurzel-Textintensivierung (qoldar = dreistufig) |


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

| Klasse | Wörter (Auswahl) | Funktion |
| --- | --- | --- |
| Diagnose-Nomina | dal, ckhy, dam, chalal, or, ram, char, chor | Symptome, Befunde, klinische Termini |
| Prognose-Formeln | sheol, daiin, or·aiin, shol·chaiin, lor ↔ lshol | Ausgangsformeln: Tod / Heilung / Urteil |
| Syntaktische Konnektoren | chedy, shedy, dy, lchedy, chal | Zweck-, Relativ- und Applikationsklauseln |
| Verbformen | taiir, ykchaiin, ycheor, ychor, yshdal | y-/t-initiale Imperfekt-Formen |
| Diagnostik-Termini | okaiin, qokaiin, qotal, dain, chkar | Untersuchungsakt: Auge, Schweiß, Erscheinung |
| Akteure & Relationen | sar, saiin, al/ol, daiin (Öffner) | Subjekte, Präpositionen, Fallmarker |
| Therapeutika | sam, chkar, tsheoarom | Rezeptur, Untersuchung, Heilungsformeln |
| Botanische Terme | pol, shty, chokeos, otoaiin | Pflanzenteile, Früchte, Wirkorgane |
| Kolophon-Formeln | kaiim=, dom=, daiin=, chckhan=, ocho·daiin= | Abschlussformeln: rechtlich / diagnostisch / Titel |


## X. Sprache A — Quires A–D (f1r–f32v)

### Sprachvergleich Spr. A vs. Spr. B

| Merkmal | Sprache B | Sprache A |
| --- | --- | --- |
| Kernvokabular | sheol, daiin, dal, ckhy, dam, sar, or | Identisch — alle 10 Sprache-A-Ankerwörter je Folio bestätigt (f1r: 10/10 ★★★★★) |
| qo-Präfix (R1/R33) | 8+ Belege; Kernmerkmal Spr. B ★★★★★ | Absent in Quires I–II (0 / ~800 Token); ab Quire III präsent: 13 Belege f17r/f17v (~5%) + 8–10 in f18r/f18v (~4–5%) + ~18 in f19r/f19v (~10% = Quire-H-äquivalent, R33-Erweiterung); R37: qo-Präfix-Dopplung ab f18v; R49: y+t-Verb-Litanei f19v P.12; bC4 (f20–f21): Vollintegration bestätigt; bC3 (f22–f23) + bC1 (f24): konsistent — Quire C f17–f24 vollständig |
| Dominanter Vokal | e / ee (Segol/Ṣere) | o (Ḥolam) häufiger; dol statt dal, ckho neben ckhy |
| Struktur | Prosa ohne Bildtrennmarker | {plant}-Marker in Kräuter-Folios (R14); f1r: Prosa ohne Marker (Haskama-Typ, sui generis) |
| Kolophon-Inventar | cphedom=, daiin·cheeodam | kaiim=, dom=, daiin=, chckhan=, Kurztitel (R23) |
| Verbparadigma | taiir, yshdal | ykchaiin, ycheor, ychor, ytchody — vollständiger |
| Quire-Grenze | Quire A → B (f8v → f9r): | textlich unsichtbar — identische Ankerverteilung |


### Folio-Analyse

| Folio | Pflanze | Signale | Konf. |
| --- | --- | --- | --- |
| f1r | Kein Botanical — deklarativer Prosatext | qo-: 0 Belege; 10/10 Sprache-A-Anker; 4 Absätze + T1–T4; rote Großinitialen (Funktion offen); Erased Key (Jim Reeds 1994); ★★★★ auf Strukturbefunden (R2-ext 260 Token, Ankerverteilung, Absatzstruktur) | ★★★★ |
| f1v | Belladonna | shol 5×, pol (Beere), otoaiin (Pupille) | ★★★★★ |
| f2r | Kornblume (Augenwasser) | ytoain=, saiin, aiin 8+ Komposita | ★★★★★ |
| f2v | Seerose | shty (Trank), chokeos (Kelch) | ★★★★ |
| f3r | Blutpflanze (Polygonum) | dam 4×, damo 2×, sheoldam — höchste Blutdichte | ★★★★★ |
| f4r/v | Geranium-Typ | shol·chaiin (abwägend) | ★★★★ |
| f5r | Mandragora | shodaiin 4× pro Satz (narkotisch-toxisch) | ★★★★ |
| f6r | Schlafmohn | alle drei shol-Formen; kaiim= | ★★★★ |
| f6v | Blaue Distel | sar-Öffner; dom=; lor (Heilungsrichtung) | ★★★★ |
| f7r | Seerose (Nymphaea) | sheey 3× (positiv) | ★★★★ |
| f7v | Lungenkraut | otshol · sheodaiin · lshol — dichteste Todesformeln | ★★★★★ |
| f8r | Aronstab (Arum) | chor 6×, shol 5×; shol·kaiin×4 + kaiim= | ★★★★ |
| f8v | Röhrenblüter / Lungenkraut | saiin; chol·chol·chol; daiin= (Quire-Ende) | ★★★★ |
| f9r | Sauerampfer (Rumex) | or·chaiin (positiv); dsholdy; chkar= | ★★★★ |
| f9v | Viola tricolor | chkaiin·ckhy·chor= (Diagnosekolophon); daiin 7× | ★★★★★ |
| f10r | Wegwarte (Cichorium) | Prognose-Tetrade chaiin·ckhy·or·aiin; chor 7× | ★★★★ |
| f10v | Convolvulus / Glockenblume | daiin 8× (Rekord); shoiin×2; dsho=; chckhan= | ★★★★ |
| f11r | Lungenkraut-Typ II | ykchor·dair·ycheor (Pupillenheilung-Tripel); positiver Kolophon | ★★★★ |
| f11v | Kräuter-Komplex | chkaiin·ckhy·chor= (Diagnosekolophon, 2. Beleg); odl·chaiin | ★★★★ |
| f13r | Großer Alant (Inula helenium) | torshor; pchy 4× — Atemweg-Rekord; shol×2; Doppelkolophon | ★★★ |
| f13v | Schachtelhalm-Typ (Equisetum) | 9 × {plant}-Marker (Rekord Quire B); qoky·daiin= (Minikolophon) | ★★★ |
| f14r | Schlafmohn (Papaver somniferum) ★★★★ · Alt.: Schlangenwurz-Typ (Bistorta officinalis) ★★★ | dain + chor dominant; chckhy= (3. Korpus-Beleg); Doppelkolophon P.7 + P.13; ykaiin (5. y+k-Verb); Layout Typ C (P.1–P.7 Blüte/Kapsel FLOS / P.8–P.9 Blätter bilateral FOLIUM); rote Wurzel ohne Text (R60 Ebene 2, Erstbeleg) | ★★★ |
| f14v | Farn-Typ (Dryopteris-Gruppe) | dam (Blut-Triade P.8, Erstbeleg Quire B); dchckhy= (Intensiv-Siegel); Dreisegment-Kolophon; dy×3 (R25) | ★★★ |
| f15r | Silberdistel (Carlina acaulis) | qotchor ★★★★★ (Pupillen-Zeichen, Kolophon); ykshol P.12 (erster negativer y+k+Terminus); sheey·cthy·dain (Gabe+Heilung+Auge); chaiin+Abwägungskolophon; Layout Typ B (bilateral: linke Spalte = linke Blütenknospe / rechte Spalte = rechte Blütenknospe); Doppel-{plant}-Marker alle Paragraphen; Sonnen-/Medaillonsymbol über Apex (R60 Muster VI Kand.); rote Wurzel ohne Text (R60 Ebene 2) | ★★★★ |
| f15v | Einbeere (Paris quadrifolia) | soloiin P.11 (Arznei für Auge) ★★★★★; sor P.10 (Heilungsarznei); opchor P.1 (Atemweg-Pupillen-Befund); cthor·chor= (vollständige Heilung, Kolophon) | ★★★★ |
| f16r | Cannabis sativa (Hanf) ★★★★ · Alt.: Wunderbaum (Ricinus communis) ★★★ | tchor P2.5 (fem. Pupillen-Verb, 1. Beleg); saiin·ytaiin= (Intra-Paragraph-Kolophon); qokchor·dl·dy·shey= (Schlusskolophon); Layout Typ C (P.1.1–2 Blüten FLOS / P.1.3–P.2 Blätter FOLIUM); opchy+saiin+chor FLOS-Position (Atemweg+Augenarzt+Pupille); beige Wurzel ohne Text (R60 Ebene 1); Stolfi: „interrupted by the plant's flower“ ★★★★★ | ★★★★ |
| f16v | Alpen-Mannstreu (Eryngium alpinum) | chkar·chkar (Doppel-Untersuchungsformel, einmalig); okaiin×2; otor P.12 (Zeichen des Lichts); sokar·oaorar= (Quire-B-Abschlusskolophon) | ★★★★★ |
| f17r | Skabiosen-Flockenblume (Centaurea scabiosa) | 3 =-Kolophone P.3+P.6+P.12 (Corpus-Rekord für ein Folio); chor 3×; 7 qo-Formen in Spr. A (R33); Marginalinschrift (nicht Voynichesisch, vermutl. Latein) | ★★★★ |
| f17v | Schwarze Zaunrübe (Tamus communis) | 23 Paragraphen (Kräuter-Rekord); sar P.17 ohne {plant} (wie f57r/f103r); sheol Vollform Spr. A P.13 (R34); char im Schlusskolophon; or·okaiin·or Palindrom P.6 | ★★★ |
| f18r | Berg-Flockenblume (Centaurea montana) | 13 P. + Siman T.14; 2 =-Kolophone P.4+P.13; chor/qokchor 5× (Leitterm); dar·dar R36-Erstbeleg P.6; doldaiin Corpus-Erstbeleg P.7; doppelter {plant}-Marker P.8; Schlusskolophon or·shaiin·cthor·okal·dar= (stark positiv ★★★★★) | ★★★★ |
| f18v | Drachenwurz (Dracunculus vulgaris) | 10 P.; qokchy/chy 5× (Leitterm); Zoomorphe Drachen-Figur (Corpus-Erstbeleg bot. Abschnitt); {plant} am Kolophon-Anfang R38; qokchy·qokchy R37-Erstbeleg P.2; ykam/ytor (Auferstehungsverben) P.8; dom= Schlusskolophon-Finale Spr. A (R39) | ★★★★ |
| f19r | Kornblume (Centaurea cyanus) ★★★★ · Alt.: Stephanskraut (Delphinium staphisagria) ★★★ | 13 P. + Schlusskolophon P.13; pchor-Eröffnung (Pupillen-Direktional, Primärindikation); chor/ykchor 6×; ckhy-Kompositionen 8× (stärkste Blässe-Dichte in Quire C); ~9 qo-Formen (~11 %); daiin.cthor.chol.ykchor.chordy (P.10, f15v-Parallele); Layout Typ A (Gesamttext auf Blüten-Höhe — 0 Texte bei Blättern/Wurzel); saiin+chor = Blüten-Pharmakologie Kornblume (Augenwasser, Konjunktivitis ★★★★★) | ★★★★ |
| f19v | Teufelsabbiss (Succisa pratensis) | 12 P. + T.13 Siman; 3 =-Kolophone (P.6a Mini + P.12 Haupt + T.13); daiin·daiin R19-Dopplung P.4 (Corpus-Erstbeleg); yees.ykchol.oty.ytor.ytar.ytchor.ytaiin= (P.12, 7-Verb-Litanei — R49, Corpus-Rekord); ytor 3. Folio-Beleg → ★★★★★; darom (Süden, erster Richtungsterm bot. Corpus) | ★★★★ |
| f20r | Süßes Tragant (Astragalus glycyphyllos) | chor 6× (Pupillen-Leitterm); qotchol P.1 (Universal-Zeichen); dol·shol P.7 (Schmerz-Scheol, Erstbeleg therapeutisches Fenster); cheol Corpus-Erstbeleg botanisch → ★★★ (R43 erfüllt); doppeltes chor-Schlussparadigma R15 P.13: chor·chor·cheey·tchey= (Pupille—Pupille—Leben—sie belebt); Layout Typ A (Apex-Text: Gesamttext auf Blüten-/Fruchtstand-Höhe — kein Text bei Stängel/Wurzel) | ★★★ |
| f20v | Skabiosen-Flockenblume (Centaurea scabiosa) | kompakteste Prognoseformel Corpus P.4 (5 Kernwörter im Kolophon); botanische Reihung mit f19v (Scabiosa-Gruppe, bewusste thematische Sequenzierung); Faserwurzelsystem + blaue Köpfchenblüten mit weißem Hüllkelch; balneologisch (Augenbad, Hildegard von Bingen); Quire C bC4 innerstes Bifolio vollständig | ★★★★ |
| f21r | Sand-Thymian (Thymus serpyllum) | cheol ★★★★ gesichert (4. Beleg! f77r+f20v+f21r P.5+P.8 → R43 definitiv erfüllt, 3 Folios); Dreifache Licht-Formel P.7 (shoeor·cheor·cthor — Corpus-Erstbeleg, R52 Kand.); R15 Typ-B 4. Beleg P.12 (ykeea·chor·…·chor·chkaiin=); Dreifach-Scheol-Sequenz P.11 (shol·chol·shol·tchol — Corpus-Erstbeleg); or/cheol/chor Licht-Dichte 7× (höchste im Corpus); tshaiin Erstbeleg P.9 (★★★ Kand.); Layout Typ A; kein einziger {plant}-Marker in P.1–P.3 = Ganzpflanzen-Präparat TOTUS (R60 A-contrario-Beweis ★★★) | ★★★★ |
| f21v | Gemeine Akelei (Aquilegia vulgaris) | einfachste Kolophon-Struktur im Corpus: 1 =-Marker (P.8, cho·l·kchochaiin=, 3 Wörter — neuer Rekord); chotshol Corpus-Erstbeleg P.6 (★★★ Kand.: alles-du-wirst-Scheol — intensivstes Negativ-Kompositum); daiin·daiin R19-Dopplung P.4 (2. Beleg → R19 ★★★ best.); doppeltes qokchy P.2; keeees Hapax P.3; s-Einschub R51 P.7 (2. Folio-Beleg → R51 ★★★); Bifolio bC4 vollständig | ★★★★ |
| f22r | Papaver / kandelaberförmige Infloreszenz · Alt.: Spitzwegerich (Plantago lanceolata) ★★★ | oraiino P.9 (Kolophon-Formel: Licht seines Auges ★★★★); R15 5. Beleg (Typ B: qokchol·dar·qokchol — Wortspiegelung mit dar als Zwischentext); cthoinn P.10 (vollständige Augen-Heilung, Variante); ctheor ★★★ Kand. P.9; cphal ★★★ Kand. P.7; ctheen ★★★ Kand. P.6; schor ★★★ Kand. P.4; dsheor P.7 (d-Relativpräfix R45); Layout Typ C (P.1–P.2 Samenkapseln FRUCTUS / P.4+ Spiralinfloreszenz bilateral); pol an Kapsel-Position P.1 ★★★★★ (stärkster Einzelbeweis R60); rote Wurzel ohne Text (R60 Ebene 2) | ★★★★ |
| f22v | Weißer Germer (Veratrum album) | daldalol= T.16 (R53 Subtyp A Erstbeleg: dal·dal+ol — doppelte Schwäche des Joches); ykcheor ★★★★ P.5 (R43 erfüllt: f22v + Zodiak-Register); okchain ★★★★ P.13 (Heilungsdirektional: auf Leben hin); pysaiinor ★★★ P.1 (Mund gleich dem Auge des Lichts); olshly P.14 (auf Scheol hin); shotoly P.13 (Scheol-Last hin, sho-Präfix R30) | ★★★★ |
| f23r | Wiesen-Storchschnabel (Geranium pratense) | Drei-Kolophon-Architektur P.3+P.5+P.11 (strukturelle Parallele zu f17r — Außenbifolio-Korrespondenz Quire C); tshol P.6 als P.6-Strukturtoken (erster Beleg); R15 6. Beleg Typ B nominal: qokchol·dar·qokchol P.7; daiidal P.6 (Urteil der Schwäche ★★★); ytom P.5 (er wird vollständig ★★★); dalory P.11 (Schwäche zum Licht ★★★) | ★★★★ |
| f23v | Borretsch (Borago officinalis) | dam·dam P.8 (bilateral — Corpus-Erstbeleg Quire C, Borago-Blutklärungsindikation); tshol P.6 (P.6-Strukturtoken 2. Beleg: beide Seiten desselben Folios f23r+f23v); sar P.6 (Arzt-Supervision über {plant}, 3. Folio-Beleg → ★★★★); qokor P.8 (und alles Licht ★★★); otshor P.6 (Zeichen des Lichts ★★★); olsar P.6 (ärztliche Aufsicht ★★★); aiior P.12 (Auge des Lichts ★★★); Bifolio bC2 vollständig | ★★★★ |
| f24r | Taubenkropf-Leimkraut (Silene vulgaris) | R53 3. T-Klassen-Beleg T.20: sam.chorly= (so heile meine Pupille — R43 erfüllt); sar×2 P.x (3. Folio-Beleg → sar ★★★★); dal·dam·dal-Triplette P.16 (R54 Erstbeleg ★★ Kand.); sshey P.17 (Doppel-Shin-Blässe, R56 ★★★ Kand.); otaiphy P.19 (Hapax ★★ Kand.); sam.chorly ★★★ Kand.; Botanik: Hämostase + Augenwirkung + Supervision | ★★★★ |
| f24v | Physalis-Typ / Scabiosa ★★★ · Alt.: Küchenschelle (Pulsatilla vulgaris) ★★ | Quire-Zeichen „39“ = III = Quire C (letztes Folio Quire C); ot-Kompositum-Dreikette P.2 (otol+otaiir+otchos — R50-Beobachtung); olom ★★★★ P.7 (Ewigkeit/Welt); otaiir ★★★★ P.2 (Zeichen des Augenlichts); cheekdam ★★★★ P.14 (wie das Zeichen des Blutes); oro= P.5 (or-Palindrom-Reduplikation, R55 ★★★ Kand.); odaiim= P.16 (Abschluss-Kolophon-Marker, R57 ★★ Kand.); sho.sho P.14 (R56 ★★ Kand.); Quire C vollständig (16/16 = 100 %); Layout Typ C unilateral-links (oberer Block Blüten+Knollen FLOS / unterer Block Knollen+Blätter); grüne Knollen mit Text; orange Wurzel ohne Text (R60 Ebene 1) | ★★★★ |
| f25r | Brennnessel (Urtica dioica) | R53 4. T-Klassen-Beleg T.7: dair.otaiir.otosy= (Subtyp C — deskriptiv/identifikatorisch: Zeichen-Augenlicht → R53 ★★★★); otaiir Zweitbeleg → ★★★★★ Kand. (R43 erfüllt); daiin·daiin P.5 + daiin P.1 (4×daiin im Bifolio); otosy ★★★ Kand. T.7 (Zeichen-Scheol-gleich-er); cheesees ★★★ Kand. P.3 (Dreifach-Licht-Zeichen); soshy ★★★ Kand. P.1; Bifolio bD1 (Quire D außen): Kontinuität zu Quire C bestätigt; Botanik: Blut/Anämie + Augenindikation; dunkelrote Bohnen an Stengelknoten ohne Text (R60 Ebene 2 Nicht-Wurzel-Erstbeleg ★★★★★ — Reeds: Colors: green,dark-red); T.7 als Pflanzenteil-Deskriptor an Blattspitze (grüne FOLIUM-Zone → R60-Erweiterung, ★★★★ Kand.) | ★★★★ |
| f25v | Schöllkraut (Chelidonium majus) | orchaiin= P.7 (neue Kolophon-Abschlussformel ★★★★: or+chor/k+aiin = Licht-wie-Auge); 3×daiin P.2 (dchor.cthor.chor.daiin.s.okeeaiin.daiin.ckhey.daiin — Corpus-Erstbeleg 3×daiin in einer Zeile, R58 ★★★ Kand.); daiin·daiin P.5 (4. Doppelurteil im Bifolio); ckhear ★★★★ P.4 (ckh-Variante: wie das Licht); qokoral ★★★ Kand. P.6; daiity ★★★ Kand. P.3; R33 qo-Belege: qochol P.5, qokcho + qotchy P.6 (Quire-D-Einstieg Kontinuität); Drachen-Motiv (Toxizitätssignal + Augenheilung); Botanik: Augen (toxisch) + Scheol | ★★★★ |
| f26r | Schwarzer Nachtschatten (Solanum nigrum) — Sprache B | Erster Sprache-B-Einschub Quire D (bD2); Diagnose-Leitterm: psheoky (Pe+Scheol-Öffnung), chckhy (Blässe), dal (Schwäche); Therapie: sar+dal+dar; ykeechy ★★★ Kand. P.9 (8. y+k-Verb: er heilt wie Blässe-Licht); qoteedar ★★★ Kand. P.8 (und er/du wirst leuchten); eedy ★★★ Kand. P.5 (Negativ-Licht-Genitiv); 10 Paragraphen; ={plant}-Abschluss P.10 (otal=); Prognose: ambivalent (psheoky-Toxizität / sheey-Gabe); Indikation: Pallor, Augenschwäche, Atemwegsbefund | ★★★ |
| f26v | Kornblume (Centaurea cyanus) — Sprache B | Sprache-B-Folgenseite bD2; oraiin ★★★★ P.4 (R43 erfüllt: f22r+f26v = 2 Folios); R36 dar·dar Typ B → ★★★★ P.6 (f18r+f26v = 2 Folios); R37 qo-Dopplung → ★★★★ P.5: qotedy·qotedy (f18v+f26v = 2 Folios); stärkste Sequenz P.4: or·cheos·oraiin·okeo·chekaiin= (Augenlicht-Kolophonformel ★★★★, H/C/F/U einig); saraiir ★★★ Kand. P.2 (Arzt des Leuchtenden); daiiin ★★★ Kand. P.1+P.7; cheeol ★★★ Kand. P.3; ory ★★★ Kand. P.8; 9 Paragraphen; ={plant}-Abschluss P.9 (dy=); beidseitige ={plant}-Symmetrie mit f26r; Indikation: Augenlicht, Augenentzündung | ★★★★ |
| f27r | Beinwell (Symphytum officinale) · Alt.: Ochsenzunge (Anchusa officinalis) ★★★ | ksor+shey-Eignungsformel P.1 (ksor ★★★ Kand.); Scheol-Trias P.2; chol·shy-Parallelismus P.3 (Herzstück); qokey P.4 + qotchey P.10 (R33 qo- in Spr. A Quire D bestätigt); cphary ★★★ Kand. P.5 (Sühnopfer-Formel); Doppelkolophon P.6= + P.12a=; daiiin P.12 → ★★★★ (R43 dreifach erfüllt: f1r+f26v+f27r = 3 Folios); shod ★★★ Kand. P.1; chees·chos (Kälte/Hitze, hippokratische Diagnosekontraste) P.12; 12 Paragraphen + 1 Titelzeile; Indikation: Lungenentzündung, Wunden, Blutstillstand | ★★★★ |
| f27v | Wiesen-Margerite (Leucanthemum vulgare) · Alt.: Mutterkraut (Tanacetum parthenium) ★★★ | Dreifach-Scheol + kchor·chor P.1 (schwere ophthalmologische Diagnose); shy·shy-Gabe-Intensivierung P.2 (Heilungsoptimismus R19); dsho P.3 + P.6 (Scheol-Genealogie); qoky P.5 (R33 qo- in Spr. A Quire D); sho·sho-Emphase P.7 → R56 ★★★ validiert (R43 erfüllt: f24v P.14 + f27v P.7 = 2 Folios); Heilungskolophon kshy= P.8 (kshy ★★★ Kand.); fochof/chof ★★★ Kand. P.1 (Mund/Kehle-alles); kchrrr Hapax P.6 (Dreifach-r); 8 Paragraphen + Kolophon-Pflanzensegment; Indikation: Augenentzündung, ophthalmologische Komplikation; Bifolio bD3 abgeschlossen | ★★★★ |
| f28r | Großer Wegerich (Plantago major) | Ophthalmologische Diagnosesequenz: or+chor+otaiin Leitterm; ytchol·yteol·deaiin= (y+t-Doppelverb-Kolophon, Corpus-Erstbeleg) P.9; pchodar ★★★ Kand. P.1 (Finsternis/Dunkelheit); kshol ★★★★ P.1 (wie Scheol); qo-Solitär P.1 → R59 ★★★ validiert (R43 erfüllt: f1v+f28r = 2 Folios); shod ★★★ validiert P.1 (R43 erfüllt: f27r+f28r); 9 Paragraphen; dreifache Dunkelheits-Metaphorik; Indikation: Sehverlust, Scheol-Ophthalmologie; Bifolio bD4 (innerstes Quire D); Layout Typ B (bilateral-Ähre: Diagnose links / Therapie rechts auf gleicher Spadix-Höhe); rote Wurzel ohne Text (R60 Ebene 2) | ★★★★ |
| f28v | Odermennig (Agrimonia eupatoria) · Alt.: Baldrian (Valeriana officinalis) ★★★ | Augenheilungs-Therapiesequenz: ykcholy ★★★★ P1.2 (er heilt alles); tshoiin ★★★★ P1.4 ([sie] wendet das Auge von Scheol); dreifache {plant}-Marker P2.8 (Corpus-Erstbeleg — Dreiphasen-Rezept); Heilerkolophon sor·dar= P2.9 (sor ★★★★ Arzt-Variante); Kurztitel T1.6: daiin.chkaiin= (R23 2. Quire-D-Beleg); chear ★★★ Kand. P2.9; 5+1T+3 Texteinheiten; Bifolio bD4 vollständig — Quire-D-Zentrum ophthalmologisch gesichert | ★★★★ |
| f29r | Krauser Ampfer (Rumex crispus) | Begleittherapie Blässe + Fieber; poraiin ★★★ Kand. P.1 (Licht des Auges); shor·shor P.6 → R19-Erweiterung auf shor-Stamm (Corpus-Erstbeleg shor-Dopplung, ★★★ Kand.); R15 Typ C Erstbeleg P.8: shor·chor·sho — Dreikette als semantisches Spannungsfeld; shocthy ★★★ validiert (R43: f28r P.7+f29r P.6); cheeol ★★★ validiert (R43: f26v P.3+f29r P.5); shos ★★★ Kand. P.5; shokchy ★★★ Kand. P.7; ychom ★★★ Kand. P.9; 9 Paragraphen; Kolophon-Marker P.4+P.9; Indikation: Blutarmut, Blässe, Fieber | ★★★ |
| f29v | Natternkopf / Viper's Bugloss (Echium vulgare) | Pharmakopöe-Katalog Augenpflanzen (21+ {plant}-Marker); chol·chol R35-Cluster P.2+P.3 → R35 ★★★ validiert (R43: f17v+f29v = 2 Folios); ytchor ★★★★ P.2 (R43: f16v+f29v = 2 Folios); tchor Zweitbeleg P.8 → ★★★★ bestätigt; shot ★★★ Kand. P.4; chain ★★★ Kand. P.5 → R43 erfüllt f30r; chykar ★★ Kand. P.10; Dual-Kolophon: shot·sho·okaiin= (neg.) + ykaiin-oaiin= (pos.); 12 Paragraphen; Bifolio bD4 vollständig — Quire D abgeschlossen | ★★★★ |
| f30r | Salomonssiegel (Polygonatum multiflorum) ★★★★ · Alt.: Traubenhyazinthe (Muscari racemosum) ★★★ | 13 Paragraphen; R19 Typ E Corpus-Erstbeleg P.11: cheor·chey·cheor·chey (ABAB-Licht-Leben-Verflechtung, ★★★ Kand.); chor solitär zwischen 2 {plant} P.12 (diagnostischer Kern visuell eingerahmt); chain ★★★ validiert P.7 (R43 erfüllt: f29v+f30r); opchol ★★★ validiert P.8 (R43 erfüllt: f28r+f30r); Kolophon P.7: qor·chain·cthorchy= (Dreiterm positiv); Kolophon P.13: chodaiin·chtchey·chear·shy·keey=; chorain ★★★ Kand. P.3; cthorchy ★★★ Kand. P.7; dchorol + chseeor ★★★ Kand. P.6; soin ★★★ Kand. P.4; ~14× {plant}-Marker; Indikation: Blässe-Ophthalmologie, Pupillenheilung, Licht-Sandwich-Formel; Layout Typ C (P.1–P.7 Beeren FRUCTUS / P.8–P.13 Blatt+Rhizom FOLIUM/CAULIS — zwei Zonen, chor solitär P.12 = Rhizom-Kernterm) | ★★★★★ |
| f30v | Brennnessel (Urtica dioica) ★★★★ · Alt.: Hängebirke (Betula pendula) ★★★ | 11 Paragraphen; stärkste Scheol-Dichte bD3 (~8× sho/shol); dain ★★★ validiert P.5 (R43 erfüllt: f1r+f30v); R28 Erweiterung ytor = y+t+or Kand. P.5 (erste Anwendung auf kurzen or-Stamm); Schlusskolophon P.11: shol·chokcheey·daiin·kchydy= (chokcheey ★★★★ Kand. Lebensvorschrift); shosaiin ★★★★ Kand. P.1 (Scheol des Augenarztes); cphoaiin ★★★ Kand. P.8 (wie der Atemweg des Auges, 3/3 Transkriptoren); sos ★★★ Kand. P.7+P.9 (2× auf diesem Folio); kcho·tcho·ctho morphologisches Triplett P.7; 9× {plant}-Marker; Bifolio bD3 vollständig; Quire-D-Innenbifolios bD3+bD4 abgeschlossen; orange-braune Wurzel ohne Text (R60 Ebene 1 — Folgebeleg zu f24v) | ★★★★ |


## XI. Das Randstern-System

### Sterntypen

| Typ | Morphologie | Funktion | Konf. |
| --- | --- | --- | --- |
| Rot | Gefüllte rote Mitte, 6–8 Zacken | Falleröffnung / Akutphase | ★★★ |
| Leer | Hohle Mitte, Umrandung | Krisenphase / Verlauf (sheol-Vokabular häufig) | ★★★ |
| Punkt | Kleiner Mittelpunkt | Abschlussnotiz / Prognose (stärkstes sheol·chalal) | ★★★ |
| Beige | Pergamentfarbene Mitte | Zweite Seitenhälfte (ab P.27 f103r); schwerste Fälle | ★★ |
| Sonderstern | 8 Zacken + Schleife | Registerabschluss (f103r P.52, f114v P.1) | ★★★ |
| 6-Zacken (Quire H) | 6-zackig, goldfarben, kein Kern | Block 1: allgemeines Sternen-Register (f58r P.1–P.15) | ★★★ |
| 7-Zacken + Kern (Quire H) | 7-zackig, goldfarben, kleiner Kern | Block 2: Planetenreihe — 7 klassische Planeten (f58r P.16–P.25) | ★★★ |
| 8-Zacken + Kern (Quire H) | 8-zackig, goldfarben, größerer Kern | Block 3: Fixsternkatalog / op-Koordinatenformat — R48 (f58r P.26–P.40) | ★★★ |


### Folio-Prinzipien

| Folio | Prinzip | Notiz |
| --- | --- | --- |
| f103r/v | Spärlich (19/54 Para.); sternlos = positiver Ausgang | Inclusio P.1↔P.52; beige Zone ab P.27 |
| f116r | Regelmäßige ~3er-Gruppen (P.1–P.30); danach sternlose Sektion | Transkriptor: “End of starred paragraphs” |
| f114v | Strikt alternierend Beige–Rot–Beige–Rot | Paarstruktur; Schleifenlänge als zweite Dimension |
| f115r/v | Überwiegend 8-zackig mit Schleife | Stark ch-dominiertes Vokabular — anderes Register |
| f58r | 3 Randsterne (gold) markieren 3 Textblöcke; je ein Stern über dem ersten Paragraphen des Blocks | 6-Zacken (P.1–P.15) · 7-Zacken+Kern (P.16–P.25) · 8-Zacken+Kern (P.26–P.40) — R48 |


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

### OP5 — Regelmoratorium beendet (v8.1)

**Schwere:** strukturell · **Status:** gelöst

Das Verhältnis validierter Regeln zu Kandidaten-Regeln hat sich umgekehrt: v6.2 = 2,25:1 · v6.6 = 1,47:1 · v7.4 = 0,84:1 · v7.7 = 1,03:1 · v7.8 = 1,11:1 · v7.9 = 1,14:1 · v8.0 = 1,27:1. Das ist ein klassisches Overfitting-Signal: Neue Beobachtungen generieren neue Regeln, anstatt bestehende Kandidaten zu schließen.

_Arbeitshypothese: Ab v7.5: Regelmoratorium (keine R60+) bis Verhältnis ≥ 1,5:1. Zielwert in v8.1 erreicht durch 4 Kandidaten-Absorptionen (R32→R25, R52→R15, R54→R19, R57→R11) + R28-Validierung: 34:21 = 1,62:1. Weiteres Wachstum durch f30r/f30v: +3 Lexikon-Validierungen (opchol, dain, chain via R43), R19 Typ E Kand. (ABAB f30r P.11), R28 Erweiterung ytor (f30v P.5) → 37 validiert : 18 Kandidaten = 2,06:1. Moratorium bleibt beendet. R56 ★★★ validiert (v7.7) · R59 ★★★ validiert (v7.8) · R35 ★★★ validiert (v7.9) · R28 ★★★ validiert (v8.1)._

### OP6 — Frist-Tracking-Lücke

**Schwere:** mittel · **Status:** offen

Das Mapping dokumentiert R43-Fristen in Lexikoneinträgen, aber es gibt kein aktives Tracking-System, das automatisch auf abgelaufene Fristen hinweist. Folge: 15 Einträge sind über mehrere Mapping-Versionen hinweg im ★★★-Kand.-Status verblieben, obwohl ihre Frist längst verstrichen war.

_Arbeitshypothese: Einführung einer Pflege-Tabelle für aktive R43-Fristen, die bei jeder neuen Mapping-Version systematisch geprüft wird. Aktive Fristen nach v8.1-Bereinigung: 24 Einträge; nach f30r/f30v: −3 geschlossen (opchol, dain, chain → validiert) + 12 neue Kand. (chorain, cthorchy, dchorol, chseeor, soin, chokcheey, cphoaiin, sos, shoty, shosaiin, chokeor, chokchy) → ~33 aktive Fristen._

### OP7 — Moratorium-Drift

**Schwere:** niedrig-mittel · **Status:** offen

Das Regelmoratorium hemmt nur die Einführung R60+, aber nicht die Akkumulation neuer Kandidaten durch Folio-Analysen. Zwischen v7.5 und v8.0 wurden mit R36, R59, R56, R35 vier Validierungen erreicht — jedoch gleichzeitig R49, R51, R55, R56, R57, R58 als neue Kandidaten eingeführt. Das Verhältnis verbesserte sich von 0,84:1 (v7.4) nur auf 1,27:1 (v8.0), nicht auf das Ziel 1,50:1.

_Arbeitshypothese: Strenger Vorbehalt: Neue Kandidaten-Regeln aus zukünftigen Folio-Analysen erhöhen den Nenner und können die Konsolidierungseffekte konterkarieren. Das Moratorium sollte bei zukünftigen Überschreitungen erneut aktiviert werden._

### OP8 — CAULIS-Kandidaten fol/tal in f2r–f10v

**Schwere:** hoch · **Status:** offen

Die in v8.4 identifizierten CAULIS-Kandidaten `fol` (Röhrenschaft) und `tal` (Pflanzensaft) wurden bisher nur in f13v belegt. Ihre Vorkommen in den neu analysierten Quire-A-Folios f2r–f10v sind noch nicht systematisch geprüft.

_Arbeitshypothese: Grep auf den Transkriptionen f002r–f010v nach `fol` und `tal` in CAULIS-Paragraphen. Wenn ≥1 Beleg in Quire A → R43 erfüllt, Aufstufung zu ★★★★._

### OP9 — f009r Vollübersetzung P.1–P.9

**Schwere:** hoch · **Status:** ausstehend

Folio f009r (Bistorta officinalis) ist als neues Anker-Folio mit vollständigen Transkriptionen verfügbar, aber nur P.1 links wurde in v8.4 übersetzt. Die restlichen Paragraphen P.2–P.9 einschließlich der bilateralen FLOS-Struktur sind noch unübersetzt.

_Arbeitshypothese: Vollübersetzung mit Ankerwort-Test: sary, shor, cthy, tydlo gegen bekannte Bedeutungen testen. Cross-Register-Bestätigung für FLOS-Eröffner-Muster._

### OP10 — Verso-Folios f2v–f10v Positionskarten

**Schwere:** mittel · **Status:** offen

Die Retroanalyse v8.4 deckte nur die Recto-Seiten f2r–f10r ab. Die entsprechenden Verso-Folios f2v–f10v (außer f2v und f3v, die bereits teilw. analysiert wurden) haben noch keine Pflanzenteil-Positionskarten.

_Arbeitshypothese: Bilder verfügbar. Muster der Recto-Seiten (Typ A/C/D dominierend) vermutlich auf Verso übertragbar, aber morphologische Unterschiede möglich (z.B. Typ B auf Verso-Seiten)._

### OP11 — f033v Analyse (Verso von f33r)

**Schwere:** mittel · **Status:** gelöst

Das Bifolio bE1 (f33r + f40) wurde auf der Recto-Seite f33r vollständig analysiert (v8.4). Das Verso f33v wurde in v8.7 vollständig analysiert: Echinops ritro (Kugeldistel) ★★★, 11 Paragraphen, 22 {plant}-Marker (höchste Dichte im Corpus), olaiin-Erstbeleg (f33v P.6), dichter or-Cluster P.9 (3× or + aiin + chor + shol).

_Arbeitshypothese: Bestätigt: Sprache B, Layout-Typ C (vertikale Zonentrennung). Botanische Identifikation Echinops ritro weicht erwartungsgemäß von f33r (Mandragora) ab._

### OP13 — Quire-E-Zoomorphie-Hypothese

**Schwere:** mittel · **Status:** offen

Quire E eröffnet mit zwei zoomorphen Wurzel-Darstellungen: f33r (Mandragora officinarum, humanoid) und f34v (Bryonia alba, quadruped — Hirsch/Hase). Dies markiert einen möglichen ikonographischen Subkodex für Pflanzen mit anthropo- oder zoomorphen Wurzeln. Offen: Setzt sich das Muster in f35r/f35v und weiteren Quire-E-Folios fort?

_Arbeitshypothese: Quire E fokussiert auf Pflanzen mit magisch-pharmakologischer Doppelfunktion, deren Wurzeln in menschliche oder tierische Formen wachsen (Mandragora, Bryonia). Im mittelalterlichen Kräuterbuch sind diese Pflanzen als „Kräfte-Pflanzen“ mit besonderer pharmakologischer Potenz klassifiziert. R60 Korollar 2 (Ikonographische Toxizitäts-Warnung) könnte als Quire-E-spezifische Erweiterung formal werden. Prüfen: f35r/f35v auf zoomorphe Elemente._

### OP12 — FOLIUM-Textfreiheit: Regel oder Layout-Artefakt?

**Schwere:** niedrig-mittel · **Status:** offen

25/25 Folios zeigen FOLIUM-Textfreiheit (R60 Korollar 3, v8.7: ★★★★★). Die 25-Folio-Schwelle wurde mit f32r, f32v, f33v, f34r, f34v überschritten. Offene Grundsatzfrage bleibt: bewusste pharmakologische Kodierung oder rein layoutbedingtes Phänomen?

_Arbeitshypothese: Theoretische Reflexion: Wenn FOLIUM-Textfreiheit ein Artefakt wäre, müssten Blätter in Apex-Position (oben) Text haben. Aber f002v und f005r (riesige Rundblätter dominant) haben trotz Blatt-Dominanz KEINEN Text. Bei 25 Folios und 0 Gegenbeispielen spricht die Evidenz für semantische Intention. R60 Korollar 3 auf ★★★★★ aufgestuft._

**Scheol-Verteilungsstatistik (v7.5 formalisiert):**

| Strukturposition | sheol/shol-Vorkommen | Andere Lexeme |
| --- | --- | --- |
| Zeilenende / Kolophon-Final | >85 % aller Belege | or, dom, kaiim |
| Zeilenmitte (medial) | <15 % — immer in Kompositum | — |
| Zeilenanfang | 0 % | — |


---

Voynich-Manuskript — Formales Mapping-Dokument · Version 8.8.8 · Juni 2026
Lexikon: 199 Einträge · Grammatikregeln: 57 · Rückwärtstest: Typ I: 10/10 (100%) · Typ II: 29/32 (91%)

_Dieses Dokument ist ein Forschungshilfsmittel. Alle Übersetzungen sind Hypothesen und laden zur Falsifikation ein._