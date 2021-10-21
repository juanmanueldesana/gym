import { useState } from "react"
import './Form.css'
export default function Form(props) {

    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);

    const handleFirstNameInputChange = (event) => {
        setValues({ ...values, firstName: event.target.value })
    };

    const handleLastNameInputChange = (event) => {
        setValues({ ...values, lastName: event.target.value })
    };

    const handleEmailInputChange = (event) => {
        setValues({ ...values, email: event.target.value })
    };

    const handleMessageInputChange = (event) => {
        setValues({ ...values, message: event.target.value })
    };

    return (
        <div class="form-container">
            <form class="register-form">
                <h3>Comunicate con nosotros</h3>
                {submitted ? <div class="success-message">El mensaje se ha enviado! Nos contactaremos a la brevedad</div> : null}
                <input
                    onChange={handleFirstNameInputChange}
                    value={values.firstName}
                    id="first-name"
                    class="form-field"
                    type="text"
                    placeholder="Nombre"
                    name="firstName"
                />
                {/* <span id="first-name-error">Por favor ingresa un nombre</span> */}
                <input
                    onChange={handleLastNameInputChange}
                    value={values.lastName}
                    id="last-name"
                    class="form-field"
                    type="text"
                    placeholder="Apellido"
                    name="lastName"
                />
                {/* <span id="last-name-error">Por favor ingresa un apellido</span> */}
                <input
                    onChange={handleEmailInputChange}
                    value={values.email}
                    id="email"
                    class="form-field"
                    type="text"
                    placeholder="Email"
                    name="email"
                />
                {/* <span id="email-error">Por favor ingresa una direccion de email</span> */}
                <textarea
                    onChange={handleMessageInputChange}
                    value={values.message}
                    id="textarea"
                    class="form-field"
                    type="text"
                    placeholder="Dejanos tu mensaje"
                    name="message" />

                {/* <span id="textarea-error">Por favor ingresa tu mensaje</span> */}
                <button
                    class="form-field form-btn"
                    type="submit">
                    Contactanos
                </button>
            </form>
        </div>
    )
}
