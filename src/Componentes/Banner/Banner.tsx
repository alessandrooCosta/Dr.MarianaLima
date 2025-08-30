import './Banner.css'

function Banner() {
  return (
    <section className="hero" aria-label="Apresentação da Dra. Mariana Lima">
      <div className="hero-content">
        <div className="hero-texto">
          <div className="logo-container">
            <img className="logo-hero"
              src="/imagens/fotos/logo_banner2.avif"
              alt="Dra. Mariana Lima - Médica Veterinária - Atendimento Domiciliar"
              decoding="async"
              loading="lazy"
            />
          </div>
          <h1>Olá, eu sou a Dra. Mariana Lima!</h1>
          <p>Atendimento veterinário domiciliar: mais do que uma consulta, uma experiência tranquila e carinhosa para o seu pet.</p>
          <a
            href="https://api.whatsapp.com/message/UJ4EABH6GT2EG1?autoload=1&app_absent=0"
            target="_blank"
            rel="noreferrer"
            aria-label="Agendar consulta via WhatsApp"
            className="btn-whatsapp"
          >
            Agendar pelo WhatsApp
          </a>
        </div>
        <div className="hero-imagem">
          <picture>
            <source
              type="image/avif"
              srcSet="
        /imagens/fotos/banner_principal-600.avif 600w,
        /imagens/fotos/banner_principal-900.avif 900w,
        /imagens/fotos/banner_principal-1200.avif 1200w
      "
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 1200px"
            />
            <img
              src="/imagens/fotos/banner_principal-1200.jpg" /* fallback */
              alt="Dra. Mariana Lima em atendimento veterinário domiciliar"
              width={1200}
              height={800}
              decoding="async"
              loading="eager"          /* LCP */
              style={{ maxWidth: '100%', height: 'auto', borderRadius: 20 }}
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

export default Banner;