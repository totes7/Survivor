import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <>
      <div className="card-container">
        <Link to={props.path} target="_blank">
          <figure className="card-image-wrap">
            <img src={props.src} alt="" className="card-image" />
            <figcaption>{props.caption}</figcaption>
          </figure>
        </Link>

        <div className="card-info">
          <p className="card-text">{props.text}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
