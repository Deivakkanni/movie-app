import React, { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../services/Api";
import MovieCard from "../components/MovieCard"

export default function Home() {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const fetchMovies = async () => {

        try {

            setLoading(true);
            setError(null);

            const data = await getPopularMovies();

            setMovies(data);

        } catch (err) {

            setError("Failed to load movies");

        } finally {

            setLoading(false);

        }

    };

    const searchMovie = async () => {
        const data = await searchMovies(searchTerm);
        setMovies(data);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        searchMovie();
    };

    const nextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    useEffect(() => {

        const fetchMovies = async () => {
            try {
                const data = await getPopularMovies(page);

                setMovies(data.results);
                setTotalPages(data.total_pages);

                setLoading(false);

            } catch (error) {
                console.error("Error fetching movies:", error);
                setLoading(false);
            }
        };

        fetchMovies();

    }, [page]);

    if (loading) {
        return (
            <div className="text-center mt-5">
                <div className="spinner-border text-primary"></div>
            </div>
        );
    }
    if (error) {
        return (
            <div className="text-center mt-5">
                <h4 className="text-danger">{error}</h4>
            </div>
        );
    }
    return (
        <div className="container mt-4">

            <h2>Popular Movies</h2>

            <form onSubmit={handleSubmit} className="mb-4 d-flex">

                <input
                    type="text"
                    placeholder="Search movie..."
                    className="form-control me-2"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                <button className="btn btn-primary">
                    Search
                </button>

            </form>

            <div className="row">

                {movies.map((movie) => (
                    <div className="col-md-3 mb-4" key={movie.id}>
                        <MovieCard movie={movie} />
                    </div>
                ))}

            </div>
            <div className="pagination">

                <button onClick={prevPage} disabled={page === 1}>
                    Previous
                </button>

                <span> Page {page} of {totalPages} </span>

                <button onClick={nextPage} disabled={page === totalPages}>
                    Next
                </button>

            </div>
        </div>
    );
}
