

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/traditional-work/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.B3cpxx07.js","_app/immutable/chunks/B58J9rRL.js","_app/immutable/chunks/Dn2uBhB3.js"];
export const stylesheets = ["_app/immutable/assets/5.CsJ8XHLx.css"];
export const fonts = [];
