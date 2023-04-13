import React from "react";

const ShoppingCart = ({
  cart,
  setCart,
  setItemCount,
  updateCart,
  isOpen,
  setIsOpen,
}) => {
  function handleDecrementBtn(p) {
    const newcart = cart.filter((item) => {
      if (item.id === p.id && item.count > 0) {
        item.count = item.count - 1;
      }
      return item;
    });

    setCart(newcart);
  }

  function removeProductBtn(p) {
    const newCart = cart.filter((item) => item.id !== p.id);
    setCart(newCart);
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
          border: ".5px grey",
          transition: "right 0.3s ease-in-out",
          zIndex: 1,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <section id="cart-header">
          <h3>Your Cart</h3>
          <button className="cart-x-button" onClick={() => setIsOpen(!isOpen)}>
            X
          </button>
        </section>
        <div>
          {cart.map((p) => (
            <div key={p.id}>
              <img width="50px" src={p.img} alt="" />
              <h2>{p.name}</h2>
              <p>$ {p.price}</p>
              <button onClick={() => handleDecrementBtn(p)}>-</button>
              <span>{p.count}</span>
              <button onClick={() => updateCart(p)}>+</button>
              <button onClick={() => removeProductBtn(p)}>Remove</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
