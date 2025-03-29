import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../composent/NavBar";
import Footer from "../composent/Foter";
import axios from "axios";
import { motion } from "framer-motion";
import "./Daschboard.css";
import { TbGridDots } from "react-icons/tb";
import { toast, Toaster } from 'react-hot-toast';
import { FaPlay } from "react-icons/fa";

const API_URL = "http://localhost:8000/api/v1/movies";
const API_URL2 = "http://localhost:8000/api/v1/series";


const sliderMovies = [
    {
        title: "Harry Potter",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*-xxH5kXE8AGA8-vzPURslg.jpeg",
        description: "Join Harry and his friends in a magical adventure through the wizarding world."
    },
    {
        title: "The Walking Dead",
        image: "https://movizark.files.wordpress.com/2022/09/the-walking-dead-p8282918_b_h8_bn.jpg",
        description: "A group of survivors navigate a post-apocalyptic world overrun by zombies."
    },
    {
        title: "Interstellar",
        image: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2024/07/cooper-stares-into-the-void-of-space-in-interstellar.jpg",
        description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },
    {
        title: "From",
        image: "https://image.tmdb.org/t/p/original/tUtCKwFnllW94qM3DRWK9acrFKi.jpg",
        description: "'From' is a horror-mystery series about people trapped in a town with terrifying creatures and dark secrets."
    },
    {
        title: "The Hangover",
        image: "https://images.bauerhosting.com/legacy/empire-tmdb/films/18785/images/39LohvXfll5dGCQIV9B9VJ16ImE.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80",
        description: "A Las Vegas bachelor party turns into a wild adventure as three friends try to remember what happened."
    },
    {
        title: "Dark",
        image: "https://indiehoy.com/wp-content/uploads/2020/05/dark.jpg",
        description: "A German series that blends sci-fi and mystery, exploring the intertwined fates of four families as they uncover disturbing secrets across different timelines."
    },
    {
        title: "The Conjuring",
        image: "https://www.nme.com/wp-content/uploads/2019/04/PMBD9E-scaled.jpg",
        description: "Paranormal investigators work to help a family terrorized by a dark presence."
    },
    {
        title: "Stranger Things",
        image: "https://treemily.com/wp-content/uploads/2023/05/AAAABS6v2gvwesuRN6c28ZykPq_fpmnQCJwELBU-kAmEcuC9HhWX-DfuDbtA-bfo-IrfgNtxl0qwJJlhI6DENsGFXknKkjhxPGTV-qhp.jpeg",
        description: "A group of kids in a small town face mysterious and supernatural events."
    },
];


function Daschboard() {
    const [name, setName] = useState("");
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);

    const [error, setError] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigate = useNavigate();
    const sliderMovie = sliderMovies[currentIndex];
    const matchedItem = [...movies, ...series].find(item => item.title === sliderMovie.title);
    const matchedItemType = movies.some(movie => movie.title === sliderMovie.title) ? "movies" : "series";

    const handleWatchClick = (id, type) => {
        const url = type === "movies" ? `/watch/movies/${id}` : `/watch/series/${id}`;
        navigate(url);
    };

    useEffect(() => {
        const storedName = localStorage.getItem("username");
        if (storedName) setName(storedName);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % sliderMovies.length);
        }, 8000);

        return () => clearInterval(interval);
    }, []);


    const fetchData = useCallback(async (url, setter, errorMessage) => {
        try {
            const response = await axios.get(url);
            setter(response.data || []);


        } catch (err) {
            setError(errorMessage);
            setter([]);
        }
    }, []);

    useEffect(() => {
        fetchData(API_URL, setMovies, "Erreur lors du chargement des films.");
        fetchData(API_URL2, setSeries, "Erreur lors du chargement des séries.");
        toast.success('Enjoy!')
    }, [fetchData]);

    const goToPrevious = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? sliderMovies.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % sliderMovies.length);
    };

    if (error) return <p className="error">{error}</p>;

    return (
        <>
            <NavBar />
            <div className="container">
                <div><Toaster /></div>


                <h1 className="hello">Welcome {name}</h1>

                <div className="slider">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.8 }}
                        className="slide"
                    >
                        <img src={sliderMovies[currentIndex].image} alt={sliderMovies[currentIndex].title} />
                        <div className="slider-content">
                            <h1 className="title">{sliderMovies[currentIndex].title}</h1>
                            <p className="description">{sliderMovies[currentIndex].description}</p>
                            <button
                                className="watch-now"
                                onClick={() => matchedItem ? handleWatchClick(matchedItem.id, matchedItemType) : alert("not found!")}
                                disabled={!matchedItem}
                            >
                                <FaPlay className="play-icon" />
                                Watch Now
                            </button>
                        </div>
                    </motion.div>
                    <button className="prev" onClick={goToPrevious}>‹</button>
                    <button className="next" onClick={goToNext}>›</button>
                    <div className="slider-nav">
                        {sliderMovies.map((_, index) => (
                            <span
                                key={index}
                                className={currentIndex === index ? "active" : ""}
                                onClick={() => setCurrentIndex(index)} // Change slide on dot click
                            ></span>
                        ))}
                    </div>
                </div>


                <div className="he"><h2 className="h">List Of Movies</h2> <TbGridDots className="list" onClick={() => { navigate('/movies') }} /></div>
                <div className="movie-grid">
                    {movies.slice(0, 5).map((movie, index) => (
                        <motion.div key={index} style={{ background: `url(${movie.image_path}) no-repeat center center`, backgroundSize: 'cover' }} className="movie-card" whileHover={{ scale: 1.05 }}>
                            {/* <img src={movie.image_path} alt={movie.title} /> */}
                            <div className="overlay" onClick={() => handleWatchClick(movie.id, "movies")} >
                                <FaPlay className="play-icon" />
                                <div className="title">{movie.title}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="he"><h2 className="h">List Of Series</h2> <TbGridDots className="list" onClick={() => { navigate('/series') }} /></div>

                <div className="movie-grid">
                    {series.slice(0, 5).map((serie, index) => (
                        <motion.div key={index} style={{ background: `url(${serie.image_path}) no-repeat center center`, backgroundSize: 'cover' }} className="movie-card" whileHover={{ scale: 1.05 }}>
                            <div className="overlay" onClick={() => handleWatchClick(serie.id, "movies")} >
                                <FaPlay className="play-icon" />
                                <div className="title">{serie.title}</div>
                            </div>
                            {/* <button className="watch-btn" onClick={() => handleWatchClick(serie.id, "series")}>Watch Now</button> */}
                        </motion.div>
                    ))}
                </div>

                <h2 className="h">Actors</h2>
                <div className="movie-grid">
                    {[
                        {
                            name: "Robert Downey Jr.",
                            image: "https://m.media-amazon.com/images/M/MV5BNzg1MTUyNDYxOF5BMl5BanBnXkFtZTgwNTQ4MTE2MjE@._V1_FMjpg_UX1000_.jpg",
                        },
                        {
                            name: "Scarlett Johansson",
                            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%2C_2%29.jpg/640px-Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%2C_2%29.jpg",
                        },
                        {
                            name: "Chris Hemsworth",
                            image: "https://m.media-amazon.com/images/M/MV5BOTU2MTI0NTIyNV5BMl5BanBnXkFtZTcwMTA4Nzc3OA@@._V1_FMjpg_UX1000_.jpg",
                        },
                        {
                            name: "Gal Gadot",
                            image: "https://walkoffame.com/wp-content/uploads/2025/03/IMG_9090.jpg",
                        },
                        {
                            name: "Leonardo DiCaprio",
                            image: "https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_FMjpg_UX1000_.jpg",
                        },
                    ].map((actor, index) => (
                        <motion.div
                            key={index}
                            style={{
                                background: `url(${actor.image}) no-repeat center center`,
                                backgroundSize: 'cover', // Ensures the image covers the entire div
                                width: '100%',
                                height: '100%',
                            }}
                            className="movie-card"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className="actor">{actor.name}</div>
                        </motion.div>

                    ))}
                </div>





            </div>
            <div>
                <Footer />
            </div></>
    );
}

export default Daschboard;
