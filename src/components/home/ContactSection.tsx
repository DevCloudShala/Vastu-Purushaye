import React from "react";
import "./ContactSection.css"; // Create a CSS file for styling

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-form">
        <h2>Request A Quote By Submitting This Form</h2>
        <p>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart.
        </p>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Full Name*" required />
            <input type="text" placeholder="Address*" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email*" required />
            <input type="text" placeholder="Phone*" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Company*" required />
            <input type="text" placeholder="Areas Of Interest*" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Project Budget*" required />
          </div>
          <textarea
            placeholder="Additional Information"
            rows="4"
            className="full-width"
          ></textarea>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
      <div className="contact-details">
        <h3>Location</h3>
        <p>
          4 apt. Flawing Street, The Grand Avenue.
          <br />
          Liverpool, UK 33342
        </p>
        <a href="mailto:contact@infinitewptheme.com">
          contact@infinitewptheme.com
        </a>
        <a href="tel:+135243356">+1-3524-3356</a>
        <h3>Operation Time</h3>
        <p>
          We are open on Monday – Friday at 11am and 3pm, except on holidays.
        </p>
      </div>
    </div>
  );
};

export default ContactSection;
