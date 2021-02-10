import React from "react";
import { Link } from "react-router-dom";

import "./Drawer.scss";

function Drawer ({ drawerIsOpen, close }) {
  return (
    <div className={`drawer ${drawerIsOpen && `open`}`}>
      <ul onClick={close}>
        <Link to="/maps">
          <li> Indicații Maps </li>
        </Link>
        <Link to="/despre">
          <li> Despre Noi </li>
        </Link>
        <Link to="/lista-de-preturi">
          <li> Servicii & Prețuri </li>
        </Link>
        <Link to="/politica-de-confidentialitate">
          <li> Politică de confidențialitate </li>
        </Link>
        <Link to="/termeni-si-conditii">
          <li> Termeni și condiții </li>
        </Link>
      </ul>
    </div>
  );
}
export default Drawer;