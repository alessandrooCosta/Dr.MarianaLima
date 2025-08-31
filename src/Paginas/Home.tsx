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
                <title>Dra. Mariana Lima – Atendimento Veterinário Domiciliar em Brasília</title>
                <meta
                    name="description"
                    content="Atendimento veterinário domiciliar em Brasília com carinho, atenção personalizada e serviços completos — consultas, vacinas e mais."
                />
                <meta name="keywords" content="veterinária Brasília, atendimento domiciliar, Dra. Mariana Lima, veterinário pet, clínicas veterinárias" />
                <meta name="geo.region" content="BR-DF" />
                <meta name="geo.placename" content="Brasília" />
                <meta name="geo.position" content="-15.7942;-47.8822" />
                <meta name="ICBM" content="-15.7942, -47.8822" />
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