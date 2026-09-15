import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		runes: ({ filename }) => (filename.split(/[/\\]/).includes('node_modules') ? undefined : true)
	},
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		prerender: {
			// `*` rastrea desde la raíz siguiendo enlaces. El sitemap no está
			// enlazado desde ninguna página (lo consume robots.txt, no un humano),
			// así que hay que nombrarlo explícitamente o nunca se genera.
			entries: ['*', '/sitemap.xml']
		}
	}
};

export default config;
