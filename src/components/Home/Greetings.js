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
      </div>

      <div class="programari">
        <h3>Programari Online</h3>
        <div class="staff-block">
          <div class="group">
            <div class="staff-item">
              <p>Octavian: Frizer</p>
              <a
                href="https://rezervio.ro/locations/69/golden-times-salon"
                rel="noreferrer"
                target="_blank"
              >
                <div class="greetings-button-red">Programeză-te</div>
              </a>
            </div>
            <div class="staff-item">
              <p>Dana Maria: Frizer</p>
              <a
                href="https://rezervio.ro/locations/69/golden-times-salon"
                rel="noreferrer"
                target="_blank"
              >
                <div class="greetings-button-red">Programeză-te</div>
              </a>
            </div>
          </div>
          <div class="group">
            <div class="staff-item">
              <p>Mădălina: Coafor</p>
              <a
                href="https://rezervio.ro/locations/69/golden-times-salon"
                rel="noreferrer noopener"
                target="_blank"
              >
                <div class="greetings-button-red">Programeză-te</div>
              </a>
            </div>
            <div class="staff-item">
              <p>Roxana: Mani - Pedi</p>
              <a
                href="https://rezervio.ro/locations/69/golden-times-salon"
                rel="noreferrer"
                target="_blank"
              >
                <div class="greetings-button-red">Programeză-te</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Gritings;
