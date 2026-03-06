import axios from "axios";

const API_KEY = "41fb0c8c7d719397ae97c02e2bb202e7";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {

    const response = await axios.get(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );

    return response.data.results;
};

export const getMovieDetails = async (id) => {

    const response = await axios.get(
        `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );

    return response.data;
};
export const searchMovies = async (query) => {

    const response = await axios.get(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );

    return response.data.results;
};