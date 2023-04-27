import React, { useState } from "react";

export default function Product({ product, cart, setCart }) {
  const [disable, setDisable] = useState(false);

  function updateCart(product) {
    const existingProduct = cart.find((i) => {
      return i.id === product.id;
    });

    if (existingProduct === undefined) {
      setCart([
        ...cart,
        {
          id: product.id,
          img: product.img,
          name: product.name,
          price: product.price,
          count: 1,
          limit: product.limit,
        },
      ]);
    } else {
      const newcart = cart.map((item) => {
        if (item.id === product.id && item.count < product.limit) {
          item.count = item.count + 1;
        } else if (item.id === product.id && item.count === product.limit) {
          setDisable(true);
        }
        return item;
      });
      setCart(newcart);
    }
  }

  return (
    <div key={product.id} style={{ margin: 20 }}>
      <img src={product.img} alt="shop-images" className="shop-img" />
      <br />
      <span style={{ fontWeight: "bold" }}>{product.name}</span>
      <span style={{ float: "right", marginRight: 10 }}>$ {product.price}</span>
      <br />
      <button
        disabled={disable}
        onClick={() => {
          updateCart(product);
        }}
        className="shop-add-button"
      >
        add to cart
      </button>
    </div>
  );
}
