import { useState } from "react";
import { 
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInAuthUserWithEmailAndPassword
} from "../../utils/firebase/firebase.utils";
import './sign-in-form.styles.scss'
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
    email: '',
    password: ''
}


const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () =>{
        const {user} = await signInWithGooglePopup();
        await createUserDocumentFromAuth(user);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const response = await signInAuthUserWithEmailAndPassword(email,password);
            resetFormFields();
        }catch(error){
            switch(error.code){
                case "auth/wrong-password":
                    alert("contraseña incorrecta")
                    break;
                case "auth/user-not-found":
                    alert("no hay cuenta asociada a ese correo")
                    break;
                default:
                    console.log(error)
            }
        }
    }

    const handleChange = (event) => {
        const {name,value} = event.target;

        setFormFields({...formFields, [name]:value});
    }

    return(
        <div className="sign-up-container">
            <h2>¿Ya tienes cuenta?</h2>
            <span>Inicia sesion con tu correo y contraseña</span>
            <form onSubmit={handleSubmit}>

                <FormInput
                    label='Correo'
                    type="email" 
                    required 
                    onChange={handleChange} 
                    name="email" 
                    value={email}
                />

                <FormInput
                    label='Contraseña'
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name="password" 
                    value={password}
                />
                <div className="buttons-container">
                    <Button 
                        type="submit">
                        Iniciar sesion
                    </Button>
                    <Button 
                        type = "button"
                        buttonType='google' 
                        onClick = {signInWithGoogle}
                    >
                        Google
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm;