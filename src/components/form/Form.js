import { useState } from "react"
import "./Form.css"
import InputForm from '../inputForm/inputForm.js'
import OptionList from "../optionList/OptionList.js"
import Button from "../button/button.js"


const  Form = (props) =>{

    const [nombre,setNombre] = useState ("");
    const [puesto,setPuesto] = useState ("");
    const [foto,setFoto] = useState ("");
    const [equipo,setEquipo] = useState("");

    const {regis} = props;

    const  eventSubmit = (e)=>{
        e.preventDefault()
        
        let dataSend = {
            nombre,
            puesto,
            foto,
            equipo
        }
        regis(dataSend);
    } 

return <section className="signForm">
    <form onSubmit={eventSubmit}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <InputForm titulo="Nombre" 
            placeholder="Ingresar nombre..." 
            required
            valor={nombre}
            setValor ={setNombre}
        />
        <InputForm titulo="Puesto"
            placeholder="Ingresar puesto" 
            required
            valor={puesto}
            setValor ={setPuesto}
        />
        <InputForm titulo="Foto"  
            placeholder="Ingresar enlace de foto" 
            required
            valor={foto}
            setValor={setFoto}
            />
        <OptionList valor={equipo}
            setEquipo={setEquipo}
            equipo={props.equipo}
        />
        <Button texto="Crear"/> 
    </form>
</section>
}
export default Form