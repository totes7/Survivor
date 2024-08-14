import React, { useState } from "react";
import { TeamMembers } from "./TeamMembers";
import "./Accordion.css";

function Accordion() {
  const [activeItemIndex, setActiveItemIndex] = useState();

  function toggleActiveItem(index) {
    if (index === activeItemIndex) {
      setActiveItemIndex(null);
    } else {
      setActiveItemIndex(index);
    }
  }

  return (
    <>
      <div>
        {TeamMembers.map((item, index) => {
          return (
            <div className="accordion-wrap" key={index}>
              <div
                onClick={() => toggleActiveItem(index)}
                className="accordion-intro"
              >
                <div className="accordion-name">{item.name}</div>
                <div className="accordion-title">{item.title}</div>
              </div>
              <div
                className={
                  index === activeItemIndex
                    ? "accordion-profile"
                    : "accordion-hidden"
                }
              >
                <img className="accordion-image" src={item.image} alt="" />
                <div className="accordion-text">{item.text}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Accordion;
