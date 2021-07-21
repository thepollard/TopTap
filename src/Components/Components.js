import Header from "./Header/Header.js";
import Home from "./Home/Home.js";
import Bouncer from "./Survey/Bouncer.js";
import ProtectedBeers from "./Survey/ProtectedBeers.js";
import About from "./About/About.js";
import UserLogIn from "./Auth/AuthLogin.js";
import AuthRegister from "./Auth/AuthRegister.js";
import UserLogOut from "./Auth/AuthLogout.js";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function Components() {
  
  return (
    <Router>
      <Route path="/" component={Header} />
      <Route path="/" exact component={Home} />
      <Route path="/ProtectedBeers" exact component={ProtectedBeers} />
      <Route path="/Bouncer" exact component={Bouncer} />
      <Route path="/About" exact component={About} />
      <Route path="/Login" exact component={UserLogIn} />
      <Route path="/Register" exact component={AuthRegister} />
      <Route path="/Logout" exact component={UserLogOut} />
    </Router>
  );
}
