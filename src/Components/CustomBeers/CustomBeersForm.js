// Text box and submit button for adding your favorite beer.
import React from "react";

const CustomBeersForm = ({ onChange, onClick }) => {
  return (
    <div>
      <form>
        <input text="test" onChange={onChange} />
        <button type="submit" onClick={onClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CustomBeersForm;
