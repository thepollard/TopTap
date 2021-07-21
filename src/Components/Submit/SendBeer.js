//this file is the parent to SubmitButton.js and is called by Survey.js

import '../Survey/survey.css';
import BeerMail from "../Email/BeerMail"
import CustomBeersList from "../CustomBeers/CustomBeersList";

const SendBeer = () => {
  return (
    <BeerMail label="Send your BEER!" mailto="mailto:no-reply@example.com" target="_blank" />
  )
  }

  export default SendBeer;

  // const SubmitAlert = ({ mailto }) => {
//   return (
    
//       <button
//           to='#'
//           onClick={(e) => {
//               window.location = mailto;
//               e.preventDefault();
//           }}
//       >
//           Send your BEER!
//       </button>
//   );
// }

// export default SubmitAlert;