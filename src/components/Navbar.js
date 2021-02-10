import React from "react";
import { Link } from "react-router-dom";

import logo_white from "./assets/Golden_Times_test.png";
import Menu from "./Menu";
import "./Navbar.scss";

function Navbar({ isDrawerOpen, openDrawer }) {
  return (
    <div className="navbar">
      <div className="navbar-menu">
        <Menu openDrawer={openDrawer} isDrawerOpen={isDrawerOpen} />
      </div>
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo_white} alt="" />
        </Link>
      </div>
    </div>
  );
}
export default Navbar;