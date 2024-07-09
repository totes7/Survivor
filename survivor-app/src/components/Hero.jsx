import React from "react";
import "../App.css";
import "./Hero.css";
import video from "../videos/video1.MP4";
import title from "../images/LogoTagBBG.png";

function Hero() {
  return (
    <div className="hero-container">
      <img src={title} alt="survivor logo title" className="title" />
      <p>
        Survivor is the story of a young boy caught up in the horrors of the
        Holocaust, told by Zoom Rockman using a unique animation style with
        paper puppets. Zoom met Ivor, a 92- year-old Holocaust survivor, in the
        summer of 2023. Ivor left a lasting impression on Zoom, inspiring him to
        share Ivor’s story, which remains relevant today. The film captures the
        full spectrum of humanity and inhumanity, allowing audiences to derive
        their own insights and reflections.
      </p>

      <div className="video-wrap">
        <h3>Watch the Trailer</h3>
        <video src={video} controls></video>
      </div>
    </div>
  );
}

export default Hero;
