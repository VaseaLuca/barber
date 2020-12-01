import React,{ useState } from 'react'

import './Menu.scss';

function Menu({ isMenuOpen }) {
  const [menuIsClicked, setMenuIsClicked] = useState(false);

function triggerMenu() {
    setMenuIsClicked(!menuIsClicked);
    isMenuOpen();
}
  console.log(menuIsClicked);

  return (
    <div className="menu" onClick={triggerMenu}>
      <div className={`menu-stick ${menuIsClicked && `trigger`}`}></div>
    </div>
  );
}

export default Menu
