<script>
	import { GRAMMAR_PREFIXES, GRAMMAR_SUFFIXES, VERB_PARADIGM } from '$lib/grammar-data.js';
	import { isConf5 } from '$lib';
	import Box from '$lib/components/Box.svelte';
	import { CONTENT } from '$lib/content.js';

	let { onLinkFilter = /** @type {((eva: string) => void) | undefined} */ (undefined) } = $props();

	const C = CONTENT.grammar;
</script>

<section class="section" id="grammar">
	<h2>{C.title}</h2>
	<p>{C.intro}</p>

	<div class="grammar-systems">
		<div>
			<h3>
				{C.prefixSystem.title}
				{#if onLinkFilter}<span class="filter-hint">{C.prefixSystem.filterHint}</span>{/if}
			</h3>
			<table class="dt">
				<thead>
					<tr>
						<th>{C.columns.evaPrefix}</th>
						<th>{C.columns.heb}</th>
						<th>{C.columns.fn}</th>
						<th>{C.columns.example}</th>
						<th>{C.columns.confidence}</th>
					</tr>
				</thead>
				<tbody>
					{#each GRAMMAR_PREFIXES as row (row.eva)}
						<tr
							class:row-filterable={!!onLinkFilter}
							title={onLinkFilter ? `Im Lexikon nach „${row.eva}" filtern` : undefined}
							onclick={() => onLinkFilter?.(row.eva)}
							onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && onLinkFilter?.(row.eva)}
							tabindex={onLinkFilter ? 0 : undefined}
						>
							<td><span class="eva">{row.eva}</span></td>
							<td><span class="heb-sm">{row.heb}</span></td>
							<td>{row.fn}</td>
							<td><span class="eva">{row.ex_eva}</span> = <span class="heb-sm">{row.ex_heb}</span></td>
							<td><span class={isConf5(row.stars) ? 'conf5' : 'conf'}>{row.stars}</span></td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<div>
			<h3>
				{C.suffixSystem.title}
				{#if onLinkFilter}<span class="filter-hint">{C.suffixSystem.filterHint}</span>{/if}
			</h3>
			<table class="dt">
				<thead>
					<tr>
						<th>{C.columns.evaSuffix}</th>
						<th>{C.columns.heb}</th>
						<th>{C.columns.fn}</th>
						<th>{C.columns.confidence}</th>
					</tr>
				</thead>
				<tbody>
					{#each GRAMMAR_SUFFIXES as row (row.eva)}
						<tr
							class:row-filterable={!!onLinkFilter}
							title={onLinkFilter ? `Im Lexikon nach „${row.eva}" filtern` : undefined}
							onclick={() => onLinkFilter?.(row.eva)}
							onkeydown={(e) => (e.key === 'Enter' || e.key === ' ') && onLinkFilter?.(row.eva)}
							tabindex={onLinkFilter ? 0 : undefined}
						>
							<td><span class="eva">{row.eva}</span></td>
							<td><span class="heb-sm">{row.heb}</span></td>
							<td>{row.fn}</td>
							<td><span class={isConf5(row.stars) ? 'conf5' : 'conf'}>{row.stars}</span></td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>

	<Box variant="hl" title={C.verbParadigm.title}>
		<p style="margin-bottom:.5rem;font-size:var(--text-sm)">{@html C.verbParadigm.intro}</p>
		<div class="table-scroll">
			<table class="dt" style="margin-top:.4rem">
				<thead>
					<tr>
						<th>{C.columns.evaPrefix}</th>
						<th>{C.columns.heb}</th>
						<th>{C.columns.de}</th>
						<th>{C.columns.folio}</th>
						<th>{C.columns.confidence}</th>
					</tr>
				</thead>
				<tbody>
					{#each VERB_PARADIGM as row (row.eva)}
						<tr style={row.negative ? 'color:var(--red)' : row.candidate ? 'opacity:.55;font-style:italic' : ''}>
							<td><span class="eva">{row.eva}</span></td>
							<td><span class="heb-sm">{row.heb}</span></td>
							<td class="meaning">{row.de}</td>
							<td>{row.folio}</td>
							<td><span class={isConf5(row.stars) ? 'conf5' : 'conf'}>{row.stars}</span></td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</Box>

	<Box variant="hl" title={C.prognosisA.title}>
		<p style="margin-bottom:.5rem;font-size:var(--text-sm)">{C.prognosisA.intro}</p>
		<div class="schema">
			<div class="schema-step">
				<span class="heb-sm">דָּם·כְּהִי·חַם</span>
				<span class="lbl-2xs lbl">Symptom (links)</span>
			</div>
			<span class="schema-arrow">‡</span>
			<div class="schema-step" style="background:rgba(28,61,90,.06);border-color:var(--blue)">
				<span class="heb-sm">{'{'+'plant}'}</span>
				<span class="lbl-2xs lbl">Trennmarker</span>
			</div>
			<span class="schema-arrow">‡</span>
			<div class="schema-step">
				<span class="heb-sm">שַׂם·חֲקַר</span>
				<span class="lbl-2xs lbl">Therapie (rechts)</span>
			</div>
			<span class="schema-arrow">→</span>
			<div class="schema-step" style="background:color-mix(in srgb, var(--red) 8%, transparent);border-color:var(--red)">
				<span class="heb-sm">שְאוֹל·אוֹר</span>
				<span class="lbl-2xs lbl">sheol / or<br>Prognose</span>
			</div>
			<span class="schema-arrow">→</span>
			<div class="schema-step" style="background:color-mix(in srgb, var(--gold) 8%, transparent)">
				<span class="heb-sm">= / קַיָּם</span>
				<span class="lbl-2xs lbl">Kolophon</span>
			</div>
		</div>
	</Box>

	<Box variant="hl" title={C.prognosisT.title}>
		<p style="margin-bottom:.5rem;font-size:var(--text-sm)">{C.prognosisT.intro}</p>
		<div class="schema">
			<div class="schema-step">
				<span class="heb-sm">דִּין</span>
				<span class="lbl-2xs lbl">daiin<br>Urteil</span>
			</div>
			<span class="schema-arrow">→</span>
			<div class="schema-step">
				<span class="heb-sm">שֶׁ+Symptom</span>
				<span class="lbl-2xs lbl">shedy+X</span>
			</div>
			<span class="schema-arrow">→</span>
			<div class="schema-step">
				<span class="heb-sm">כְּהִי · דַּל · דָּם</span>
				<span class="lbl-2xs lbl">Befund</span>
			</div>
			<span class="schema-arrow">→</span>
			<div class="schema-step">
				<span class="heb-sm">לְכְּדֵי</span>
				<span class="lbl-2xs lbl">lchedy<br>Therapieziel</span>
			</div>
			<span class="schema-arrow">→</span>
			<div class="schema-step" style="background:color-mix(in srgb, var(--red) 8%, transparent);border-color:var(--red)">
				<span class="heb-sm">שְׁאוֹל · אוֹר</span>
				<span class="lbl-2xs lbl">Prognose (Tod/Heilung)</span>
			</div>
		</div>
	</Box>
</section>

<style>
  .grammar-systems {
    display: flex;
    flex-wrap: wrap;
    gap: 0 2rem;

    & > div {
      flex: 1 1 480px;
      overflow-x: auto;
    }
  }

  .table-scroll {
    overflow-x: auto;
  }

  /* ── Filterable rows ────────────────────────────────── */

  tr.row-filterable {
    cursor: pointer;
    transition: background-color var(--t-fast);

    &:hover {
      background-color: color-mix(in srgb, var(--red) 7%, transparent);
    }

    &:focus-visible {
      outline: 2px solid var(--red);
      outline-offset: -2px;
    }
  }

  .filter-hint {
    font-family: var(--font-smallcaps);
    font-size: var(--text-2xs);
    letter-spacing: .08em;
    font-weight: normal;
    color: var(--ink-f);
    opacity: .7;
  }

  /* ── Schema diagram ─────────────────────────────────── */

  .schema      { margin-top: .85rem; }
  .schema-step { min-width: 5rem; }
  .schema-arrow { margin: 0 .1rem; }
</style>
