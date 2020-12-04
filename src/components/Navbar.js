import React from 'react'
import { Link } from 'react-router-dom';

import logo from './assets/new_Logo.png';
import logo_addon from './assets/logo_addon.png';
import Menu from './Menu';
import './Navbar.scss';


function Navbar({ isDrawerOpen,openDrawer }) {
  return (
    <div className="navbar">
      <div className="navbar-menu">
        <Menu openDrawer={openDrawer} isDrawerOpen={isDrawerOpen} />
      </div>
      <div className="navbar-block">
        <div className="navbar-logo">
         <Link to='/' > <img src={logo} alt="" /> </Link>
        </div>
        <div className="navbar-logo-addon">
          <img src={logo_addon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Navbar
