import { Link, NavLink } from "react-router-dom";
import LogoImg from "../../assets/img/logo.jpg";
import "./Header.css"
import { Container } from "react-bootstrap";



function Header() {

    const handleLinkClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <header id="header" className="header fixed-top">
            <Container className="d-flex align-items-center">
                <div id="header__left" className="header__left me-auto">
                    <Link as="div" onClick={handleLinkClick} exact="true" to="/" className="d-flex align-items-center">
                        <img src={LogoImg} alt="Logo" />
                        <h1 className="logo ms-2 mt-2">TC-687</h1>
                    </Link>
                </div>
                <div className="hader__right d-flex">
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><NavLink onClick={handleLinkClick} exact="true" to="/" activeclassname="active">Inicio</NavLink></li>
                            <li><NavLink onClick={handleLinkClick} to="/proyectos" activeclassname="active">Proyectos</NavLink></li>
                            <li><NavLink onClick={handleLinkClick} to="/eventos" activeclassname="active">Eventos</NavLink></li>
                            <li><NavLink onClick={handleLinkClick} to="/sobrenosotros" activeclassname="active">Sobre nosotros</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <NavLink to="/contacto" onClick={handleLinkClick} className="get-started-btn" activeclassname="active">Contáctenos</NavLink>
            </Container>
        </header>
    )
}

export default Header;