import React from "react";
import "../../App.css";
import Footer from "../Footer";
import trailer from "../../videos/SurvivorTrailer.mp4";
import banner from "../../images/BannerLogo.jpg";

function Trailer() {
  return (
    <>
      <div className="trailer">
        <img className="film-banner" src={banner} alt="film banner" />

        <h1>OFFICIAL TRAILER</h1>

        <video src={trailer} controls></video>
      </div>

      <Footer />
    </>
  );
}

export default Trailer;
