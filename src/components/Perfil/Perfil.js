import React from "react";
import "./Perfil.css";

export default function Perfil() {
  return (
    <div>
      <h1 className="h1-profile"><a style={{ textDecoration: "none", color: "black" }} href="/Perfil">Perfil</a></h1>
      <h1 className="h1-profile"><a style={{ textDecoration: "none", color: "black" }} href="/Rutina">Rutina</a></h1>
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
                value="Juan Manuel"
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
                value="Desana"
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
              <span className="input-title">Teléfono</span><br></br>
              <input
                type="text"
                className="w-full pb-1 pl-1 bg-transparent focus:outline-none focus:shadow-none"
                name="telefono"
                value="3413736426"
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
              <span className="input-title">DNI</span><br></br>
              <input disabled
                type="text"
                disabled=""
                className="w-full pb-1 pl-1 bg-transparent focus:outline-none focus:shadow-none"
                name="dni"
                value="41217879"
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
              <input disabled
                type="text"
                disabled=""
                className="w-full pb-1 pl-1 bg-transparent focus:outline-none focus:shadow-none"
                name="mail"
                value="juanmanuel.manuel70@gmail.com"
              />
            </label>
          </div>
        </div>
        <div className="w-full mb-10 text-center md:w-2/5"></div>
        <div className="w-full mb-10 text-center md:w-2/5">
          <button type="submit" className="orange-pill-button">
            Guardar
          </button>
        </div>
          <button style={{ marginBottom: "10px" }} type="button" className="orange-pill-button">
            Cambiar contaseña
          </button>
        </div>
      </form>
    </div>
  );
}
