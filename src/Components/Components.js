import Header from "./Header/Header.js";
import EmailShare from "./Email/EmailShare.js";
import SubmitAlert from "./Submit/SubmitAlert.js";
import BeerListItem from "./BeerList/BeerListItem.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function Components() {
  return (
    <Router>
      <div>
        <Route path="/" component={Header} />
        <form>
          <Route path="/" component={BeerListItem} />
          <Route path="/" component={EmailShare} />
          <Route path="/" component={SubmitAlert} />
        </form>
      </div>
    </Router>
  );
}
