import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
    return (
        props.colaboradores.length > 0 && (
            <section
                className="time"
                style={{
                    backgroundColor: `var(${props.corSecundaria})`,
                }}
            >
                <h3 style={{ borderBottomColor: `var(${props.corPrimaria})` }}>
                    {props.nome}
                </h3>
                <div className="colaboradores">
                    {props.colaboradores.map((colaborador) => (
                        <div key={colaborador.nome}>
                            <Colaborador
                                nome={colaborador.nome}
                                time={colaborador.time}
                                cargo={colaborador.cargo}
                                imagem={colaborador.imagem}
                                corPrimaria={props.corPrimaria}
                            />
                        </div>
                    ))}
                </div>
            </section>
        )
    );
};

export default Time;
