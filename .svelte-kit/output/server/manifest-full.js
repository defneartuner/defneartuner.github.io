export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	app_dir: "_app",
	app_path: "_app",
	assets: new Set([".nojekyll","robots.txt"]),
	mime_types: {".txt":"text/plain"},
	client: {start:"_app/immutable/entry/start.BV1bNtYn.js",app:"_app/immutable/entry/app.h45Ja9Kw.js",imports:["_app/immutable/entry/start.BV1bNtYn.js","_app/immutable/entry/payload.DSmR2FwN.js","_app/immutable/chunks/CRzLMJPS.js","_app/immutable/chunks/CvWOM5SW.js","_app/immutable/chunks/B58J9rRL.js","_app/immutable/chunks/Cyt8LZpN.js","_app/immutable/chunks/YPXu6NWk.js","_app/immutable/entry/app.h45Ja9Kw.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
	
	nodes: [
		__memo(() => import('./nodes/0.js')),
		__memo(() => import('./nodes/1.js')),
		__memo(() => import('./nodes/2.js')),
		__memo(() => import('./nodes/3.js')),
		__memo(() => import('./nodes/4.js')),
		__memo(() => import('./nodes/5.js'))
	],
	remotes: {
		
	},
	routes: [
		{
			id: "/",
			pattern: /^\/$/,
			params: [],
			page: { layouts: [0,], errors: [1,], leaf: 2 },
			endpoint: null
		},
		{
			id: "/about",
			pattern: /^\/about\/?$/,
			params: [],
			page: { layouts: [0,], errors: [1,], leaf: 3 },
			endpoint: null
		},
		{
			id: "/contact",
			pattern: /^\/contact\/?$/,
			params: [],
			page: { layouts: [0,], errors: [1,], leaf: 4 },
			endpoint: null
		},
		{
			id: "/traditional-work",
			pattern: /^\/traditional-work\/?$/,
			params: [],
			page: { layouts: [0,], errors: [1,], leaf: 5 },
			endpoint: null
		}
	],
	prerendered_routes: new Set([]),
	matchers: async () => {
		return {};
	},
	server_assets: {}
}
})();
