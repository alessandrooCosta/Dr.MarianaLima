
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cabecalho from './Componentes/Cabecalho/Cabecalho'
import Home from './Paginas/Home'
import Sobre from './Paginas/Sobre'
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
          <Route path="/servicos" element={<Servicos />} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </div>
  )
}

export default App
