import {csrfFetch} from "./csrf";

const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS';
const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
const REMOVE_REVIEW = 'REMOVE_REVIEW';

// ACTION CREATORS
export const receiveReviews = reviews => ({
    type: RECEIVE_REVIEWS,
    reviews
  })
  
  export const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
  })
  
  export const removeReview = reviewId => ({
    type: REMOVE_REVIEW,
    reviewId
  })

  // SELECTORS
export const getReviews = state => {
    return state.reviews ? Object.values(state.reviews) : [];
  }
  

  export const getReview = reviewId => state => {
    return state.reviews ? state.reviews[reviewId] : null;
  }

// THUNK
export const fetchReviews = donutId => async dispatch => { //remember: you're passing this a donut's id, likely as donut.id
    const res = await csrfFetch(`/api/donuts/${donutId}/reviews`); //
    const reviews = await res.json();
    dispatch(receiveReviews(reviews));
    return reviews;
    }
    
    export const fetchReview = reviewId => async dispatch => { //remember: you're passing this a review id, likely as review.id
      const res = await csrfFetch(`/api/reviews/${reviewId}`);
      const review = await res.json();
      dispatch(receiveReview(review));
    }
    
    export const createReview = currentReview => async dispatch => {
    const res = await csrfFetch(`/api/reviews`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({review: currentReview}) //how is this 'review' key being used?
      });
    debugger
      if (res.ok) {
        debugger
        const newReview = await res.json();
        debugger
        dispatch(receiveReview(newReview)); //do I need a return after this line?
      } else {
        console.log('errors', res.errors)
      }
    }
    
    export const updateReview = review => async dispatch => {
      const res = await csrfFetch(`/api/reviews/${review.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(review)
      });
    
      if (res.ok) {
        const updatedReview = await res.json();
        dispatch(receiveReview(updatedReview)); //do I need a return after this line?
      } else {
        console.log('errors', res.errors)
      }
    }
    
    export const deleteReview = reviewId => async dispatch => {
      const res = await csrfFetch(`/api/reviews/${reviewId}`, {
        method: 'DELETE',
      });
      
      if (res.ok) {
        dispatch(removeReview(reviewId));
      }
    }
    
    
    // REDUCERS
    const ReviewsReducer = (state = {}, action) => {
      Object.freeze(state);
    
      switch (action.type){
        case RECEIVE_REVIEWS:
          return action.reviews;
        case RECEIVE_REVIEW:
          // Check here if there is something wrong
          // const review = action.review;
          return {...state, [action.review.id]: action.review};
        case REMOVE_REVIEW:
          const nextState = {...state};
          delete nextState[action.reviewId];
          return nextState;
        default:
          return state;
      }
    }
    
    export default ReviewsReducer;