<script lang="ts">
	type Category = {
		id: string;
		title: string;
		note: string;
	};
	type Artwork = { path: string; name: string; url: string };

	const categories: Category[] = [
		{ id: 'freelance', title: 'Freelance', note: 'Selected commissions' },
		{ id: '2d-designs', title: '2D Designs', note: 'Characters & worlds' },
		{ id: '3d-designs', title: 'Project 1', note: 'Selected project' }
	];
	const artworkFiles = import.meta.glob<string>(
		'../lib/assets/artworks/*/*.{avif,gif,jpg,jpeg,png,svg,webp,AVIF,GIF,JPG,JPEG,PNG,SVG,WEBP}',
		{ eager: true, import: 'default', query: '?url' }
	);
	const artworksByCategory: Record<string, Artwork[]> = Object.fromEntries(
		categories.map((category) => [
			category.id,
			Object.entries(artworkFiles)
				.filter(([path]) => path.split('/').slice(-2, -1)[0] === category.id)
				.map(([path, url]) => ({ path, name: path.split('/').pop() ?? path, url }))
		])
	);

	let selectedArtwork = $state<Artwork | null>(null);

	function openArtwork(artwork: Artwork) {
		selectedArtwork = artwork;
	}

	function closeArtwork() {
		selectedArtwork = null;
	}
</script>

<svelte:head>
	<meta
		name="description"
		content="The portfolio of Defne Artuner, a 3D artist focused on sculpting and character design."
	/>
</svelte:head>

<section class="intro">
	<div class="hero-meta">
		<span>Independent practice / 2026</span>
	</div>
	<div class="home-availability">
		<p>Available for<br />Erasmus+ 3D Art Summer Internship</p>
	</div>
	<div class="hero-body">
		<div class="hero-title">
			<p class="hero-kicker">3D artist <span>·</span> character design</p>
			<h1>Defne<br /><em>Artuner</em></h1>
		</div>
		<div class="hero-aside">
			<p class="aside-index">01 / 03<br />Portfolio index</p>
			<p class="intro-description">
				Character, form and the small human details that stay with us.
			</p>
			<a class="hero-link" href="#work"><span>Explore selected work</span><span>↘</span></a>
		</div>
	</div>
	<div class="hero-footer">
		<span>Form / character / emotion</span>
		<a href="#work">Scroll to explore <span>↓</span></a>
	</div>
</section>

<section class="work-section" id="work" aria-labelledby="work-heading">
	<div class="section-heading">
		<div>
			<p class="eyebrow"><span>02</span> Project index</p>
			<h2 id="work-heading">Selected<br /><em>work.</em></h2>
		</div>
		<p class="work-note">
			Three ways into the practice.<br />A growing archive of ideas made tangible.
		</p>
	</div>

	<div class="category-grid">
		{#each categories as category, index (category.id)}
			<section class="category" aria-labelledby={`category-${category.id}`}>
				<div class="category-heading">
					<p class="category-number">0{index + 1}<span> / 03</span></p>
					<div class="category-title">
						<h3 id={`category-${category.id}`}>{category.title}</h3>
						<p class="category-note">{category.note}</p>
					</div>
					<p class="category-count">{artworksByCategory[category.id].length} works</p>
				</div>
				<div class="artwork-grid">
					{#each artworksByCategory[category.id] as artwork (artwork.path)}
						<button type="button" class="artwork" onclick={() => openArtwork(artwork)}>
							<img src={artwork.url} alt={artwork.name} />
							<span class="artwork-label">{artwork.name}</span>
						</button>
					{:else}
						<div class="empty-art" aria-label={`No artwork added to ${category.title}`}>
							<span class="empty-mark">0{index + 1}</span>
							<span>Nothing filed here yet</span>
						</div>
					{/each}
				</div>
			</section>
		{/each}
	</div>
</section>

{#if selectedArtwork}
	<div
		class="lightbox"
		role="dialog"
		aria-modal="true"
		aria-label={selectedArtwork.name}
		tabindex="0"
		onclick={closeArtwork}
		onkeydown={(event) => {
			if (event.key === 'Escape') closeArtwork();
		}}
	>
		<div class="lightbox-panel">
			<button class="close-button" type="button" aria-label="Close image" onclick={closeArtwork}>
				×
			</button>
			<button
				type="button"
				class="lightbox-image-button"
				onclick={(event) => event.stopPropagation()}
			>
				<img src={selectedArtwork.url} alt={selectedArtwork.name} />
			</button>
			<p>{selectedArtwork.name}</p>
		</div>
	</div>
{/if}

<style>
	.intro {
		display: flex;
		min-height: min(720px, calc(100svh - 88px));
		flex-direction: column;
		justify-content: space-between;
		padding: 24px 5% 0;
	}

	.hero-meta,
	.hero-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-family: 'DM Mono', monospace;
		font-size: 16px;
		letter-spacing: 0.02em;
		text-transform: uppercase;
	}

	.hero-meta {
		min-height: 35px;
		color: var(--text-secondary);
	}

	.home-availability {
		padding: 0 0 18px;
	}

	.home-availability p {
		margin: 0;
		color: #c4bfac;
		font-family: 'Syne', sans-serif;
		font-size: clamp(30px, 4vw, 52px);
		font-weight: 500;
		line-height: 1.08;
		text-transform: none;
		letter-spacing: 0;
	}

	.hero-body {
		display: grid;
		flex: 1;
		grid-template-columns: minmax(0, 1fr) minmax(180px, 0.28fr);
		align-items: end;
		gap: 5%;
		padding: 53px 0 45px;
	}

	.hero-title {
		animation: rise-in 650ms ease both;
	}

	.hero-aside {
		animation: rise-in 650ms 120ms ease both;
	}

	.hero-kicker,
	.aside-index {
		margin: 0;
		font-family: 'DM Mono', monospace;
		font-size: 16px;
		line-height: 1.8;
		text-transform: uppercase;
	}

	.hero-kicker {
		margin: 0 0 34px 7px;
		color: #c4bfac;
	}

	.hero-kicker span {
		padding: 0 5px;
		color: #c4bfac;
	}

	h1 {
		margin: 0;
		font-family: 'Syne', sans-serif;
		font-size: clamp(94px, 17vw, 240px);
		font-weight: 600;
		line-height: 0.78;
		letter-spacing: 0;
	}

	h1 em {
		color: #c4bfac;
		font-style: normal;
		font-weight: 500;
	}

	.intro-description {
		max-width: 230px;
		margin: 26px 0 28px;
		color: var(--text-secondary);
		font-size: 16px;
		line-height: 1.75;
	}

	.aside-index {
		color: var(--text-secondary);
	}

	.hero-link {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px 0;
		border-top: 1px solid rgb(104 82 92 / 40%);
		border-bottom: 1px solid rgb(104 82 92 / 40%);
		font-family: 'DM Mono', monospace;
		font-size: 16px;
		text-transform: uppercase;
		transition:
			color 180ms ease,
			padding 180ms ease;
	}

	.hero-link:hover {
		padding-right: 7px;
		color: #c4bfac;
	}

	.hero-link span:last-child {
		color: #c4bfac;
		font-size: 16px;
	}

	.hero-footer {
		min-height: 45px;
		border-top: 1px solid rgb(104 82 92 / 24%);
		color: var(--text-secondary);
	}

	.hero-footer a {
		color: #c4bfac;
	}

	.hero-footer a span {
		margin-left: 8px;
		color: #c4bfac;
		font-size: 14px;
	}

	.work-section {
		padding: 67px 5% 105px;
		border-top: 1px solid rgb(104 82 92 / 22%);
	}

	.section-heading {
		display: grid;
		grid-template-columns: 0.62fr 1fr;
		align-items: end;
		gap: 7%;
		margin-bottom: 18px;
		padding-bottom: 35px;
		border-bottom: 1px solid rgb(104 82 92 / 28%);
	}

	.eyebrow {
		margin: 0 0 15px;
		color: #c4bfac;
		font-family: 'DM Mono', monospace;
		font-size: 16px;
		letter-spacing: 0.02em;
		text-transform: uppercase;
	}

	.eyebrow span {
		margin-right: 10px;
		color: var(--text-secondary);
	}

	h2,
	h3 {
		font-family: 'Syne', sans-serif;
		font-weight: 500;
	}

	h2 {
		margin: 0;
		font-size: clamp(47px, 6vw, 78px);
		line-height: 0.98;
		letter-spacing: 0;
	}

	h2 em {
		color: #c4bfac;
		font-style: normal;
		font-weight: 500;
	}

	.work-note {
		max-width: 250px;
		margin: 0 0 5px auto;
		color: var(--text-secondary);
		font-size: 16px;
		line-height: 1.8;
	}

	.category-grid {
		display: flex;
		flex-direction: column;
	}

	.category {
		min-width: 0;
	}

	.category-heading {
		display: flex;
		min-height: 0;
		flex-direction: column;
		align-items: flex-start;
		gap: 13px;
		padding: 0;
		border: 0;
	}

	.category-number {
		margin: 2px 0 0;
		color: #c4bfac;
		font-family: 'DM Mono', monospace;
		font-size: 16px;
	}

	.category-number span {
		color: var(--text-secondary);
	}

	.category-title {
		margin-bottom: 7px;
	}

	h3 {
		margin: 0;
		font-size: clamp(23px, 2.4vw, 31px);
		line-height: 1.1;
		letter-spacing: 0;
	}

	.category-note {
		margin: 6px 0 0;
		color: var(--text-secondary);
		font-size: 16px;
	}

	.category-count {
		margin: auto 0 0;
		color: var(--text-secondary);
		font-family: 'DM Mono', monospace;
		font-size: 16px;
		text-transform: uppercase;
	}

	.artwork-grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 14px;
	}

	.empty-art {
		display: flex;
		min-height: 190px;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		padding: 15px;
		border: 1px solid rgb(104 82 92 / 17%);
		background: rgb(104 82 92 / 16%);
		color: var(--text-secondary);
		font-family: 'DM Mono', monospace;
		font-size: 16px;
		text-transform: uppercase;
	}

	.empty-mark {
		color: #c4bfac;
		font-family: 'Syne', sans-serif;
		font-size: 34px;
		line-height: 1;
	}

	.artwork {
		position: relative;
		min-width: 0;
		margin: 0;
		padding: 0;
		border: 0;
		background: #271118;
		cursor: pointer;
		overflow: hidden;
		text-align: left;
	}

	.artwork img {
		display: block;
		width: 100%;
		aspect-ratio: 0.92;
		object-fit: cover;
		transition: transform 300ms ease;
	}

	.artwork:hover img {
		transform: scale(1.035);
	}

	.artwork-label {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 8px;
		padding: 9px 10px;
		background: #68525c;
		font-family: 'DM Mono', monospace;
		font-size: 16px;
		text-transform: uppercase;
		color: #c4bfac;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.lightbox {
		position: fixed;
		inset: 0;
		display: grid;
		place-items: center;
		padding: 32px;
		background: rgb(39 17 24 / 78%);
		z-index: 40;
	}

	.lightbox-panel {
		position: relative;
		max-width: min(90vw, 1100px);
		max-height: 86vh;
		padding: 24px 24px 18px;
		background: #271118;
		border: 1px solid rgb(104 82 92 / 18%);
		box-shadow: 0 24px 80px rgb(0 0 0 / 38%);
	}

	.lightbox-image-button {
		display: block;
		padding: 0;
		border: 0;
		background: transparent;
		cursor: default;
	}

	.lightbox-image-button img {
		display: block;
		max-width: 100%;
		max-height: 74vh;
		object-fit: contain;
	}

	.lightbox-panel p {
		margin: 12px 0 0;
		color: #c4bfac;
		font-family: 'DM Mono', monospace;
		font-size: 16px;
		letter-spacing: 0.04em;
		text-transform: uppercase;
	}

	.close-button {
		position: absolute;
		top: 10px;
		right: 10px;
		border: 0;
		background: transparent;
		color: #c4bfac;
		font-size: 28px;
		line-height: 1;
		cursor: pointer;
	}

	@keyframes rise-in {
		from {
			opacity: 0;
			transform: translateY(15px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 900px) {
		.hero-body {
			grid-template-columns: minmax(0, 1fr) minmax(165px, 0.3fr);
			gap: 3%;
		}

		h1 {
			font-size: clamp(90px, 16vw, 160px);
		}

		.category {
			grid-template-columns: 150px minmax(0, 1fr);
			gap: 22px;
		}

		.artwork-grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}

	@media (max-width: 620px) {
		.intro {
			min-height: calc(83svh - 76px);
			padding: 17px 0 0;
		}

		.hero-meta,
		.hero-footer {
			font-size: 16px;
		}

		.hero-body {
			grid-template-columns: 1fr;
			align-content: center;
			gap: 39px;
			padding: 58px 0;
		}

		.hero-kicker {
			margin: 0 0 29px 3px;
			font-size: 16px;
		}

		h1 {
			font-size: clamp(84px, 19vw, 128px);
		}

		.hero-aside {
			width: min(75%, 280px);
			justify-self: end;
		}

		.intro-description {
			margin: 13px 0 19px;
			font-size: 15px;
		}

		.work-section {
			padding: 47px 0 70px;
		}

		.section-heading {
			grid-template-columns: 1fr;
			gap: 20px;
			padding-bottom: 25px;
		}

		h2 {
			font-size: clamp(48px, 12vw, 68px);
		}

		.work-note {
			margin: 0;
			font-size: 16px;
		}

		.category {
			grid-template-columns: 1fr;
			gap: 18px;
			padding: 24px 0;
		}

		.category-heading {
			display: grid;
			grid-template-columns: 40px 1fr auto;
			align-items: start;
			gap: 10px;
		}

		.category-count {
			align-self: center;
			text-align: right;
		}

		.artwork-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 9px;
		}

		.empty-art {
			min-height: 150px;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.hero-title,
		.hero-aside {
			animation: none;
		}
	}
</style>
