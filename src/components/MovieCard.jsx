import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MovieCard({ movie }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavorite = () => {

        let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        if (isFavorite) {

            favorites = favorites.filter((fav) => fav.id !== movie.id);

            setIsFavorite(false);

        } else {

            favorites.push(movie);

            setIsFavorite(true);

        }

        localStorage.setItem("favorites", JSON.stringify(favorites));

    };
    useEffect(() => {

        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

        const exists = favorites.find((fav) => fav.id === movie.id);

        if (exists) {
            setIsFavorite(true);
        }

    }, [movie.id]);
    return (
        <div className="card h-100">

            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                className="card-img-top"
                alt={movie.title}
            />

            <div className="card-body">

                <h6>{movie.title}</h6>

                <p>⭐ {movie.vote_average}</p>
                <div className="two-btn">
                    <Link to={`/movie/${movie.id}`} className="btn btn-primary">
                        View                </Link>
                    <button
                        className="btn btn-danger mb-2"
                        onClick={toggleFavorite}
                    >
                        {isFavorite ? "❤️ Remove Fav" : "🤍 Add Fav"}
                    </button>
                </div>
            </div>

        </div>
    )
}