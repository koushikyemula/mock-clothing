import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth"
import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithGoogleRedirect, auth } from "../../utils/firebase/firebase.utils"

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup()
        const userDocRef = await createUserDocumentFromAuth(user)
    }

    useEffect(async () => {
        const response = await getRedirectResult(auth)
        if (response) {
            const userDocRef = await createUserDocumentFromAuth(response.user)
        }
    }, []);
    return (
        <div>
            <h1>sign in</h1>
            <button onClick={logGoogleUser}>
                sign in with google popup
            </button>
            <button onClick={signInWithGoogleRedirect}>
                sign in with google redirect
            </button>
        </div>
    )
}


export default SignIn;