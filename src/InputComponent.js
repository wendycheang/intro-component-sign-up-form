import './input_component.css';

const InputComponent = ({name, placeholder, handleInput, value, error, type}) => {

    const errorClass = error ? "input__error" : ""

    const errorMessage = (<p className="error_message">{error}</p>)
    
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