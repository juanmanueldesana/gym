import Form from "./Form";
import './Landing.css'
export default function Landing(props) {


    return (
        <>
            <div className="land-container">
                <h1 className='land-h1'>Gimnasio Musculito</h1>
                <p className='land-p'>Bienvenidos al gimnasio musculito, el mejor lugar para ponerse fuerte y grande en poco tiempo, con resultados 100% garantizados!</p>
            </div>
            <Form />
        </>
    )
}