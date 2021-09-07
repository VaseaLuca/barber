import React from "react";
import { Link } from "react-router-dom";

import fb from "../assets/facebook_logo_white.png";
import ig from "../assets/instagram_logo_white.png";
import "./Footer.scss";

const Footer = () => {
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const updateOnceAminute = setInterval(() => setDate(new Date()), 60000);
    return () => {
      clearInterval(updateOnceAminute);
    };
  }, [date]);

  const checkHour = React.useMemo(
    () => {
    if (date.getDay() >= 2 && date.getHours() >= 10 && date.getHours() < 18) {
      return <div className="footer-green-circle" />;
    } 
      return <div className="footer-red-circle" />;

  }, [date]);

  return (
    <div className="footer">
      <div className="footer-row">
        <div className="footer-column">
          <Link to="/maps"> Indicații Maps </Link>
        </div>
        <div className="footer-column">
          <Link to="/despre"> Despre Noi </Link>
        </div>
        <div className="footer-column">
          <Link to="/lista-de-preturi"> Servicii & Prețuri </Link>
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-column">
          <Link to="/politica-de-confidentialitate">
            Politică de confidențialitate
          </Link>
        </div>
        <div className="footer-column">
          <Link to="/termeni-si-conditii"> Termeni și condiții </Link>
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-column-holiday"></div>
        <div className="footer-column-none">
          Marți - Sâmbătă: 10:00 - 18:00
          {checkHour}
        </div>
        <div className="footer-column-holiday">
          <div className="footer-column-none">Duminică - Luni : </div>
          <div className="footer-column-close">Închis</div>
        </div>
        <div className="footer-column-tel">
          Tel: <a href="tel:0787222302">0787222302</a>
        </div>
        <div className="footer-column-social">
          Social:
          <div className="footer-column-fb">
            <a href="https://www.facebook.com/goldentimes.oficial/">
              <img src={fb} alt="" />
            </a>
          </div>
          <div className="footer-column-ig">
            <a href="https://www.instagram.com/goldentimes.oficial/">
              <img src={ig} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
