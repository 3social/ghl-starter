/**
 * Preguntas frecuentes.
 *
 * Una sola fuente, dos consumidores: la sección visible de la landing y el
 * JSON-LD de tipo FAQPage. Nunca pueden desincronizarse, y eso importa:
 * Google penaliza el schema que no coincide con el contenido visible.
 *
 * Cada pregunta está redactada como la escribe un usuario en el buscador
 * (long tail conversacional), no como la escribiría un vendedor.
 */

export type Faq = {
	/** La pregunta, en las palabras exactas de la búsqueda. */
	q: string;
	/** Respuesta en texto plano: lo que ve el usuario y lo que lee el crawler. */
	a: string;
};

export const FAQS: Faq[] = [
	{
		q: '¿Cuánto cuesta GoHighLevel en Costa Rica y LATAM?',
		a: 'La cuenta propia de GoHighLevel cuesta desde $97/mes en el plan Starter, $297/mes en Unlimited y $497/mes en Agency Pro, siempre en dólares. Con GHL Starter de Flamia Group pagas $97/mes por una subcuenta ya configurada, sin importar si operas desde Costa Rica, Panamá, México o cualquier país de LATAM: no necesitas tarjeta internacional de empresa ni contratar el plan de agencia.'
	},
	{
		q: '¿Qué diferencia hay entre una subcuenta y una cuenta de agencia de GoHighLevel?',
		a: 'La cuenta de agencia es el contenedor: cuesta $297 o $497 al mes y sirve para crear y administrar clientes. La subcuenta es el espacio de trabajo real donde vive tu CRM, tus embudos, tu calendario y tus automatizaciones. Si eres un solo negocio, no necesitas pagar la cuenta de agencia: te basta una subcuenta dentro de la nuestra por $97/mes.'
	},
	{
		q: '¿GoHighLevel está en español?',
		a: 'Sí. La interfaz de GoHighLevel está traducida al español desde 2023 y es totalmente funcional en ese idioma. Además, tu configuración, tu onboarding 1:1 y todo el soporte de Flamia Group son en español, que es donde suele estar la verdadera barrera de entrada para los equipos en Costa Rica y LATAM.'
	},
	{
		q: '¿Puedo conectar WhatsApp a mi subcuenta de GoHighLevel?',
		a: 'Sí. GoHighLevel se integra con WhatsApp para conversar con tus leads desde el mismo lugar donde vive tu CRM, de modo que cada mensaje queda registrado en la ficha del contacto y puede disparar automatizaciones de seguimiento. Lo dejamos conectado durante el setup.'
	},
	{
		q: '¿Cuánto tarda la configuración de mi subcuenta?',
		a: 'Entre 24 y 48 horas hábiles desde que recibimos tus datos y tu marca. En ese plazo entregamos la subcuenta con el pipeline de ventas, el calendario de citas, los workflows básicos, los templates de email y tu site o landing page listos para operar.'
	},
	{
		q: '¿Necesito conocimientos técnicos para usar GoHighLevel?',
		a: 'No. La configuración técnica corre por nuestra cuenta e incluye un onboarding 1:1 de 30 minutos donde recorremos la plataforma contigo. Tú solo administras tus conversaciones y tu pipeline; nosotros dejamos armado todo lo demás.'
	},
	{
		q: '¿Hay contrato de permanencia o cláusula de salida?',
		a: 'No hay contrato de permanencia. GHL Starter es mes a mes y puedes cancelar cuando quieras. El setup profesional, valorado en $300, va incluido y no se cobra aparte ni se factura al cancelar.'
	},
	{
		q: '¿Puedo migrar después a mi propia cuenta de GoHighLevel?',
		a: 'Sí. Si tu operación crece y decides tener tu propia cuenta de agencia, puedes comprarla con nuestro link de afiliados y te configuramos la subcuenta sin costo adicional, un trabajo que normalmente vale $300.'
	},
	{
		q: '¿Sirve GoHighLevel para negocios fuera de Costa Rica?',
		a: 'Sí. Trabajamos con coaches, consultores, agencias y negocios locales en toda Latinoamérica y con el mercado hispano en Estados Unidos. La plataforma es internacional y la facturación es en dólares, así que el país desde el que operas no cambia el precio de $97/mes.'
	}
];
