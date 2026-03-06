import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import "../App"

function Favorites() {

    const [favorites, setFavorites] = useState([]);

    useEffect(() => {

        const storedFavorites =
            JSON.parse(localStorage.getItem("favorites")) || [];

        setFavorites(storedFavorites);

    }, []);

    return (

        <div className="container mt-4">

            <h2>❤️ My Favorites</h2>

            <div className="row">

                {favorites.map((movie) => (

                    <div className="col-md-3 mb-4" key={movie.id}>
                        <MovieCard movie={movie} />
                    </div>

                ))}

            </div>

        </div>

    );
}

export default Favorites;