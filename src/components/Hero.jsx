import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Hero.css";
import video from "../videos/HomeBGVideo.mp4";
// import cover from "../images/HeroCover.png";
// import mipcom from "../images/MipcomLogo.png";
import logo from "../images/LogoTagBBG.png";

function Hero() {
  return (
    <div className="hero-container">
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted></video>
      <div className="video-banner">
        <img src={logo} alt="Survivor logo" />
        <div className="video-buttons">
          <button>
            <Link to="/media">WATCH TRAILER</Link>
          </button>

          <button>
            <Link to="/screening-form">BOOK A SCREENING</Link>
          </button>
        </div>
      </div>

      {/* <div className="hero-image">
        <div className="ribbon">
          <Link to="/screening">
            <img src={mipcom} alt="MIPCOM logo" className="banner-logo" />
          </Link>
        </div>
        <img src={cover} alt="survivor logo title" className="title" />
      </div> */}

      {/* <p>
        <em>Survivor</em> is the story of a young boy caught up in the horrors
        of the Holocaust, told by Zoom Rockman using a unique animation style
        with paper puppets. Zoom met Ivor, a 92 year-old Holocaust survivor, in
        the summer of 2023. Ivor left a lasting impression on Zoom, inspiring
        him to share Ivor’s story, which remains relevant today.
      </p>
      <p>
        We follow 12-year-old Ivor Perl from a small village in Hungary to the
        gates of Auschwitz, Kaufering, Allach, and Dachau, witnessing the
        unspeakable horrors of the Holocaust. From being herded onto a cattle
        truck and narrowly avoiding the gas chambers and ovens, to enduring
        hunger, typhus, and unimaginable loss, we ultimately see the unbreakable
        bond between two brothers and their miraculous survival.
      </p>
      <p>
        The beautiful visual and auditory intricacy of Zoom Rockman’s unique
        animation style will captivate the audience, ensuring they won't want to
        take their eyes off the screen.
      </p> */}
    </div>
  );
}

export default Hero;
