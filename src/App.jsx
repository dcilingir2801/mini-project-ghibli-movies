import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import Navbar from "./components/Navbar";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import Dashboard from "./pages/Dashboard";
import Logout from "./pages/SignOutPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") || null);
  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signin" element={<SignInPage setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/logout" element={<Logout setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
