//this file is the parent to SubmitButton.js and is called by App.js
import { html } from "https://unpkg.com/htm/preact/standalone.module.js";
import SubmitButton from "./SubmitButton.js";

export function SubmitAlert() {
  function clickAlert() {
    alert("Submitted!");
  }
  return html`
    <div class="App">
      <${SubmitButton} data="Submit List" onChildClick="${clickAlert}" />
    </div>
  `;
}
