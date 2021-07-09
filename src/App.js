import React from "react";
import Components from "./Components/Components.js";
import * as Env from "./environments";
import Parse from "parse";

// The following initializes the Back4App Parse connection
Parse.initialize(Env.APPLICATION_ID, Env.JAVASCRIPT_KEY);
Parse.serverURL = Env.SERVER_URL;

// Exporting our App.js for use in index.js
export default function App() {
  return <Components />;
}