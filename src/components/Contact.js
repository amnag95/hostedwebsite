import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaPlay,
} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
                <img src="/images/logo.gif" alt="" />
              </div>
              <p><center>
              Copyright © 2021 - Designed & developed by Amna Ghori by using React JS
              </center></p>
              <ul className="contactCircles">
                <li>
                    <a href="https://www.facebook.com/aamnaghori">
                      <FaFacebookF className="contactIcon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/aamnagk">
                      <FaTwitter className="contactIcon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/amnag95">
                      <FaGithub className="contactIcon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/public-profile/in/amna-ghori-54519b1b6">
                      <FaLinkedin className="contactIcon" />
                    </a>
                  </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
