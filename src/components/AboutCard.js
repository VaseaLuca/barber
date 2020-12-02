import React from 'react'

function AboutCard({ header }) {
  return (
    <div className="about-card">
      <div className='about-card-description-block'>
        <div className="about-card-header"> {header} </div>
        <div className="about-card-description"></div>
      </div>
      <div className='about-card-photo'>
        <img src="" alt=""/>
      </div>
    </div>
  );
}

export default AboutCard
