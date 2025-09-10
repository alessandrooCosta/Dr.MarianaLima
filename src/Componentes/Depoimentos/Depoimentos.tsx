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
                Agendar pelo WhatsApp
            </a>
        </section>
    )
}

export default Depoimentos