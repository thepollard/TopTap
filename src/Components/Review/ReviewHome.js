// List of your favorite beers.
import React from "react";
import ReviewList from "./ReviewList.js"

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
