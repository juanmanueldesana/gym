import './Login.css';
import { useState } from 'react';
import { httpPost } from '../utils/httpFunctions';
import {useHistory} from 'react-router-dom';


export default function Login() {

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const history = useHistory();

    const login = (e) => {
      e.preventDefault();
      httpPost('api/login/', {username: username, password: password}).then((res) => {
        localStorage.setItem('token', res.data.access);
        history.push('/');
        })
    };


    const handleFirstNameInputChange = (event) => {
        setValues({ ...values, firstName: event.target.value })
    };

  return(
    <div className="form-container log">
      <form className="register-form" onSubmit={login}>
      <h3 className="form-h3">Iniciar sesión</h3>
          <input onChange={handleFirstNameInputChange}
                    value={username} onChange={(e) => setUsername(e.target.value)}
                    id="email"
                    class="form-field"
                    type="text"
                    placeholder="Email"
                    name="email"/>
          <input onChange={handleFirstNameInputChange}
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    id="password"
                    class="form-field"
                    type="password"
                    placeholder="Contraseña"
                    name="password"/>
          <button type="submit" class="form-field form-btn" type="submit">Login</button>
      </form>
    </div>
  )
}


