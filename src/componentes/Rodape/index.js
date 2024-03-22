/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Rodape.css";

const Rodape = () => {
    return (
        <footer className="rodape">
            <address>
                <ul>
                    <li>
                        <a
                            className="icon-fb"
                            href="#"
                            aria-label="Conheça na nossa página no facebook"
                        ></a>
                    </li>
                    <li>
                        <a
                            className="icon-tw"
                            href=""
                            aria-label="Nos mande uma mensagem atravé do twitter"
                        ></a>
                    </li>
                    <li>
                        <a
                            className="icon-ig"
                            href="#"
                            aria-label="Veja o nosso instagram"
                        ></a>
                    </li>
                </ul>
                <div className="logo">
                    <img src="/imagens/logo.png" alt="" />
                </div>
                <div className="texto">
                    <small>Desenvolvido por Alura</small>
                </div>
            </address>
        </footer>
    );
};

export default Rodape;
