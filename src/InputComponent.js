import './input_component.css';
import { ReactComponent as ErrorIcon } from "./images/icon-error.svg"

console.log(process.env)

const InputComponent = ({name, placeholder, handleInput, value, error, type}) => {

    const errorClass = error ? "input__error" : ""

    const errorMessage = (<p className="error_message">{error}</p>)
    const errorIcon = (<ErrorIcon />)
    
    return (
        <div>
            <input
                className= {`signup__input ${errorClass}`}
                type= {type}
                name={name}
                placeholder={placeholder}
                onChange={handleInput}
                value={value}
            />
            {error && errorMessage }
        </div>
    )
}


export default InputComponent;