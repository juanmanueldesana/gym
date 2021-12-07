import { httpGet } from "../utils/httpFunctions";
import React,  { useEffect, useState } from "react";
import pesa from "./images/pesa.jpg"
import libro from "./images/libro.jpg"




export default function Comunidad(props) {


    const [comunidad, setComunidad] = useState([]);

    const getComunidad = ()=> {
        httpGet("api/getUsers/").then(res => {
            setComunidad(res.data)
        }).catch(err => {
            localStorage.clear();
            window.location.reload();
        });;
    }

    const getProfesores = ()=> {
        httpGet("api/getUsers/?is_staff=True" ).then(res => {
            setComunidad(res.data);
        });
    }

    const getAtletas= ()=> {
        httpGet("api/getUsers/?is_staff=False").then(res => {
            setComunidad(res.data);
        });
    }

    useEffect(() => {
        getComunidad();   
    }, []);


    return (
        <div>
            <div className="main-div">
                <h1 className="custon-title">LA MEJOR COMUNIDAD!</h1>
                <p className="description"> Contamos con el mejor staff de profesores que acompañan nuestros atletas, siempre capacitados con las últimas tendencias!</p>
            </div>
            <div style={{ marginLeft: "35px" }} class="dropdown">
						<button style={{ backgroundColor: "#FF5300", marginBottom: "15px", marginTop: "15px" }} class="btn btn-info dropdown-toggle" type="button" id="dropdownMenu2"
							data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							Filtrar por
						</button>
						<div class="dropdown-menu" aria-labelledby="dropdownMenu2">
							<button onClick={getProfesores} class="dropdown-item" type="button">Profesores</button>
							<button onClick={getAtletas} class="dropdown-item" type="button">Atletas</button>
                            <button onClick={getComunidad} class="dropdown-item" type="button">Todos</button>
						</div>
					</div>
            <div className="all-cards">
                {comunidad.map(user => (
                <div style={{ marginLeft: "25px" }} className="card-container-custom">
                <div className="card" style={{ display: "flex", alignItems: "center" }} >
                    <img style={{ width: "150px" }} className="card-img-top" src={user.is_staff==true?libro:pesa} alt="fotoComunidad"/>
                    <div style={{ textAlign: "center" }} className="card-body">
                        <h5 className="card-title">{user.first_name}</h5>
                        <h5 className="card-text">{user.last_name}</h5>
                        <h5 className="card-text">{user.is_staff==true?"Profesor":"Atleta"}</h5>
                    </div>
                    </div>
                    </div>
                ))}
        </div>
        </div>
    );
}

