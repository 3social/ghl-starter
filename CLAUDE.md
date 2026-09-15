# CLAUDE.md

## Propósito

Landing page de captación de leads para vender subcuentas GoHighLevel (GHL) a $97/mes.

**Flujo:**
1. Usuario ve la oferta (hero + features + social proof)
2. Llena el formulario (nombre, email, teléfono, negocio)
3. Submit hace `fetch` POST al webhook de GHL → crea contacto
4. Redirect a `/gracias`

## Tech Stack

- **Framework**: SvelteKit 2.x con Svelte 5 (runes mode)
- **Output**: Sitio estático via `@sveltejs/adapter-static`
- **Lenguaje**: TypeScript
- **Bundler**: Vite 8
- **Deploy**: Hostinger — subdominio `ghl.flamiagroup.com` apunta a `public_html/build/`

## Estructura

```
src/lib/seo/
  site.ts             # Fuente única: dominio, marca, precio, países servidos
  faq.ts              # Preguntas frecuentes → sección visible Y schema FAQPage
  schema.ts           # Constructores de JSON-LD (Organization, Service, FAQPage)
  Seo.svelte          # Emite title, description, canonical, OG, Twitter, JSON-LD
src/routes/
  +layout.ts          # export const prerender = true (requerido por adapter-static)
  +layout.svelte      # Carga fuente Inter de Google Fonts
  +page.svelte        # Landing page principal (hero + features + FAQ + form)
  gracias/
    +page.svelte      # Página de confirmación post-submit (noindex)
  sitemap.xml/
    +server.ts        # Genera build/sitemap.xml en tiempo de build
docs/
  SEO.md              # Estrategia: competencia, keywords, roadmap
build/                # Output estático listo para Hostinger (gitignoreado)
```

## Deploy en Hostinger

El subdominio `ghl.flamiagroup.com` tiene document root en `public_html/build/`.
El site principal `flamiagroup.com` vive en `public_html/`.

**Deploy automático desde Git.** Hostinger está conectado al repositorio y corre
el build en el servidor: un push a `main` reconstruye y publica el sitio solo.
**No se suben archivos por File Manager.**

```bash
npm run check        # Verificar antes de pushear
npm run build        # Verificar que compila (opcional, local)
git push origin main # Esto despliega
```

`build/` está gitignoreada a propósito: la genera Hostinger en cada deploy, no
el repositorio. Correr `npm run build` en local sirve solo para verificar.

Ajustes del build en hPanel (Avanzado → Git):
- Build command: `npm run build`
- Output directory: `build`

Todo lo que vive en `static/` —`.htaccess`, `robots.txt`, `logo.png`— se copia
automáticamente a `build/` durante el build, así que también se despliega solo.
Al añadir un archivo estático nuevo, va en `static/`, nunca directo al servidor.

**Nota:** `www.ghl.flamiagroup.com` no funciona — es normal, los subdominios no usan `www`.

## .htaccess

El `build/.htaccess` maneja:
1. Redirige `/gracias` → `gracias.html`
2. Fallback SPA a `index.html` para rutas que no existen como archivo
3. Sobreescribe el CSP restrictivo de Hostinger para que SvelteKit pueda ejecutar sus módulos JS
4. Compresión (mod_deflate) y caché de larga duración para los assets con hash

El orden de las reglas importa: las `RewriteCond` deben estar **antes** de la regla fallback, no antes de la regla de `/gracias`. Una `RewriteCond` solo aplica a la `RewriteRule` inmediatamente siguiente; si se ponen arriba, la regla de fallback queda sin condiciones y reescribe todos los assets hacia `index.html`.

## SEO

La estrategia completa —competencia, keywords, roadmap— vive en `docs/SEO.md`.

Reglas de oro al tocar el sitio:
- Ninguna página escribe `<meta>` a mano. Se usa `<Seo />` de `$lib/seo`.
- Un solo `<h1>` por página, y debe contener la keyword principal.
- Las FAQ se editan **solo** en `src/lib/seo/faq.ts`: el texto visible y el
  schema salen de ahí. Si se desincronizan, Google penaliza.
- Nunca añadir `review` ni `aggregateRating` al schema sin reseñas reales.
- Toda ruta indexable nueva se agrega a `src/routes/sitemap.xml/+server.ts`.

## Comandos

```bash
npm install          # Instalar dependencias
npm run dev          # Dev server (http://localhost:5173)
npm run build        # Genera carpeta build/ lista para subir
npm run preview      # Preview del build local
npm run check        # Type-check
```

## Webhook GHL

El formulario hace un `fetch` POST con este payload:

```json
{
  "nombre": "...",
  "email": "...",
  "telefono": "...",
  "negocio": "..."
}
```

Para obtener el webhook en GHL: Automation → Create Workflow → Trigger: Inbound Webhook → copiar la URL generada.
