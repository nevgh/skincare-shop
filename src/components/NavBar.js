import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ count }) => {
  return (
    <div className="navbar-container">
      <div>
        <ul>
          <Link className="navbar-link" to="/home">
            HOME
          </Link>
          <Link className="navbar-link" to="/shop">
            SHOP
          </Link>
          <img src="./flawless-logo.png" className="logo" alt="flawless-logo" />
          <Link className="navbar-link" to="/story">
            OUR STORY
          </Link>
          <Link className="navbar-link" to="/contact">
            CONTACT
          </Link>
        </ul>
      </div>

      <img src="./shopping-bag.png" alt="cart" width={"30px"} />

      <p>{count}</p>
    </div>
  );
};

export default NavBar;
