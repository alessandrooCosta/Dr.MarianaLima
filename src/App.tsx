
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cabecalho from './Componentes/Cabecalho/Cabecalho'
// Adjust the import path and extension if needed
import Home from './Paginas/Home'
import Sobre from './Paginas/Sobre'
import Contato from './Paginas/Contato'
import Servicos from './Paginas/Servicos'
import Rodape from './Componentes/Rodape/Rodape'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Cabecalho />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          {/* <Route path="/contato" element={<Contato />} />    */}
          <Route path="/servicos" element={<Servicos />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </div>
  )
}

export default App
