<script>
	import { MAPPING, LEXICON } from '$lib/translator-data.js';
	import TranslatorTool from '$lib/components/TranslatorTool.svelte';
	import MappingGrid from '$lib/components/MappingGrid.svelte';
	import LexiconSection from '$lib/components/LexiconSection.svelte';
	import GrammarSection from '$lib/components/GrammarSection.svelte';
	import GrammarRulesSection from '$lib/components/GrammarRulesSection.svelte';
	import ReferencesSection from '$lib/components/ReferencesSection.svelte';
	import SummarySection from '$lib/components/SummarySection.svelte';
	import MethodologySection from '$lib/components/MethodologySection.svelte';
	import BacktestSection from '$lib/components/BacktestSection.svelte';
	import WordClassesSection from '$lib/components/WordClassesSection.svelte';
	import LanguageASection from '$lib/components/LanguageASection.svelte';
	import MarginStarsSection from '$lib/components/MarginStarsSection.svelte';

	let evaInput      = $state('');
	let activeSection = $state('tool');
	let menuOpen      = $state(false);

	const STATS = {
		lexicon:   LEXICON.length,
		rules:     23,
		backtest: '88%',
		backtestFraction: '23/26',
	};

	const NAV_ITEMS = [
		{ id: 'abstract',        label: 'I. Zusammenfassung' },
		{ id: 'methodik',        label: 'II. Methodik' },
		{ id: 'tool',            label: 'III. Übersetzer' },
		{ id: 'mapping',         label: 'IV. Zeichenmapping' },
		{ id: 'lexikon',         label: 'V. Lexikon' },
		{ id: 'grammar',         label: 'VI. Grammatik' },
		{ id: 'grammatikregeln', label: 'VII. Grammatikregeln' },
		{ id: 'rueckwaerts',     label: 'VIII. Rückwärtstest' },
		{ id: 'referenz',        label: 'IX. Referenzen' },
		{ id: 'wortklassen',     label: 'X. Wortklassen' },
		{ id: 'spracheA',        label: 'XI. Sprache A' },
		{ id: 'sterne',          label: 'XII. Randsterne' },
	];

	// Scrollspy via IntersectionObserver
	$effect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) activeSection = entry.target.id;
				}
			},
			{ threshold: 0.15, rootMargin: '-5% 0px -75% 0px' }
		);

		for (const { id } of NAV_ITEMS) {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		}

		return () => observer.disconnect();
	});

	/** @param {string} id */
	function scrollTo(id) {
		document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
		menuOpen = false;
	}

	/** @param {string} text */
	function insertEva(text) {
		const cur = evaInput;
		evaInput = cur + (cur && !cur.endsWith(' ') ? ' ' : '') + text + ' ';
		scrollTo('tool');
	}
</script>

<!-- Mobile top bar -->
<header class="mobile-header">
	<span class="mobile-title">Voynich · Mapping-Dokument v5.3</span>
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
			<div class="brand-kicker">Forschungswerkzeug</div>
			<div class="brand-name">Voynich</div>
			<div class="brand-sub">EVA → Hebräisch · v5.3</div>
		</div>

		<nav class="sidebar-nav">
			{#each NAV_ITEMS as item}
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
				<span class="ss-l">Lexikon</span>
			</div>
			<div class="sidebar-stat">
				<span class="ss-n">{STATS.rules}</span>
				<span class="ss-l">Regeln</span>
			</div>
			<div class="sidebar-stat sidebar-stat--full">
				<span class="ss-n">{STATS.backtest}</span>
				<span class="ss-l">Rückwärtstest</span>
			</div>
		</div>

		<div class="sidebar-meta">Mai 2026</div>
	</aside>

	<!-- Main content -->
	<main class="main-content">
		<header class="page-header">
			<div class="kicker">Formales Mapping-Dokument · Voynich-Manuskript · Version 5.3</div>
			<h1>EVA → Hebräisch-Aramäisch</h1>
			<div class="subtitle">Zeichenmapping, Lexikon und Grammatikregeln · Sprachen A und B</div>
			<div class="meta-line">
				<span>Analysierte Folios: f1v–f10v (Quires A–B), f57r, f103r/v, f114v, f115r/v, f116r/v</span>
				<span>·</span>
				<span>Lexikon: {STATS.lexicon} Einträge · Grammatikregeln: {STATS.rules} · Rückwärtstest: {STATS.backtest}</span>
				<span>·</span>
				<span>Mai 2026 · Version 5.3</span>
			</div>
		</header>

		<!-- I. ZUSAMMENFASSUNG -->
		<section class="section" id="abstract">
			<h2>I. Zusammenfassung</h2>
			<SummarySection />
		</section>

		<!-- II. METHODIK -->
		<section class="section" id="methodik">
			<h2>II. Methodik</h2>
			<MethodologySection />
		</section>

		<!-- III. ÜBERSETZER -->
		<section class="section" id="tool">
			<h2>III. Übersetzungstool</h2>
			<div class="tool">
				<p class="dropcap">EVA-Text in das Eingabefeld eingeben (Wörter durch Leerzeichen oder · getrennt). Das Tool durchsucht das bestätigte Lexikon, erkennt Präfixe und zeigt Hebräisch, Wort-für-Wort-Analyse und deutsche Bedeutung an. Unbekannte Wörter werden als solche markiert.</p>
				<TranslatorTool bind:input={evaInput} />
			</div>
		</section>

		<!-- IV. ZEICHENMAPPING -->
		<section class="section" id="mapping">
			<h2>IV. Zeichenmapping EVA → Hebräisch</h2>
			<p>Das folgende Mapping bildet EVA-Buchstaben auf hebräische Konsonanten ab. Klick auf eine Zelle fügt das Zeichen in die Eingabe ein.</p>
			<MappingGrid {MAPPING} onInsert={insertEva} />
			<div class="box red">
				<div class="box-title">Sonderregel: o als Ayin vs. Ḥolam</div>
				<p style="margin:0;font-size:.92rem">Das EVA-Zeichen <span class="eva">o</span> hat zwei Funktionen: (1) als konsonantisches <span class="heb-sm">ע</span> (Ayin) am Wortanfang, und (2) als Vokalmarker Ḥolam <span class="heb-sm">ֹ</span> im Wortinneren. Das Präfix <span class="eva">o-</span> am Wortanfang entspricht fast immer <span class="heb-sm">עַ</span>.</p>
			</div>
		</section>

		<!-- V. LEXIKON -->
		<section class="section" id="lexikon">
			<h2>V. Bestätigtes Lexikon ({STATS.lexicon} Einträge)</h2>
			<p>Alle Einträge mit ★★★ oder höher. Klick auf eine Zeile fügt das EVA-Wort in die Eingabe ein.</p>
			<LexiconSection {LEXICON} onInsert={insertEva} />
		</section>

		<!-- VI. GRAMMATIK -->
		<section class="section" id="grammar">
			<h2>VI. Grammatik — Präfixe, Suffixe &amp; Schemata</h2>
			<p>Die wichtigsten morphologischen Regeln für das Lesen von EVA-Sequenzen.</p>
			<GrammarSection />
		</section>

		<!-- VII. GRAMMATIKREGELN -->
		<section class="section" id="grammatikregeln">
			<h2>VII. Grammatikregeln (vollständig)</h2>
			<p>Alle 23 validierten Regeln des EVA-Hebräisch-Systems mit Evidenz und Konfidenz.</p>
			<GrammarRulesSection />
		</section>

		<!-- VIII. RÜCKWÄRTSTEST -->
		<section class="section" id="rueckwaerts">
			<h2>VIII. Rückwärtstest-Statistik</h2>
			<BacktestSection />
		</section>

		<!-- IX. REFERENZEN -->
		<section class="section" id="referenz">
			<h2>IX. Verankerte Referenz-Sequenzen</h2>
			<p>Die am besten verifizierten Sequenzen des Korpus — als Orientierungshilfe beim Übersetzen.</p>
			<ReferencesSection onInsert={insertEva} />
		</section>

		<!-- X. WORTKLASSEN -->
		<section class="section" id="wortklassen">
			<h2>X. Wortklassen-System</h2>
			<p>Taxonomie der neun Wortklassen mit statistischen Exklusionsmustern.</p>
			<WordClassesSection />
		</section>

		<!-- XI. SPRACHE A -->
		<section class="section" id="spracheA">
			<h2>XI. Sprache A — Quires A &amp; B (f1v–f10v)</h2>
			<LanguageASection />
		</section>

		<!-- XII. RANDSTERNE -->
		<section class="section" id="sterne">
			<h2>XII. Das Randstern-System</h2>
			<MarginStarsSection />
		</section>

		<footer class="page-footer">
			<p>Voynich-Manuskript — Formales Mapping-Dokument · Version 5.3 · Mai 2026</p>
			<p>Lexikon: {STATS.lexicon} Einträge · Grammatikregeln: {STATS.rules} · Rückwärtstest: {STATS.backtest} ({STATS.backtestFraction})</p>
			<p class="disclaimer">Dieses Tool ist ein Forschungshilfsmittel. Alle Übersetzungen sind Hypothesen und laden zur Falsifikation ein.<br>
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
		overflow-y: auto;
		background: var(--parch-d);
		border-right: 1px solid var(--border);
		display: flex;
		flex-direction: column;
		padding: 1.8rem 0 2rem;
		z-index: 100;
		transition: transform .25s ease;

		&::-webkit-scrollbar { width: 4px; }
		&::-webkit-scrollbar-thumb { background: var(--parch-dk); border-radius: 2px; }

		@media (max-width: 768px) {
			position: fixed;
			top: 0;
			left: 0;
			height: 100%;
			transform: translateX(-100%);
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
			font-family: var(--font-smallcaps);
			font-size: .6rem;
			letter-spacing: .2em;
			text-transform: uppercase;
			color: var(--ink-f);
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
			font-size: .62rem;
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
		font-size: .72rem;
		letter-spacing: .08em;
		color: var(--ink-l);
		border-radius: 2px;
		border-left: 2px solid transparent;
		cursor: pointer;
		transition: all .15s;

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
			border-radius: 2px;

			& .ss-n {
				display: block;
				font-family: var(--font-display);
				font-size: 1.1rem;
				color: var(--red);
				line-height: 1.1;
			}

			& .ss-l {
				display: block;
				font-family: var(--font-smallcaps);
				font-size: .52rem;
				letter-spacing: .08em;
				text-transform: uppercase;
				color: var(--ink-f);
			}
		}
	}

	.sidebar-meta {
		font-size: .68rem;
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
		z-index: 200;
		background: var(--parch-d);
		border-bottom: 1px solid var(--border);
		align-items: center;
		padding: 0 1rem;
		gap: .8rem;

		@media (max-width: 768px) { display: flex; }

		& .mobile-title {
			font-family: var(--font-display);
			font-size: 1.1rem;
			color: var(--red);
			flex: 1;
		}

		& .menu-toggle {
			width: 36px;
			height: 36px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 1.1rem;
			color: var(--ink-l);
			border: 1px solid var(--parch-dk);
			border-radius: 2px;
			background: rgba(255, 255, 255, .5);
			cursor: pointer;
			transition: all .15s;

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
		z-index: 99;

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
		padding: 3rem 0 2.6rem;
		margin-bottom: 2.8rem;
		border-bottom: 1.5px solid var(--border);
		position: relative;

		&::after {
			content: '✦ ✦ ✦';
			position: absolute;
			bottom: -.65rem;
			left: 50%;
			transform: translateX(-50%);
			background: var(--parch);
			padding: 0 .8rem;
			color: var(--border);
			font-size: .75rem;
			letter-spacing: .4em;
		}

		& .kicker {
			font-family: var(--font-smallcaps);
			font-size: .68rem;
			letter-spacing: .22em;
			text-transform: uppercase;
			color: var(--ink-f);
			margin-bottom: .9rem;
		}

		& h1 {
			font-family: var(--font-display);
			font-size: 2.4rem;
			font-weight: 400;
			line-height: 1.2;
			margin-bottom: .45rem;
		}

		& .subtitle {
			font-family: var(--font-display);
			font-style: italic;
			font-size: 1.1rem;
			color: var(--ink-l);
			margin-bottom: 1.1rem;
		}

		& .meta-line {
			font-size: .8rem;
			color: var(--ink-f);
			letter-spacing: .04em;

			& span { margin: 0 .4rem; }
		}
	}

	/* ── Sections ───────────────────────────────────────── */

	.section {
		margin-bottom: 3rem;
		padding-top: .5rem;
		scroll-margin-top: 2rem;

		& + section {
			margin-bottom: 6rem;
		}
	}

	/* ── Page footer ────────────────────────────────────── */

	.page-footer {
		margin-top: 4rem;
		padding-top: 2rem;
		border-top: 1px solid var(--parch-dk);
		font-size: .82rem;
		color: var(--ink-f);
		text-align: center;
		line-height: 1.7;

		& p { margin-bottom: .3rem; }

		& .disclaimer {
			margin-top: .5rem;
			font-size: .72rem;
			opacity: .7;
		}
	}

	.legal-link {
		display: inline-block;
		font-size: .8rem;
		color: var(--color-text);
		text-decoration: none;
	}

	
  .tool {
    display: flex;
    flex-wrap: wrap;
    gap: 0 2rem;

    & > p {
      flex: 1 1 360px;
    }
  }
</style>