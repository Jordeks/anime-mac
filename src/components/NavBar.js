import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact className="nav-btn">Home</NavLink>
      <NavLink to="/messages" exact className="nav-btn">Messages</NavLink>
      <NavLink to="/fanart" exact className="nav-btn">Fan Art</NavLink>
    </div>
  );
};

export default NavBar;

