import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/Api";

function MovieDetails() {

    const { id } = useParams();

    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetchMovieDetails();
    }, []);

    const fetchMovieDetails = async () => {
        const data = await getMovieDetails(id);
        setMovie(data);
    };

    if (!movie) {
        return <h2>Loading...</h2>
    }

    return (

        <div className="container mt-4">

            <div className="row">

                <div className="col-md-4">

                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        className="img-fluid"
                    />

                </div>

                <div className="col-md-8">

                    <h2>{movie.title}</h2>

                    <p>⭐ Rating: {movie.vote_average}</p>

                    <p>📅 Release Date: {movie.release_date}</p>

                    <p>{movie.overview}</p>

                </div>

            </div>

        </div>

    )
}

export default MovieDetails