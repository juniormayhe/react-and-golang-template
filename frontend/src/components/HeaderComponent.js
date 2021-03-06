import React from "react";
import logo from "./logo.svg";
import "./HeaderComponent.css";
import NavComponent from "./NavComponent";

const HeaderComponent = () => (
  <header className="app-header">
    <NavComponent />
    <img src={logo} className="app-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
  </header>
);

export default HeaderComponent;