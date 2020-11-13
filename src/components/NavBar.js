import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar u-margin-bottom-small">
      <NavLink to="/" exact className="navbar__btn">Home</NavLink>
      <NavLink to="/messages" exact className="navbar__btn">Messages</NavLink>
      <NavLink to="/fanart" exact className="navbar__btn">Fan Art</NavLink>
    </div>
  );
};

export default NavBar;

