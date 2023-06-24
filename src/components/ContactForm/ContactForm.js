import { useState } from "react";
import "./ContactForm.css";
import { Col, Row } from "react-bootstrap";


function ContactForm() {
    const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [isError] = useState(false);
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
        <div id="contact-form" className="contact-form">
            <form onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <input
                            type="text"
                            className="form-control"
                            id="contact-page__form-name"
                            placeholder="Su Nombre"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </Col>
                    <Col md={6} className="mt-3 mt-md-0">
                        <input
                            type="email"
                            className="form-control"
                            id="contact-page__form-email"
                            placeholder="Su correo electrónico"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Col>
                </Row>

                <div className="mt-3">
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
                <div className="mt-3">
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
                    />
                </div>
                <div className="my-3">
                    {isLoading && <div className="loading">Cargando...</div>}
                    {isError && <div className="error-message">Ha ocurrido un error. Por favor intenta de nuevo.</div>}
                    {isSent && <div className="sent-message">Su mensaje ha sido enviado, Gracias! </div>}
                </div>
                <div className="text-center">
                    <button type="submit">Enviar Mensaje</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;