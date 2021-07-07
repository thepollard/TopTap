import Header from "./Header/Header.js";
import EmailShare from "./Email/EmailTest.js";
import SubmitAlert from "./Submit/SubmitAlert.js";
// import BeerListItem from "./BeerList/BeerListItem.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function Components() {
  // return (
  //   <div>
  //     <Home />
  //     <About />
  //   </div>
  // );
  return (
    <Router>
      <div>
        <Route path="/" component={Header} />
        <Route path="/" component={EmailShare} />
        <Route path="/" component={SubmitAlert} />
      </div>
    </Router>
  );
}
