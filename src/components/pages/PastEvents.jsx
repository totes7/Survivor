import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Footer from "../Footer";
import mipcom from "../../images/MipcomLogo.png";
import postcardTwo from "../../images/MediaPostcard-2.jpg";
import banner from "../../images/Banner-2.jpg";
import poster from "../../images/Poster.jpg";

function PastEvents() {
  return (
    <>
      <div className="past-events">
        <h1>PAST EVENTS</h1>

        <h3>Premiere MIPCOM Cannes 22/10/2024</h3>

        <img src={mipcom} alt="mipcom logo" className="past-logo"/>

        <img
          src={postcardTwo}
          alt="MIPCOM news article"
          className="past-postcard-two"
        />

        <h3>Young March of the Living, London Premiere</h3>

        <img
          src={banner}
          alt="march of the living lonodn premiere poster"
          className="past-banner"
        />

        <Link to="/gallery">
            Photo Gallery
        </Link>

        <h3>JW3 London, Holocaust Memorial Day 2025</h3>

        <img
          src={poster}
          alt="survivor poster"
          className="past-banner"
        />

        <Link to="/gallery2">
            Photo Gallery
        </Link>

      </div>
      <Footer />
    </>
  );
}

export default PastEvents;
