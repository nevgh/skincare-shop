import React from "react";
import { data } from "../data";

const Shop = ({ addToCart, updateCart }) => {
  return (
    <div className="product-list">
      {data.map((product) => (
        <div key={product.id} style={{ margin: "20px" }}>
          <img src={product.img} alt="shop-images" className="shop-img" />
          <br />
          <span style={{ fontWeight: "bold" }}>{product.name}</span>
          <span style={{ float: "right", marginRight: "10px" }}>
            $ {product.price}
          </span>
          <br />
          <button
            onClick={() => {
              addToCart();
              updateCart(product);
            }}
            className="shop-add-button"
          >
            add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Shop;
