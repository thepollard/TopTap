import React from "react";
import CustomBeersList from "./CustomBeersList.js";

/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const CustomBeers = () => {
  return (
    <div>
      <br />
      <h3>Enter your own favorite brews:</h3>
      <CustomBeersList />
    </div>
  );
};

export default CustomBeers;
