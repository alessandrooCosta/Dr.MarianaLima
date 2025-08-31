import './Informacao.css'

function Informacao() {
    return (
        <section className="informacao" aria-label="Informações sobre a Dra. Mariana Lima">
            <picture>
                <source
                    type="image/avif"
                    srcSet="
                    /imagens/fotos/img_info-600.avif 600w,
                    /imagens/fotos/img_info-900.avif 900w,
                    /imagens/fotos/img_info-1200.avif 1200w
                    "
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 300px, 600px"
                />
                <img
                    className="img"
                    src="/imagens/fotos/img_info-1200.avif"
                    alt="Foto da Dra. Mariana Lima"
                    width={600}
                    height={600}
                    decoding="async"
                    loading="lazy"
                />
            </picture>
            <div className="informacao-texto" aria-label="Texto informativo sobre a Dra. Mariana Lima">
                <h2>Dra. Mariana Lima, CRMV 5142-DF</h2>
                <p>Atua há mais de 4 anos na clínica médica de pequenos animais, com foco em cuidado, bem-estar e atenção individualizada.</p>
                <div className="icones-social" aria-label="Ícones de redes sociais">
                    <a href="https://www.instagram.com/mbr.vet/" target="_blank"><img src="\imagens\icones\instagram.svg" alt="Ícone do Instagram"></img></a>
                    <a href="https://www.facebook.com/share/15x4RQgr2b/" target="_blank"><img src="\imagens\icones\facebook.svg" alt="Ícone do Facebook"></img></a>
                    <a
                        href="https://wa.me/5561XXXXXXXX?text=Ol%C3%A1%20Dra.%20Mariana%2C%20gostaria%20de%20agendar%20uma%20consulta."
                        onClick={(e) => {
                            e.preventDefault();
                            const phone = "5561991492264";
                            const text = "Olá Dra. Mariana, gostaria de agendar uma consulta.";
                            const encoded = encodeURIComponent(text);
                            window.location.href = `whatsapp://send?phone=${phone}&text=${encoded}`;
                            setTimeout(() => {
                                window.location.href = `https://api.whatsapp.com/message/UJ4EABH6GT2EG1?autoload=1&app_absent=0`;
                            }, 900);
                        }}
                    >
                        <img src="\imagens\icones\whatsapp1.svg" alt="Ícone do Whatsapp"></img>
                    </a>
                </div>
            </div>
        </section>

    )
}

export default Informacao;