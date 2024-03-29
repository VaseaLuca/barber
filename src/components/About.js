import React from "react";
import AboutCard from "./AboutCard";
import Footer from "./Home/Footer";
import his_photo from "./assets/Octavian.jpg";
import her_photo from "./assets/Madalina.jpg";
import "./About.scss";

const About = () => (
  <div className="description">
    <div className="description-text">Despre Noi</div>

    <AboutCard
      header="Salut!"
      description="Sunt Octavian și îmi folosesc vasta experiență de peste 5 ani în
            colaborarea cu clienții având în minte un scop clar: să ajut
            oamenii să se simtă bine cu parul lor și cu ei inșisi. Sunt
            un bun ascultător. În egală masură, ofer sugestii și idei în
            funcție de nevoile individuale, sunt dornic să arăt clienților cum să
            își pună în valoare calitățile și să-și ascundă micile defecte.
            Răsplata mea este satisfacția fiecărei persoane care întră în salon,
            nu ca și client ci ca și partener și, în timp, prieten."
      img={his_photo}
    />

    <AboutCard
      header="Bună!"
      description="Sunt Mădălina și îmi folosesc vasta experiență de peste 10 ani în
            colaborarea cu clienții având în minte un scop clar: să ajut
            oamenii să se simtă bine cu parul lor și cu ei inșisi. Sunt o
            bună ascultătoare. În egală masură, ofer sugestii și idei în
            funcție de nevoile individuale, sunt dornică să arăt clienților cum să
            iși pună în valoare calitățile și să-și ascundă micile defecte.
            Răsplata mea este satisfacția fiecărei persoane care intră în salon,
            nu ca și client ci ca și partener și, în timp, prieten."
      img={her_photo}
      isReversed
    />
    <div className="redirect-block">
      <div className="redirect-header">Dacă ți-am câștigat încrederea</div>

      <div className="redirect-content">Nu ezita să faci o programare</div>

      <div className="redirect-button-block">
        <a rel="noreferrer" href="tel:0787222302">
          <div className="redirect-button-red">Suna</div>
        </a>

        <a
          href="https://rezervio.ro/locations/69/golden-times-salon"
          rel="noreferrer"
          target="_blank"
        >
          <div className="redirect-button-red">Programează-te Online</div>
        </a>
      </div>

      <div className="redirect-description">De restul ne ocupăm noi</div>
    </div>

    <Footer />
  </div>
);
export default About;
