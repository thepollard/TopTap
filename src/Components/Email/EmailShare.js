// Eventually this should all for the user to send an email with their list of favorite beers.

import React from "react";

const EmailShare = props => {
  return (
    <div>
      <br />
      <h3>Enter an email to share your list with:</h3>
      <input
        type="text"
        value={props.value}
        onChange={event => console.log("value changed!")}
      />
    </div>
  );
};

export default EmailShare;