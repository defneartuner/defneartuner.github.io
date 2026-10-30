import { n as ensure_array_like, o as attr, r as head, s as escape_html } from "../../../chunks/server2.js";
import { a as _20250107_093018_default, i as _20250114_145241_default, n as kayra_bust_default, r as Alexander_default, t as male_sketch_default } from "../../../chunks/male sketch.js";
//#region src/routes/traditional-work/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const artworks = Object.entries(/* @__PURE__ */ Object.assign({
			"../../lib/assets/artworks/traditional/20250107_093018.png": _20250107_093018_default,
			"../../lib/assets/artworks/traditional/20250114_145241.png": _20250114_145241_default,
			"../../lib/assets/artworks/traditional/Alexander.png": Alexander_default,
			"../../lib/assets/artworks/traditional/kayra_bust.png": kayra_bust_default,
			"../../lib/assets/artworks/traditional/male sketch.png": male_sketch_default
		})).map(([path, url]) => ({
			path,
			name: path.split("/").pop() ?? path,
			url
		}));
		head("4gc752", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Traditional Work | Defne Artuner</title>`);
			});
			$$renderer.push(`<meta name="description" content="Traditional portfolio work in graphite, charcoal, and study-based figure drawing."/>`);
		});
		$$renderer.push(`<section class="traditional-page svelte-4gc752"><div class="page-heading svelte-4gc752"><p class="page-tag svelte-4gc752">01 / Traditional work</p> <h1 class="svelte-4gc752">Traditional<br/><em class="svelte-4gc752">Work</em></h1> <p class="heading-note svelte-4gc752">Studies in material<br/>Graphite / charcoal / gesture</p></div> <div class="artwork-grid svelte-4gc752">`);
		const each_array = ensure_array_like(artworks);
		if (each_array.length !== 0) {
			$$renderer.push("<!--[-->");
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let artwork = each_array[$$index];
				$$renderer.push(`<button type="button" class="artwork svelte-4gc752"><img${attr("src", artwork.url)}${attr("alt", artwork.name)} class="svelte-4gc752"/> <span class="artwork-label svelte-4gc752">${escape_html(artwork.name)}</span></button>`);
			}
		} else $$renderer.push(`<!--[!--><div class="empty-state svelte-4gc752">No traditional pieces uploaded yet.</div>`);
		$$renderer.push(`<!--]--></div></section> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]-->`);
	});
}
//#endregion
export { _page as default };

//# sourceMappingURL=_page.svelte.js.map