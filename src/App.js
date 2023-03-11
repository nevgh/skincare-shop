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
  // count of items being added to the cart//
  const [count, setCount] = useState(0);

  // const [isVisible, setIsVisible] = useState(false);

  const [cart, setCart] = useState([]);

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

  // to show count of cart everytime we add an item to bag//
  const addToCart = () => {
    setCount(count + 1);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar count={count} />
        <ShoppingCart
          cart={cart}
          setCart={setCart}
          count={count}
          setCount={setCount}
          updateCart={updateCart}
        />

        {/* <Slider isVisible={isVisible} setIsVisible={setIsVisible}/>  */}
        <Routes>
          <Route path="/home" element={<Home />} exact />
          <Route
            path="/shop"
            element={
              <Shop addToCart={addToCart} cart={cart} updateCart={updateCart} />
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
