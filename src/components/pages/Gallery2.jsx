import React from "react";
import "../../App.css";
import Footer from "../Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import InstagramEmbed from "../InstagramEmbed";

function Gallery2() {
  const images = require.context("../../images/gallery2", true);

  const imagesList = images.keys().map((image) => images(image));

  return (
    <>
      <div className="gallery">
        <h1>GALLERY</h1>

        <p className="jw3-p">JW3 Holocaust Memorial Day</p>

        <InstagramEmbed />

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

export default Gallery2;