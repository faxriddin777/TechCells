import React from 'react'
import '../App.css';
import Logo from "../assete/logo/logo-techcells.svg";

const Nav = () => {
  return (
    <div className="Navbar">
      <a href='/'>⬅ Home</a>
      <img src={Logo} alt="Logo" />
    </div>
  );
}

export default Nav