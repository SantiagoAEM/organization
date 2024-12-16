import Colab from "../collaborator/colab"
import "./equipos.css"

const Equipos = (props) =>{
    //destructuracion
    const {titulo, color, backgroundColor } = props.data
    const {collaborators} = props

    return <>
        { collaborators.length > 0 &&
            <section className="teams" style={{backgroundColor: backgroundColor}}>
                <h3 style={{borderColor: color}}>{titulo}</h3>
                <div className="teams-colab">
                {collaborators.map((collaborators, index)=> 
                <Colab 
                    datos ={collaborators}
                    key={index} 
                    color={color}
                />) 
                }
                </div>            
            </section>
        }
 </>
}

export default Equipos