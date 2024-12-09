import React from "react";
import "../../App.css";
import Footer from "../Footer";
import { LazyLoadImage } from "react-lazy-load-image-component";

function Gallery() {
  const images = require.context("../../images/gallery", true);

  const imagesList = images.keys().map((image) => images(image));

  return (
    <>
      <div className="gallery">
        <h1>GALLERY</h1>
        {imagesList.map((image, index) => (
          <LazyLoadImage
            key={index}
            src={image}
            alt={`image-${index}`}
            effect="blur"
            className="gallery-img"
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Gallery;
