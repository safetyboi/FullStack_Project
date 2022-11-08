import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as CartItemActions from '../../store/cartItemReducer';
import './CartItem.css'
import OrxataGlaze from "../Donuts/show/orxata-glaze-removebg-preview.png"


export const CartItem = ({id, item}) => {

    // const item = useSelector(state => state.cartItems.id); //is it donut_id?
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);

    // useEffect(()=> {
    //     dispatch(CartItemActions.fetchCartItem(item.id))
    // }, [item])

    const handleIncrement = (e) => {
        e.preventDefault();
        const newItem = Object.assign({},item);
        newItem.quantity += 1;
        const res = dispatch(CartItemActions.updateCartItem(newItem));
        if (res?.errors) setErrors(res.errors);
    }

    const handleDecrement = (e) => {
        e.preventDefault();
        const newItem = Object.assign({}, item);
        newItem.quantity -= 1;
        const res = dispatch(CartItemActions.updateCartItem(newItem));
        if (res?.errors) setErrors(res.errors); 
    }

    const handleRemove = (e) => {
        e.preventDefault();
        const res = dispatch(CartItemActions.deleteCartItem(id));
        if (res?.errors) setErrors(res.errors);
    }

    return item ? (
        <div className="img-name-buttons">
            <img className="cart-item-image" src={OrxataGlaze}></img>
            <div className="cart-item-name">{item.donutName}</div>
            <div className="quantity-container">
                <div className="cart-item-quantity">{item.quantity}</div>
            </div>
            <button className="plus-minus-button" onClick={handleIncrement}>+</button>
            <button className="plus-minus-button" onClick={handleDecrement}>-</button>
            <button className="remove-button" onClick={handleRemove}>Remove</button>
        </div>
    ) : null;
}