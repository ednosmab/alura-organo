import "./CampoTexto.css";
const CampoTexto = (props) => {
    return (
        <div className="campo-texto">
            <label for={props.label}>{props.label}</label>
            <input
                type="text"
                id={props.label}
                name={props.label}
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default CampoTexto;