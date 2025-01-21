import React from "react";
import "../../App.css";
import Footer from "../Footer";
import trailer from "../../videos/SurvivorTrailer.mp4";

function Trailer() {
  return (
    <>
      <div className="trailer">
        <h1>OFFICIAL TRAILER</h1>

        <video src={trailer} controls></video>
      </div>

      <Footer />
    </>
  );
}

export default Trailer;
