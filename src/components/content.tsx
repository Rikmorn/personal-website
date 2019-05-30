import * as React from "react";

import { Route } from "react-router";
import { Switch } from "react-router-dom";
import { WorkPage } from "./work";
import { Contact } from "./contact";
import { IntroductionPage } from "./introduction";

import "./content.css";

// menu
// footer
// area for children
export const Content: React.FunctionComponent = () => (
  <div className="content">
    <Switch>
      <Route exact path="/" component={IntroductionPage} />
      <Route path="/about" component={WorkPage} />
      <Route path="/contact" component={Contact} />
      <Route component={IntroductionPage} />
    </Switch>
  </div>
);
