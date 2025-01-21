import React from "react";
import "../../App.css";
import Footer from "../Footer";
import banner from "../../images/BannerLogo.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Bonus() {
  const images = require.context("../../images/bonus", true);

  const imagesList = images.keys().map((image) => images(image));
  return (
    <>
      <div className="bonus">
        <img className="film-banner" src={banner} alt="film banner" />

        <h1>CREATING SURVIVOR</h1>

        <p>
          {" "}
          <em>Creating Survivor</em> is a behind-the-scenes look at how the
          animated Holocaust film <em>Survivor</em> came to be. Animator,
          puppet-maker and director Zoom Rockman discusses his creative process,
          filmmaking techniques and extensive research, as well as how he came
          to meet Ivor Perl BEM, the subject of this incredible story. Also
          contributing are scriptwriter Kate Lennard, composer Erran Baron
          Cohen, singer Pini Brown and soundscape creator Morgan Penn. Featuring
          clips from <em>Survivor</em>.<br />
          <br />
          <em>Creating Survivor</em> is a SuperGrizzly Production for Lemon Soul, Exceptional Agency & Mainstreet Media.
        </p>

        <p></p>

        {imagesList.map((image, index) => (
          <LazyLoadImage
            key={index}
            src={image}
            alt={`image-${index}`}
            effect="blur"
            className="gallery-img"
            height="100%"
            width="100%"
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Bonus;
