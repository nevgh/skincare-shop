import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Story from "./pages/Story";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const addToCart = () => {
    setCount(count + 1);
  };

  const data = [];

  /*const handleAddClick = () => {
    for (let i = 0; i < ; i++)
  }*/

  /*const handleSubtractClick = () => {
    setQtn(qtn - 1);
  };*/

  /* const handleDecrementClick = () => {
    if (addToCart === true) {
      return count - 1;
    }
  };*/

  return (
    <>
      <BrowserRouter>
        <NavBar count={count} />

        <Routes>
          <Route path="/home" element={<Home />} exact />
          <Route
            path="/shop"
            element={
              <Shop
                addToCart={addToCart}
                /*handleAddClick={handleAddClick}*/
                /*handleSubtractClick={handleSubtractClick}*/
                /*handleDecrementClick={handleDecrementClick}*/
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
