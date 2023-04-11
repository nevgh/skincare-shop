import React from "react";
import ImageSlider from "../components/ImageSlider";
import Floral from "../images/floral.jpg";
import ChamomileFlower from "../images/Chamomile-flower.jpg";
import Vitaminc from "../images/vitaminc.jpg";
import Roses from "../images/roses.jpg";
import Aloevera from "../images/Aloevera.jpg";

const Home = () => {
  const slides = [
    { url: Roses, title: "roses" },
    { url: Vitaminc, title: "vitamin-c" },
    { url: Aloevera, title: "aloevera" },
    { url: ChamomileFlower, title: "chamomile-flower" },
    { url: Floral, title: "floral" },
  ];

  // const containerStyles = {
  //   width: "600px",
  //   height: "300px",
  //   margin: 0,
  // };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <p
        style={{
          width: "280px",
          margin: "30px",
          padding: "20px",
        }}
      >
        Discover the power of nature with our all-natural skincare products,
        crafted to nourish and rejuvenate your skin with the finest ingredients
        nature has to offer.
      </p>
      <br />
      {/* <div>
        <ImageSlider slides={slides} />
      </div> */}
    </div>
  );
};

export default Home;
