import EmailShare from "../Email/EmailShare.js";
import SubmitAlert from "../Submit/SubmitAlert.js";
import CustomBeers from "../CustomBeers/CustomBeers.js"
import BeerListItem from "../BeerList/BeerListItem.js";
import React from "react";

// Survey is maybe the wrong term for this module, maybe change this in future.
export default function Bouncer() {
    // console.log("asdfa"+props.flag);
    const [flag, setFlag] = useState(false);
    var isValid = localStorage.getItem("auth");
    if (isValid !== null) {
      console.log("component"+isValid);
    }
    
    return ( 
    <div>
        <ProtectedRoute 
            exact
            path="/ProtectedBeers"
            flag={isValid}
            component={ProtectedBeers}
        />
      </div>
    );
  }