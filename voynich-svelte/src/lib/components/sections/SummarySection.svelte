<script>
  import { RULES } from '$lib/grammar-rules-data.js';
  import { STATS } from '$lib';
  import Box from '$lib/components/Box.svelte';
  import { CONTENT } from '$lib/content.js';

  const C = CONTENT.summary;

  const findings = C.findings.map(f => ({
    label: f.label,
    value: typeof f.value === 'function' ? f.value(STATS, RULES) : f.value,
  }));
</script>

<section class="section" id="abstract">
  <h2>{C.title}</h2>
  <div class="abstract-grid">
    <div id="abstract-text">
      <p class="dropcap">{C.abstract}</p>
      <p>{C.hypothesis}</p>
    </div>

    <div class="abstract-findings box hl">
      <table class="dt findings-table">
        <tbody>
          {#each findings as finding (finding.label)}
            <tr>
              <td>{finding.label}</td>
              <td>{finding.value}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>

    <div class="abstract-changelog hidden-print">
      <Box variant="hl" title={C.correctionsTitle(STATS.version)}>
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
