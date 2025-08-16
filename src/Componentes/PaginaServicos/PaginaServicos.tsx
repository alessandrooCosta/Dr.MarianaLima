import "./PaginaServicos.css";

function PaginaServicos() {
    return (
        <section className="servicoss">
            <h1>Serviços oferecidos</h1>
            <p>Cuidado especializado no conforto da sua casa.</p>

            <div className="grid-servicos">
                <div className="cards">
                    <img src="/imagens/icones/consulta.svg" alt="Consulta" />
                    <h2>Consulta Clínica</h2>
                    <p>Consultas no conforto da sua casa, com carinho e atenção individual para seu pet.</p>
                </div>

                <div className="cards">
                    <img src="/imagens/icones/vacina.svg" alt="Vacinação" />
                    <h2>Vacinação</h2>
                    <p>Protocolos vacinais seguros e atualizados para o bem-estar do seu animal.</p>
                </div>

                <div className="cards">
                    <img src="/imagens/icones/exames.svg" alt="Exames" />
                    <h2>Exames Laboratoriais</h2>
                    <p>Coleta com agilidade e precisão para diagnósticos confiáveis.</p>
                </div>

                <div className="cards">
                    <img src="/imagens/icones/exame.svg" alt="Imagem" />
                    <h2>Exames de Imagem</h2>
                    <p>Parceria com clínicas de Raio-X e Ultrassonografia para exames detalhados.</p>
                </div>

                <div className="cards">
                    <img src="/imagens/icones/documentos.svg" alt="Documentação" />
                    <h2>Documentação</h2>
                    <p>Atestados de saúde e guias de trânsito para viagens com seu pet.</p>
                </div>

                <div className="cards">
                    <img src="/imagens/icones/curativos.svg" alt="Curativos" />
                    <h2>Curativos e Medicação</h2>
                    <p>Aplicação de medicamentos e cuidados para recuperação rápida e segura.</p>
                </div>
            </div>

            <div className="motivos">
                <h2>Por que escolher o atendimento domiciliar?</h2>
                <ul>
                    <li>Menos estresse para o seu pet</li>
                    <li>Conforto e segurança para você e seu pet</li>
                    <li>Horários flexíveis</li>
                    <li>Atendimento personalizado e exclusivo</li>
                </ul>
            </div>

            <a className="botao-whats" href="https://wa.me/5561999999999" target="_blank">
                Agendar pelo WhatsApp
            </a>
        </section>
    );
}

export default PaginaServicos;