import React from "react";
import "./App.css";
import SignUp from "./SignUp";
import LoginUi from "./LoginUi";
import Banner from "./Banner";
import Feed from "./Feed";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar />
        <Feed />
        <Banner />
        <Switch>
          <Route exact path="/LoginUi">
            <LoginUi />
          </Route>
          <Route path="/SignUp">
            <SignUp />
            </Route> 
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
