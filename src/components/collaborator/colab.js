import "./colab.css"
import { FaWindowClose } from "react-icons/fa";

const Colab = (props) => {
    const {nombre, puesto, foto, equipo} = props.datos
    const {color, deleteCollaborator} = props
    
    return <div 
        className="colabCard" 
        style={{background:`linear-gradient(to top, #f6f6f6 60%,${color} 30%)`}}
        >            
            <FaWindowClose onClick={deleteCollaborator}/>
            <img src={foto} alt="fotografia collaborator"></img>
            <div className="colabCard-text">
                <h4>{nombre}</h4>
                <p className="colabCard-stdy">{puesto}</p>
            </div>

    </div>
}

export default Colab