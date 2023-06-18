import { Link } from "react-router-dom";
import "./Footer.css";


function Footer() {
    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };

    return ( 
        <footer id="footer" className="footer">
            <div className="footer__top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 footer__contact">
                            <h3>TCU 687</h3>
                            <p>
                                Escuela de Enfermería<br />
                                Universidad de Costa Rica<br />
                                Costa Rica<br /><br />
                                <strong>Email:</strong> tcu687.ee@ucr.ac.cr<br />
                            </p>
                        </div>
                        <div className="col-lg-2 col-md-6 footer__links">
                            <h4>Enlaces de Importancia</h4>
                            <ul>
                                <li><i className="bx bx-chevron-right"/> <Link  onClick={handleLinkClick} to ="/">Inicio</Link></li>
                                <li><i className="bx bx-chevron-right"/> <Link onClick={handleLinkClick} to ="/proyectos">Proyectos</Link></li>
                                <li><i className="bx bx-chevron-right"/> <Link onClick={handleLinkClick} to ="/eventos">Eventos</Link></li>
                                <li><i className="bx bx-chevron-right"/> <Link onClick={handleLinkClick} to ="/sobrenosotros">Sobre Nosotros</Link></li>
                                <li><i className="bx bx-chevron-right"/> <Link onClick={handleLinkClick} to="/contacto">Contáctenos</Link></li>
                                <li><i className="bx bx-chevron-right"/> <a hrefw3w="./assets/files/Reglamento_TCU.pdf" target="_blank">Reglamento del TCU</a></li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
            <div className="container d-md-flex py-4">

                <div className="me-md-auto text-center text-md-start">
                    <div className="footer__credits">
                        Diseñado por <a href="https://www.linkedin.com/in/emmasolis" target="_blank">Emmanuel Solis</a>,&nbsp;
                        <a href="https://www.linkedin.com/in/gabogantes" target="_blank">Gabriel Bogantes</a> y&nbsp;
                        <a href="https://www.linkedin.com/in/diegoamurillo" target="_blank">Diego Murillo.</a>
                    </div>
                </div>
                <div className="footer__social-links text-center text-md-right pt-3 pt-md-0">
                    <a href="https://www.facebook.com/tcu687" target="_blank" className="facebook"><i className="bx bxl-facebook"/></a>
                    <a href="https://www.instagram.com/tc.687" target="_blank" className="instagram ms-1"><i className="bx bxl-instagram"/></a>
                    <a href="https://www.tiktok.com/@tc687.hpv" target="_blank" className="tiktok ms-1"><i className="bx bxl-tiktok"/></a>
                    <a href="https://open.spotify.com/show/0FogTepPsXNtmI2fO31XvP?si=KYY87PTATpmDEiKeFf042A#" target="_blank" className="spotify ms-1"><i className="bx bxl-spotify"/></a>
                </div>
            </div>
        </footer>

    )
}

export default Footer;