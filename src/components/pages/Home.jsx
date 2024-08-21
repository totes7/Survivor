import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Hero from "../Hero";
import Footer from "../Footer";
import Card from "../Card";
import zoom from "../../images/ZoomProfile.jpg";

function Home() {
  return (
    <>
      <div className="home">
        <Hero />

        <div className="home-bottom-section">
          <Card
            src={zoom}
            alt="Zoom Rockman picture"
            caption="ZOOM ROCKMAN"
            title="Director"
            text=""
            path="/info"
            classOuter="home-card-container"
            classImage="home-card-image"
          />
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
