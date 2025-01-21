import React from "react";
import "../../App.css";
import Footer from "../Footer";
import deckPdf from "../../files/SurvivorDeck.pdf";

function MediaPack() {
  return (
    <>
      <div className="media-pack">
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
      </div>
      <Footer />
    </>
  );
}

export default MediaPack;
