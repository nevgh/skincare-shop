import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Story from "./pages/Story";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [count, setCount] = useState(0);
  // const [isVisible, setIsVisible] = useState(false);

  const [cart, setCart] = useState([]);

  updateCart(product);
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
    setCount(count + 1);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar count={count} />

        {/* <Slider isVisible={isVisible} setIsVisible={setIsVisible}/>  */}
        <Routes>
          <Route path="/home" element={<Home />} exact />
          <Route
            path="/shop"
            element={
              <Shop addToCart={addToCart} cart={cart} setCart={setCart} />
            }
            exact
          />
          <Route path="/story" element={<Story />} exact />
          <Route path="/contact" element={<Contact />} exact />
          <Route
            path="/shopping-cart"
            element={<ShoppingCart cart={cart} setCart={setCart} />}
            exact
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
