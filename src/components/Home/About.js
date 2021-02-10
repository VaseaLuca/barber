import React from "react";
import { Link } from "react-router-dom";

import "./About.scss";

function About ({ title, info, img, directory }) {
  return (
    <div className="about">
      <div className="about-text-block">
        <div className="about-text">{title}</div>
        <div className="about-text-description">{info}</div>
        <Link to={directory}>
          <div className="about-button"> Vezi </div>
        </Link>
      </div>
      <div className="about-img">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default About;
