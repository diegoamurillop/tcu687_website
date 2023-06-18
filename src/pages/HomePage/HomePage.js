import { Link } from "react-router-dom";
import IconBox from "../../common/IconBox/IconBox"
import "./HomePage.css";
import ReglamentoPDF from "../../assets/pdf/Reglamento_TCU.pdf"
import AboutJPG from "../../assets/img/about.jpg"
import { PureComponent, useEffect } from "react";
import PureCounter from "@srexi/purecounterjs";
import Counter from "../../common/Counter/Counter";
import ProjectList from "../../components/ProjectList/ProjectList";





function HomePage() {

    useEffect(() => {
        new PureCounter();

        const backtotop = document.querySelector('.back-to-top');

        if (backtotop) {
            const toggleBackToTop = () => {
                if (window.scrollY > 100) {
                    backtotop.classList.add('active');
                } else {
                    backtotop.classList.remove('active');
                }
            };

            window.addEventListener('load', toggleBackToTop);
            window.addEventListener('scroll', toggleBackToTop);

            return () => {
                window.removeEventListener('load', toggleBackToTop);
                window.removeEventListener('scroll', toggleBackToTop);
            };
        }
    }, []);


    return (
        <div className="home-page">
            <section id="home-page__hero" className="home-page__hero d-flex justify-content-center align-items-center">
                <div className="container position-relative" data-aos="zoom-in" data-aos-delay="100" >
                    <h1>Trabajo Comunal Universitario 687,<br /> Universidad de Costa Rica</h1>
                    <h2>Creación de espacios de fortalecimiento de habilidades para la vida que prevengan el consumo de drogas en la adolescencia y la juventud.</h2>
                    <Link to="/proyectos" className="btn-get-started">Projectos</Link>
                    <Link to="/nosotros" className="btn-get-started ms-2">Sobre Nostros</Link>
                </div>
            </section>

            <section id="home-page__about" className="home-page__about">
                <div className="container" data-aos="fade-up" >
                    <div className="row">
                        <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
                            <img src={AboutJPG} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                            <h3>Importancia del TCU</h3>
                            <p className="fst-italic">
                                El trabajo comunal universitario es una actividad académica cuya finalidad es involucrar a las personas estudiantes de la universidad, en diversos proyectos comunitarios con el fin de promover el desarrollo social y económico de las comunidades locales. Esta práctica académica tiene una gran importancia tanto para la comunidad como para las personas estudiantes de las universidades, ya que posibilita contribuir al desarrollo comunitario, fomentar la responsabilidad social, desarrollar habilidades y competencias, y mejorar la calidad de la educación.
                            </p>
                            <h3>¿Qué hacemos en el TCU-687?</h3>
                            <p className="fst-italic">
                                El TCU 687 Creación de espacios de fortalecimiento de habilidades para la vida que prevengan el consumo de drogas en la adolescencia y la juventud (TC-687) de en la Escuela de Enfermería de la Universidad de Costa Rica (UCR), tiene como objetivo capacitar a las personas jóvenes universitarias en habilidades cognitivas, sociales y emocionales que les permitan tomar decisiones saludables, al igual que prevenir el consumo de sustancias psicoactivas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="home-page__counters" className="home-page__counters section-bg" >
                <div className="container">
                    <div className="row counter">
                        <div className="col-lg-3 col-6 text-center">
                            <Counter title="Personas Alcanzadas" start={0} end={350} />
                        </div>
                        <div className="col-lg-3 col-6 text-center">
                            <Counter title="Colaboradores" start={0} end={2} />
                        </div>
                        <div className="col-lg-3 col-6 text-center">
                            <Counter title="Instituciones Involucradas" start={0} end={4} />
                        </div>
                        <div className="col-lg-3 col-6 text-center">
                            <Counter title="Proyectos Activos" start={0} end={3} />
                        </div>
                    </div>
                </div>
            </section>

            <div id="home-page__why-us" className="home-page__why-us">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-4 d-flex align-items-stretch">
                            <div id="home-page__why-us__content" className="home-page__why-us__content">
                                <h3>¿Necesitas ayuda?</h3>
                                <p>
                                    Es importante saber que en el TCU-687 se abarcan diversos temas que son de ayuda para poder abordar la población meta y con ello cumplir con el objetivo. De esta forma, al inicio del tcu se brinda una inducción facilitada por parte de los y las mismas estudiantes del tcu dirigida para las y los estudiantes nuevos. En dicha inducción se profundizará en los tres principales ejes del tcu: adolescencia, sustancias psicoactivas y habilidades para la vida.
                                </p>
                                <a href={ReglamentoPDF} download="Reglamento_TCU.pdf" target="_blank" className="more-btn text-center">Reglamento del TCU<i className="bx bx-chevron-right"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-8 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-boxes d-flex flex-column justify-content-center">
                                <div className="row">
                                    <div className="col-xl-4 d-flex align-items-stretch">
                                        <IconBox
                                            icon="bi-emoji-smile"
                                            title="Adolescencia"
                                            text="De acuerdo con la Organización Mundial de la Salud (2023) la adolescencia es la etapa que transcurre entre los 10 y 19 años, considerándose dos fases: la adolescencia temprana (10 a 14 años) y la adolescencia tardía (15 a 19 años). En donde los y las adolescentes experimentan diversos cambios físicos, psicológicos y emocionales. Estos cambios van a influir en cómo se sienten, actúan, piensan, la forma de relacionarse, así como también en la toma de decisiones que hagan."
                                        />
                                    </div>
                                    <div className="col-xl-4 d-flex align-items-stretch">
                                        <IconBox
                                            icon="bx bx-capsule"
                                            title="Sustancias Psicoactivas"
                                            text="Las sustancias psicoactivas son aquellas que afectan el sistema nervioso central y pueden alterar la percepción, el estado de ánimo, la cognición y el comportamiento de la persona que las consume. Estas sustancias pueden ser legales, como el alcohol y el tabaco, o ilegales, como la cocaína, la heroína y la marihuana."
                                        />
                                    </div>
                                    <div className="col-xl-4 d-flex align-items-stretch">
                                        <IconBox
                                            icon="bx bx-award"
                                            title="Habilidades para la Vida"
                                            text="De acuerdo a la Organización Mundial de la Salud (1999) se definen las habilidades para la vida como: “la habilidad de una persona para enfrentarse exitosamente a las exigencias y desafíos de la vida diaria” dichas habilidades se desarrollan a lo largo de la vida de la persona, en la cual las experiencias personales contribuyen a profundizar el desenvolvimiento o la represión de estas capacidades. La OMS menciona que las 10 habilidades para la vida son: comunicación asertiva, empatía, toma de decisiones, autoconocimiento, pensamiento creativo, pensamiento crítico, relaciones interpersonales, gestión de emociones y sentimientos, manejo de problemas y conflictos, y gestión del estrés y tensión."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <a href="#" className="back-to-top d-flex align-items-center justify-content-center">
                <i className="bi bi-arrow-up-short"></i>
            </a>

            <section id="home-page__projects" class="courses">
                <div className="container" data-aos="fade-up">
                    <div class="section-title">
                        <h2>Proyectos</h2>
                        <p>Últimos Proyectos</p>
                    </div>

                <ProjectList />
                </div>
            </section>



        </div>
    )
}

export default HomePage;