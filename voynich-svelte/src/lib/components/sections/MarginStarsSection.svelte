<script>
	import { STAR_TYPES, FOLIOS } from '$lib/margin-stars-data.js';
	import Box from '$lib/components/Box.svelte';
	import { CONTENT } from '$lib/content.js';

	const C = CONTENT.marginStars;
</script>

<section class="section" id="margin-stars">
	<h2>{C.title}</h2>
	<p>{C.intro}</p>

	<div class="randstern">
		<Box variant="hl" title={C.orRuleTitle} class="or-rule">
			<p style="margin:0">{@html C.orRuleTextHtml}</p>
		</Box>

		<h3>{C.starTypesTitle}</h3>
		<div class="table-wrap">
			<table class="dt">
				<thead>
					<tr>
						<th>{C.columns.type}</th>
						<th>{C.columns.morph}</th>
						<th>{C.columns.fn}</th>
						<th>{C.columns.confidence}</th>
					</tr>
				</thead>
				<tbody>
					{#each STAR_TYPES as s (s.type)}
						<tr>
							<td><strong>{s.type}</strong></td>
							<td class="note-cell">{s.morph}</td>
							<td class="note-cell">{s.fn}</td>
							<td><span class="conf">{s.stars}</span></td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<h3>{C.schemaTitle}</h3>
		<p>{@html C.schemaDescHtml}</p>
		<div class="schema">
			<div class="schema-step schema-step--red">
				<span class="star-icon star-icon--red">{C.schema.red.icon}</span>
				<span class="lbl-2xs lbl">{@html C.schema.red.label}</span>
			</div>
			<span class="schema-arrow">→</span>
			<div class="schema-step">
				<span class="star-icon">{C.schema.empty.icon}</span>
				<span class="lbl-2xs lbl">{@html C.schema.empty.label}</span>
			</div>
			<span class="schema-arrow">→</span>
			<div class="schema-step schema-step--gold">
				<span class="star-icon star-icon--gold">{C.schema.dot.icon}</span>
				<span class="lbl-2xs lbl">{@html C.schema.dot.label}</span>
			</div>
		</div>

		<Box variant="blue" title={C.inclusioTitle} class="inclusio">
			<p style="margin:0;font-size:var(--text-sm)">{@html C.inclusioParagraphHtml}</p>
		</Box>

		<h3>{C.folioCompTitle}</h3>
		<div class="table-wrap">
			<table class="dt">
				<thead>
					<tr>
						<th>{C.columns.folio}</th>
						<th>{C.columns.principle}</th>
						<th>{C.columns.note}</th>
					</tr>
				</thead>
				<tbody>
					{#each FOLIOS as f (f.folio)}
						<tr>
							<td class="folio-cell">{f.folio}</td>
							<td class="note-cell">{f.principle}</td>
							<td class="note-cell">{f.note}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</div>
</section>

<style>
	:global(.or-rule) {
		margin-bottom: 1.2rem;
	}

	/* ── Schema ─────────────────────────────────────────── */

	.schema { margin: .85rem 0 1.2rem; }

	.schema-step {
		min-width: 6rem;

		&.schema-step--red  { background: rgba(122, 28, 28, .08); border-color: var(--red); }
		&.schema-step--gold { background: rgba(154, 122, 42, .08); border-color: var(--gold); }
	}

	.star-icon {
		font-size: var(--text-md);
		color: var(--ink-f);

		&.star-icon--red  { color: var(--red); }
		&.star-icon--gold { color: var(--gold); }
	}

	:global(.inclusio) {
		margin-top: 1rem;
	}
</style>
