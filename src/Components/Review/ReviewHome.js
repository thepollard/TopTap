import React from "react";
import ReviewList from "./ReviewList.js"

//Header for review box and sets up ReviewList.js
const ReviewHome = () => {
  return (
    <div>
      <br />
      <h1>Leave a review for your favorite beer:</h1>
      <ReviewList />
    </div>
  );
};

export default ReviewHome;
