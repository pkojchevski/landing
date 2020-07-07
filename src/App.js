import React from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
