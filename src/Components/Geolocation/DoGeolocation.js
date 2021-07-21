import React from "react";
import { GetCoords } from "./GetCoords.js";

const DoGeolocation = () => {
  return (
    <div>
      <button type="submit" onClick={GetCoords}>
        Share Location
      </button>
    </div>
  );
};

export default DoGeolocation;