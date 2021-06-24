import {
  html,
  useEffect
} from "https://unpkg.com/htm/preact/standalone.module.js";

export function Header({ title, children }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  // this will display an <h1> title and <p> child, before our beer list.
  return html`
    <header>
      <h1>${title}</h1>
      ${children}
    </header>
  `;
}
