import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const times = [
    "Programação",
    "Front-end",
    "Data Science",
    "Devops",
    "Ux e Design",
    "Mobile",
    "Inovação e Gestão",
];

const aoSalvar = (event) => {
    event.preventDefault();
};

const Formuario = () => {
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
                    />
                    <CampoTexto
                        obrigatorio={true}
                        label="cargo"
                        placeholder="Digite o seu cargo"
                    />
                    <CampoTexto
                        label="imagem"
                        placeholder="Digite o endereço da sua imagem"
                    />
                    <ListaSuspensa
                        obrigatorio={true}
                        label="Time"
                        itens={times}
                    />
                    <Botao>Criar card</Botao>
                </fieldset>
            </form>
        </section>
    );
};

export default Formuario;
