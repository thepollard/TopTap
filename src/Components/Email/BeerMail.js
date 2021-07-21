import React from "react";
import { Link } from "react-router-dom";

const BeerMail = ({ mailto, label }) => {
    return (
        <button>
        <Link
            to='#'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
        >Submit
            {label}
        </Link></button>
    );
};


  export default BeerMail;