/*

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
*/

import { Link } from 'react-router-dom'
import { useEffect, useState, useCallback } from 'react'
import './Cabecalho.css'

export default function Cabecalho() {
  const [menuAberto, setMenuAberto] = useState(false)

  const fecharMenu = useCallback(() => setMenuAberto(false), [])
  const toggleMenu = useCallback(() => setMenuAberto((v) => !v), [])

  // Fechar com ESC
  useEffect(() => {
    if (!menuAberto) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') fecharMenu()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuAberto, fecharMenu])

  return (
    <header>
      {/* Logo como link para Home, com IMG e ALT (sem ARIA em div) */}
      <Link to="/" className="logo" aria-label="Ir para a página inicial">
        <img
          src="/imagens/fotos/logo.avif"
          alt="Logo da Dra. Mariana Lima"
          width={100}
          height={90}
          decoding="async"
          {...{ fetchpriority: "high" }}
        />
      </Link>

      {/* Botão hamburguer com ARIA correto */}
      <button
        className={`hamburguer ${menuAberto ? 'ativo' : ''}`}
        aria-label={menuAberto ? 'Fechar menu principal' : 'Abrir menu principal'}
        aria-expanded={menuAberto}
        aria-controls="menu-principal"
        onClick={toggleMenu}
        type="button"
      >
        <span className="linha" aria-hidden="true"></span>
        <span className="linha" aria-hidden="true"></span>
        <span className="linha" aria-hidden="true"></span>
      </button>

      {/* Navegação sem ARIA-label em div; use <nav> com id referenciado */}
      <nav id="menu-principal" className={`nav ${menuAberto ? 'ativo' : ''}`} aria-label="Menu de navegação principal">
        <ul>
          <li>
            <Link to="/" onClick={fecharMenu} className="nav-icon" aria-label="Início">
              <img src="/imagens/icones/home.svg" alt="Início" width={24} height={24} decoding="async" />
            </Link>
          </li>
          <li>
            <Link to="/sobre" onClick={fecharMenu}>Sobre</Link>
          </li>
          <li>
            <Link to="/servicos" onClick={fecharMenu}>Serviços</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
