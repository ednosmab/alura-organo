import { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formuario from "./componentes/Formulario";
import Time from "./componentes/Time";

function App() {
    const times = [
        {
            nome: "Programação",
            corPrimaria: "--background-time-card-programacao",
            corSecundaria: "--background-time-programacao",
        },
        {
            nome: "Front-end",
            corPrimaria: "--background-time-card-frontend",
            corSecundaria: "--background-time-frontend",
        },
        {
            nome: "Data Science",
            corPrimaria: "--background-time-card-datascience",
            corSecundaria: "--background-time-datascience",
        },
        {
            nome: "Devops",
            corPrimaria: "--background-time-card-devops",
            corSecundaria: "--background-time-devops",
        },
        {
            nome: "Ux e Design",
            corPrimaria: "--background-time-card-uxedesign",
            corSecundaria: "--background-time-uxedesign",
        },
        {
            nome: "Mobile",
            corPrimaria: "--background-time-card-mobile",
            corSecundaria: "--background-time-mobile",
        },
        {
            nome: "Inovação e Gestão",
            corPrimaria: "--background-time-card-inovacaoegestao",
            corSecundaria: "--background-time-inovacaoegestao",
        },
    ];

    const [colaboradores, setColaboradores] = useState([]);

    const aoNovoColaboradorAicionado = (colaborador) => {
        setColaboradores([...colaboradores, colaborador]);
    };

    return (
        <div className="App">
            <Banner />
            <Formuario
                time={times.map((time) => time.nome)}
                aoColaboradorCadastrado={(colaborador) =>
                    aoNovoColaboradorAicionado(colaborador)
                }
            />
            {times.map((time) => (
                <Time
                    key={time.nome}
                    nome={time.nome}
                    corPrimaria={time.corPrimaria}
                    corSecundaria={time.corSecundaria}
                    colaboradores={colaboradores.filter(
                        (colaborador) => colaborador.time === time.nome
                    )}
                />
            ))}
        </div>
    );
}

export default App;
