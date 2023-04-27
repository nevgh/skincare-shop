import React from "react";
import Roses from "../images/roses.jpg";
import Aloevera from "../images/Aloevera.jpg";
import SmearCream from "../images/smear-cream-beige.jpg";
import ApplyingCream from "../images/applying-cream.jpg";
import HydrationMask from "../images/hydration-mask.jpg";
import OatSoap from "../images/oat-soap.jpg";
import OilDrop from "../images/Oil-drop.jpg";
import Chamomile from "../images/Chamomile-flower.jpg";

const Home = () => {
  return (
    <>
      <h3 className="blog-header">FROM THE BLOG</h3>
      <div className="blog-block">
        <div className="blog-post">
          <img className="blog-img" src={Roses} alt="roses" />
          <p className="blog-para">
            Revitalize Your Skin with the Power of Nature: Experience the
            Nourishing Benefits of Our All-Natural Skincare Products
          </p>
          <button className="blog-readmore-button">Read More</button>
        </div>
        <div className="blog-post">
          <img className="blog-img" src={SmearCream} alt="smear-cream-beige" />
          <p className="blog-para">
            The Ultimate Guide to Natural Skincare: How to Achieve a Flawless,
            Radiant Complexion Using Only the Best Ingredients from Mother
            Nature
          </p>
          <button className="blog-readmore-button">Read More</button>
        </div>
        <div className="blog-post">
          <img className="blog-img" src={Aloevera} alt="aloevera" />
          <p className="blog-para">
            Unlock the Power of Aloe Vera: The Miraculous Benefits for Your Skin
          </p>
          <button className="blog-readmore-button">Read More</button>
        </div>
        <div className="blog-post">
          <img className="blog-img" src={ApplyingCream} alt="applying-cream" />
          <p className="blog-para">
            Unlock the Secret to Glowing Skin: Miracle Ingredient That Soothes,
            Nourishes and Restores Your Complexion to Its Natural Radiance
          </p>
          <button className="blog-readmore-button">Read More</button>
        </div>
      </div>
      <div className="blog-block">
        <div className="blog-post">
          <img className="blog-img" src={HydrationMask} alt="haydration-mask" />
          <p className="blog-para">
            Rejuvenate Your Skin with Hydration Masks: The Key to a Radiant and
            Refreshed Complexion
          </p>
          <button className="blog-readmore-button">Read More</button>
        </div>
        <div className="blog-post">
          <img className="blog-img" src={OatSoap} alt="oat-soap" />
          <p className="blog-para">
            Oats: The Skincare Superfood You Need to Know About - Discover the
            Benefits of Oats for Your Skin
          </p>
          <button className="blog-readmore-button">Read More</button>
        </div>
        <div className="blog-post">
          <img className="blog-img" src={OilDrop} alt="oil-drop" />
          <p className="blog-para">
            Benefits of JOJOBA OIL - Liquid Gold for Skin
          </p>
          <button className="blog-readmore-button">Read More</button>
        </div>
        <div className="blog-post">
          <img className="blog-img" src={Chamomile} alt="chamomile" />
          <p className="blog-para">
            From Redness to Radiance: Transform Your Skin with Chamomile - The
            Natural Remedy Your Skin Deserves
          </p>
          <button className="blog-readmore-button">Read More</button>
        </div>
      </div>
    </>
  );
};

export default Home;
