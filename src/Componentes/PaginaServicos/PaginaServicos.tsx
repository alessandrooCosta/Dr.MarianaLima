import { useState, useEffect } from 'react';
import "./PaginaServicos.css";

function PaginaServicos() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const services = [
        {
            icon: "/imagens/icones/consulta.svg",
            title: "Consulta Clínica",
            description: "Consultas no conforto da sua casa, com carinho e atenção individual para seu pet.",
            alt: "Ícone de estetoscópio veterinário"
        },
        {
            icon: "/imagens/icones/vacina.svg",
            title: "Vacinação",
            description: "Protocolos vacinais seguros e atualizados para o bem-estar do seu animal.",
            alt: "Ícone de seringa com vacina"
        },
        {
            icon: "/imagens/icones/exames.svg",
            title: "Exames Laboratoriais",
            description: "Coleta com agilidade e precisão para diagnósticos confiáveis.",
            alt: "Ícone de laboratório e amostra de sangue"
        },
        {
            icon: "/imagens/icones/exame.svg",
            title: "Exames de Imagem",
            description: "Parceria com clínicas de Raio-X e Ultrassonografia para exames detalhados.",
            alt: "Ícone de Raio-X"
        },
        {
            icon: "/imagens/icones/documentos.svg",
            title: "Documentação",
            description: "Emissão de atestados de saúde e guias de trânsito para que seu pet possa viajar com segurança e tranquilidade.",
            alt: "Ícone de documentação"
        },
        {
            icon: "/imagens/icones/curativos.svg",
            title: "Curativos e Medicação",
            description: "Aplicação de medicamentos e cuidados para recuperação rápida e segura.",
            alt: "Ícone de pronto-socorro ou cruz médica"
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
        <section className="servicoss" aria-label="Página de serviços oferecidos pela Dra. Mariana Lima">
            <h1>Serviços oferecidos</h1>
            <p>Cuidado personalizado no conforto da sua casa.</p>

            {/* Carrossel de Serviços */}
            <div className="carousel-container">
                <div
                    className="carousel-track"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    aria-label="Carrossel de serviços">
                    {services.map((service, index) => (
                        <div key={index} className="carousel-slide" aria-label={`Slide ${index + 1} de serviços`}>
                            <div className="cards">
                                <img src={service.icon} alt={service.title} />
                                <h2>{service.title}</h2>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="carousel-btn prev" onClick={prevSlide} aria-label="Slide anterior">
                    &lt;
                </button>
                <button className="carousel-btn next" onClick={nextSlide} aria-label="Próximo slide">
                    &gt;
                </button>

                <div className="carousel-dots" aria-label="Indicadores de slide">
                    {services.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>

            <div className="motivos" aria-label="Motivos para escolher o atendimento domiciliar">
                <h2>Por que escolher o atendimento domiciliar?</h2>
                <ul>
                    <li>Menos estresse para o seu pet</li>
                    <li>Conforto e segurança para você e seu pet</li>
                    <li>Horários flexíveis</li>
                    <li>Atendimento personalizado e exclusivo</li>
                </ul>
            </div>
            <a
                className="botao-whats"
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
    );
}

export default PaginaServicos;