import React from "react";
import "./App.css"
import Home from "./pages/Home";
import Navbar from "./components/Navbar"
import MovieDetails from "./pages/MovieDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Favorites from "./pages/Favorites";
export default function App() {
  return (
    <>

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}