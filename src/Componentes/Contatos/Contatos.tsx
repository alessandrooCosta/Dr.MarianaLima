import "./Contatos.css"

function Contatos() {
    return (
        <section className="contato">
            <h1>Contatos</h1>
            <div className="contato-container">
                <div className="contato-opcoes">
                    <div className="cards">
                        <a href="https://wa.me/5561999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta" target="_blank">
                            <img src="\imagens\icones\whatsapp.svg" alt="Mensagem" />
                            <p>Whatssap</p>
                        </a>
                    </div>
                    <div className="cards">
                        <a href="https://wa.me/5561999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta" target="_blank">
                            <img src="\imagens\icones\instagram_contatos.svg" alt="Mensagem" />
                            <p>Instagram</p>
                        </a>
                    </div>
                    <div className="cards">
                        <a href="mailto:dra@exemplo.com" target="_blank">
                            <img src="\imagens\icones\email_contatos.svg" alt="Email" />
                            <p>Email</p>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contatos;