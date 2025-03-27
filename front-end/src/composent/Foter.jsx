import React from "react";
import "./Foter.css";
import { motion } from "framer-motion";
import { FaFacebook} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = React.forwardRef(() => {
    return (
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
    );
});

export default Footer;
