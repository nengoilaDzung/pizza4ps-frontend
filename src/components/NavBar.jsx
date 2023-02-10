import React from "react";
import { Link } from "react-router-link";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="NavBar-container">
      <div className="NavBar-logo op">
        <a href="/">
          <img
            src="//pizza4ps.com/common2017/img/header/logo_white.svg"
            alt="Pizza4P's"
          />
        </a>
      </div>
      <div className="NavBar-Row ">
        <div className="NavBar-LinkRow op">
          <Link>About</Link>
          <Link>Location</Link>
          <Link>Menu</Link>
          <Link>Invoice</Link>
          <Link>News</Link>
          <Link>Activites</Link>
          <Link>Career</Link>
          <Link>Online Store</Link>
          <span className="NavBar-lang">
            <IoMdArrowDropdown />
            <a className="mainLang" href="nothing">
              <img
                src="https://cdn.pixabay.com/photo/2012/04/11/15/31/united-28519__340.png"
                alt="lang"
              ></img>
              <a className="subLang" href="nothing">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg"
                  alt="lang"
                ></img>
              </a>
            </a>
          </span>
        </div>

        <div className="NavBar-btn del">Deliveries</div>
        <div className="NavBar-btn res">Reservations</div>
      </div>
      <div
        class="toggle-btn"
        onClick={() => {
          if (showMobileMenu) {
            setShowMobileMenu(false);
          } else {
            setShowMobileMenu(true);
          }
        }}
      >
        <span class="Hamburger js-Nav-hamburger">
          <b class="Hamburger__bar Hamburger__bar--first"></b>
          <b class="Hamburger__bar Hamburger__bar--middle"></b>
          <b class="Hamburger__bar Hamburger__bar--last"></b>
        </span>
      </div>
      {showMobileMenu && <MobileMenu />}
    </div>
  );
};

export default NavBar;
