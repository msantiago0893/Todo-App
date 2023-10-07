import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <Link to="/"> Home </Link>
      <Link to="/about"> About </Link>
      <Link to="/login"> Login </Link>

      <NavLink
        className={ ({isActive}) => `nav-link ${isActive ? 'active': ''} `}
        to="/about"
      >
        About
      </NavLink>
    </>
  )
}
