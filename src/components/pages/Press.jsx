import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Footer from "../Footer";
import postcardTwo from "../../images/MediaPostcard-2.jpg";
import forbesLogo from "../../images/ForbesLogo.jpg";
import adam from "../../images/Adam.jpg";
import banner from "../../images/BannerLogo.jpg";

function Press() {
  return (
    <>
      <div className="press">
        <img className="film-banner" src={banner} alt="film banner" />

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

        <img
          src={postcardTwo}
          alt="MIPCOM news article"
          className="postcard-two"
        />
        <figcaption>MIPCOM Cannes News 22/10/2024</figcaption>
      </div>
      <Footer />
    </>
  );
}

export default Press;
