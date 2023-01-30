import React, {useRef} from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    console.log(
      "sending an email"
    )
    e.preventDefault();

    emailjs.sendForm('service_otja1r9', 'template_4t5bg9i', form.current, 'B9vbike64FR1HSNGw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div style={{ width: "40%", margin: "0 auto" }}>
      <div>
        <h1
          style={{
            marginTop: "60px",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          CONTACT US
        </h1>
        <p>
          Have a question? Check out our FAQ page as your question may be
          answered there. Still need help? Contact us below.
        </p>
      </div>
      <div className="container">
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
          <textarea type="text" name='message' ></textarea>
          <br />
          <button type="submit">Send</button>
        </fieldset>

        </form>
      </div>
    </div>
  );
};

export default Contact;
