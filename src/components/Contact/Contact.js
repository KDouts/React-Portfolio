import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useState();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rvts4kc",
        "template_4fvxwf2",
        form.current,
        "ncNdUpcFEN4Tfm-Co"
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
    <section id="Contact" className="main-container">
      <aside className="main-header" style={{ textAlign: "center" }}>
        <h2>Contact Me</h2>
      </aside>

      <article className="main-body">
        <div className="container">
          <div className="row">
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Contact;