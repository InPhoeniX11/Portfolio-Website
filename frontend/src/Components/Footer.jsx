import "../CSS/Footer.css";

import React from "react";

import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Rustampur</p>
              <p>Gorakhpur</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 9696218032
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              sudhanshusingh04251@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About me</h4>
          <p>
            This is Sudhanshu Singh. MERN Stack developer. I enjoy discussing
            and working on new projects and web development challenges.
            <div className="socials">
              <a
                href="https://www.facebook.com/sudhanshusingh.rajpoot.71/"
                target="blank"
              >
                <FaFacebook
                  size={28}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </a>
              <a
                href="https://x.com/Sudhans74005939"
                target="blank"
              >
                <FaTwitter
                  size={28}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/sudhanshu-singh-570b58235/"
                target="blank"
              >
                <FaLinkedin
                  size={28}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </a>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
