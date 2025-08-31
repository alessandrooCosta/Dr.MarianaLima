import './Depoimentos.css'

type Depoimento = {
    nome: string
    bairro: string
    texto: string
}

const depoimentos: Depoimento[] = [
    {
        nome: 'Carla S.',
        bairro: 'Águas Claras',
        texto:
            'A Dra. Mariana foi muito atenciosa com minha gatinha. Atendimento em casa deixou tudo mais tranquilo!',
    },
    {
        nome: 'Rafael M.',
        bairro: 'Asa Sul',
        texto:
            'Chegou no horário, explicou tudo com calma e já aplicou as vacinas. Recomendo demais!',
    },
    {
        nome: 'Juliana P.',
        bairro: 'Guará',
        texto:
            'Meu cão é idoso e ficou super calmo durante a consulta. Excelente profissional!',
    },
]

function Depoimentos() {
    return (
        <section className="depoimentos" aria-label="Depoimentos de clientes">
            <h2>O que dizem os tutores</h2>
            <ul className="depo-lista">
                {depoimentos.map((d, i) => (
                    <li key={i} className="depo-card">
                        <blockquote>
                            <p>“{d.texto}”</p>
                        </blockquote>
                        <footer>
                            <strong>{d.nome}</strong> <span>• {d.bairro}</span>
                        </footer>
                    </li>
                ))}
            </ul>
            <a
                className="btn-whatsapp depo-cta"
                href="https://wa.me/message/UJ4EABH6GT2EG1"
                aria-label="Agendar consulta via WhatsApp"
            >
                Agendar pelo WhatsApp
            </a>
        </section>
    )
}

export default Depoimentos