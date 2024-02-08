import React, { useState, useEffect } from "react";
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
    setRandomMovies([movies[randomIndexes[0]], movies[randomIndexes[1]], movies[randomIndexes[2]]]);
  };

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="movie-list">
      <input
        type="text"
        placeholder="Search movies"
        value={searchTerm}
        onChange={handleSearch}
      />
        <button onClick={() => setShowRandomMovies(true)}>Pick three options for me</button>
        <button onClick={() => setShowRandomMovies(false)}>Browse All</button>
      {showRandomMovies && (
        <div>
          <h2>Today's recommendations for you</h2>
          <ul>
            {randomMovies.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  <img src={movie.image} alt={movie.title} />
                  <p>{movie.title}</p>
                  <p>{movie.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      {!showRandomMovies && (
        <div>
          <ul>
            {filteredMovies.map((movie) => (
              <li key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  <img src={movie.image} alt={movie.title} />
                  <p>{movie.title}</p>
                  <p>{movie.description}</p>
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
