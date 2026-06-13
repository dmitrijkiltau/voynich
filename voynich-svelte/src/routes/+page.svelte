<script>
import { pushState, replaceState } from '$app/navigation';
import { STATS } from '$lib';
	import { CONTENT } from '$lib/content.js';
	import TranslatorSection from '$lib/components/sections/TranslatorSection.svelte';
	import MappingSection from '$lib/components/sections/MappingSection.svelte';
	import LexiconSection from '$lib/components/sections/LexiconSection.svelte';
	import GrammarSection from '$lib/components/sections/GrammarSection.svelte';
	import GrammarRulesSection from '$lib/components/sections/GrammarRulesSection.svelte';
	import ReferencesSection from '$lib/components/sections/ReferencesSection.svelte';
	import SummarySection from '$lib/components/sections/SummarySection.svelte';
	import MethodologySection from '$lib/components/sections/MethodologySection.svelte';
	import BacktestSection from '$lib/components/sections/BacktestSection.svelte';
	import WordClassesSection from '$lib/components/sections/WordClassesSection.svelte';
	import LanguageASection from '$lib/components/sections/LanguageASection.svelte';
	import MarginStarsSection from '$lib/components/sections/MarginStarsSection.svelte';
	import GibberishSection from '$lib/components/sections/GibberishSection.svelte';
	import FolioRegister from '$lib/components/FolioRegister.svelte';
	import OpenProblemsSection from '$lib/components/sections/OpenProblemsSection.svelte';
	let evaInput        = $state('');
	let activeSection   = $state('abstract');
	let menuOpen        = $state(false);
	let scrollProgress  = $state(0);
	let lexiconFilter   = $state('');

	$effect(() => {
		function updateProgress() {
			const docHeight = document.documentElement.scrollHeight - window.innerHeight;
			scrollProgress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
		}
		window.addEventListener('scroll', updateProgress, { passive: true });
		updateProgress();
		return () => window.removeEventListener('scroll', updateProgress);
	});

	const NAV_ITEMS = CONTENT.nav;

	const SECTION_SELECTOR = 'main .section[id]';

	/** @param {string} id */
	function setActiveSection(id, updateHash = false) {
		if (!id || activeSection === id) return;
		activeSection = id;
		if (updateHash && location.hash !== `#${id}`) {
			replaceState(`#${id}`, {});
		}
	}

	// Scrollspy via IntersectionObserver
	$effect(() => {
		const sections = [...document.querySelectorAll(SECTION_SELECTOR)];
		const initialHash = window.location.hash.slice(1);
		const syncFromHash = () => {
			const hashId = window.location.hash.slice(1);
			if (hashId && sections.some((section) => section.id === hashId)) {
				activeSection = hashId;
			}
		};

		if (initialHash && sections.some((section) => section.id === initialHash)) {
			activeSection = initialHash;
		} else {
			const current = sections.find((section) => {
				const rect = section.getBoundingClientRect();
				return rect.top <= 180 && rect.bottom > 180;
			});
			if (current) activeSection = current.id;
		}

		const observer = new IntersectionObserver(
			(entries) => {
				const visible = entries.filter((entry) => entry.isIntersecting);
				if (!visible.length) return;

				// @ts-ignore
				const current = visible.reduce((best, entry) => {
					if (!best) return entry;
					// @ts-ignore
					return Math.abs(entry.boundingClientRect.top) < Math.abs(best.boundingClientRect.top)
						? entry
						: best;
				}, null);

				if (current) setActiveSection(current.target.id, true);
			},
			{
				threshold: [0, 0.15, 0.35, 0.6],
				rootMargin: '-18% 0px -62% 0px',
			}
		);

		for (const section of sections) {
			observer.observe(section);
		}

		window.addEventListener('popstate', syncFromHash);
		window.addEventListener('hashchange', syncFromHash);

		return () => {
			observer.disconnect();
			window.removeEventListener('popstate', syncFromHash);
			window.removeEventListener('hashchange', syncFromHash);
		};
	});

	/** @param {string} id */
	function scrollTo(id) {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		setActiveSection(id, true);
		if (location.hash !== `#${id}`) {
			pushState(`#${id}`, {});
		}
		menuOpen = false;
	}

	/** @param {string} text */
	function insertEva(text) {
		const cur = evaInput;
		evaInput = cur + (cur && !cur.endsWith(' ') ? ' ' : '') + text + ' ';
		scrollTo('translator-tool');
	}

	function exportMarkdown() {
		window.open(`/voynich-mapping-${STATS.version}.md`, '_blank');
	}

	/** @param {string} eva */
	function linkLexiconFilter(eva) {
		lexiconFilter = lexiconFilter === eva ? '' : eva;
		scrollTo('derived');
	}
</script>

<!-- Reading progress bar -->
<div class="reading-progress" role="progressbar" aria-valuenow={Math.round(scrollProgress)} aria-valuemin="0" aria-valuemax="100" aria-label="Lesefortschritt">
	<div class="reading-progress-fill" style="width: {scrollProgress}%"></div>
</div>

<!-- Mobile top bar -->
<header class="mobile-header">
	<span class="mobile-title">Voynich · Mapping-Dokument v{STATS.version}</span>
	<button class="menu-toggle" onclick={() => menuOpen = !menuOpen} aria-label="Navigation öffnen/schließen">
		{menuOpen ? '✕' : '☰'}
	</button>
</header>

<!-- Mobile overlay -->
{#if menuOpen}
	<div class="menu-overlay visible" onclick={() => menuOpen = false} aria-hidden="true"></div>
{/if}

<div class="app-shell">
	<!-- Sidebar -->
	<aside class="sidebar" class:open={menuOpen} aria-label="Seitennavigation">
		<div class="sidebar-brand">
			<div class="lbl-2xs brand-kicker">Voynich-Manuskript</div>
			<div class="brand-name">EVA → Hebräisch</div>
			<div class="brand-sub">Formales Mapping-Dokument</div>
		</div>

		<nav class="sidebar-nav">
			{#each NAV_ITEMS as item (item.id)}
				<button
					class="nav-item"
					class:active={activeSection === item.id}
					onclick={() => scrollTo(item.id)}
				>
					{item.label}
				</button>
			{/each}
		</nav>

		<div class="sidebar-stats">
			<div class="sidebar-stat">
				<span class="ss-n">{STATS.lexicon}</span>
				<span class="lbl-2xs ss-l">Lexikon</span>
			</div>
			<div class="sidebar-stat">
				<span class="ss-n">{STATS.rules}</span>
				<span class="lbl-2xs ss-l">Regeln</span>
			</div>
			<div class="sidebar-stat sidebar-stat--full">
				<span class="ss-n">{STATS.backtest}</span>
				<span class="lbl-2xs ss-l">Rückwärtstest</span>
			</div>
		</div>

		<button class="print-btn" onclick={() => window.print()} title="Exportieren oder drucken">
			Drucken
		</button>
		<button class="print-btn" onclick={exportMarkdown} title="Markdown-Export in neuem Tab öffnen">
			Markdown
		</button>

		<div class="sidebar-meta">{STATS.date} · v{STATS.version}</div>
	</aside>

	<!-- Main content -->
	<main class="main-content">
		<header class="page-header">
			<div class="lbl-xs kicker">Formales Mapping-Dokument · Version {STATS.version} · {STATS.date}</div>
			<h1>Voynich-Manuskript</h1>
			<div class="subtitle">EVA → Hebräisch-Aramäisch · Zeichenmapping, Lexikon und Grammatikregeln</div>
			<div class="meta-line">
				<span>Sprachen A &amp; B · Folios {STATS.foliosAll}</span>
			</div>
		</header>

		<FolioRegister />

		<!-- Print-only table of contents -->
		<nav class="toc" aria-label="Inhaltsangabe">
			<h2 class="toc-title">Inhaltsangabe</h2>
			<ol class="toc-list">
				{#each NAV_ITEMS as item (item.id)}
					<li class:toc-dim={item.id === 'tool'}>{item.label}</li>
				{/each}
			</ol>
		</nav>

		<!-- I. ZUSAMMENFASSUNG -->
		<SummarySection />

		<!-- II. METHODOLOGIE -->
		<MethodologySection />

		<!-- III. ÜBERSETZER-TOOL -->
		<TranslatorSection bind:input={evaInput} />

		<!-- IV. ZEICHENMAPPING -->
		<MappingSection onInsert={insertEva} />

		<!-- V. LEXIKON -->
		<LexiconSection onInsert={insertEva} bind:filter={lexiconFilter} />

		<!-- VI. GRAMMATIK -->
		<GrammarSection onLinkFilter={linkLexiconFilter} />

		<!-- VII. GRAMMATIKREGELN -->
		<GrammarRulesSection />

		<!-- VIII. RÜCKWÄRTSTEST -->
		<BacktestSection />

		<!-- IX. REFERENZEN -->
		<ReferencesSection onInsert={insertEva} />

		<!-- X. WORTKLASSEN -->
		<WordClassesSection />

		<!-- XI. SPRACHE A -->
		<LanguageASection />

		<!-- XII. RANDSTERNE -->
		<MarginStarsSection />

		<!-- XIII. GIBBERISH-TEST -->
		<GibberishSection />

		<!-- XIV. OFFENE PROBLEME -->
		<OpenProblemsSection />

		<footer class="page-footer">
			<p>Voynich-Manuskript — Formales Mapping-Dokument · Version {STATS.version} · {STATS.date}</p>
			<p>Lexikon: {STATS.lexicon} Einträge · Grammatikregeln: {STATS.rules} · Rückwärtstest: {STATS.backtestFraction}</p>
			<p class="disclaimer">Dieses Dokument ist ein Forschungshilfsmittel. Alle Übersetzungen sind Hypothesen und laden zur Falsifikation ein.<br>
			Konfidenzbewertungen beziehen sich auf Konsistenz im vorliegenden Korpus.</p>
			<a href="https://kiltau.com/legal-notice" target="_blank" rel="noopener" class="legal-link">Impressum & Datenschutz</a>
		</footer>
	</main>
</div>

<style>
	/* ── App shell ──────────────────────────────────────── */

	.app-shell {
		display: grid;
		grid-template-columns: var(--sidebar-w) 1fr;
		min-height: 100dvh;

		@media (max-width: 768px) {
			grid-template-columns: 1fr;
			padding-top: var(--nav-h);
		}
	}

	/* ── Sidebar ────────────────────────────────────────── */

	.sidebar {
		position: sticky;
		top: 0;
		height: 100dvh;
		overflow: auto;
		background: var(--parch-d);
		border-right: 1px solid var(--border);
		display: flex;
		flex-direction: column;
		padding: 1.8rem 0 2rem;
		z-index: var(--z-sidebar);
		transition: transform var(--t-slow) ease;

		&::-webkit-scrollbar { width: 4px; }
		&::-webkit-scrollbar-thumb { background: var(--parch-dk); border-radius: var(--radius); }

		@media (max-width: 768px) {
			position: fixed;
			top: 0;
			left: 0;
			height: 100%;
			transform: translateX(-100%);
			padding: 4.8rem 0 2rem;
			box-shadow: 2px 0 16px rgba(0, 0, 0, .15);

			&.open { transform: translateX(0); }
		}
	}

	.sidebar-brand {
		padding: 0 1.4rem 1.4rem;
		border-bottom: 1px solid var(--border);
		margin-bottom: 1rem;
		text-align: center;

		& .brand-kicker {
			letter-spacing: .2em;
			margin-bottom: .4rem;
		}

		& .brand-name {
			font-family: var(--font-display);
			font-size: 1.4rem;
			color: var(--red);
			line-height: 1.2;
		}

		& .brand-sub {
			font-family: var(--font-smallcaps);
			font-size: var(--text-2xs);
			letter-spacing: .1em;
			color: var(--ink-f);
			margin-top: .25rem;
		}
	}

	.sidebar-nav {
		display: flex;
		flex-direction: column;
		gap: .1rem;
		padding: 0 .8rem;
		flex: 1;
	}

	.nav-item {
		display: block;
		width: 100%;
		text-align: left;
		padding: .55rem .8rem;
		font-family: var(--font-smallcaps);
		font-size: var(--text-xs);
		letter-spacing: .08em;
		color: var(--ink-l);
		border-radius: var(--radius);
		border-left: 2px solid transparent;
		cursor: pointer;
		transition: all var(--t-norm);

		&:hover {
			background: rgba(0, 0, 0, .04);
			color: var(--ink);
		}

		&.active {
			background: rgba(122, 28, 28, .07);
			color: var(--red);
			border-left-color: var(--red);
			padding-left: .6rem;
		}
	}

	.sidebar-stats {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: .35rem;
		padding: 1rem;
		border-top: 1px solid var(--parch-dk);
		margin-top: auto;

		& .sidebar-stat--full { grid-column: 1 / -1; }

		& .sidebar-stat {
			text-align: center;
			padding: .4rem .2rem;
			background: rgba(255, 255, 255, .3);
			border: 1px solid var(--parch-dk);
			border-radius: var(--radius);

			& .ss-n {
				display: block;
				font-family: var(--font-display);
				font-size: var(--text-md);
				color: var(--red);
				line-height: 1.1;
			}

			& .ss-l {
				display: block;
				letter-spacing: .08em;
			}
		}
	}

	.print-btn {
		margin: .5rem 1rem 0;
		width: calc(100% - 2rem);
		padding: .45rem .8rem;
		font-family: var(--font-smallcaps);
		font-size: var(--text-2xs);
		letter-spacing: .12em;
		text-transform: uppercase;
		color: var(--ink-f);
		border: 1px solid var(--parch-dk);
		border-radius: var(--radius);
		background: rgba(255, 255, 255, .3);
		cursor: pointer;
		transition: all var(--t-norm);

		&:hover {
			background: rgba(255, 255, 255, .7);
			color: var(--ink);
			border-color: var(--border);
		}
	}

	.toc {
		display: none;

		& .toc-title {
			font-family: var(--font-display);
			font-size: 1.4rem;
			font-weight: 400;
			margin-bottom: 1rem;
			border-bottom: 1px solid var(--border);
			padding-bottom: .5rem;
		}

		& .toc-list {
			list-style: none;
			columns: 2;
			gap: 2rem;

			& li {
				padding: .25rem 0;
				font-family: var(--font-smallcaps);
				font-size: var(--text-sm);
				letter-spacing: .06em;
				border-bottom: 1px dotted var(--parch-dk);
			}

			& .toc-dim {
				opacity: .4;
			}
		}
	}

	.sidebar-meta {
		font-size: var(--text-xs);
		color: var(--ink-f);
		text-align: center;
		padding: .7rem 1rem 0;
		font-family: var(--font-smallcaps);
		letter-spacing: .1em;
	}

	/* ── Mobile header ──────────────────────────────────── */

	.mobile-header {
		display: none;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: var(--nav-h);
		z-index: var(--z-nav);
		background: var(--parch-d);
		border-bottom: 1px solid var(--border);
		align-items: center;
		padding: 0 1rem;
		gap: .8rem;

		@media (max-width: 768px) { display: flex; }

		& .mobile-title {
			font-family: var(--font-display);
			font-size: var(--text-md);
			color: var(--red);
			flex: 1;
		}

		& .menu-toggle {
			width: 36px;
			height: 36px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: var(--text-md);
			color: var(--ink-l);
			border: 1px solid var(--parch-dk);
			border-radius: var(--radius);
			background: rgba(255, 255, 255, .5);
			cursor: pointer;
			transition: all var(--t-norm);

			&:hover {
				background: rgba(255, 255, 255, .8);
				color: var(--ink);
			}
		}
	}

	.menu-overlay {
		display: none;
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, .3);
		z-index: var(--z-sticky);

		@media (max-width: 768px) {
			&.visible { display: block; }
		}
	}

	/* ── Main content ───────────────────────────────────── */

	.main-content {
		min-width: 0;
		padding: 0 2.5rem 6rem;

		@media (max-width: 1100px) { padding: 0 1.8rem 5rem; }
		@media (max-width: 768px)  { padding: 0 1rem 4rem; }
	}

	/* ── Page header ────────────────────────────────────── */

	.page-header {
		text-align: center;
		padding: 6rem 0;
		margin-bottom: 2.8rem;
		border-bottom: 1.5px solid var(--border);
		position: relative;

		&::before, &::after {
			content: '✦ ✦ ✦';
			position: absolute;
			bottom: -.7rem;
			left: 50%;
			transform: translateX(-50%);
			padding: 0 .8rem;
			color: var(--red);
			font-size: .75rem;
			letter-spacing: .4em;
		}

		&::before {
			background: var(--parch);
			filter: blur(4px);
		}

		& .kicker {
			letter-spacing: .22em;
			margin-bottom: .9rem;
		}

		& h1 {
			font-family: var(--font-display);
			font-size: var(--text-2xl);
			font-weight: 400;
			line-height: 1.2;
			margin-bottom: .45rem;
			color: var(--red);
		}

		& .subtitle {
			font-family: var(--font-display);
			font-style: italic;
			font-size: var(--text-md);
			color: var(--ink-l);
			margin-bottom: 1.1rem;
		}

		& .meta-line {
			font-size: var(--text-sm);
			color: var(--ink-f);
			letter-spacing: .04em;

			& span { margin: 0 .4rem; }
		}
	}

	/* ── Page footer ────────────────────────────────────── */

	.page-footer {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid var(--parch-dk);
		font-size: var(--text-sm);
		color: var(--ink-f);
		text-align: center;
		line-height: 1.7;

		& p { margin-bottom: .3rem; }

		& .disclaimer {
			margin-top: .5rem;
			font-size: var(--text-xs);
			opacity: .7;
		}
	}

	.legal-link {
		display: inline-block;
		font-size: var(--text-sm);
		color: var(--color-text);
		text-decoration: none;
	}

	/* ── Reading progress bar ───────────────────────────── */

	.reading-progress {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		height: 3px;
		z-index: var(--z-progress);
		background: rgba(0, 0, 0, .06);
		pointer-events: none;

		& .reading-progress-fill {
			height: 100%;
			background: linear-gradient(
				90deg,
				var(--red) 0%,
				color-mix(in srgb, var(--red) 65%, var(--gold)) 100%
			);
			transition: width 60ms linear;
			box-shadow: 0 0 10px color-mix(in srgb, var(--red) 60%, transparent);
		}
	}

	/* ── Print ──────────────────────────────────────────── */

	@media print {
		.reading-progress,
		.sidebar,
		.mobile-header,
		.menu-overlay,
		.print-btn {
			display: none !important;
		}

		.app-shell {
			display: block;
		}

		.main-content {
			padding: 0;
		}

	.section {
		scroll-margin-top: calc(var(--nav-h) + 1.5rem);
		break-inside: avoid;

		& + section {
			margin-bottom: 3rem;
			}
		}

		.toc {
			display: block;
			break-after: page;
		}
	}

</style>
