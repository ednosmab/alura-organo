import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
    return (
        <>
            <label htmlFor="lista-suspensa">{props.label}</label>
            <select id="lista-suspensa">
                {props.itens.map((item) => (
                    <option>{item}</option>
                ))}
            </select>
        </>
    );
};

export default ListaSuspensa;
