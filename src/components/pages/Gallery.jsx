import React from "react";
import "../../App.css";
import Footer from "../Footer";

function Gallery() {
  const images = require.context("../../images/gallery", true);

  const imagesList = images.keys().map((image) => images(image));

  return (
    <>
      <div className="gallery">
        <h1>GALLERY</h1>
        {imagesList.map((image, index) => (
            <img key={index} src={image} alt={`image-${index}`} />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Gallery;
