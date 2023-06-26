import { useRef, useState } from "react";
import "./ContactForm.css";
import { Button, Col, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser'

function ContactForm() {

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [isSent, setIsSent] = useState(false);

    const form = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsSent(false);
        setIsError(false);
        setIsLoading(true);
        
        await emailjs.sendForm('service_hirfhcq', 'template_docyabi',  form.current, '2vsj-iXgzrayjp8p7')
        .then((result) => {
            console.log(result.text);
            setIsSent(true);
        }, (error) => {
            console.log(error.text);
            setIsError(true);
        });

        setIsLoading(false);
    };

    return (
        <div id="contact-form" className="contact-form">
            <Form ref={form} onSubmit={handleSubmit}>
                <Row>
                    <Col md={6}>
                        <Form.Control
                            type="text"
                            id="contact-page__form-name"
                            placeholder="Su Nombre"
                            required
                            name="user_name"
                        />
                    </Col>
                    <Col md={6} className="mt-3 mt-md-0">
                        <Form.Control
                            type="email"
                            id="contact-page__form-email"
                            placeholder="Su correo electrónico"
                            required
                            name="user_email"
                        />
                    </Col>
                </Row>

                <div className="mt-3">
                    <Form.Control
                        type="text"
                        id="contact-page__form-subject"
                        placeholder="Asunto"
                        required
                        maxLength="100"
                        name="subject"
                    />
                </div>
                <div className="mt-3">
                    <Form.Control
                        as="textarea"
                        name="message"
                        id="contact-page__form-message"
                        rows="5"
                        placeholder="Mensaje"
                        required
                        maxLength="1000"
                        name="message"
                    />
                </div>
                <div className="my-3">
                    {isLoading && <div className="loading">Enviando...</div>}
                    {isError && <div className="error-message">Ha ocurrido un error. Por favor intenta de nuevo.</div>}
                    {isSent && <div className="sent-message">Su mensaje ha sido enviado, Gracias! </div>}
                </div>
                <div className="text-center">
                    <Button disabled={isLoading} type="submit">Enviar Mensaje</Button>
                </div>
            </Form>
        </div>
    )
}

export default ContactForm;