

import './Clases.css';
import zumbaimg from "./Images/zumba.jpg"
import bodycombatimg from "./Images/bodycombat.jpg"
import taekwondoimg from "./Images/taekwondo.jpg"
import bodypumpimg from "./Images/bodypump.jpg"
import powerjumpimg from "./Images/powerjump.jpg"
import crossfitimg from "./Images/crossfit.jpg"
import funcionalimg from "./Images/funcional.jpg"
import taeboimg from "./Images/taebo.jpg"
import bicicletaimg from "./Images/bicicleta.jpg"
import pilatesimg from "./Images/pilates.jpg"
import yogaimg from "./Images/yoga.jpg"
import musculacionimg from "./Images/musculacion.jpg"

export default function Staff(props) {
    const clases = [
        {name: "Zumba", horario: "Lunes- Miércoles y Viernes: 10:00 hs.", foto: zumbaimg},
        {name: "Body-Combat", horario: "Lunes- Miércoles y Viernes: 12:00 hs.", foto: bodycombatimg},
        {name: "Tae-Kwon-Do", horario: "Lunes- Miércoles y Viernes: 14:00 hs.", foto: taekwondoimg},
        {name: "BodyPump", horario: "Lunes- Miércoles y Viernes: 16:00 hs.", foto: bodypumpimg},
        {name: "Power-Jump", horario: "Lunes- Miércoles y Viernes: 18:00 hs.", foto: powerjumpimg},
        {name: "CrossFit", horario: "Lunes- Miércoles y Viernes: 20:00 hs.", foto: crossfitimg},
        {name: "Funcional", horario: "Martes y Jueves: 10:00 hs.", foto: funcionalimg},
        {name: "TaeBo", horario: "Martes y Jueves: 12:00 hs.", foto: taeboimg},
        {name: "Bicicleta", horario: "Martes y Jueves: 14:00 hs.", foto: bicicletaimg},
        {name: "Pilates", horario: "Martes y Jueves: 16:00 hs.", foto: pilatesimg},
        {name: "Yoga", horario: "Martes y Jueves: 18:00 hs.", foto: yogaimg},
        {name: "Musculación", horario: "Todos los días de 10:00 a 22:00 hs.", foto: musculacionimg}
    ]
    return (
        <div>
            <div className="main-div">
                <h1 className="custon-title">CLASES PERSONALIZADAS</h1>
                <p className="description"> En Gimnasio Musculito contamos con clases adaptadas a tus necesidades, y rutinas
                    hechas a tu medida!</p>
            </div>
            <div className="all-cards">
                {
                    clases.map((clase)=> {
                        return (
                            <div className={"card-container-custom"}>
                                <div className="card">
                                    <img src={clase.foto} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{clase.name}</h5>
                                        <p className="card-text">{clase.name} es la disciplina del presente. Diversión, salud y estar en forma,
                                            TODO combinado con la mejor de las ondas.</p>
                                        <a href="#" className="btn btn-primary">{clase.horario}</a>
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

