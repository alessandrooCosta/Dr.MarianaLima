import { useState, useEffect } from 'react';
import './Servico.css';

function Servico() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const services = [
    {
      icon: '/imagens/icones/consulta.svg',
      title: 'Consultas',
      description: 'Consultas clínicas completas no conforto da sua casa, com todo o carinho e cuidado que seu pet merece.'
    },
    {
      icon: '/imagens/icones/vacina.svg',
      title: 'Vacinação',
      description: 'Protocolos vacinais atualizados e seguros para garantir a saúde e o bem-estar do seu animal de estimação.'
    },
    {
      icon: '/imagens/icones/exames.svg',
      title: 'Exames Laboratoriais',
      description: 'Coleta de exames laboratoriais com agilidade e precisão, garantindo diagnósticos rápidos e confiáveis.'
    },
    {
      icon: '/imagens/icones/exame.svg',
      title: 'Exames de Imagem',
      description: 'Realização de exames de imagem, como raio-X e ultrassonografia, para auxiliar em diagnósticos precisos e completos.'
    },
    {
      icon: '/imagens/icones/documentos.svg',
      title: 'Documentação',
      description: 'Emissão de atestados de saúde e guias de trânsito para que seu pet possa viajar com segurança e tranquilidade.'
    },
    {
      icon: '/imagens/icones/curativos.svg',
      title: 'Curativos e Medicamentos',
      description: 'Aplicação de medicamentos e cuidados com ferimentos, promovendo uma recuperação rápida e segura.'
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
    <section className="servicos">
      <h2>Serviços</h2>
      <div className="carousel-container">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <div className="card">
                <img src={service.icon} alt={service.title} />
                <h3>{service.title}</h3>
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
    </section>
  );
}

export default Servico;