import React, { Suspense } from 'react';

// import Greetings from './Greetings';
// import About from './About';
// import Career from './About';
// import ServicePrice from './Service_Price';
// import Footer from './Footer';
import about_img from "../assets/Octavian&Madalina.jpg";
import career_img from "../assets/career_photo.jpg";
import './Home.scss';
const Greetings = React.lazy(() => import("./Greetings"));
const About = React.lazy(() => import('./About'));
const Career = React.lazy(() => import('./About'));
const ServicePrice = React.lazy(() => import('./Service_Price'));
const Footer = React.lazy(() => import('./Footer'));

function Home() {
  return (
    <div className="home">
      <Suspense fallback={ <div className='home-fallback'>Loading...</div> }>
        <Greetings />
      <About
        title={"Despre Noi"}
        info={"Armonia perfectă între BarberShop & Coafor"}
        img={about_img}
        directory={"/despre"}
      />
      <ServicePrice />
      <Career
        title={"Cariere"}
        info={"Verifică dacă sunt poziții deschise în echipa noastră"}
        img={career_img}
        directory={"/cariere"}
      />
      <Footer />
      </Suspense>
    </div>
  );
}
export default Home;