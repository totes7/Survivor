import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Footer from "../Footer";
import deckPdf from "../../files/SurvivorDeck.pdf";
import trailer from "../../videos/SurvivorTrailer.mp4";
import postcardOne from "../../images/MediaPostcard-1.jpg";
import postcardTwo from "../../images/MediaPostcard-2.jpg";
import forbesLogo from "../../images/ForbesLogo.jpg";
import adam from "../../images/Adam.jpg";
import jonny from "../../images/Jonny.jpg";

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

        <div className="jonny-podcast">
          <img src={jonny} alt="Jonny Gould" className="jonny-pic" />
          <div className="jonny-text">
            <p className="jonny-p">
              "It is extremely emotional... this provides another sector to my understanding..."
            </p>
            <small>Jonny Gould, 10 Dec 2024</small>
            <Link
              to="https://podfollow.com/1454252164/episode/930dbba239f9e3cb93a34a132db54780a353fbe6/view"
              target="_blank"
            >
              Listen to full podcast here
            </Link>
          </div>
        </div>

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
