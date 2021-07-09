import React from "react";

/* STATELESS CHILD COMPONENT */
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
