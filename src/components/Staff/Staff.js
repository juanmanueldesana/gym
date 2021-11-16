

import './Staff.css';
import juancarlosimg from "./Images/juancarlos.jpg"
import agustinaimg from "./Images/agustina.jpg"
import florenciaeignacioimg from "./Images/florenciaeignacio.jpg"
import guadalupeimg from "./Images/guadalupe.jpg"
import ronaldoimg from "./Images/ronaldo.jpg"
import eugenioimg from "./Images/eugenio.jpg"
import robertojpg from "./Images/roberto.jpg"
import jenifferimg from "./Images/jeniffer.jpg"
import pamelaimg from "./Images/pamela.jpg"
import lucianaimg from "./Images/luciana.jpg"
import karinaimg from "./Images/karina.jpg"
import carolinaimg from "./Images/carolina.jpg"

export default function Staff(props) {
    const staff = [
        {name: "Juan Carlos", profesor: "PROFESOR DE: ZUMBA!", foto: juancarlosimg},
        {name: "Agustina", profesor: "PROFESORA DE: BODY COMBAT!", foto: agustinaimg},
        {name: "Flor y Nacho", profesor: "PROFESORES DE: TAE-KWON-DO!", foto: florenciaeignacioimg},
        {name: "Guadalupe", profesor: "PROFESORA DE: BODY PUMP!", foto: guadalupeimg},
        {name: "Ronaldo", profesor: "PROFESOR DE: POWER JUMP!", foto: ronaldoimg},
        {name: "Eugenio", profesor: "PROFESOR DE: CROSSFIT!", foto: eugenioimg},
        {name: "Roberto", profesor: "PROFESOR DE: FUNCIONAL!", foto: robertojpg},
        {name: "Jeniffer", profesor: "PROFESORA DE: TAE-BO!", foto: jenifferimg},
        {name: "Pamela", profesor: "PROFESORA DE: SPINNING!", foto: pamelaimg},
        {name: "Luciana", profesor: "PROFESORA DE: PILATES!", foto: lucianaimg},
        {name: "Karina", profesor: "PROFESORA DE: YOGA!", foto: karinaimg},
        {name: "Carolina", profesor: "PROFESORA DE: MUSCULACIÓN!", foto: carolinaimg}
    ]
    return (
        <div>
            <div className="main-div">
                <h1 className="custon-title">LOS MEJORES PROFESORES!</h1>
                <p className="description"> En Gimnasio Musculito contamos con el mejor staff de profesores, siempre capacitados con las últimas tendencias!</p>
            </div>
            <div className="all-cards">
                {
                    staff.map((staff)=> {
                        return (
                            <div className={"card-container-custom"}>
                                <div className="card">
                                    <img src={staff.foto} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{staff.name}</h5>
                                        <p className="card-text">{staff.name} pertenece a nuestro Staff profesionalizado. Te animás a tomar su clase??</p>
                                        <a href="#" className="btn btn-primary">{staff.profesor}</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

