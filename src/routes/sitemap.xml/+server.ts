import { absoluteUrl } from '$lib/seo/site';

/** El sitemap se genera en build y se sirve como archivo estático. */
export const prerender = true;

/**
 * Rutas indexables del sitio.
 *
 * `/gracias` no está aquí a propósito: es una página de confirmación sin
 * valor de búsqueda, y si Google la indexa la gente puede aterrizar en ella
 * desde la SERP, lo que ensucia la medición de conversiones. Va con
 * `noindex` en su propia cabecera.
 */
const ROUTES: { path: string; changefreq: string; priority: string }[] = [
	{ path: '/', changefreq: 'weekly', priority: '1.0' }
];

export function GET() {
	const lastmod = new Date().toISOString().slice(0, 10);

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(
	({ path, changefreq, priority }) => `	<url>
		<loc>${absoluteUrl(path)}</loc>
		<lastmod>${lastmod}</lastmod>
		<changefreq>${changefreq}</changefreq>
		<priority>${priority}</priority>
	</url>`
).join('\n')}
</urlset>
`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
}
