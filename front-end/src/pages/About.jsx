import { motion } from "framer-motion";
import { FaFilm, FaRegStar, FaSearch } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import "./About.css";
import Footer from "../composent/Foter";
import NavBar from "../composent/NavBar";

function About() {
    return (
        <>
        <NavBar />
        <div className="about-container">
            <motion.h1
                className="about-title"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                About Movies Star
            </motion.h1>

            <motion.p
                className="about-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                Movies Star is your ultimate destination for discovering and enjoying movies and series. Browse through our extensive collection, keep track of your watch history, and save your favorites with ease.
            </motion.p>

            <div className="about-grid">
                <motion.div
                    className="about-card"
                    whileHover={{ scale: 1.05 }}
                >
                    <FaFilm className="about-icon film" />
                    <h2 className="about-subtitle">Extensive Collection</h2>
                    <p className="about-text">Discover thousands of movies and series from different genres.</p>
                </motion.div>

                <motion.div
                    className="about-card"
                    whileHover={{ scale: 1.05 }}
                >
                    <FaSearch className="about-icon search" />
                    <h2 className="about-subtitle">Smart Search</h2>
                    <p className="about-text">Find your favorite content quickly with our powerful search engine.</p>
                </motion.div>

                <motion.div
                    className="about-card"
                    whileHover={{ scale: 1.05 }}
                >
                    <MdHistory className="about-icon history" />
                    <h2 className="about-subtitle">Watch History</h2>
                    <p className="about-text">Never lose track of what you have watched with our history feature.</p>
                </motion.div>

                <motion.div
                    className="about-card"
                    whileHover={{ scale: 1.05 }}
                >
                    <FaRegStar className="about-icon favorite" />
                    <h2 className="about-subtitle">Favorites</h2>
                    <p className="about-text">Save movies and series to your favorites for quick access.</p>
                </motion.div>
            </div>

            <div className="about-creators">
                <p className="creators-text">Created by <span className="creator-name">Id Attaleb Mohamed</span> & <span className="creator-name">Abd Elmajid Moumni</span></p>
            </div>
            <Footer />
        </div>
        </>
    );
}

export default About;
