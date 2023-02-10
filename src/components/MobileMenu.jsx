import React from "react";

const MobileMenu = () => {
  return (
    <div>
      <div className="mobile-bar">
        <button type="button" className="toggle-btn" onClick={""}>
          <span class="Hamburger js-Nav-hamburger">
            <b class="Hamburger__bar Hamburger__bar--first"></b>
            <b class="Hamburger__bar Hamburger__bar--middle"></b>
            <b class="Hamburger__bar Hamburger__bar--last"></b>
          </span>
        </button>
      </div>
      <div className="mobile-menu">
        <div className="mobile-menu-items">
          <div className="mobile-menu-inner">
            <ul>
              <li>
                <a href="https://pizza4ps.com/about/">About</a>
              </li>
              <li>
                <a href="https://pizza4ps.com/location/">Location</a>
              </li>
              <li>
                <a href="https://pizza4ps.com/menu/">Menu</a>
              </li>
              <li>
                <a href="https://invoice.pizza4ps.com/">E-Invoice</a>
              </li>
              <li>
                <a href="https://pizza4ps.com/news/">News</a>
              </li>
              <li>
                <a href="https://pizza4ps.com/">Activities</a>
              </li>
              <li>
                <a href="https://pizza4ps.talent.vn/">Career</a>
              </li>
              <li>
                <a href="https://delivery.pizza4ps.com/market4ps">
                  Online Store
                </a>
              </li>
              <li>
                <a href="https://pizza4ps.com/about/outline/">
                  Company Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
