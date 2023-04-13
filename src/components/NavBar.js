import React from "react";
import { Link } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";

const NavBar = ({ setIsOpen, isOpen, itemQuantity }) => {
  return (
    <>
      <nav>
        <img src="./flawless-logo.png" className="logo" alt="flawless-logo" />
        <div>
          <ul>
            <Link className="navbar-link" to="/">
              HOME
            </Link>
            <Link className="navbar-link" to="/shop">
              SHOP
            </Link>
            <Link className="navbar-link" to="/story">
              STORY
            </Link>
            <Link className="navbar-link" to="/contact">
              CONTACT
            </Link>
          </ul>
          <section id="cart-icon-section">
            <AiFillShopping onClick={() => setIsOpen(!isOpen)} />
            <span>{itemQuantity}</span>
          </section>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
