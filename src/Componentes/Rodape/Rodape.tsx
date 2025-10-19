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
        href="https://www.instagram.com/mbr.vet/"
        className="instagram-float"
        rel="noopener noreferrer"
        aria-label="Contato via WhatsApp"
      >
        <img src="/imagens/icones/instagram_contatos.svg" alt="WhatsApp" />
      </a>

      <a
        href="https://wa.me/5561XXXXXXXX?text=Ol%C3%A1%20Dra.%20Mariana%2C%20gostaria%20de%20agendar%20uma%20consulta."
        className="whatsapp-float"
        rel="noopener noreferrer"
        aria-label="Contato via WhatsApp"
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