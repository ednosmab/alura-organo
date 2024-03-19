import Banner from "./componentes/Banner/Banner";
import CampoTexto from "./componentes/CampoTexto";
import Formuario from "./componentes/Formulario";

function App() {
    return (
        <div className="App">
            <Banner />
            <CampoTexto label="nome" placeholder="Digite o seu nome" />
            <CampoTexto label="cargo" placeholder="Digite o seu cargo" />
            <CampoTexto
                label="imagem"
                placeholder="Digite o endereço da sua imagem"
            />
        </div>
    );
}

export default App;
