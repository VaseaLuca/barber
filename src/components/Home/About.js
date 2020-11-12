import React from 'react'

function About({ title, info, img }) {
  return (
    <div className="about">
      <div className="about-text-block">
        <div className="about-text">
          {title}
        </div>
        <div className="about-text-block">
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
