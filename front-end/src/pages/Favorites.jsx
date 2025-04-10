import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Favorites.css";
import NavBar from "../composent/NavBar";
import Foter from "../composent/Foter";
import { motion } from "framer-motion";
function Favorites() {
    const [favorites, setFavorites] = useState([]);

    const removeFavorite = (id) => {
        const updatedFavorites = favorites.filter(item => item.id !== id);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };


    useEffect(() => {
        // Récupérer les favoris depuis le localStorage
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    }, []);

    return (
        <>
            <NavBar />
            <div className="favorites-page">

            <motion.h1
                    className="about-title"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Favorites
                </motion.h1>

                {favorites.length === 0 ? (
                    <p className="pp">No content in your favorites.</p>
                ) : (
                    <div className="favorites-list">
                        {favorites.map((item) => (
                            <div className="favorite-item" key={item.id}>
                                <img src={item.image_path} alt={item.title} className="favorite-image" />
                                <div className="favorite-info">
                                    <h3>{item.title}</h3>
                                    <Link to={`/watch/${item.type}/${item.id}`}>
                                        <button>Show</button>
                                    </Link>
                                    <button onClick={() => removeFavorite(item.id)}>Remove</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
                <Foter />
            </div>
        </>
    );
}

export default Favorites;
