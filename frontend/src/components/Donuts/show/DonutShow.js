import "./DonutShow.css"
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchDonut } from '../../../store/donutReducer'; 
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { postCartItem } from "../../../store/cartItemReducer";
import OrxataGlaze from "./Orxata-Glaze.webp"

export const DonutShow = ({toggle}) => {
    // console.log(props);
    const {id} = useParams();
    const donut = useSelector(state => state.donuts[id]); 
    const dispatch = useDispatch();
debugger
  let cart_item;
    if (donut) {
      cart_item = {donut_id: donut.id, donut_name: donut.name, donut_price: donut.price, quantity: 1} 
    }
    
    useEffect(() => {
        dispatch(fetchDonut(id))
      },[dispatch, id])

      const handleSubmit = (e) => {
        // debugger
        e.preventDefault();
        // console.log(cart_item)
        // debugger

        if (cart_item) {

          const res = dispatch(postCartItem(cart_item)) //what are we passing this function? 
        }
        //if donut is in cart => key into cart_item.quantity, += 1, dispatch different thunk (update),
        toggle()
      }

    //   if (!donut) return null;
      return donut ? (
        
        <>
        <div className="donut-show">
            <div className="donut-show-container">
                <div className="words-and-button">
                <div className="donut-words">
                    <div className="big-title">{donut.name}</div>
                    <div>{donut.description}</div>
                <div className="button-container">
                    <button className="add-to-cart" onClick={handleSubmit}>Add to Cart</button>
                </div>
                </div>
            </div>
            <div className="donut-image-container">
            <div>
                {/* <img className="donut-image" src={OrxataGlaze}></img> */}
                <img className="donut-image" src={donut.imageURL[1]}></img>
            </div>
            </div>
            </div> 
        </div> 
        </>
      ) : null;
}
