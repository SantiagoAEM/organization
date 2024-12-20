import Colab from "../collaborator/colab"
import "./equipos.css"

const Equipos = (props) =>{
    //destructuracion
    const {titulo, color, backgroundColor } = props.data
    const {collaborators,deleteCollaborator,updateColor} = props

    return <>
        { collaborators.length > 0 &&
            <section className="teams" style={{backgroundColor: backgroundColor}}>
                <input
                     type="color"
                     value={backgroundColor}
                     onChange={(e) => {updateColor(e.target.value, color)}}
                />
                <h3 style={{borderColor: color}}>{titulo}</h3>
                <div className="teams-colab">
                {collaborators.map((collaborators, index)=> 
                <Colab 
                    datos ={collaborators}
                    key={index} 
                    color={color}
                    backgroundColor={backgroundColor}
                    deleteCollaborator={deleteCollaborator}
                />) 
                }
                </div>            
            </section>
        }
 </>
}

export default Equipos