import React from "react";
import "./About.css";
import Me from "../../image/me9.webp";
import Award from "../../image/awaed4.svg";

function About() {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me} alt="imagee" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About me</h1>
        <p className="a-sub">
          {" "}
          Hello everyone! I am currently a final-year student at CHARUSAT
          University pursuing my degree in Information Technology. I have a
          strong passion for web development and cloud computing. I am committed
          to continuous learning and professional growth, and am always seeking
          out new challenges and opportunities to expand my skills and
          knowledge. If you are looking for a web developer who is dedicated to
          excellence and committed to achieving outstanding results, then look
          no further than me.
        </p>
     
        <div className="a-award">
          <img src={Award} alt="a-award" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Design</h4>
            <p className="a-award-desc">
              {" "}
             I am proficient in designing attractive UI of web-pages.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
