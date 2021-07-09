import React from "react";
import CustomBeersList from "./CustomBeersList.js";

/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const CustomBeers = () => {
  return (
    <div>
      <h2>Enter your own favorite brews:</h2>
      <CustomBeersList />
    </div>
  );
};

export default CustomBeers;
