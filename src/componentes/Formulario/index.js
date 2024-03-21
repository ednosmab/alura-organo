import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formuario = (props) => {
    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [imagem, setImagem] = useState("");
    const [time, setTime] = useState("");

    const aoSalvar = (event) => {
        event.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
        });
    };

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <fieldset>
                    <legend>
                        Preencha os dados para criar o card do colaborador
                    </legend>
                    <CampoTexto
                        obrigatorio={true}
                        label="nome"
                        placeholder="Digite o seu nome"
                        valor={nome}
                        aoAlterado={(valor) => setNome(valor)}
                    />
                    <CampoTexto
                        obrigatorio={true}
                        label="cargo"
                        placeholder="Digite o seu cargo"
                        valor={cargo}
                        aoAlterado={(valor) => setCargo(valor)}
                    />
                    <CampoTexto
                        label="imagem"
                        placeholder="Digite o endereço da sua imagem"
                        valor={imagem}
                        aoAlterado={(valor) => setImagem(valor)}
                    />
                    <ListaSuspensa
                        obrigatorio={true}
                        label="Time"
                        itens={props.time}
                        valor={time}
                        aoAlterado={(valor) => setTime(valor)}
                    />
                    <Botao>Criar card</Botao>
                </fieldset>
            </form>
        </section>
    );
};

export default Formuario;
