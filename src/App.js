import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formuario from "./componentes/Formulario";

function App() {
    const [colaboradores, setColaboradores] = useState([]);

    const aoNovoColaboradorAicionado = (colaborador) => {
        setColaboradores([...colaboradores, colaborador]);
    };

    console.log(colaboradores);

    return (
        <div className="App">
            <Banner />
            <Formuario
                aoColaboradorCadastrado={(colaborador) =>
                    aoNovoColaboradorAicionado(colaborador)
                }
            />
        </div>
    );
}

export default App;
