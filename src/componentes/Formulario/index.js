import CampoTexto from "../CampoTexto";
import "./Formulario.css";

const Formuario = () => {
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
                </fieldset>
            </form>
        </section>
    );
};

export default Formuario;
