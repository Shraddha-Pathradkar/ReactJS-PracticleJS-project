import "./App.css";
import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import HomePage from "./Components/HomePage";
import LoginPage from "./Components/Authentication/Login";

const App = () => {
  let routes = (
    <Switch>
      <Route path="/login" exact>
        <LoginPage />
      </Route>
      <Route path="/home" exact>
        <HomePage />
      </Route>
      <Redirect to="/home" />
    </Switch>
  );

  return <Router>{routes}</Router>;
};

export default App;
