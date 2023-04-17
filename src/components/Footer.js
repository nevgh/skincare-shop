import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <h5>CUSTOMER CARE</h5>
        <ul className="footer-list">
          <li>FAQS</li>
          <br></br>
          <li>Track Order</li>
          <br></br>
          <li>Shipping</li>
          <br></br>
          <li>Contact Us</li>
          <br></br>
        </ul>
      </div>
      <div>
        <h5>FOLLOW US</h5>
        <div className="social-media-icons">
          <a href="https://www.instagram.com" target="_blank">
            <FaInstagramSquare />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <FaTwitterSquare />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <FaFacebookSquare />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
