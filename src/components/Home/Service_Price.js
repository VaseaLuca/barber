import React from 'react'

import hair_Mada_1 from "../assets/hair_Mada_1.jpeg";
import hair_Mada_2 from "../assets/hair_Mada_2.jpeg";
import hair_Octav_1 from '../assets/hair_Octav_1.jpeg';
import hair_Octav_2 from '../assets/hair_Octav_2.jpeg';
import './Service_Price.scss';

function Service_Price() {
  return (
    <div className="service-price">
      <div className="service-price-img-block">
        <div className="service-price-img">
          <img src={hair_Mada_1} alt="" />
          <img src={hair_Octav_1} alt="" />
        </div>
        <div className="service-price-img">
          <img src={hair_Octav_2} alt="" />
          <img src={hair_Mada_2} alt="" />
        </div>
      </div>
      <div className="service-price-text-block">
        <div className="service-price-title">Servicii & Prețuri</div>
        <div className="service-stick">|</div>
        <div className="service-price-description">
          Oferim tratamente de păr, tuns și styling și vă punem la dispoziție un
          serviciu complet de coafură.
        </div>
        <div className="service-stick">|</div>
        <div className="service-price-description">
          Vei fi cu siguranță încântat de îndemânarea noastră. De la stilul
          clasic și până la variantele moderne, echipa noastră este pregătită să
          se adapteze dorințelor tale în materie de hairstyling.
        </div>
        <div className="service-stick">|</div>
        <div className="service-price-description">
          Fiindcă ne dorim să te vedem bine și să arăți bine, în salonul nostru,
          vă punem la dispoziție diverse tratamente estetice: make-up, pensat,
          etc.
        </div>
        <div className="service-stick">|</div>
        <div className="service-button">Vezi Prețuri</div>
      </div>
    </div>
  );
}

export default Service_Price;
