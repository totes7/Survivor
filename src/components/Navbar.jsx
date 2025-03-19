import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import Dropdown2 from "./Dropdown2";
import Dropdown3 from "./Dropdown3";
import Dropdown4 from "./Dropdown4";
// import logo from "../images/LogoBBG.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };

  const onMouseEnter3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(true);
    }
  };

  const onMouseLeave3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(false);
    }
  };

  const onMouseEnter4 = () => {
    if (window.innerWidth < 960) {
      setDropdown4(false);
    } else {
      setDropdown4(true);
    }
  };

  const onMouseLeave4 = () => {
    if (window.innerWidth < 960) {
      setDropdown4(false);
    } else {
      setDropdown4(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {/* <div className="navbar-logo">
            <Link to="/" onClick={closeMobileMenu}>
              <img src={logo} alt="survivor logo" />
            </Link>
          </div> */}

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/about"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/info"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                PRODUCTION
              </Link>
            </li>
            <li
              className="nav-item dropdown-button"
              onMouseEnter={onMouseEnter4}
              onMouseLeave={onMouseLeave4}
              >
              WATCH
              {dropdown4 && <Dropdown4 />}
              </li>
              <li className="nav-item">
              <Link
                to="/screening"
                className="nav-links mobile-link"
                onClick={closeMobileMenu}
              >
                WATCH AT HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/past-events"
                className="nav-links mobile-link"
                onClick={closeMobileMenu}
              >
                CINEMA
              </Link>
            </li>
            <li
              className="nav-item dropdown-button"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
              >
              MEDIA
              {dropdown && <Dropdown />}
              </li>
            <li className="nav-item">
              <Link
                to="/mediapack"
                className="nav-links mobile-link"
                onClick={closeMobileMenu}
              >
                MEDIA PACK
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/trailer"
                className="nav-links mobile-link"
                onClick={closeMobileMenu}
              >
                TRAILER
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/press"
                className="nav-links mobile-link"
                onClick={closeMobileMenu}
              >
                PRESS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/podcasts"
                className="nav-links mobile-link"
                onClick={closeMobileMenu}
              >
                PODCASTS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/bonus"
                className="nav-links mobile-link"
                onClick={closeMobileMenu}
              >
                CREATING SURVIVOR
              </Link>
            </li>
            <li
              className="nav-item dropdown-button"
              onMouseEnter={onMouseEnter3}
              onMouseLeave={onMouseLeave3}
              >
              EVENTS
              {dropdown3 && <Dropdown3 />}
              </li>
              <li className="nav-item">
              <Link
                to="/screening"
                className="nav-links mobile-link"
                onClick={closeMobileMenu}
              >
                UPCOMING EVENTS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/past-events"
                className="nav-links mobile-link"
                onClick={closeMobileMenu}
              >
                PAST EVENTS
              </Link>
            </li>
            <li
              className="nav-item dropdown-button"
              onMouseEnter={onMouseEnter2}
              onMouseLeave={onMouseLeave2}
              >
              GALLERY
              {dropdown2 && <Dropdown2 />}
              </li>
              <li className="nav-item">
              <Link
                to="/gallery2"
                className="nav-links mobile-link"
                onClick={closeMobileMenu}
              >
                JW3
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/gallery"
                className="nav-links mobile-link"
                onClick={closeMobileMenu}
              >
                LONDON PREMIERE
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/book"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                THE BOOK
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
