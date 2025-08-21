import "./Sobre.css";

function SobreInfo() {
  return (
    <div>
      <section className="sobre-container" aria-label="Sobre a Dra. Mariana Lima">
        <h1>Minha trajetória na Medicina Veterinária</h1>
        <div className="perfil" aria-label="Perfil da Dra. Mariana Lima">
          <img
            className="foto-perfil"
            src="\imagens\fotos\sobre.jpg"
            alt="Minha trajetória na Medicina Veterinária"
          />
          <h2>Dra. Mariana Lima</h2>
          <p className="crmv" aria-label="CRMV 5142-DF">CRMV 5142-DF</p>
          <p className="descricao" aria-label="Descrição da Dra. Mariana Lima">
            <p></p>
            <p>Minha paixão pela Medicina Veterinária nasceu ainda na adolescência, quando o Black – o cachorro da minha mãe, um SRD preto – ficou doente. Na época, eu fazia estágio no TRE-DF e, com meu próprio esforço, paguei pelo tratamento dele. Cuidei pessoalmente do Black em casa e, com o tempo, ele se recuperou totalmente.</p>
            <p>Foi durante esse processo de cuidado e dedicação que descobri o quanto me sentia realizada em ajudar e promover o bem-estar de um animal. Esse sentimento despertou em mim o desejo de seguir a carreira veterinária.</p>
            <p>Após concluir o ensino médio, dediquei-me intensamente aos estudos durante um ano de cursinho até ser aprovada na Universidade Estadual do Norte do Paraná (UENP). Em março de 2016, iniciei minha jornada acadêmica, deixando para trás minha família e amigos para realizar esse sonho. Em maio de 2021, finalizei a graduação, com a certeza de que havia escolhido o caminho certo.</p>
            <p>Desde então, atuo como medica veterinária na clínica médica de pequenos animais, somando mais de 4 anos de experiência, dedicação e amor pelo que faço. Sigo em constante evolução, com muitos planos e ambições profissionais, sempre buscando oferecer um atendimento ético, humanizado e comprometido com a saúde e qualidade de vida dos pets.</p>
          </p>
          <div className="icones-social" aria-label="Ícones de redes sociais">
            <a href="https://www.instagram.com/mbr.vet/" target="_blank"><img src="\imagens\icones\instagram.svg" alt="Ícone do Instagram"></img></a>
            <a href="https://facebook.com" target="_blank"><img src="\imagens\icones\facebook.svg" alt="Ícone do Facebook"></img></a>
            <a href="https://api.whatsapp.com/message/UJ4EABH6GT2EG1?autoload=1&app_absent=0" target="_blank"><img src="\imagens\icones\whatsapp1.svg" alt="Ícone do Whatsapp"></img></a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SobreInfo;