import React from "react";

import "./Menu.scss";

const Menu = ({ openDrawer, isDrawerOpen }) => (
  <div className="menu-net">
    <div className="menu" onClick={openDrawer}>
      <div className={`menu-stick ${isDrawerOpen ? "trigger" : ""}`}></div>
    </div>
  </div>
);
export default Menu;
