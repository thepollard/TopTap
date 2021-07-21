import React from "react";
import { Link } from "react-router-dom";


const BeerMail = ({ mailto, label }) => {
    return (
        <div>
        <br />
      <h3>Enter an email to share your list with:</h3>
      <input id="beerMail" name="beerMail"
        type="email"/>
        <button>
        <Link
            to='#'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link></button>
        </div>
    );
};


  export default BeerMail;