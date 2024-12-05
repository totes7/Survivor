import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Footer from "../Footer";
import deckPdf from "../../files/SurvivorDeck.pdf";
import trailer from "../../videos/SurvivorTrailer.mp4";
import postcardOne from "../../images/MediaPostcard-1.jpg";
import postcardTwo from "../../images/MediaPostcard-2.jpg";
import forbesLogo from "../../images/ForbesLogo.jpg";
import adam from "../../images/AdamBoulton.jpg";

function Media() {
  return (
    <>
      <div className="media">
        <h1>MEDIA PACK</h1>

        <a
          href={deckPdf}
          download="Survivor-Film-Deck"
          target="_blank"
          rel="noreferrer"
        >
          <button>
            Download <i class="fa-solid fa-file-pdf"></i>{" "}
          </button>
        </a>

        <h1>OFFICIAL TRAILER</h1>

        <video src={trailer} controls></video>

        <h1>PRESS</h1>

        <img src={forbesLogo} alt="Forbes.com logo" className="forbes-logo" />

        <p className="forbes-p">
          "How Short Film Survivor Shows The Power Of Animation To Depict
          Difficult Subjects"
        </p>

        <Link
          to="https://www.forbes.com/sites/bennyhareven/2024/11/30/how-short-film-survivor-uses-animated-puppets-to-depict-the-holocaust/"
          target="_blank"
          className="forbes-link"
        >
          Read full article on Forbes.com
        </Link>

        <div className="adam-article">
          <img src={adam} alt="Adam Boulton" className="adam-pic" />
          <div className="adam-text">
            <p className="adam-p">
              "Survivor: Rockman's Holocaust animation is a remarkable
              achievement"
            </p>
            <small>Adam Boulton, 3 Dec 2024</small>
            <Link
              to="https://www.reaction.life/p/survivor-rockmans-holocaust-animation?utm_campaign=post&utm_medium=web"
              target="_blank"
            >
              Read full article here
            </Link>
          </div>
        </div>

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

        <img
          src={postcardTwo}
          alt="MIPCOM news article"
          className="postcard-two"
        />
        <figcaption>MIPCOM Cannes News 22/10/2024</figcaption>

        <br />
      </div>

      <Footer />
    </>
  );
}

export default Media;
