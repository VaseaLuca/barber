import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

import home_background from '../assets/home_background.jpg';
import location_pin from '../assets/location.png';
import location_pin_white from "../assets/location_white.png";

import './Greetings.scss';

function Gritings() {

  const [isHovered, setIsHovered]= useState(false);

  return (
    <LazyLoad>
      <div className="greetings">
        <div className="greetings-background">
          <img src={home_background} alt="home_background" />
        </div>
        <div className="greetings-hello">Bună!</div>
        <div className="greetings-underline-text">
          Fii în siguranță și arată minunat!
        </div>
        <div className="greetings-text">
          Vezi ce spun clienții noștri despre noi și programează o vizită.
          Găsește salonul pe hartă
        </div>
        <div className="button-section">
          <Link to="/maps">
            <div
              className="greetings-button"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Vezi
              {isHovered ? (
                <img src={location_pin_white} alt="" />
              ) : (
                <img src={location_pin} alt="" />
              )}
            </div>
          </Link>
          <a href="https://agendamea.ro/s/vV9jL/golden-times?fbclid=IwAR197qgJrTewdjm4RXbLKJzUEXNoCI_wuEXSLDlB9aWoRAvDHGBQr0J-k1Y">
            <div className="greetings-button-red">Programare Online</div>
          </a>
        </div>
      </div>
    </LazyLoad>
  );
}

export default Gritings
