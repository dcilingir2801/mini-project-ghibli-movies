import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "/src/pages/Dashboard.module.css";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(() =>
    localStorage.getItem("isLoggedIn")
  );
  const [userId, setUserId] = useState(() => localStorage.getItem("userId"));
  const { userId: urlUserId } = useParams();
  const [user, setUser] = useState({});
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]); 
  const API_URL = `https://mock-backend-movies.adaptable.app/users/${userId}?_embed=favorites&_embed=reviews`;
  const FILM_API_URL = "https://ghibliapi.vercel.app/films/";

  const getUser = () => {
    axios
      .get(API_URL)
      .then((response) => {
        setUser(response.data);
        console.log("User data:", response.data);
      })
      .catch((error) => console.log(error));
  };

  const getAllMovies = () => {
    axios
      .get(FILM_API_URL)
      .then((response) => setMovies(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUser();
    getAllMovies();
  }, [userId]);

  useEffect(() => {
    const filtered = movies.filter((movie) => {
      if (Array.isArray(user.favorites)) {
        for (const favorite of user.favorites) {
          if (favorite.movieId === movie.id) {
            return true;
          }
        }
      }
      return false;
    });
    setFilteredMovies(filtered);
  }, [user, movies]);

  const getMovieTitle = (movieId) => {
    const movie = movies.find((m) => m.id === movieId);
    return movie ? movie.title : "Unknown Title";
  };

  return (
    <div className={styles["main-container"]}>
      <h1>Welcome back, {user.firstName}!</h1>
      <div className={styles["dashboard-base"]}>
        <div className={styles["dashboard-user-image"]}>
          <img src="../assets/user-icon.png" alt="User Icon" />
        </div>
        <div className={styles["dashboard-user-info"]}>
          <p>
            Name: {user.firstName} {user.lastName}
          </p>
          <p>E-Mail: {user.email}</p>
        </div>
      </div>
      <div className={styles["dashboard-saved"]}>
        <p>Your Favorites</p>
        <br />
        <div className={styles["dashboard-saved-poster"]}>
        
        {filteredMovies.map((movie) => (
            <Link to={`/movies/${movie.id}`}>
          <img src={movie.image} key={movie.id}/></Link>
        ))}
        </div>
      </div>
      <div className={styles["dashboard-saved"]}>
        <p>Your Reviews</p>
        <br />
        <div className={styles["dashboard-saved-reviews"]}>
        {user.reviews &&
          user.reviews.map((review, index) => (
            <p key={index}>
              <Link to={`/movies/${review.movieId}`}>Movie: {getMovieTitle(review.movieId)}</Link><br/>
              Title: {review.title}<br/>
              Review: {review.review}
            </p>
          ))}
          </div>
      </div>
    </div>
  );
}
