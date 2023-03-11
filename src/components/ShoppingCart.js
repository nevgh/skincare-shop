import React from "react";
import { useState } from "react";

const ShoppingCart = ({ cart, count, setCount }) => {
  const [itemCount, SetItemCount] = useState(1);

  function handleDecrementBtn() {
    if (itemCount > 1) SetItemCount(itemCount - 1);
  }

  function handleIncrementBtn() {
    SetItemCount(itemCount + 1);
  }

  function removeProductBtn() {
    SetItemCount(0);
    setCount(cart.length);
  }
  return (
    <>
      <h1>your cart</h1>

      {cart.map((p) => (
        <div key={p.id}>
          <img width="30px" src={p.img} />
          <h2>{p.name}</h2>
          <p>$ {p.price}</p>
          <button onClick={handleDecrementBtn}>-</button>
          <span>{itemCount}</span>
          <button onClick={handleIncrementBtn}>+</button>
          <button onClick={removeProductBtn}>Remove</button>
        </div>
      ))}
    </>
  );
};

export default ShoppingCart;
