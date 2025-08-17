import { useState, useEffect } from 'react';
import "./PaginaServicos.css";

function PaginaServicos() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const services = [
        {
            icon: "/imagens/icones/consulta.svg",
            title: "Consulta Clínica",
            description: "Consultas no conforto da sua casa, com carinho e atenção individual para seu pet."
        },
        {
            icon: "/imagens/icones/vacina.svg",
            title: "Vacinação",
            description: "Protocolos vacinais seguros e atualizados para o bem-estar do seu animal."
        },
        {
            icon: "/imagens/icones/exames.svg",
            title: "Exames Laboratoriais",
            description: "Coleta com agilidade e precisão para diagnósticos confiáveis."
        },
        {
            icon: "/imagens/icones/exame.svg",
            title: "Exames de Imagem",
            description: "Parceria com clínicas de Raio-X e Ultrassonografia para exames detalhados."
        },
        {
            icon: "/imagens/icones/documentos.svg",
            title: "Documentação",
            description: "Atestados de saúde e guias de trânsito para viagens com seu pet."
        },
        {
            icon: "/imagens/icones/curativos.svg",
            title: "Curativos e Medicação",
            description: "Aplicação de medicamentos e cuidados para recuperação rápida e segura."
        }
    ];

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % services.length);
        }, 5000); // Muda a cada 5 segundos

        return () => clearInterval(interval);
    }, [isPaused, services.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % services.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
    };

    return (
        <section className="servicoss">
            <h1>Serviços oferecidos</h1>
            <p>Cuidado especializado no conforto da sua casa.</p>

            {/* Carrossel de Serviços */}
            <div className="carousel-container">
                <div
                    className="carousel-track"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {services.map((service, index) => (
                        <div key={index} className="carousel-slide">
                            <div className="cards">
                                <img src={service.icon} alt={service.title} />
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="carousel-btn prev" onClick={prevSlide}>
                    &lt;
                </button>
                <button className="carousel-btn next" onClick={nextSlide}>
                    &gt;
                </button>

                <div className="carousel-dots">
                    {services.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
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

            <a className="botao-whats" href="https://wa.me/5561999999999" target="_blank" rel="noopener noreferrer">
                Agendar pelo WhatsApp
            </a>
        </section>
    );
}

export default PaginaServicos;