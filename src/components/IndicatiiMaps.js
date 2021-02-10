import React, { useState } from "react";

import location_pin from "./assets/location.png";
import location_pin_white from "./assets/location_white.png";
import Footer from "./Home/Footer";
import "./IndicatiiMaps.scss";

function IndicatiiMaps() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="maps">
      <div className="maps-first-block">
        <div className="maps-block">
          <div className="maps-name">Adresa noastră</div>
          <div className="maps-text">Profesor Emil Honoriu nr. 22C, Iași</div>
          <a href="https://www.google.com/maps/place/Golden+Times+Salon+de+%C3%8Enfrumuse%C8%9Bare/@47.1329472,27.5655852,16.98z/data=!4m5!3m4!1s0x40cafba6e074d399:0xc5b8cd7f2c7578fa!8m2!3d47.1329495!4d27.5678043">
            <div
              className="maps-button"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              INDICAȚII MAPS
              {isHovered ? (
                <img src={location_pin_white} alt="" />
              ) : (
                <img src={location_pin} alt="" />
              )}
            </div>
          </a>
        </div>
        <div className="maps-google">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d339.28309626603425!2d27.5676707!3d47.1330786!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cafba6e074d399%3A0xc5b8cd7f2c7578fa!2sGolden%20Times%20Salon%20de%20%C3%8Enfrumuse%C8%9Bare!5e0!3m2!1sen!2sro!4v1606939016395!5m2!1sen!2sro"
            height="450"
            frameBorder="0"
            style={{ border: "0" }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
      <div className="maps-second-block">
        <div className="maps-call-text">
          Suntem la dispoziția dumneavoastră pentru consultare/programare
        </div>
        <a href="tel:0787222302">
          <div className="maps-call-button">SUNĂ</div>
        </a>
      </div>
      <Footer />
    </div>
  );
}
export default IndicatiiMaps;