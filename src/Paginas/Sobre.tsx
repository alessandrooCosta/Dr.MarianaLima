import { Helmet } from "react-helmet";
import SobreInfo from "../Componentes/Sobre/SobreInfo"

function Sobre() {
  return (
    <div>
      <Helmet>
        <title>Sobre a Dra. Mariana Lima – Veterinária Domiciliar</title>
        <meta
          name="description"
          content="Conheça a Dra. Mariana Lima, veterinária dedicada ao atendimento domiciliar de pets em Brasília, oferecendo cuidado humanizado e especializado."
        />
        <meta name="keywords" content="sobre veterinária, Dra. Mariana Lima, veterinária Brasília, atendimento pet" />
        <meta name="geo.region" content="BR-DF" />
        <meta name="geo.placename" content="Brasília" />
        <meta name="geo.position" content="-15.7942;-47.8822" />
        <meta name="ICBM" content="-15.7942, -47.8822" />
        <link rel="canonical" href="https://vetmarianalima.com/sobre" />
      </Helmet>

      <SobreInfo />
    </div>
  )
}

export default Sobre
