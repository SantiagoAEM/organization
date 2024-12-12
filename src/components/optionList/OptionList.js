import "./optionList.css"
const OptionList = (props) =>{

    const handleChange =(e)=>{
        props.setEquipo(e.target.value)
   }
    return<div className="signForm-optionList">
       <label>Equipos</label>
      
       <select value={props.valor} onChange={handleChange}>
       <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipo.map((equipo, index)=>{
                return <option key={index}>{equipo}</option>
            })}
       </select>        
    </div>
}

export default OptionList