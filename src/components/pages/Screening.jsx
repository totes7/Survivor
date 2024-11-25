import React from "react";
// import { useState } from "react";
// import { send } from "emailjs-com";
import { Link } from "react-router-dom";
import "../../App.css";
import Footer from "../Footer";
import banner from "../../images/Banner-2.jpg";

function Screening() {
  // const [toSend, setToSend] = useState({
  //   name: "",
  //   title: "",
  //   company: "",
  //   email: "",
  // });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   send("service_jo247gy", "template_ahtmcvl", toSend, "EHusL7UCq5epQtLBc")
  //     .then((response) => {
  //       console.log("SUCCESS!", response.status, response.text);
  //     })
  //     .catch((err) => {
  //       console.log("FAILED...", err);
  //     });

  //   setToSend({
  //     name: "",
  //     title: "",
  //     company: "",
  //     email: "",
  //   });

  //   alert("Thank you for getting in touch!");
  // };

  // const handleChange = (e) => {
  //   setToSend({ ...toSend, [e.target.name]: e.target.value });
  // };

  return (
    <>
      <div className="screening">
        <div id="screening-title">
          <h1>EVENTS</h1>
        </div>

        <p>
          Special Screening with Official Charity Partner March of the Living
        </p>

        <div id="screening-banner">
          <img className="banner" src={banner} alt="MIPCOM banner" />
        </div>

        <Link
          to="https://www.marchoftheliving.org.uk/events/survivor-film/"
          target="_blank"
        >
          <button>BOOK</button>
        </Link>

        {/* <div id="screening-form">
          <form id="myForm" className="mb-3">
            <label htmlFor="name-input" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name-input"
              placeholder="Name"
              value={toSend.name}
              onChange={handleChange}
            />
            <label htmlFor="title-input" className="form-label">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="form-control"
              id="title-input"
              placeholder="Title"
              value={toSend.title}
              onChange={handleChange}
            />
            <label htmlFor="message-input" className="form-label">
              Company
            </label>
            <input
              type="text"
              name="company"
              className="form-control"
              id="company-input"
              placeholder="Company"
              value={toSend.company}
              onChange={handleChange}
            />
            <label htmlFor="email-input" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email-input"
              placeholder="name@example.com"
              value={toSend.email}
              onChange={handleChange}
            />
          </form>
          <button onClick={handleSubmit} type="submit" className="form-button">
            Book
          </button>
        </div> */}
      </div>

      <Footer />
    </>
  );
}

export default Screening;
