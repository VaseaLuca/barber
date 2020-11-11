import React from 'react'

import home_background from '../assets/home_background.jpg';
import location_pin from '../assets/location.png';

import './Greetings.css';
function Gritings() {
  return (
    <div className='greetings'>
      <div className="greetings-background">
        <img src={home_background} alt="home_background"/>
      </div>
      <div className="greetings-hello">
        Bună
      </div>
      <div className="greetings-underline-text">
        Fii în siguranță și arată minunat.
      </div>
      <div className="greetings-text">
        Vezi ce spun oamenii despre noi și programează o vizită. Găsește salonul pe hartă
      </div>
        <div className='greetings-button'>
          Vezi
          <img src={location_pin} alt=""/>
        </div>
    </div>
  )
}

export default Gritings
