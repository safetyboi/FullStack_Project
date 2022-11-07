import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import * as CartItemActions from '../../store/cartItemReducer'
import { CartItem } from './CartItem'

export const CartItemIndex = () => {

    const cartItems = useSelector(state => Object.values(state.cartItems));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(CartItemActions.fetchAllCartItems())
    }, [dispatch]); //do we really need to re-render all cart items 

    return cartItems ? (
        <>
        <div className="cart-index-container">
            <h2 className="cart-header"></h2>
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