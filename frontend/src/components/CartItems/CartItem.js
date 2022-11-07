import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as CartItemActions from '../../store/cartItemReducer';
import './CartItem.css'
import OrxataGlaze from "../Donuts/show/Orxata-Glaze.webp"


export const CartItem = ({id, item}) => {

    // const item = useSelector(state => state.cartItems.id); //is it donut_id?
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);

    // useEffect(()=> {
    //     dispatch(CartItemActions.fetchCartItem(item.id))
    // }, [item])

    const handleIncrement = (e) => {
        e.preventDefault();
        const newItem = Object.assign({},item)
        debugger
        newItem.quantity += 1;
        const res = dispatch(CartItemActions.updateCartItem(newItem));
        if (res?.errors) setErrors(res.errors);
    }

    const handleDecrement = (e) => {
        e.preventDefault();
        item.quantity -= 1;
        const res = dispatch(CartItemActions.updateCartItem(item));
        if (res?.errors) setErrors(res.errors); 
    }

    const handleRemove = (e) => {
        e.preventDefault();
        const res = dispatch(CartItemActions.removeCartItem(id));
        if (res?.errors) setErrors(res.errors);
    }

    return item ? (
        <div className="img-name-buttons">
            <img className="cart-item-image" src={OrxataGlaze}></img>
            <div className="cart-item-name">{item.donutName}</div> 
            <button className="plus-minus-button" onClick={handleIncrement}>+</button>
            <button className="plus-minus-button" onClick={handleDecrement}>-</button>
            <button className="remove-button" onClick={handleRemove}>Remove</button>
        </div>
    ) : null;
}