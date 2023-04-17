import React from "react";
import { Link } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";

const NavBar = ({ setIsOpen, isOpen, itemQuantity, cart }) => {
  const handleOpenCart = () => {
    if (cart.length !== 0) setIsOpen(!isOpen);
  };
  return (
    <nav>
      <Link to="/">
        <img src="./flawless-logo.png" className="logo" alt="flawless-logo" />
      </Link>
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
          <AiFillShopping onClick={handleOpenCart} />
          <span>{itemQuantity}</span>
        </section>
      </div>
    </nav>
  );
};

export default NavBar;
