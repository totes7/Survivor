import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import Footer from "../Footer";

function Abc() {
  return (
    <>
      <div className="abc">
        <h1>ABC</h1>

        <p>
          Survivor was screened on ABC TV, the Australian National Public
          Television Network at 4.30pm local time on 27th January, Holocaust
          Memorial Day and is now available on their streaming platform.
        </p>

        <Link
          to="https://www.abc.net.au/tv/epg/index.html#/"
          target="_blank"
        >
          Stream on ABC TV
        </Link>
      </div>

      <Footer/>
    </>
  );
}

export default Abc;
