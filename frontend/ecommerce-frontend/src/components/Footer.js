// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-about">
            <h5>E-Commerce</h5>
            <p>
              Your one-stop shop for all the latest products. Discover amazing deals on electronics, clothing, and more.
            </p>
          </div>
          <div className="col-md-4 footer-links">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>
          <div className="col-md-4 footer-newsletter">
            <h5>Follow Us</h5>
            <div className="footer-social-links">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            </div>
            <h5>Newsletter</h5>
            <form>
              <input type="email" className="form-control" placeholder="Enter your email" />
              <button type="submit" className="btn btn-primary mt-2">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="text-center">© 2024 E-Commerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
