import React from "react";
import Lavender from "../images/lavender.jpg";
import Chamomile from "../images/Chamomile-dry.jpg";
import OilHand from "../images/Oil-onhand.jpg";

const Story = () => {
  return (
    <>
      <div className="about-us-container">
        <img className="story-img" src={Lavender} alt="lavender" />
        <div className="story-para">
          <h3>Who We Are</h3>
          <br />
          <p>
            Our FLAWLESS skincare is founded on the belief that what you put on
            your skin is just as important as what you put in your body. That's
            why we only use the finest natural ingredients, sourced from trusted
            suppliers around the world, in all of our products. We never use
            harsh chemicals, synthetic fragrances, or other harmful additives
            that can irritate your skin or compromise your health. Our mission
            is to help you nourish and pamper your skin with products that are
            both effective and safe. Whether you're looking to soothe dry,
            sensitive skin, reduce the appearance of fine lines and wrinkles, or
            simply maintain a healthy, youthful glow, we have the perfect
            products for you. We are committed to providing excellent customer
            service, and we always stand behind our products. If you're ever not
            satisfied with your purchase, simply let us know and we'll make it
            right.
          </p>
          <br />
          <p>Look Good. Feel Good. Do Good.</p>
        </div>
      </div>
      <div className="about-us-container">
        <img className="story-img" src={Chamomile} alt="chamomile" />
        <div className="story-para">
          <h3>Clean & Sustainable</h3>
          <br />
          <p>
            At our natural skincare brand, we believe that using natural
            ingredients is the key to achieving healthy, glowing skin. Our
            products are made with only the finest, all-natural ingredients,
            carefully selected for their nourishing and rejuvenating properties.
            By avoiding harsh chemicals, synthetic fragrances, and other harmful
            additives, we ensure that our products are gentle and safe for even
            the most sensitive skin types. Whether you're looking for
            ingredients like aloe vera, chamomile, lavender, or rosehip oil, you
            can trust that our products are made with the highest quality,
            all-natural ingredients to deliver the best possible results. We
            believe that by using nature's best ingredients, we can help you
            achieve the healthy, radiant skin you deserve. <br /> <br />
            <p>
              Safety and sustainability is not a destination, it's a journey
              upon which we are continually improving on.
            </p>
          </p>
          <br />
        </div>
      </div>
      <div className="about-us-container">
        <img className="story-img" src={OilHand} alt="oil" />
        <div className="story-para">
          <h3>Clinically Proven</h3>
          <br />
          <p>
            Working with researchers at leading universities, including Carnegie
            Mellon and Cornell, we work to leverage the very latest in
            anti-aging science and identify breakthrough botanical extracts
            known to be rich in antioxidants, vitamins, and essential fatty
            acids. We pack and squeeze as many of these biocompatible
            plant-actives into our formulas and then put them to the test in
            third-party clinical trials. <br /> <br />
            <p>
              We believe the results speak for themselves. Our products are
              clinically proven to outperform leading anti-aging skincare
              brands!
            </p>
          </p>
        </div>
      </div>
    </>
  );
};

export default Story;
