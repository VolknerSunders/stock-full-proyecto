import { Fragment, useContext } from "react"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux";

import { ReactComponent as Logo} from '../../assets/logo.svg'

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { NavigationContainer,LogoContainer,NavLinks,NavLink } from "./navigation.styles";

const Navigation = () =>{
    const currentUser = useSelector((state) => state.user.currentUser);
    const { isCartOpen} = useContext(CartContext);

    return (
      <Fragment>
        <NavigationContainer>
            <LogoContainer to='/'>
                <Logo className='logo'/>
            </LogoContainer>
            <NavLinks>
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
      </Fragment>
    )
}

export default Navigation