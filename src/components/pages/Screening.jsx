import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Footer from "../Footer";
import banner from "../../images/Poster.jpg";

function Screening() {
  

  return (
    <>
      <div className="screening">
        <div id="screening-title">
          <h1>EVENTS</h1>
        </div>

        <p>
          Special Screening with JW3, London, to mark Holocaust Memorial Day 2025
        </p>

        <div id="screening-banner">
          <img className="banner" src={banner} alt="MIPCOM banner" />
        </div>

        <Link
          to="https://www.jw3.org.uk/search?for=Survivor#"
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
