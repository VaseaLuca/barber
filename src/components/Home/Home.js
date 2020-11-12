import React from 'react';

import Greetings from './Greetings';
import About from './About';
import Career from './About';
import ServicePrice from './Service_Price';

import about_img from "../assets/Octavian&Madalina.jpg";
import career_img from "../assets/career_photo.jpg";
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Greetings />
      <About
        title={"Despre Noi"}
        info={"Armonia perfectă între BarberShop & Coafor"}
        img={about_img}
      />
      <ServicePrice />
      <Career
        title={"Cariere"}
        info={"Verifică dacă sunt poziții deschise în echipa noastră"}
        img={career_img}
      />
    </div>
  );
}
export default Home;