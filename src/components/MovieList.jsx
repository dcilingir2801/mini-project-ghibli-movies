import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "https://ghibliapi.vercel.app/films/";

function MovieList() {
  const [movies, setMovies] = useState([]);

  const getAllMovies = () => {
    axios
      .get(API_URL)
      .then((response) => setMovies(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  return (
    <div className="movie-list">
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <img src={movie.image}/>
            <p>{movie.title}</p>
            <p>{movie.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieList;
