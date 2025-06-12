import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Footer from "../Footer";
import poster from "../../images/Poster.jpg";

function Screening() {
  return (
    <>
      <div className="screening">
        <div id="screening-title">
          <h1>CURRENT EVENTS</h1>
        </div>

        <h3>Crouch End Festival</h3>

        <div id="screening-banner">
          <img className="banner" src={poster} alt="survivor banner" />
        </div>

        <p>June 15th, Crouch End Picturehouse, London</p>

        <Link
          to="https://www.tickettailor.com/events/crouchendchabad/1698029?"
          target="_blank"
        >
          <button>BOOK</button>
        </Link>
      </div>

      <Footer />
    </>
  );
}

export default Screening;
