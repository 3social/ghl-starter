# Estrategia SEO — ghl.flamiagroup.com

> Documento vivo. Cada decisión de código en `src/lib/seo/` responde a una
> línea de este archivo. Si cambia la estrategia, cambia primero aquí.

---

## 1. El diagnóstico en una frase

No podemos ganarle a los sitios de contenido en **"qué es GoHighLevel"**,
pero nadie está peleando por **"GoHighLevel en Costa Rica, configurado, a $97"**
— y esa es exactamente la búsqueda de quien ya tiene la tarjeta en la mano.

Una landing page no gana keywords informacionales contra dominios con cientos
de artículos. Sí gana keywords transaccionales con modificador geográfico,
porque el competidor allí no es un blog: es el vacío.

---

## 2. Análisis de competencia

### 2.1 Clúster A — Contenido informacional en español (afiliados)

| Competidor | Qué posee | Modelo |
|---|---|---|
| `gabrielneuman.com` | "GoHighLevel en español", "precios" | Afiliado + formación |
| `milybarahona.com` | "GoHighLevel en LATAM", "precios 2026" | Afiliado + consultoría |
| `marketingnativo.com` | "planes y precios GHL", "agencia bilingüe" | Afiliado + servicios |
| `stackagencia.com` | "qué es GoHighLevel", CRM para agencias | Agencia |
| `gohighlevelespana.es` / `gohighlevel-precios.com` | EEAT de nicho, comparativas | Afiliado puro |
| `appcritic.es` | Reseñas de software | Medio |

**Su fortaleza:** profundidad temática, antigüedad de dominio, backlinks.
**Su debilidad:** son *reseñas*, no *ofertas*. Responden "¿qué es?" y luego
mandan al usuario a comprar a GoHighLevel. Nadie entrega la implementación.
Y ninguno tiene intención local: hablan a "LATAM" en abstracto.

### 2.2 Clúster B — CRM SaaS compitiendo en LATAM

| Competidor | Ángulo |
|---|---|
| Clientify | "CRM todo en uno" para pymes en español |
| Leadsales | CRM sobre WhatsApp, multi-agente |
| Kommo | Pipeline kanban + WhatsApp |
| SyncManager | CRM con IA, localizado por país y moneda |
| ComparaSoftware CR | Directorio: "TOP 5 CRM en Costa Rica" |

**Su fortaleza:** presupuesto, marca, páginas por país.
**Su debilidad:** venden software, no resultado. El usuario queda solo frente
a una plataforma vacía. Nuestro diferencial —*configurado y entregado en 48 h*—
es literalmente lo que a ellos les falta.

### 2.3 Clúster C — Local Costa Rica

`costaricacrm.com`, `dmalatamcr.com`, `dsamuro.com`, `comparasoftware.cr`.
Compiten por "agencia de marketing digital Costa Rica" y "CRM Costa Rica",
pero **ninguno menciona GoHighLevel como servicio entregable.**

### 2.4 El hueco que ocupamos

> **Intención transaccional + modificador geográfico + precio explícito.**

Es el cruce donde el clúster A no llega (no vende implementación), el B no
llega (no es local ni "hecho por ti") y el C no llega (no conoce GHL).
Es un nicho estrecho — y por eso es ganable con una sola página bien hecha.

---

## 3. Mapa de keywords

Prioridad = (intención de compra × viabilidad) ÷ competencia.
No perseguimos volumen: perseguimos personas con tarjeta.

### 3.1 Primarias — la página entera apunta aquí

| Keyword | Intención | Dónde vive |
|---|---|---|
| gohighlevel en español | Comercial | `<title>`, H1, H2 de features |
| subcuenta gohighlevel | Transaccional | H1, H2, FAQ, schema `Service` |
| gohighlevel costa rica | Transaccional local | `<title>`, badge, FAQ, `areaServed` |
| gohighlevel precio / cuánto cuesta | Comercial | H2 "¿por qué cuesta $97?", FAQ #1 |
| crm todo en uno español | Comercial | Subtítulo del hero |

### 3.2 Secundarias — soportan con H2/H3 y copy

`gohighlevel para agencias` · `crm para pymes costa rica` ·
`automatización de marketing latam` · `crm con whatsapp` ·
`gohighlevel configurado` · `alternativa a pagar $497 gohighlevel` ·
`embudos de venta gohighlevel` · `crm para coaches y consultores`

### 3.3 Long tail — capturada íntegramente por la sección FAQ

Cada pregunta de `src/lib/seo/faq.ts` es una keyword long-tail redactada
como la escribe un humano en el buscador. Objetivo: aparecer en el panel
*"Otras preguntas de los usuarios"*, que es tráfico gratis con intención alta.

- ¿cuánto cuesta gohighlevel en costa rica?
- ¿diferencia entre subcuenta y cuenta de agencia gohighlevel?
- ¿gohighlevel está en español?
- ¿se puede conectar whatsapp a gohighlevel?
- ¿necesito saber programar para usar gohighlevel?
- ¿gohighlevel tiene contrato de permanencia?
- ¿puedo migrar mi subcuenta gohighlevel?

### 3.4 Lo que NO perseguimos (y por qué)

`qué es gohighlevel`, `gohighlevel review`, `gohighlevel vs hubspot`.
Informacionales, dominadas por dominios con años de contenido, y traen
curiosos en vez de compradores. Entran en el roadmap de blog (§7), no en
la landing.

> **Nota sobre `<meta name="keywords">`:** no se incluye deliberadamente.
> Google lo ignora desde 2009 y su presencia solo le regala tu mapa de
> keywords a la competencia.

---

## 4. Etiquetas meta implementadas

Todo se emite desde `src/lib/seo/Seo.svelte`. Ninguna página escribe un
`<meta>` a mano, así que ninguna puede olvidarse uno.

### `/` (landing)

```
Title:       GoHighLevel en Español Costa Rica | Subcuenta CRM $97/mes   (57 car.)
Description: Subcuenta de GoHighLevel en español lista en 48 h por $97/mes:
             CRM, embudos, citas y automatizaciones. Setup incluido
             (valor $300). Costa Rica y LATAM.                          (152 car.)
Canonical:   https://ghl.flamiagroup.com/
Robots:      index, follow, max-image-preview:large, max-snippet:-1
```

**Por qué funciona el título:** entra completo en la SERP sin truncarse (bajo
60 caracteres), pone la keyword principal al inicio, incluye el modificador
geográfico y cierra con el precio — el precio en el título sube el CTR porque
filtra: quien hace clic ya aceptó el número.

**Por qué funciona la descripción:** no es un resumen, es la oferta. Lleva la
promesa (48 h), el precio, el stack y el ancla de valor ($300). La descripción
no posiciona, pero el CTR que genera sí.

### `/gracias`

```
Robots: noindex, nofollow
```

Deliberado. Si Google indexa la página de gracias, llega tráfico orgánico que
nunca llenó el formulario y cada visita se cuenta como conversión: se corrompe
la única métrica que importa en una landing. Bloqueada además en `robots.txt`.

---

## 5. Esquema de encabezados

Un solo H1. Cada H2 abre un clúster semántico. Cada H3 cuelga de su H2.
El esquema es el índice que lee Google para entender de qué trata la página.

```
H1  Tu subcuenta de GoHighLevel en español, lista en 48 h por $97/mes
├── H2  ¿Qué es una subcuenta de GoHighLevel y por qué cuesta $97 al mes?
├── H2  Todo lo que incluye tu subcuenta de GoHighLevel en español
│   ├── H3  CRM con pipeline de ventas visual
│   ├── H3  Calendario de citas online
│   ├── H3  Automatizaciones y workflows
│   ├── H3  Embudos y landing pages que convierten
│   ├── H3  Email marketing con templates listos
│   └── H3  Setup profesional y onboarding 1:1
├── H2  GHL Starter en números                      (sr-only: completa el esquema)
├── H2  ¿Prefieres comprar tu propia cuenta de GoHighLevel?
├── H2  ¿Para quién es GHL Starter? Agencias, coaches y negocios locales
├── H2  Preguntas frecuentes sobre GoHighLevel en español
│   └── H3 × 9                                      (una por keyword long tail)
└── H2  Solicita tu subcuenta de GoHighLevel — te contactamos hoy mismo
```

El H1 anterior ("El CRM todo-en-uno que tu negocio necesita") no contenía la
palabra *GoHighLevel*. Era buen copy y SEO nulo: el encabezado más importante
de la página no mencionaba el producto que se vende.

---

## 6. Datos estructurados (JSON-LD)

Un único bloque `@graph` en la home — `src/lib/seo/schema.ts`.

| Nodo | Qué le dice a Google | Resultado buscado |
|---|---|---|
| `Organization` | Quién es Flamia Group y dónde opera | Knowledge panel, señal de marca |
| `WebSite` | El sitio como entidad | Sitelinks |
| `Service` + `Offer` | Qué vendemos, a $97 USD, en 14 países | Precio visible en la SERP |
| `FAQPage` | 9 preguntas con su respuesta | Panel "Otras preguntas" |

**Regla innegociable:** no hay `aggregateRating` ni `review` porque no tenemos
reseñas verificables. El markup inventado es la vía más rápida a una acción
manual de Google y a perder los rich results de forma permanente.

**Seguridad:** el serializador escapa `<` a `<`, de modo que ningún texto
de FAQ pueda cerrar la etiqueta `<script>` antes de tiempo.

---

## 7. Roadmap — lo que sigue

La landing ya está optimizada al máximo de lo que una sola URL permite.
El crecimiento a partir de aquí viene de más URLs y de autoridad.

**Fase 1 — Verificación (día 1, manual)**
1. Alta en Google Search Console; verificar `ghl.flamiagroup.com` por DNS.
2. Enviar `https://ghl.flamiagroup.com/sitemap.xml`.
3. Probar la home en el *Rich Results Test* de Google (debe detectar FAQ + Service).
4. Alta en Bing Webmaster Tools (importa desde GSC en un clic).

**Fase 2 — Local (semana 1)**
5. Crear el perfil de **Google Business Profile** de Flamia Group en Costa Rica.
   Es la palanca de SEO local con mayor retorno y aún no existe.
6. Añadir NAP real (dirección, teléfono, horario) y promover el schema de
   `Organization` a `LocalBusiness` — ya está preparado para ello.

**Fase 3 — Contenido (mes 1-3)**
7. Abrir `/blog` y atacar el clúster informacional que hoy cedemos:
   *qué es GoHighLevel*, *GHL vs HubSpot*, *GoHighLevel y WhatsApp*,
   *cómo montar un embudo en GHL*. Cada artículo enlaza a la landing.
8. Páginas por país: `/costa-rica`, `/panama`, `/mexico`, `/colombia`.
   Contenido genuinamente distinto por país (moneda, casos, regulación),
   nunca la misma página con el nombre cambiado — eso es contenido duplicado.
9. Al existir más de un idioma o país, añadir `hreflang`.

**Fase 4 — Autoridad (continuo)**
10. Enlaces desde directorios de agencias de Costa Rica y del ecosistema GHL.
11. Testimonios reales con consentimiento → entonces, y solo entonces,
    activar `review` en el schema.

---

## 8. Cómo mantenerlo

| Si cambias... | Toca este archivo |
|---|---|
| Dominio, marca, precio, países | `src/lib/seo/site.ts` |
| Preguntas frecuentes | `src/lib/seo/faq.ts` (actualiza texto y schema a la vez) |
| Datos estructurados | `src/lib/seo/schema.ts` |
| Meta tags de una página | La prop del componente `<Seo />` en esa página |
| Rutas nuevas indexables | `src/routes/sitemap.xml/+server.ts` |

El sitemap se genera en cada `npm run build`. La fecha `lastmod` se toma del
día de compilación, así que redesplegar mantiene la señal de frescura.
