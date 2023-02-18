import React from "react";
import { Link } from "react-router-dom";

import fb from "../assets/facebook_logo_white.png";
import ig from "../assets/instagram_logo_white.png";
import sal from "../assets/anpc-sal.png";
import sol from "../assets/anpc-sol.png";
import "./Footer.scss";

const Footer = () => {
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const updateOnceAminute = setInterval(() => setDate(new Date()), 60000);

    return () => {
      clearInterval(updateOnceAminute);
    };
  }, [date]);

  const _checkHour = React.useCallback(
    (weekDay) => {
      switch (weekDay) {
        case weekDay === 1:
          if (date.getHours() >= 9 && date.getHours() < 15) {
            return <div className="footer-green-circle" />;
          }
          break;
        case [2, 3, 4, 5].includes(weekDay):
          if (date.getHours() >= 10 && date.getHours() < 18) {
            return <div className="footer-green-circle" />;
          }
          break;
        case weekDay === 6:
          if (date.getHours() >= 9 && date.getHours() < 14) {
            console.log(weekDay)
            return <div className="footer-green-circle" />;
          }
          break;
        default:
          <div className="footer-red-circle" />;
          break;
      }
      if (![1, 6, 7].includes(date.getDay()) && date.getHours() >= 10 && date.getHours() < 18) {
        return <div className="footer-green-circle" />;
      }
      return <div className="footer-red-circle" />;
    },
    [date]
  );

  return (
    <div className="footer">
      <div className="footer-row">
        <div className="footer-column">
          <Link to="/maps">Indicații Maps</Link>
        </div>

        <div className="footer-column">
          <Link to="/despre">Despre Noi</Link>
        </div>

        <div className="footer-column">
          <Link to="/lista-de-preturi">Servicii & Prețuri</Link>
        </div>
      </div>

      <div className="footer-row">
        <div className="footer-column">
          <Link to="/politica-de-confidentialitate">Politică de confidențialitate</Link>
        </div>

        <div className="footer-column">
          <Link to="/termeni-si-conditii">Termeni și condiții</Link>
        </div>
      </div>

      <div className="footer-row">
        <div className="footer-column-holiday"></div>
        <div className="footer-column-none">
          Luni: 10:00 - 15:00
          {_checkHour(date.getDay())}
        </div>

        <div className="footer-column-none">
          Marți - Vineri: 9:00 - 18:00
          {_checkHour(date.getDay())}
        </div>

        <div className="footer-column-none">
          Sâmbătă: 9:00 - 14:00
          {_checkHour(date.getDay())}
        </div>

        <div className="footer-column-holiday">
          <div className="footer-column-none">Duminică: </div>

          <div className="footer-column-close">Închis</div>
        </div>

        <div className="footer-column-tel">
          Tel: <a href="tel:0787222302">0787222302</a>
        </div>

        <div className="footer-column-social">
          Social:
          <div className="footer-column-fb">
            <a href="https://www.facebook.com/goldentimes.oficial/">
              <img src={fb} alt="facebook-logo" />
            </a>
          </div>
          <div className="footer-column-ig">
            <a href="https://www.instagram.com/goldentimes_salon/">
              <img src={ig} alt="instagram-logo" />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-row">
        <div className="footer-column-anpc">
          <p>ANPC:</p>
          <a target="_blank" rel="noreferrer" href="https://anpc.ro/ce-este-sal/">
            <img src={sal} alt="sal" />
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            target="_blank"
            rel="noreferrer"
            href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=RO"
          >
            <img src={sol} alt="sol" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
