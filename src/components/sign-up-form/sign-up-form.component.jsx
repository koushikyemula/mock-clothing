import { useState } from "react";
import { createUserAuthWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

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
        <div>
            <h1>sign up</h1>
        <form onSubmit={handleSubmit}>
            <label>Display Name</label>
            <input type="text" required onChange={handleEvent} name="displayName" value={displayName}/>
            <label>Email</label>
            <input type="email" required onChange={handleEvent} name="email" value={email}/>
            <label>Password</label>
            <input type="password" required onChange={handleEvent} name="password" value={password}/>
            <label>Confirm Password</label>
            <input type="password" required onChange={handleEvent} name="confirmPassword" value={confirmPassword}/>
            <button type="submit"> Sign Up</button>
        </form>
        </div>
    )
}

export default SignUpForm;