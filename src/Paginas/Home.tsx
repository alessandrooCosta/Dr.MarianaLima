import Banner from "../Componentes/Banner/Banner"
import Informacao from "../Componentes/Informacao/Informacao"
import Localizacao from "../Componentes/Localizacao/Localizacao"
import Servico from "../Componentes/ServicoHome/Servico"

function Home() {
    return (
        <div>
            <Banner />
            <Informacao />
            <Servico />
            <Localizacao />
        </div>
    )
}
export default Home