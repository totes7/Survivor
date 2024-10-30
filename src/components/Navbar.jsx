import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import logo from "../images/LogoBBG.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

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

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/" onClick={closeMobileMenu}>
              <img src={logo} alt="survivor logo" />
            </Link>
          </div>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            
            <li>
              <Link
                to="/contact"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                CONTACT
              </Link>
            </li>
            <li
              className="nav-item dropdown-button"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
                MORE &nbsp; <i className="fas fa-caret-down" />
              {dropdown && <Dropdown />}
            </li>
            <li>
              <Link
                to="/about"
                className="nav-links mobile-link"
                onClick={closeMobileMenu}
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/info"
                className="nav-links mobile-link"
                onClick={closeMobileMenu}
              >
                PRODUCTION
              </Link>
            </li>
            <li>
              <Link
                to="/media"
                className="nav-links mobile-link"
                onClick={closeMobileMenu}
              >
                MEDIA
              </Link>
            </li>
            <li>
              <Link
                to="/screening"
                className="nav-links mobile-link"
                onClick={closeMobileMenu}
              >
                SCREENINGS
              </Link>
            </li>
            <li>
              <Link
                to="/book"
                className="nav-links mobile-link"
                onClick={closeMobileMenu}
              >
                THE BOOK
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
