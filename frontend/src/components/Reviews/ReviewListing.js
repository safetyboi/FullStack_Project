import { useState } from "react";

const ReviewListing = ({review}) => {
  const {name, rating, title, body} = review;
  const body_content = body.split('.');
  const [showModal, setShowModal] = useState(false);

  const star = () => {
    const stars = [];
    for (let i = 1; i <= rating; i++) {
      stars.push(<i className="fa-solid fa-star"></i>)
    }
    return stars;
  }

  return (
    <div className="review_listing_wrapper grid">
      <div className="review_author">
        <p>{name}</p>
        <p className="verified">Verified buyer</p>
      </div>
      <div className="review_content">
        <div className="review_header flex-row justify-between ">
          <div className="review_rating">
            {star()}
            <h2>{title}</h2>
          </div>
          
        </div>
        <div className="review_body">
          {body_content.map(para => <p>{para}</p>)}
        </div>
      </div>
    </div>
  )
}

export default ReviewListing;