import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Cabecalho.css';

function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <header>
      <Link to="/">
        <div className="logo">
          <img src="/imagens/fotos/logo_cabecalho.jpg" alt="Logo" />
        </div>
      </Link>

      <div className={`nav ${menuAberto ? 'ativo' : ''}`}>
        <Link to="/sobre" onClick={() => setMenuAberto(false)}>Sobre</Link>
        <Link to="/servicos" onClick={() => setMenuAberto(false)}>Serviços</Link>
        <Link to="/contato" onClick={() => setMenuAberto(false)}>Contato</Link>
      </div>

      <div className="hamburguer" onClick={toggleMenu}>
        <span className="linha"></span>
        <span className="linha"></span>
        <span className="linha"></span>
      </div>
    </header>
  );
}

export default Cabecalho;
