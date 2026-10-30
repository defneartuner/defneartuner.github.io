import { n as ensure_array_like, o as attr, r as head, s as escape_html } from "../../../chunks/server2.js";
//#region src/routes/about/+page.svelte
function _page($$renderer) {
	const applications = [
		"Blender",
		"Procreate",
		"Nomad Sculpt",
		"Clip Studio Paint",
		"Aseprite",
		"Krita",
		"Unreal Engine",
		"Godot Engine"
	];
	const skills = [
		"3D Sculpting",
		"2D Illustrations",
		"2D Character Concept Art",
		"2D Animation",
		"3D Animation",
		"Beginner Level Godot Engine",
		"Beginner Level Unreal Engine"
	];
	const experiences = [
		{
			title: "COP31",
			date: "October 2026",
			description: "İnsana Dair Sorgulamalar: Öz Eleştirel Yaklaşımla Çevresel Farkındalığı Artırma Exhibition"
		},
		{
			title: "Women Game Jam '26",
			date: "October 2026",
			description: "Game jam project",
			link: "https://odanyi.itch.io/buggin-around"
		},
		{
			title: "Gates Jam '26",
			date: "March 2026",
			description: "Game jam project",
			link: "https://disarch42.itch.io/desyncromaniac"
		},
		{
			title: "Freelance",
			date: "2025 – Now",
			description: "Creating custom 2D assets"
		},
		{
			title: "B.F.A in Sculpture · Hacettepe University",
			date: "2024 – Now",
			description: ""
		}
	];
	head("cwls5q", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>About | Defne Artuner</title>`);
		});
		$$renderer.push(`<meta name="description" content="About Defne Artuner, her practice, skills and experience."/>`);
	});
	$$renderer.push(`<section class="about-page svelte-cwls5q"><div class="page-heading svelte-cwls5q"><p class="page-number svelte-cwls5q">02 / About</p> <h1 class="svelte-cwls5q">About the<br/><em class="svelte-cwls5q">artist.</em></h1> <p class="heading-note svelte-cwls5q">Practice notes<br/>Defne Artuner · 2026</p></div> <div class="about-intro svelte-cwls5q"><p class="intro-label svelte-cwls5q">01 — The approach<br/>Defne Artuner<br/>Artist · Ankara, Türkiye</p> <p class="bio svelte-cwls5q">I'm Defne, a 3D artist who mainly focuses on sculpting and character design majoring Sculpture
			in Hacettepe University. My work is deeply rooted in a fascination with human psychology and
			behavior. I view art and design not just as visual mediums, but as tools for exploring how
			people connect with characters and process emotion by understanding the underlying mechanics
			of cognition and empathy. My main goal is to craft pieces that resonate on a deeper level.</p></div> <blockquote class="artist-quote svelte-cwls5q"><p class="svelte-cwls5q">“Time will pass; these mood will pass; and I will, eventually, be myself again. But then, at
			some unknown time, the electrifying carnival will come back into my mind.”</p> <footer class="svelte-cwls5q">— An Unquiet Mind: A Memoir of Moods and Madness, Kay Redfield Jamison</footer></blockquote> <section class="about-section applications svelte-cwls5q" aria-labelledby="softwares-heading"><div class="section-title svelte-cwls5q"><p class="section-index svelte-cwls5q">02 / Tools</p> <h2 id="softwares-heading" class="svelte-cwls5q">Softwares</h2></div> <ul class="application-list svelte-cwls5q"><!--[-->`);
	const each_array = ensure_array_like(applications);
	for (let index = 0, $$length = each_array.length; index < $$length; index++) {
		let application = each_array[index];
		$$renderer.push(`<li class="svelte-cwls5q"><span class="svelte-cwls5q">0${escape_html(index + 1)}</span>${escape_html(application)}</li>`);
	}
	$$renderer.push(`<!--]--></ul></section> <section class="about-section details-section svelte-cwls5q" aria-label="Skills, experiences, references and languages"><div class="details-column skills-column svelte-cwls5q"><div class="section-title svelte-cwls5q"><p class="section-index svelte-cwls5q">03 / Skills</p> <h2 class="svelte-cwls5q">Skills</h2></div> <ul class="plain-list svelte-cwls5q"><!--[-->`);
	const each_array_1 = ensure_array_like(skills);
	for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
		let skill = each_array_1[$$index_1];
		$$renderer.push(`<li class="svelte-cwls5q">${escape_html(skill)}</li>`);
	}
	$$renderer.push(`<!--]--></ul></div> <div class="details-column experience-column svelte-cwls5q"><div class="section-title svelte-cwls5q"><p class="section-index svelte-cwls5q">04 / Timeline</p> <h2 class="svelte-cwls5q">Experiences</h2></div> <div class="experience-list svelte-cwls5q"><!--[-->`);
	const each_array_2 = ensure_array_like(experiences);
	for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
		let experience = each_array_2[$$index_2];
		$$renderer.push(`<article class="experience-item svelte-cwls5q"><h3 class="svelte-cwls5q">${escape_html(experience.title)}</h3> `);
		if (experience.date) $$renderer.push(`<!--[0--><p class="experience-date svelte-cwls5q">${escape_html(experience.date)}</p>`);
		else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (experience.description) $$renderer.push(`<!--[0--><p class="svelte-cwls5q">${escape_html(experience.description)}</p>`);
		else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> `);
		if (experience.link) $$renderer.push(`<!--[0--><a class="experience-link"${attr("href", experience.link)} target="_blank" rel="noreferrer">${escape_html(experience.link)}</a>`);
		else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></article>`);
	}
	$$renderer.push(`<!--]--></div></div> <div class="details-column references-column svelte-cwls5q"><div class="section-title svelte-cwls5q"><p class="section-index svelte-cwls5q">05 / People</p> <h2 class="svelte-cwls5q">References</h2></div> <ul class="reference-list svelte-cwls5q"><li class="svelte-cwls5q"><span class="svelte-cwls5q">Turhan Çetin</span> <a href="mailto:tcetin@hacettepe.edu.tr" class="svelte-cwls5q">tcetin@hacettepe.edu.tr</a></li> <li class="svelte-cwls5q"><span class="svelte-cwls5q">Okan Ercan</span> <a href="mailto:okan.ercan@hacettepe.edu.tr" class="svelte-cwls5q">okan.ercan@hacettepe.edu.tr</a></li></ul></div> <div class="details-column languages-column svelte-cwls5q"><div class="section-title svelte-cwls5q"><p class="section-index svelte-cwls5q">06 / Languages</p> <h2 class="svelte-cwls5q">Languages</h2></div> <ul class="language-list svelte-cwls5q"><li class="svelte-cwls5q"><span class="svelte-cwls5q">Turkish</span><span class="svelte-cwls5q">Native</span></li> <li class="svelte-cwls5q"><span class="svelte-cwls5q">English</span><span class="svelte-cwls5q">Fluent</span></li> <li class="svelte-cwls5q"><span class="svelte-cwls5q">German</span><span class="svelte-cwls5q">Beginner</span></li></ul></div></section></section>`);
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte.js.map