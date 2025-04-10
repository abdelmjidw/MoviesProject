import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NotFoundPage.css';
import { GiAstronautHelmet } from "react-icons/gi";
import { WiStars } from "react-icons/wi";
const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-page">
      <div className="space-scene">
        <div className="planet" role="img" aria-label="Planet"></div>
        <div className="astronaut" role="img" aria-label="Astronaut"><GiAstronautHelmet /></div>
        <div className="stars"></div>
      </div>

      <div className="content">
        <h1 className="content_head">404</h1>
        <h2 className="subhead">Page Not Found</h2>
        <p className="content_text">
          Oops! This page drifted into a black hole.
        </p>
        <button className="btn" onClick={() => navigate('/')}>
          🚀 Return to Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
