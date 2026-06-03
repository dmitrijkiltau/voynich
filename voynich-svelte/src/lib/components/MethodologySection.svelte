<script>
  import { CONFIDENCE_SCALE, ANCHOR_FOLIOS } from "$lib/methodology-data.js";

  const content = {
    title: "II. Methodik",
    backwardsTest: {
      title: "Rückwärtstest-Prinzip",
      description:
        "Jede Mapping-Hypothese wird durch Rückwärtstests validiert: Ein bekanntes hebräisches oder aramäisches Wort wird nach dem vorgeschlagenen Mapping in EVA kodiert und im Voynich-Korpus gesucht. Bestätigung erfordert: (a) Vorkommen im Korpus, (b) semantisch plausible Position, (c) kontextuell passende Nachbarwörter.",
      confidenceTitle: "Konfidenzskala",
      stars: "Sterne",
      label: "Bedeutung",
      criteria: "Kriterien",
    },
    anchorFolios: {
      title: "Anker-Folios",
    },
  };
</script>

<section class="section" id="methodology">
  <h2>{content.title}</h2>

  <div class="methodology">
    <div class="methodology-grid">
      <div class="backward-test">
        <h3>{content.backwardsTest.title}</h3>
        <p>{content.backwardsTest.description}</p>

        <h3>{content.backwardsTest.confidenceTitle}</h3>
        <table class="dt">
          <thead>
            <tr>
              <th>{content.backwardsTest.stars}</th>
              <th>{content.backwardsTest.label}</th>
              <th>{content.backwardsTest.criteria}</th>
            </tr>
          </thead>
          <tbody>
            {#each CONFIDENCE_SCALE as row}
              <tr>
                <td
                  ><span class={row.is5 ? "conf5" : "conf"}>{row.stars}</span
                  ></td
                >
                <td>{row.label}</td>
                <td>{row.criteria}</td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>

      <div>
        <h3>{content.anchorFolios.title}</h3>
        {#each ANCHOR_FOLIOS as anchor}
          <div class="box blue anchor-card">
            <div class="box-title">{anchor.folio} — {anchor.subtitle}</div>
            <p>{anchor.desc}</p>
            {#if anchor.eva}
              <div class="layer-eva">{anchor.eva}</div>
              <div class="layer-heb">{anchor.heb}</div>
              <div class="anchor-gloss">{anchor.gloss}</div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  #methodology {
    container-type: inline-size;

    & .methodology-grid {
      display: grid;
      justify-content: space-between;
      align-items: start;
      gap: 0 2rem;

      @container (min-width: 640px) {
        grid-template-columns: minmax(240px, 568px) minmax(196px, 640px);
      }
    }

    & .anchor-card {
      margin-bottom: 0.8rem;

      & p {
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
      }
    }

    & .anchor-gloss {
      font-style: italic;
      color: var(--ink-l);
      font-size: 0.9rem;
      border-left: 2px solid var(--gold);
      padding-left: 0.7rem;
      margin-top: 0.3rem;
    }
  }
</style>
