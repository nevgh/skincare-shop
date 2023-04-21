import React from "react";
import Roses from "../images/roses.jpg";
import Aloevera from "../images/Aloevera.jpg";
import SmearCream from "../images/smear-cream-beige.jpg";
import ApplyingCream from "../images/applying-cream.jpg";

const Home = () => {
  return (
    <div>
      <h3 className="home-header">FROM THE BLOG</h3>
      <div>
        <img className="home-img" src={Roses} alt="roses" />
        <p className="home-para">
          Revitalize Your Skin with the Power of Nature: Experience the
          Nourishing Benefits of Our All-Natural Skincare Products
        </p>
        <button className="home-readmore-button">Read More</button>
      </div>
      <div>
        <img className="home-img" src={SmearCream} alt="smear-cream-beige" />
        <p className="home-para">
          The Ultimate Guide to Natural Skincare: How to Achieve a Flawless,
          Radiant Complexion Using Only the Best Ingredients from Mother Nature
        </p>
        <button className="home-readmore-button">Read More</button>
      </div>
      <div>
        <img className="home-img" src={Aloevera} alt="aloevera" />
        <p className="home-para">
          Unlock the Power of Aloe Vera: The Miraculous Benefits for Your Skin
        </p>
        <button className="home-readmore-button">Read More</button>
      </div>

      <div>
        <img className="home-img" src={ApplyingCream} alt="applying-cream" />
        <p className="home-para">
          Unlock the Secret to Glowing Skin: Miracle Ingredient That Soothes,
          Nourishes and Restores Your Complexion to Its Natural Radiance
        </p>
        <button className="home-readmore-button">Read More</button>
      </div>
    </div>
  );
};

export default Home;
