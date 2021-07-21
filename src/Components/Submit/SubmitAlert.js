//this file is the parent to SubmitButton.js and is called by Survey.js

import '../Survey/survey.css';

export default function SubmitAlert() {
  function clickAlert() {
    alert("Submitted!");
  }
  return (
    <div className="submit">
      <button onClick={clickAlert}>Submit</button>
    </div>
  );
}
