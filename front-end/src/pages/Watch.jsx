import { useParams, useLocation,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaClock, FaCalendarAlt, FaPlay, FaDownload, FaShareAlt, FaCheck } from "react-icons/fa";
import "./Watch.css";
import { IoIosArrowRoundBack } from "react-icons/io";
const API_URL = "http://localhost:8000/api/v1";

function Watch() {
    const { id } = useParams();
    const location = useLocation();
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isFavorite, setIsFavorite] = useState(false);
    const navigate = useNavigate();

    const isMovie = location.pathname.includes("movies");
    const type = isMovie ? "movies" : "series";

    useEffect(() => {
        const fetchContent = async () => {
            try {
                const response = await axios.get(`${API_URL}/${type}/${id}`);
                setContent(response.data);

                // Vérifier si ce contenu est déjà dans les favoris
                const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
                setIsFavorite(storedFavorites.some((item) => item.id === response.data.id));
            } catch (err) {
                setError("Ce contenu n'existe pas.");
            } finally {
                setLoading(false);
            }
        };

        fetchContent();
    }, [id, type]);

    // Fonction pour ajouter un élément à l'historique de visionnage
    const addToWatchHistory = () => {
        if (content) {
            const watchHistory = JSON.parse(localStorage.getItem("watchHistory")) || [];

            const isAlreadyWatched = watchHistory.some(item => item.id === content.id && item.type === type);

            if (!isAlreadyWatched) {
                const newEntry = {
                    id: content.id,
                    type: type,
                    title: content.title,
                    image: content.image_path,
                    watchedAt: new Date().toISOString(),
                };

                localStorage.setItem("watchHistory", JSON.stringify([newEntry, ...watchHistory]));
            }
        }
    };

    const handleFavoriteClick = () => {
        const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
        const newFavorite = { ...content, type };

        const updatedFavorites = isFavorite
            ? storedFavorites.filter((item) => item.id !== content.id)
            : [...storedFavorites, newFavorite];

        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        setIsFavorite(!isFavorite);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <p className="error">{error}</p>;
    if (!content) return <div>No content available.</div>;

    return (
        <div className="watch-page">
                <IoIosArrowRoundBack className="return" onClick={()=>{navigate('/Home')}} />
            <div className="background">
                <img src={content.image_path} alt="Background" className="background-image" />
            </div>

            <div className="watch-container">
                <img src={content.image_path} alt={content.title} className="poster" />
                <h1 className="tit">{content.title}</h1>
                <p className="subtitle">{content.tagline || " "}</p>

                <div className="details">
                    <span><FaClock /> {isMovie ? `${content.duration} min` : `${content.seasons} seasons`}</span>
                    <span><FaCalendarAlt /> {content.release_date}</span>
                    <span className="rating">IMDb {content.rating}</span>
                </div>

                {/* Bouton Watch qui ajoute à l'historique avant d'ouvrir le lien */}
                <button className="play" onClick={() => {
                    addToWatchHistory();
                    window.open("https://www.egybest.co.in/watch/4628", "_blank");
                }}>
                    <FaPlay /> Watch
                </button>

                <div className="buttons">
                    <button className="download"><FaDownload /></button>
                    <button className="share"><FaShareAlt /></button>
                    <button className="check" onClick={handleFavoriteClick}>
                        <FaCheck /> {isFavorite ? "Remove from favorites" : "Add to favorites"}
                    </button>
                </div>

                <p className="descript">{content.description}</p>
            </div>
        </div>
    );
}

export default Watch;
