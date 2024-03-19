import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value);
    };

    return (
        <div className="lista-suspensa">
            <label htmlFor={props.label}>{props.label}</label>
            <select
                id={props.label}
                required={props.obrigatorio}
                value={props.valor}
                onChange={aoDigitado}
            >
                <option disabled></option>
                {props.itens.map((item) => (
                    <option key={item}>{item}</option>
                ))}
            </select>
        </div>
    );
};

export default ListaSuspensa;
