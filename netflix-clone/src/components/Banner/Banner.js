import React, { useState, useEffect } from 'react';
import axios from '../../utils/axios';
import requests from '../../utils/requests';
import './banner.css';

const Banner = () => {
    const [movie, setMovie] = useState(null);

    // Helper function to truncate text
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }

    // Fetch a random movie for the banner
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`);
                // console.log(response); 
                const movies = response.data.results;
                // Select a random movie from the results
                const randomMovie = movies[Math.floor(Math.random() * movies.length)];
                setMovie(randomMovie);
                console.log("Banner movie:", randomMovie);
            } catch (error) {
                console.error("Error fetching banner movie:", error);
            }
        }
        fetchData();
    }, []);

    return (
        <header 
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: movie?.backdrop_path 
                    ? `url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')` 
                    : "none",
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="banner__contents">
                <h1 className="banner__title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                
                <div className="banner__buttons">
                    <button className="banner__button banner__button--play">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                
                <h1 className="banner__description">
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>

            <div className="banner--fadeBottom" />
        </header>
    );
};

export default Banner;

