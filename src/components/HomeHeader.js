
function Header() {
    return (
        <header id="header" class="fixed-top">
            <div class="container d-flex align-items-center">
                <div classsName="header__left" class="me-auto">
                    {/* REWORK REDIRECT */}
                    <h1 class="logo"><a href="index.html">TCU-687</a></h1>
                </div>
                <div className="hader__right d-flex">
                    <nav id="navbar" class="navbar order-last order-lg-0">
                        <ul>
                            <li><a class="active" href="index.html">Inicio</a></li>
                            <li><a href="proyectos.html">Proyectos</a></li>
                            <li><a href="sobre_nosotros.html">Sobre Nosotros</a></li>
                            <li><a href="contacto.html">Contacto</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;