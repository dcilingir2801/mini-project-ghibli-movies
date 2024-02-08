import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import './App.css'
import NotFound from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import Navbar from './components/Navbar';

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  )
}

export default App
