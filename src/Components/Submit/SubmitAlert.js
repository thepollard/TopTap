//this file is the parent to SubmitButton.js and is called by App.js
// import SubmitButton from "./Submit/SubmitButton/SubmitButton.js";

export default function SubmitAlert() {
  function clickAlert() {
    alert("Submitted!");
  }
  return (
    <div>
    <button onClick={clickAlert}>Submit</button>
    </div>
  );
}
