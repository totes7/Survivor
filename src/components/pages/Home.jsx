import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Hero from "../Hero";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <div className="home">
        <Hero />

        <div className="home-bottom-section">
          <div className="news-section">
            <h3>LATEST</h3>
            <p>Release date coming soon!</p>
            <p>Click <Link to="/screening">
              here
            </Link> to register interest in attending a screening.</p>
            
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Home;
