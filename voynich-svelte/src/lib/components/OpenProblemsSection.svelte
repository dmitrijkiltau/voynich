<script>
	import { OPEN_PROBLEMS } from '$lib/open-problems-data.js';

	const severityLabel = {
		hoch:           	'Schwere: hoch',
		mittel:         	'Schwere: mittel',
		strukturell:    	'Strukturell',
		'niedrig-mittel': 'Schwere: niedrig–mittel',
	};

	const statusLabel = {
		offen:       'offen',
		ausstehend:  'ausstehend',
		moratorium:  'Moratorium aktiv',
		'gelöst':    'gelöst',
	};
</script>

<div class="open-problems">
	<div class="box red audit-note">
		<div class="box-title">Methodischer Vorbehalt (v7.5)</div>
		<p>Das Mapping ist eine <strong>starke Lesehypothese</strong>, keine bewiesene Entzifferung. Die folgenden Probleme widersprechen der Hypothese nicht zwingend, müssen aber sichtbar bleiben. Interne Kohärenz beweist keine externe Gültigkeit.</p>
	</div>

	<div class="problem-list">
		{#each OPEN_PROBLEMS as p}
			<div class="problem-card" class:moratorium={p.status === 'moratorium'}>
				<div class="problem-header">
					<span class="problem-id">{p.id}</span>
					<span class="problem-title">{p.title}</span>
					<span class="badge severity-{p.severity}">{severityLabel[p.severity] ?? p.severity}</span>
					<span class="badge status-{p.status}">{statusLabel[p.status] ?? p.status}</span>
				</div>
				<p class="problem-body">{p.problem}</p>
				<div class="problem-hyp">
					<span class="hyp-label">Arbeitshypothese:</span>
					{p.hypothesis}
				</div>
			</div>
		{/each}
	</div>

	<div class="box blue scheol-stat">
		<div class="box-title">Scheol-Verteilungsstatistik (v7.5 formalisiert)</div>
		<div class="table-wrap">
			<table class="dt">
				<thead>
					<tr><th>Strukturposition</th><th>sheol/shol-Vorkommen</th><th>Andere Lexeme</th></tr>
				</thead>
				<tbody>
					<tr><td>Zeilenende / Kolophon-Final</td><td><strong>&gt;85 % aller Belege</strong></td><td>or, dom, kaiim</td></tr>
					<tr><td>Zeilenmitte (medial)</td><td>&lt;15 % — immer in Kompositum</td><td>—</td></tr>
					<tr><td>Zeilenanfang</td><td><strong>0 %</strong></td><td>—</td></tr>
				</tbody>
			</table>
			<p style="margin:.6rem 0 0;font-size:.85rem;color:var(--ink-f)">Diese Verteilung ist nicht die eines zufällig platzierten Begriffs. Sie folgt präzise R6 (Zeilenabschluss sheol = Tod-Prognose) und R17 (shol apokor. medial / sheol Vollform final).</p>
		</div>
	</div>
</div>

<style>
	.audit-note {
		margin-bottom: 1.5rem;

		& p { margin: 0; font-size: .92rem; }
	}

	.problem-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.problem-card {
		border: 1px solid var(--parch-dk);
		border-left: 3px solid var(--red);
		border-radius: 2px;
		padding: .9rem 1.1rem;
		background: rgba(255, 255, 255, .25);

		&.moratorium {
			border-left-color: var(--gold);
		}
	}

	.problem-header {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: .4rem .6rem;
		margin-bottom: .5rem;
	}

	.problem-id {
		font-family: var(--font-mono);
		font-size: .75rem;
		color: var(--ink-f);
		background: var(--parch-dk);
		padding: .1rem .35rem;
		border-radius: 2px;
	}

	.problem-title {
		font-weight: 600;
		font-size: .95rem;
		flex: 1;
		min-width: 120px;
	}

	.badge {
		font-family: var(--font-smallcaps);
		font-size: .62rem;
		letter-spacing: .07em;
		padding: .15rem .45rem;
		border-radius: 2px;
	}

	.severity-hoch            { background: color-mix(in srgb, var(--red) 12%, transparent); color: var(--red); }
	.severity-mittel          { background: color-mix(in srgb, var(--gold) 18%, transparent); color: color-mix(in srgb, var(--gold) 80%, var(--ink)); }
	.severity-strukturell     { background: color-mix(in srgb, var(--ink-f) 12%, transparent); color: var(--ink-f); }
	.severity-niedrig-mittel  { background: color-mix(in srgb, var(--gold) 10%, transparent); color: color-mix(in srgb, var(--gold) 70%, var(--ink)); }

	.status-offen      { background: color-mix(in srgb, var(--red) 10%, transparent); color: var(--red); }
	.status-ausstehend { background: color-mix(in srgb, var(--gold) 12%, transparent); color: color-mix(in srgb, var(--gold) 80%, var(--ink)); }
	.status-moratorium { background: color-mix(in srgb, var(--gold) 18%, transparent); color: color-mix(in srgb, var(--gold) 80%, var(--ink)); }
	.status-gelöst     { background: color-mix(in srgb, var(--green) 12%, transparent); color: color-mix(in srgb, var(--green) 80%, var(--ink)); }

	.problem-body {
		font-size: .88rem;
		color: var(--ink);
		margin-bottom: .5rem;
	}

	.problem-hyp {
		font-size: .83rem;
		color: var(--ink-f);
		border-left: 2px solid var(--parch-dk);
		padding-left: .7rem;
	}

	.hyp-label {
		font-family: var(--font-smallcaps);
		font-size: .68rem;
		letter-spacing: .08em;
		color: var(--ink-f);
		margin-right: .3rem;
	}

	.scheol-stat {
		& p { margin-top: .6rem; }
	}
</style>
