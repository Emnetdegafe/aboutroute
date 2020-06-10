import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import {Navbar} from "react-bootstrap"

export default function Navigation() {
  return (
    <Navbar>
      <NavLink className="NavLink" to="/discover">
        Discover
      </NavLink>
      <NavLink className="NavLink" to="/about">
        About
      </NavLink>
      <NavLink className="NavLink" exact to="/">
        Home
      </NavLink>
    </Navbar>
  );
}
