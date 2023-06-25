import "./AboutPage.css";
import { Col, Container, Row } from "react-bootstrap";
import { useEffect } from "react";
import PureCounter from "@srexi/purecounterjs";
import Headline from "../../common/Headline/Headline";
import Counter from "../../common/Counter/Counter";
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
                        <Col lg={{span: 6, order: 2}} md={{order:1}} data-aos="fade-left" data-aos-delay="100">
                            <img src={AboutJPG} className="img-fluid" alt="" />
                        </Col>
                        <Col lg={{span: 6, order: 1}} md={{order: 2}} className="about-page__content pt-4 pt-lg-0">
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <ul>
                                <li><i className="bi bi-check-circle"/> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li><i className="bi bi-check-circle"/> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                <li><i className="bi bi-check-circle"/> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                            </ul>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="about-page__counters section-bg">
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



