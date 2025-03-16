import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./NavBar.css";

function NavBar({ scrollToFooter }) {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    const location = useLocation(); // Get current route

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
    };

    return (
        <div className="nav-container">
            <h1 className="head">Movies Star</h1>
            <div className="links">
                <Link className={location.pathname === "/Home" ? "active" : ""} to="/Home">Home</Link>
                <Link className={location.pathname === "/movies" ? "active" : ""} to="/movies">Movies</Link>
                <Link className={location.pathname === "/series" ? "active" : ""} to="/series">Series</Link>
                <Link className={location.pathname === "/watch" ? "active" : ""} to="/watch">Watch History</Link>
                <Link className={location.pathname === "/favorites" ? "active" : ""} to="/favorites" >Favorites</Link>
                <button
                    className={location.pathname === "/#foter" ? "active" : ""}
                    onClick={scrollToFooter}
                    id="about"
                >
                    About
                </button>

            </div>
            <div className="end">
                <form className="search" onSubmit={handleSearch}>
                    <input
                        className="nav-input"
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit">
                        <ion-icon className="icon" name="search-outline"></ion-icon>
                    </button>
                </form>
                <button className="log-out" onClick={handleLogout}>
                    Log Out <ion-icon className="icon-log" name="log-out-outline"></ion-icon>
                </button>
            </div>
        </div>
    );
}

export default NavBar;
