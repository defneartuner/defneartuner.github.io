import { n as ensure_array_like, o as attr, r as head, s as escape_html } from "../../chunks/server2.js";
import { a as _20250107_093018_default, i as _20250114_145241_default, n as kayra_bust_default, r as Alexander_default, t as male_sketch_default } from "../../chunks/male sketch.js";
//#region src/lib/assets/artworks/2d-designs/death.png?url
var death_default = "/_app/immutable/assets/death.D2qj58CJ.png";
//#endregion
//#region src/lib/assets/artworks/2d-designs/self portrait.png?url
var self_portrait_default = "/_app/immutable/assets/self%20portrait.CTFtIpn8.png";
//#endregion
//#region src/lib/assets/artworks/2d-designs/thewolf.png?url
var thewolf_default = "/_app/immutable/assets/thewolf.Bu-lPywE.png";
//#endregion
//#region src/lib/assets/artworks/3d-designs/sculpting1.PNG?url
var sculpting1_default = "/_app/immutable/assets/sculpting1.CDJXnGss.PNG";
//#endregion
//#region src/lib/assets/artworks/freelance/Freelance.PNG?url
var Freelance_default = "/_app/immutable/assets/Freelance.IJhd5KzV.PNG";
//#endregion
//#region src/lib/assets/artworks/freelance/warcrimes.co.PNG?url
var warcrimes_co_default = "/_app/immutable/assets/warcrimes.co.DC2oFZ-H.PNG";
//#endregion
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const categories = [
			{
				id: "freelance",
				title: "Freelance",
				note: "Selected commissions"
			},
			{
				id: "2d-designs",
				title: "2D Designs",
				note: "Characters & worlds"
			},
			{
				id: "3d-designs",
				title: "3D Designs",
				note: "Sculpture & form"
			}
		];
		const artworkFiles = /* #__PURE__ */ Object.assign({
			"../lib/assets/artworks/2d-designs/death.png": death_default,
			"../lib/assets/artworks/2d-designs/self portrait.png": self_portrait_default,
			"../lib/assets/artworks/2d-designs/thewolf.png": thewolf_default,
			"../lib/assets/artworks/3d-designs/sculpting1.PNG": sculpting1_default,
			"../lib/assets/artworks/freelance/Freelance.PNG": Freelance_default,
			"../lib/assets/artworks/freelance/warcrimes.co.PNG": warcrimes_co_default,
			"../lib/assets/artworks/traditional/20250107_093018.png": _20250107_093018_default,
			"../lib/assets/artworks/traditional/20250114_145241.png": _20250114_145241_default,
			"../lib/assets/artworks/traditional/Alexander.png": Alexander_default,
			"../lib/assets/artworks/traditional/kayra_bust.png": kayra_bust_default,
			"../lib/assets/artworks/traditional/male sketch.png": male_sketch_default
		});
		const artworksByCategory = Object.fromEntries(categories.map((category) => [category.id, Object.entries(artworkFiles).filter(([path]) => path.split("/").slice(-2, -1)[0] === category.id).map(([path, url]) => ({
			path,
			name: path.split("/").pop() ?? path,
			url
		}))]));
		head("1uha8ag", $$renderer, ($$renderer) => {
			$$renderer.push(`<meta name="description" content="The portfolio of Defne Artuner, a 3D artist focused on sculpting and character design."/>`);
		});
		$$renderer.push(`<section class="intro svelte-1uha8ag"><div class="hero-meta svelte-1uha8ag"><span>Independent practice / 2026</span></div> <div class="hero-body svelte-1uha8ag"><div class="hero-title svelte-1uha8ag"><p class="hero-kicker svelte-1uha8ag">3D artist <span class="svelte-1uha8ag">·</span> character design</p> <h1 class="svelte-1uha8ag">Defne<br/><em class="svelte-1uha8ag">Artuner</em></h1></div> <div class="hero-aside svelte-1uha8ag"><p class="aside-index svelte-1uha8ag">01 / 03<br/>Portfolio index</p> <p class="intro-description svelte-1uha8ag">Character, form and the small human details that stay with us.</p> <a class="hero-link svelte-1uha8ag" href="#work"><span class="svelte-1uha8ag">Explore selected work</span><span class="svelte-1uha8ag">↘</span></a></div></div> <div class="hero-footer svelte-1uha8ag"><span>Form / character / emotion</span> <a href="#work" class="svelte-1uha8ag">Scroll to explore <span class="svelte-1uha8ag">↓</span></a></div></section> <section class="work-section svelte-1uha8ag" id="work" aria-labelledby="work-heading"><div class="section-heading svelte-1uha8ag"><div><p class="eyebrow svelte-1uha8ag"><span class="svelte-1uha8ag">02</span> Project index</p> <h2 id="work-heading" class="svelte-1uha8ag">Selected<br/><em class="svelte-1uha8ag">work.</em></h2></div> <p class="work-note svelte-1uha8ag">Three ways into the practice.<br/>A growing archive of ideas made tangible.</p></div> <div class="category-grid svelte-1uha8ag"><!--[-->`);
		const each_array = ensure_array_like(categories);
		for (let index = 0, $$length = each_array.length; index < $$length; index++) {
			let category = each_array[index];
			$$renderer.push(`<section class="category svelte-1uha8ag"${attr("aria-labelledby", `category-${category.id}`)}><div class="category-heading svelte-1uha8ag"><p class="category-number svelte-1uha8ag">0${escape_html(index + 1)}<span class="svelte-1uha8ag">/ 03</span></p> <div class="category-title svelte-1uha8ag"><h3${attr("id", `category-${category.id}`)} class="svelte-1uha8ag">${escape_html(category.title)}</h3> <p class="category-note svelte-1uha8ag">${escape_html(category.note)}</p></div> <p class="category-count svelte-1uha8ag">${escape_html(artworksByCategory[category.id].length)} works</p></div> <div class="artwork-grid svelte-1uha8ag">`);
			const each_array_1 = ensure_array_like(artworksByCategory[category.id]);
			if (each_array_1.length !== 0) {
				$$renderer.push("<!--[-->");
				for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
					let artwork = each_array_1[$$index];
					$$renderer.push(`<button type="button" class="artwork svelte-1uha8ag"><img${attr("src", artwork.url)}${attr("alt", artwork.name)} class="svelte-1uha8ag"/> <span class="artwork-label svelte-1uha8ag">${escape_html(artwork.name)}</span></button>`);
				}
			} else $$renderer.push(`<!--[!--><div class="empty-art svelte-1uha8ag"${attr("aria-label", `No artwork added to ${category.title}`)}><span class="empty-mark svelte-1uha8ag">0${escape_html(index + 1)}</span> <span>Nothing filed here yet</span></div>`);
			$$renderer.push(`<!--]--></div></section>`);
		}
		$$renderer.push(`<!--]--></div></section> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte.js.map