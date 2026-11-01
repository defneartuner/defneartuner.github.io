<svelte:head>
	<title>Contact | Defne Artuner</title>
	<meta name="description" content="Contact artist Defne Artuner." />
</svelte:head>

<section class="contact-page">
	<div class="contact-topline">
		<span>03 / Contact</span>
		<span>Independent practice · Ankara, Türkiye</span>
	</div>
	<div class="contact-body">
		<div class="contact-title">
			<p class="contact-kicker">Open for conversations</p>
			<h1>Contact</h1>
		</div>
		<div class="contact-details">
			<p class="contact-index">01 — Direct contact</p>
			<p class="contact-name">Defne Artuner</p>
			<a href="mailto:defneartunerr@gmail.com"
				>defneartunerr@gmail.com <span aria-hidden="true">↗</span></a
			>
			<a
				class="social-link"
				href="https://tr.linkedin.com/in/defne-artuner-b73494337/tr"
				target="_blank"
				rel="noreferrer"
				>LinkedIn <span aria-hidden="true">↗</span></a
			>
			<a
				class="social-link"
				href="https://www.artstation.com/vemdion3"
				target="_blank"
				rel="noreferrer"
				>ArtStation <span aria-hidden="true">↗</span></a
			>
		</div>
	</div>
	<div class="contact-bottomline">
		<span>Make something that stays.</span>
		<span>DA / 2026</span>
	</div>
</section>

<style>
	.contact-page {
		display: flex;
		min-height: min(720px, calc(100svh - 150px));
		flex-direction: column;
		justify-content: space-between;
		padding: 18px 5% 0;
	}

	.contact-topline,
	.contact-bottomline {
		display: flex;
		justify-content: space-between;
		gap: 15px;
		padding: 12px 0;
		color: var(--text-secondary);
		font-family: 'DM Mono', monospace;
		font-size: 14px;
		text-transform: uppercase;
	}

	.contact-topline {
		border-bottom: 1px solid rgb(104 82 92 / 24%);
		font-size: 17px;
	}

	.contact-body {
		display: grid;
		flex: 1;
		grid-template-columns: 1fr 0.55fr;
		align-items: center;
		gap: 8%;
		padding: 65px 0;
	}

	h1 {
		margin: 0;
		font-family: 'Syne', sans-serif;
		font-size: 190px;
		font-weight: 600;
		line-height: 0.8;
		letter-spacing: 0;
	}

	.contact-kicker,
	.contact-index {
		color: var(--text-secondary);
		font-family: 'DM Mono', monospace;
		font-size: 14px;
		text-transform: uppercase;
	}

	.contact-kicker {
		margin: 0 0 31px;
	}

	.contact-details {
		max-width: 310px;
		padding-top: 17px;
		border-top: 1px solid rgb(104 82 92 / 42%);
	}

	.contact-index {
		margin: 0 0 45px;
	}

	.contact-name {
		margin: 0 0 10px;
		font-family: 'Syne', sans-serif;
		font-size: 22px;
		font-weight: 500;
	}

	.contact-details a {
		display: block;
		font-size: 18px;
		transition: color 180ms ease;
	}

	.contact-details a + a {
		margin-top: 12px;
	}

	.contact-details .social-link {
		padding: 10px 12px;
		border: 1px solid rgb(104 82 92 / 42%);
		font-size: 21px;
	}

	.contact-details a:hover {
		color: #c4bfac;
	}

	.contact-details a span {
		margin-left: 8px;
		color: #c4bfac;
	}

	.contact-bottomline {
		border-top: 1px solid rgb(104 82 92 / 24%);
	}

	@media (max-width: 760px) {
		.contact-page {
			min-height: min(670px, calc(100svh - 150px));
			padding: 18px 0 0;
		}

		.contact-body {
			grid-template-columns: 1fr 0.65fr;
			gap: 4%;
		}

		h1 {
			font-size: 125px;
		}

		.contact-details a {
			font-size: 17px;
		}
	}

	@media (max-width: 500px) {
		.contact-page {
			min-height: calc(100svh - 150px);
		}

		.contact-topline,
		.contact-bottomline {
			font-size: 14px;
		}

		.contact-topline {
			font-size: 16px;
		}

		.contact-body {
			grid-template-columns: 1fr;
			align-content: center;
			gap: 48px;
			padding: 40px 0;
		}

		h1 {
			font-size: 100px;
		}

		.contact-details {
			width: 82%;
			justify-self: end;
		}

		.contact-index {
			margin-bottom: 28px;
		}

		.contact-details a {
			font-size: 16px;
		}
	}
</style>
