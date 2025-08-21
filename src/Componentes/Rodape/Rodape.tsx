import { useState, useEffect } from 'react';
import "./Rodape.css";

function Rodape() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <a
        href="https://api.whatsapp.com/message/UJ4EABH6GT2EG1?autoload=1&app_absent=0"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer" aria-label="Contato via WhatsApp"
      >
        <img src="/imagens/icones/whatsapp.svg" alt="WhatsApp" />
      </a>
      {showScrollButton && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
        >
          ↑
        </button>
      )}
      <footer aria-label="Rodapé do site">
        © 2025 Dra. Mariana Lima | CRMV 5142-DF | Todos os direitos reservados.
      </footer>
    </>
  );
}

export default Rodape;