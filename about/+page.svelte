<script lang="ts">
	const applications = [
		'Blender',
		'Procreate',
		'Nomad Sculpt',
		'Clip Studio Paint',
		'Aseprite',
		'Unreal Engine',
		'Godot Engine'
	];
	const skills = [
		'3D Sculpting',
		'2D Illustrations',
		'2D Character Concept Art',
		'2D Animation',
		'3D Animation',
		'Beginner Level Godot Engine',
		'Beginner Level Unreal Engine'
	];
	const experiences = [
		{
			title: "Women Game Jam '26",
			date: 'October 2026'
		},
		{
			title: "Gates Jam '26",
			date: 'March 2026',
			description: 'Game jam project',
			link: 'https://disarch42.itch.io/desyncromaniac'
		},
		{
			title: 'Freelance',
			date: '2025 – Now',
			description: 'Creating custom 2D assets'
		},
		{
			title: 'B.F.A in Sculpture · Hacettepe University',
			date: '2024 – Now',
			description: ''
		},
	];
</script>

<svelte:head>
	<title>About | Defne Artuner</title>
	<meta name="description" content="About Defne Artuner, her practice, skills and experience." />
</svelte:head>

<section class="about-page">
	<div class="page-heading">
		<p class="page-number">02 / About</p>
		<h1>About the<br /><em>artist.</em></h1>
		<p class="heading-note">Practice notes<br />Defne Artuner · 2026</p>
	</div>

	<div class="about-intro">
		<p class="intro-label">01 — The approach<br />Defne Artuner<br />Artist · Ankara, Türkiye</p>
		<p class="bio">
			I'm Defne, a 3D artist who mainly focuses on sculpting and character design majoring Sculpture
			in Hacettepe University. My work is deeply rooted in a fascination with human psychology and
			behavior. I view art and design not just as visual mediums, but as tools for exploring how
			people connect with characters and process emotion by understanding the underlying mechanics
			of cognition and empathy. My main goal is to craft pieces that resonate on a deeper level.
		</p>
	</div>

	<blockquote class="artist-quote">
		<p>
			“Time will pass; these mood will pass; and I will, eventually, be myself again. But then, at
			some unknown time, the electrifying carnival will come back into my mind.”
		</p>
		<footer>— An Unquiet Mind: A Memoir of Moods and Madness, Kay Redfield Jamison</footer>
	</blockquote>

	<section class="about-section applications" aria-labelledby="applications-heading">
		<div class="section-title">
			<p class="section-index">02 / Tools</p>
			<h2 id="applications-heading">Applications<br /><em>in practice.</em></h2>
		</div>
		<ul class="application-list">
			{#each applications as application, index (application)}
				<li><span>0{index + 1}</span>{application}</li>
			{/each}
		</ul>
	</section>

	<section
		class="about-section details-section"
		aria-label="Skills, experiences, references and languages"
	>
		<div class="details-column skills-column">
			<div class="section-title">
				<p class="section-index">03 / Skills</p>
				<h2>Skills</h2>
			</div>
			<ul class="plain-list">
				{#each skills as skill (skill)}
					<li>{skill}</li>
				{/each}
			</ul>
		</div>

		<div class="details-column experience-column">
			<div class="section-title">
				<p class="section-index">04 / Timeline</p>
				<h2>Experiences</h2>
			</div>
			<div class="experience-list">
				{#each experiences as experience (experience.title)}
					<article class="experience-item">
						<h3>{experience.title}</h3>
						{#if experience.date}<p class="experience-date">{experience.date}</p>{/if}
						{#if experience.description}<p>{experience.description}</p>{/if}
						{#if experience.link}
							<a class="experience-link" href={experience.link} target="_blank" rel="noreferrer">
								{experience.link}
							</a>
						{/if}
					</article>
				{/each}
			</div>
		</div>

		<div class="details-column references-column">
			<div class="section-title">
				<p class="section-index">05 / People</p>
				<h2>References</h2>
			</div>
			<ul class="reference-list">
				<li>
					<span>Turhan Çetin</span>
					<a href="mailto:tcetin@hacettepe.edu.tr">tcetin@hacettepe.edu.tr</a>
				</li>
				<li>
					<span>Okan Ercan</span>
					<a href="mailto:okan.ercan@hacettepe.edu.tr">okan.ercan@hacettepe.edu.tr</a>
				</li>
			</ul>
		</div>

		<div class="details-column languages-column">
			<div class="section-title">
				<p class="section-index">06 / Languages</p>
				<h2>Languages</h2>
			</div>
			<ul class="language-list">
				<li><span>Turkish</span><span>Native</span></li>
				<li><span>English</span><span>Fluent</span></li>
				<li><span>German</span><span>Beginner</span></li>
			</ul>
		</div>
	</section>
</section>

<style>
	.about-page {
		padding: 56px 5% 105px;
	}

	.page-heading {
		display: grid;
		grid-template-columns: 1fr 0.48fr;
		align-items: end;
		padding: 17px 0 42px;
		border-bottom: 1px solid rgb(196 191 172 / 28%);
	}

	.page-number,
	.heading-note,
	.section-index {
		font-family: 'DM Mono', monospace;
		font-size: 14px;
		line-height: 1.8;
		text-transform: uppercase;
	}

	.section-index {
		font-size: 18px;
	}

	.page-number {
		grid-column: 1 / -1;
		margin: 0 0 41px;
		color: #c4bfac;
	}

	h1 {
		grid-column: 1;
		margin: 0;
		font-family: 'Syne', sans-serif;
		font-size: 150px;
		font-weight: 600;
		line-height: 0.8;
		letter-spacing: 0;
	}

	h1 em,
	h2 em {
		color: #c4bfac;
		font-style: normal;
		font-weight: 500;
	}

	.heading-note {
		justify-self: end;
		margin: 0 0 5px;
		color: rgb(196 191 172 / 65%);
	}

	.about-intro {
		display: grid;
		grid-template-columns: 0.55fr 1.45fr;
		gap: 9%;
		margin: 0 0 90px;
		padding: 30px 0 48px;
		border-bottom: 1px solid rgb(196 191 172 / 28%);
	}

	.intro-label {
		margin: 5px 0 0;
		color: #c4bfac;
		font-family: 'DM Mono', monospace;
		font-size: 14px;
		line-height: 2;
		text-transform: uppercase;
	}

	.bio {
		max-width: 790px;
		margin: 0;
		color: rgb(196 191 172 / 88%);
		font-size: 19px;
		line-height: 1.85;
	}

	.artist-quote {
		max-width: 790px;
		margin: -48px 0 90px auto;
		padding: 0 0 0 25px;
		border-left: 1px solid #c4bfac;
	}

	.artist-quote p {
		margin: 0;
		color: #c4bfac;
		font-family: 'Syne', sans-serif;
		font-size: clamp(18px, 2vw, 25px);
		font-weight: 400;
		line-height: 1.55;
	}

	.artist-quote footer {
		margin-top: 17px;
		color: #c4bfac;
		font-family: 'DM Mono', monospace;
		font-size: 14px;
		line-height: 1.8;
		text-transform: uppercase;
	}

	.about-section {
		border-top: 1px solid rgb(196 191 172 / 28%);
	}

	.section-title {
		min-width: 0;
	}

	.section-index {
		margin: 0 0 18px;
		color: #c4bfac;
	}

	h2 {
		margin: 0;
		font-family: 'Syne', sans-serif;
		font-size: 43px;
		font-weight: 500;
		line-height: 1.05;
		letter-spacing: 0;
	}

	.applications {
		display: grid;
		grid-template-columns: 0.55fr 1.45fr;
		gap: 9%;
		padding: 28px 0 68px;
	}

	.application-list,
	.plain-list,
	.reference-list,
	.language-list {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.application-list {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		column-gap: 26px;
	}

	.application-list li {
		display: flex;
		align-items: baseline;
		gap: 12px;
		padding: 15px 0;
		border-bottom: 1px solid rgb(196 191 172 / 17%);
		font-size: 17px;
	}

	.application-list li span {
		color: #c4bfac;
		font-size: 14px;
	}

	.details-section {
		display: grid;
		grid-template-columns: 1fr 1fr;
		column-gap: 9%;
		row-gap: 68px;
		padding-top: 30px;
	}

	.details-column {
		min-width: 0;
	}

	.plain-list {
		margin-top: 21px;
	}

	.plain-list li {
		padding: 11px 0;
		border-bottom: 1px solid rgb(196 191 172 / 15%);
		color: rgb(196 191 172 / 88%);
		font-size: 17px;
	}

	.experience-list {
		margin-top: 23px;
	}

	.experience-item {
		padding: 0 0 22px 17px;
		border-left: 1px solid rgb(196 191 172 / 45%);
	}

	.experience-item + .experience-item {
		padding-top: 5px;
	}

	.experience-item h3 {
		margin: 0;
		font-family: 'Syne', sans-serif;
		font-size: 18px;
		font-weight: 500;
		line-height: 1.4;
	}

	.experience-item p {
		margin: 6px 0 0;
		color: rgb(196 191 172 / 72%);
		font-size: 17px;
		line-height: 1.6;
	}

	.experience-item .experience-date {
		color: #c4bfac;
		font-size: 15px;
		letter-spacing: 0.05em;
	}

	.reference-list {
		margin-top: 23px;
	}

	.reference-list li {
		display: flex;
		flex-direction: column;
		gap: 6px;
		padding: 0 0 17px;
	}

	.reference-list li + li {
		padding-top: 12px;
		border-top: 1px solid rgb(196 191 172 / 15%);
	}

	.reference-list li span {
		font-family: 'Syne', sans-serif;
		font-size: 19px;
		font-weight: 500;
	}

	.reference-list a {
		width: fit-content;
		color: rgb(196 191 172 / 69%);
		font-size: 17px;
		transition: color 180ms ease;
	}

	.reference-list a:hover {
		color: #c4bfac;
	}

	.language-list {
		margin-top: 23px;
	}

	.language-list li {
		display: flex;
		justify-content: space-between;
		gap: 12px;
		padding: 13px 0;
		border-bottom: 1px solid rgb(196 191 172 / 15%);
		font-size: 17px;
	}

	.language-list li span:last-child {
		color: #c4bfac;
		text-align: right;
	}

	@media (max-width: 760px) {
		.about-page {
			padding: 45px 0 70px;
		}

		.page-heading {
			grid-template-columns: 1fr auto;
			padding-bottom: 34px;
		}

		.page-number {
			margin-bottom: 35px;
		}

		h1 {
			font-size: 112px;
		}

		.about-intro {
			grid-template-columns: 1fr 2fr;
			gap: 6%;
			margin-bottom: 65px;
		}

		.artist-quote {
			margin-bottom: 70px;
		}

		.applications {
			grid-template-columns: 0.65fr 1.35fr;
			gap: 5%;
		}
	}

	@media (max-width: 500px) {
		.page-heading {
			grid-template-columns: 1fr;
		}

		h1 {
			font-size: 80px;
		}

		.heading-note {
			justify-self: start;
			margin-top: 27px;
		}

		.about-intro,
		.applications {
			grid-template-columns: 1fr;
			gap: 22px;
		}

		.bio {
			font-size: 16px;
		}

		.artist-quote {
			margin-top: -35px;
			margin-bottom: 60px;
			padding-left: 17px;
		}

		.artist-quote footer {
			font-size: 11px;
		}

		h2 {
			font-size: 35px;
		}

		.details-section {
			grid-template-columns: 1fr;
			row-gap: 47px;
		}

		.application-list {
			column-gap: 14px;
		}

		.application-list li {
			font-size: 16px;
		}

		.application-list li span {
			font-size: 13px;
		}

		.experience-item h3,
		.reference-list li span {
			font-size: 17px;
		}

		.experience-item p,
		.experience-item .experience-date,
		.reference-list a,
		.language-list li,
		.plain-list li {
			font-size: 16px;
		}
	}
</style>
