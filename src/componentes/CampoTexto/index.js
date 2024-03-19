import "./CampoTexto.css";

const CampoTexto = (props) => {
    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value);
    };

    return (
        <div className="campo-texto">
            <label htmlFor={props.label}>{props.label}</label>
            <input
                type="text"
                required={props.obrigatorio}
                id={props.label}
                name={props.label}
                value={props.valor}
                onChange={aoDigitado}
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default CampoTexto;
