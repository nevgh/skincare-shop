import React, { useState } from "react";

const ShoppingCart = ({
  cart,
  setCart,
  setItemCount,
  itemQuantity,
  setItemQuantity,
  isOpen,
  setIsOpen,
}) => {
  function handleDecrementBtn() {
    if (itemQuantity > 1) {
      setItemQuantity(itemQuantity - 1);
    }
    setItemCount(cart.length);
  }

  function handleIncrementBtn() {
    setItemQuantity(itemQuantity + 1);
  }

  function removeProductBtn(p) {
    const newCart = cart.filter((item) => item.id !== p.id);
    setCart(newCart);
    setItemCount(cart.length);
  }

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          right: isOpen ? 0 : -300,
          width: 300,
          height: "100%",
          backgroundColor: "white",
          border: "1px solid black",
          transition: "right 0.3s ease-in-out",
          zIndex: 1,
          boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.5)",
          backdropFilter: isOpen ? "blur(10px)" : "none",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div style={{ padding: "10px", borderBottom: "1px solid black" }}>
          <h2>Shopping Cart</h2>
          <button onClick={() => setIsOpen(!isOpen)}>Close</button>
        </div>

        {cart.map((p) => (
          <div key={p.id}>
            <img width="30px" src={p.img} />
            <h2>{p.name}</h2>
            <p>$ {p.price}</p>
            <button onClick={() => handleDecrementBtn()}>-</button>
            <span>0</span>
            <button onClick={() => handleIncrementBtn()}>+</button>
            <button onClick={() => removeProductBtn(p)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ShoppingCart;
