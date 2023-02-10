import React from "react";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <div className="mainSection mainBlock">
      <div className="mainSection-intro">
        <div
          className="intro-left"
          data-aos="fade-right"
          data-aos-duration="1400"
        >
          <h3>
            Welcome to
            <span> Pizza 4P's</span>
          </h3>
        </div>
        <div className="intro-right " data-aos="fade-left">
          <p>
            With our mission of "Delivering Wow, Sharing Happiness," we have
            been striving every day to provide the best dining experience to all
            of our dear guests. A restaurant should not be a place to simply
            have a meal. We truly want every guest to leave happy with our food,
            service, and environment that delivers the "Wow" factor. We continue
            to evolve and improve every day so that we can always fulfill our
            mission of "Delivering Wow, Sharing Happiness" to every guest.
          </p>
          <p className="intro-btn">
            <a href="/">About Pizza 4P's</a>
          </p>
        </div>
      </div>

      <div className="mainSection-list">
        <ul style={{ display: "block" }}>
          <li className="" data-aos="fade-up">
            <a href="/">
              <img
                alt=""
                src="https://pizza4ps.com/img2017/top/img_item2.webp"
              />
              <span>Home-made Cheese</span>
            </a>
          </li>
          <li className="" data-aos="fade-up">
            <a href="/">
              <img
                alt=""
                src="https://pizza4ps.com/img2017/top/img_item1.webp"
              />
              <span>Farm To Table</span>
            </a>
          </li>
          <li className="" data-aos="fade-up">
            <a href="/">
              <img
                alt=""
                src="https://pizza4ps.com/img2017/top/img_item3.webp"
              />
              <span>Design</span>
            </a>
          </li>
          <li className="" data-aos="fade-up">
            <a href="/">
              <img
                alt=""
                src="https://pizza4ps.com/img2017/top/img_item4.webp"
              />
              <span>“Omotenashi”</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="mainSection-intro mainSection-intro2">
        <div className="intro-left intro2-left" data-aos="fade-right">
          <h3>
            <span> “Magic of Pizza”</span>
            is <br /> the origin of our restaurant.
          </h3>
          <p>
            Back in 2005, the founder of Pizza 4P's, Masuko, built a wood-fired
            pizza oven with his friends in the backyard of his house. He invited
            his friends and family and hosted pizza parties. In 2011, the
            original members who once made the pizza oven gathered again and
            started the history of Pizza 4P's. We named our restaurant Pizza
            4P's, based on our vision, Make the World Smile "For Peace."
          </p>
        </div>
        <div className="intro-right intro2-right" data-aos="fade-left">
          <img
            alt="img"
            src="https://pizza4ps.com/img2017/top/img_top1.webp"
          ></img>
        </div>
      </div>
      <div className="ourMenu" data-aos="fade-up">
        <div className="innerMenu">
          <h3 className="menuHead" width={"100%"}>
            <span>Our Menu</span>
          </h3>
          <ul>
            <li>
              <a
                href="https://pizza4ps.com//html/PZ_Seasonal_Menu_Digital.html"
                target={"blank"}
              >
                <span>SEASONAL</span>
              </a>
            </li>
            <li>
              <Link to="/menu/pizza">
                <span>PIZZA</span>
              </Link>
            </li>
            <li>
              <Link to="/menu/food">
                <span>FOOD</span>
              </Link>
            </li>
            <li>
              <Link to="/menu/dessert">
                <span>DESSERT</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section;
