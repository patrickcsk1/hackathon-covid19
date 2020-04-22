import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route path="/main" component={Dashboard}></Route>
        </Switch>
      </div>
    </Router>
  );
}
