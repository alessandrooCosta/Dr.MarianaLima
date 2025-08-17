import { useState, useEffect } from 'react';
import "./Contatos.css";

function Contatos() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const contactOptions = [
        {
            icon: "/imagens/icones/whatsapp.svg",
            title: "WhatsApp",
            link: "https://wa.me/5561999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta",
            alt: "WhatsApp"
        },
        {
            icon: "/imagens/icones/instagram_contatos.svg",
            title: "Instagram",
            link: "https://instagram.com/sua-conta",
            alt: "Instagram"
        },
        {
            icon: "/imagens/icones/email_contatos.svg",
            title: "Email",
            link: "mailto:dra@exemplo.com",
            alt: "Enviar email"
        }
    ];

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % contactOptions.length);
        }, 5000); // Muda a cada 5 segundos

        return () => clearInterval(interval);
    }, [isPaused, contactOptions.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % contactOptions.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + contactOptions.length) % contactOptions.length);
    };

    return (
        <section className="contato">
            <h1>Contatos</h1>

            <div className="carousel-container">
                <div
                    className="carousel-track"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {contactOptions.map((option, index) => (
                        <div key={index} className="carousel-slide">
                            <div className="cards">
                                <a href={option.link} target="_blank" rel="noopener noreferrer">
                                    <img src={option.icon} alt={option.alt} />
                                    <p>{option.title}</p>
                                </a>
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
                    {contactOptions.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentSlide ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Contatos;