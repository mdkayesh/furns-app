import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsYoutube,
  BsPinterest,
} from "react-icons/bs";

import { GiPaperPlane } from "react-icons/gi";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-4">
            <div className="footer-item">
              <div className="about">
                <h2>About Us</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dignissimos aliquam facere corrupti maxime dolores itaque.
                  Excepturi deleniti dignissimos commodi enim officia sit
                  debitis fugiat ipsum. Labore fuga dolores unde ut deleniti.
                </p>
                <ul className="social-area">
                  <li>
                    <a href="/">
                      <BsFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <BsTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <BsLinkedin />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <BsYoutube />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <BsPinterest />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="footer-item">
              <h2>Information</h2>
              <ul className="footer-link">
                <li>
                  <a href="/">About Us</a>
                </li>
                <li>
                  <a href="/">Manufactures</a>
                </li>
                <li>
                  <a href="/">Tracking Order</a>
                </li>
                <li>
                  <a href="/">Privacy & Policy</a>
                </li>
                <li>
                  <a href="/">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-2">
            <div className="footer-item">
              <h2>MY ACCOUNT</h2>
              <ul className="footer-link">
                <li>
                  <a href="/">Login</a>
                </li>
                <li>
                  <a href="/">My Cart</a>
                </li>
                <li>
                  <a href="/">Wishlist</a>
                </li>
                <li>
                  <a href="/">Compare</a>
                </li>
                <li>
                  <a href="/">My Account</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-3">
            <div className="footer-item">
              <h2>newsletter</h2>
              <div className="input-container">
                <form action="">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your E-mail address.."
                  />
                  <button type="submit" className="button-basic orange">
                    <GiPaperPlane />
                    subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
