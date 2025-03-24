import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import axios from "axios";
import "./SearchResults.css";
import NavBar from "../composent/NavBar";
import Foter from "../composent/Foter";
const API_URL = "http://localhost:8000/api/v1";

function SearchResults() {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("q");

    useEffect(() => {
        if (query) {
            axios
                .get(`${API_URL}/search?query=${query}`)
                .then(response => {
                    setResults(response.data || []);
                    setLoading(false);
                })
                .catch(() => {
                    setError("Erreur lors de la recherche.");
                    setLoading(false);
                });
        }
    }, [query]);


    if (error) return <p className="error">{error}</p>;
    if (results.length === 0) return <p className="no-results">No results found.</p>;

    return (
        <>
            <NavBar />
            <div className="container">

                <h1 className="h">Search results for "{query}"</h1>
                <div className="movie-grid">
                    {results.map((item) => {
                        const type = item.duration ? "movies" : "series";
                        const link = `/watch/${type}/${item.id}`;

                        return (
                            <div key={item.id} className="movie-card">
                                <img src={item.image_path} alt={item.title} />
                                <div className="title">{item.title}</div>
                                <Link to={link} className="sh">
                                    <button>Show</button>
                                </Link>
                            </div>
                        )

                    }

                    )}
                </div>
                <Foter />
            </div>
        </>
    );
}

export default SearchResults;
