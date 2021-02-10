import React from "react";

import "./Backdrop.scss";

const Backdrop = ({ open, close }) => {
  return <div className={`${open && "backdrop"}`} onClick={close}></div>;
}
export default Backdrop;