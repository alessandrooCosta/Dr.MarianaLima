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

