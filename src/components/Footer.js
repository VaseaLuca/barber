import React from 'react';


import fb from "./assets/facebook_logo_white.png";
import ig from "./assets/instagram_logo_white.png";
import './Footer.css';

function Footer () {
  return (
    <div className="footer">
      <div className="footer-row">
        <div className="footer-column">Indicații Maps</div>
        <div className="footer-column">Despre Noi</div>
        <div className="footer-column">Servicii & Prețuri</div>
        <div className="footer-column">Cariere</div>
      </div>
      <div className="footer-row">
        <div className="footer-column">Politică de confidențialitate</div>
        <div className="footer-column">Termeni și condiții</div>
      </div>
      <div className="footer-row">
        <div className="footer-column">Luni - Sâmbătă: 10:00 - 18:00</div>
        <div className="footer-column-holiday">
          <div className="footer-column">Duminică:</div>
          <div className="footer-column-close">Închis</div>
        </div>
        <div className="footer-column-tel">
          Tel: <a href="tel:0787222302">0787222302</a>
        </div>
        <div className="footer-column-social">
          Social:
          <div className="footer-column-fb">
            <img src={fb} alt="" />
          </div>
          <div className="footer-column-ig">
            <img src={ig} alt="" />
          </div>
          <div className="footer-column-ig">
            <img src={ig} alt="" />
          </div>
          <div className="footer-column-ig">
            <img src={ig} alt="" />
          </div>
          <div className="footer-column-ig">
            <img src={ig} alt="" />
          </div>
          <div className="footer-column-ig">
            <img src={ig} alt="" />
          </div>
          <div className="footer-column-ig">
            <img src={ig} alt="" />
          </div>
          <div className="footer-column-ig">
            <img src={ig} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer