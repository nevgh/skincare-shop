import React from "react";
import { Link } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";

const NavBar = ({ setIsOpen, isOpen, itemQuantity }) => {
  return (
    <>
      <nav>
        <img src="./flawless-logo.png" className="logo" alt="flawless-logo" />
        <section>
          <AiFillShopping onClick={() => setIsOpen(!isOpen)} />
          <span>{itemQuantity}</span>
        </section>
        <div>
          <ul>
            <Link className="navbar-link" to="/">
              Home
            </Link>
            <Link className="navbar-link" to="/shop">
              Shop
            </Link>
            <Link className="navbar-link" to="/story">
              Story
            </Link>
            <Link className="navbar-link" to="/contact">
              Contact
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
