import { csrfFetch } from "./csrf";

const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';
const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
const REMOVE_CART_ITEM = 'REMOVE_CART_ITEMRECEIVE_CART_ITEM';

//POJOS:

export const receiveCartItem = cart_item => {
    debugger
    return {
      type: RECEIVE_CART_ITEM,
      cart_item
    }
  };
  
  export const receiveCartItems = cart_items => {
    // debugger
    return {
      type: RECEIVE_CART_ITEMS,
      cart_items
    }
  };
  
  export const removeCartItem = cart_item_Id => ({
    type: REMOVE_CART_ITEM,
    cart_item_Id
  });

  //THUNKS:

  export const fetchAllCartItems = () => async dispatch => { 

    let res = await csrfFetch('/api/cart_items')
    // let data;
    if (res.ok) {
        let data = await res.json();
        dispatch(receiveCartItems(data))
        return data; //why are we returning this?
    }
  }

  export const fetchCartItem = (id) => async dispatch => {

    let res = await csrfFetch(`/api/cart_items/${id}`);

    if (res.ok) {
        let data = await res.json();
        dispatch(receiveCartItem(id));
        return data; //why though
    }
  }

export const postCartItem = (donut) => async dispatch => { //I think this one may actually take in a donut???
    debugger
    // console.log(donut);
    let res = await csrfFetch('/api/cart_items', {
      method: 'POST',
      body: JSON.stringify(donut),
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
    })
    console.log(res)
    
  if (res.ok) {
    let data = await res.json();
        dispatch(receiveCartItem(data));
        return data;
  }
}

export const updateCartItem = (item) => async dispatch => {
    let res = await csrfFetch(`/api/cart_items/${item.id}`, {
        method: 'PATCH',
        body: JSON.stringify(item),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })

    if (res.ok) {
      debugger
        let data = await res.json();
        dispatch(receiveCartItem(data.cartItem));
        return data;
    } 
}

export const deleteCartItem = (id) => async dispatch => {
    let res = csrfFetch(`api/cart_items/${id}`, {
        method: 'DELETE'
    });

}

//REDUCER:

const CartItemReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = { ...state };

    switch (action.type) {
        case RECEIVE_CART_ITEMS:
            return { ...nextState, ...action.cart_items };
        case RECEIVE_CART_ITEM:
          debugger
        nextState[action.cart_item.id] = action.cart_item;
        return nextState;
        default: 
        return nextState;
    }
}

export default CartItemReducer;