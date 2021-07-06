import React from "react";
import ReactDOM from "react-dom"
import { StrictMode } from "react";
import { Header } from "./Components/Header.js";
import { EmailShare } from "./Components/EmailShare.js";
import { SubmitAlert } from "./Components/SubmitAlert.js";
import { BeerListItem } from "./Components/BeerListItem.js";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
 <Header />
  <EmailShare />
  <SubmitAlert />
  <BeerListItem />
  </StrictMode>,
  rootElement
);

