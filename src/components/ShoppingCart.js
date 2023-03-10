import React from "react";
import { useState } from "react";

const ShoppingCart = () => {
  return (
    <>
      <h1>your cart</h1>
      <div>
        <img />
        <span>product name</span>
        <span>Price</span>
        <p>Quantity</p>
        <button> - </button>
        <button> + </button>
        <button>Remove</button>
      </div>
    </>
  );
};

export default ShoppingCart;
