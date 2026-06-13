<script>
  import { RULES } from "$lib/grammar-rules-data.js";
  import { STATS } from "$lib";
  import Box from '$lib/components/Box.svelte';

  const CONTENT = {
    title: "I. Zusammenfassung",
    summary: `Das vorliegende Dokument fasst den aktuellen Stand der Entzifferungsanalyse des Voynich-Manuskripts zusammen. Es richtet sich an Hebraisten, Aramaisten und Kodikographen, die eine unabhängige Prüfung der vorgeschlagenen Übersetzungen vornehmen möchten.`,
    hypothesis: `Die Grundhypothese: Das Voynich-Manuskript ist in Mischna-Hebräisch mit aramäischen Lehnpartikeln verfasst, verschlüsselt durch ein konsonantisches Alphabet mit Niqqud-Markierungen als Vokalhelfer. Die Texte folgen dem Schema eines hippokratisch-mittelalterlichen Medizintraktats: Diagnose → Symptombeschreibung → Therapieindikation → Prognose.`,
    version: `Version ${STATS.version}`,
    findings: [
      {
        label: "Identifizierte Sprache",
        value: "Mischna-Hebräisch / Jüdisch-Aramäisch",
      },
      {
        label: "Texttyp",
        value: "Medizinischer Traktat / Astronomisch-astrologisches Register — Pharmakopöe + Fixsternkatalog (f58r); f1r: deklarativer Haskama-Typ (sui generis)",
      },
      { label: "Analysierte Folios", value: STATS.foliosAll },
      {
        label: "Bestätigte Wörter",
        value: `${STATS.lexicon} (★★★ oder höher)`,
      },
      {
        label: "Rückwärtstest",
        value: `${STATS.backtestFraction} · 0 Falsch-Positive`,
      },
      {
        label: "Sprache A Anker",
        value: `${STATS.foliosA}: 10/10 Sprache-A-Ankerwörter je Folio — 100 % (Quires A+B vollständig, Quire C bC1–bC4, Quire D bD1+bD2+bD3+bD4 vollständig)`,
      },
      {
        label: "Grammatikregeln",
        value: `${RULES.length} (${STATS.validatedRules} validiert + ${RULES.length - STATS.validatedRules} Kandidaten)`,
      },
    ],
		correctionsTitle: `Korrekturen in v${STATS.version}`,
  };
</script>

<section class="section" id="abstract">
  <h2>{CONTENT.title}</h2>
  <div class="abstract-grid">
    <div id="abstract-text">
      <p class="dropcap">{CONTENT.summary}</p>
      <p>{CONTENT.hypothesis}</p>
    </div>

    <div class="abstract-findings box hl">
      <table class="dt findings-table">
        <tbody>
          {#each CONTENT.findings as finding (finding.label)}
            <tr>
              <td>{finding.label}</td>
              <td>{finding.value}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <div class="abstract-changelog hidden-print">
      <Box variant="hl" title={CONTENT.correctionsTitle}>
        <ul>
          {#each STATS.changelog as change, index (index)}
            <li>{change}</li>
          {/each}
        </ul>
      </Box>
    </div>
  </div>
</section>

<style>
  #abstract {
    container-type: inline-size;

    & .abstract-grid {
      display: grid;
      justify-content: space-between;
      align-items: start;
      gap: 0 2rem;

      @container (min-width: 768px) {
        grid-template-columns: minmax(320px, 568px) minmax(320px, 640px);
      }

      & .abstract-changelog {
        grid-column: 1 / -1;
      }

      & .box {
        container-type: inline-size;

        & .findings-table {
          & td {
            padding: 0.3rem 0;

            &:first-child {
              color: var(--ink-f);
              font-size: var(--text-sm);
              white-space: nowrap;
              width: 1%;
              padding-right: 1.2rem;
            }
          }

          @container (max-width: 360px) {
            & tr {
              display: flex;
              flex-direction: column;

              & td:first-child {
                border: 0;
                padding: 0.6rem 0 0 0;
              }

              & td:last-child {
                padding-bottom: 0.6rem;
              }
            }
          }
        }
      }

      & .abstract-changelog {
        margin-top: 2rem;
      }
    }
  }
</style>
