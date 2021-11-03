import './Login.css';
import { useState } from 'react';

export default function Login() {

    const [values, setValues] = useState({
        email: "",
        password: "",
    });


    const handleFirstNameInputChange = (event) => {
        setValues({ ...values, firstName: event.target.value })
    };

  return(
    <div className="form-container log">
      <form className="register-form">
      <h3 className="form-h3">Iniciar sesión</h3>
          <input onChange={handleFirstNameInputChange}
                    value={values.firstName}
                    id="email"
                    class="form-field"
                    type="email"
                    placeholder="Email"
                    name="email"/>
          <input onChange={handleFirstNameInputChange}
                    value={values.firstName}
                    id="password"
                    class="form-field"
                    type="password"
                    placeholder="Contraseña"
                    name="password"/>
          <button class="form-field form-btn" type="submit">Login</button>
      </form>
    </div>
  )
}


