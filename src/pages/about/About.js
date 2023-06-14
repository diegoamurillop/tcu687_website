import "./About.css";
import AboutJPG from "../../assets/img/about.jpg";
import { useEffect } from "react";
import PureCounter from "@srexi/purecounterjs";


function About() {

    useEffect(() => {
        new PureCounter();
    }, []);

    const counter = (title, start, end) => {
        return (
            <div className="col-lg-3 col-6 text-center counter">
                <span data-purecounter-start={start} data-purecounter-end={end} data-purecounter-duration="1" className="purecounter"></span>
                <p>{title}</p>
            </div>
        )
    }


    return (
        <div id="about" className="about">
            <div class="about__headline headline" data-aos="fade-in">
                <div class="container">
                    <h2>Sobre Nosotros</h2>
                    <p>Creación de espacios de fortalecimiento de habilidades para la vida que prevengan el consumo de drogas en la adolescencia y la juventud. </p>
                </div>
            </div>

            <section class="about__body">
                <div class="container" data-aos="fade-up">

                    <div class="row">
                        <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                            <img src={AboutJPG} className="img-fluid" alt="" />

                        </div>
                        <div class="about__content col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1">
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                            <p class="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <ul>
                                <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li><i class="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                <li><i class="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                            </ul>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            </p>

                        </div>
                    </div>

                </div>
            </section>

            <section class="about__counts section-bg">
                <div className="container">
                    <div className="row">
                        {counter("Estudiantes", 0, 350)}
                        {counter("Charlas", 0, 2)}
                        {counter("Eventos", 0, 4)}
                        {counter("Profesores", 0, 3)}
                    </div>
                </div>
            </section>

            <section class="about__testimonials">

            </section>

        </div>


    )
}

export default About;



