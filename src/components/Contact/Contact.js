import React, { useState } from "react";
import emailjs from "emailjs-com";
import Row from "react-bootstrap/Row";

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
        <div className="container" style={{ textAlign: "center" }}>
          <div>
            <form ref={form} onSubmit={sendEmail} style={{  }}>
              <input type="text" name="user_name" value="Name" style={{ width: "100%", margin: "10px" }}/>
              <input type="email" name="user_email" value="Email" style={{ width: "100%", margin: "10px" }}/>
              <textarea name="message" value="Message" style={{ width: "100%", margin: "10px" }}/>
              <input type="submit" value="Send" />
            </form>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Contact;