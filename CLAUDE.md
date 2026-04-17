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
- **Deploy**: Hostinger (subir carpeta `build/` a `public_html`)

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

## Pendiente

- [ ] Reemplazar `YOUR_WEBHOOK_URL` en `src/routes/+page.svelte` línea 2 con el webhook real de GHL
- [ ] Correr `npm run build` después de agregar el webhook
- [ ] Subir carpeta `build/` a Hostinger → `public_html/`

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
