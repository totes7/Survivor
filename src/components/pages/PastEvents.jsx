import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Footer from "../Footer";
import mipcom from "../../images/MipcomLogo.png";
import postcardTwo from "../../images/MediaPostcard-2.jpg";
import banner from "../../images/Banner-2.jpg";
import poster from "../../images/Poster.jpg";
import romaniaBanner from "../../images/RomaniaPoster.jpeg";
import dachau from "../../images/DachauPoster.png";

function PastEvents() {
  return (
    <>
      <div className="past-events">
        <h1>PAST EVENTS</h1>

        <h3>World School's Premiere</h3>

        <div id="screening-banner">
          <img className="banner" src={poster} alt="survivor banner" />
        </div>

        

        

        <h3>Peter Kessler Film Club Special Event</h3>

        <div id="screening-banner">
          <img className="banner" src={poster} alt="survivor banner" />
        </div>

        

        


        <h3>Commemorating the 80th Anniversary of the Liberation of Dachau</h3>

        
          <img
            src={dachau}
            alt="dachau liberation commemoration poster"
            className="banner"
          />

        
        


        <h3>March 26th, South Hampstead Synagogue, London</h3>

        <h3>March 30th, Barnet Synagogue, New Barnet</h3>

        <div id="screening-banner">
          <img className="past-banner" src={poster} alt="survivor poster" />
        </div>

        <h3>University of Cluj, Romania, 20/3/2025</h3>

        <img src={romaniaBanner} alt="romania screening poster" className="romania-poster"/>

        <h3>JW3 London, Holocaust Memorial Day 2025</h3>

        <img
          src={poster}
          alt="survivor poster"
          className="past-banner"
        />

        <Link to="/gallery2">
            Photo Gallery
        </Link>

        <h3>Young March of the Living, London Premiere</h3>

        <img
          src={banner}
          alt="march of the living lonodn premiere poster"
          className="past-banner"
        />

        <Link to="/gallery">
            Photo Gallery
        </Link>

        <h3>Premiere MIPCOM Cannes 22/10/2024</h3>

        <img src={mipcom} alt="mipcom logo" className="past-logo"/>

        <img
          src={postcardTwo}
          alt="MIPCOM news article"
          className="past-postcard-two"
        />

      </div>
      <Footer />
    </>
  );
}

export default PastEvents;
