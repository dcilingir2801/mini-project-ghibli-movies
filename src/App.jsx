import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import NotFound from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import Navbar from './components/Navbar';
import SignUpPage from "./pages/SignUpPage";
import SignInPage from './pages/SignInPage';

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signin" element={<SignInPage />} />
    </Routes>
    </>
  )
}

export default App
