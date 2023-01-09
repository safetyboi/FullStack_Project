import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import * as CartItemActions from '../../store/cartItemReducer'
import { CartItem } from './CartItem'
import { NavLink, useHistory } from 'react-router-dom';
import "./CartItemIndex.css"

export const CartItemIndex = ({show, toggle}) => {
    const cartItems = useSelector(state => Object.values(state.cartItems));
    const dispatch = useDispatch();
    let history = useHistory();

    useEffect(() => {
        dispatch(CartItemActions.fetchAllCartItems())
    }, [dispatch]); //do we really need to re-render all cart items 

    let drawerClasses = 'side-drawer';
    if(show) {
       drawerClasses = 'side-drawer open';
    }

    const subTotal = () => {
        let sum = 0;
        cartItems.forEach(item=>{
            sum += (item.quantity * item.donutPrice)
        })
        return sum;
    }

    const emptyCart = (e) => {
        //logic for emptying cart
        e.preventDefault();
        // debugger
        cartItems.forEach(item => {
            dispatch(CartItemActions.deleteCartItem(item.id)) //can I key into item like this?
        })
        // debugger
        toggle();
        history.push("/checkout")
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
            <div className="sub-total-container">
            <div className="sub-total">Subtotal: ${subTotal()}.00</div>
            </div>
            {/* <button className="check-out">Check out */}
                    <NavLink to="/checkout">
                        <button className="check-out" onClick={emptyCart}>Check out</button>
                    </NavLink>
            {/* </button> */}
        </div>
        </>
    ) : null;
}