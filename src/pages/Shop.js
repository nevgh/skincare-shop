import React from "react";
import { data } from "../data.js";
import Product from "../components/Product.js";

const Shop = ({ cart, setCart }) => {
  return (
    <div className="product-list">
      {data.map((product) => (
        <Product product={product} cart={cart} setCart={setCart} />
      ))}
    </div>
  );
};

export default Shop;
