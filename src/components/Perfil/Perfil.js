import React,  { useEffect, useState } from "react";
import "./Perfil.css";
import { httpGet, httpPatch, httpDelete } from "../utils/httpFunctions";

const axios = require("axios");

export default function Perfil() {

const updateUser = ()=> {
    
    httpPatch("api/meUpdate/", profile)
}

/* const deleteUser = ()=> {  
    httpDelete("api/meDelete/")
} */

const deleteUser = () => {
  httpDelete("api/meDelete/"+profile.id+ "/")
}

const [profile, setProfile] = useState({});

const handleFirstNameChange = (event) => {
  setProfile({ ...profile, first_name: event.target.value })
};

const handleLastNameChange = (event) => {
  setProfile({ ...profile, last_name: event.target.value })
};

const handleEmailChange = (event) => {
  setProfile({ ...profile, email: event.target.value })
};

const cerrarSesion = ()=>{
  localStorage.clear();
  window.location.href = "/";
}

  useEffect(() => {
    httpGet("api/me").then(response => setProfile(response.data))
  }, [])

  return (
    <div>
      <h1 className="h1-profile"><a style={{ textDecoration: "none", color: "black" }} href="/Perfil">Perfil</a></h1>
      <h1 className="h1-profile"><a style={{ textDecoration: "none", color: "black" }} href="/Rutina">Rutina</a></h1>
      {profile.is_staff == true?<h1 className="h1-profile"><a style={{ textDecoration: "none", color: "black" }} href="/Registro">Crear usuario</a></h1>:null}
      <h1 className="h1-profile"><a onClick={cerrarSesion} style={{ textDecoration: "none", color: "black" }} href="/">Cerrar sesion</a></h1>
      <form className="container-profile">
      <div className="form-group">
        <div className="input-profile">
          <div className="w-full py-5 ">
            <label
              className="material-input border-gray-400
    material-input-focused
    "
            >
              <span className="input-title">Nombre</span><br></br>
              <input
                type="text"
                className="w-full pb-1 pl-1 bg-transparent focus:outline-none focus:shadow-none"
                name="nombre"
                defaultValue={profile.first_name}
                onChange={handleFirstNameChange}
              />
            </label>
          </div>
        </div>
        <div className="input-profile">
          <div className="w-full py-5 ">
            <label
              className="material-input border-gray-400
    material-input-focused
    "
            >
              <span className="input-title">Apellido</span><br></br>
              <input
                type="text"
                className="w-full pb-1 pl-1 bg-transparent focus:outline-none focus:shadow-none"
                name="apellidoPaterno"
                defaultValue={profile.last_name}
                onChange={handleLastNameChange}
              />
            </label>
          </div>
        </div>
        <div className="input-profile">
        </div>
        <div className="input-profile">
          <div className="w-full py-5 ">
            <label
              className="material-input border-gray-400
    material-input-focused
    "
            >
              <span className="input-title">DNI</span><br></br>
              <input disabled
                type="text"
                disabled=""
                className="w-full pb-1 pl-1 bg-transparent focus:outline-none focus:shadow-none"
                name="dni"
                value={profile.username}
              />
            </label>
          </div>
        </div>
        <div className="input-profile">
          <div className="w-full py-5 ">
            <label
              className="material-input border-gray-400
    material-input-focused
    "
            >
              <span className="input-title">
                Correo electronico 
              </span><br></br>
              <input
                type="text"
                className="w-full pb-1 pl-1 bg-transparent focus:outline-none focus:shadow-none"
                name="mail"
                defaultValue={profile.email}
                onChange={handleEmailChange}
              />
            </label>
          </div>
        </div>
        <div className="w-full mb-10 text-center md:w-2/5"></div>
        <div className="w-full mb-10 text-center md:w-2/5">
          <button type="submit" className="orange-pill-button" onClick={updateUser}>
            Guardar
          </button>
        </div>
           <button onClick={deleteUser} style={{ marginBottom: "10px", display: "flex", justifyContent: "end" }} type="button" className="orange-pill-button">
            Eliminar usuario
          </button> 
        </div>
      </form>
    </div>
  );
}
