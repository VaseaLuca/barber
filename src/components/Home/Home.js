import React, { Suspense } from "react";

import about_img from "../assets/Octavian&Madalina.jpg";
import "./Home.scss";
const Greetings = React.lazy(() => import("./Greetings"));
const About = React.lazy(() => import("./About"));
const ServicePrice = React.lazy(() => import("./Service_Price"));
const Footer = React.lazy(() => import("./Footer"));

const Home = () => (
    <div className="home">
      <Suspense fallback={<div className="home-fallback">Loading...</div>}>
        <Greetings />

        <About
          title={"Despre Noi"}
          info={"Armonia perfectă între BarberShop & Coafor"}
          img={about_img}
          directory={"/despre"}
        />

        <ServicePrice />
        
        <Footer />
      </Suspense>
    </div>
  );

export default Home;
