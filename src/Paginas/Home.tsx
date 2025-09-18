import { Helmet } from "react-helmet";
import Banner from "../Componentes/Banner/Banner"
import Informacao from "../Componentes/Informacao/Informacao"
import Localizacao from "../Componentes/Localizacao/Localizacao"
import Depoimentos from '../Componentes/Depoimentos/Depoimentos'
import ComoFunciona from '../Componentes/ComoFunciona/ComoFunciona'

import Servico from "../Componentes/ServicoHome/Servico"

function Home() {
    return (
        <div>
            <Helmet>
            <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "VeterinaryCare",
      "name": "Dra. Mariana Lima",
      "url": "https://vetmarianalima.com/",
      "image": "https://vetmarianalima.com/imagens/fotos/logo_banner2.avif",
      "description": "Atendimento veterinário domiciliar em Brasília com consultas, vacinação e exames.",
      "areaServed": "Brasília, DF",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Brasília",
        "addressRegion": "DF",
        "addressCountry": "BR"
      },
      "telephone": "+55-61-991492264", 
      "sameAs": [
        "https://www.facebook.com/share/15x4RQgr2b/",
        "https://www.instagram.com/mbr.vet/"
      ]
    })}
  </script>
                <title>Dra. Mariana Lima – Veterinária Domiciliar em Brasília</title>
                <meta
                    name="description"
                    content="Atendimento veterinário domiciliar em Brasília com carinho, atenção personalizada e serviços completos — consultas, vacinas e mais."
                />
                <meta name="keywords" content="veterinária Brasília, atendimento domiciliar, Dra. Mariana Lima, veterinário pet, clínicas veterinárias" />
                <meta name="geo.region" content="BR-DF" />
                <meta name="geo.placename" content="Brasília" />
                <meta name="geo.position" content="-15.7942;-47.8822" />
                <meta name="ICBM" content="-15.7942, -47.8822" />
                <link rel="canonical" href="https://vetmarianalima.com/" />
                
            </Helmet>
            <Banner />
            <Informacao />
            <ComoFunciona />
            <Servico />
            <Depoimentos />
            <Localizacao />
        </div>
    )
}
export default Home