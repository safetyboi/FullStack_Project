import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReview, getReview, updateReview } from "../../store/reviewReducer";
import "./review.css"

const ReviewModal = ({setShowModal, formType, existingReview}) => {
  const dispatch = useDispatch();
  const {id} = useParams(); //is this how it's actually coming in the params?
  const user = useSelector(state => state.session.user);
  let review = useSelector(getReview(existingReview?.id));


  if (formType === 'Create Review') {
    review = {
      rating: '',
      title: '',
      body: ''
    }
  }
  
  if (formType === 'Update Review') {
    existingReview = {
      id: existingReview?.id,
      rating: existingReview?.rating,
      title: existingReview?.title,
      body: existingReview?.body
    }
  }
  
  const [rating, setRating] = useState(existingReview?.rating);
  const [title, setTitle] = useState(existingReview?.title);
  const [body, setBody] = useState(existingReview?.body);
  const [validationErrors, setValidationErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [hideReview] = useState(false);

  useEffect(() => {
    const errors = [];
    if (!rating) errors.push('Please assign a rating');
    if (!title?.length) errors.push('Please provide a review title');
    if (!body?.length) errors.push('Please provide a review');
    setValidationErrors(errors);
  }, [rating, title, body]);

  const starRating = () => {
    return (
      <div className="rating">
        <input type="radio" id="star5" name="rating" value={Number("5")} onChange={e => setRating(e.target.value)} />
        <label className="star" for="star5" aria-hidden="true"></label>
        <input type="radio" id="star4" name="rating" value={Number("4")} onChange={e => setRating(e.target.value)} />
        <label className="star" for="star4" aria-hidden="true"></label>
        <input type="radio" id="star3" name="rating" value={Number("3")} onChange={e => setRating(e.target.value)} />
        <label className="star" for="star3" aria-hidden="true"></label>
        <input type="radio" id="star2" name="rating" value={Number("2")} onChange={e => setRating(e.target.value)} />
        <label className="star" for="star2" aria-hidden="true"></label>
        <input type="radio" id="star1" name="rating" value={Number("1")} onChange={e => setRating(e.target.value)} />
        <label className="star" for="star1" aria-hidden="true"></label>
      </div>
    )
  }

  const handleSubmit = e => {
    e.preventDefault();
    setHasSubmitted(true);
    if (validationErrors.length) return alert('Cannot submit the review');

    review = {
      ...review,
    //   id: review.id,
      usersId: user.id,
      donutId: id,
      rating: rating,
      title: title,
      body: body
    };
    
    if (formType === 'Create Review') {
      dispatch(createReview(review));
    } else if (formType === 'Update Review') {
      dispatch(updateReview(review));
    }

    setRating('');
    setTitle('');
    setBody('');
    setValidationErrors([]);
    setHasSubmitted(false);
    setShowModal(false);
  }

  return (
    <div className={`review_modal ${hideReview ? 'hide-modal' : ''}`}>
      <form 
        onSubmit={handleSubmit}
        className="flex-col">
        <h1 className="text-center">{formType}</h1>
        <label>
          Overall rating
            {starRating()}  
        </label>
        <label>
          Title
          <input 
            type="text" 
            value={title}
            placeholder='Write the review title'
            onChange={e => setTitle(e.target.value)}
          />
        </label>
        <label>
          Review
          <textarea
            rows="4"
            cols="20"
            value={body}
            placeholder='Write your review here...'
            onChange={e => setBody(e.target.value)}
          />
        </label>
        {hasSubmitted && validationErrors.length > 0 && (
          <div className="errors">
            <p>The following errors were found:</p>
            <ul>
              {validationErrors.map(error => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex-row">
          <input 
            type="submit" 
            value={formType}
          />
          <button className="btn"
            onClick={() => setShowModal(false)}>
            Cancel Review
          </button>
        </div>
      </form>
    </div>
    
  )
}

export default ReviewModal;