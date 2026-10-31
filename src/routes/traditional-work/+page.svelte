<script lang="ts">
	type Artwork = { path: string; name: string; url: string };

	const artworkFiles = import.meta.glob<string>(
		'../../lib/assets/artworks/traditional/*.{avif,gif,jpg,jpeg,png,svg,webp,AVIF,GIF,JPG,JPEG,PNG,SVG,WEBP}',
		{ eager: true, import: 'default', query: '?url' }
	);

	const artworks: Artwork[] = Object.entries(artworkFiles).map(([path, url]) => ({
		path,
		name: path.split('/').pop() ?? path,
		url
	}));

	let selectedArtwork = $state<Artwork | null>(null);

	function openArtwork(artwork: Artwork) {
		selectedArtwork = artwork;
	}

	function closeArtwork() {
		selectedArtwork = null;
	}
</script>

<svelte:head>
	<title>Traditional Work | Defne Artuner</title>
	<meta
		name="description"
		content="Traditional portfolio work in graphite, charcoal, and study-based figure drawing."
	/>
</svelte:head>

<section class="traditional-page">
	<div class="page-heading">
		<p class="page-tag">01 / Traditional work</p>
		<h1>Traditional<br /><em>Work</em></h1>
		<p class="heading-note">Studies in material<br />Graphite / charcoal / gesture</p>
	</div>

	<div class="artwork-grid">
		{#each artworks as artwork (artwork.path)}
			<button type="button" class="artwork" onclick={() => openArtwork(artwork)}>
				<img src={artwork.url} alt={artwork.name} />
				<span class="artwork-label">{artwork.name}</span>
			</button>
		{:else}
			<div class="empty-state">No traditional pieces uploaded yet.</div>
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
	.traditional-page {
		padding: 56px 5% 96px;
	}

	.page-heading {
		display: grid;
		grid-template-columns: 1fr 0.62fr;
		align-items: end;
		padding: 12px 0 40px;
		border-bottom: 1px solid rgb(104 82 92 / 28%);
	}

	.page-tag,
	.heading-note {
		font-family: 'DM Mono', monospace;
		font-size: 14px;
		line-height: 1.8;
		text-transform: uppercase;
	}

	.page-tag {
		grid-column: 1 / -1;
		margin: 0 0 28px;
		color: var(--text-secondary);
	}

	h1 {
		margin: 0;
		font-family: 'Syne', sans-serif;
		font-size: clamp(62px, 7.5vw, 130px);
		font-weight: 600;
		line-height: 0.82;
		letter-spacing: 0;
	}

	h1 em {
		color: #c4bfac;
		font-style: normal;
		font-weight: 500;
	}

	.heading-note {
		justify-self: end;
		margin: 0 0 8px;
		color: var(--text-secondary);
	}

	.artwork-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 24px;
		padding-top: 36px;
	}

	.artwork {
		display: flex;
		flex-direction: column;
		gap: 14px;
		padding: 0;
		border: 0;
		background: transparent;
		color: inherit;
		text-align: left;
		cursor: pointer;
	}

	.artwork img {
		display: block;
		width: 100%;
		height: 540px;
		object-fit: contain;
		border: 1px solid rgb(104 82 92 / 20%);
		background: #271118;
	}

	.artwork-label {
		padding: 9px 10px;
		background: #68525c;
		font-family: 'DM Mono', monospace;
		font-size: 12px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: #c4bfac;
	}

	.empty-state {
		grid-column: 1 / -1;
		padding: 64px 0;
		border: 1px dashed rgb(104 82 92 / 24%);
		color: #c4bfac;
		font-family: 'DM Mono', monospace;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		text-align: center;
	}

	.lightbox {
		position: fixed;
		inset: 0;
		display: grid;
		place-items: center;
		background: rgb(39 17 24 / 82%);
		padding: 32px;
		z-index: 20;
	}

	.lightbox-panel {
		position: relative;
		width: min(960px, 92vw);
		padding: 22px 22px 14px;
		background: #271118;
		border: 1px solid rgb(104 82 92 / 20%);
	}

	.close-button {
		position: absolute;
		top: 12px;
		right: 12px;
		width: 34px;
		height: 34px;
		border: 1px solid rgb(104 82 92 / 24%);
		background: transparent;
		color: #c4bfac;
		font-size: 28px;
		cursor: pointer;
	}

	.lightbox-image-button {
		display: block;
		width: 100%;
		padding: 0;
		border: 0;
		background: transparent;
		cursor: pointer;
	}

	.lightbox-image-button img {
		display: block;
		width: 100%;
		max-height: 76vh;
		object-fit: contain;
		background: #271118;
	}

	.lightbox-panel p {
		margin: 16px 0 0;
		color: var(--text-secondary);
		font-family: 'DM Mono', monospace;
		font-size: 12px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	@media (max-width: 760px) {
		.artwork-grid {
			grid-template-columns: 1fr;
		}

		.artwork img {
			height: 420px;
		}
	}
</style>
