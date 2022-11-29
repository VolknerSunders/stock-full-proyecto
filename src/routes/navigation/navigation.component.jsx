import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as Logo} from '../../assets/logo.svg'

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectIsCartOpen } from "../../store/cart/cart.selector";

import { NavigationContainer,LogoContainer,NavLinks,NavLink } from "./navigation.styles";
import { signOutStart } from '../../store/user/user.action';
import './navigation.styles.scss'

const Navigation = () =>{
    const currentUser = useSelector((state) => state.user.currentUser);
    const isCartOpen = useSelector(selectIsCartOpen);
    const dispatch = useDispatch();
    const signOutUser = () => dispatch(signOutStart());

    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <Logo className='logo'/>
            </LogoContainer>
            <NavLinks>
                {currentUser ? (
                    currentUser.admin ? 
                    <>
                        <NavLink  to='/createitem'>
                            Crear/Actualizar
                        </NavLink>
                        <NavLink to='/items'>
                            Eliminar/Consultar
                        </NavLink>
                    </>
                    :
                    <>
                    </>
                ):(
                    <>
                    </>
                )}
                <NavLink to='/shop'>
                    Tienda
                </NavLink>
                {currentUser ? (
                    <NavLink as='span' onClick={signOutUser}>Cerrar sesion</NavLink>
                ):(
                    <NavLink to='/auth'>
                        Iniciar Sesion
                    </NavLink>
                )}
                <CartIcon/>
            </NavLinks>
            {isCartOpen && <CartDropdown/>}
        </NavigationContainer>
        <Outlet/>
        <footer>
            <div className="footer-copyright text-center">
                <h4> 
                    &copy; Desarrollado con ❤️ por Brian, Cesar y Chiristian 
                </h4>
            </div>
        </footer>
        
      </Fragment>
      
    )
}

export default Navigation