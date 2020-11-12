import React from 'react'

import logo from './assets/new_Logo.png';
import logo_addon from './assets/logo_addon.png';
import Menu from './Menu';
import './Navbar.css';


function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-menu">
        <Menu />
      </div>
      <div className='navbar-block'>
        <div className="navbar-logo">
          <img src={logo} alt="" />
        </div>
        <div className="navbar-logo-addon">
          <img src={logo_addon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar
