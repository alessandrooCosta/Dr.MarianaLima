import './Servico.css'

function Servico(){
    return(
        <section className="servicos">
            <h2>Serviços</h2>
           <div className="card-servico">
      <div className="card">
        <i><img src="..\..\..\public\imagens\icones\consulta.svg"></img></i>
        <h3>Consultas</h3>
        <p>Consultas clínicas completas no conforto da sua casa, com todo o carinho e cuidado que seu pet merece.</p>
      </div>
      <div className="card">
        <i><img src="..\..\..\public\imagens\icones\vacina.svg"></img></i>
        <h3>Vacinação</h3>
        <p>Protocolos vacinais atualizados e seguros para garantir a saúde e o bem-estar do seu animal de estimação.</p>
      </div>
      <div className="card">
        <i><img src="..\..\..\public\imagens\icones\exames.svg"></img></i>
        <h3>Exames Laboratoriais</h3>
        <p>Coleta de exames laboratoriais com agilidade e precisão, garantindo diagnósticos rápidos e confiáveis.</p>
      </div>
      <div className="card">
        <i><img src="..\..\..\public\imagens\icones\exame.svg"></img></i>
        <h3>Exames de Imagem</h3>
        <p>Realização de exames de imagem, como raio-X e ultrassonografia, para auxiliar em diagnósticos precisos e completos.</p>
      </div>
       <div className="card">
        <i><img src="..\..\..\public\imagens\icones\documentos.svg"></img></i>
        <h3>Documentação</h3>
        <p>Emissão de atestados de saúde e guias de trânsito para que seu pet possa viajar com segurança e tranquilidade.</p>
      </div>
       <div className="card">
        <i><img src="..\..\..\public\imagens\icones\curativos.svg"></img></i>
        <h3>Curativos e Medicamentos</h3>
        <p>Aplicação de medicamentos e cuidados com ferimentos, promovendo uma recuperação rápida e segura.</p>
      </div>
    </div>
        </section>
    )
}

export default Servico;