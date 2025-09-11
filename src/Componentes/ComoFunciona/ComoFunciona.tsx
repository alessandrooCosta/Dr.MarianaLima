import './ComoFunciona.css'

const passos = [
    {
        titulo: '1. Agende pelo WhatsApp',
        texto:
            'Fale conosco pelo WhatsApp sobre as necessidades do seu pet. Enviamos valores e orientações de forma rápida e atenciosa.',
        icone: '/imagens/icones/whatsapp_comoFunciona.svg',
        alt: 'Ícone WhatsApp',
    },
    {
        titulo: '2. Vamos até você',
        texto:
            'Consulta no conforto da sua casa: menos estresse, mais bem-estar para o seu pet.',
        icone: '/imagens/icones/maps.svg',
        alt: 'Ícone de consulta',
    },
    {
        titulo: '3. Orientações e acompanhamento',
        texto:
            'Você recebe acompanhamento durante todo o tratamento do seu pet pelo WhatsApp, além de receitas e retorno, se necessário',
        icone: '/imagens/icones/acompanhamento.svg',
        alt: 'Ícone de documentos',
    },
]

export default function ComoFunciona() {
    return (
        <section className="como-funciona" aria-label="Como funciona o atendimento domiciliar">
            <h2>Como funciona</h2>
            <ol className="passos">
                {passos.map((p, i) => (
                    <li className="passo-card" key={i}>
                        <div className="passo-icone-wrap" role="img" aria-label={p.alt}>
                            <img src={p.icone} alt="" width={32} height={32} decoding="async" />
                        </div>
                        <h3>{p.titulo}</h3>
                        <p>{p.texto}</p>
                    </li>
                ))}
            </ol>

            {/* CTA primário no fim da seção */}
            <a
                className="btn-whatsapp passo-cta"
                aria-label="Agendar consulta via WhatsApp"
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
                Agendar consulta
            </a>
            <p className="microcopy">Atendimento seg–sáb, 09h–18h. Resposta em até 1h.</p>
        </section>
    )
}
