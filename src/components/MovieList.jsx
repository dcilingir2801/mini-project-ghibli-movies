import React, { useState, useEffect } from "react";
import styles from "./MovieList.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "https://ghibliapi.vercel.app/films/";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [randomMovies, setRandomMovies] = useState([]);
  const [showRandomMovies, setShowRandomMovies] = useState(false);

  const getAllMovies = () => {
    axios
      .get(API_URL)
      .then((response) => setMovies(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  useEffect(() => {
    if (movies.length > 0 && showRandomMovies) {
      generateRandomMovies();
    }
  }, [movies, showRandomMovies]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const generateRandomMovies = () => {
    const randomIndexes = [];
    while (randomIndexes.length < 3) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    setRandomMovies([
      movies[randomIndexes[0]],
      movies[randomIndexes[1]],
      movies[randomIndexes[2]],
    ]);
  };

  const shortenDescription = (description) => {
    return description.length > 300 ? description.slice(0, 300) + "..." : description;
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles["movie-list"]}>
    <div className={styles["movie-list-bar"]}>
      <input
        type="text"
        placeholder="Search movies"
        value={searchTerm}
        onChange={handleSearch}
      />
      <button onClick={() => setShowRandomMovies(true)}>
        Pick three options for me
      </button>
      <button onClick={() => setShowRandomMovies(false)}>Browse All</button>
      </div>
      {showRandomMovies && (
        <div>
          {/* {<h2>Today's recommendations for you</h2>} */}
          <ul className={styles["movie-cards"]}>
            {randomMovies.map((movie) => (
              <li key={movie.id} className={styles["movie-card"]}>
                <Link to={`/movies/${movie.id}`}>
                  <img src={movie.image} alt={movie.title} />
                  <div className={styles["movie-details"]}>
                    <h3>{movie.title}</h3>
                    <p>{shortenDescription(movie.description)}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {!showRandomMovies && (
        <div>
          <ul className={styles["movie-cards"]}>
            {filteredMovies.map((movie) => (
              <li key={movie.id} className={styles["movie-card"]}>
                <Link to={`/movies/${movie.id}`}>
                  <img src={movie.image} alt={movie.title} />
                  <div className={styles["movie-details"]}>
                    <h3>{movie.title}</h3>
                    <p>{shortenDescription(movie.description)}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MovieList;
