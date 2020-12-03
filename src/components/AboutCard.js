import React from 'react'

import './AboutCard.scss';

function AboutCard({ header, description, img, isReversed }) {
  return (
    <div className={`about-card ${isReversed && `reverse`}`}>
      <div className="description-text-block">
        <div className="description-header"> {header} </div>
        <div className="about-description">{description}</div>
      </div>
      <div className="description-img">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default AboutCard
