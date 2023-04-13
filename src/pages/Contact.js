import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    console.log("sending an email");
    e.preventDefault();

    emailjs
      .sendForm(
        "service_otja1r9",
        "template_4t5bg9i",
        form.current,
        "B9vbike64FR1HSNGw"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const handleSubmitClick = () => {
    console.log(<p>Message Sent</p>);
  };
  return (
    <div className="contact-us-div">
      <div>
        <h3 className="contact-us-h3">CONTACT US</h3>
        <p className="contact-para">
          Have a question? Check out our FAQ page as your question may be
          answered there. Still need help? Please contact us below.
        </p>
      </div>
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <fieldset>
            <label for="name">Name</label>
            <br />
            <input type="text" name="name" id="name" />
            <br />
            <label for="email">Email</label> <br />
            <input type="text" name="email" id="email" required />
            <br />
            <label for="message">Message</label>
            <br />
            <textarea type="text" name="message"></textarea>
            <br />
            <button onSubmit={handleSubmitClick} type="submit">
              Send
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Contact;
