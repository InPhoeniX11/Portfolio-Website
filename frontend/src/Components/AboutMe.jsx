import { Link } from "react-router-dom";
import "../CSS/AboutMe.css";
import React from "react";
import React1 from "../Images/react1.png";
import React2 from "../Images/react2.png";

const AboutMe = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          Im Sudhanshu Singh, a graduate from Gautam Buddha University with a Bachelor's
          degree. Im a MERN stack developer focused on building responsive secure websites
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className="img" alt="true"></img>
          </div>
          <div className="img-stack bottom">
            <img src={React2} className="img" alt="true"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
