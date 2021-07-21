//this file is the parent to SubmitButton.js and is called by Survey.js

import '../Survey/survey.css';
import BeerMail from "../Email/BeerMail"

export default function SubmitAlert() {
  function clickAlert() {
    alert("Submitted!");
  }
  return (
    <div className="submit">
      <button onClick={clickAlert}><BeerMail label="Send Beer List" mailto="mailto:no-reply@example.com" /></button>
    </div>
  );
}
