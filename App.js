import {
    html,
    render
  } from "https://unpkg.com/htm/preact/standalone.module.js";

  const axios = window.axios;

  function App() {
      //Log axios messages to console
    console.log(axios);

    const items = ["1", "2"];
    return html`
    <${Header} title="TopTap">
        your home for a unique social beer experience
    </${Header}>
      
      <form>
        <input text="test" />
        <button>Submit</button>
      </form>
    `;
  }
  
  render(html` <${App} /> `, document.getElementById("app"));