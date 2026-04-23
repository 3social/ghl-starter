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
src/routes/
  +layout.ts          # export const prerender = true (requerido por adapter-static)
  +layout.svelte      # Carga fuente Inter de Google Fonts
  +page.svelte        # Landing page principal (hero + features + form)
  gracias/
    +page.svelte      # Página de confirmación post-submit
build/                # Output estático listo para Hostinger (gitignoreado)
```

## Deploy en Hostinger

El subdominio `ghl.flamiagroup.com` tiene document root en `public_html/build/`.
El site principal `flamiagroup.com` vive en `public_html/`.

**Flujo de deploy:**

```bash
npm run build        # Genera build/ con los archivos estáticos
```

Luego en Hostinger File Manager, reemplazar el contenido de `public_html/build/` con el nuevo `build/`:
- Siempre subir: `index.html`, `gracias.html`, carpeta `_app/` completa
- El `.htaccess` y `logo.png` solo si cambiaron

**Nota:** `www.ghl.flamiagroup.com` no funciona — es normal, los subdominios no usan `www`.

## .htaccess

El `build/.htaccess` maneja dos cosas:
1. Redirige `/gracias` → `gracias.html`
2. Fallback SPA a `index.html` para rutas que no existen como archivo
3. Sobreescribe el CSP restrictivo de Hostinger para que SvelteKit pueda ejecutar sus módulos JS

El orden de las reglas importa: las `RewriteCond` deben estar **antes** de la regla fallback, no antes de la regla de `/gracias`.

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
