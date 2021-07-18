import ProtectedBeers from "./ProtectedBeers";
import ProtectedRoute from "../../Common/AppTools/ProtectedRoute";
import React, { useState } from "react";

// Survey is maybe the wrong term for this module, maybe change this in future.
export default function Survey() {
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