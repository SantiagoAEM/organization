import "./optionList.css"
const OptionList = (props) =>{
    const equipos = [
        "Programación",
        "Data science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión",
        "Front end"
   ]

   const handleChange =(e)=>{
        props.setEquipo(e.target.value)
   }
    return<div className="signForm-optionList">
       <label>Equipos</label>
      
       <select value={props.valor} onChange={handleChange}>
       <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
            {equipos.map((equipo, index)=>{
                return <option key={index}>{equipo}</option>
            })}
       </select>        
    </div>
}

export default OptionList