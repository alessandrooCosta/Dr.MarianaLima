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
        <div className="logo" aria-label="Logo da Dra. Mariana Lima">
        </div>
      </Link>
      <div className={`nav ${menuAberto ? 'ativo' : ''}`} aria-label="Menu de navegação">
        <Link to="/" onClick={() => setMenuAberto(false)} className="nav-icon">
          <img src="/imagens/icones/home.svg" alt="Logo da Dra. Mariana Lima" />
        </Link>
        <Link to="/sobre" onClick={() => setMenuAberto(false)}>Sobre</Link>
        <Link to="/servicos" onClick={() => setMenuAberto(false)}>Serviços</Link>
      </div>
      <div className="hamburguer" onClick={toggleMenu} aria-label="Menu principal">
        <span className="linha"></span>
        <span className="linha"></span>
        <span className="linha"></span>
      </div>
    </header>
  );
}

export default Cabecalho;
