<script lang="ts">
	/**
	 * Cabecera SEO de una página.
	 *
	 * Una página declara *qué es* —título, descripción, ruta, si debe indexarse
	 * y su grafo de datos estructurados— y este componente se encarga de emitir
	 * cada etiqueta en su forma correcta: canónica absoluta, Open Graph,
	 * Twitter Cards y JSON-LD. Ninguna página vuelve a escribir un `<meta>`
	 * a mano, así que ninguna puede olvidarse uno.
	 */
	import { SITE, absoluteUrl } from './site';

	let {
		title,
		description,
		path = '/',
		/** `true` en páginas sin valor de búsqueda (gracias, confirmaciones). */
		noindex = false,
		image = SITE.ogImage,
		/** JSON-LD ya serializado, normalmente vía `graph(...)`. */
		jsonLd = ''
	}: {
		title: string;
		description: string;
		path?: string;
		noindex?: boolean;
		image?: string;
		jsonLd?: string;
	} = $props();

	const canonical = $derived(absoluteUrl(path));
	const ogImageUrl = $derived(absoluteUrl(image));
	const robots = $derived(
		noindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1'
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonical} />
	<meta name="robots" content={robots} />

	<!-- Open Graph: cómo se ve el enlace en WhatsApp, Facebook y LinkedIn.
	     En LATAM el tráfico social llega por WhatsApp, así que esto no es
	     cosmético: es la miniatura que decide si el enlace se abre. -->
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={SITE.name} />
	<meta property="og:locale" content={SITE.locale} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={ogImageUrl} />
	<meta property="og:image:alt" content={title} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImageUrl} />

	{#if jsonLd}
		{@html `<script type="application/ld+json">${jsonLd}<\/script>`}
	{/if}
</svelte:head>
