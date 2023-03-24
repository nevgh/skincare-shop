import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Story from "./pages/Story";
import Contact from "./pages/Contact";
import ShoppingCart from "./components/ShoppingCart";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // counter for items in cart //
  const [itemCount, setItemCount] = useState(0);

  const [cart, setCart] = useState([]);
  // counter for items quantity //
  const [itemQuantity, setItemQuantity] = useState(0);
  //shopping cart slider
  const [isOpen, setIsOpen] = useState(false);

  function updateCart(product) {
    setCart([
      ...cart,
      {
        id: product.id,
        img: product.img,
        name: product.name,
        price: product.price,
      },
    ]);
  }

  const addToCart = () => {
    setItemQuantity(itemQuantity + 1);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar
          itemQuantity={itemQuantity}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          cart={cart}
        />
        <ShoppingCart
          cart={cart}
          setCart={setCart}
          updateCart={updateCart}
          setItemCount={setItemCount}
          itemQuantity={itemQuantity}
          setItemQuantity={setItemQuantity}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

        {/* <Slider isVisible={isVisible} setIsVisible={setIsVisible}/>  */}
        <Routes>
          <Route path="/home" element={<Home />} exact />
          <Route
            path="/shop"
            element={
              <Shop
                addToCart={addToCart}
                cart={cart}
                updateCart={updateCart}
                itemCount={itemCount}
                setItemCount={setItemCount}
              />
            }
            exact
          />
          <Route path="/story" element={<Story />} exact />
          <Route path="/contact" element={<Contact />} exact />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
