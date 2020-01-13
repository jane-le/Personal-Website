import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./landing";
import About from "./about";
import Projects from "./projects";
import Resume from "./resume";
import Contact from "./contact";

const Main = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/aboutme" component={About} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/contact" component={Contact} />
  </Switch>
);
export default Main;
