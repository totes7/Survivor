import React, { useState } from 'react'
import { MenuItems4 } from './MenuItems4';
import "./Dropdown.css";
import { Link } from "react-router-dom";

function Dropdown4() {
    const [click, setClick] = useState(false);
    
      const handleClick = () => setClick(!click);
      
  return (
    <>
          <ul
            onClick={handleClick}
            className={click ? "dropdown-menu clicked" : "dropdown-menu"}
          >
            {MenuItems4.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className={item.className}
                    to={item.path}
                    onClick={() => setClick(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
  )
}

export default Dropdown4