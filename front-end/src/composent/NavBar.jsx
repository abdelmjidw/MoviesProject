import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

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
    }

    return (
        <div className="nav-container">
            <h1 className="head">Movies Star</h1>
            <div className="links">
                <Link className="active" to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/series">Series</Link>
                <Link to="/watch">Watch History</Link>
                <Link to="/favorites">Favorites</Link>
                <Link to="/about">About</Link>
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
