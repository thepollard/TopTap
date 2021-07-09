//this file is the parent to SubmitButton.js and is called by Survey.js

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
