import './Informacao.css'

function Informacao() {
    return (
        <section className="informacao" aria-label="Informações sobre a Dra. Mariana Lima">
            <img className="img" src="\imagens\fotos\img_info.avif" alt="Foto da Dra. Mariana Lima" />
            <div className="informacao-texto" aria-label="Texto informativo sobre a Dra. Mariana Lima">
                <h2>Dra. Mariana Lima, CRMV 5142-DF</h2>
                <p>Atua há mais de 4 anos na clínica médica de pequenos animais, com foco em cuidado, bem-estar e atenção individualizada.</p>
                <div className="icones-social" aria-label="Ícones de redes sociais">
                    <a href="https://www.instagram.com/mbr.vet/" target="_blank"><img src="\imagens\icones\instagram.svg" alt="Ícone do Instagram"></img></a>
                    <a href="https://facebook.com" target="_blank"><img src="\imagens\icones\facebook.svg" alt="Ícone do Facebook"></img></a>
                    <a href="https://api.whatsapp.com/message/UJ4EABH6GT2EG1?autoload=1&app_absent=0" target="_blank"><img src="\imagens\icones\whatsapp1.svg" alt="Ícone do Whatsapp"></img></a>
                </div>
            </div>
        </section>

    )
}

export default Informacao;