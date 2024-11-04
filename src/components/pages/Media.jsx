import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Footer from "../Footer";
import deckPdf from "../../files/SurvivorDeck.pdf";
import postcardOne from "../../images/MediaPostcard-1.jpg";
import postcardTwo from "../../images/MediaPostcard-2.jpg";

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

        {/* <Link
          to="https://1drv.ms/b/s!AjvfCszXQ7AWjp0LJcwJrPd2pnXCIQ?e=WsiVOL"
          target="_blank"
        >
          <button>
            Download <i class="fa-solid fa-file-pdf"></i>{" "}
          </button>
        </Link> */}

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
