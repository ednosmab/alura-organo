import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formuario = () => {
    const times = [
        "Programação",
        "Front-end",
        "Data Science",
        "Devops",
        "Ux e Design",
        "Mobile",
        "Inovação e Gestão",
    ];
    return (
        <section className="formulario">
            <form>
                <fieldset>
                    <legend>
                        Preencha os dados para criar o card do colaborador
                    </legend>
                    <CampoTexto label="nome" placeholder="Digite o seu nome" />
                    <CampoTexto
                        label="cargo"
                        placeholder="Digite o seu cargo"
                    />
                    <CampoTexto
                        label="imagem"
                        placeholder="Digite o endereço da sua imagem"
                    />
                    <ListaSuspensa label="Time" itens={times} />
                </fieldset>
            </form>
        </section>
    );
};

export default Formuario;
