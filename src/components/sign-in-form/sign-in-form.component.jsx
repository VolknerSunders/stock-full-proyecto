import { useState } from "react";
import {
    googleSignInStart,
    emailSignInStart,
  } from '../../store/user/user.action';
import { useDispatch } from 'react-redux';
import './sign-in-form.styles.scss'
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { Link } from "react-router-dom";

const defaultFormFields = {
    email: '',
    password: ''
}


const SignInForm = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {email, password} = formFields;


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () =>{
        dispatch(googleSignInStart());
        
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            dispatch(emailSignInStart(email, password));
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
                <div className='buttons-container'>
                    <Button type='submit'>Iniciar sesion</Button>
                    <Button buttonType='google' type='button' onClick={signInWithGoogle}>
                        Google
                    </Button>
                </div>
            </form>
            <h3>¿No tienes cuenta?</h3>
            <Link to="/register">¡Registrate dando click aqui!</Link>
        </div>
    )
}

export default SignInForm;