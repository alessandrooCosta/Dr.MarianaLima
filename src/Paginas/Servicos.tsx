import { Helmet } from "react-helmet";
import PaginaServicos from "../Componentes/PaginaServicos/PaginaServicos";

function Servicos() {
    return (
        <div>
            <Helmet>
                <title>Serviços Veterinários Domiciliares – Consultas, Vacinas e Exames</title>
                <meta
                    name="description"
                    content="Descubra os serviços oferecidos pela Dra. Mariana Lima: consultas, vacinação, exames e atendimento domiciliar personalizado na sua casa."
                />
                <meta name="keywords" content="serviços veterinários, atendimento domiciliar, vacinação, consulta pet, veterinária Brasília" />
                <meta name="geo.region" content="BR-DF" />
                <meta name="geo.placename" content="Brasília" />
                <meta name="geo.position" content="-15.7942;-47.8822" />
                <meta name="ICBM" content="-15.7942, -47.8822" />
                <link rel="canonical" href="https://vetmarianalima.com/servicos" />
            </Helmet>
            <PaginaServicos />
        </div>
    )
}

export default Servicos