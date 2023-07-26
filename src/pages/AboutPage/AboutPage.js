import "./AboutPage.css";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import PureCounter from "@srexi/purecounterjs";
import Headline from "../../components/common/Headline/Headline";
import Counter from "../../components/common/Counter/Counter";
import AboutJPG from "../../assets/img/about.jpg";


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

            <section className="about-page__body">
                <Container data-aos="fade-up">
                    <Row>
                        <Col lg={{ span: 6, order: 2 }} md={{ order: 1 }} data-aos="fade-left" data-aos-delay="100">
                            <img src={AboutJPG} className="img-fluid" alt="" />
                        </Col>
                        <Col lg={{ span: 6, order: 1 }} md={{ order: 2 }} className="about-page__content pt-4 pt-lg-0">
                            <h3>¿Qué hacemos en el TCU?</h3>
                            <p className="text-justify">
                                Nuestro objetivo es crear espacios de fortalecimiento de habilidades para la vida que prevengan el consumo de drogas en la adolescencia y la juventud. <br />
                                Desarrollamos habilidades para la vida en los y las adolescentes por medio de:
                            </p>
                            <div className="d-flex flex-row">

                            <ul>
                                <li><i className="bi bi-check-circle" /> Charlas informativas. </li>
                                <li><i className="bi bi-check-circle" /> Talleres. </li>
                            </ul>
                            <ul className="ms-5">
                                <li><i className="bi bi-check-circle" /> Actividades Recreativas. </li>
                                <li><i className="bi bi-check-circle" /> Muchas más. </li>
                            </ul>
                            </div>
                            <p className="text-justify">
                                Buscamos generar un impacto que se refleja en efectos como prevención de drogodependencias, fomento del emprendimiento, menor abandono escolar, prevención de enfermedades de transmición sexual y desarrollo de empleabilidad. <br />
                                Algunas de las instituciones con las que desarrollamos las HPV, son las siguientes:  <br />
                            </p>
                            <div className="d-flex flex-row">

                            <ul>
                                <li><i className="bi bi-caret-right" /> Área Rectora de Salud Curridabat. </li>
                                <li><i className="bi bi-caret-right" /> Oficina PANI. </li>
                                <li><i className="bi bi-caret-right" /> Colegio Nocturno La Unión. </li>
                            </ul>


                            <ul class="ms-5">
                                <li><i className="bi bi-caret-right" /> Pueblito. </li>
                                <li><i className="bi bi-caret-right" /> IAFA. </li>
                                <li><i className="bi bi-caret-right" /> Entre otros. </li>

                            </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="about-page__counters section-bg mb-5">
                <Container>
                    <Row>
                        <Col lg={3} md={6}>
                            <Counter title="Estudiantes" start={0} end={350} />
                        </Col>
                        <Col lg={3} md={6}>
                            <Counter title="Charlas" start={0} end={2} />
                        </Col>
                        <Col lg={3} md={6}>
                            <Counter title="Eventos" start={0} end={4} />
                        </Col>
                        <Col lg={3} md={6}>
                            <Counter title="Profesores" start={0} end={3} />
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>


    )
}

export default AboutPage;



