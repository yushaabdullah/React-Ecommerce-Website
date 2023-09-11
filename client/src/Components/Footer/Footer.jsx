import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Welcome to Wave & Thread, your ultimate destination for a seamless
            online shopping experience. At Wave & Thread, we're passionate about
            bringing you high-quality products that enhance your life while
            providing exceptional customer service.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Have questions or need assistance? Feel free to reach out to our
            friendly customer support team. We're here to help you make the most
            of your shopping experience. Thank you for choosing Wave & Thread.
            We look forward to serving you and becoming your trusted online
            shopping destination. Happy Shopping!
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Wave & Thread</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved.
          </span>
        </div>
        <div className="right">
          <img src="./img/payment.png" alt="payment methods" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
