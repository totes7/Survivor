import React from "react";
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
            caption="Zoom Rockman"
            title="Filmmaker"
            text="Director Zoom Rockman is an award-winning cartoonist, illustrator, puppet-maker and animator."
            path="https://www.instagram.com/the_zoomcomic/"
            classOuter="home-card-container"
            classImage="home-card-image"
          />
          <div className="news-section">
            <h3>Latest</h3>
            <p>Movie release date coming soon!</p>
            <p>Pre-order your tickets here</p>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default Home;
