import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(() =>
    localStorage.getItem("isLoggedIn")
  );
  console.log(isLoggedIn);

  const [userId, setUserId] = useState(() =>
    localStorage.getItem("userId")
  );
  console.log(userId);

  const { userId: urlUserId } = useParams(); 

  const [user, setUser] = useState({});
  const [favorites, setFavorites] = useState({});

  const USERS_API_URL = `https://mock-backend-movies.adaptable.app/users/${userId}`;
  const FAVORITES_API_URL = `https://mock-backend-movies.adaptable.app/users/${userId}?_embed=favorites`

  const getUser = () => {
    axios
      .get(USERS_API_URL)
      .then((response) => {
        setUser(response.data);
        console.log("User data:", response.data);
      })
      .catch((error) => console.log(error));
  };

  const getFavorites = () => {
    axios
      .get(FAVORITES_API_URL)
      .then((response) => {
        setFavorites(response.data);
        console.log("Favorites data:", response.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUser();
    getFavorites();
  }, [userId]); 


  return (
<div>
    <h1>Welcome back, {user.firstName}</h1>
    <p>Your Watchlist</p> <br />
    {user.watchLaterList && user.watchLaterList.map((movieId, index) => (
      <p key={index}>{movieId}</p>
    ))}
    <p>Your Favorites</p> <br />
    {user.favorites && user.favorites.map((favorite, index) => (
      <p key={index}>{favorite.movieId}</p>
    ))}
    <p>Your Reviews</p>
  </div>
  );
}
