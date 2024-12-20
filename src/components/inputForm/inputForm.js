
import "./inputForm.css"

const InputForm = (props) =>{
    const {type = "text"}= props

    const handleChange = (e) => {
        props.setValor(e.target.value)
    }

    return <div className={`signForm-inputs input-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={props.placeholder} 
            required={props.required}
            value={props.valor}
            onChange={handleChange}
            type={type}
            />
    </div>
}

export default InputForm