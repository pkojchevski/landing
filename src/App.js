import React from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ViewPost from './components/ViewPost/ViewPost'

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={LandingPage} />
        {/* <Redirect to="/" /> */}
        <Route path="/post" component={ViewPost} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
