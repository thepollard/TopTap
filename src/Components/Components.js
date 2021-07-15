import Header from "./Header/Header.js";
import Home from "./Home/Home.js";
import ProtectedBeers from "./Survey/ProtectedBeers.js";
import Survey from "./Survey/Survey.js"
import AuthRegister from "./Auth/AuthRegister.js"
import UserLogIn from "./Auth/AuthLogin.js"
import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function Components() {

  return (
    <Router>
        <Route path="/" component={Header} />
        <Route path="/" exact component={Home} />
        <Route path="/ProtectedBeers" exact component={ProtectedBeers} />
        <Route path="/Survey" exact component={Survey} />
        <Route path="/Login" exact component={UserLogIn} />
        <Route path="/Register" exact component={AuthRegister} />
    </Router>
  );
}
