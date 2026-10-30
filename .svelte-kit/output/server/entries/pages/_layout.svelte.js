import { bt as resolve } from "../../chunks/internal.js";
import { o as attr, r as head } from "../../chunks/server2.js";
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { children } = $$props;
		head("12qhfyh", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Defne Artuner | Artist Portfolio</title>`);
			});
			$$renderer.push(`<meta name="theme-color" content="#271118"/> <link rel="preconnect" href="https://fonts.googleapis.com"/> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/> <link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&amp;family=DM+Sans:wght@400;500;600;700&amp;family=Syne:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet"/>`);
		});
		$$renderer.push(`<div class="site-shell svelte-12qhfyh"><header class="site-header svelte-12qhfyh"><a class="wordmark svelte-12qhfyh"${attr("href", resolve("/"))} aria-label="Defne Artuner home"><span class="wordmark-mark svelte-12qhfyh">DA</span> <span class="wordmark-name svelte-12qhfyh">Defne Artuner</span></a> <p class="header-note svelte-12qhfyh">Artist portfolio <span class="svelte-12qhfyh">Ankara, Türkiye</span></p> <nav aria-label="Main navigation" class="svelte-12qhfyh"><a${attr("href", resolve("/"))} class="svelte-12qhfyh"><span class="svelte-12qhfyh">01</span> Work</a> <a${attr("href", resolve("/traditional-work"))} class="svelte-12qhfyh"><span class="svelte-12qhfyh">02</span> Traditional Work</a> <a${attr("href", resolve("/about"))} class="svelte-12qhfyh"><span class="svelte-12qhfyh">03</span> About</a> <a${attr("href", resolve("/contact"))} class="svelte-12qhfyh"><span class="svelte-12qhfyh">04</span> Contact</a></nav></header> <main>`);
		children($$renderer);
		$$renderer.push(`<!----></main> <footer class="site-footer svelte-12qhfyh"><span>© 2026 · Defne Artuner</span> <span>Form / character / emotion</span> <a href="mailto:defneartuner@gmail.com" class="svelte-12qhfyh">Start a conversation <span class="svelte-12qhfyh">↗</span></a></footer></div>`);
	});
}
//#endregion
export { _layout as default };

//# sourceMappingURL=_layout.svelte.js.map