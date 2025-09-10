import './ComoFunciona.css'

const passos = [
    {
        titulo: '1. Agende pelo WhatsApp',
        texto:
            'Conte o que seu pet precisa. Enviamos valores e orientações rápidas.',
        icone: '/imagens/icones/whatsapp1.svg',
        alt: 'Ícone WhatsApp',
    },
    {
        titulo: '2. Vamos até você',
        texto:
            'Consulta no conforto da sua casa. Menos estresse e mais bem-estar.',
        icone: '/imagens/icones/maps.svg',
        alt: 'Ícone de consulta',
    },
    {
        titulo: '3. Orientações e acompanhamento',
        texto:
            'Você recebe recomendações e, se necessário, receitas e retorno.',
        icone: '/imagens/icones/documentos.svg',
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
                href="https://wa.me/message/UJ4EABH6GT2EG1"
                aria-label="Agendar consulta via WhatsApp"
            >
                Agendar consulta
            </a>
            <p className="microcopy">Atendimento seg–sáb, 09h–19h. Respondemos em ~15 min.</p>
        </section>
    )
}
