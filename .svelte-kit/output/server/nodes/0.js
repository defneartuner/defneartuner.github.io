import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DsDvD6OK.js","_app/immutable/chunks/B58J9rRL.js","_app/immutable/chunks/Cyt8LZpN.js","_app/immutable/entry/payload.DSmR2FwN.js"];
export const stylesheets = ["_app/immutable/assets/0.CFliTSFz.css"];
export const fonts = [];
