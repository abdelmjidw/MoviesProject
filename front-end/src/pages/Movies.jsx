import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../composent/NavBar";
import Footer from "../composent/Foter";
import axios from "axios";
import { motion } from "framer-motion";
// import "./ListPage.css";

const API_URL = "http://localhost:8000/api/v1/movies";

function MoviesList() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Movies List";
        axios.get(API_URL)
            .then(response => {
                setMovies(response.data || []);
                // setLoading(false);
            })
            .catch(() => {
                setError("Erreur lors du chargement des films.");
                // setLoading(false);

            });
    }, []);

    const handleWatchClick = (id) => {
        navigate(`/watch/movies/${id}`);
    };

    // if (loading) return <p className="loading">Chargement des films...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <>
            <NavBar />
            <div className="container">

                <h1 className="h">List Of Movies</h1>
                <div className="movie-grid">
                    {movies.map((movie, index) => (
                        <motion.div key={index} className="movie-card" whileHover={{ scale: 1.05 }}>
                            <img src={movie.image_path} alt={movie.title} />
                            <div className="title">{movie.title}</div>
                            <button className="watch-btn" onClick={() => handleWatchClick(movie.id)}>Watch Now</button>
                        </motion.div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default MoviesList;
