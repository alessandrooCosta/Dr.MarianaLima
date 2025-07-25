import "./Sobre.css";

function SobreInfo() {
  return (
    <div>
      <section className="sobre-container">
        <h1>Sobre a Dra. Mariana Lima</h1>

        <div className="perfil">
          <img
            className="foto-perfil"
            src="\imagens\fotos\sobre.jpg"
            alt="Foto da Dra. com pet"
          />
          <h2>Dra. Mariana Lima</h2>
          <p className="crmv">CRMV 5142-DF</p>
          <p className="descricao">
            <p>Minha trajetória na Medicina Veterinária</p>
            <p>Minha paixão pela Medicina Veterinária nasceu ainda na adolescência, quando o Black – o cachorro da minha mãe, um SRD preto – ficou doente. Na época, eu fazia estágio no TRE-DF e, com meu próprio esforço, paguei pelo tratamento dele. Cuidei pessoalmente do Black em casa e, com o tempo, ele se recuperou totalmente.</p>
            <p>Foi durante esse processo de cuidado e dedicação que descobri o quanto me sentia realizada em ajudar e promover o bem-estar de um animal. Esse sentimento despertou em mim o desejo de seguir a carreira veterinária.</p>
            <p>Após concluir o ensino médio, dediquei-me intensamente aos estudos durante um ano de cursinho até ser aprovada na Universidade Estadual do Norte do Paraná (UENP). Em março de 2016, iniciei minha jornada acadêmica, deixando para trás minha família e amigos para realizar esse sonho. Em maio de 2021, finalizei a graduação, com a certeza de que havia escolhido o caminho certo.</p>
            <p>Desde então, atuo como médica veterinária na clínica de pequenos animais, somando mais de 4 anos de experiência, dedicação e amor pelo que faço. Sigo em constante evolução, com muitos planos e ambições profissionais, sempre buscando oferecer um atendimento ético, humanizado e comprometido com a saúde e qualidade de vida dos pets.</p>
          </p>
          <div className="icones-social">
            <a href="https://www.instagram.com/mbr.vet/" target="_blank"><img src="\imagens\icones\instagram.svg"></img></a>
            <a href="https://facebook.com" target="_blank"><img src="\imagens\icones\facebook.svg"></img></a>
            <a href="https://api.whatsapp.com/message/UJ4EABH6GT2EG1?autoload=1&app_absent=0" target="_blank"><img src="\imagens\icones\whatsapp1.svg"></img></a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SobreInfo;