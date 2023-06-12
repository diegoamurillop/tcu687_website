import "./Footer.css";


function Footer() {
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
                                <li><i className="bx bx-chevron-right"></i> <a href="#">Inicio</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="proyectos.html">Proyectos</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="sobre_nosotros.html">Sobre Nosotros</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="contacto.html">Contacto</a></li>
                                <li><i className="bx bx-chevron-right"></i> <a href="./assets/files/Reglamento_TCU.pdf" target="_blank">Reglamento del TCU</a></li>
                            </ul>
                        </div>
                    </div>
                </div>


            </div>
            <div className="container d-md-flex py-4">

                <div className="me-md-auto text-center text-md-start">
                    <div className="footer__credits">
                        Diseñado por <a href="https://www.linkedin.com/in/emmasolis" target="_blank">Emmanuel Solis</a> y <a href="https://www.linkedin.com/in/gabogantes" target="_blank">Gabriel Bogantes</a>.
                    </div>
                </div>
                <div className="footer__social-links text-center text-md-right pt-3 pt-md-0">
                    <a href="https://www.facebook.com/tcu687" target="_blank" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="https://www.instagram.com/tc.687" target="_blank" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="https://www.tiktok.com/@tc687.hpv" target="_blank" className="tiktok"><i className="bx bxl-tiktok"></i></a>
                    <a href="https://open.spotify.com/show/0FogTepPsXNtmI2fO31XvP?si=KYY87PTATpmDEiKeFf042A#" target="_blank" className="spotify"><i className="bx bxl-spotify"></i></a>
                </div>
            </div>
        </footer>

    )
}

export default Footer;