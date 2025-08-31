import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import Cabecalho from './Componentes/Cabecalho/Cabecalho'
import Rodape from './Componentes/Rodape/Rodape'

const Home = lazy(() => import('./Paginas/Home'))
const Sobre = lazy(() => import('./Paginas/Sobre'))
const Servicos = lazy(() => import('./Paginas/Servicos'))
const ComoFunciona = lazy(() => import('./Paginas/ComoFunciona'))
const Depoimentos = lazy(() => import('./Paginas/Depoimentos'))

function PageFallback() {
  return (
    <div
      className="route-fallback"
      aria-busy="true"
      aria-live="polite"
      style={{ minHeight: '40vh' }}
    >
    </div>
  )
}

function PrefetchOnIdle() {
  useEffect(() => {
    const run = () => {
      import('./Paginas/Sobre')
      import('./Paginas/Servicos')
      import('./Paginas/ComoFunciona')
      import('./Paginas/Depoimentos')
    }
    const ric: any = (window as any).requestIdleCallback || ((cb: any) => setTimeout(cb, 200))
    const id = ric(run)
    return () => {
      const c = (window as any).cancelIdleCallback
      if (c && id) c(id)
    }
  }, [])
  return null
}

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Cabecalho />
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <PrefetchOnIdle />
                  <Home />
                </>
              }
            />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/depoimentos" element={<Depoimentos />} />
            <Route path="/comofunciona" element={<ComoFunciona />} />
          </Routes>
        </Suspense>
        <Rodape />
      </BrowserRouter>
    </div>
  )
}



/* 

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

*/