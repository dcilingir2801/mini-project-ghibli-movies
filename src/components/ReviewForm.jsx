import { useState } from "react";
import axios from "axios";

const MOCK_URL = "https://mock-backend-movies.adaptable.app/reviews/";

function ReviewForm({ movieId }) { 
    const [title, setTitle] = useState("");
    const [review, setReview] = useState("");

    const handleTitleInput = e => setTitle(e.target.value);
    const handleReviewInput = e => setReview(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const requestBody = { movieId, title, review }; 

        axios
        .post(`${MOCK_URL}`, requestBody)
        .then((resp) => {
            console.log(resp);
        })
        .catch((error) => console.log(error));

        setTitle("");
        setReview("");
    };

    return (
    <div className="reviewForm">
    <h2>Leave a review</h2>
    <form onSubmit={handleSubmit}>
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
    )

}

export default ReviewForm;
