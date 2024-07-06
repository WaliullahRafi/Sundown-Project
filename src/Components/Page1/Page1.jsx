import React from "react";
import "./Page1.css";

function Home() {
  return (
    <section className="page1">
      <nav>
        <img
          className="logo"
          src="https://assets-global.website-files.com/64d3dd9edfb41666c35b15b7/64d3dd9edfb41666c35b15c2_Sundown%20logo.svg"
          alt="logo"
        />
        <div className="nav-part2">
          <h4>
            <a href="#">Work</a>
          </h4>
          <h4>
            <a href="#">Studio</a>
          </h4>
          <h4>
            <a href="#">Contact</a>
          </h4>
        </div>
      </nav>

      <div className="center">
        <div className="left">
          <h4>
            Sundown is a multi-disciplinary studio focused on creating unique,
            end-to-end experiences and environments.
          </h4>
        </div>
        <div className="right">
          <h1>
            SPACES <br />
            THAT <br />
            INSPIRE
          </h1>
        </div>
      </div>

      <div className="hero-shape">
        <div className="hero1"></div>
        <div className="hero2"></div>
        <div className="hero3"></div>
      </div>

      <video
        autoPlay
        muted
        loop
        src="https://download-video.akamaized.net/v3-1/playback/ea709ea7-d205-45c7-9919-b6484f30fa24/b7e94ef4?__token__=st=1720204252~exp=1720218652~acl=%2Fv3-1%2Fplayback%2Fea709ea7-d205-45c7-9919-b6484f30fa24%2Fb7e94ef4%2A~hmac=3547b68f903eb16d81a037e4435bd9dfaaff317b0c01c30b3b6aa1ba45c0b6a1&r=dXMtZWFzdDE%3D"
      ></video>
    </section>
  );
}

export default Home;
