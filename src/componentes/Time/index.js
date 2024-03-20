import "./Time.css";

const Time = (props) => {
    return (
        <section
            className="time"
            style={{
                backgroundColor: `var(${props.corSecundaria})`,
            }}
        >
            <h3 style={{ borderBottomColor: `var(${props.corPrimaria})` }}>
                {props.nome}
            </h3>
        </section>
    );
};

export default Time;
