import React from "react";
import { Link } from "react-router-dom";

// Importing Images
import Hero from "../img/home.png";

const Home = () => {
  return (
    <div className="home">
      <div className="content">
        <div className="left">
          <h2>Welcome to our Bot</h2>
          <div className="buttonContainer">
            <Link to="/monitor" className="primary">
              Monitor Bot
            </Link>
            <Link to="/service" className="secondary">
              Service Bot
            </Link>
          </div>
        </div>
        <div className="right">
          <img src={Hero} alt="Hero" />
        </div>
      </div>
    </div>
  );
};

export default Home;
