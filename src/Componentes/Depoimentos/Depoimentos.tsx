import './Depoimentos.css'

type Depoimento = {
    nome: string
    bairro: string
    texto: string
}

const depoimentos: Depoimento[] = [
    {
        nome: 'Emanuelle - Luppy',
        bairro: 'Planaltina',
        texto: 'Você é muito atenciosa ❤️ não tenho palavras pra lhe agradecer pela sua atenção com meu Luppy. ❤️',
    },
    {
        nome: 'Beatriz - Romeu',
        bairro: 'Planaltina',
        texto: 'Boa noite Doutora Mariana, passando para agradecer de coração pelo cuidado, atenção e carinho que vc teve e tem pelo nosso Romeu, sempre muito prestativa durante o tratamento da dermatite atópica do Romeu! Ver ele melhorando a cada dia e tendo uma vida mais confortável tem sido um alívio pra mim, aliás para a nossa família, e sei que isso só foi possível graças à sua dedicação, cuidado, interesse e profissionalismo... O nosso muito obrigada por tudo ❤️ Gratidão 🙏 Você é demais! Você é uma excelente Profissional, Grata. 🙏 ❤️😘',
    },
    {
        nome: 'Cleide - Luppy',
        bairro: 'Planaltina',
        texto: 'Dra Mariana, quão grata sou a Deus, por te encontrar no nosso caminho, obrigada por todo respeito e carinho comigo com nosso Luppyinho, ali estava uma família desesperada, vc nos acolheu, obrigada! Que Deus te abençoe.',
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
                            <strong>{d.nome} <span>• {d.bairro}</span></strong>
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