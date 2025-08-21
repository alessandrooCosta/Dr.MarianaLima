import "./Localizacao.css";

function Localizacao() {
  return (
    <section className="localizacao" aria-label="Localização da Dra. Mariana Lima">
      <h2>Localização</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122864.41628976629!2d-48.028341785632286!3d-15.776881092931614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3d18df9ae275%3A0x738470e469754a24!2zQnJhc8OtbGlhLCBERg!5e0!3m2!1spt-BR!2sbr!4v1752534817625!5m2!1spt-BR!2sbr"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        width="100%"
        height="500"
      ></iframe>
      <p>Atendemos Distrito Federal e Entorno</p>
    </section>
  );
}

export default Localizacao;

