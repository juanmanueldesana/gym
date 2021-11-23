import React, { useEffect, useState } from "react";
import "./Rutina.css";
import { httpGet, httpPost, httpPatch, httpDelete } from "../utils/httpFunctions";

export default function Rutina() {
  const [profile, setProfile] = useState({});

  const [rutina, setRutina] = useState({});

  const handleIdChange = (event) => {
    setRutina({ ...rutina, athlete_id: event.target.value });
  };

  const handleExercise1Change = (event) => {
    setRutina({ ...rutina, exercise1: event.target.value });
  };

  const handleExercise2Change = (event) => {
    setRutina({ ...rutina, exercise2: event.target.value });
  };

  const handleExercise3Change = (event) => {
    setRutina({ ...rutina, exercise3: event.target.value });
  };

  const handleExercise4Change = (event) => {
    setRutina({ ...rutina, exercise4: event.target.value });
  };

  const handleExercise5Change = (event) => {
    setRutina({ ...rutina, exercise5: event.target.value });
  };

  const crearRutina = (e) => {
    e.preventDefault();
    httpPost('api/rutinas/', {exercise1: rutina.exercise1, exercise2: rutina.exercise2, exercise3: rutina.exercise3, exercise4: rutina.exercise4, exercise5: rutina.exercise5, athlete: rutina.athlete_id}).then((res) => {
      })
  };

  const test = (e) => {
    e.preventDefault();
    console.log(rutina)
  }

  useEffect(() => {
    httpGet("api/me")
      .then((response) => setProfile(response.data))
      .then(
        profile.is_staff != true
          ? httpGet("api/rutinas/?athlete_id=" + profile.id).then((res) =>
              setRutina(res.data)
            )
          : ''
      );
  }, []);


  return (
    <div>
      <h1 className="h1-profile">
        <a style={{ textDecoration: "none", color: "black" }} href="/Perfil">
          Perfil
        </a>
      </h1>
      <h1 className="h1-profile">
        <a style={{ textDecoration: "none", color: "black" }} href="/Rutina">
          Rutina
        </a>
      </h1>
      <form className="container-profile">
        <div className="form-group">
          <div className="input-profile">
            <div className="w-full py-5 ">
              <label
                className="material-input border-gray-400
    material-input-focused
    "
              >
                <span className="input-title">ID Alumno</span>
                <br></br>
                <input
                  type="text"
                  className="w-full pb-1 pl-1 bg-transparent focus:outline-none focus:shadow-none"
                  name="exercise1"
                  defaultValue={profile.is_staff != true ? profile.id : null}
                  onChange={handleIdChange}
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
                <span className="input-title">EJERCICIO 1</span>
                <br></br>
                <input
                  type="text"
                  className="w-full pb-1 pl-1 bg-transparent focus:outline-none focus:shadow-none"
                  name="exercise1"
                  defaultValue={rutina.exercise1}
                  onChange={handleExercise1Change}
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
                <span className="input-title">EJERCICIO 2</span>
                <br></br>
                <input
                  type="text"
                  className="w-full pb-1 pl-1 bg-transparent focus:outline-none focus:shadow-none"
                  name="exercise2"
                  defaultValue={rutina.exercise2}
                  onChange={handleExercise2Change}
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
                <span className="input-title">EJERCICIO 3</span>
                <br></br>
                <input
                  type="text"
                  className="w-full pb-1 pl-1 bg-transparent focus:outline-none focus:shadow-none"
                  name="exercise3"
                  defaultValue={rutina.exercise3}
                  onChange={handleExercise3Change}
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
                <span className="input-title">EJERCICIO 4</span>
                <br></br>
                <input
                  type="text"
                  className="w-full pb-1 pl-1 bg-transparent focus:outline-none focus:shadow-none"
                  name="exercise4"
                  defaultValue={rutina.exercise4}
                  onChange={handleExercise4Change}
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
                <span className="input-title">EJERCICIO 5</span>
                <br></br>
                <input
                  type="text"
                  className="w-full pb-1 pl-1 bg-transparent focus:outline-none focus:shadow-none"
                  name="exercise5"
                  defaultValue={rutina.exercise5}
                  onChange={handleExercise5Change}
                />
              </label>
            </div>
          </div>

          <div className="w-full mb-10 text-center md:w-2/5"></div>
          <div className="w-full mb-10 text-center md:w-2/5">
            {profile.is_staff == true ? (
              <div>
                <button type="submit" className="orange-pill-button" onClick={crearRutina}>
                  Crear
                </button>
                <button type="submit" className="orange-pill-button" onClick={test}>
                  Modificar
                </button>
                <button type="submit" className="orange-pill-button">
                  Buscar
                </button>
                <button type="submit" className="orange-pill-button">
                  Eliminar
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </form>
    </div>
  );
}
