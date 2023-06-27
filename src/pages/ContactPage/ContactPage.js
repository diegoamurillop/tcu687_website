import "./ContactPage.css"
import { Col, Container, Row } from "react-bootstrap";
import Headline from "../../common/Headline/Headline";
import ContactForm from "../../components/ContactForm/ContactForm";
import SocialMedia from "../../components/SocialMedia/SocialMedia";


const ContactPage = () => {
	return (
		<div id="contact-page" className="contact-page">
			<Headline
				title="Contáctenos"
				supportText="Si tienes alguna duda o sugerencia, puedes escribirnos y te responderemos lo antes posible."
			/>

			<div id="contact-page__map" className="contact-page__map mt-3" data-aos="fade-up">
				<iframe
					title="Dirección de la UCR"
					style={{ border: 0, width: "100%", height: "350px" }}
					src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.936985011398!2d-84.04815938450905!3d9.939201292892896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e477ccfe5c27%3A0x8461492efc1f0192!2sUCR%2C%20Escuela%20de%20Enfermer%C3%ADa%20(EE)!5e0!3m2!1ses-419!2scr!4v1677737343866!5m2!1ses-419!2scr"
					allowFullScreen
				></iframe>
			</div>

			<section id="contact-page__body" className="contact-page__body">
				<Container data-aos="fade-up">
					<div className="mb-5" data-aos="flip-up">
						<SocialMedia />
					</div>
					<Row>
						<Col lg={4} className="col-lg-4" data-aos="fade-up">
							<div id="contact-page__info" className="contact-page__info mt-3">
								<div id="contact-page__adress" className="contact-page__address">
									<i className="bi bi-geo-alt" />
									<h4>Dirección:</h4>
									<p>SC, Ciudad de la Investigación, frente al INISA</p>
								</div>
								<div id="contact-page__email" className="contact-page__email">
									<i className="bi bi-envelope" />
									<h4>Correo Electrónico:</h4>
									<p>TCU687.EE@ucr.ac.cr</p>
								</div>
								<div id="contact-page__phone" className="contact-page__phone">
									<i className="bi bi-phone" />
									<h4>Teléfono:</h4>
									<p>TBD</p>
								</div>
							</div>
						</Col>
						<Col lg={8} className="mt-4 mt-lg-0">
							<Container id="contact-page__form" className="contact-page__form">
								<ContactForm />
							</Container>
						</Col>
					</Row>
				</Container>
			</section>

		</div>
	);
};

export default ContactPage;




