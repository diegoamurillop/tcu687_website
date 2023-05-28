import { useEffect } from "react";



function HomeHero(props) {
    return (
        <section id="hero" class="d-flex justify-content-center align-items-center">
            <div class="container position-relative" data-aos="zoom-in" data-aos-delay="100">
                <h1>Trabajo Comunal Universitario 687, Universidad de Costa Rica</h1>
                <h2>Creación de espacios de fortalecimiento de habilidades para la vida que prevengan el consumo de drogas en la adolescencia y la juventud.</h2>
                <a href="proyectos.html" class="btn-get-started">Proyectos</a>
                <a href="sobre_nosotros.html" class="btn-get-started">Sobre Nosotros</a>
            </div>
        </section>
    );
}

export default HomeHero;