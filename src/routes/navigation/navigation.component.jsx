import { Fragment, useContext } from "react"
import { Outlet, Link } from "react-router-dom"

import { ReactComponent as Logo} from '../../assets/logo.svg'

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import './navigation.styles.scss';

const Navigation = () =>{
    const { currentUser } = useContext(UserContext);
    const { isCartOpen} = useContext(CartContext);

    return (
      <Fragment>
        <div className="navigation">
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className="nav-links-container">
                <Link className='nav-Link' to='/shop'>
                    Tienda
                </Link>
                {currentUser ? (
                    <span className="nav-link" onClick={signOutUser}>Cerrar sesion</span>
                ):(
                    <Link className='nav-link' to='/auth'>
                        Iniciar Sesion
                    </Link>
                )}
                <CartIcon/>
            </div>
            {isCartOpen && <CartDropdown/>}
        </div>
        <Outlet/>
      </Fragment>
    )
}

export default Navigation