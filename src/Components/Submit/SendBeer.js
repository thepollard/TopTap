//this file is the parent to SubmitButton.js and is called by ProtectedBeers.js

import '../Survey/survey.css';
import BeerMail from "../Email/BeerMail";
import getAllBeers from "../Services/BottleService";



const SendBeer = () => {
  return (
    <BeerMail label="Send your BEER!" mailto="mailto:no-reply@example.com" target="_blank" />
  )
  }

  export default SendBeer;
