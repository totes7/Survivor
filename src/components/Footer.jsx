import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import lemon from "../images/LemonSoul.png";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="lemon-soul">
          <p>
            <em>Survivor</em> is a Lemon Soul film. <em>Survivor</em> images are
            reproduced with the permission of Lemon Soul.{" "}
          </p>
          <Link to="https://lemonsoul.com/" target="_blank">
            <img src={lemon} alt="lemon soul logo" className="ls-logo-footer" />
          </Link>
        </div>

        <div class="social-media-wrap">
          <div class="social-icons">
            <Link
              class="social-icon-link instagram"
              to="https://www.instagram.com/surv_ivor_film/"
              target="_blank"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </Link>
            <Link
              class="social-icon-link youtube"
              to="https://www.youtube.com/@survivor-w4o"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
            <Link
              class="social-icon-link twitter"
              to="https://x.com/SURV_IVOR_Film"
              target="_blank"
              aria-label="Twitter"
            >
              <i class="fab fa-x-twitter" />
            </Link>
            <Link
              class="social-icon-link linkedin"
              to="https://www.linkedin.com/showcase/survivorfilm/about/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <i class="fab fa-linkedin" />
            </Link>
            <Link
              class="social-icon-link facebook"
              to="https://www.facebook.com/groups/883285257193799/?ref=share_group_link"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook" />
            </Link>
            <Link
              class="social-icon-link tiktok"
              to="https://www.tiktok.com/@survivorfilm"
              target="_blank"
              aria-label="TikTok"
            >
              <i class="fab fa-tiktok" />
            </Link>
          </div>

          <small class="website-rights">
            © Copyright Lemon Soul |{" "}
            <Link to="https://lemonsoul.com/" target="_blank">
              lemonsoul.com
            </Link>{" "}
            | <Link to="/privacy-policy">Privacy Policy</Link>{" "}
          </small>
        </div>
      </div>
    </>
  );
}

export default Footer;
