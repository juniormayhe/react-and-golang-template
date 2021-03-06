import React from "react";
import { NavLink } from "react-router-dom";

const NavLinksComponent = () => {
  const activeStyle = { color: "limegreen", textDecoration: "underline" };
  return (
    <div>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
      
      <NavLink to="/portfolio" activeStyle={activeStyle}>
        Portfolio
      </NavLink>
      
      <NavLink to="/contact" activeStyle={activeStyle}>
        Contact
      </NavLink>
    </div>
  );
};

export default NavLinksComponent;