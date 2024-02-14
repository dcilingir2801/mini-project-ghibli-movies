import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./ReviewForm.module.css"

const MOCK_URL = "https://mock-backend-movies.adaptable.app/reviews/";

function ReviewForm({ movieId, updateReviews }) {
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [userId, setUserId] = useState(() => localStorage.getItem("userId"));

  console.log(userId);

  const handleTitleInput = (e) => setTitle(e.target.value);
  const handleReviewInput = (e) => setReview(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { movieId, title, review, userId: +userId };

    axios
      .post(`${MOCK_URL}`, requestBody)
      .then((resp) => {
        console.log(resp);
        updateReviews();
      })
      .catch((error) => console.log(error));

    setTitle("");
    setReview("");
  };

  return (
    <div>
      <h2>Leave a review</h2>
      <form onSubmit={handleSubmit} className={styles["review-form"]}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleTitleInput}
        />

        <label>Review</label>
        <input
          type="text"
          name="review"
          value={review}
          onChange={handleReviewInput}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ReviewForm;
