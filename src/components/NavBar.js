import React from 'react'
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact className="nav-btn">Home</NavLink>
      <NavLink to="/messages" exact className="nav-btn">Messages</NavLink>
    </div>
  );
};

export default NavBar;

