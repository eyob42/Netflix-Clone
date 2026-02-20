import React, { useState, useEffect } from "react";
import axios from "../../../utils/axios"; // Make sure this path is correct!
import "./row.css";

// Import movie-trailer
import movieTrailer from "movie-trailer";
import YouTube from 'react-youtube';

const Row = ({ title, fetchUrl, isLargeRow, isNetflixOriginal }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Remove the hardcoded URL if you're using axios instance
                const request = await axios.get(fetchUrl); // Just use fetchUrl directly
                console.log("Movies fetched:", request.data.results);
                setMovies(request.data.results);
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        };
        fetchData();
    }, [fetchUrl]);

    // Handle trailer playback
    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
                .then(url => {
                    console.log("Trailer URL:", url);
                    const urlParams = new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get('v'));
                })
                .catch(error => console.log("Trailer error:", error));
        }
    };

    // YouTube player options
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className="row">
            <h2 className="row__title">{title}</h2>
            
            <div className="row__posters">
                {movies.map((movie) => (
                    <div 
                        className="row__poster-container" 
                        key={movie.id}
                        onClick={() => handleClick(movie)} // Add click handler
                    >
                        {/* Netflix Original Badge */}
                        {isNetflixOriginal && (
                            <div className="row__poster-badge">NETFLIX ORIGINAL</div>
                        )}
                        
                        <img
                            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                            src={`${base_url}${
                                isLargeRow ? movie?.poster_path : movie?.backdrop_path
                            }`}
                            alt={movie?.name || movie?.title}
                        />
                        
                        {/* Movie title overlay */}
                        <div className="row__poster-title">
                            {movie?.name || movie?.title}
                        </div>
                    </div>
                ))}
            </div>

            {/* YouTube Trailer Player */}
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
};

export default Row;