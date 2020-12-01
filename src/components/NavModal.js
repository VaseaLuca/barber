import React from 'react'
import { Link } from "react-router-dom";

import './NavModal.scss';

function NavModal({ onClick }) {
  return (
    <div className={`nav-modal ${onClick && `open`}`}>
      <div className="nav-modal-menu">
        <ul>
          <li><Link to='/maps'> Indicații Maps </Link></li>
          <li><Link to='/despre'> Despre Noi </Link></li>
          <li><Link to='/lista-de-preturi'> Servicii & Prețuri </Link></li>
          <li><Link to='/cariere'> Cariere </Link></li>
          <li><Link to='/politica-de-confidentialitate'> Politică de confidențialitate </Link></li>
          <li><Link to='/termeni-si-conditii'> Termeni și condiții </Link></li>
        </ul>
      </div>
    </div>
  );
}

export default NavModal;
