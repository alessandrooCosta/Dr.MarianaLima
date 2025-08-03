import './Banner.css'

function Banner() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-texto">
          <div className="logo-container">
            <img src="/imagens/fotos/logo_cabecalho.jpg" alt="Logo da Dra. Mariana Lima" className="logo-hero" />
          </div>
          <h1>Olá, eu sou a Dra. Mariana Lima!</h1>
          <p>Atendimento veterinário domiciliar: mais do que uma consulta, uma experiência tranquila e carinhosa para o seu pet.</p>
          <a href="https://api.whatsapp.com/message/UJ4EABH6GT2EG1?autoload=1&app_absent=0" target="_blank">
            <button className="btn-whatsapp">Agendar pelo WhatsApp</button>
          </a>
        </div>
        <div className="hero-imagem">
          <img src="\imagens\fotos\banner.jpg" alt="Dra. [Nome] com pet"></img>
        </div>
      </div>
    </section>
  );
}

export default Banner;