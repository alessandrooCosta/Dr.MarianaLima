import './Informacao.css'

function Informacao() {
    return (
        <section className="informacao">
            <img className="img" src="\imagens\fotos\banner2.jpg" alt="Foto da Dra. Mariana Lima" />
            <div className="informacao-texto">
                <h2>Dra. Mariana Lima, CRMV 5142-DF</h2>
                <p>Atua na clínica médica de pequenos animais, com foco em cuidado, bem-estar e atenção individualizada.</p>
                <div className="social">
                    <a href="https://www.instagram.com/mbr.vet/" target="_blank"><img src="\imagens\icones\instagram.svg"></img></a>
                    <a href="https://facebook.com" target="_blank"><img src="\imagens\icones\facebook.svg"></img></a>
                    <a href="https://api.whatsapp.com/message/UJ4EABH6GT2EG1?autoload=1&app_absent=0" target="_blank"><img src="\imagens\icones\whatsapp1.svg"></img></a>
                </div>
            </div>
        </section>

    )
}

export default Informacao;