/**
 * Constructores de JSON-LD (schema.org).
 *
 * El objetivo no es "poner schema": es que Google entienda tres cosas que el
 * HTML por sí solo no comunica —quiénes somos, qué vendemos y a qué precio,
 * y qué preguntas respondemos— para poder mostrarnos en resultados
 * enriquecidos y en el panel de "Otras preguntas de los usuarios".
 *
 * Nada aquí se inventa. No hay reseñas ni calificaciones falsas: el markup
 * engañoso es la forma más rápida de perder los rich results para siempre.
 */

import { SITE, OFFER, AREA_SERVED, absoluteUrl } from './site';
import { FAQS } from './faq';

type JsonLd = Record<string, unknown>;

/** Identificadores estables para poder referenciar nodos entre sí con @id. */
const ID = {
	organization: `${SITE.url}/#organization`,
	website: `${SITE.url}/#website`,
	service: `${SITE.url}/#service`
} as const;

/** Quiénes somos. Ancla la marca; el resto del grafo cuelga de aquí. */
export function organizationSchema(): JsonLd {
	return {
		'@type': 'Organization',
		'@id': ID.organization,
		name: SITE.brand,
		alternateName: SITE.name,
		url: absoluteUrl('/'),
		logo: {
			'@type': 'ImageObject',
			url: absoluteUrl(SITE.logo)
		},
		description:
			'Flamia Group configura subcuentas de GoHighLevel en español para agencias, coaches y negocios locales en Costa Rica y Latinoamérica.',
		areaServed: AREA_SERVED.map((code) => ({ '@type': 'Country', identifier: code })),
		knowsLanguage: ['es', 'en']
	};
}

/** El sitio como entidad, para que la marca pueda ganar sitelinks. */
export function websiteSchema(): JsonLd {
	return {
		'@type': 'WebSite',
		'@id': ID.website,
		url: absoluteUrl('/'),
		name: SITE.name,
		inLanguage: SITE.lang,
		publisher: { '@id': ID.organization }
	};
}

/** Qué vendemos y por cuánto: la señal transaccional más importante. */
export function serviceSchema(): JsonLd {
	return {
		'@type': 'Service',
		'@id': ID.service,
		name: 'GHL Starter — Subcuenta de GoHighLevel configurada',
		serviceType: 'Implementación de CRM y automatización de marketing',
		description:
			`Subcuenta de GoHighLevel en español configurada en ${OFFER.deliveryHours} horas: CRM con pipeline, calendario de citas, workflows de automatización, templates de email y landing page, con setup profesional incluido.`,
		provider: { '@id': ID.organization },
		areaServed: AREA_SERVED.map((code) => ({ '@type': 'Country', identifier: code })),
		availableLanguage: ['es'],
		offers: {
			'@type': 'Offer',
			price: String(OFFER.price),
			priceCurrency: OFFER.currency,
			availability: 'https://schema.org/InStock',
			url: absoluteUrl('/'),
			priceSpecification: {
				'@type': 'UnitPriceSpecification',
				price: String(OFFER.price),
				priceCurrency: OFFER.currency,
				unitCode: 'MON', // por mes
				billingDuration: 1,
				billingIncrement: 1
			}
		}
	};
}

/** Las preguntas frecuentes, derivadas del mismo contenido visible. */
export function faqSchema(): JsonLd {
	return {
		'@type': 'FAQPage',
		mainEntity: FAQS.map(({ q, a }) => ({
			'@type': 'Question',
			name: q,
			acceptedAnswer: { '@type': 'Answer', text: a }
		}))
	};
}

/** Ruta de migas, para que la SERP muestre jerarquía en vez de una URL cruda. */
export function breadcrumbSchema(trail: { name: string; path: string }[]): JsonLd {
	return {
		'@type': 'BreadcrumbList',
		itemListElement: trail.map(({ name, path }, i) => ({
			'@type': 'ListItem',
			position: i + 1,
			name,
			item: absoluteUrl(path)
		}))
	};
}

/**
 * Empaqueta varios nodos en un solo `@graph`.
 *
 * Un bloque JSON-LD por página, no cinco: Google los une igual, y un grafo
 * único permite que los nodos se referencien por `@id` sin duplicar datos.
 */
export function graph(...nodes: JsonLd[]): string {
	return serialize({ '@context': 'https://schema.org', '@graph': nodes });
}

/**
 * Serializa a JSON seguro para incrustar en un `<script>`.
 *
 * Escapamos `<` para que una cadena que contenga `</script>` no pueda cerrar
 * la etiqueta antes de tiempo — el vector clásico de inyección en JSON-LD.
 */
function serialize(data: unknown): string {
	return JSON.stringify(data).replace(/</g, '\\u003c');
}
