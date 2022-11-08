import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import * as CartItemActions from '../../store/cartItemReducer'
import { CartItem } from './CartItem'
import "./CartItemIndex.css"

export const CartItemIndex = ({show}) => {
    const cartItems = useSelector(state => Object.values(state.cartItems));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(CartItemActions.fetchAllCartItems())
    }, [dispatch]); //do we really need to re-render all cart items 

    let drawerClasses = 'side-drawer';
    if(show) {
       drawerClasses = 'side-drawer open';
    }

    return cartItems ? (
        <>
        <div className={drawerClasses}>
            <h2 className="cart-header">Your Cart...</h2>
            <ul className="cart-ul">
                {cartItems.map(cartItem => (
                    
                    <li key={cartItem.id} className="cart-index-item">
                        <CartItem item={cartItem} id={cartItem.id}/>
                    </li>
                    
                ))}
            </ul>
        </div>
        </>
    ) : null;
}