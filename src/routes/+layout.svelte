<script lang="ts">
	import { resolve } from '$app/paths';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<svelte:head>
	<title>Defne Artuner | Artist Portfolio</title>
	<meta name="theme-color" content="#271118" />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:wght@400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="site-shell">
	<header class="site-header">
		<a class="wordmark" href={resolve('/')} aria-label="Defne Artuner home">
			<span class="wordmark-mark">DA</span>
			<span class="wordmark-name">Defne Artuner</span>
		</a>
		<p class="header-note">Artist portfolio <span>Ankara, Türkiye</span></p>
		<nav aria-label="Main navigation">
			<a href={resolve('/')}><span>01</span> Work</a>
			<a href={resolve('/traditional-work')}><span>02</span> Traditional Work</a>
			<a href={resolve('/about')}><span>03</span> About</a>
			<a href={resolve('/contact')}><span>04</span> Contact</a>
		</nav>
	</header>
	<main>{@render children()}</main>
	<footer class="site-footer">
		<span>© 2026 · Defne Artuner</span>
		<span>Form / character / emotion</span>
		<a href="mailto:defneartuner@gmail.com">Start a conversation <span>↗</span></a>
	</footer>
</div>

<style>
	:global(*) {
		box-sizing: border-box;
	}

	:global(html) {
		background: #271118;
		scroll-behavior: smooth;
	}

	:global(body) {
		margin: 0;
		background: #271118;
		color: #c4bfac;
		font-family: 'DM Sans', sans-serif;
		-webkit-font-smoothing: antialiased;
	}

	:global(a) {
		color: inherit;
		text-decoration: none;
	}

	:global(button),
	:global(input) {
		font: inherit;
	}

	:global(::selection) {
		background: #c4bfac;
		color: #170a0e;
	}

	.site-shell {
		width: min(100% - 88px, 1440px);
		margin: 0 auto;
	}

	.site-header {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		align-items: center;
		min-height: 92px;
		border-bottom: 1px solid rgb(196 191 172 / 22%);
	}

	.wordmark {
		width: fit-content;
		font-family: 'Playfair Display', Georgia, serif;
		font-size: 29px;
		font-weight: 700;
		letter-spacing: 0;
	}

	.wordmark span {
		color: #c4bfac;
	}

	nav {
		display: flex;
		justify-content: center;
		gap: 38px;
		font-size: 12px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	nav a,
	.site-footer a {
		transition: color 180ms ease;
	}

	nav a:hover,
	.site-footer a:hover {
		color: #c4bfac;
	}

	.site-footer {
		display: flex;
		justify-content: space-between;
		gap: 18px;
		padding: 24px 0 28px;
		border-top: 1px solid rgb(196 191 172 / 22%);
		color: rgb(196 191 172 / 68%);
		font-size: 11px;
	}

	@media (max-width: 640px) {
		.site-shell {
			width: min(100% - 40px, 1440px);
		}

		.site-header {
			grid-template-columns: auto 1fr;
			min-height: 76px;
		}

		nav {
			justify-content: end;
			gap: 18px;
			font-size: 10px;
		}

		.site-footer {
			flex-wrap: wrap;
			font-size: 10px;
		}
	}

	:global(body) {
		--burgundy: #271118;
		--paper: #c4bfac;
		--accent: #68525c;
		--line: rgb(196 191 172 / 24%);
		font-family: 'DM Sans', sans-serif;
	}

	.site-shell {
		width: min(100% - 104px, 1480px);
	}

	.site-header {
		grid-template-columns: 1fr 0.8fr 1.4fr;
		min-height: 88px;
		border-bottom-color: var(--line);
	}

	.wordmark {
		display: flex;
		align-items: center;
		gap: 12px;
		font-family: 'Syne', sans-serif;
	}

	.wordmark-mark {
		display: grid;
		width: 39px;
		height: 39px;
		place-items: center;
		border: 1px solid var(--accent);
		color: var(--accent);
		font-size: 12px;
		font-weight: 700;
	}

	.wordmark-name {
		font-size: 13px;
		font-weight: 600;
	}

	.header-note {
		margin: 0;
		color: var(--paper);
		font-family: 'DM Mono', monospace;
		font-size: 14px;
		line-height: 1.7;
		text-transform: uppercase;
	}

	.header-note span {
		display: block;
		color: rgb(196 191 172 / 54%);
	}

	nav {
		justify-content: flex-end;
		gap: clamp(18px, 3vw, 42px);
		font-family: 'DM Mono', monospace;
		font-size: 17px;
		letter-spacing: 0;
	}

	nav a {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	nav a span {
		color: var(--accent);
		font-size: 12px;
	}

	.site-footer {
		align-items: center;
		border-top-color: var(--line);
		font-family: 'DM Mono', monospace;
		font-size: 14px;
		letter-spacing: 0.02em;
		text-transform: uppercase;
	}

	.site-footer a span {
		margin-left: 7px;
		color: var(--accent);
	}

	@media (max-width: 760px) {
		.site-shell {
			width: min(100% - 40px, 1480px);
		}

		.site-header {
			grid-template-columns: 1fr auto;
			row-gap: 0;
			min-height: 76px;
		}

		.header-note {
			display: none;
		}

		nav {
			gap: 14px;
			font-size: 15px;
		}

		nav a {
			gap: 4px;
		}
	}

	@media (max-width: 480px) {
		.wordmark {
			gap: 8px;
		}

		.wordmark-mark {
			width: 33px;
			height: 33px;
		}

		.wordmark-name {
			font-size: 14px;
		}

		nav {
			gap: 10px;
			font-size: 13px;
		}

		nav a span {
			display: none;
		}

		.site-footer {
			align-items: flex-start;
			flex-direction: column;
			gap: 10px;
		}
	}
</style>
