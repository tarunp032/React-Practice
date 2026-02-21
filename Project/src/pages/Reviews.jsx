import React, { useEffect, useState } from "react";
import axios from "axios";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    const res = await axios.get("https://dummyjson.com/comments");
    setReviews(res.data.comments);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <div className="reviews-page">
      <h1 className="reviews-title">Customer Reviews</h1>

      <p className="reviews-subtitle">
        Genuine feedback shared by our users about their experience with
        MarketHub.
      </p>

      <div className="reviews-container">
        {reviews.map((item) => (
          <div className="review-card" key={item.id}>
            <p className="review-body">"{item.body}"</p>

            <div className="review-footer">
              <div className="review-user">
                <h4>{item.user.fullName}</h4>
                <span>@{item.user.username}</span>
              </div>

              <div className="review-likes">❤️ {item.likes}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Reviews;
