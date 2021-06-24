//child component to SubmitButton.js

import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

export default function SubmitButton({ data, onChildClick }) {
  return html`
    <div class="child">
      <button onClick=${onChildClick}>${data}</button>
    </div>
  `;
}
