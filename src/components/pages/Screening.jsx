import React from "react";
import "../../App.css";

function Screening() {
  return (
    <>
      <div className="screening">
        <h1>SCREENING</h1>
        <p>
        Survivor will be first shown internationally at MIPCOM 24</p>
        <p>Register interest in attending a screening below </p>

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
                <label htmlFor="title-input" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  id="title-input"
                  placeholder="Title"
                  // value={toSend.subject}
                  // onChange={handleChange}
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
                  // value={toSend.subject}
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
              </form>
              <button
                // onClick={handleSubmit}
                type="submit"
                className="form-button"
              >
                Send
              </button>

      </div>
    </>
  );
}

export default Screening;
