import { useState } from "react";
import Headline from "../../common/Headline/Headline";
import "./ContactPage.css"


const ContactPage = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);
	const [isSent, setIsSent] = useState(false);


	const handleSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);

		// Perform form submission logic here (e.g., AJAX request)

		// Simulating a delay of 1 second before showing success message
		setTimeout(() => {
			setIsLoading(false);
			setIsSent(true);
		}, 1000);
	};

	return (
		<div id="contact-page" className="contact-page">
			<Headline
				title="Contáctenos"
				supportText="Si tienes alguna duda o sugerencia, puedes escribirnos y te responderemos lo antes posible."
			/>

			<div id="contact-page__map" className="contact-page__map mt-2" data-aos="fade-up">
				<iframe
					title="Dirección de la UCR"
					style={{ border: 0, width: "100%", height: "350px" }}
					src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.936985011398!2d-84.04815938450905!3d9.939201292892896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e477ccfe5c27%3A0x8461492efc1f0192!2sUCR%2C%20Escuela%20de%20Enfermer%C3%ADa%20(EE)!5e0!3m2!1ses-419!2scr!4v1677737343866!5m2!1ses-419!2scr"
					allowfullscreen
				></iframe>
			</div>


			<div class="container" data-aos="fade-up">

				<div class="row mt-5">

					<div class="col-lg-4">

						<div id="contact-page__info" className="contact-page__info" data-aos="fade-up">
							<div id="contact-page__adress" className="contact-page__address">
								<i className="bi bi-geo-alt"></i>
								<h4>Dirección:</h4>
								<p>SC, Ciudad de la Investigación, frente al INISA</p>
							</div>
							<div id="contact-page__email" className="contact-page__email">
								<i className="bi bi-envelope"></i>
								<h4>Correo Electrónico:</h4>
								<p>TCU687.EE@ucr.ac.cr</p>
							</div>
							<div id="contact-page__phone" className="contact-page__phone">
								<i className="bi bi-phone"></i>
								<h4>Teléfono:</h4>
								<p>TBD</p>
							</div>
						</div>
					</div>


					<div class="col-lg-8 mt-5 mt-lg-0">

						<div id="contact-page__form" className="contact-page__form container">
							<form onSubmit={handleSubmit}>
								<div className="row">
									<div className="col-md-6 form-group">
										<input
											type="text"
											className="form-control"
											id="contact-page__form-name"
											placeholder="Su Nombre"
											required
											value={name}
											onChange={(e) => setName(e.target.value)}
										/>
									</div>
									<div className="col-md-6 form-group mt-3 mt-md-0">
										<input
											type="email"
											className="form-control"
											id="contact-page__form-email"
											placeholder="Su correo electrónico"
											required
											value={email}
											onChange={(e) => setEmail(e.target.value)}
										/>
									</div>
								</div>
								<div className="form-group mt-3">
									<input
										type="text"
										className="form-control"
										id="contact-page__form-subject"
										placeholder="Asunto"
										required
										value={subject}
										onChange={(e) => setSubject(e.target.value)}
									/>
								</div>
								<div className="form-group mt-3">
									<textarea
										className="form-control"
										name="message"
										id="contact-page__form-message"
										rows="5"
										placeholder="Mensaje"
										required
										maxLength="1000"
										value={message}
										onChange={(e) => setMessage(e.target.value)}
									></textarea>
								</div>
								<div className="my-3">
									{isLoading && <div className="loading">Cargando...</div>}
									{isError && <div className="error-message">Ha ocurrido un error. Por favor intenta de nuevo.</div>}
									{isSent && <div className="sent-message">Su mensaje ha sido enviado, Gracias! <i /></div>}
								</div>
								<div className="text-center">
									<button type="submit">Enviar Mensaje</button>
								</div>
							</form>
						</div>

					</div>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;




