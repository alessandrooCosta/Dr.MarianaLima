
import { Link } from 'react-router-dom'
import './Cabecalho.css'

function Cabecalho() {
  return (
    <header>
      <Link to="/">
        <div className="logo"><img src="\imagens\fotos\logo2.jpg" alt="Logo" /></div>
      </Link>
      <nav>
        <Link to="/sobre"><a>Sobre</a></Link>
        <Link to="/servicos"><a>Serviços</a></Link>
        <Link to="/contato"><a>Contato</a> </Link>
      </nav>
    </header>
  )
}

export default Cabecalho
