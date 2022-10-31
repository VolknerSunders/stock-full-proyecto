import { signInWithGooglePopup,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
    }


    return(
        <div>
            <h1>Pagina para iniciar sesion</h1>
            <button onClick={logGoogleUser}>
                Iniciar sesion con google
            </button>
        </div>
    )
}

export default SignIn;