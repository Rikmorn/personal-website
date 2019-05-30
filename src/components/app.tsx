import * as React from "react";
import { BrowserRouter } from "react-router-dom";

import { Menu } from "./menu";
import { Content } from "./content";
import { Footer } from "./footer";

import "./app.css";

export const App: React.FunctionComponent = () => (
  <BrowserRouter>
    <div className="red">
      <Menu />
      <Content />
      <Footer />
    </div>
  </BrowserRouter>
);
