import React from "react";

const EmailShare = props => {
  return (
    <div>
      <input
        type="text"
        value={props.value}
        onChange={event => console.log("value changed!")}
      />
    </div>
  );
};

export default EmailShare;