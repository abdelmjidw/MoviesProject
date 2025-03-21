import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Favorites.css";
import NavBar from "../composent/NavBar";
import Foter from "../composent/Foter";

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        // Récupérer les favoris depuis le localStorage
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(storedFavorites);
    }, []);

    return (
        <div className="favorites-page">
            <NavBar />
            <h1 className="titre">My Favorites</h1>
            {favorites.length === 0 ? (
                <p className="pp">No content in your favorites.</p>
            ) : (
                <div className="favorites-list">
                    {favorites.map((item) => {
                        
                        const type = item.type === "movie" ? "movie" : "series";
                        const link = `/watch/${type}/${item.id}`;

                        return (
                            <div className="favorite-item" key={item.id}>
                                <img src={item.image_path} alt={item.title} className="favorite-image" />
                                <div className="favorite-info">
                                    <h3>{item.title}</h3>
                                    <Link to={link}>
                                        <button>Show</button>
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
            <Foter/>
        </div>
    );
}

export default Favorites;
