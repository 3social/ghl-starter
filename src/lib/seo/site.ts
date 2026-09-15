/**
 * Fuente única de verdad del sitio.
 *
 * Todo lo que Google necesita saber sobre quiénes somos vive aquí: los meta
 * tags, el JSON-LD, el sitemap y el robots.txt leen de este archivo. Cambiar
 * el dominio o el precio en un solo lugar actualiza el SEO entero.
 */

export const SITE = {
	/** Sin barra final. Todas las URLs canónicas se construyen desde aquí. */
	url: 'https://ghl.flamiagroup.com',
	name: 'GHL Starter',
	brand: 'Flamia Group',
	locale: 'es_CR',
	lang: 'es',
	/** Imagen para compartir en redes (Open Graph / Twitter Cards). */
	ogImage: '/logo.png',
	logo: '/logo.png',
	themeColor: '#0f172a'
} as const;

/** La oferta, en datos. Alimenta el JSON-LD de Service y el copy del precio. */
export const OFFER = {
	price: 97,
	currency: 'USD',
	setupValue: 300,
	deliveryHours: 48
} as const;

/**
 * Mercados que servimos, en códigos ISO 3166-1.
 * Costa Rica primero: es nuestro mercado ancla y el de menor competencia.
 */
export const AREA_SERVED = [
	'CR', // Costa Rica
	'PA', // Panamá
	'GT', // Guatemala
	'SV', // El Salvador
	'HN', // Honduras
	'NI', // Nicaragua
	'MX', // México
	'CO', // Colombia
	'PE', // Perú
	'CL', // Chile
	'AR', // Argentina
	'EC', // Ecuador
	'DO', // República Dominicana
	'US' // Mercado hispano en EE. UU.
] as const;

/** Construye una URL absoluta a partir de una ruta interna. */
export function absoluteUrl(path = '/'): string {
	return path === '/' ? `${SITE.url}/` : `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`;
}
