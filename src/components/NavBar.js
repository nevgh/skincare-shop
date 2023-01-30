import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ count }) => {
  return (
    <div className="navbar">
      <div>
        <img src="./flawless-logo.png" className="logo" alt="" />
      </div>
      <div style={{ textAlign: "center" }}>
        <ul>
          <Link className="navbar-list" to="/home">
            HOME
          </Link>
          <Link className="navbar-list" to="/shop">
            SHOP
          </Link>
          <Link className="navbar-list" to="/story">
            OUR STORY
          </Link>
          <Link className="navbar-list" to="/contact">
            CONTACT
          </Link>
          <section className="shopping-bag">
            <img src="./shopping-bag.png" alt="cart" width={"30px"} />
            <p style={{ marginTop: "9px" }}>{count}</p>
          </section>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
