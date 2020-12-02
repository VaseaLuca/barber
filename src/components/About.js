import React from 'react'

import AboutCard from './AboutCard.js';

function About() {
  return (
     <div className='description'>
          <div className="description-block">
          <div className="description-text">
            Despre Noi
          </div>
          <AboutCard header={'Bună'} />

          <AboutCard header={'Salut'} />
        </div>

    </div>
  )
}

export default About;
