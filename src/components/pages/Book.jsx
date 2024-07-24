import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import cover from "../../images/BookCover.webp";
import ivor from "../../images/IvorProfile.jpg";
import Card from "../Card";
import Footer from "../Footer";

function Book() {
  return (
    <>
      <div className="book">
        <h1>BOOK</h1>
        <div className="book-container">
          <Card
            src={ivor}
            alt="Ivor Perl BEM picture"
            title="Author"
            caption="Ivor Perl BEM"
            text="Ivor Perl was only 12 years old when his family were evicted from their home, robbed of their possessions, loaded into a cattle truck and deported to Auschwitz.

            A family of 11, only Ivor and his older brother Alec would survive the Holocaust. His mother, father and five siblings were all murdered by the Nazis.

            Every day in Auschwitz was a brutal struggle for survival, surrounded by unimaginable horror. Against all the odds Ivor survived the Holocaust and would go on to build a meaningful and fulfilling life in England."
            path="https://www.hmd.org.uk/resource/ivor-perl/"
            classOuter="book-card-container"
            classImage="book-card-image"
          />

          <img
            src={cover}
            alt="cover of the book 'Chicken Soup Under the Tree'"
          />
        </div>
        <Link
          to="https://lemonsoul.com/products/chicken-soup-under-the-tree"
          target="_blank"
        >
          <button>BUY ON LEMON SOUL</button>
        </Link>
        <Link
          to="https://www.amazon.co.uk/Chicken-Soup-Under-Tree-Journey/dp/1999378156"
          target="_blank"
        >
          <button>BUY ON AMAZON</button>
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Book;
