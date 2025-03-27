import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Footer from "../Footer";
import banner from "../../images/Poster.jpg";
import dachau from "../../images/DachauPoster.png";

function Screening() {
  return (
    <>
      <div className="screening">
        <div id="screening-title">
          <h1>UPCOMING EVENTS</h1>
        </div>

        <div id="screening-banner">
          <img className="banner" src={banner} alt="survivor banner" />
        </div>

        <p>March 25th, South Hampstead Synagogue, London</p>

        <Link
          to="https://myus.theus.org.uk/events/118305/screening-of-survivor/"
          target="_blank"
        >
          <button>BOOK</button>
        </Link>

        <p>March 30th, Barnet Synagogue, New Barnet</p>

        <Link
          to="https://myus.theus.org.uk/events/118401/survivor-screening/"
          target="_blank"
        >
          <button>BOOK</button>
        </Link>

        <h3>Commemorating the 80th Anniversary of the Liberation of Dachau</h3>

        <Link
          to="https://www.eventbrite.co.uk/e/commemorating-the-80th-anniversary-of-the-liberation-of-dachau-tickets-1301797143299"
          target="_blank"
        >
          <img
            src={dachau}
            alt="dachau liberation commemoration poster"
            className="banner"
          />
        </Link>

        <p>April 29th, Central London</p>
        <Link
          to="https://www.eventbrite.co.uk/e/commemorating-the-80th-anniversary-of-the-liberation-of-dachau-tickets-1301797143299"
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
