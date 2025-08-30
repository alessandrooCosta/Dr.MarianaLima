/*
import "./Localizacao.css";

function Localizacao() {
  return (
    <section className="localizacao">
      <a
        href="https://www.google.com/maps?q=-15.793889,-47.882778"
        target="_blank" rel="noreferrer"
        aria-label="Abrir endereço no Google Maps"
      >
        <img
          src="/imagens/fotos/mapa-estatico-900.webp"
          alt="Mapa de Brasília com marcação do atendimento"
          width={900} height={506}
          loading="lazy" decoding="async"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: 12 }}
        />
      </a>
      <p>Atendimento em Brasília e região.</p>
    </section>
  );
}

export default Localizacao;
*/


import "./Localizacao.css";

import { useEffect, useRef, useState } from 'react';

function Localizacao() {
  const ref = useRef(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisivel(true); io.disconnect(); }
    }, { rootMargin: '200px' });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section className="localizacao" ref={ref}>
      {visivel ? (
        <iframe
          title="Mapa Google"
          src="https://www.google.com/maps?q=-15.793889,-47.882778&z=15&output=embed"
          loading="lazy"
          width="600" height="450"
          style={{ border: 0, width: '100%', borderRadius: 12 }}
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <img
          src=""
          alt="Mapa de Brasília (pré-visualização)"
          width={900} height={506}
          loading="lazy" decoding="async"
          style={{ maxWidth: '100%', height: 'auto', borderRadius: 12 }}
        />
      )}
      <p>Atendimento em Brasília e região.</p>
    </section>
  );
}


export default Localizacao;
