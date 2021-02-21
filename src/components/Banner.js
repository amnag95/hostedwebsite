import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaInstagram,
  FaPlay,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
const Banner = () => {
  const [state] = React.useState({
    title: "Amna Ghori",
    text:
      "I'm Amna Ghori, an experienced Software and Web Developer with more than 2 years of professional experience",
    // image: "/images/man-01.png",
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                    <a href="https://www.facebook.com/aamnaghori">
                      <FaFacebookF className="headerIcon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/aamnagk">
                      <FaTwitter className="headerIcon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/amnag95">
                      <FaGithub className="headerIcon" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/public-profile/in/amna-ghori-54519b1b6">
                      <FaLinkedin className="headerIcon" />
                    </a>
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a href="" className="btn btn-outline">
                    My Resume
                  </a>
                  &nbsp;&nbsp;&nbsp;
                  {/* <a href="" className="btn btn-smart">
                    <FaPlay className="play" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              {/* <img src={state.image} alt="man" /> */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
