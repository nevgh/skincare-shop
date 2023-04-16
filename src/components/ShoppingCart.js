import React from "react";

const ShoppingCart = ({ cart, setCart, updateCart, isOpen, setIsOpen }) => {
  function handleDecrementBtn(p) {
    if (p.count > 1) {
      const newcart = cart.filter((item) => {
        if (item.id === p.id) {
          item.count = item.count - 1;
        }
        return item;
      });
      setCart(newcart);
    } else if (p.count === 1) {
      removeProductBtn(p);
    }
  }

  function removeProductBtn(p) {
    const newCart = cart.filter((item) => item.id !== p.id);
    setCart(newCart);
  }

  return (
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
      }}
    >
      <section id="cart-header">
        <h3>Your Cart</h3>
        <button className="cart-x-button" onClick={() => setIsOpen(!isOpen)}>
          x
        </button>
      </section>
      <div>
        {cart.map((p) => (
          <div className="cart-product-info" key={p.id}>
            <img className="cart-img" src={p.img} alt="products-images" />
            <div className="inside-product-info">
              <h2 className="product-name">{p.name}</h2>
              <span style={{ margin: 3 }}>$ {p.price}</span>
              <div className="cart-button-div">
                <button
                  className="inside-cart-button"
                  onClick={() => handleDecrementBtn(p)}
                >
                  -
                </button>
                <span style={{ margin: 3 }}>{p.count}</span>
                <button
                  className="inside-cart-button"
                  onClick={() => updateCart(p)}
                >
                  +
                </button>
                <button
                  className="inside-cart-button"
                  onClick={() => removeProductBtn(p)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
