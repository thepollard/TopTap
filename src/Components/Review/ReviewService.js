import Parse from "parse";

export const createReview = (NewReview) => {
  const Review = Parse.Object.extend("Review");
  const review = new Review();
    review.set("review", NewReview);
    review.set("user", Parse.User.current());
    return review.save().then((result) => {
        return result;
    });
};