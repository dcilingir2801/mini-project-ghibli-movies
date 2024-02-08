import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "https://ghibliapi.vercel.app/films/2baf70d1-42bb-4437-b551-e5fed5a87abe"

function MovieList() {
    const [movies, setMovies] = useState([]);

    const getAllMovies = () => {
        axios
        .get(API_URL)
        .then((response) => setMovies(response.data))
        .catch((error) => console.log(error))
    };

    useEffect(() => {
        getAllMovies();
    }, [] );

    return (
        <div>
        <img src={movies.image}></img>
        </div>
    )
}

export default MovieList;