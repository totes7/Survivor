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

        <h3>Peter Kessler Film Club Special Event</h3>

        <div id="screening-banner">
          <img className="banner" src={banner} alt="survivor banner" />
        </div>

        <p>May 2nd, Magdalen College Auditorium, Oxford University</p>

        <Link
          to="https://talks.ox.ac.uk/talks/id/566ac03e-6000-4ae6-80a9-059024a65469/"
          target="_blank"
        >
          <button>BOOK</button>
        </Link>

        <h3>World School's Premiere</h3>

        <div id="screening-banner">
          <img className="banner" src={banner} alt="survivor banner" />
        </div>

        <p>Survivor screening followed by Zoom Rockman and Nigel Canin in conversation with Mark Penney</p>
        <p>Performance Pini Brown</p>
        <p>Schools - May 12th, Solihull School, Solihull</p>

        <Link
          to="https://www.trybooking.com/uk/events/landing/80393?"
          target="_blank"
        >
          <button>BOOK</button>
        </Link>

        <p>Evening - May 12th, Solihull School, Solihull</p>

        <Link
          to="https://www.trybooking.com/uk/events/landing/80599?"
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
