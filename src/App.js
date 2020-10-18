import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/homepage.page";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
