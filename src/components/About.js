import React from 'react'


import AboutCard from './AboutCard';
import Footer from './Home/Footer';
import his_photo from "./assets/Octavian.jpeg";
import her_photo from "./assets/Madalina.jpeg";
import './About.scss';

function About() {
  return (
    <div className="description">
      <div className="description-text">Despre Noi</div>
      <AboutCard
        header="Salut!"
        description="Octavian își folosește vasta experiență de peste 10 ani în
            colaborarea cu clienții având în minte un scop clar: să ajute
            oamenii să se simtă bine cu parul lor și cu ei inșisi. Octavian este
            un bun ascultator. In egală masură, oferă sugestii si idei in
            funcție de nevoile individuale, dornic să arate clienților cum să
            iși pună în valoare calitățile și să ascundă micile defecte.
            Răsplata sa este satisfacția fiecărei persoane care intră în salon,
            nu ca și client ci ca si partener și, în timp, prieten."
        img={his_photo}
      />
      <AboutCard
        header="Bună!"
        description="Mădălina își folosește vasta experiență de peste 10 ani în
            colaborarea cu clienții având în minte un scop clar: să ajute
            oamenii să se simtă bine cu parul lor și cu ei inșisi. Mădălina este
            un bun ascultator. In egală masură, oferă sugestii si idei in
            funcție de nevoile individuale, dornic să arate clienților cum să
            iși pună în valoare calitățile și să ascundă micile defecte.
            Răsplata sa este satisfacția fiecărei persoane care intră în salon,
            nu ca și client ci ca si partener și, în timp, prieten."
        img={her_photo}
        isReversed
      />
      <div className="redirect-block">
        <div className="redirect-header">Dacă ți-am câștigat încrederea</div>
        <div className="redirect-content">Nu ezita să faci o programare</div>
        <div className="redirect-button-block">
          <a href="tel:0787222302">
            <div className="redirect-button">Suna</div>
          </a>
          <a href="https://agendamea.ro/s/vV9jL/golden-times?fbclid=IwAR197qgJrTewdjm4RXbLKJzUEXNoCI_wuEXSLDlB9aWoRAvDHGBQr0J-k1Y">
            <div className="redirect-button-red">Online</div>
          </a>
        </div>
        <div className="redirect-description">De restul ne ocupăm noi</div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
