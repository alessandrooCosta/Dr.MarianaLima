import './Banner.css'

function Banner() {
  return (
    <section className="hero" aria-label="Apresentação da Dra. Mariana Lima">
      <div className="hero-content">
        <div className="hero-texto">
          <div className="logo-container">
            <img src="/imagens/fotos/logo_banner2.jpg" alt="Dra. Mariana Lima - Médica Veterinária - Atendimento Domiciliar" className="logo-hero" />
          </div>
          <h1>Olá, eu sou a Dra. Mariana Lima!</h1>
          <p>Atendimento veterinário domiciliar: mais do que uma consulta, uma experiência tranquila e carinhosa para o seu pet.</p>
          <a href="https://api.whatsapp.com/message/UJ4EABH6GT2EG1?autoload=1&app_absent=0" target="_blank" aria-label="Agendar consulta via WhatsApp" rel="noreferrer">
            <button className="btn-whatsapp" >Agendar pelo WhatsApp</button>
          </a>
        </div>
        <div className="hero-imagem">
          <img src="\imagens\fotos\banner_principal.jpg" alt="Dra. Mariana Lima, médica veterinária"></img>
        </div>
      </div>
    </section>
  );
}

export default Banner;