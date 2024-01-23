import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <header>
        <h1>Contact Me.</h1>
        <p>I&apos;m very much open to collaborations and discussions relating to building products that solves world problems.</p>
      </header>

      <div className="card">
        <span className="title">Leave a Comment</span>
        <form className="form">
          <div className="group">
            <input placeholder="e.g John Doe" type="text" />
          </div>
          <div className="group">
            <input placeholder="yourname@gmail.com" type="email" id="email" name="email" />
          </div>
          <div className="group">
            <textarea
              placeholder="input comment..."
              id="comment"
              name="comment"
              rows="5"
              required=""
              maxLength="300"
            ></textarea> 
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
