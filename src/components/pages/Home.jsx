import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Hero from "../Hero";
import Footer from "../Footer";
import mipcom from "../../images/MipcomLogo.png";

function Home() {
  return (
    <>
      <div className="home">
        <Hero />

        <div className="home-bottom-section">
          <div className="news-section">
            <h3>LATEST</h3>
            <p>Release date coming soon!</p>
            <p>Click the link below to register interest in attending a screening.</p>
            <Link to="/screening">
              <img src={mipcom} alt="MIPCOM logo" />
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Home;
