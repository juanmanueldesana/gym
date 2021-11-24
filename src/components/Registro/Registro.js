import React, { useState } from "react";
import { httpPost } from "../utils/httpFunctions";
import { useHistory } from "react-router-dom";

export default function Registro() {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [is_staff, setStaff] = useState();

  const history = useHistory();

  const registro = (e) => {
    e.preventDefault();
    httpPost("api/register/", {username: username,password: password,is_staff: is_staff,
    }).then((res) => {
      localStorage.setItem("token", res.data.access);
      history.push("/Perfil");
    });
  };

  return (
    <div className="form-container log">
      <form className="register-form" onSubmit={registro}>
        <h3 className="form-h3">Registrar usuario</h3>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          class="form-field"
          type="password"
          placeholder="Contraseña"
          name="password"
        />
        <div>
        <label>Es staff?</label>
        <input value={is_staff} onChange={(e) => setStaff(e.target.value)}
          id="is_staff"
          class="form-field"
          type="checkbox"
          name="is_staff"
        />
        </div>
        <button type="submit" class="form-field form-btn" type="submit">
          Registrar
        </button>
      </form>
    </div>
  );
}
