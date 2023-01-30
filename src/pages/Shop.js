import React from "react";

import { data } from "../data";

const Shop = ({ addToCart, handleAddClick, handleSubtractClick, qtn }) => {
  return (
    <>
      <div className="product-list">
        {data.map((product) => (
          <div key={product.id} style={{ margin: "20px" }}>
            <img
              src={product.img}
              alt=""
              style={{
                width: "200px",
                height: "300px",
                objectFit: "cover",
                marginBottom: "15px",
              }}
            />{" "}
            <br />
            <span style={{ fontWeight: "bold" }}>{product.name}</span>
            <span style={{ float: "right", marginRight: "10px" }}>
              $ {product.price}
            </span>
            <br />
            <button onClick={handleAddClick}> + </button>
            <br />
            <p>{qtn}</p> <br />
            <button onClick={handleSubtractClick}> - </button> <br />
            <button
              onClick={() => {
                addToCart();
              }}
              className="button"
            >
              add to cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Shop;
