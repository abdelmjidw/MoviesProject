import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaClock, FaCalendarAlt, FaPlay, FaDownload, FaShareAlt, FaCheck } from "react-icons/fa";
import "./Watch.css";

const API_URL = "http://localhost:8000/api/v1";

function Watch() {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();  // Utilisation de useNavigate
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);

    // Déterminer si c'est un film ou une série
    const isMovie = location.pathname.includes("movie");
    const type = isMovie ? "movies" : "series";

    // Récupérer les favoris depuis le localStorage ou créer une liste vide
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    // Vérifier si ce contenu est déjà dans les favoris
    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await axios.get(`${API_URL}/${type}/${id}`);
                setContent(response.data);

                // Vérifier si ce contenu est déjà dans les favoris
                setIsFavorite(storedFavorites.some((item) => item.id === response.data.id));
            } catch (err) {
                setError("Ce contenu n'existe pas.");
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, [id, type]);

    const handleFavoriteClick = () => {
        const updatedFavorites = isFavorite
            ? storedFavorites.filter((item) => item.id !== content.id) // Supprimer du favoris
            : [...storedFavorites, content]; // Ajouter aux favoris

        // Sauvegarder les favoris dans le localStorage
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        setIsFavorite(!isFavorite); // Mettre à jour l'état du bouton Favoris

        // Optionnel: Naviguer vers la page des favoris après l'ajout
        navigate("/favorites");  // Redirection vers la page Favoris
    };

    if (loading) return <div>Loading...</div>;  // Show a loading message until the data is fetched

    if (error) return <p className="error">{error}</p>;

    if (!content) return <div>No content available.</div>;  // Handle the case where content is still null

    return (
        <div className="watch-page">
            {/* Image de fond */}
            <div className="background">
                <img src={content.image_path} alt="Background" className="background-image" />
            </div>

            {/* Contenu principal */}
            <div className="watch-container">
                <img src={content.image_path} alt={content.title} className="poster" />
                <h1 className="tit">{content.title}</h1>
                <p className="subtitle">{content.tagline || " "}</p>

                {/* Détails */}
                <div className="details">
                    <span><FaClock /> {isMovie ? `${content.duration} min` : `${content.seasons} seasons`}</span>
                    <span><FaCalendarAlt /> {content.release_date}</span>
                    <span className="rating">IMDb {content.rating}</span>
                </div>

                {/* Boutons */}
                <a  href="https://www.egybest.co.in/watch/4628" target="_blanc"><button className="play"><FaPlay /> Watch </button></a>
                <div className="buttons">
                    <button className="download"><FaDownload /></button>
                    <button className="share"><FaShareAlt /></button>
                    <button className="check" onClick={handleFavoriteClick}>
                        <FaCheck /> {isFavorite ? "Remove from favorites" : "Add to favorites"}
                    </button>
                </div>

                {/* Description */}
                <p className="descript">{content.description}</p>
            </div>
        </div>
    );
}

export default Watch;
