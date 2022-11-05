import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as CartItemActions from '../../store/cartItemReducer';


export const CartItem = ({id}) => {

    const item = useSelector(state => state.cartItems.id); //is it donut_id?
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);

    useEffect(()=> {
        dispatch(CartItemActions.fetchCartItem(item.id))
    }, [item])

    const handleIncrement = (e) => {
        e.preventDefault();
        item.quantity += 1;
        const res = dispatch(CartItemActions.updateCartItem(item));
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
        <div className="img-&-name-&-buttons">
            <img></img>
            <div className="small-item-name">{item.donut_name}</div> 
            <button className="plus-minus-remove-button" onClick={handleIncrement}>+</button>
            <button className="plus-minus-remove-button" onClick={handleDecrement}>-</button>
            <button className="plus-minus-remove-button" onClick={handleRemove}>Remove</button>
        </div>
    ) : null;
}