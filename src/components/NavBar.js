import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillShopping } from "react-icons/ai";

const NavBar = ({ setIsOpen, isOpen, itemQuantity, cart }) => {
  const handleOpenCart = () => {
    if (cart.length !== 0) setIsOpen(!isOpen);
  };
  return (
    <nav>
      <NavLink to="/">
        <img src="./flawless-logo.png" className="logo" alt="flawless-logo" />
      </NavLink>
      <ul>
        <li>
          <NavLink className="navbar-link" to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/shop">
            SHOP
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/story">
            STORY
          </NavLink>
        </li>
        <li>
          <NavLink className="navbar-link" to="/contact">
            CONTACT
          </NavLink>
        </li>
      </ul>
      <section id="cart-icon-section">
        <AiFillShopping onClick={handleOpenCart} />
        <span>{itemQuantity}</span>
      </section>
    </nav>
  );
};

export default NavBar;
