import Header from "./Header/Header.js";
import Home from "./Home/Home.js";
import Survey from "./Survey/Survey.js"
import AuthRegister from "./Auth/AuthRegister.js"
// import AuthLogin from "./Auth/AuthLogin.js"
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function Components() {
  return (
    <Router>
      <switch>
        <Route path="/" component={Header} />
        <Route path="/" exact component={Home} />
        <Route path="/Survey" exact component={Survey} />
        {/* <Route path="/Login" exact component={AuthLogin} /> */}
        <Route path="/Register" exact component={AuthRegister} />
      </switch>
    </Router>
  );
}
