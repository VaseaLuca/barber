import React from "react";

import "./Backdrop.scss";

function Backdrop ({ open, close }) {
  return <div className={`${open && "backdrop"}`} onClick={close}></div>;
}
export default Backdrop;