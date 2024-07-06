import React from "react";
import "./Page1.css";
import Video from "../../assets/video.mp4";

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

      <video autoPlay muted loop src={Video}></video>
    </section>
  );
}

export default Home;
