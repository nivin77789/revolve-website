import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../App.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h48jfvt",
        "template_pj64jx2",
        form.current,
        "YcqMYtPUlbKtkI2hWu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="php-email-form">
      <div className="row">
        <div className="col-md-6 form-group">
          <input
            type="text"
            name="form_name"
            className="form-control"
            id="name"
            placeholder="Your Name"
            required
          />
        </div>
        <div className="col-md-6 form-group mt-3 mt-md-0">
          <input
            type="email"
            className="form-control"
            name="form_email"
            id="email"
            placeholder="Your Email"
            required
          />
        </div>
      </div>
      <div className="form-group mt-3">
        <input
          type="text"
          className="form-control"
          name="subject"
          id="subject"
          placeholder="Subject"
          required
        />
      </div>
      <div className="form-group mt-3">
        <textarea
          className="form-control"
          name="message"
          rows="7"
          placeholder="Message"
          required
        ></textarea>
      </div>
      <div className="my-3">
        <div className="loading">Loading</div>
        <div className="error-message"></div>
        <div className="sent-message">
          Your message has been sent. Thank you!
        </div>
      </div>
      <div className="text-center">
        <button type="submit" className="button">
          Send Message
        </button>
      </div>
    </form>
  );
};
