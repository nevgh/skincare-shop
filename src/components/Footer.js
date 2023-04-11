import React from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-list">
        <h5>CUSTOMER CARE</h5>
        <p>Contact Us</p>
        <p>1-888-442-5830</p>
        <p>Track Your Order</p>
        <p>Shipping & Delivery</p>
      </div>
      <div className="social-media">
        <h5>FOLLOW US</h5>
        <FaInstagramSquare className="social-media-icons" />
        <FaTwitterSquare className="social-media-icons" />
        <FaFacebookSquare className="social-media-icons" />
      </div>
    </div>
  );
};

export default Footer;
