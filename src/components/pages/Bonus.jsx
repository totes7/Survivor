import React from "react";
import "../../App.css";
import Footer from "../Footer";
import banner from "../../images/BannerLogo.jpg";
import clip2 from "../../videos/CreatingSurvivorClip2.mp4";
import clip3 from "../../videos/CreatingSurvivorClip3.mp4";
import pic1 from "../../images/bonus/CreatingSurvivor-1.jpg";
import pic2 from "../../images/bonus/CreatingSurvivor-2.jpg";
import pic3 from "../../images/bonus/CreatingSurvivor-3.jpg";
import pic4 from "../../images/bonus/CreatingSurvivor-4.jpg";
import pic5 from "../../images/bonus/CreatingSurvivor-5.jpg";
import pic6 from "../../images/bonus/CreatingSurvivor-6.jpg";
import pic7 from "../../images/bonus/CreatingSurvivor-7.jpg";
import pic8 from "../../images/bonus/CreatingSurvivor-8.jpg";
import { HashLink as Link } from "react-router-hash-link";

function Bonus() {
    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.scrollY;
        const yOffset = -80; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

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
          <em>Creating Survivor</em> is a SuperGrizzly Production for Lemon
          Soul, Exceptional Agency & Mainstreet Media.
        </p>

        <video src={clip2} controls></video>

        <video src={clip3} controls></video>

        <img
          src={pic1}
          className="gallery-img"
          alt="crew working in production"
        />

        <img src={pic2} className="gallery-img" alt="drawing on a wall" />

        <Link smooth to="/info#erran-image" scroll={el => scrollWithOffset(el)}> 
          <img src={pic3} className="gallery-img" alt="Erran Baron Cohen" />
        </Link>

        <Link smooth to="/info#morgan-image" scroll={el => scrollWithOffset(el)}> 
          <img src={pic4} className="gallery-img" alt="Morgan Penn" />
        </Link>

        <img src={pic5} className="gallery-img" alt="Erran Baron Cohen" />

        <Link smooth to="/info#pini-image" scroll={el => scrollWithOffset(el)}> 
          <img src={pic6} className="gallery-img" alt="Pini Brown" />
        </Link>

        <Link smooth to="/info#kate-image" scroll={el => scrollWithOffset(el)}> 
          <img src={pic7} className="gallery-img" alt="Kate Lennard" />
        </Link>

        <Link smooth to="/info#zoom-image" scroll={el => scrollWithOffset(el)}> 
          <img src={pic8} className="gallery-img" alt="Zoom Rockman" />
        </Link>

      </div>

      <Footer />
    </>
  );
}

export default Bonus;
