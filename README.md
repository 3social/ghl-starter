# ghl-starter

Landing page de captación de leads para vender subcuentas GoHighLevel a $97/mes.

Live: **https://ghl.flamiagroup.com**

## ¿Qué hace?

1. Muestra la oferta con hero, features y social proof
2. Captura el lead (nombre, email, teléfono, negocio)
3. Envía los datos al webhook de GHL vía `fetch` POST → crea el contacto automáticamente
4. Redirige a la página de gracias

## Setup local

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

## Flujo de cambios

```bash
# 1. Editar src/
# 2. Compilar
npm run build

# 3. Git
git add .
git commit -m "descripción"
git push

# 4. Hostinger: subir contenido de build/ a public_html/build/
#    Siempre reemplazar: index.html, gracias.html, _app/
```

## Deploy en Hostinger

- Subdominio `ghl.flamiagroup.com` → document root: `public_html/build/`
- Site principal `flamiagroup.com` → `public_html/`
- Usar `https://ghl.flamiagroup.com` (sin `www`)

## Páginas

| Ruta | Descripción |
|------|-------------|
| `/` | Landing page principal |
| `/gracias` | Página de confirmación post-submit |
