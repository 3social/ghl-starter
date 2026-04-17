<svelte:head>
	<title>¡Gracias! Te contactamos pronto</title>
</svelte:head>

<main class="gracias">
	<div class="card">
		<div class="check">✓</div>
		<h1>¡Listo! Recibimos tu información.</h1>
		<p>Un asesor se comunicará contigo en las próximas <strong>24 horas</strong> para mostrarte la plataforma en vivo y responder todas tus preguntas.</p>
		<p class="sub">Mientras tanto, revisa tu correo — te enviaremos más detalles.</p>
		<a href="/" class="btn-back">← Volver al inicio</a>
	</div>
</main>

<style>
	:global(body) { font-family: 'Inter', sans-serif; margin: 0; background: #f8fafc; }

	.gracias {
		min-height: 100vh;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 40px 24px;
	}
	.card {
		background: #fff;
		border: 1px solid #e2e8f0;
		border-radius: 16px;
		padding: 56px 48px;
		max-width: 520px;
		width: 100%;
		text-align: center;
		box-shadow: 0 4px 24px rgba(0,0,0,.06);
	}
	.check {
		width: 72px;
		height: 72px;
		background: #dcfce7;
		color: #16a34a;
		font-size: 2rem;
		font-weight: 700;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 0 auto 28px;
	}
	h1 {
		font-size: 1.6rem;
		font-weight: 800;
		color: #0f172a;
		margin-bottom: 16px;
		line-height: 1.25;
	}
	p {
		font-size: .95rem;
		color: #64748b;
		line-height: 1.7;
		margin-bottom: 12px;
	}
	.sub { font-size: .875rem; color: #94a3b8; }
	.btn-back {
		display: inline-block;
		margin-top: 28px;
		color: #3b82f6;
		font-size: .9rem;
		font-weight: 600;
		text-decoration: none;
	}
	.btn-back:hover { text-decoration: underline; }
</style>
