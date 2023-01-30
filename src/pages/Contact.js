import React from "react";

const Contact = () => {
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
          <textarea type="text"></textarea>
          <br />
          <button type="submit">Send</button>
        </fieldset>
      </div>
    </div>
  );
};

export default Contact;
