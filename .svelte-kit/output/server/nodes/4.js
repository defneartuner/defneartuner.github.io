

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.MnANurzH.js","_app/immutable/chunks/B58J9rRL.js"];
export const stylesheets = ["_app/immutable/assets/4.fv6i175N.css"];
export const fonts = [];
