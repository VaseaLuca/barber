import React from 'react'

import Footer from './Home/Footer';
import career_photo from "./assets/career_photo.jpg";
import './Careers.scss';

function Careers() {
  return (
    <div className='career'>
      <div className="career-header">
        Careers
      </div>
      <div className="career-block">
        <div className='career-description'>
          Momentan nu este deschisă nici o poziție.
          Urmărește-ne pe instagram sau facebook pentru update.
        </div>
        <div className='career-img'><img src={career_photo} alt=""/></div>
      </div>
      <Footer />
    </div>
  )
}

export default Careers;
