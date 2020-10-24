import React from "react";
import { Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import "./App.css";

import Homepage from "./pages/Homepage/homepage.page";
import LoginPage from "./pages/Login/login.page";
import RegisterPage from "./pages/Register/register.page";

function App() {
  return (
    <Container maxWidth="sm" className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
      </Switch>
    </Container>
  );
}

export default App;
