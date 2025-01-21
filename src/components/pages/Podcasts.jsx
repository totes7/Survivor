import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Footer from "../Footer";
import postcardOne from "../../images/MediaPostcard-1.jpg";
import jonny from "../../images/Jonny.jpg";
import banner from "../../images/BannerLogo.jpg";

function Podcasts() {
  return (
    <>
      <div className="podcasts">
        <img className="film-banner" src={banner} alt="film banner" />

        <h1>PODCASTS</h1>

        <Link
          to="https://canartsaveus.podbean.com/e/survivor-a-true-holocaust-story-unique-animation-and-archival-accuracy/"
          target="_blank"
        >
          <img
            src={postcardOne}
            alt="podcast banner"
            className="postcard-one"
          />
        </Link>

        <div className="jonny-podcast">
          <img src={jonny} alt="Jonny Gould" className="jonny-pic" />
          <div className="jonny-text">
            <p className="jonny-p">
              "It is extremely emotional... this provides another sector to my
              understanding..."
            </p>
            <small>Jonny Gould, 10 Dec 2024</small>
            <Link
              to="https://podfollow.com/1454252164/episode/930dbba239f9e3cb93a34a132db54780a353fbe6/view"
              target="_blank"
            >
              Listen to full podcast here
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Podcasts;
