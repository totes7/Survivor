import React from "react";
import "../../App.css";
import Footer from "../Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Gallery() {
  const images = require.context("../../images/gallery", true);

  const imagesList = images.keys().map((image) => images(image));

  return (
    <>
      <div className="gallery">
        <h1>GALLERY</h1>

        <p>UK Premiere with March of the Living</p>

        <p>Blake Ezra Photography, 28 November 2024</p>

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

export default Gallery;
