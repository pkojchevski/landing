import React from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ViewPost from './components/ViewPost/ViewPost'
import Cultural from './components/cultural/Cultural'
import Social from './components/social/Social'
import Environment from './components/environment/Environment'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/post" component={ViewPost} />
        <Route path="/cultural" component={Cultural} />
        <Route path="/social" component={Social} />
        <Route path="/environment" component={Environment} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
