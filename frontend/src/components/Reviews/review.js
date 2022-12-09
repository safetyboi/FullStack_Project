import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink } from "react-router-dom";
import { fetchReviews, fetchReview, getReviews, deleteReview} from "../../store/reviewReducer";
import { Modal } from "../Modal";
import ReviewModal from "./ReviewModal";
import ReviewListing from "./ReviewListing";
import "./review.css"

const Review = () => {
  const dispatch = useDispatch();
  const {donutId} = useParams(); //is this how it's actually coming in the params?
  const user = useSelector(state => state.session.user);
  const reviews = useSelector(getReviews);
  const ratings = reviews.map(review => review.rating);
  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState('Create Review');
  
  useEffect(() => {
    dispatch(fetchReviews(donutId));
  }, [dispatch, donutId]);
  
  let existingReview = reviews.find(review => review?.userId === user?.id);
  
  const reviewAvg = () => {
    if (reviews) {
      return (ratings.reduce((a, b) => a + b) / reviews?.length).toFixed(1);
    } else {
      return 0.0;
    }
  }
  
  const reviewStars = () => {
    const roundedRating = Math.round(reviewAvg());
    const stars = [];
    for (let i = 0; i < roundedRating; i++) {
      stars.push(<i className="fa-solid fa-star"></i>)
    }
    return stars;
  }
  
  const reviewButton = () => {
    if (existingReview) {
      return (
        <div className="review_button_area flex-row">
          <button 
            className="review_button"
            onClick={() => {
              dispatch(fetchReview(existingReview.id));
              setShowModal(true);
              setFormType('Update Review');
            }}>
            Update Review
          </button>
          <button 
            className="review_button"
            onClick={() => {
              if (window.confirm('Are you sure? Deleting a review is irreversible.')) {
                dispatch(deleteReview(existingReview.id))
              }}}
              >
            Delete Review
          </button>
        </div>
      )
    }
    
    return (
      <button 
        // className="review_button"
        onClick={() => setShowModal(true)}>
        Write a review
      </button>
    )
  }

  const reviewIndex = () => {
    if (reviews?.length === 0) {
      return (
        <div className="review_items empty flex-col align-center">
          <p>There are no reviews yet..</p>
          <button 
            className="review_button"
            onClick={() => setShowModal(true)}>
            Write a review
          </button>
        </div>
      )
    } else {
      return (
        <div className="review_items flex-row align-center justify-between">
          <div className="flex-col">
            <div className="review_index flex-row align-center">
              <h3>{reviewAvg()}</h3>
              <div className="review_stars">
                {reviewStars()}
              </div>
            </div>
            <p>Based on {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'}</p>
          </div>
          {reviewButton()}
        </div>
      )
    }
  }

  return (
    <>
      <section className="review_wrapper flex-col align-center">
        <h1>Reviews</h1>
        {reviewIndex()}        
        <div className="review_item_wrapper">
          {reviews ? reviews.map(review => (
            <ReviewListing 
              key={review.id}
              review={review}/>
          )) : <div className="empty_reviews">There is no review for this product.</div>}
        </div>
      </section>

      {showModal && (
        <div className="review_modal_wrapper">
          <Modal onClose={() => setShowModal(false)}>
            <ReviewModal setShowModal={setShowModal} formType={formType} existingReview={existingReview} />
            {user ? <ReviewModal setShowModal={setShowModal} formType={formType} existingReview={existingReview} /> : (
              <div className="review_modal_login flex-col">
                <h1>Oops, you're not logged in</h1>
                <div className="review_login_button">
                  <NavLink to="/login"> Login to write a review</NavLink>
                </div>
              </div>
            )}
          </Modal>
        </div>
      )}
    </>
  )
}

export default Review;