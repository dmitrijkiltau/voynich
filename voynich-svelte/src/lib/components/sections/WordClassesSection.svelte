<script>
	import { CLASSES } from '$lib/word-classes-data.js';
	import Box from '$lib/components/Box.svelte';
	import { CONTENT } from '$lib/content.js';

	const C = CONTENT.wordClasses;
</script>

<section class="section" id="word-classes">
	<h2>{C.title}</h2>
	<p>{C.intro}</p>

	<div class="wordclasses">
		<table class="dt">
			<thead>
				<tr>
					<th>{C.columns.cls}</th>
					<th>{C.columns.words}</th>
					<th>{C.columns.fn}</th>
				</tr>
			</thead>
			<tbody>
				{#each CLASSES as c (c.cls)}
					<tr>
						<td><strong>{c.cls}</strong></td>
						<td><span class="eva">{c.words}</span></td>
						<td class="meaning">{c.fn}</td>
					</tr>
				{/each}
			</tbody>
		</table>

		<Box variant="green" title={C.exclTitle} class="excl-box">
			<p style="margin:0;font-size:var(--text-sm)">{@html C.exclIntroHtml}</p>
			<ul class="excl-list">
				<li><span class="eva">-ody</span>-Absätze und <span class="eva">chedy/shedy</span> nie im selben Paragraphen (f57r)</li>
				<li><span class="eva">sheol</span> dominant am Zeilenende; <span class="eva">daiin</span> dominant am Zeilenanfang</li>
				<li><span class="eva">chalal</span> ausschließlich <em>nach</em> <span class="eva">sheol</span>, nie davor</li>
			</ul>
		</Box>
	</div>
</section>

<style>
	.wordclasses {
		overflow-x: auto;
	}

	:global(.excl-box) {
		margin-top: 1.2rem;
	}

	.excl-list {
		padding-left: 1.2rem;
		margin-top: .4rem;
		font-size: var(--text-sm);

		& li {
			margin-bottom: .2rem;
		}
	}
</style>
