import React from "react";
import "../../App.css";
import Footer from "../Footer";

function Contact() {
  return (
    <>
      <div className="contact">
        <h1>CONTACT</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, hic odio
          veniam tenetur saepe magni? Itaque, delectus eius! Optio nostrum neque
          id quod excepturi. Voluptatibus ullam optio quam itaque ex.
        </p>

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
            // value={toSend.name}
            // onChange={handleChange}
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
            // value={toSend.email}
            // onChange={handleChange}
          />
          <label htmlFor="subject-input" className="form-label">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            className="form-control"
            id="subject-input"
            placeholder="Subject"
            // value={toSend.subject}
            // onChange={handleChange}
          />
          <label htmlFor="message-input" className="form-label">
            Message
          </label>
          <textarea
            name="message"
            className="form-control"
            id="message-input"
            rows="4"
            placeholder="Leave a message"
            // value={toSend.message}
            // onChange={handleChange}
          ></textarea>
        </form>
        <button
          // onClick={handleSubmit}
          type="submit"
          className="form-button"
        >
          Send
        </button>

        <h1>SOCIAL</h1>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
