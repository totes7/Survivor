import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Footer from "../Footer";
import postcardOne from "../../images/MediaPostcard-1.jpg";

function Media() {
  return (
    <>
      <div className="media">
        <h1>MEDIA</h1>

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
      </div>

      <Footer />
    </>
  );
}

export default Media;
