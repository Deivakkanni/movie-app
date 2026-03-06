import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
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
                <Link to={`/movie/${movie.id}`} className="btn btn-primary">
                    View Details
                </Link>

            </div>

        </div>
    )
}