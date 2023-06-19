import "./AboutPage.css";
import AboutJPG from "../../assets/img/about.jpg";
import { useEffect } from "react";
import PureCounter from "@srexi/purecounterjs";
import Headline from "../../common/Headline/Headline";
import Counter from "../../common/Counter/Counter";
import BackToTop from "../../common/BackToTop/BackToTop";


function AboutPage() {

    useEffect(() => {
        new PureCounter();
    }, []);


    return (
        <div id="about-page" className="about-page">

            <Headline
                title="Sobre Nosotros"
                supportText="Creación de espacios de fortalecimiento de habilidades para la vida que prevengan el consumo de drogas en la adolescencia y la juventud."
            />

            <section class="about-page__body">
                <div class="container" data-aos="fade-up">

                    <div class="row">
                        <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                            <img src={AboutJPG} className="img-fluid" alt="" />

                        </div>
                        <div class="about-page__content col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1">
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

            <section class="about-page__counters section-bg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-6 text-center">
                            <Counter title="Estudiantes" start={0} end={350} />
                        </div>
                        <div className="col-lg-3 col-6 text-center">
                            <Counter title="Charlas" start={0} end={2} />
                        </div>
                        <div className="col-lg-3 col-6 text-center">
                            <Counter title="Eventos" start={0} end={4} />
                        </div>
                        <div className="col-lg-3 col-6 text-center">
                            <Counter title="Profesores" start={0} end={3} />
                        </div>
                    </div>
                </div>
            </section>

            <section class="about-page__testimonials">

            </section>

            <BackToTop />
        </div>

        
    )
}

export default AboutPage;



