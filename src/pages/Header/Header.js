import { NavLink } from "react-router-dom";
import "./Header.css"



function Header() {
    return (
        <header id="header" className="header fixed-top">
            <div className="container d-flex align-items-center">
                <div id="header__left" className="header__left me-auto">
                    {/* REWORK REDIRECT */}
                    <h1 className="logo"><a href="index.html">TCU-687</a></h1>
                </div>
                <div className="hader__right d-flex">
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><NavLink exact="true" to="/" activeclassname="active">Inicio</NavLink></li>
                            <li><NavLink to="/proyectos" activeclassname="active">Proyectos</NavLink></li>
                            <li><NavLink to="/nosotros" activeclassname="active">Sobre nosotros</NavLink></li>
                        </ul>
                    </nav>
                </div>
                <NavLink to="/contact" className="get-started-btn" activeclassname="active">Contáctenos</NavLink>
            </div>
        </header>
    )
}

export default Header;