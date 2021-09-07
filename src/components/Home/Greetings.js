import React from "react";
import { Link } from "react-router-dom";

import home_background from "../assets/home_background.jpg";
import location_pin from "../assets/location.png";
import location_pin_white from "../assets/location_white.png";
import "./Greetings.scss";

const Gritings = () => {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div className="greetings">
      <div className="greetings-background">
        <img src={home_background} alt="home_background" />
      </div>
      <div className="greetings-hello">Bună!</div>
      <div className="greetings-underline-text">
        Fii în siguranță și arată minunat!
      </div>
      <div className="greetings-text">
        Vezi ce spun clienții noștri despre noi și programează o vizită. Găsește
        salonul pe hartă
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

        <a
          href="https://stailer.ro/widget/golden-times"
          rel="noreferrer"
          target="_blank"
        >
          <div className="greetings-button-red">Programează-te Online</div>
        </a>
      </div>
    </div>
  );
}
export default Gritings;
