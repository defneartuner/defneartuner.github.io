

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.CqfxFePe.js","_app/immutable/chunks/B58J9rRL.js"];
export const stylesheets = ["_app/immutable/assets/3.CMwQ42Rz.css"];
export const fonts = [];
