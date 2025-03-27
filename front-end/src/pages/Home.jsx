import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebook, FaPlay } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { GiPopcorn } from "react-icons/gi";
import './Home.css';
const sliderMovies = [
    {
        title: "Harry Potter",
        image: "https://miro.medium.com/v2/resize:fit:1400/1*-xxH5kXE8AGA8-vzPURslg.jpeg",
        description: "Join Harry and his friends in a magical adventure through the wizarding world.",
        genre: "Fantasy",
        year: "2001-2011"
    },
    {
        title: "The Walking Dead",
        image: "https://movizark.files.wordpress.com/2022/09/the-walking-dead-p8282918_b_h8_bn.jpg",
        description: "A group of survivors navigate a post-apocalyptic world overrun by zombies.",
        genre: "Horror/Drama",
        year: "2010-2022"
    },
    {
        title: "Interstellar",
        image: "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2024/07/cooper-stares-into-the-void-of-space-in-interstellar.jpg",
        description: "A team of explorers travel through a wormhole in space to ensure humanity's survival.",
        genre: "Sci-Fi",
        year: "2014"
    },
    {
        title: "Stranger Things",
        image: "https://treemily.com/wp-content/uploads/2023/05/AAAABS6v2gvwesuRN6c28ZykPq_fpmnQCJwELBU-kAmEcuC9HhWX-DfuDbtA-bfo-IrfgNtxl0qwJJlhI6DENsGFXknKkjhxPGTV-qhp.jpeg",
        description: "Kids in a small town face mysterious supernatural events in this 80s-inspired thriller.",
        genre: "Sci-Fi/Horror",
        year: "2016-Present"
    }
];

const featuredMovies = [
    {
        title: "Dune: Part Two",
        image: "https://www.themoviedb.org/t/p/original/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
    },
    {
        title: "Oppenheimer",
        image: "https://www.themoviedb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    
    },
    {
        title: "The Batman",
        image: "https://www.themoviedb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg",

    },
    {
        title: "Top Gun: Maverick",
        image: "https://www.themoviedb.org/t/p/original/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
    },
    {
        title: "Luca",
        image: "https://m.media-amazon.com/images/M/MV5BMWMyNGNlZTktODVkNS00ZmMyLTk0NmUtNWVjOWU1MWMzZGMzXkEyXkFqcGc@._V1_.jpg",
    }
];

function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const navigateTo = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % sliderMovies.length);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    const goToPrevious = () => {
        setCurrentIndex(prevIndex => (prevIndex === 0 ? sliderMovies.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % sliderMovies.length);
    };

    return (
        <div className="home-container">
            {/* Hero Section with Nav */}
            <header className="hero">
                <div className="hero-nav">
                    <h1 className="head">Movies Star</h1>
                    <div className="auth-buttons">
                        <button className="log-i" onClick={() => navigateTo('/login')}>
                            Log in
                        </button>
                        <button className="register" onClick={() => navigateTo('/signup')}>
                            Register
                        </button>
                    </div>
                </div>
            </header>


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
                        <div className="slide-buttons">
                            <button className="play-button">
                                <FaPlay /> Watch Now
                            </button>
                            <button className="info-button">
                                More Info
                            </button>
                        </div>
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
            {/* Trending Now Section */}
            <section className="trending-section">
                <h2 className="section-title">Trending Now <GiPopcorn className="con" /></h2>
                <div className="movie-grid">
                    {featuredMovies.map((movie, index) => (
                        <motion.div
                            className="movie-card"
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="card-image" style={{ backgroundImage: `url(${movie.image})` }}>
                                <div className="overlay">
                                    <FaPlay className="play-icon" />
                                    <div className="title">{movie.title}</div>
                                </div>
                                
                            </div>

                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Call to Action */}
            <section className="cta-section">
                <div className="cta-content">
                    <h2>Ready to watch?</h2>
                    <p>Create an account to start your cinematic journey today!</p>
                    <Link to="/signup">
                        <button className="cta-button">
                            Get Started <FaPlay className="play-icon" />
                        </button>
                    </Link>
                </div>
            </section>
            <footer className="footer">
                <div className="footer-containe">
                    <div className="footer-log">
                        <h2>Movies Star</h2>
                    </div>
                    <div className="footer-lin">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/privacy">Privacy Policy</Link>
                    </div>
                    <div className="footer-socia">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><IoLogoYoutube /></a>
                    </div>
                    <p className="footer-text">© {new Date().getFullYear()} Movies Star. All rights reserved.</p>
                </div>
            </footer>

        </div>
    )
}

export default Home;