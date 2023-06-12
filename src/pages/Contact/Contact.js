import { useState } from "react";
import "./Contact.css"


const Contact = () => {
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
		<div id="contact" className="contact">
			<div id="contact__headline" className="contact__headline" data-aos="fade-in">
				<div className="container">
					<h2>Contáctenos</h2>
					<p>Si tienes alguna duda o sugerencia, puedes escribirnos y te responderemos lo antes posible.</p>
				</div>
			</div>

			<div id="contact__map" className="contact__map" data-aos="fade-up">
				<iframe
					title="Dirección de la UCR"
					style={{ border: 0, width: "100%", height: "350px" }}
					src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.936985011398!2d-84.04815938450905!3d9.939201292892896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e477ccfe5c27%3A0x8461492efc1f0192!2sUCR%2C%20Escuela%20de%20Enfermer%C3%ADa%20(EE)!5e0!3m2!1ses-419!2scr!4v1677737343866!5m2!1ses-419!2scr"
					allowfullscreen
				></iframe>
			</div>

			<div class="row mt-5">

				<div class="col-lg-4">

					<div id="contact__info" className="contact__info" data-aos="fade-up">
						<div id="contact__adress" className="contact__address">
							<i className="bi bi-geo-alt"></i>
							<h4>Location:</h4>
							<p>SC, Ciudad de la Investigación, frente al INISA</p>
						</div>
						<div id="contact__email" className="contact__email">
							<i className="bi bi-envelope"></i>
							<h4>Email:</h4>
							<p>TCU687.EE@ucr.ac.cr</p>
						</div>
						<div id="contact__phone" className="contact__phone">
							<i className="bi bi-phone"></i>
							<h4>Call:</h4>
							<p>TBD</p>
						</div>
					</div>
				</div>


				<div class="col-lg-8 mt-5 mt-lg-0">

					<div id="contact__form" className="contact__form container">
						<h2>Envíanos un mensaje</h2>
						<form onSubmit={handleSubmit}>
							<div className="row">
								<div className="col-md-6 form-group">
									<input
										type="text"
										className="form-control"
										id="contact__form-name"
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
										id="contact__form-email"
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
									id="contact__form-subject"
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
									id="contact__form-message"
									rows="5"
									placeholder="Mensaje"
									required
									maxLength="1000"
									value={message}
									onChange={(e) => setMessage(e.target.value)}
								></textarea>
							</div>
							<div className="my-3">
								{isLoading && <div className="loading">Cargando</div>}
								{isError && <div className="error-message">Ha ocurrido un error. Por favor intenta de nuevo.</div>}
								{isSent && <div className="sent-message">Su mensaje ha sido enviado, Gracias!</div>}
							</div>
							<div className="text-center">
								<button type="submit">Enviar Mensaje</button>
							</div>
						</form>
					</div>

				</div>
			</div>
		</div>
	);
};

export default Contact;




