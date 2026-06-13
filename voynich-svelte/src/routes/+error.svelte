<script>
	const status = '404';
</script>

<svelte:head>
	<title>{status} · Seite nicht gefunden</title>
</svelte:head>

<main class="error-page">
	<div class="error-card">
		<p class="kicker">Voynich Mapping</p>
		<h1>{status} · Seite nicht gefunden</h1>
		<p class="message">
			Die angeforderte Seite existiert nicht oder wurde verschoben.
		</p>
		<a class="home-link" href="/">Zur Startseite</a>
	</div>
</main>

<style>
	.error-page {
		min-height: 100dvh;
		display: grid;
		place-items: center;
		padding: 2rem;
	}

	.error-card {
		max-width: 34rem;
		width: 100%;
		text-align: center;
		padding: 3rem 2rem;
		background: rgba(255, 255, 255, 0.22);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		box-shadow: 0 12px 30px rgba(0, 0, 0, 0.06);
	}

	.kicker {
		font-family: var(--font-smallcaps);
		font-size: 0.7rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--ink-f);
		margin-bottom: 0.75rem;
	}

	h1 {
		font-family: var(--font-display);
		font-size: 2rem;
		font-weight: 400;
		line-height: 1.2;
		color: var(--red);
		margin-bottom: 0.9rem;
	}

	.message {
		margin-bottom: 1.5rem;
		color: var(--ink-l);
	}

	.home-link {
		display: inline-block;
		padding: 0.55rem 1rem;
		border: 1px solid var(--border);
		border-radius: var(--radius);
		background: rgba(255, 255, 255, 0.35);
		text-decoration: none;
	}
</style>
