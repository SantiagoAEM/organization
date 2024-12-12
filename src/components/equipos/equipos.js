import Colab from "../collaborator/colab"
import "./equipos.css"

const Equipos = (props) =>{
    //destructuracion
    const {titulo, color, backgroundColor } = props.data

    return <section className="teams" style={{backgroundColor: backgroundColor}}>
        <h3 style={{borderColor: color}}>{titulo}</h3>
        <div className="teams-colab">
            <Colab />
            <Colab />
            <Colab />
            <Colab />  
        </div>
        
    </section>
    
}

export default Equipos