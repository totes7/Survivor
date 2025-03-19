import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Footer from "../Footer";
import banner from "../../images/Poster.jpg";
import romaniaBanner from "../../images/RomaniaPoster.jpeg";

function Screening() {
  return (
    <>
      <div className="screening">
        <div id="screening-title">
          <h1>UPCOMING EVENTS</h1>
        </div>


        <img src={romaniaBanner} alt="romania screening poster" className="romania-poster"/>

        <h3>UK SCREENINGS</h3>

        <div id="screening-banner">
          <img className="banner" src={banner} alt="survivor banner" />
        </div>

        <p>
          March 25th, South Hampstead Synagogue, London
        </p>

        <Link
          to="https://myus.theus.org.uk/events/118305/screening-of-survivor/"
          target="_blank"
        >
          <button>BOOK</button>
        </Link>

        <p>
          March 30th, Barnet Synagogue, New Barnet
        </p>

        <Link
          to="https://myus.theus.org.uk/events/118401/survivor-screening/"
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
