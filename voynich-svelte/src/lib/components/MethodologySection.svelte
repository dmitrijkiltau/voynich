<script>
  import { CONFIDENCE_SCALE, ANCHOR_FOLIOS } from "$lib/methodology-data.js";
  import { isConf5 } from "$lib";
  import Box from '$lib/components/Box.svelte';

  const content = {
    title: "II. Methodik",
    backwardsTest: {
      title: "Rückwärtstest-Prinzip",
      description:
        "Jede Mapping-Hypothese wird durch Rückwärtstests validiert: Ein bekanntes hebräisches oder aramäisches Wort wird nach dem vorgeschlagenen Mapping in EVA kodiert und im Voynich-Korpus gesucht. Bestätigung erfordert: (a) Vorkommen im Korpus, (b) semantisch plausible Position, (c) kontextuell passende Nachbarwörter.",
		},
		confidence: {
			title: "Konfidenzskala",
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
			</div>

			<div class="confidence">
        <h3>{content.confidence.title}</h3>
        <div class="table-wrap">
          <table class="dt">
            <thead>
              <tr>
                <th>{content.confidence.stars}</th>
                <th>{content.confidence.label}</th>
                <th>{content.confidence.criteria}</th>
              </tr>
            </thead>
            <tbody>
              {#each CONFIDENCE_SCALE as row (row.stars)}
                <tr>
                  <td class="stars">
                    <span class={isConf5(row.stars) ? "conf5" : "conf"}>{row.stars}</span>
                  </td>
                  <td class="label">{row.label}</td>
                  <td class="criteria">{row.criteria}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>

      <div class="anchor-folios">
        <h3>{content.anchorFolios.title}</h3>
        {#each ANCHOR_FOLIOS as anchor (anchor.folio)}
          <div class="anchor-card">
            <Box variant="blue" title="{anchor.folio} — {anchor.subtitle}">
              <p>{anchor.desc}</p>
              {#if anchor.eva}
                <div class="layer-eva-heb">
                  <div class="layer-eva">{anchor.eva}</div>
                  <div class="layer-heb">{anchor.heb}</div>
                </div>
                <div class="anchor-gloss">{anchor.gloss}</div>
              {/if}
            </Box>
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
			grid-template-columns: 1fr;
			grid-template-rows: auto auto auto;
			grid-template-areas: "backward"
													 "confidence"
													 "anchors";
      justify-content: space-between;
      align-items: start;
      gap: 0 2rem;
      overflow: hidden;

			& .backward-test { grid-area: backward; }
			& .confidence { grid-area: confidence; }
			& .anchor-folios { grid-area: anchors; }

      @container (max-width: 480px) {
        & .confidence table tr {
          display: grid;
          grid-template-columns: 6rem auto;
          grid-template-areas:
            "stars label"
            "criteria criteria";

          & td.stars { grid-area: stars; }
          & td.label { grid-area: label; }
          & td.criteria { grid-area: criteria; }

          & td.stars, & td.label {
            border-bottom: 0;
            padding-bottom: 0;
          }
        }
      }

      @container (min-width: 960px) {
        grid-template-columns: minmax(240px, 480px) minmax(240px, 568px);
				grid-template-rows: auto 1fr;
				grid-template-areas:
					"backward confidence"
					"anchors anchors";
      }

      @container (min-width: 1280px) {
        grid-template-columns: minmax(240px, 568px) 1fr;
				grid-template-areas:
					"backward anchors"
					"confidence anchors";
      }
    }

		& .anchor-folios {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
			gap: 1rem;

      @container (min-width: 960px) {
				grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
			}

			& h3 {
				grid-column: 1 / -1;
				margin-bottom: -0.8rem;
			}

      & .anchor-card {
        & p {
          margin-bottom: 0.5rem;
          font-size: var(--text-sm);
        }

        & .layer-eva-heb {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 0.2rem;
        }
      }

      & .anchor-gloss {
        font-style: italic;
        color: var(--ink-l);
        font-size: var(--text-sm);
        border-left: 2px solid var(--gold);
        padding-left: 0.7rem;
        margin-top: 0.3rem;
      }
		}
  }
</style>
