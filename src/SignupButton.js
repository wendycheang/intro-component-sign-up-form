import "./signup_button.css"

const SignUpButton = ({handleClick}) => {

    return (
        <button onClick={handleClick} className="signup__button">
            Claim your free trial 
        </button>
    )
}


export default SignUpButton;