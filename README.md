# ghl-starter

Landing page de captación de leads para vender subcuentas GoHighLevel a $97/mes.

## ¿Qué hace?

1. Muestra la oferta con hero, features y social proof
2. Captura el lead (nombre, email, teléfono, negocio)
3. Envía los datos al webhook de GHL vía `fetch` POST → crea el contacto automáticamente
4. Redirige a la página de gracias

## Setup

```bash
npm install
npm run dev       # http://localhost:5173
```

## Configurar el Webhook

Abre [src/routes/+page.svelte](src/routes/+page.svelte) y reemplaza en la línea 2:

```ts
const WEBHOOK_URL = 'YOUR_WEBHOOK_URL';
```

Para obtener la URL en GHL: **Automation → Create Workflow → Trigger: Inbound Webhook**.

## Build y Deploy en Hostinger

```bash
npm run build
```

Sube todo el contenido de la carpeta `build/` a `public_html/` en Hostinger via File Manager o FTP.

## Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Landing page principal |
| `/gracias` | Página de confirmación post-submit |
