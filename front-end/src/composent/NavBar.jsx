import { IoMdSearch } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./NavBar.css";
import { toast, Toaster } from "react-hot-toast";

function NavBar({ scrollToFooter }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim() !== "") {
            navigate(`/search?q=${searchTerm}`);
        }
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        navigate("/");
        toast('Come back soon!', {
            icon: '😔',
        });
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div><Toaster /></div>
            <div className={`nav-container ${isMenuOpen ? "mobile-menu active" : "mobile-menu"}`}>
                <h1 className="head">Movies Star</h1>
                
                {/* Burger Menu Icon */}
                <div className="burger-menu" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Navigation Links - now wrapped in a mobile-menu class */}
                <div className={`links ${isMenuOpen ? "mobile-menu active" : "mobile-menu"}`}>
                    <Link className={location.pathname === "/Home" ? "active" : ""} to="/Home">Home</Link>
                    <Link className={location.pathname === "/movies" ? "active" : ""} to="/movies">Movies</Link>
                    <Link className={location.pathname === "/series" ? "active" : ""} to="/series">Series</Link>
                    <Link className={location.pathname === "/watch-history" ? "active" : ""} to="/watch-history">Watch History</Link>
                    <Link className={location.pathname === "/favorites" ? "active" : ""} to="/favorites" >Favorites</Link>
                    <button
                        className={location.pathname === "/#foter" ? "active" : ""}
                        onClick={scrollToFooter}
                        id="about"
                    >
                        About
                    </button>
                </div>

                <div className={`end ${isMenuOpen ? "mobile-menu active" : "mobile-menu"}`}>
                    <form className="search" onSubmit={handleSearch}>
                        <input
                            className="nav-input"
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button type="submit">
                            <IoMdSearch className="icon" />
                        </button>
                    </form>
                    <button className="log-out" onClick={handleLogout}>
                        Log Out <IoLogOutOutline className="icon-log" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default NavBar;