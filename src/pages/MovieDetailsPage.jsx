import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function MovieDetailsPage() {

    const [movie, setMovie] = useState({});
    const { movieId } = useParams();
    const API_URL = `https://ghibliapi.vercel.app/films/${movieId}`;

    console.log(movieId);

    const getMovie = () => {
        axios
          .get(API_URL)
          .then((response) => setMovie(response.data))
          .catch((error) => console.log(error));
      };
    
      useEffect(() => {
        getMovie();
      }, [] );
    
    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.original_title}</p>
            <p>{movie.original_title_romanised}</p>
            <img src={movie.image} alt="Movie Poster"/>
            <img src={movie.movie_banner} alt="Movie Banner"/>
            <p>{movie.description}</p>
            <p>Director: {movie.director}</p>
            <p>Producer: {movie.producer}</p>
            <p>Release Date: {movie.release_date}</p>
            <p>Running Time: {movie.running_time} Minutes</p>
            <p>Rating: {movie.rt_score}</p>
            <Link to="/">
            <button type="button">Back</button>
            </Link>
        </div>
    )
}

export default MovieDetailsPage;