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
            <p>
              Register interest in attending a screening {" "}
              <Link to="/screening">here</Link>.
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Home;
