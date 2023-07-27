import { useState } from "react"
import SignUpButton from "./SignupButton"
import "./signup_form.css"
import InputComponent from "./InputComponent"

/* eslint-disable */
var EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
/* eslint-enable */

//helper function for object mapping
const objectMap = (object, mapFn) => {
    return Object.keys(object).reduce((result, key) => {
        result[key] = mapFn(object[key])
        return result
    }, {})
}

const SignUpForm = () => {
    const [form, setForm] = useState({
        firstName: { placeHolder: "First Name", value: "" },
        lastName: { placeHolder: "Last Name", value: "" },
        emailAddress: { placeHolder: "Email Address", value: "" },
        password: { placeHolder: "Password", value: "" },
    })

    const [error, setError] = useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: "",
    })

    const { firstName: fnError, lastName :lnError, emailAddress: eaError, password: pError } = error;
    const { firstName, lastName, emailAddress, password } = form;


    const updateState = event => setForm(
        prevForm => (
            {
                ...prevForm,
                [event.target.name]: {
                    ...prevForm[event.target.name],
                    value: event.target.value
                }
            }))

    const submitForm = (event) => {
        event.preventDefault();

        const check = objectMap(form,
            ({placeHolder, value }) => {
                //only run the email check if the email is entered otherwise this is a different error
                if (value && placeHolder === "Email Address")
                    //Return nothing if email is valid
                    return EMAIL_REGEX.test(value) ? "" : "Looks like this is not an email"
                else if (!value)
                    return `${placeHolder} cannot be empty`
                else
                    return ""
            })

            setError(check)
    }


    return (
        <form className="signup-form">
            <div className="signup__container">
                <InputComponent
                    name="firstName"
                    type="text"
                    placeholder={firstName.placeHolder}
                    handleInput={updateState}
                    value={firstName.value}
                    error={fnError} />
                <InputComponent
                    name="lastName"
                    type="text"
                    placeholder={lastName.placeHolder}
                    handleInput={updateState}
                    value={lastName.value}
                    error={lnError}
                />
                <InputComponent
                    name="emailAddress"
                    type="text"
                    placeholder={emailAddress.placeHolder}
                    handleInput={updateState}
                    value={emailAddress.value}
                    error={eaError}
                />
                <InputComponent
                    name="password"
                    type="password"
                    placeholder={password.placeHolder}
                    handleInput={updateState}
                    value={password.value}
                    error={pError}
                />
                <SignUpButton handleClick={submitForm} />

                <div className="disclaimer">
                    By clicking the button, you are agreeing to our <a href="google.com">Terms and Services</a>
                </div>

            </div>
        </form>
    )
}

export default SignUpForm