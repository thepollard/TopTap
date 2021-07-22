import React, { useEffect, useState } from "react";
import { createReview } from "./ReviewService.js";
import ReviewBox from "./ReviewBox.js";

//Tells the review box to use the createReview service when button is clicked
const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [text, setText] = useState();

  const [add, setAdd] = useState(false);

  useEffect(() => {
    if (text && add) {
      createReview(text).then((newReview) => {
        setAdd(false);
        setReviews([...reviews, newReview]);
      });
    }
  }, [text, reviews, add]);

  const onClickHandler = (e) => {
    e.preventDefault();
    setAdd(true);
    alert("Review Submitted!");
  };

  const onChangeHandler = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setText(e.target.value);
  };

  return (
    <div>
      <ReviewBox onClick={onClickHandler} onChange={onChangeHandler} />
    </div>
  );
};

export default ReviewList;
