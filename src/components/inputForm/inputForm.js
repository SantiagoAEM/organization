
import "./inputForm.css"

const InputForm = (props) =>{


    const handleChange = (e) => {
        props.setValor(e.target.value)
    }

    return <div className="signForm-inputs">
        <label>{props.titulo}</label>
        <input 
            placeholder={props.placeholder} 
            required={props.required}
            value={props.valor}
            onChange={handleChange}
            />
    </div>
}

export default InputForm