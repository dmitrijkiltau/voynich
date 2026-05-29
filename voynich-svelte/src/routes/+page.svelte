<script>
	import { MAPPING, LEXICON } from '$lib/translator-data.js';
	import TranslatorTool from '$lib/components/TranslatorTool.svelte';
	import MappingGrid from '$lib/components/MappingGrid.svelte';
	import LexiconSection from '$lib/components/LexiconSection.svelte';
	import GrammarSection from '$lib/components/GrammarSection.svelte';
	import ReferenzSection from '$lib/components/ReferenzSection.svelte';

	let evaInput      = $state('');
	let activeSection = $state('tool');
	let menuOpen      = $state(false);

	const NAV_ITEMS = [
		{ id: 'tool',     label: 'I. Übersetzer' },
		{ id: 'mapping',  label: 'II. Zeichenmapping' },
		{ id: 'lexikon',  label: 'III. Lexikon' },
		{ id: 'grammar',  label: 'IV. Grammatik' },
		{ id: 'referenz', label: 'V. Referenzen' },
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
	<span class="mobile-title">Voynich · EVA → Hebräisch</span>
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
			<div class="brand-sub">EVA → Hebräisch · v5.2</div>
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
			{#each [['65', 'Lexikon'], ['88%', 'Rückw.-Test'], ['22', 'Regeln']] as [n, l]}
				<div class="sidebar-stat">
					<span class="ss-n">{n}</span>
					<span class="ss-l">{l}</span>
				</div>
			{/each}
		</div>

		<div class="sidebar-meta">Mai 2026</div>
	</aside>

	<!-- Main content -->
	<main class="main-content">

		<header class="page-header">
			<div class="kicker">Forschungswerkzeug · Voynich-Manuskript · Mapping v5.2</div>
			<h1>EVA → Hebräisch-Übersetzer</h1>
			<div class="subtitle">Interaktives Übersetzungstool auf Basis des formalen Zeichenmappings</div>
			<div class="meta-line">
				<span>Mischna-Hebräisch / Jüdisch-Aramäisch</span>
				<span>·</span>
				<span>65 Lexikoneinträge · 22 Grammatikregeln</span>
				<span>·</span>
				<span>Mai 2026</span>
			</div>
		</header>

		<!-- I. ÜBERSETZER -->
		<section class="section" id="tool">
			<h2>I. Übersetzungstool</h2>
			<p class="dropcap">EVA-Text in das Eingabefeld eingeben (Wörter durch Leerzeichen oder · getrennt). Das Tool durchsucht das bestätigte Lexikon, erkennt Präfixe und zeigt Hebräisch, Wort-für-Wort-Analyse und deutsche Bedeutung an. Unbekannte Wörter werden als solche markiert.</p>
			<TranslatorTool bind:input={evaInput} />
		</section>

		<hr class="rule" />

		<!-- II. ZEICHENMAPPING -->
		<section class="section" id="mapping">
			<h2>II. Zeichenmapping EVA → Hebräisch</h2>
			<p>Das folgende Mapping bildet EVA-Buchstaben auf hebräische Konsonanten ab. Klick auf eine Zelle fügt das Zeichen in die Eingabe ein.</p>
			<MappingGrid {MAPPING} onInsert={insertEva} />
			<div class="box red">
				<div class="box-title">Sonderregel: o als Ayin vs. Ḥolam</div>
				<p style="margin:0;font-size:.92rem">Das EVA-Zeichen <span class="eva">o</span> hat zwei Funktionen: (1) als konsonantisches <span class="heb-sm">ע</span> (Ayin) am Wortanfang, und (2) als Vokalmarker Ḥolam <span class="heb-sm">ֹ</span> im Wortinneren. Das Präfix <span class="eva">o-</span> am Wortanfang entspricht fast immer <span class="heb-sm">עַ</span>.</p>
			</div>
		</section>

		<hr class="rule" />

		<!-- III. LEXIKON -->
		<section class="section" id="lexikon">
			<h2>III. Bestätigtes Lexikon (65 Einträge)</h2>
			<p>Alle Einträge mit ★★★ oder höher. Klick auf eine Zeile fügt das EVA-Wort in die Eingabe ein.</p>
			<LexiconSection {LEXICON} onInsert={insertEva} />
		</section>

		<hr class="rule" />

		<!-- IV. GRAMMATIK -->
		<section class="section" id="grammar">
			<h2>IV. Grammatik-Kurzübersicht</h2>
			<p>Die wichtigsten morphologischen Regeln für das Lesen von EVA-Sequenzen.</p>
			<GrammarSection />
		</section>

		<hr class="rule" />

		<!-- V. REFERENZ -->
		<section class="section" id="referenz">
			<h2>V. Verankerte Referenz-Sequenzen</h2>
			<p>Die am besten verifizierten Sequenzen des Korpus — als Orientierungshilfe beim Übersetzen.</p>
			<ReferenzSection onInsert={insertEva} />
		</section>

		<footer class="page-footer">
			<p>Voynich-Manuskript — EVA-Übersetzer · Auf Basis des Mapping-Dokuments v5.2 · Mai 2026</p>
			<p>Lexikon: 65 Einträge · Grammatikregeln: 22 · Rückwärtstest: 88 % (23/26)</p>
			<p class="disclaimer">Dieses Tool ist ein Forschungshilfsmittel. Alle Übersetzungen sind Hypothesen und laden zur Falsifikation ein.<br>
			Konfidenzbewertungen beziehen sich auf Konsistenz im vorliegenden Korpus.</p>
		</footer>

	</main>
</div>
