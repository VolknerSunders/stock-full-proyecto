import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import './sign-up-form.styles.scss'
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}


const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert("las contraseñas no coinciden");
            return;
        }

        try{
            const {user} = await createAuthUserWithEmailAndPassword(
                email, 
                password
            );

            await createUserDocumentFromAuth(user, {displayName});
            resetFormFields();
        }catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('No se creo usuario, correo ya esta en uso')
            }else{
                console.log("la creacion del usuario causo un error", error);
            }
        }
    }

    const handleChange = (event) => {
        const {name,value} = event.target;

        setFormFields({...formFields, [name]:value});
    }

    return(
        <div className="sign-up-container">
            <h2>¿No tienes cuenta?</h2>
            <span>Inicia sesion con correo electronico</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Nombre de usuario'
                    type="text" 
                    required 
                    onChange={handleChange} 
                    name="displayName" 
                    value={displayName}
                />

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

                <FormInput 
                    label='Confirmar contraseña'
                    type='password' 
                    required 
                    onChange={handleChange} 
                    name="confirmPassword" 
                    value={confirmPassword}
                />

                <Button type="submit">Registrase</Button>
            </form>
        </div>
    )
}

export default SignUpForm;