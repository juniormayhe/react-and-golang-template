import React from "react";
import { NavLink } from "react-router-dom";
import "./NavComponent.css";

function openNav() {
  document.getElementById("sidenav").style.width = "250px";
};

const closeNav = () => {
  document.getElementById("sidenav").style.width = "0";
};

const NavComponent = () => {
  const activeStyle = { color: "limegreen", textDecoration: "underline" };

    
  return (
    <nav>
      <span className="toggle" onClick={openNav} title="Open menu">
        &#9776;
      </span>
      <div id="sidenav" className="sidenav">
        <NavLink to="#" className="closeNav" onClick={closeNav}>
          &times;
        </NavLink>
        <NavLink to="/" activeStyle={activeStyle} exact>
          Home
        </NavLink>
        {" | "}
        <NavLink to="/about" activeStyle={activeStyle}>
          About
        </NavLink>
        {" | "}
        <NavLink to="/portfolio" activeStyle={activeStyle}>
          Portfolio
        </NavLink>

        {" | "}
        <NavLink to="/contact" activeStyle={activeStyle}>
          Contact
        </NavLink>
      </div>
    </nav>
  );
};

export default NavComponent;