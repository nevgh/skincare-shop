import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <h3>Customer Care</h3>
        <p>Contact Us</p>
        <p>1-888-442-5830</p>
        <p>Track Your Order</p>
        <p>Shipping & Delivery</p>
      </div>

      <div className="social-media">
        <h4>Follow us</h4>
        <img
          src="./instagram.png"
          alt="instagram"
          style={{ width: "20px", margin: "5px" }}
        />
        <img
          src="./tiktok.png"
          alt="tiktok"
          style={{ width: "20px", margin: "5px" }}
        />
        <img
          src="./linkedin.png"
          alt="linkedin"
          style={{ width: "20px", margin: "5px" }}
        />
      </div>
    </div>
  );
};

export default Footer;
