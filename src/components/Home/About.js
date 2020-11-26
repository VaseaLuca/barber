import React from 'react'

import './About.scss';

function About({ title, info, img }) {
  return (
    <div className="about">
      <div className="about-text-block">
        <div className="about-text">
          {title}
        </div>
        <div className="about-text-description">
          {info}
        </div>
        <div className="about-button">
          Vezi
        </div>
      </div>
      <div className="about-img">
        <img src={img} alt=""/>
      </div>
    </div>
  );
}

export default About;
