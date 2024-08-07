import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <section class="social-media">
          <div class="social-media-wrap">
            <div class="social-icons">
              <Link
                class="social-icon-link instagram"
                to="https://www.instagram.com/the_zoomcomic/"
                target="_blank"
                aria-label="Instagram"
              >
                <i class="fab fa-instagram" />
              </Link>
              <Link
                class="social-icon-link youtube"
                to="https://www.youtube.com/channel/UCEfloRN5hzghunA970rEv0g"
                target="_blank"
                aria-label="Youtube"
              >
                <i class="fab fa-youtube" />
              </Link>
              <Link
                class="social-icon-link twitter"
                to="https://x.com/The_ZoomComic?t=6XHyQxg4Wy7DVdoxBkoqHg&s=08"
                target="_blank"
                aria-label="Twitter"
              >
                <i class="fab fa-x-twitter" />
              </Link>
              <Link
                class="social-icon-link linkedin"
                to="https://www.linkedin.com/in/sallyvaughan/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i class="fab fa-linkedin" />
              </Link>
            </div>
            <small class="website-rights">
              © Copyright Exceptional Agency |{" "}
              <Link to="https://www.exceptionalagency.com/" target="_blank">
                exceptionalagency.com
              </Link>{" "}
              |{" "}
              <Link to="/privacy-policy">
                Privacy Policy
              </Link>{" "}
            </small>
          </div>
        </section>
      </div>
    </>
  );
}

export default Footer;
