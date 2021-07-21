import React from "react";

const ReviewBox2 = ({ onChange, onClick }) => {
  return (
    <div>
      <textarea text="test" onChange={onChange} />
      <button type="submit" onClick={onClick}>
        Submit
      </button>
    </div>
  );
};

export default ReviewBox2;
