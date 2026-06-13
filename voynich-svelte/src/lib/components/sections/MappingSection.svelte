<script>
  import { MAPPING } from '$lib';
  import Box from '$lib/components/Box.svelte';
  import MappingGrid from '$lib/components/MappingGrid.svelte';
  import { CONTENT } from '$lib/content.js';

  let { onInsert } = $props();

  const C = CONTENT.mapping;
</script>

<section class="section" id="mapping">
  <h2>{C.title}</h2>
  <div class="mapping">
    <div class="mapping-intro">
      <p>{C.intro}</p>
      <Box variant="red" title={C.specialRule.title}>
        <p style="margin:0;font-size:var(--text-sm)">{@html C.specialRule.text}</p>
      </Box>
    </div>
    <MappingGrid {MAPPING} {onInsert} />
  </div>
</section>

<style>
  .mapping {
    display: flex;
    align-items: start;
    flex-wrap: wrap;
    gap: 0 2rem;

    & > .mapping-intro {
      flex: 0 1 480px;
    }
  }
</style>
