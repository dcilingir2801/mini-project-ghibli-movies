import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ReviewForm from "../components/ReviewForm";
import styles from "./MovieDetailsPage.module.css";

function MovieDetailsPage() {
    const [movie, setMovie] = useState({});
    const [reviews, setReviews] = useState([]);
    const { movieId } = useParams();
    const API_URL = `https://ghibliapi.vercel.app/films/${movieId}`;
    const REVIEWS_API_URL = `https://mock-backend-movies.adaptable.app/reviews/?movieId=${movieId}`;

    const getMovie = () => {
        axios
          .get(API_URL)
          .then((response) => setMovie(response.data))
          .catch((error) => console.log(error));
    };

    const getReviews = () => {
        axios
          .get(REVIEWS_API_URL)
          .then((response) => setReviews(response.data))
          .catch((error) => console.log(error));
    };
    
    useEffect(() => {
        getMovie();
        getReviews();
    }, [movieId, reviews] );

    return (
        <div className={styles["movie-details"]}>
            <div className={styles["movie-details-container"]}>
                <div className={styles["movie-details-header"]}>
                    <h1>{movie.title}</h1>
                    <p className={styles["original-title"]}>{movie.original_title}</p>
                    <img src={movie.movie_banner} alt="Movie Banner"/>
                </div>
                <div className={styles["movie-details-content"]}>
                    <div className={styles["movie-poster"]}>
                        <img src={movie.image} alt="Movie Poster"/>
                    </div>
                    <div className={styles["movie-description"]}>
                        <br /> <br />
                        <p>{movie.description}</p> <br /> <br />
                        <p><strong>Director:</strong> {movie.director}</p>
                        <p><strong>Producer:</strong> {movie.producer}</p><br />
                        <p><strong>Release Date:</strong> {movie.release_date}</p><br />
                        <p><strong>Running Time:</strong> {movie.running_time} Minutes</p><br />
                        <p><strong>Rating:</strong> {movie.rt_score}/100</p>
                    </div>
                </div>
                <div className={styles["reviews-section"]}>
                <ReviewForm movieId={movieId} />
                    <h2>Reviews</h2>
                    {reviews.map((review) => (
                        <div key={review.id} className={styles["review"]}>
                            <h3>{review.title}</h3>
                            <p>{review.review}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Link to="/" className={styles["back-button"]}>
                <button>Back</button>
            </Link>
        </div>
    )
}

export default MovieDetailsPage;
