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

  const USERS_API_URL = `https://mock-backend-movies.adaptable.app/users/${userId}`;

  const getUser = () => {
    axios
      .get(USERS_API_URL)
      .then((response) => setUser(response.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getUser();
  }, [userId]); 

  return (
    <div>
      <h1>Welcome back, {user.firstName}</h1>
      <p>Your Watchlist</p> <br />
      <p>Your Favorites</p> <br />
      <p>Your Reviews</p>
    </div>
  );
}
