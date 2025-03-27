import React, {  useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

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
        <>
            <div className={'nav'}>
                <h1 className="head">Movies Star</h1>
                <div className={'log'}>
                    <button className="log-in" onClick={() => navigateTo('/login')}>
                        Log in
                    </button>
                    <button className="Register" onClick={() => navigateTo('/signup')}>
                    Register
                    </button>
                </div>
            </div>

            <div className="intro">
                <h2>Welcome to Movies Star</h2>
                <p>
                    Discover a world of entertainment! Movies Star is your go-to platform for streaming the latest and greatest movies and series. 
                    Explore our curated collection, save your favorites, and enjoy an immersive experience with high-quality streaming. 🌟
                </p>
            </div>


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
            <div className="cta">
                <h2>Start Watching Today!</h2>
                <p>Join us now and explore a vast collection of movies and TV shows.</p>
                <Link to="/signup"><button className="cta-button">Sign Up Now</button></Link>
            </div>

        <footer className="footer">
            <div className="footer-container">
                <motion.dev className="footer-section">
                    <h2>Movies Star</h2>
                    <p>Your favorite streaming platform to discover and watch movies and series.
                        Enjoy a vast collection of films and shows anytime, anywhere.
                        Experience entertainment like never before with seamless streaming.</p>
                </motion.dev>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/daschboard">Daschboard</a></li>
                        <li><a href="/Movies">Movies</a></li>
                        <li><a href="/Series">Series</a></li>
                        <li><a href="/Watch">Watch History</a></li>
                        <li><a href="/Favorites">Favorites</a></li>
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Follow us</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank"><FaFacebook/></a>
                        <a href="https://www.twitter.com" target="_blank"><FaXTwitter/></a>
                        <a href="https://www.instagram.com" target="_blank"><FaInstagram /></a>
                        <a href="https://www.youtube.com" target="_blank"><IoLogoYoutube /></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Movies Star. All rights reserved.</p>
            </div>
        </footer>
            </>



    )
}

export default Home