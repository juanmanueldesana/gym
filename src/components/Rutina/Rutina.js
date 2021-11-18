import React from "react";
import "./Rutina.css";

export default function Rutina() {



    return (
        <div>
            <h1 className="h1-profile"><a style={{ textDecoration: "none", color: "black" }} href="/Perfil">Perfil</a></h1>
            <h1 className="h1-profile"><a style={{ textDecoration: "none", color: "black" }} href="/Rutina">Rutina</a></h1>
            <form className="container-profile">



                <div className="form-group">

                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            PROFESOR
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Carolina</a>
                            <a className="dropdown-item" href="#">Juan Carlos</a>
                            <a className="dropdown-item" href="#">Eugenio</a>
                        </div>
                    </div>


                    <div className="input-profile">
                        <div className="w-full py-5 ">
                            <label
                                className="material-input border-gray-400
    material-input-focused
    "
                            >
                                <span className="input-title">EJERCICIO 1</span><br></br>
                                <input
                                    type="text"
                                    className="w-full pb-1 pl-1 bg-transparent focus:outline-none focus:shadow-none"
                                    name="exercise1"
                                    value=""
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
                                <span className="input-title">EJERCICIO 2</span><br></br>
                                <input
                                    type="text"
                                    className="w-full pb-1 pl-1 bg-transparent focus:outline-none focus:shadow-none"
                                    name="exercise2"
                                    value=""
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
                                <span className="input-title">EJERCICIO 3</span><br></br>
                                <input
                                    type="text"
                                    className="w-full pb-1 pl-1 bg-transparent focus:outline-none focus:shadow-none"
                                    name="exercise3"
                                    value=""
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
                                <span className="input-title">EJERCICIO 4</span><br></br>
                                <input
                                    type="text"
                                    className="w-full pb-1 pl-1 bg-transparent focus:outline-none focus:shadow-none"
                                    name="exercise4"
                                    value=""
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
                                <span className="input-title">EJERCICIO 5</span><br></br>
                                <input disabled
                                       type="text"
                                       disabled=""
                                       className="w-full pb-1 pl-1 bg-transparent focus:outline-none focus:shadow-none"
                                       name="exercise5"
                                       value=""
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
                EJERCICIO 6
              </span><br></br>
                                <input disabled
                                       type="text"
                                       disabled=""
                                       className="w-full pb-1 pl-1 bg-transparent focus:outline-none focus:shadow-none"
                                       name="exercise6"
                                       value=""
                                />
                            </label>
                        </div>
                    </div>

                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">RUTINA TERMINADA</label>
                    </div>


                    <div className="w-full mb-10 text-center md:w-2/5"></div>
                    <div className="w-full mb-10 text-center md:w-2/5">
                        <button type="submit" className="orange-pill-button">
                            Guardar
                        </button>
                    </div>

                </div>



            </form>
        </div>
    );
}
