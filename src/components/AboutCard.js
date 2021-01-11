import React from 'react'

import ig from "./assets/instagram_logo.png";
import fb from './assets/facebook_logo_black.png';
import './AboutCard.scss';


function AboutCard({ header, description, img, isReversed }) {
  return (
    <div className={`about-card ${isReversed && `reverse`}`}>
      <div className="description-text-block">
        <div className="description-header"> {header} </div>
        <div className="about-description">
          {description}
          <div className="about-description-social">
            Vezi lucrările noastre:
            <a href="https://www.facebook.com/goldentimes.oficial"><img className="description-social-ig" src={ig} alt="ig" /></a>
            <a href="https://www.instagram.com/goldentimes__/"><img className="description-social-fb" src={fb} alt="fb" /></a>
          </div>
        </div>
      </div>
      <div className="description-img">
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default AboutCard
