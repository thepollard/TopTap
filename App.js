import {
  html,
  render
} from "https://unpkg.com/htm/preact/standalone.module.js";
import { Header } from "./Components/Header.js";
import { EmailShare } from "./Components/EmailShare.js";
import { SubmitAlert } from "./Components/SubmitAlert.js";
import { BeerListItem } from "./Components/BeerListItem.js";

function App() {
  return html`
  <${Header} title="TopTap">
    Select your favorite beers
  </${Header}>
  <form>
    <!-- Creates checklist of beers from BeerListItem.js -->  
    <${BeerListItem} />
    <!-- Creates email text field from EmailShare.js -->
    <${EmailShare} />
    <!-- Creates submit button and confirmation dialogue from SubmitAlert.js -->
    <${SubmitAlert} />
  </form>
  `;
}

render(html` <${App} /> `, document.getElementById("app"));
