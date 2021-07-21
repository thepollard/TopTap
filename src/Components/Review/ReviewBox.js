import React from "react";

const ReviewBox = ({ onChange, onClick }) => {
  return (
    <div>
      <textarea text="test" onChange={onChange} />
      <button type="submit" onClick={onClick}>
        Submit
      </button>
    </div>
  );
};

export default ReviewBox;
