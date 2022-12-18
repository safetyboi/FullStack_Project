import "./DonutShow.css"
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { fetchDonut } from '../../../store/donutReducer'; 
import { NavLink } from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';
import { postCartItem } from "../../../store/cartItemReducer";
import { Link } from "react-router-dom";
import { Modal } from "../../Reviews/Modal"; 
import Review from "../../Reviews/review";
import { getReviews } from "../../../store/reviewReducer";
import ReviewModal from "../../Reviews/ReviewModal";



export const DonutShow = ({toggle}) => {
    // console.log(props);
    const {id} = useParams();
    const donut = useSelector(state => state.donuts[id]); 
    const reviews = useSelector(getReviews);
    const ratings = reviews.map(review => review?.rating);
    const dispatch = useDispatch();

  //test - these all technically belong at the Review component level
    // const [showModal, setShowModal] = useState(false);
    // const [formType, setFormType] = useState('Create Review');
    // let existingReview = reviews.find(review => review?.userId === user?.id);
  //test

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
        // debugger

          const res = dispatch(postCartItem(cart_item)) //what are we passing this function? 
          toggle()
      }

      const reviewAvg = () => {
        if (reviews?.length) {
          return (ratings.reduce((a, b) => a + b) / reviews?.length).toFixed(1);
        } else {
          return 0.0;
        }
      }
      
      const reviewStars = () => {
        const roundedRating = Math.round(reviewAvg());
        const stars = [];
        for (let i = 0; i < roundedRating; i++) {
          stars.push(<i class="fa-solid fa-star"></i>)
        }
        return stars;
      }

      const goToReview = () => {
        if (reviews) {
          document.querySelector('.review_wrapper').scrollIntoView({behavior: "smooth"});
        }
      }

      return donut ? (
        
        <div className="donut-show">
            <div className="donut-show-container">
                <div className="words-and-button">
                <div className="donut-words">
                    <div className="big-title">{donut.name}</div>
                    <div>{donut.description}</div>
                <div className="back-and-addtocart-container">
                  <div className="back-container">
                    <Link to="/donuts" className="back-button">&#8617;</Link>
                  </div>
                  <button className="add-to-cart" onClick={handleSubmit}>Add to Cart</button>
                </div>
                </div>
            </div>
            <div className="donut-image-container">
              <div>
                <img className="donut-image" src={donut.imageURL[1]}></img>
              </div>
              
            </div> 
          </div>
          <Review />
        </div>
      
      ) : null;
}


{/* <div className="product_details_wrapper">
                <div className="review_stars flex-row"
                  onClick={goToReview}>
                  {reviewStars()}
                  <p>{reviews?.length} {reviews?.length === 1 ? 'review' : 'reviews'}</p>
                </div>
              </div> */}