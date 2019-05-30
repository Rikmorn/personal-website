import * as React from "react";
import { Route } from "react-router";
import { NavLink, BrowserRouter as Router } from "react-router-dom";

import { IntroductionPage } from "./introduction";
import { WorkPage } from "./work";

import "./menu.css";

export const Menu: React.FunctionComponent = () => {
  return (
    <div className="menu">
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
      <div>
        <NavLink to="/about">About</NavLink>
      </div>
      <div>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  );
};
