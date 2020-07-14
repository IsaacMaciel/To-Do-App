import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

import Todo from "./todo/Todo";
import About from "./about/About";

export default (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/todos" component={Todo} />
        <Route path="/about" component={About} />
        <Redirect from="*" to="/todos" />
      </Switch>
    </Router>
  );
};
