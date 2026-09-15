<script lang="ts">
	import Seo from '$lib/seo/Seo.svelte';
	import { FAQS } from '$lib/seo/faq';
	import { graph, organizationSchema, websiteSchema, serviceSchema, faqSchema } from '$lib/seo/schema';

	const jsonLd = graph(organizationSchema(), websiteSchema(), serviceSchema(), faqSchema());

	const WEBHOOK_URL = 'https://personaldev-n8n.aaqnec.easypanel.host/webhook/landing-ghl-venta';

	let nombre = $state('');
	let email = $state('');
	let telefono = $state('');
	let negocio = $state('');
	let loading = $state(false);
	let error = $state('');

	async function handleSubmit(e: SubmitEvent) {
		e.preventDefault();
		loading = true;
		error = '';

		try {
			await fetch(WEBHOOK_URL, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ nombre, email, telefono, negocio })
			});
			window.location.href = '/gracias';
		} catch {
			error = 'Hubo un error. Intenta de nuevo.';
			loading = false;
		}
	}
</script>

<Seo
	title="GoHighLevel en Español Costa Rica | Subcuenta CRM $97/mes"
	description="Subcuenta de GoHighLevel en español lista en 48 h por $97/mes: CRM, embudos, citas y automatizaciones. Setup incluido (valor $300). Costa Rica y LATAM."
	path="/"
	{jsonLd}
/>

<main>
	<!-- NAVBAR -->
	<header class="navbar">
		<div class="container">
			<a href="/" class="logo-link">
				<img
					src="/logo.png"
					alt="Flamia Group — subcuentas de GoHighLevel en español"
					class="logo-img"
					width="140"
					height="40"
				/>
			</a>
			<span class="navbar-tagline">Un servicio de Flamiagroup</span>
		</div>
	</header>

	<!-- HERO -->
	<section class="hero">
		<div class="container">
			<div class="badge">GoHighLevel en español · Costa Rica y LATAM</div>
			<h1>
				Tu subcuenta de GoHighLevel en español,<br /><span
					>lista en 48 h por <em>$97/mes</em></span
				>
			</h1>
			<p class="subtitle">
				El CRM todo-en-uno para agencias, coaches, consultores y negocios locales en Costa Rica y
				toda Latinoamérica.<br />
				Capta leads, automatiza seguimientos por WhatsApp y email, y cierra más clientes — sin complicaciones
				técnicas.
			</p>
			<a href="#form" class="btn-hero">Quiero mi subcuenta GHL →</a>
			<p class="hero-sub">Setup profesional incluido · Valor $300 · Sin contratos</p>
		</div>
	</section>

	<!-- WHAT IS GHL -->
	<section class="what">
		<div class="container">
			<div class="what-inner">
				<div class="what-text">
					<h2>¿Qué es una subcuenta de GoHighLevel y por qué cuesta $97 al mes?</h2>
					<p>
						GoHighLevel (GHL) es la plataforma #1 usada por agencias de marketing en todo el mundo.
						Una <strong>subcuenta</strong> es tu propio espacio dentro de GHL, completamente configurado
						con tu marca, tu pipeline y tus automatizaciones — listo para usar desde el primer día.
					</p>
					<p>
						En lugar de pagar $497/mes por una cuenta propia, accedes a todas las funciones
						por solo <strong>$97/mes</strong> con nuestro plan GHL Starter.
					</p>
				</div>
				<div class="what-box">
					<p class="what-label">GHL Starter incluye</p>
					<ul class="include-list">
						<li><span>✓</span> 1 Subcuenta GHL configurada</li>
						<li><span>✓</span> Pipeline de ventas personalizado</li>
						<li><span>✓</span> Calendario de citas integrado</li>
						<li><span>✓</span> Workflows de automatización básicos</li>
						<li><span>✓</span> Templates de Email</li>
						<li><span>✓</span> Site básico o landing page</li>
						<li><span>✓</span> Setup profesional incluido <em>(valor $300)</em></li>
						<li><span>✓</span> Onboarding 1:1 de 30 minutos</li>
					</ul>
					<div class="price-tag">
						<span class="price-amount">$97</span>
						<span class="price-period">/mes</span>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- FEATURES -->
	<section class="features">
		<div class="container">
			<h2>Todo lo que incluye tu subcuenta de GoHighLevel en español</h2>
			<div class="grid">
				<div class="feature-card">
					<span class="icon">📊</span>
					<h3>CRM con pipeline de ventas visual</h3>
					<p>Ve exactamente en qué etapa está cada prospecto. Mueve deals con drag & drop y cierra más ventas.</p>
				</div>
				<div class="feature-card">
					<span class="icon">📅</span>
					<h3>Calendario de citas online</h3>
					<p>Tus clientes agendan directamente en tu calendario. Sin emails de ida y vuelta ni dobles reservas.</p>
				</div>
				<div class="feature-card">
					<span class="icon">🤖</span>
					<h3>Automatizaciones y workflows</h3>
					<p>Seguimientos automáticos por email y SMS cuando alguien llena un form, agenda o no aparece.</p>
				</div>
				<div class="feature-card">
					<span class="icon">🚀</span>
					<h3>Embudos y landing pages que convierten</h3>
					<p>Página web o landing page lista para capturar leads, mostrar tu servicio y convertir visitantes.</p>
				</div>
				<div class="feature-card">
					<span class="icon">📧</span>
					<h3>Email marketing con templates listos</h3>
					<p>Templates profesionales listos para enviar campañas, recordatorios y secuencias de nurturing.</p>
				</div>
				<div class="feature-card">
					<span class="icon">🎯</span>
					<h3>Setup profesional y onboarding 1:1</h3>
					<p>Configuramos todo por ti y te damos 30 minutos de onboarding para que arranques sin fricciones.</p>
				</div>
			</div>
		</div>
	</section>

	<!-- SOCIAL PROOF -->
	<section class="proof">
		<div class="container">
			<h2 class="sr-only">GHL Starter en números</h2>
			<div class="proof-grid">
				<div class="stat"><strong>$300</strong><span>Setup incluido gratis</span></div>
				<div class="stat"><strong>$97/mes</strong><span>Todo incluido</span></div>
				<div class="stat"><strong>48h</strong><span>Tiempo de setup</span></div>
			</div>
		</div>
	</section>

	<!-- AFFILIATE OFFER -->
	<section class="affiliate">
		<div class="container">
			<div class="affiliate-inner">
				<div class="affiliate-badge">Opción alternativa</div>
				<h2>¿Prefieres comprar tu propia cuenta de GoHighLevel?</h2>
				<p>
					Compra GoHighLevel a través de nuestro link de afiliados y <strong>te configuramos una subcuenta lista para operar</strong> — sin costo adicional.<br />
					Un setup profesional que normalmente vale <em>$300</em>, incluido por comprar con nosotros.
				</p>
				<div class="affiliate-steps">
					<div class="affiliate-step">
						<span class="step-num">1</span>
						<p>Compra tu cuenta GHL con nuestro link</p>
					</div>
					<div class="affiliate-step">
						<span class="step-num">2</span>
						<p>Escríbenos y confirmamos tu compra</p>
					</div>
					<div class="affiliate-step">
						<span class="step-num">3</span>
						<p>Configuramos tu subcuenta en 48h</p>
					</div>
				</div>
				<a href="https://www.gohighlevel.com/?fp_ref=flamiagroup78" target="_blank" rel="noopener noreferrer" class="btn-affiliate">
					Comprar GHL con nuestro link →
				</a>
				<p class="affiliate-note">
					Al comprar con nuestro link recibes el setup completo de tu subcuenta — valor real $300 — incluido sin costo.
				</p>
			</div>
		</div>
	</section>

	<!-- WHO IS IT FOR -->
	<section class="who">
		<div class="container">
			<h2>¿Para quién es GHL Starter? Agencias, coaches y negocios locales</h2>
			<div class="who-grid">
				<div class="who-card">🧑‍💼<p>Coaches y consultores que quieren un sistema profesional para captar y gestionar clientes.</p></div>
				<div class="who-card">🏢<p>Agencias pequeñas que necesitan un CRM para gestionar su propio pipeline sin pagar $497/mes.</p></div>
				<div class="who-card">🏪<p>Negocios locales que quieren automatizar sus seguimientos y dejar de perder leads por falta de respuesta.</p></div>
			</div>
		</div>
	</section>

	<!-- FAQ -->
	<section class="faq" id="faq">
		<div class="container">
			<h2>Preguntas frecuentes sobre GoHighLevel en español</h2>
			<p class="faq-intro">
				Las dudas que más nos escriben agencias y negocios de Costa Rica y LATAM antes de contratar.
			</p>
			<div class="faq-list">
				{#each FAQS as faq (faq.q)}
					<details class="faq-item">
						<summary>
							<h3>{faq.q}</h3>
							<span class="faq-chevron" aria-hidden="true"></span>
						</summary>
						<p>{faq.a}</p>
					</details>
				{/each}
			</div>
			<p class="faq-cta">
				¿Te queda otra duda? <a href="#form">Escríbenos y te respondemos hoy mismo</a>.
			</p>
		</div>
	</section>

	<!-- FORM -->
	<section class="form-section" id="form">
		<div class="container">
			<div class="form-wrapper">
				<div class="form-copy">
					<h2>Solicita tu subcuenta de GoHighLevel — te contactamos hoy mismo</h2>
					<p>Déjanos tus datos y un asesor te mostrará la plataforma en vivo y resolverá todas tus dudas.</p>
					<ul class="checklist">
						<li>✓ Setup profesional incluido ($300 de valor)</li>
						<li>✓ Sin contratos de permanencia</li>
						<li>✓ Onboarding 1:1 de 30 minutos</li>
						<li>✓ Cancela cuando quieras</li>
					</ul>
				</div>
				<form onsubmit={handleSubmit}>
					<div class="field">
						<label for="nombre">Nombre completo *</label>
						<input id="nombre" type="text" bind:value={nombre} placeholder="Juan Pérez" required />
					</div>
					<div class="field">
						<label for="email">Correo electrónico *</label>
						<input id="email" type="email" bind:value={email} placeholder="juan@empresa.com" required />
					</div>
					<div class="field">
						<label for="telefono">Teléfono / WhatsApp *</label>
						<input id="telefono" type="tel" bind:value={telefono} placeholder="+1 555 000 0000" required />
					</div>
					<div class="field">
						<label for="negocio">Nombre de tu negocio</label>
						<input id="negocio" type="text" bind:value={negocio} placeholder="Mi Empresa S.A." />
					</div>
					{#if error}
						<p class="error-msg">{error}</p>
					{/if}
					<button type="submit" class="btn-submit" disabled={loading}>
						{loading ? 'Enviando...' : 'Quiero mi plataforma por $97/mes →'}
					</button>
					<p class="disclaimer">Al enviar aceptas que un asesor se comunique contigo.</p>
				</form>
			</div>
		</div>
	</section>

	<!-- FOOTER -->
	<footer>
		<div class="container">
			<p>© {new Date().getFullYear()} · Todos los derechos reservados.</p>
		</div>
	</footer>
</main>

<style>
	:global(*, *::before, *::after) { box-sizing: border-box; margin: 0; padding: 0; }
	:global(body) { font-family: 'Inter', sans-serif; color: #111; background: #fff; }
	:global(html) { scroll-behavior: smooth; }

	.container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }

	/* HERO */
	.hero {
		background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%);
		color: #fff;
		padding: 100px 0 80px;
		text-align: center;
	}
	.badge {
		display: inline-block;
		background: rgba(255,255,255,0.15);
		border: 1px solid rgba(255,255,255,0.25);
		color: #93c5fd;
		font-size: 13px;
		font-weight: 600;
		letter-spacing: .5px;
		padding: 6px 16px;
		border-radius: 100px;
		margin-bottom: 24px;
		text-transform: uppercase;
	}
	h1 {
		font-size: clamp(2rem, 5vw, 3.2rem);
		font-weight: 800;
		line-height: 1.15;
		margin-bottom: 20px;
	}
	h1 span { display: block; color: #60a5fa; }
	h1 em { font-style: normal; color: #facc15; }
	.subtitle {
		font-size: 1.1rem;
		color: #cbd5e1;
		max-width: 600px;
		margin: 0 auto 36px;
		line-height: 1.7;
	}
	.btn-hero {
		display: inline-block;
		background: #facc15;
		color: #0f172a;
		font-weight: 700;
		font-size: 1rem;
		padding: 16px 36px;
		border-radius: 8px;
		text-decoration: none;
		transition: background .2s, transform .2s;
	}
	.btn-hero:hover { background: #fbbf24; transform: translateY(-2px); }


	/* Utilidad: texto real, legible por lectores de pantalla y por Google,
	   pero fuera del flujo visual. Se usa para completar el esquema de
	   encabezados donde el diseño no pide un título visible. */
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border: 0;
	}

	/* FAQ */
	.faq { padding: 80px 0; background: #f8fafc; }
	.faq h2 {
		text-align: center;
		font-size: clamp(1.4rem, 3vw, 1.9rem);
		font-weight: 700;
		color: #0f172a;
		margin-bottom: 12px;
	}
	.faq-intro {
		text-align: center;
		color: #64748b;
		font-size: 1rem;
		line-height: 1.7;
		max-width: 620px;
		margin: 0 auto 40px;
	}
	.faq-list {
		max-width: 780px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.faq-item {
		background: #fff;
		border: 1px solid #e2e8f0;
		border-radius: 12px;
		overflow: hidden;
		transition: border-color .2s, box-shadow .2s;
	}
	.faq-item[open] {
		border-color: #cbd5e1;
		box-shadow: 0 4px 16px rgba(15, 23, 42, .06);
	}
	.faq-item summary {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		padding: 20px 24px;
		cursor: pointer;
		list-style: none;
	}
	.faq-item summary::-webkit-details-marker { display: none; }
	.faq-item summary:hover h3 { color: #2563eb; }
	.faq-item summary h3 {
		font-size: 1rem;
		font-weight: 600;
		line-height: 1.5;
		color: #0f172a;
		margin: 0;
		transition: color .2s;
	}
	.faq-chevron {
		flex-shrink: 0;
		width: 10px;
		height: 10px;
		border-right: 2px solid #94a3b8;
		border-bottom: 2px solid #94a3b8;
		transform: rotate(45deg) translateY(-25%);
		transition: transform .2s;
	}
	.faq-item[open] .faq-chevron { transform: rotate(225deg) translateY(-25%); }
	.faq-item p {
		padding: 0 24px 22px;
		margin: 0;
		font-size: .95rem;
		line-height: 1.75;
		color: #475569;
	}
	.faq-cta {
		text-align: center;
		margin-top: 36px;
		font-size: .95rem;
		color: #64748b;
	}
	.faq-cta a { color: #2563eb; font-weight: 600; text-decoration: none; }
	.faq-cta a:hover { text-decoration: underline; }

	/* FEATURES */
	.features { padding: 80px 0; background: #f8fafc; }
	.features h2 {
		text-align: center;
		font-size: clamp(1.5rem, 3vw, 2rem);
		font-weight: 700;
		margin-bottom: 48px;
		color: #0f172a;
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 24px;
	}
	.feature-card {
		background: #fff;
		border: 1px solid #e2e8f0;
		border-radius: 12px;
		padding: 28px;
		transition: box-shadow .2s, transform .2s;
	}
	.feature-card:hover { box-shadow: 0 8px 30px rgba(0,0,0,.08); transform: translateY(-3px); }
	.icon { font-size: 2rem; display: block; margin-bottom: 14px; }
	.feature-card h3 { font-size: 1rem; font-weight: 700; margin-bottom: 8px; color: #0f172a; }
	.feature-card p { font-size: .9rem; color: #64748b; line-height: 1.6; }

	/* PROOF */
	.proof { background: #0f172a; padding: 48px 0; }
	.proof-grid {
		display: flex;
		justify-content: center;
		gap: 64px;
		flex-wrap: wrap;
		text-align: center;
	}
	.stat strong { display: block; font-size: 2rem; font-weight: 800; color: #facc15; }
	.stat span { font-size: .9rem; color: #94a3b8; margin-top: 4px; display: block; }

	/* FORM */
	.form-section { padding: 80px 0; background: #fff; }
	.form-wrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 64px;
		align-items: center;
	}
	@media (max-width: 768px) {
		.form-wrapper { grid-template-columns: 1fr; gap: 40px; }
	}
	.form-copy h2 { font-size: clamp(1.4rem, 3vw, 1.9rem); font-weight: 700; color: #0f172a; margin-bottom: 16px; }
	.form-copy p { color: #64748b; line-height: 1.7; margin-bottom: 24px; }
	.checklist { list-style: none; display: flex; flex-direction: column; gap: 10px; }
	.checklist li { font-size: .95rem; color: #0f172a; font-weight: 500; }

	form { display: flex; flex-direction: column; gap: 16px; }
	.field { display: flex; flex-direction: column; gap: 6px; }
	label { font-size: .85rem; font-weight: 600; color: #374151; }
	input {
		padding: 12px 16px;
		border: 1.5px solid #d1d5db;
		border-radius: 8px;
		font-size: .95rem;
		font-family: inherit;
		transition: border-color .2s;
		outline: none;
	}
	input:focus { border-color: #3b82f6; }
	.btn-submit {
		background: #0f172a;
		color: #fff;
		font-weight: 700;
		font-size: .95rem;
		padding: 15px;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		transition: background .2s, transform .2s;
		font-family: inherit;
		margin-top: 4px;
	}
	.btn-submit:hover:not(:disabled) { background: #1e3a5f; transform: translateY(-1px); }
	.btn-submit:disabled { opacity: .65; cursor: not-allowed; }
	.disclaimer { font-size: .78rem; color: #9ca3af; text-align: center; }
	.error-msg { color: #dc2626; font-size: .875rem; font-weight: 500; }

	/* HERO sub */
	.hero-sub { font-size: .8rem; color: #64748b; margin-top: 14px; }

	/* WHAT IS GHL */
	.what { padding: 80px 0; background: #fff; }
	.what-inner {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 56px;
		align-items: start;
	}
	@media (max-width: 768px) { .what-inner { grid-template-columns: 1fr; gap: 40px; } }
	.what-text h2 { font-size: clamp(1.4rem, 3vw, 1.9rem); font-weight: 700; color: #0f172a; margin-bottom: 16px; }
	.what-text p { font-size: .95rem; color: #64748b; line-height: 1.75; margin-bottom: 14px; }
	.what-box {
		background: #f8fafc;
		border: 1px solid #e2e8f0;
		border-radius: 16px;
		padding: 32px;
	}
	.what-label { font-size: .75rem; font-weight: 700; text-transform: uppercase; letter-spacing: .5px; color: #94a3b8; margin-bottom: 18px; }
	.include-list { list-style: none; display: flex; flex-direction: column; gap: 11px; margin-bottom: 28px; }
	.include-list li { font-size: .9rem; color: #1e293b; display: flex; gap: 10px; align-items: baseline; }
	.include-list li span { color: #16a34a; font-weight: 700; flex-shrink: 0; }
	.include-list li em { font-style: normal; color: #94a3b8; font-size: .8rem; }
	.price-tag { display: flex; align-items: baseline; gap: 4px; border-top: 1px solid #e2e8f0; padding-top: 20px; }
	.price-amount { font-size: 2.8rem; font-weight: 800; color: #0f172a; }
	.price-period { font-size: 1rem; color: #64748b; font-weight: 500; }

	/* WHO */
	.who { padding: 64px 0; background: #f8fafc; }
	.who h2 { text-align: center; font-size: clamp(1.4rem, 3vw, 1.9rem); font-weight: 700; color: #0f172a; margin-bottom: 36px; }
	.who-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; }
	.who-card {
		background: #fff;
		border: 1px solid #e2e8f0;
		border-radius: 12px;
		padding: 28px 24px;
		font-size: 2rem;
		text-align: center;
	}
	.who-card p { font-size: .9rem; color: #64748b; line-height: 1.65; margin-top: 12px; }

	/* NAVBAR */
	.navbar {
		background: #fff;
		border-bottom: 1px solid #e2e8f0;
		padding: 14px 0;
		position: sticky;
		top: 0;
		z-index: 100;
	}
	.navbar .container { display: flex; align-items: center; gap: 14px; }
	.logo-link { display: inline-block; flex-shrink: 0; }
	.logo-img { height: 36px; width: auto; display: block; }
	.navbar-tagline {
		font-size: .8rem;
		color: #94a3b8;
		border-left: 1px solid #e2e8f0;
		padding-left: 14px;
	}

	/* AFFILIATE */
	.affiliate { padding: 80px 0; background: #f0f9ff; border-top: 1px solid #bae6fd; border-bottom: 1px solid #bae6fd; }
	.affiliate-inner { max-width: 700px; margin: 0 auto; text-align: center; }
	.affiliate-badge {
		display: inline-block;
		background: #0ea5e9;
		color: #fff;
		font-size: 12px;
		font-weight: 700;
		letter-spacing: .5px;
		padding: 5px 14px;
		border-radius: 100px;
		text-transform: uppercase;
		margin-bottom: 20px;
	}
	.affiliate h2 { font-size: clamp(1.4rem, 3vw, 1.9rem); font-weight: 700; color: #0f172a; margin-bottom: 16px; }
	.affiliate > .container > .affiliate-inner > p { color: #475569; line-height: 1.75; margin-bottom: 36px; font-size: .97rem; }
	.affiliate p em { font-style: normal; font-weight: 700; color: #0f172a; }
	.affiliate-steps {
		display: flex;
		justify-content: center;
		gap: 24px;
		flex-wrap: wrap;
		margin-bottom: 36px;
	}
	.affiliate-step {
		background: #fff;
		border: 1px solid #bae6fd;
		border-radius: 12px;
		padding: 20px 18px;
		width: 180px;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 10px;
	}
	.step-num {
		width: 36px;
		height: 36px;
		border-radius: 50%;
		background: #0ea5e9;
		color: #fff;
		font-weight: 800;
		font-size: 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-shrink: 0;
	}
	.affiliate-step p { font-size: .85rem; color: #334155; line-height: 1.5; text-align: center; margin: 0; }
	.btn-affiliate {
		display: inline-block;
		background: #0ea5e9;
		color: #fff;
		font-weight: 700;
		font-size: 1rem;
		padding: 15px 36px;
		border-radius: 8px;
		text-decoration: none;
		transition: background .2s, transform .2s;
		margin-bottom: 16px;
	}
	.btn-affiliate:hover { background: #0284c7; transform: translateY(-2px); }
	.affiliate-note { font-size: .8rem; color: #64748b; }

	/* FOOTER */
	footer { background: #f8fafc; border-top: 1px solid #e2e8f0; padding: 24px 0; text-align: center; }
	footer p { font-size: .85rem; color: #94a3b8; }
</style>
