import './checkout.styles.scss'
import { useSelector } from 'react-redux';
import {
    selectCartItems,
    selectCartTotal,
  } from '../../store/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);

    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Producto</span>
                </div>
                <div className='header-block'>
                    <span>Descripcion</span>
                </div>
                <div className='header-block'>
                    <span>Cantidad</span>
                </div>
                <div className='header-block'>
                    <span>Precio</span>
                </div>
                <div className='header-block'>
                    <span>Remover</span>
                </div>
            </div>
                {cartItems.map((cartItem) => {
                    return (
                       <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                    )
                })}
            <span className='total'>Total: {cartTotal}</span>
        </div>
    )
}

export default Checkout;