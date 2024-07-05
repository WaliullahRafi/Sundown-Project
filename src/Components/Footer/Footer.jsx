import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div id="footer">
      <div className="top">
        <div className="left">
          <h2>Work Studio Contact</h2>
        </div>
        <div className="right">
          <h4>
            Get industry insights and creative inspiration straight to your
            inbox.
          </h4>
        </div>
      </div>

      <img
        src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c6_Footer%20Logo.svg"
        alt=""
      />

      <div className="copyright">
        <h4>Copyright © Sundown Studio</h4>
        <h4>Brooklyn, NY</h4>
        {/* <h4>
          <a href="#">Instagram</a>
        </h4>
        <h4>
          <a href="#">Linkedin</a>
        </h4> */}
      </div>
    </div>
  );
}

export default Footer;