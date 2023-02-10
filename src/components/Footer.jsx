import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="inner">
        <div className="footer-logo">
          <p>
            <a href="//pizza4ps.com/">
              <img
                src="//pizza4ps.com/common2017/img/header/logo_white.svg"
                alt="Pizza4P's"
                width={140}
                style={{ opacity: "100%" }}
              />
            </a>
          </p>
          <p>
            <span>
              <a href="https://pizza4ps.com/about/outline/" class="opa">
                Company Profile
              </a>
            </span>
            <span>Follow us</span>
            <a
              href="https://www.facebook.com/Pizza4Ps/"
              target="_blank"
              className="icon"
              rel="noreferrer"
            >
              <img
                src="//pizza4ps.com/common2017/img/other/ico_fb.svg"
                alt=""
                height={14}
                width="8"
                style={{ opacity: "100%" }}
              />
            </a>
            <a
              href="https://www.instagram.com/pizza4ps/"
              target="_blank"
              className="icon"
              rel="noreferrer"
            >
              <img
                src="//pizza4ps.com/common2017/img/other/ico_ins.svg"
                alt=""
                width={14}
                height={14}
                style={{ opacity: "100%" }}
              />
            </a>
          </p>
        </div>
        <ul class="footer-contact">
          <li>
            For inquiry:
            <a href="mailto:info@pizza4ps.com">info@pizza4ps.com</a>
          </li>
          <li>
            For feedback:
            <a href="mailto:feedback@pizza4ps.com">feedback@pizza4ps.com</a>
          </li>
        </ul>
        <p class="ffG">
          © <span class="ffT">2023</span> Pizza <span class="ffT">4</span>P’s
        </p>
      </div>
    </div>
  );
};

export default Footer;
