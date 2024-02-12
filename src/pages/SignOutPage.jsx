import { useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function Logout({ setIsLoggedIn }) {
  useEffect(() => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  }, [setIsLoggedIn]);

  return <Navigate to="/" />;
}
