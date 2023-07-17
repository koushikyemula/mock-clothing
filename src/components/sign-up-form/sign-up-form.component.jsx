import { useState } from "react";
import { createUserAuthWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component"
import "./sign-up-form.styles.scss"

const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { displayName, email, password, confirmPassword } = formFields
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(password != confirmPassword){
            alert("passwords do not match")
            return
        } 

        try {
            const {user} = await createUserAuthWithEmailAndPassword(
                email,
                password
            )
            await createUserDocumentFromAuth(user, {displayName})
            resetFormFields()
        } catch (error) {
            if (error.code == "auth/email-already-in-use") {
                alert("email already in use, try logging in")
            } else (
                console.log("error creating user" , error)
            )
        }
    }

    const handleEvent = (event) => {
       const {name, value} = event.target;
       setFormFields({...formFields, [name]: value})
    }

    return (
        <div className="sign-up-container">
            <h2>Dont Have An Account?</h2>
            <span>Sign Up With Your Email</span> 
        <form onSubmit={handleSubmit}>
            <FormInput label="Display Name" type="text" required onChange={handleEvent} name="displayName" value={displayName}/>
            <FormInput label="Email" type="email" required onChange={handleEvent} name="email" value={email}/>
            <FormInput label="Password" type="password" required onChange={handleEvent} name="password" value={password}/>
            <FormInput label="Confirm Password" type="password" required onChange={handleEvent} name="confirmPassword" value={confirmPassword}/>
            <button type="submit"> Sign Up</button>
        </form>
        </div>
    )
}

export default SignUpForm;