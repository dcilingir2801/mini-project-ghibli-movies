import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ReviewForm from "../components/ReviewForm";
import styles from "./MovieDetailsPage.module.css";

function MovieDetailsPage() {
  const [movie, setMovie] = useState({});
  const [reviews, setReviews] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const { movieId } = useParams();

  const [userId, setUserId] = useState(() => localStorage.getItem("userId"));

  const { userId: urlUserId } = useParams();

  const [user, setUser] = useState({});

  const API_URL = `https://ghibliapi.vercel.app/films/${movieId}`;
  const REVIEWS_API_URL = `https://mock-backend-movies.adaptable.app/reviews/?movieId=${movieId}`;
  const USERS_API_URL = `https://mock-backend-movies.adaptable.app/users/${userId}`;
  const FAVORITES_API_URL = `https://mock-backend-movies.adaptable.app/favorites`;

  const getMovie = () => {
    axios
      .get(API_URL)
      .then((response) => {
        setMovie(response.data);
        axios
          .get(`${FAVORITES_API_URL}?userId=${userId}&movieId=${movieId}`)
          .then((response) => {
            setIsFavorite(response.data.length > 0);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
  };

  const getReviews = () => {
    axios
      .get(REVIEWS_API_URL)
      .then((response) => setReviews(response.data))
      .catch((error) => console.log(error));
  };

  const saveMovieToFavorites = () => {
    if (isFavorite) {
      axios
        .get(`${FAVORITES_API_URL}?userId=${userId}&movieId=${movieId}`)
        .then((foundFav) => {
          const favId = foundFav.data[0].id;
          return axios.delete(`${FAVORITES_API_URL}/${favId}`);
        })
        .then((resp) => {
          console.log(resp);
          setIsFavorite(false);
        })
        // axios
        //   .delete(`${FAVORITES_API_URL}?userId=${userId}&movieId=${movieId}`)
        //   .then((resp) => {
        //     console.log(resp);
        //     console.log("Movie removed");
        //     setIsFavorite(false);
        //   })
        .catch((error) => {
          console.error(error);
        });
    } else {
      axios
        .post(FAVORITES_API_URL, { movieId: movieId, userId: +userId })
        .then(() => {
          console.log("Movie saved to favorites successfully");
          setIsFavorite(true);
        })
        .catch((error) => {
          console.error("Error saving movie to favorites:", error);
        });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getMovie();
    getReviews();
  }, [setReviews]);

  const updateReviews = () => {
    getReviews();
  };

  return (
    <div className={styles["movie-details"]}>
      <div className={styles["movie-details-container"]}>
        <div className={styles["movie-details-header"]}>
          <h1>{movie.title}</h1>
          <p className={styles["original-title"]}>{movie.original_title}</p>

          <img src={movie.movie_banner} alt="Movie Banner" />
        </div>
        <div className={styles["movie-details-content"]}>
          <div className={styles["movie-poster"]}>
            <img src={movie.image} alt="Movie Poster" />
          </div>
          <div className={styles["movie-description"]}>
            <br /> <br />
            <p>{movie.description}</p> <br /> <br />
            <p>
              <strong>Director:</strong> {movie.director}
            </p>
            <p>
              <strong>Producer:</strong> {movie.producer}
            </p>
            <br />
            <p>
              <strong>Release Date:</strong> {movie.release_date}
            </p>
            <br />
            <p>
              <strong>Running Time:</strong> {movie.running_time} Minutes
            </p>
            <br />
            <p>
              <strong>Rating:</strong> {movie.rt_score}/100
            </p>
          </div>
        </div>
        <div className={styles["review-button"]}>
          <button onClick={saveMovieToFavorites}>
            {isFavorite ? "Remove from Favorites" : "Save to Favorites"}
          </button>
        </div>
        <div className={styles["reviews-section"]}>
          <h1>What did others think about this movie?</h1>
          <div className={styles["reviews-container"]}>
            {reviews.map((review) => (
              <div key={review.id}>
                <h3>{review.title}</h3>
                <p>{review.review}</p>
              </div>
            ))}
            <div className={styles["review-form"]}>
              <ReviewForm movieId={movieId} updateReviews={updateReviews} />
            </div>
          </div>
        </div>
      </div>
      <Link to="/" className={styles["back-button"]}>
        <button onClick={() => window.history.back()}>Back</button>
      </Link>
    </div>
  );
}

export default MovieDetailsPage;
