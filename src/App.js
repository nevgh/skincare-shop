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
  const [cart, setCart] = useState([]);
  //shopping cart slider
  const [isOpen, setIsOpen] = useState(false);

  const reduceCount = () => {
    const totalCount = cart.reduce((total, item) => {
      total = item.count + total;
      return total;
    }, 0);
    return totalCount;
  };

  return (
    <>
      <BrowserRouter>
        <NavBar
          itemQuantity={reduceCount()}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          cart={cart}
        />
        <ShoppingCart
          cart={cart}
          setCart={setCart}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />

        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route
            path="/shop"
            element={<Shop cart={cart} setCart={setCart} />}
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
