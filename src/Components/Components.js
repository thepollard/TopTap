import Header from "./Header/Header.js";
import Home from "./Home/Home.js";
import Survey from "./Survey/Survey.js"
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function Components() {
  return (
    <Router>
      <div>
        <Route path="/" component={Header} />
        <Route path="/" exact component={Home} />
        <Route path="/Survey" exact component={Survey} />
      </div>
    </Router>
  );
}
