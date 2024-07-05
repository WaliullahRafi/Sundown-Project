import React from "react";
import "./Page2.css";
import { motion } from "framer-motion";

function Page2() {
  return (
    <div className="page2">
      <div className="moving-text">
        <div className="con">
          <h1>EXPERIENCES</h1>
          <div className="circle"></div>
          <h1>CONTENT</h1>
          <div className="circle"></div>
          <h1>ENVIRONMENTS</h1>
          <div className="circle"></div>
        </div>

        <div className="con">
          <h1>EXPERIENCES</h1>
          <div className="circle"></div>
          <h1>CONTENT</h1>
          <div className="circle"></div>
          <h1>ENVIRONMENTS</h1>
          <div className="circle"></div>
        </div>

        <div className="con">
          <h1>EXPERIENCES</h1>
          <div className="circle"></div>
          <h1>CONTENT</h1>
          <div className="circle"></div>
          <h1>ENVIRONMENTS</h1>
          <div className="circle"></div>
        </div>
      </div>

      <div className="page2-bottom">
        <h2>
          We are a group of design-driven, goal-focused creators, producers, and
          designers who believe that the details make all the difference.
        </h2>
        <div className="bottom-img">
          <img
            src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15d1_Holding_thumb-p-500.jpg"
            alt=""
          />
          <p>
            We love to create, we love to solve, we love to collaborate, and we
            love to turn amazing ideas into reality. We’re here to partner with
            you through every step of the process and know that relationships
            are the most important things we build.
          </p>
        </div>
      </div>

      <div>
        {" "}
        <div className="circleAnimate"></div>
      </div>
    </div>
  );
}

export default Page2;
